templateApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME PAGE ===========================================================
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html'
        })

        // LINK 1 ==============================================================
        .state('link_one', {
          url: '/link_one',
          templateUrl: '../views/link_one.html'
        })

        // LINK 1 ==============================================================
        .state('link_two', {
          url: '/link_two',
          templateUrl: '../views/link_two.html'
        });

}]);
