(function (requirejs) {
    'use strict';

    var vendor_dir = '../../bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendor_dir + 'angular/angular',
            angularUiRouter: vendor_dir + 'angular-ui-router/release/angular-ui-router',
            uiRouterStyles: vendor_dir + 'angular-ui-router-styles/ui-router-styles',
            jquery: vendor_dir + 'jquery/dist/jquery.min',
            revealjs: vendor_dir + 'components-revealjs/js/reveal',
            text: vendor_dir + 'text/text'
        },
        shim: {
            revealjs: {
                exports: 'Reveal'
            },
            angular : {exports : 'angular'},
            jquery: {exports: 'jquery'},
            angularUiRouter: ['angular'],
            uiRouterStyles: ['angular']
        },
        // kick start application
        deps: ['app']
    });

}(this.requirejs));
