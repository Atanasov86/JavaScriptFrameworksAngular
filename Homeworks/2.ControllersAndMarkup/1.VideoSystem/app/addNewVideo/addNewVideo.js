'use strict';

angular.module('videoSystem.addNewVideo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addNewVideo', {
    templateUrl: 'app/addNewVideo/addNewVideo.html',
    controller: 'addNewVideoController'
  });
}])

.directive('required', function () {
        return {
            restrict: 'A',
            compile: function (element) {
                element.after("<span class='required'>*</span>")
            }
        }
    })

.controller('addNewVideoController', 
            ['$scope', 'dataService', '$window' , function($scope, dataService, $window) {
    $scope.addNewVideo = function(video) {
            dataService.addNewVideo(video);
            $window.location.href = '#/home';
        };
}]);