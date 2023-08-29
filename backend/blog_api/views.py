from .models import blog, category
from .serializers import blogSerializer, categorySerializer
from rest_framework import viewsets
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.response import Response

# Create your views here.


class blogApiView(viewsets.GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = blog.objects.all()
    serializer_class = blogSerializer
    lookup_field = 'slug'


class categoryApiView(viewsets.GenericViewSet,
                      ListModelMixin,
                      RetrieveModelMixin
                      ):
    queryset = category.objects.all()
    serializer_class = categorySerializer
    lookup_field = 'id'


class CategoryPostApiView(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        queryset = blog.objects.filter(category=pk)
        serializer = blogSerializer(queryset, many=True)
        return Response(serializer.data)
