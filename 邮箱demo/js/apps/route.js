app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/mail-homepage',{
            templateUrl: "view/homeMail.html",
            controller: "showHomeController"
        })
        .when('/mail-writed',{
            templateUrl: "view/WritedMail.html",
            controller: "showWritedMailController",
        })
        .when('/mail-drafts',{
            templateUrl: "view/draftsMail.html",
            controller: "showDraftsController",
        })
        .otherwise({
            redirectTo: '/mail-homepage'
        });
}])