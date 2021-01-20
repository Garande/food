from rest_framework import serializers
from .models import Category, Food_Item

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food_Item
        fields = '__all__'