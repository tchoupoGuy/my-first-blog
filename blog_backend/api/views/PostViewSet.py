# from django.views.generic import ListView, DetailView
# from rest_framework import viewsets
# from rest_framework.response import Response
# from rest_framework import status
# from django.shortcuts import render
# from api.serializers.PostSerializer import PostSerializer
# from api.models.Post import Post


# class PostViewSet(viewsets.ViewSet):

#     def retrieve(self, request):
#         """
#          Retrieve all the users
#          :return: Message and status code
#          """
#         post = Post.objects.all()
#         post_serializer = PostSerializer(post, many=True)

#         return Response(post_serializer.data, status=status.HTTP_200_OK)
# # class BloglistView(ListView):
# #     model = Post
# #     template_name = 'home.html'


# # class BlogDetailView(DetailView):
# #     model = Post
# #     template_name = 'post_detail.html'
# post = PostViewSet.as_view({
#     'get': 'retrieve'
#     # 'get': 'show_post',
# })
