from rest_framework.serializers import ModelSerializer
from .models import Category, Item


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ItemSerializer(ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)

    class Meta:
        model = Item
        fields = '__all__'
