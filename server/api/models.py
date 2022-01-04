from django.db import models

# Create your models here.
class User(models.Model):
    accountNumber = models.name = models.CharField(primary_key=True, max_length=10)
    userName = models.name = models.CharField(max_length=50)
    balance = models.name = models.FloatField(max_length=10)

class Transaction(models.Model):
    accountNumber = models.name = models.ForeignKey(User,on_delete=models.CASCADE)
    mode = models.name = models.CharField(max_length=20)
    type = models.name = models.CharField(max_length=20)
    txnId = models.name = models.CharField(max_length=10)
    amount = models.name = models.FloatField(max_length=10)
    narration = models.name = models.CharField(max_length=200)
    valueDate = models.name = models.CharField(max_length=20)
    balance = models.name = models.FloatField(max_length=10)

class Goal(models.Model):
    causeType = models.name = models.CharField(max_length=100)
    donationItem = models.name = models.CharField(primary_key=True,max_length=100)
    itemQuantity = models.name = models.CharField(max_length=10)
    itemPrice = models.name = models.CharField(max_length=10)