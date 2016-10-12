angular.module("webShopModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"

                })
            .when("/Products", {

                templateUrl: "Views/Products.html",
                controller: "ProductsController",
                caseInsensitiveMatch: true,
                activeTab: "Products"

            })
             .when("/Product/Detail/:id", {

                 templateUrl: "Views/ProductDetails.html",
                 controller: "ProductController",
                 caseInsensitiveMatch: true,
                 activeTab: "Products"

             })
            .when("/Cart", {
                templateUrl: "Views/Cart.html",
                controller: "CartController",
                caseInsensitiveMatch: true,
                activeTab: "Cart"
            })
            .otherwise({
                redirectTo: ("/")
            });

        }
    ]);