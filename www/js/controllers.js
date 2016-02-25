angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})

.controller('userCtrl', function($scope,$http) {
	//$scope.working="It is working";
	$scope.user = {};     
	    $http.get(base_url+"/api/v1/users/").then(function(response) {
            $scope.users = response.data.data
        });
	    /*$scope.Manage_enterdata = function(user,UserInsertionForm){
	        $http.post(base_url+'api/v1/addusername', user).then(function(response){
	            $http.get(base_url+"/api/v1/users/").then(function(response) {
	                $scope.users = response.data.data
	            });
	            $scope.response = response.data.resp_msg;    
	            var errors ="";
	            for (var key in response.data.resp_error) {
	              errors += response.data.resp_error[key]+" ";
	            }
	            $scope.response_error = errors;
	            $scope.user.username =""; 

	        })
	    };    */
	
})     
 
.controller('orderMasterCtrl', function($scope) {

})
   
.controller('specialsCtrl', function($scope) {

})
   
.controller('categoriesCtrl', function($scope) {

})
   
.controller('unbilledTablesCtrl', function($scope) {

})
   
.controller('ordersCtrl', function($scope) {

})
   
.controller('categoryItemCtrl', function($scope) {

})
 