(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/introduction.view',
        'views/basics.view',
        'views/hardware.view'
    ], function (indexView, introductionView, basicsView, hardwareView) {
        return function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('introduction', introductionView)
                .state('basics', basicsView)
                .state('hardware', hardwareView);
        };
    });
}(this.define));
