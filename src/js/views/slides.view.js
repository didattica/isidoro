(function (define) {
    'use strict';

    define([
        'text!../../templates/slides.html',
        '../controllers/slides.controller'
    ], function (slidesTemplate, slidesController) {
        var vendor_dir = 'bower_components/';

        return {
            url: '/slides',
            data: {
                css: [
                    'src/css/slides.css',
                    vendor_dir + 'bootstrap/dist/css/bootstrap.css',
                    vendor_dir + 'components-revealjs/css/reveal.css'
                ]
            },
            template: slidesTemplate,
            controller: slidesController
        };
    });
}(this.define));
