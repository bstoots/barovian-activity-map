from django.contrib import admin
from .models import Asset, EventType, Event

#
class AssetAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'x', 'y')

#
class EventTypeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

#
class EventAdmin(admin.ModelAdmin):
    list_display = (
        'event_type_id',
        'name',
        'description',
        'x',
        'y',
        'created'
    )

# Register your models here.
admin.site.register(Asset, AssetAdmin)
admin.site.register(EventType, EventTypeAdmin)
admin.site.register(Event, EventAdmin)
