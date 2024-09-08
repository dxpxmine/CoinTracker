from django.urls import path
from .views import get_data, check_autharization

urlpatterns = [
    path('get-data/', get_data),
    path('check_autharization/', check_autharization),
]
