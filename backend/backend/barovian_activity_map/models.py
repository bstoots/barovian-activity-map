from django.db import models

#
class Asset(models.Model):
  name = models.CharField(max_length=200)
  description = models.TextField()
  x = models.IntegerField(default=False)
  y = models.IntegerField(default=False)

  def _str_(self):
    return self.name

#
class EventType(models.Model):
  event_type_id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200)
  description = models.TextField()

  def _str_(self):
    return self.name

#
class Event(models.Model):
  event_id = models.AutoField(primary_key=True)
  event_type_id = models.ForeignKey(EventType, models.RESTRICT)
  name = models.CharField(max_length=200)
  description = models.TextField()
  x = models.IntegerField(default=False)
  y = models.IntegerField(default=False)
  created = models.DateTimeField(auto_now_add=True)

  def _str_(self):
    return self.name
