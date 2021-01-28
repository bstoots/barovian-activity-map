from django.db import models

#
class Asset(models.Model):
  name = models.CharField(max_length=200)
  description = models.TextField()
  x = models.IntegerField(default=False)
  y = models.IntegerField(default=False)

  def _str_(self):
    return self.name
