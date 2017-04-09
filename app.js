(function(){
    'use strict';
    angular.module('Injection',[])
    .controller('InjectionController',DIController)
    .filter('changet',changeValue);
    
    function DIController($scope,$filter){
        $scope.name="Nitika";
        $scope.upper=function(){
            var upCase=$filter('uppercase');
            $scope.name=upCase($scope.name);
        };
    }
    
    function changeValue(){
        return function(input,target,newVal){
            input=input.replace(target,newVal);
            return input;
        };
    }
})();