(function (define) {
    'use strict';

    define([
        'text!../../templates/hardware.html',
    ], function (hardwareTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/hardware',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: hardwareTemplate
        };
    });
}(this.define));
