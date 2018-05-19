'use strict';

angular.
  module('manageBlock').
  component('manageBlock', {
    templateUrl: 'manage-block/manage-block.template.html',
    controller: function ManageBlockController() {
        this.val = 15;
    }
  });