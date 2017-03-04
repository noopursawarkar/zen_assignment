'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).controller('tableCtrl', ['$scope', function($scope) {

	$scope.newRowData = {};
	$scope.data = [{
		format: "Hardcover",
		price: "300.00",
		newFrom: "334.99",
		usedFrom: "269.99"
	}, {
		format: "Paperback",
		price: "150.00",
		newFrom: "169.99",
		usedFrom: "119.99"
	}, {
		format: "Audio, CD, Audiobook, Unabridged",
		price: "80.00",
		newFrom: "89.00",
		usedFrom: "60.00"
	}, {
		format: "Unknown Binding",
		price: "119.99",
		newFrom: "60.00",
		usedFrom: "50.00"
	}];

	$scope.tableOperation = {
		editIndex: -1,
		save: function(newRowData) {
			if (this.editIndex === -1) {
				$scope.data.push(newRowData);
			} else {
				$scope.data[this.editIndex] = newRowData;
			}
			$scope.newRowData = {}
			this.editIndex = -1;
		},
		edit: function(index, newRowData) {
			this.editIndex = index;
			$scope.newRowData = angular.copy(newRowData);
		},
		remove: function(index) {
			$scope.data.splice(index, 1);
		}
	}
}]);