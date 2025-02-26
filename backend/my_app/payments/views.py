import logging, json

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from account.serializers import MpesaCheckoutSerializer
from .access_token import MpesaGateway

gateway = MpesaGateway()

from product.models import Product

logger = logging.getLogger(__name__)  # Create logger instance

@authentication_classes([])
@permission_classes((AllowAny,))
class MPesaCheckout(APIView):
    serializer_class = MpesaCheckoutSerializer

    def post(self, request, *args, **kwargs):
        product_id = kwargs.get('id')  # Get product ID from URL parameters
        logger.info("Received payload: {}".format(request.data))
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({"detail": "Product not found"}, status=404)
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            payload = {
                "data": serializer.validated_data,
                "product": product,  # Pass the product object to the payload
                "request": request
            }
            res = gateway.stk_push_request(payload)
            return Response(res)

@authentication_classes([])
@permission_classes((AllowAny,))
class MpesaCallBack(APIView):
    def get(self, request):
        return Response({"status": "OK"}, status=200)
    
    def post(self, request, *args, **kwargs):
        logging.info("{}".format("Callback from MPESA"))
        data = request.body
        return gateway.callback(json.loads(data))