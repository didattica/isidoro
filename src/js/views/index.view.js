(function (define) {
    'use strict';

    define([
        'text!../../templates/index.html'
    ], function (indexTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/',
            data: {
                css: [
                    vendor_dir + '/bootstrap/dist/css/bootstrap.css',
                    'src/css/main.css'
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
