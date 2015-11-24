/*global angular, Clipboard*/
var app = angular.module('PathFixer', []);
app.constant('TIMEOUT', 1500);

app.controller('PathConverterController', ['$scope', 'TIMEOUT', function ($scope, TIMEOUT) {
    'use strict';

    $scope.alert = document.getElementById('copied-to-clipboard');
    $scope.response = {};
    var clipboard = new Clipboard('#mac-path');

    clipboard.on('success', function () {
        $scope.alert.style.display = 'block';
        setTimeout(function () {
            $scope.alert.style.display = 'none';
        }, TIMEOUT);
    });

    $scope.fixPath = function () {
        if ($scope.windowsPath !== '') {
            $scope.macPath = $scope.windowsPath.replace(/^\\\\/, '');
            $scope.macPath = 'smb://' + $scope.macPath;
            $scope.macPath = $scope.macPath.replace(/\\/g, '/');
        } else {
            $scope.macPath = '';
        }
    };
}]);