# barovian_activity_map/serializers.py

from rest_framework import serializers
from .models import Asset, EventType, Event

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = ('id', 'name', 'description', 'x', 'y')

class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = ('event_type_id', 'name', 'description')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = ('event_type_id', 'name', 'description')
