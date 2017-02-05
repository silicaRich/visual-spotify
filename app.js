(function () {
    var app = angular.module('gemStore', ['spotify']);

    app.config(function (SpotifyProvider) {
        SpotifyProvider.setClientId('<SET_CLIENT_ID_HERE>');
        //SpotifyProvider.setRedirectUri('<CALLBACK_URI>'); 
        SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');

        // If you already have an auth token
        // SpotifyProvider.setAuthToken('<AUTH_TOKEN>');
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
  
    app.controller('StoreController', ['$http', 'Spotify', function ($http, Spotify) {
        var store = this;
        store.products = [];
        $http.get('store-products.js').success(function (data) {
            store.products = data;
            console.log(store.products);
        }).error(function (data) {
            console.log(data);
        });
        
        Spotify.getAlbums('41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37,6KuHbuDiJNcgEvnLTnfQcY')
            .then(function (data) {
                console.log(data);
                store.music = data;
        });


    }]);

})();