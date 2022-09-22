from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

urlpatterns = [
    path('user/index/', views.index, name='index'),
    path('user/notes/', views.getNotes, name='user-notes'),

    # path('user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]