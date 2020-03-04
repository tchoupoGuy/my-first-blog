from rest_framework import serializers
from core.models import Post



class PostSerializer(serializers.ModelSerializer):
    """Serializer for post objects"""

    class Meta:
        model=Post
        fields=('id','title','text','created_date','published_date')
        read_only_fields=('id',)
