<!DOCTYPE html>
<html>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    
<body ng-app="myShoppingList" ng-cloak ng-controller="myCtrl">

<script>

    //My Stuff application
    var app = angular.module("myShoppingList", []); 
    
    app.controller("myCtrl", function($scope) {
        
     
        $scope.tags = [ 
        {"name":"vinden", "color":"w3-grey","shapes":"w3-round"},
        {"name":"garage", "color":"w3-orange","shapes":"w3-round-xlarge"},
        {"name":"a1", "color":"w3-purple","shapes":"w3-round-xlarge"},
        {"name":"a2", "color":"w3-red","shapes":""}
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
        


        $scope.addItem = function () {
            $scope.errortext = "";
            if (!$scope.current.name) {return;}
            if ($scope.tags.indexOf($scope.current.name) == -1) {
                $scope.tags.push($scope.current);
            } else {
                $scope.errortext = "The item is already in your list.";
            }
        }
        $scope.editItem = function (x) {
            
            $scope.current = $scope.tags[x];
            $scope.edit = {};
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
        
        $scope.removeItem = function (x) {
            $scope.errortext = "";    
            $scope.products.splice(x, 1);
        }
        $scope.thisButton = function (x) {
          

          $scope.current = $scope.tags[x];
      
        }
    });
</script>

    <div  class="w3-card-2 w3-margin" style="max-width:400px;">
      <header class="w3-container w3-light-grey w3-padding-16">
        <h3>My Tags</h3>
      </header>
      
      <!--Filter-->
      <div class="w3-btn-group" >
            <button ng-repeat="tag in tags" id="{{$index}}" class="w3-btn {{tag.color}} {{tag.shapes}}" ng-click="editItem($index)">{{tag.name}} </button>


      </div>
      
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-row w3-margin-top">
          <div class="w3-col s10">




          </div>
          <div class="w3-col s2">
            <button ng-click="addItem()" class="w3-btn w3-padding w3-green">Add</button>
          </div>
        </div>
        
        
        <button onclick="document.getElementById('id01').style.display='block'" class="w3-btn-floating-large w3-teal">+</button>
        
        <p class="w3-padding-left w3-text-red">{{errortext}}</p>
      </div>
      
      
      <!--List-->
      <!--div>
          <ul class="w3-ul">
            <li ng-repeat="product in products" class="w3-padding-16">{{product}}<span ng-click="removeItem($index)" style="cursor:pointer;" class="w3-right w3-margin-right">×</span></li>
          </ul>
      </div-->
      <!--div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-row w3-margin-top">
          <div class="w3-col s10">
            <input placeholder="Add shopping items here" ng-model="addMe" class="w3-input w3-border w3-padding">
          </div>
          <div class="w3-col s2">
            <button ng-click="addItem()" class="w3-btn w3-padding w3-green">Add</button>
          </div>
        </div>
        <p class="w3-padding-left w3-text-red">{{errortext}}</p>
      </div-->
    </div>
    
   
    <!--Modal för att registrera en ny tag-->
    <div id="id01" class="w3-modal">
      <div class="w3-modal-content">
        <div class="w3-container">
          <span onclick="document.getElementById('id01').style.display='none'" class="w3-closebtn">&times;</span>
          <p>Some text. Some text. Some text.</p>
          <p>Some text. Some text. Some text.</p>
        </div>
      </div>
    </div>
    <!--Modal för att editera en tag-->
    <div id="editItem" class="w3-modal">

        <div class="w3-modal-content w3-animate-zoom w3-card-8">
            <header class="w3-container w3-teal"> 

              
              <span onclick="document.getElementById('editItem').style.display='none'" class="w3-closebtn">&times;</span>
              
              <h2>Modal Header</h2>
            </header>
            <div class="w3-container">

                <p> </p>
                <p> Current:{{edit}}</p>
    
                <button  class="w3-btn {{edit.color}} {{edit.shapes}}">{{edit.name}} </button>
                
                <input  ng-model="edit.name" class="w3-input w3-border w3-padding">
                <!--input  ng-model="current.color" class="w3-input w3-border w3-padding">
                <input  ng-model="current.shapes" class="w3-input w3-border w3-padding"-->
    
                <select ng-model="edit.color" class="w3-select w3-border">
                    <option ng-repeat="x in colorList" value="{{x.code}}">{{x.color}}</option>
                </select>
              
                <select ng-model="edit.shapes" class="w3-select w3-border">
                    <option ng-repeat="x in shapeList" value="{{x.code}}">{{x.shape}}</option>
                </select>

            </div>
            <footer class="w3-container w3-container w3-light-grey w3-padding">
                <button class="w3-btn w3-right w3-white w3-border" onclick="document.getElementById('editItem').style.display='none'" >Close</button>
                <button class="w3-btn w3-right w3-red  w3-border" ng-click="saveItem()">Save</button>
            </footer>
          </div>
      </div>
    </div>








</body>
</html>
