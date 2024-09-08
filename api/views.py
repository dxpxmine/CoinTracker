from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(["GET"])
def get_data(request):
    data = {
        "message": "message from django"
    }

    return Response(data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def check_autharization(request):
    return Response({"message": "You are authenticated!"})