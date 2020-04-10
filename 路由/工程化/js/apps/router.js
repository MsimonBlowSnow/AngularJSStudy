var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/showname',{
            templateUrl: 'views/showname.html', //根据index.html的为基路径
            controller: 'showNameController'
        })
        .when('/showinfo',{
            templateUrl: 'views/showinfo.html',
            controller: 'showInfoController'
        })
        .otherwise({
            redirectTo: '/showname'
        });
}]);
