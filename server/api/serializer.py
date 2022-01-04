
from django.db.models import fields
from rest_framework import serializers
from .models import User, Transaction, Goal


class UserSerializer (serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
    def update(self, instance, validated_data):
        instance.accountNumber = validated_data.get('accountNumber', instance.accountNumber)
        instance.userName = validated_data.get('userName', instance.userName)
        instance.balance = validated_data.get('balance', instance.balance)
        instance.save()
        return instance

    # accountNumber = serializers.CharField(max_length=10)
    # userName = serializers.CharField(max_length=50)
    # balance = serializers.FloatField()

    # def create(self, validated_data):
    #     return User(**validated_data)

    # def update(self, instance, validated_data):
    #     instance.accountNumber = validated_data.get('accountNumber', instance.accountNumber)
    #     instance.userName = validated_data.get('userName', instance.userName)
    #     instance.balance = validated_data.get('balance', instance.balance)
    #     instance.save()
    #     return instance


class TransactionSerializer(serializers.Serializer):
    accountNumber = serializers.CharField(max_length=10)
    mode = serializers.CharField(max_length=20)
    type = serializers.CharField(max_length=20)
    txnId = serializers.CharField(max_length=10)
    amount = serializers.FloatField()
    narration = serializers.CharField(max_length=200)
    valueDate = serializers.CharField(max_length=20)
    balance = serializers.FloatField()

    def create(self, validated_data):
        return Transaction(**validated_data)

    def update(self, instance, validated_data):
        instance.accountNumber = validated_data.get(
            'accountNumber', instance.accountNumber)
        instance.mode = validated_data.get('mode', instance.mode)
        instance.type = validated_data.get('type', instance.type)
        instance.txnId = validated_data.get('txnId', instance.txnId)
        instance.amount = validated_data.get('amount', instance.amount)
        instance.narration = validated_data.get(
            'narration', instance.narration)
        instance.valueDate = validated_data.get('type', instance.valueDate)
        instance.balance = validated_data.get('type', instance.balance)
        return instance


# class GoalSerializer(serializers.Serializer):

#     causeType = serializers.CharField(max_length=100)
#     donationItem = serializers.CharField(max_length=100)
#     itemQuantity = serializers.CharField(max_length=10)
#     itemPrice = serializers.CharField(max_length=10)

#     def create(self, validated_data):
#         return Goal(**validated_data)

#     def update(self, instance, validated_data):
#         instance.causeType = validated_data.get('causeType',instance.causeType)
#         instance.donationItem = validated_data.get('donationItem',instance.donationItem)
#         instance.itemQuantity = validated_data.get('itemQuantity',instance.itemQuantity)
#         instance.itemPrice = validated_data.get('itemPrice',instance.itemPrice)
#         return instance

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        fields =(
            'causeType',
            'donationItem',
            'itemQuantity',
            'itemPrice'
        )
        model = Goal