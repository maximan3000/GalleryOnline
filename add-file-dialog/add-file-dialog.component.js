'use strict';

angular.
  module('addFileDialog').
  component('addFileDialog', {
    templateUrl: 'add-file-dialog/add-file-dialog.template.html',
    controller: function AddFileDialogController($scope, $rootScope, $http) {
      

      $scope.clickSubmit = function() {
      	if (""!=photoFile.value) {
          var formData = new FormData();
          var data = photoFile.files[0];
          formData.append('imageFile', data);
          console.dir(formData);


          /*TODO - пост запрос сдлеать чтоб работал*/
          

          $http.post(
            "http://grazsite.000webhostapp.com/Server/AddService.php", 
            data)
            .then(function() {
              $rootScope.addFileDialogOff();
            }, function() {
              alert("Bad request to AddService.php");
            }
          );  
        }
	    };
	    $scope.clickCancel = $rootScope.addFileDialogOff;
    }
  });