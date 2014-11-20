(function (define) {
    'use strict';

    define([
        'text!../../templates/basics.html',
        '../controllers/revealController'
    ], function (basicTemplate, revealController) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/basics',
            data: {
                css: [
                    'src/css/reveal.css',
                    vendor_dir + 'bootstrap/dist/css/bootstrap.css',
                    vendor_dir + 'components-revealjs/css/reveal.css',
                    vendor_dir + 'components-revealjs/css/theme/beige.css'
                ]
            },
            views: {
                slides: {
                    template: basicTemplate,
                    controller: revealController
                }
            }
        };
    });
}(this.define));
