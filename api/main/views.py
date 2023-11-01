from django.shortcuts import render
from rest_framework import generics, status
from .serializers import MainSerializer
from .serializers import CreateListSerializer
from .models import Main
from rest_framework.views  import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.apps import apps

from rest_framework.decorators import api_view

# Create your views here.

#Function Based Views

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/realestate-list/',
		'Detail View':'/realestate-detail/<str:pk>/',
		'Create':'/realestate-create/',
		'Update':'/realestate-update/<str:pk>/',
		'Delete':'/realestate-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def realestateList(request):
	realestates = Main.objects.all().order_by('id')
	serializer = MainSerializer(realestates, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def realestateDetail(request, pk):
	realestates = Main.objects.get(id=pk)
	serializer = MainSerializer(realestates, many=False)
	return Response(serializer.data)

@api_view(['POST'])
def realestateCreate(request):
	serializer = MainSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def realestateUpdate(request, pk):
	realestate = Main.objects.get(id=pk)
	serializer = MainSerializer(instance=realestate, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def realestateDelete(request, pk):
	realestate = Main.objects.get(id=pk)
	realestate.delete()

	return Response('Post successfully deleted!')

#Class-based Views

# class MainListView(generics.ListAPIView):
#     queryset = Main.objects.all()
#     print(Main.objects)
#     serializer_class = MainSerializer
#     def get(self, request, format=None):
#         titles = [Main.title for main in Main.objects.all()]
#         return Response(titles)

# class MainCreateView(generics.CreateAPIView):
#     serializer_class = CreateListSerializer
#     def post(self, request, format=None):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             print(serializer.data)
#             title = serializer.data['title']
#             address = serializer.data['address']
#             transaction_type = serializer.data['transaction_type']
#             realty_type = serializer.data['realty_type']
#             queryset = Main.objects.filter(address=address)
#             if not queryset.exists():
#                 main = Main(title=title, address=address, transaction_type=transaction_type, realty_type=realty_type)
#                 main.save()
#             return Response(MainSerializer(main).data, status=status.HTTP_201_CREATED)
#         return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# class MainUpdateView(generics.UpdateAPIView):
#     model = Main
#     fields = ["title"]
#     serializer_class = MainSerializer