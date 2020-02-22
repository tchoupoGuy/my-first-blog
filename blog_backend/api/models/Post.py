# from django.db import models
# from django.contrib import admin
# from django.utils import timezone


# class Post(models.Model):
#     title = models.CharField(max_length=100)
#     author = models.ForeignKey('auth.user', on_delete=models.CASCADE)
#     body = models.TextField()
#     created_date = models.DateTimeField(default=timezone.now)
#     published_date = models.DateTimeField(blank=True, null=True)

#     def publish(self):
#         self.published_date = timezone.now()
#         self.save()

#     def __str__(self):
#         return self.title


# class PostAdmin(admin.ModelAdmin):
#     search_fields = ('title', 'author', 'body',)
