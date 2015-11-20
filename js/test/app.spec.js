describe('PathFixer app', function() {
	beforeEach(module('PathFixer'));
	
	var $controller,
	$rootScope;

	beforeEach(inject(function($injector) {
		$rootScope = $injector.get('$rootScope');
		$controller = $injector.get('$controller');

		createController = function() {
			return $controller('PathConverterController', {'$scope' : $rootScope});
		}
	}));

	describe('$scope.fixPath', function() {
		it('should convert windows path to mac one', function() {
			var controller = createController();

			$rootScope.windowsPath = '\\\\Volume1\\folder1\\file.pdf';
			$rootScope.fixPath();

			expect($rootScope.macPath).toEqual('smb://Volume1/folder1/file.pdf');
		});		
	});
});