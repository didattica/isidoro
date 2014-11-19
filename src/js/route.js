(function (define) {
    'use strict';

    define([
        'controllers/revealController',
        'controllers/print-pdf-controller'
    ], function (revealController, printPdfController) {
        return function ($routeProvider) {

            var vendor_dir = 'bower_components/';

            $routeProvider.
                when('/home', {
                    templateUrl: 'src/templates/home.html',
                    css: [
                        'src/css/main.css',
                        vendor_dir + '/bootstrap/dist/css/bootstrap.css'
                    ]
                }).
                when('/slides/:slideName', {
                    templateUrl: function ($route) {
                        return 'src/templates/' + $route.slideName + '.html';
                    },
                    css: [
                        'src/css/reveal.css',
                        vendor_dir + 'components-revealjs/css/theme/sky.css',
                        vendor_dir + 'components-revealjs/css/reveal.css',
                        vendor_dir + 'bootstrap/dist/css/bootstrap.css'
                    ],
                    controller: revealController
                }).
                // Adding the second parameter, it adds the print style-sheet
                when('/slides/:slideName/:pdf', {
                    templateUrl: function ($route) {
                        return 'src/templates/' + $route.slideName + '.html';
                    },
                    css: [
                        'src/css/reveal.css',
                        vendor_dir + 'components-revealjs/css/reveal.css',
                        vendor_dir + 'bootstrap/dist/css/bootstrap.css'
                    ],
                    controller: printPdfController
                }).
                otherwise({
                    redirectTo: function () {
                        return '/home';
                    }
                });
        };
    });
}(this.define));
