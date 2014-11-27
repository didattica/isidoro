(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/slides.view',
        'views/introduction.view',
        'views/basics.view',
        'views/hardware.view',
        'views/software.view'
    ], function (indexView, slidesView, introductionView, basicsView, hardwareView, softwareView) {
        return function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('slides', slidesView)
                .state('slides.introduction', introductionView)
                .state('slides.basics', basicsView)
                .state('slides.hardware', hardwareView)
                .state('slides.software', softwareView);
        };
    });
}(this.define));
