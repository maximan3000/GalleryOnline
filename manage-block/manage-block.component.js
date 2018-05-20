'use strict';

angular.
  module('manageBlock').
  component('manageBlock', {
    templateUrl: 'manage-block/manage-block.template.html',
    controller: function ManageBlockController($scope, $rootScope) {
  

      $scope.clickAdd = $rootScope.addFileDialogOn;

      $scope.clickDelete = $rootScope.verifyActionDialogOn;

      $scope.clickRefresh = function() { location.reload(); };
    }
  });