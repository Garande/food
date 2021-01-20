from django.urls import path
from . import views

urlpatterns = [
    path('api/categories/', views.CategoryListView.as_view()),
    path('api/foods/', views.FoodItemListView.as_view()),
]
