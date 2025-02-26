from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    description= models.TextField(blank=True)
    price= models.DecimalField(max_digits=10, decimal_places=2)
    stock= models.BooleanField(default=False)
    image = models.ImageField(null=True, blank=True)
    image_field = models.URLField(max_length = 200, null=True, blank=True) 

    def __str__(self):
        return self.name

