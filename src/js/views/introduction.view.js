(function (define) {
    'use strict';

    define([
        'text!../../templates/introduction.html'
    ], function (introductionTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/introduction',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: introductionTemplate
        };
    });
}(this.define));
