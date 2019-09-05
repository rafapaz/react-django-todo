from django.urls import path
from . import views

urlpatterns = [    
    path('', views.get_items, name="items"),
    path('<int:pk>/', views.delete_item, name="delete_item"),
]