from user.models import User
from rest_framework import serializers, viewsets

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']

# class UserViewSet(viewsets.ModelViewSet):
