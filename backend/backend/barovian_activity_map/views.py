from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AssetSerializer, EventTypeSerializer, EventSerializer
from .models import Asset, EventType, Event

#
class AssetView(viewsets.ModelViewSet):
    serializer_class = AssetSerializer
    queryset = Asset.objects.all()

#
class EventTypeView(viewsets.ModelViewSet):
    serializer_class = EventTypeSerializer
    queryset = EventType.objects.all()

#
class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
