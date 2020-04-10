app.controller("mainController",['$scope',function($scope){
    var lias = document.querySelectorAll("li>a");
    for (let i = 0;i<lias.length;i++){
        lias[i].onclick =function(){
            var activea =document.querySelector("li>a[class=active]");
            activea.classList.remove("active");
            this.classList.add("active");
        }
    }
}])