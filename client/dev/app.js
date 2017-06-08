require('angular'); // This tells webpack that we want to bundle Angular with our js


var app = angular.module("app", []);

app.controller("mainController", function ($scope, $http) {

    var secret = atob("a7eb5018f08c4ed7ba128165ab132df8");//:4d4f2e007279403cae3fb2464336496a");

    $http({
        method: 'POST',
        grant_type: 'client_credentials',
        headers: { Authorization: "Basic " + secret },
        url: 'https://accounts.spotify.com/api/token'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(response) {
        console.log(response.data);
    });




/*    $http.post("https://accounts.spotify.com/api/token")
        .then(function (response) {
            console.log(response.data);
        }); */

    alert("greetings~");

});
