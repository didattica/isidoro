(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'angularRouteStyles',
        'angularRoute',
        'jquery'
    ], function (angular, route) {
        var app = angular.module('isidoroApp', [
            'ngRoute',
            'routeStyles'
        ]);

        app.config(['$routeProvider', route]);
        angular.element().ready(function () {
            angular.bootstrap(document, ['isidoroApp']);
        });

        return app;
    });

}(this.define, this.document));
