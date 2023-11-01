from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('realestate-list/', views.realestateList, name="realestate-list"),
	path('realestate-detail/<str:pk>/', views.realestateDetail, name="realestate-detail"),
	path('realestate-create/', views.realestateCreate, name="realestate-create"),
	path('realestate-update/<str:pk>/', views.realestateUpdate, name="realestate-update"),
	path('realestate-delete/<str:pk>/', views.realestateDelete, name="realestate-delete"),
]
