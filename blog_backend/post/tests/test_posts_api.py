from django.contrib.auth import get_user_model
from django.urls import reverse
from django.test import TestCase


from rest_framework import status
from rest_framework.test import APIClient

from core.models import Post
from post.serializers import PostSerializer

POSTS_URL=reverse('post:post-list')



class PublicPostApiTests(TestCase):
    """Test the public list available post API"""


    def setUp(self):
        self.client=APIClient()


    def test_login_required(self):
        """Test that login is required for retrieving tags"""
        res=self.client.get(POSTS_URL)

        self.assertEqual(res.status_code,status.HTTP_401_UNAUTHORIZED)

class PrivatePostsApiTests(TestCase):
    """Test the authorised user posts API"""

    def setUp(self):
        self.user=get_user_model().objects.create_user(
            'test@guycoop.com',
            'password123'
        )
        self.client=APIClient()
        self.client.force_authenticate(self.user)

    def test_retrieve_posts(self):
        """Test retrieve posts"""
        Post.objects.create(user=self.user,title='python',text='I love that language',created_date='2020-02-15',published_date='2020-02-28')
        Post.objects.create(user=self.user,title='python',text='I love that language',created_date='2020-02-28',published_date='2020-02-28')

        res=self.client.get(POSTS_URL)

        posts = Post.objects.all().order_by('-created_date')
        serializer=PostSerializer(posts,many=True)
        self.assertEqual(res.status_code,status.HTTP_200_OK)
        self.assertEqual(res.data,serializer.data)

    def test_posts_linited_to_user(self):
        """Test that posts returned are for the authenticated user"""
        self.user2=get_user_model().objects.create_user(
            'other@guy.com',
            'testpass'
        )
        Post.objects.create(user2=self.user,title='javascript',text='I love that language',created_date='2020-01-15',published_date='2020-01-22')
        post= Post.objects.create(user=self.user,title='java',text='I love that language',created_date='2020-02-06',published_date='2020-02-10')

        res=self.client.get(POSTS_URL)

        self.assertEqual(res.status_code,status.HTTP_200_OK)
        self.assertEqual(len(res.data),1)
        self.assertEqual(res.data[0]['title'],post.title)