from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=128)
    desc = models.CharField(max_length=512)

    def __str__(self):
        return self.name


class Item(models.Model):
    desc = models.CharField(max_length=512)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL, related_name='items')

    def __str__(self):
        return self.desc
