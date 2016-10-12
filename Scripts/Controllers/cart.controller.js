angular.module("webShopModule")
    .controller("CartController", [
        "$scope",
        function ($scope) {
            $scope.title = "Shopping Cart";

           
            $scope.removeCart = function (index) {
                $scope.cartProducts.splice(index, 1);
                alert("Products will be deleted");
                $scope.saveCartProducts();
            }

            

            
        }
    ]);