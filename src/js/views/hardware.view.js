$(function (define) {
    'use strict';

    define([
        'text!../../templates/hardware.html',
        '../controllers/revealController'
    ], function (hardwareTemplate, revealController) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/hardware',
            data: {
                css: [
                    'src/css/reveal.css',
                    vendor_dir + 'bootstrap/dist/css/bootstrap.css',
                    vendor_dir + 'components-revealjs/css/theme/sky.css',
                    vendor_dir + 'components-revealjs/css/reveal.css'
                ]
            },
            views: {
                slides: {
                    template: hardwareTemplate,
                    controller: revealController
                }
            }
        };
    });
}(this.define));
