'use strict';

myApp.controller('GalleryOnlineController', function ($scope, $rootScope, $http) {
	$rootScope.mainImageUrl = "";
	$rootScope.mainImageName = "";
	$rootScope.displayFileDialog = "";

	$rootScope.addFileDialogOn = function() {
		$rootScope.displayFileDialog = "gallery-online-div-block-on";
  		$rootScope.backGround = "gallery-online-div-background-on";
	};
	$rootScope.addFileDialogOff = function() {
		$rootScope.displayFileDialog = "gallery-online-div-block-off";
  		$rootScope.backGround = "gallery-online-div-background-off";
	};
	$rootScope.verifyActionDialogOn = function() {
		$rootScope.displayVerifyActionDialog = "gallery-online-div-block-verify-on";
  		$rootScope.backGround = "gallery-online-div-background-on";
	};
	$rootScope.verifyActionDialogOff = function() {
		$rootScope.displayVerifyActionDialog = "gallery-online-div-block-verify-off";
  		$rootScope.backGround = "gallery-online-div-background-off";
	};

	$rootScope.addFileDialogOff();
	$rootScope.verifyActionDialogOff();
});