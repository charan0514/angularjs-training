expManager.controller('homeController', function($scope){

	$scope.userName = "";

	$scope.incomes = sampleData.incomes;
	$scope.expenses = sampleData.expenses;
	//$scope.hideReports = false;

	$scope.showIncome = false;
	$scope.showExpense = false;

	/*$scope.getReports = function(){
		$scope.incomes = sampleData.incomes;
		$scope.expenses = sampleData.expenses;
		$scope.hideReports = true;
	}*/

	$scope.showIncomes = function(){
		$scope.showIncome = true;
		$scope.showExpense = false;
	},

	$scope.showExpenses = function(){
		$scope.showExpense = true;
		$scope.showIncome = false;
	}

});
