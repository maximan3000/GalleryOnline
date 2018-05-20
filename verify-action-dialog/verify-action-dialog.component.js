'use strict';

angular.
  module('verifyActionDialog').
  component('verifyActionDialog', {
    templateUrl: 'verify-action-dialog/verify-action-dialog.template.html',
    controller: function AddFileDialogController($scope, $rootScope, $http) {
      $scope.clickVerify = function() {
          var toDelete = $rootScope.mainImageName;
          $http.get("https://grazsite.000webhostapp.com/php/DeleteService.php?filename="+toDelete)
              .then(function() {
                      //alert("Deleted!");
                      location.reload();
                  },
                  function() {
                      alert("ERROR - ShowService.php bad answer!");
                  }
              );
        //TODO ajax - запрос на удаление файла с именем $rootScope.mainImageName;
        $rootScope.verifyActionDialogOff();
	    };
	    $scope.clickCancel = $rootScope.verifyActionDialogOff;
    }
  });