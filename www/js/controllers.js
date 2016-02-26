angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})

.controller('usersCtrl', function($scope,$http,$ionicListDelegate,$ionicPopup) {
	$scope.user = {};     
	$http.get(base_url+"/api/v1/users/").then(function(response) {
        $scope.users = response.data.data
    });	
    /* Delete method */
        $scope.deleteUser = function(userID,index) {
            var confirmDelete = $ionicPopup.confirm({
             title: 'Delete Confirmation',
             template: 'Are you sure you want to delete?'
            });
            confirmDelete.then(function(res) {
             if(res) {
                $http.delete(base_url+"api/v1/deleteuser/"+userID);
                $scope.users.splice(index, 1); //instantly removes item
                $ionicListDelegate.closeOptionButtons(); //hide the guesture after action   
             }else{
                $ionicListDelegate.closeOptionButtons(); //hide the guesture on prompt cancel
             } 
           });
        }
    /* Delete method */
}) 
.controller('userCtrl', function($scope,$http) {
	 $scope.Manage_userdata = function(user,UserInsertionForm){
	     $http.post(base_url+'api/v1/addusername', user).then(function(response){
	         $scope.response = response.data.resp_msg;   
             $scope.user = '';
	     })
	 };    
})

.controller('userformCtrl', function($scope) {

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
 