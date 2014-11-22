'use strict';

/**
 * @ngdoc function
 * @name hookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hookApp
 */
angular.module('hookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
