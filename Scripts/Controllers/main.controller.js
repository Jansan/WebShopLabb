angular.module("webShopModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$route = $route;
            $scope.products = []; // data

            $scope.cartProducts = []; // this is cart product array...


            $scope.addToCart = function (product) {
                $scope.cartProducts.push(product);
                $scope.saveCartProducts();

            }

            $scope.loadProducts = function () {
                var dataString = localStorage.getItem("products");

                if (dataString)
                    $scope.products = JSON.parse(dataString);
            }
            // products saving
            $scope.saveProducts = function () {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }
            //cart products saving
            $scope.saveCartProducts = function () {
                var jsonStringCart = JSON.stringify($scope.cartProducts);
                localStorage.setItem("cartProducts", jsonStringCart);
            }
            //cart products loads
            $scope.loadCartProducts = function () {
                var dataStringCart = localStorage.getItem("cartProducts");

                if (dataStringCart)
                    $scope.cartProducts = JSON.parse(dataStringCart);
            }

            $scope.loadProducts();

            $scope.loadCartProducts();

        	$scope.go = function (url) {
        		$location.path(url);
        	}
        }
    ]);