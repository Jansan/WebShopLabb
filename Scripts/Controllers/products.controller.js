angular.module("webShopModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Products";
            $scope.newProducts = {
                name: "",
                image: "",
                price: "",
                description: ""
            };

            $scope.addProduct = function () {
                $scope.newProducts.id = Date.now();
                $scope.products.push($scope.newProducts);
                $scope.newProducts = {};
                $scope.saveProducts();
            }
            $scope.removeProduct = function (index) {
                $scope.products.splice(index, 1);
                alert("Products will be deleted");
                $scope.saveProducts();
            }

        }
    ]);