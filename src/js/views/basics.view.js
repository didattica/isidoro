(function (define) {
    'use strict';

    define([
        'text!../../templates/basics.html'
    ], function (basicTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/basics',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/beige.css'
                ]
            },
            template: basicTemplate
        };
    });
}(this.define));
