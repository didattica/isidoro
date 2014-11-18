(function (requirejs) {
    'use strict';

    var vendor_dir = '../../bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendor_dir + 'angular/angular',
            angularRoute: vendor_dir + 'angular-route/angular-route',
            angularRouteStyles: vendor_dir + 'angular-route-styles/route-styles',
            jquery: vendor_dir + 'jquery/dist/jquery.min',
            revealjs: vendor_dir + 'components-revealjs/js/reveal'
        },
        shim: {
            revealjs: {
                exports: 'Reveal'
            },
            angular : {exports : 'angular'},
            angularRouteStyles: {
                deps: ['angular'],
                exports: 'routeStyles'
            },
            jquery: {exports: 'jquery'},
            angularRoute: ['angular']
        },
        // kick start application
        deps: ['app']
    });

}(this.requirejs));
