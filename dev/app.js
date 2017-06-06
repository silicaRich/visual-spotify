require('angular'); // This tells webpack that we want to bundle Angular with our js


var app = angular.module("app", []);

app.controller("mainController", function ($scope) {

    alert("greetings~");

});
