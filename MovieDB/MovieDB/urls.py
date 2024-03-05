from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from movie.serializers import GenreViewSet, MovieViewSet, InTheaterViewSet, MovieDetailsViewSet

router = routers.DefaultRouter()
router.register(r'genres', GenreViewSet)
router.register(r'movies', MovieViewSet)
router.register(r'movie', MovieDetailsViewSet)
router.register(r'in_theater', InTheaterViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
     path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns += router.urls