from django.shortcuts import render

from .models import Category, Food_Item
from .serializers import CategorySerializer, FoodItemSerializer
from rest_framework import generics, viewsets, permissions

# Create your views here.
class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class FoodItemListView(generics.ListCreateAPIView):
    queryset = Food_Item.objects.all()
    serializer_class = FoodItemSerializer