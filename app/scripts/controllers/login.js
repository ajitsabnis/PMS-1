'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('LoginCtrl', ['$rootScope','$scope', '$location', 'loginService', 'localStorageService', 
    function ($rootScope,$scope,$location,loginService, localStorageService) {
    
    $scope.loginSubmit = function() {
    	var loginCredentials = {
    		user_login_name: $scope.user.username,
    		password: $scope.user.password
    	};
    	loginService.save(angular.toJson(loginCredentials), function(responce) {
            $scope.alerts = [];
            if (responce.status === "success") {
                $rootScope.isLogin = true;
                $rootScope.checkVisible = responce.user_detail.modules;
                $location.path('dashboard');
            }
            else  {
                $scope.alerts.push({msg: 'Invalid Username or password. Please try again', type:'danger'});
            }
    	});

    };

    $scope.$watch('isLogin', function () {
      localStorageService.set('isLogin', $rootScope.isLogin);
    }, true);

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(1, index);
        $scope.alerts = [];
    };

    function init() {
        $rootScope.isLogin = localStorageService.get('isLogin');
        if(!$rootScope.isLogin) {
            $location.path('login');
            return false;
        }
    }
    init();
  }]);