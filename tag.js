    //My Stuff application
    var app = angular.module("myTags", []); 
    
    app.filter('myColorActive', function() {
        return function(x) {

            txt = "w3-light-grey";    
            if (x.active){
                txt = x.color;
            }

            return txt;
        };
    });

     app.filter('myActiveTags', function() {
        return function(x) {

            txt = "false";    
            if (x.active){
                txt = true;
            }

            return txt;
        };
    });
   app.controller("myCtrl", function($scope) {
        
     
        $scope.tags = [ 
        {"active":"no","name":"vinden", "color":"w3-grey","shapes":"w3-round"},
        {"active":"no","name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
        {"active":"no","name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
        {"active":"no","name":"a2", "color":"w3-red","shapes":""}];

        $scope.template =
            {"desc":"", "tags":[ 
                {"active":false,"name":"vinden", "color":"w3-grey","shapes":"w3-round"},
                {"active":false,"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
                {"active":false,"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
                {"active":false,"name":"a2", "color":"w3-red","shapes":""}
                ]};
             


        $scope.stuffs = [ 
            {"desc":"Agnes skridskor","tags":
                [{"active":true,"name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
                {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
                {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
                {"name":"a2", "color":"w3-red","shapes":""}
                ]},
            {"desc":"Gosedjur","tags":
                [{"active":true,"name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
                {"active":false,"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
                {"active":true,"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
                {"name":"a2", "color":"w3-red","shapes":""}
                ]},
            {"desc":"IT prylar","tags":
                [{"active":true,"name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
                {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
                {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
                {"name":"a2", "color":"w3-red","shapes":""}
                ]},
            {"desc":"Annat","tags":
                [{"active":true,"name":"vinden", "color":"w3-grey","shapes":"w3-round"}, 
                {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
                {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
                {"active":true,"name":"a2", "color":"w3-red","shapes":""}
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

        $scope.changeStuff = function (x) {
			
			$scope.rowId = x;
			if (x == null)
			{
				$scope.editStuff = angular.copy($scope.template);
			}
			else
			{

				$scope.editStuff = angular.copy($scope.stuffs[$scope.rowId]);
			}
            
            document.getElementById('editStuff').style.display='block'; 
        }
        $scope.updateStuff = function () {
			
			if ($scope.rowId != null)
			{
				$scope.stuffs[$scope.rowId] = $scope.editStuff;

			}else {
				$scope.stuffs.push($scope.editStuff);
            }
			$scope.rowId = null;
			document.getElementById('editStuff').style.display='none'; 

        }
        $scope.selectTag = function (x) {

			if ($scope.editStuff.tags[x].active)
			{
				$scope.editStuff.tags[x].active = false;
			} else {
				$scope.editStuff.tags[x].active = true;
			}
		}

    });
