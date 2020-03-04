from rest_framework import viewsets,mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


from core.models import Post

from post import serializers



class PostViewSet(viewsets.GenericViewSet,mixins.ListModelMixin):
    """Manage post in the database"""
    authentication_classes=(TokenAuthentication,)
    permission_classes=(IsAuthenticated,) 
    queryset=Post.objects.all()
    serializer_class=serializers.PostSerializer


    def get_queryset(self):
        """Return objects for the current Authenticated user only"""
        return self.queryset.filter(user=self.request.user).other_by('-name')


