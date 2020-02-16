from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
urlpatterns = [
    path('', HttpResponse),
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls'))
]
