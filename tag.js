    //My Stuff application
    var app = angular.module("myTags", []); 
    
    app.filter('myColorActive', function() {
        return function(x) {

            txt = "w3-light-grey";    
            if (x.active == "yes"){
                txt = x.color;
            }

            return txt;
        };
    });

    app.controller("myCtrl", function($scope) {
        
     
        $scope.tags = [ 
        {"name":"vinden", "color":"w3-grey","shapes":"w3-round"},
        {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
        {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
        {"name":"a2", "color":"w3-red","shapes":""}
         ];

        $scope.stuffs = [ 
        {"desc":"Agnes skridskor","tags":
            [{"active":"yes","name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
            {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
            {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
            {"name":"a2", "color":"w3-red","shapes":""}
            ]},
        {"desc":"Gosedjur","tags":
            [{"active":"yes","name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
            {"active":"yes","name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
            {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
            {"name":"a2", "color":"w3-red","shapes":""}
            ]},
        {"desc":"IT prylar","tags":
            [{"active":"yes","name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
            {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
            {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
            {"name":"a2", "color":"w3-red","shapes":""}
            ]},
        {"desc":"Annat","tags":
            [{"active":"yes","name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
            {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
            {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
            {"name":"a2", "color":"w3-red","shapes":""}
            ]},
         ]; 


 


        $scope.colorList = [
            {code : "w3-yellow", color : "Yellow"},
            {code : "w3-orange", color : "Orange"},
            {code : "w3-red", color : "Red"},
            {code : "w3-purple", color : "Purple"},
            {code : "w3-grey", color : "Grey"}
        ];
        $scope.shapeList = [
            {code : "", shape : "Normal"},
            {code : "w3-round", shape : "Round"},
            {code : "w3-round-xlarge", shape : "Rounder"}
        ];
        


        $scope.xaddItem = function () {
            $scope.errortext = "";
            if (!$scope.current.name) {return;}
            if ($scope.tags.indexOf($scope.current.name) == -1) {
                $scope.tags.push($scope.current);
            } else {
                $scope.errortext = "The item is already in your list.";
            }
        }
        $scope.addItem = function () {
      
            $scope.edit = {};
            document.getElementById('addItem').style.display='block'; 
        }

        $scope.createItem = function () {
      
      $scope.tags.push($scope.edit);
      document.getElementById('addItem').style.display='none'; 
        }

        $scope.editItem = function (x) {
            
            $scope.current = $scope.tags[x];
            $scope.edit = {};
            $scope.edit.id = x;
            $scope.edit.name = $scope.current.name;
            $scope.edit.color = $scope.current.color;
            $scope.edit.shapes = $scope.current.shapes;
            
            document.getElementById('editItem').style.display='block';
        }
        $scope.saveItem = function () {
            
            document.getElementById('editItem').style.display='none';
            $scope.current.name = $scope.edit.name;
            $scope.current.color = $scope.edit.color;
            $scope.current.shapes = $scope.edit.shapes;

        }
        
        $scope.removeItem = function () {
    
            $scope.errortext = "";    
            $scope.tags.splice($scope.edit.id, 1);
            document.getElementById('editItem').style.display='none';
        }


    });
