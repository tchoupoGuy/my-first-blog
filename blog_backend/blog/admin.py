from django.contrib import admin
from blog.models.Post import Post, PostAdmin


admin.site.register(Post, PostAdmin)
