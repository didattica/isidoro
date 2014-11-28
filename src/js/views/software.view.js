(function (define) {
    'use strict';

    define([
        'text!../../templates/software.html',
    ], function (softwareTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/software',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: softwareTemplate
        };
    });
}(this.define));
