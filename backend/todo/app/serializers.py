from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import IntegerField
from .models import Category, Item


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ItemSerializer(ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)
    category_id = IntegerField(write_only=True)

    class Meta:
        model = Item
        fields = '__all__'
    