'use strict';

angular.
  module('addFileDialog').
  component('addFileDialog', {
    templateUrl: 'angular-modules/add-file-dialog/add-file-dialog.template.html',
    controller: function AddFileDialogController($scope, $rootScope, $http) {
      

      $scope.clickSubmit = function() {

      	if (""!=photoFile.value) {
          var srcForm = document.getElementById("formFile");
          var formData = new FormData();
          formData.append('file', srcForm[0].files[0]);
          $rootScope.addFileDialogOff();

         $http.post($rootScope.addServiceUrl, formData, {
           transformRequest: angular.identity,
           headers: {'Content-Type': undefined,'Process-Data': false}
         })
         .then(function(data){
            /* cordova vibration */
            if (typeof navigator.vibrate != "undefined") {
              navigator.vibrate(250,250,250);
            }
            
            setTimeout(function() {
                alert("Image has been uploaded!"); 
                location.reload();
              }, 
              750
            );
            
            //location.reload();
         },
         function(){
            alert("Bad request to AddService.php");
         });

        }

	    };


	    $scope.clickCancel = $rootScope.addFileDialogOff;
    }
  });