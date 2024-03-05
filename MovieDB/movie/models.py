from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_active = models.BooleanField(default = True)

    class Meta:
        abstract = True

class Genre(BaseModel):
    name = models.CharField(max_length = 200)

    def __str__(self) -> str:
        return self.name.title()

class Movie(BaseModel):
    class Language(models.TextChoices):
        arabic = 'AR', _('Arabic')
        english = 'EN', _('English')
        french = 'FR', _('French')

    title = models.CharField(max_length=200)
    laguage = models.CharField(max_length=2, choices=Language.choices)
    cover = models.URLField()
    trailer = models.URLField()
    release_year = models.IntegerField()
    director = models.CharField(max_length=200)
    box_office = models.FloatField()
    in_theater = models.BooleanField()
    genre = models.ManyToManyField(Genre)
    synopsis = models.CharField(max_length=2500)

    def __str__(self) -> str:
        return self.title.title()

