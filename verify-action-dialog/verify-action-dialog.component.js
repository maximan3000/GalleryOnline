'use strict';

angular.
  module('verifyActionDialog').
  component('verifyActionDialog', {
    templateUrl: 'verify-action-dialog/verify-action-dialog.template.html',
    controller: function AddFileDialogController($scope, $rootScope, $http) {
      $scope.clickVerify = function() {
          var toDelete = $rootScope.mainImageName;
          $http.get("php/DeleteService.php?filename="+toDelete)
              .then(function(data) {
                  alert(data.data);
                      /* cordova vibration */
                      if (typeof navigator.vibrate != "undefined") {
                        navigator.vibrate(500);
                      }
                      //alert("Deleted!");
                      //location.reload();
                      setTimeout(function() {location.reload();}, 500);
                      
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