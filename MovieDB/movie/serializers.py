from django.urls import path, include
from movie.models import Movie, Genre
from rest_framework import serializers, viewsets

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id','name']

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class MovieDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        exclude = ('created_at', 'updated_at', 'is_active')


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        # fields = '__all__'
        exclude = ('created_at', 'updated_at', 'is_active')

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.filter(is_active=True)[0:7]
    serializer_class = MovieSerializer

class InTheaterViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.filter(in_theater=True, is_active=True)
    serializer_class = MovieSerializer

class MovieDetailsViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieDetailsSerializer
