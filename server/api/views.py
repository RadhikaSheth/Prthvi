import json
from django.shortcuts import render
from requests.api import request
from rest_framework import serializers
from rest_framework.response import Response
import codecs
import requests
import jwt
import uuid
from datetime import datetime
import time
from django.views import View
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
import requests
import logging
import base64
from http.client import HTTPConnection  # py3
from .serializer import UserSerializer, TransactionSerializer, GoalSerializer
from .models import User, Transaction, Goal
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveUpdateAPIView


class createConsent(APIView):

    def post(self, request):
        mobileNumber = request.data.get("mobile")
        body = createData(mobileNumber)
        privateKey = codecs.open(
            "/home/radhika/hfi/prthvi/server/api/keys/private_key.pem", encoding="utf-8").read()
        detachedJWS = makeDetachedJWS(privateKey, body)
        url = "https://aa-sandbox.setu.co/Consent"
        headers = {
            "Content-Type": "application/json",
            "client_api_key": "bac41217-a584-4f79-bd79-5285adb61037",
            "x-jws-signature": detachedJWS,
        }
        response = requests.post(url, headers=headers, json=body)
        response = response.json()
        resUrl = "https://anumati.setu.co/" + response["ConsentHandle"] + \
            "?redirect_url=http://484c-103-250-137-194.ngrok.io/redirect/"
        return Response(resUrl)


class consentNotification(APIView):
    def post(self, request):
        consentId = request.data.get(
            "ConsentStatusNotification").get("consentId")
        consentStatus = request.data.get(
            "ConsentStatusNotification").get("consentStatus")
        if consentStatus == "ACTIVE":
            fetchSignedConsent(consentId)
        dateNow = datetime
        res = {
            "ver": "1.0",
            "timestamp": dateNow.now().strftime("%Y-%m-%dT%H:%M:%S.000Z"),
            "txnid": str(uuid.uuid4()),
            "response": "OK",
        }
        return Response(res)


def createData(mobileNumber):
    dateNow = datetime
    expiry = time.time()
    data = {
        "ver": "1.0",
        "timestamp": dateNow.now().strftime("%Y-%m-%dT%H:%M:%S.000Z"),
        "txnid": str(uuid.uuid4()),
        "ConsentDetail": {
            "consentStart": dateNow.now().strftime("%Y-%m-%dT%H:%M:%S.000Z"),
            "consentExpiry": "2021-12-03T14:25:33.440Z",
            "consentMode": "VIEW",
            "fetchType": "ONETIME",
            "consentTypes": ["TRANSACTIONS", "PROFILE", "SUMMARY"],
            "fiTypes": ["DEPOSIT", "MUTUAL_FUNDS"],
            "DataConsumer": {"id": "1fbad2f2-ce8c-4127-b24b-df360f57b06c"},
            "Customer": {"id": mobileNumber + "@setu-aa"},
            "Purpose": {
                "code": "101",
                "refUri": "https://api.rebit.org.in/aa/purpose/101.xml",
                "text": "Wealth management service",
                "Category": {"type": "string"},
            },
            "FIDataRange": {
                "from": "2021-1-06T11:39:57.153Z",
                "to": "2021-06-30T14:25:33.440Z",
            },
            "DataLife": {"unit": "MONTH", "value": 0},
            "Frequency": {"unit": "MONTH", "value": 100},
            "DataFilter": [
                {
                    "type": "TRANSACTIONAMOUNT",
                    "operator": ">=",
                    "value": "0",
                },
            ],
        },
    }
    return data


def makeDetachedJWS(privateKey, body):

    encoded = jwt.encode(body, privateKey, algorithm="RS256")
    encoded = encoded.split(".")
    encoded[1] = ""
    return ".".join(encoded)


def fetchSignedConsent(consentId):
    privateKey = codecs.open(
        "/home/radhika/hfi/prthvi/server/api/keys/private_key.pem", encoding="utf-8").read()
    detachedJWS = makeDetachedJWS(privateKey, {"Consent": consentId})
    url = "https://aa-sandbox.setu.co/Consent/" + consentId
    headers = {
        "Content-Type": "application/json",
        "client_api_key": "bac41217-a584-4f79-bd79-5285adb61037",
        "x-jws-signature": detachedJWS,
    }
    response = requests.get(url, headers=headers)
    response = response.json()
    fiDataRequest(response["signedConsent"], consentId)


def fiDataRequest(signedConsent, consentId):
    keys = generateKeyMaterial()
    requestBody = requestDataBody(
        signedConsent, consentId, keys["KeyMaterial"])
    privateKey = codecs.open(
        "/home/radhika/hfi/prthvi/server/api/keys/private_key.pem", encoding="utf-8").read()
    detachedJWS = makeDetachedJWS(privateKey, requestBody)
    url = "https://aa-sandbox.setu.co/FI/request"
    headers = {
        "Content-Type": "application/json",
        "client_api_key": "bac41217-a584-4f79-bd79-5285adb61037",
        "x-jws-signature": detachedJWS,
    }
    data = requestBody
    response = requests.post(url, headers=headers, json=data)
    response = response.json()
    fiDataFetch(response["sessionId"],
                keys["privateKey"], keys["KeyMaterial"])


def generateKeyMaterial():
    url = "https://rahasya.setu.co/ecc/v1/generateKey"
    response = requests.get(url)
    response = response.json()
    return response


