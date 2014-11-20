(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'angularUiRouter',
        'uiRouterStyles',
        'jquery'
    ], function (angular, route) {
        var app = angular.module('isidoroApp', [
            'ui.router',
            'uiRouterStyles'
        ]);

        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['isidoroApp']);
        });

        return app;
    });

}(this.define, this.document));
