from django.urls import path, include
from .views import blogApiView, categoryApiView, CategoryPostApiView
from rest_framework import routers

router = routers.SimpleRouter()
router.register('posts', blogApiView, basename='posts')
router.register('category', categoryApiView, basename='category')
router.register('categoryBasedPosts', CategoryPostApiView,
                basename='categoryBasedPosts')

urlpatterns = [
    path('', include(router.urls))
]
