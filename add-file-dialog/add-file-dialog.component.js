'use strict';

angular.
  module('addFileDialog').
  component('addFileDialog', {
    templateUrl: 'add-file-dialog/add-file-dialog.template.html',
    controller: function AddFileDialogController($scope, $rootScope, $http) {
      

      $scope.clickSubmit = function() {

      	if (""!=photoFile.value) {
          var srcForm = document.getElementById("formFile");
          var formData = new FormData();
          formData.append('file', srcForm[0].files[0]);
          $rootScope.addFileDialogOff();

         $http.post("https://grazsite.000webhostapp.com/php/AddService.php", formData, {
           transformRequest: angular.identity,
           headers: {'Content-Type': undefined,'Process-Data': false}
         })
         .then(function(data){
            alert("Image has been uploaded!");
            location.reload();
         },
         function(){
            alert("Bad request to AddService.php");
         });

        }

	    };


	    $scope.clickCancel = $rootScope.addFileDialogOff;
    }
  });