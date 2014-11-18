(function (define) {
    'use strict';

    define([
        'controllers/revealController'
    ], function (revealController) {
        return function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'src/templates/home.html',
                    css: [
                        'src/css/main.css',
                        'bower_components/bootstrap/dist/css/bootstrap.css'
                    ],
                    controller: function () {}
                }).
                when('/introduction', {
                    templateUrl: 'src/templates/introduction.html',
                    css: [
                        'src/css/reveal.css',
                        'bower_components/components-revealjs/css/reveal.css',
                        'bower_components/components-revealjs/css/theme/sky.css'
                    ],
                    controller: revealController
                }).
                otherwise({
                    redirectTo: '/home'
                });
        };
    });
}(this.define));
