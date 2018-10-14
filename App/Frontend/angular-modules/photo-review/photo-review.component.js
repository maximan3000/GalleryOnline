'use strict';

angular.
  module('photoReview').
  component('photoReview', {
    templateUrl: 'angular-modules/photo-review/photo-review.template.html',
    controller: function PhotoReviewController($scope, $rootScope, $http) {
      $scope.photoArr = [];

      $http.get($rootScope.showServiceUrl)
        .then(function(data) {
          $scope.photoArr = data.data;
          $rootScope.mainImageUrl = $scope.photoArr[0].source;
          $rootScope.mainImageName = $scope.photoArr[0].name;

        }, 
        function(data) {
          alert("ERROR - ShowService.php bad answer!");
        }
      );

      $scope.clickPhoto = function(photoUrl, photoName) {
      	$rootScope.mainImageUrl = photoUrl;
        $rootScope.mainImageName = photoName;
      };

    }
  });