(function (define) {
    'use strict';

    define([
        '../controllers/index.controller',
        'text!../../templates/index.html'
    ], function (indexController, indexTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/',
            data: {
                css: [
                    vendor_dir + '/bootstrap/dist/css/bootstrap.css',
                    'src/css/main.css'
                ]
            },
            template: indexTemplate,
            controller: indexController
        };
    });
}(this.define));
