from django.urls import path
from blog.views import BloglistView, BlogDetailView


urlpatterns = [
    path('post/<int:pk>/', BlogDetailView.as_view(), name='post_detail'),
    path('', BloglistView.as_view(), name='home'),
]
