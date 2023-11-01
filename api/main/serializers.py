from rest_framework import serializers
from .models import Main

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = '__all__'

class CreateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = ('title', 'address', 'transaction_type', 'realty_type')