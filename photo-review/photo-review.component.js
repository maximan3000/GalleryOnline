'use strict';

angular.
  module('photoReview').
  component('photoReview', {
    templateUrl: 'photo-review/photo-review.template.html',
    controller: function PhotoReviewController($scope, $rootScope, $http) {
      $scope.photoArr = [];

      $http.get("http://grazsite.000webhostapp.com/Server/ShowService.php")
        .then(function(data) {
          $scope.photoArr = data.data;
          $rootScope.mainImageUrl = $scope.photoArr[0].URL;
          $rootScope.mainImageName = $scope.photoArr[0].Name;
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