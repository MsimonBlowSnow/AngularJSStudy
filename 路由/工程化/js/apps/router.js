app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/showname',{
            templateUrl: 'view/showname.html', //根据index.html的为基路径
            controller: 'showNameController'
        })
        .when('/showinfo',{
            templateUrl: 'view/showinfo.html',
            controller: 'showInfoController'
        })
        .otherwise({
            redirectTo: '/showname'
        });
}]);
