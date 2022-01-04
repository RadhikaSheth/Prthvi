from django.urls import path
from . import views

urlpatterns = [
    path('consent', views.createConsent.as_view()),
    path('Consent/Notification', views.consentNotification.as_view()),
    path('viewTransaction', views.viewTxn.as_view()),
    path('get1per', views.get1per.as_view()),
    path('getGoal', views.getGoal.as_view()),
    path('editGoal',views.editGoal.as_view()),
    path('viewUser', views.viewUserData.as_view()),
]
