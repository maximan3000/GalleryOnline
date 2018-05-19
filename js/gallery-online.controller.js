'use strict';

myApp.controller('GalleryOnlineController', function ($scope, $rootScope, $http) {
	$rootScope.mainImageUrl = "http://www.rosphoto.com/images/u/articles/1510/4_8.jpg";

	$http.get("http://grazsite.000webhostapp.com/Server/ShowService.php").then(function(data) {
		console.dir(data);
	}, function(data) {
		alert("ERROR - ShowService.php bad answer!");
	});

	/*
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();
	// (2) запрос на другой домен :)
	xhr.open('GET', 'http://grazsite.000webhostapp.com/Server/ShowService.php', true);
	xhr.onload = function(data) {
	  console.dir(data);
	}
	xhr.onerror = function() {
	  alert( 'Ошибка ' + this.status );
	}
	xhr.send();
	*/

});