from django.shortcuts import render
from .models import Product
from rest_framework import status
from rest_framework.views import APIView
from .serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework.decorators import permission_classes

from .service import Cart
from django.http import JsonResponse


class ProductView(APIView):
    def get(self,request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProductDetailView(APIView):
    def get(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({"detail": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
        


class ProductCreateView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def post(self, request):
        user = request.user
        data = request.data

        product = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
            "image_field": data["image_field"]
        }

        serializer = ProductSerializer(data=product, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class ProductDeleteView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            product= Product.objects.get(id=pk)
            product.delete()
            return Response({"detail": "Product successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)
        
class ProductEditView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, pk):
        data = request.data
        product = Product.objects.get(id=pk)

        updated_product = {
            "name": data["name"] if data["name"] else product.name,
            "description": data["description"] if data["description"] else product.description,
            "price": data["price"] if data["price"] else product.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else product.image,
            "image_field": data["image_field"] if data["image_field"] else product.image_field,
        }
        
        serializer = ProductSerializer(product, data=updated_product)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        


class CartAPIView(APIView):
    """
    Single API to handle cart operations
    """
    def get(self, request, format=None):
        cart = Cart(request)

        return Response(
            {"data": list(cart.__iter__()), 
            "cart_total_price": cart.get_total_price()},
            status=status.HTTP_200_OK
        )

    def post(self, request, **kwargs):
        cart = Cart(request)

        if "remove" in request.data:
            try:
                product_id = request.data.get("product_id")  #  Get the product ID from the request data
                if product_id is not None:
                    cart.remove(product_id)  # Pass product_id  instead of product dictionary
                    return self.get(request)  # Return updated  cart data
                else:
                    return Response({"error": "Product ID is    required"}, status=status. HTTP_400_BAD_REQUEST)
            except KeyError:
                return Response({"error": "Product ID is    required"}, status=status.HTTP_400_BAD_REQUEST)
   


        elif "clear" in request.data:
            cart.clear()  # Clear the cart
            return Response({"message": "Cart cleared"}, status=status.HTTP_200_OK)

        else:
            product = request.data
            if "quantity" in product:  # Check if 'quantity' key exists in the product dictionary
                cart.add(
                    product=product["product"],
                    quantity=product["quantity"],
                    overide_quantity=product.get("override_quantity", False)  # Correct typo: 'override_quantity'
                )
                return self.get(request)  # Return updated cart data
            else:
                return Response({"message": "Quantity is required"}, status=status.HTTP_400_BAD_REQUEST)
