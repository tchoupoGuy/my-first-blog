from django.views.generic import ListView, DetailView
from django.shortcuts import render
from blog.models.Post import Post


class BloglistView(ListView):
    model = Post
    template_name = 'home.html'


class BlogDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'
