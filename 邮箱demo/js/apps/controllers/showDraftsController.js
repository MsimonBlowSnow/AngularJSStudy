app.controller('showDraftsController',['$scope','$rootScope',function($scope,$rootScope){
   $scope.draftsTitle = "草稿箱";
   $scope.mailMsg = $rootScope.mailMsg;
}])