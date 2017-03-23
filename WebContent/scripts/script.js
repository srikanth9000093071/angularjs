
var myModule=angular.module("myModule",[])
					.controller("myController",function($scope){
						
						var employee={
							firstName:'srikanth',
							lastName:'Machavaram',
							gender:'Male',
							
							
						};
						
						$scope.employee=employee;
						
						
					});