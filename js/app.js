var app = angular.module('PathFixer', []);

app.controller('PathConverterController', ['$scope','$http', function ($scope,$http) {
	
	$scope.alert = document.getElementById('copied-to-clipboard');
	$scope.response = {};
	var clipboard = new Clipboard('#mac-path');
	
	clipboard.on('success', function() {
		$scope.alert.style.display = 'block';
		setTimeout(function() {
			$scope.alert.style.display = 'none';
		}, 1500);
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