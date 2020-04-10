app.controller("showWritedMailController",['$scope',"$rootScope",function($scope,$rootScope){
   $scope.mailMsg = "";
   $scope.submitMsg = function(msg){
       $rootScope.mailMsg = msg;
       console.log(msg);
   } 
}])