def requestDataBody(signedConsent, consent_id, keys):
    dateNow = datetime
    data = {
        "ver": "1.0",
        "timestamp": dateNow.now().strftime("%Y-%m-%dT%H:%M:%S.000Z"),
        "txnid": str(uuid.uuid4()),
        "FIDataRange": {
            "from": "2021-1-06T11:39:57.153Z",
            "to": "2021-06-30T14:25:33.440Z",
        },

        "Consent": {
            "id": consent_id,
            "digitalSignature": signedConsent.split(".")[2],
        },
        "KeyMaterial": keys,
    }
    return data


def fiDataFetch(session_id, encryption_privateKey, keyMaterial):
    privateKey = codecs.open(
        "/home/radhika/hfi/prthvi/server/api/keys/private_key.pem", encoding="utf-8").read()
    detachedJWS = makeDetachedJWS(privateKey, {"a": "b"})
    url = "https://aa-sandbox.setu.co/FI/fetch/" + session_id
    headers = {
        "Content-Type": "application/json",
        "client_api_key": "bac41217-a584-4f79-bd79-5285adb61037",
        "x-jws-signature": detachedJWS,
    }
    response = requests.get(url, headers=headers)
    response = response.json()
    decryptData(response["FI"], encryption_privateKey, keyMaterial)


def decryptData(fi, privateKey, keyMaterial):
    fi_data = fi[0]
    body = {
        "base64Data": fi_data["data"][0]["encryptedFI"],
        "base64RemoteNonce": fi_data["KeyMaterial"]["Nonce"],
        "base64YourNonce": keyMaterial["Nonce"],
        "ourPrivateKey": privateKey,
        "remoteKeyMaterial": fi_data["KeyMaterial"],
    }
    url = "https://rahasya.setu.co/ecc/v1/decrypt"
    data = body
    response = requests.post(url, json=data)
    response = response.json()
    base64Data = response["base64Data"]
    b64_str = base64Data.encode('ascii')
    b64_bytes = base64.b64decode(b64_str)
    data = b64_bytes.decode('ascii')
    data = json.loads(data)

    print("LALALALlalalallALLA")
    print(data)

    if User.objects.filter(accountNumber = data["account"]["maskedAccNumber"]).exists():
        ###Update User###
        user = User.objects.get(accountNumber = data["account"]["maskedAccNumber"])
        user.userName = data["account"]["profile"]["holders"]["holder"]["name"]
        user.balance = data["account"]["summary"]["currentBalance"]
        user.save()
    else:
        ###Create User###
        accountData = {
            "accountNumber": data["account"]["maskedAccNumber"],
            "userName": data["account"]["profile"]["holders"]["holder"]["name"],
            "balance": data["account"]["summary"]["currentBalance"]
        }
        serializer = UserSerializer(data=accountData)
        if serializer.is_valid():
            serializer.save()
            
    for i in data["account"]["transactions"]["transaction"]:
        
        if Transaction.objects.filter(accountNumber = data["account"]["maskedAccNumber"]).exists():
            ###Update Transaction###
            txn = Transaction.objects.get(accountNumber = data["account"]["maskedAccNumber"])
            txn.mode = i["mode"]
            txn.type = i["type"]
            txn.txnId = i["txnId"]
            txn.amount = i["amount"]
            txn.narration = i["narration"]
            txn.valueDate = i["valueDate"]
            txn.balance = i["currentBalance"]
            txn.save()
        else:
            ###Create Transaction###
            transactionData = {
                "accountNumber": data["account"]["maskedAccNumber"],
                "mode": i["mode"],
                "type": i["type"],
                "txnId": i["txnId"],
                "amount": i["amount"],
                "narration": i["narration"],
                "valueDate": i["valueDate"],
                "balance": i["currentBalance"]
            }
            serializer = TransactionSerializer(data=transactionData)
            if serializer.is_valid():
                serializer.save()

class viewTxn(APIView):
    def get(self, request):
        queryset = Transaction.objects.all().values()
        array = []
        for i in queryset:
            if i["valueDate"].split("-")[1] == "06" and i["type"] == "DEBIT":
                array.append(i)
        return Response(array)


class get1per(APIView):

    def get(self, request):
        txn = Transaction.objects.filter(
            valueDate="2021-06-08").values("amount")[0]["amount"]
        txn = txn/100
        return Response(txn)


class getGoal(ListAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer

class editGoal(APIView):
    def put(self,request):
        CauseType = request.data.get('causeType')
        DonationItem = request.data.get('donationItem')
        ItemQuantity = request.data.get('itemQuantity')
        ItemPrice = request.data.get('itemPrice')
        if Goal.objects.filter(donationItem = DonationItem).exists():
            ###Update Goal###
            goal = Goal.objects.get(donationItem = DonationItem)
            goal.causeType = CauseType
            goal.itemQuantity = ItemQuantity
            goal.itemPrice = ItemPrice
            goal.save()
        else:
            ###Create Goal###
            goalData = {
                "causeType": CauseType,
                "donationItem": DonationItem,
                "itemQuantity": ItemQuantity,
                "itemPrice": ItemPrice,
            }
            serializer = GoalSerializer(data=goalData)
            if serializer.is_valid():
                serializer.save()
        return Response()

class viewUserData(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer