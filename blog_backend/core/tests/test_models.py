from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models

def simple_user(email='guygrad4@gmail.com',password="Guygrad4123"):
    """Create a simple user"""
    return get_user_model().objects.create_user(email,password)

class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        """Test creating a new user an email successful"""
        email = 'test@guycoop.com'
        password = 'testPass123'
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))
    
    def test_new_user_email_normalized(self):
        """Test the email for a new normalized"""
        email = 'test@GUYCOOP.COM'
        user = get_user_model().objects.create_user(email, 'test123')
        
        self.assertEqual(user.email, email.lower())

    def test_new_user_invalid_email(self):
        """Test creating user with no email raises error"""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'test123')
        
    def test_create_new_superuser(self):
        """Test creating a new superuser"""
        user = get_user_model().objects.create_superuser(
            'test@guycoop.com',
            'test123'
        )

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_post_str(self):
        """Test the post string representation"""
        my_post=models.Post.objects.create(
            user=simple_user(),
            title='Leaning django rest framework',
            text='this is the greet tutorial to learn django',
            created_date='2020-02-28',
            published_date='2020-02-28'
        )

        self.assertEqual(str(my_post),my_post.title)
