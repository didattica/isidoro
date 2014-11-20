$(function (define) {
    'use strict';

    define([
        'text!../../templates/introduction.html',
        '../controllers/revealController'
    ], function (introductionTemplate, revealController) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/introduction',
            data: {
                css: [
                    'src/css/reveal.css',
                    vendor_dir + 'components-revealjs/css/theme/sky.css',
                    vendor_dir + 'components-revealjs/css/reveal.css',
                    vendor_dir + 'bootstrap/dist/css/bootstrap.css'
                ]
            },
            views: {
                slides: {
                    template: introductionTemplate,
                    controller: revealController
                }
            }
        };
    });
}(this.define));
