'use strict';

angular.
  module('photoReview').
  component('photoReview', {
    templateUrl: 'photo-review/photo-review.template.html',
    controller: function PhotoReviewController($scope, $rootScope) {
        $scope.photoUrl = "http://bezkota.ru/wp-content/uploads/2016/06/o-chem-murlychet-kot-koshachij-slovar-1068x598.jpg";
    	
        $scope.clickPhoto = function(photoUrl) {
        	$rootScope.mainImageUrl = photoUrl;
        };
    }
  });