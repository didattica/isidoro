(function (document, define) {
    'use strict';

    define([
    ], function () {

        return function () {
            var link = document.createElement('link');

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = './bower_components/components-revealjs/css/print/pdf.css';
            document.getElementsByTagName('head')[0].appendChild(link);
        };
    });
}(this.document, this.define));
