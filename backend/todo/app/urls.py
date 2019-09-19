from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [    
    path('', views.get_items, name="items"),
    path('categories/', views.get_categories, name="categories"),
    path('<int:pk>/', views.delete_item, name="delete_item"),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]