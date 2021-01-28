from django.contrib import admin
from .models import Asset

#
class AssetAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'x', 'y')

# Register your models here.
admin.site.register(Asset, AssetAdmin)
