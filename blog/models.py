from django.db import models
from django.utils import timezone

# Create your models here.
class Blog(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    short_desc=models.CharField(max_length=300,default="")
    slug = models.CharField(max_length=100)
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

class Contact(models.Model):
    sno=models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    desc = models.TextField()
    time = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return "Name : " +self.name +" Email id : " + self.email
