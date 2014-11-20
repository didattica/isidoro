(function (define) {
    'use strict';

    define([
        'text!../../templates/index.html',
        '../controllers/revealController'
    ], function (indexTemplate, revealController) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/',
            data: {
                css: [
                    'src/css/main.css',
                    vendor_dir + '/bootstrap/dist/css/bootstrap.css'
                ]
            },
            views: {
                index: {
                    template: indexTemplate
                }
            }
        };
    });
}(this.define));
