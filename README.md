angularjs-tutorial
==================

Following along with this tutorial from CodeSchool.com http://campus.codeschool.com/courses/shaping-up-with-angular-js/

Random Notes Below
==================

app.directive()
app.controller()
app.model()

Using Directives instead of Controllers: you get to make a new element, put the function of the element into a remote file, and attach controller  + alias to directive itself.

services: start with $ sign

$http services
how to make async request to server
$http({method:’GET’, url:’/products.json’}); <- has options object
$http.get(‘products.json’, {apiKey: ‘myApiKey’}); <- shortcut methods
both return Promise object with .sucess() and .error()
Promises allow you to do callbacks on it.
Feature of $http: if you request JSON, result will be in JSON.

How Controller uses Service
app.controller(‘SomeController’, [‘$http’, function($http){
} ]);

// ‘serviceName’, surfaceName as argument
Basically you are specifing the service that your controllers need ?--- dependency injection


To Compile Type Script
Visual Studio -> Tools -> Nuget Package Manager -> tsc console.ts
