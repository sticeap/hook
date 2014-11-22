'use strict';

/**
 * @ngdoc function
 * @name hookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hookApp
 */
angular.module('hookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
