(function (define) {
    'use strict';

    define([
        'text!../../templates/hosting-services.html'
    ], function (introductionTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/hosting-services',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: introductionTemplate
        };
    });
}(this.define));
