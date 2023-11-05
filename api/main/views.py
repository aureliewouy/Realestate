from django.shortcuts import render
from rest_framework import generics, status
from .serializers import MainSerializer
from .models import Main
from rest_framework.views  import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.apps import apps
from rest_framework import status
from rest_framework.exceptions import ValidationError
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
    try:
        serializer = MainSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except ValidationError as error:
        return Response({'error': error.detail}, status=400)

@api_view(['POST'])
def realestateUpdate(request, pk):
	try:
		realestate = Main.objects.get(id=pk)
		serializer = MainSerializer(instance=realestate, data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()

		return Response(serializer.data, status=status.HTTP_200_OK)
	except ValidationError as error:
		return Response({'error': error.detail}, status=400)


@api_view(['DELETE'])
def realestateDelete(request, pk):
	realestate = Main.objects.get(id=pk)
	realestate.delete()

	return Response('Post successfully deleted!')
