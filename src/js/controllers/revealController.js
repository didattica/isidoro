(function (window, define) {
    'use strict';

    define([
        'revealjs'
    ], function (Reveal) {

        var revealConfig = {
            history: false,
            keyboard: {
                13: 'next', // go to the next slide when the ENTER key is pressed
                27: function () {
                    window.history.back();
                }, // do something custom when ESC is pressed
                32: function () {
                    // TODO the print stylesheet does not make all pages printable because of Reveal.initialize
                    var link = document.createElement('link');

                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = './bower_components/components-revealjs/css/print/pdf.css';
                    document.getElementsByTagName('head')[0].appendChild(link);
                } //  when SPACE is pressed it adds a print stylesheet
            },
            progress: true, // Display a presentation progress bar
            touch: true // Enables touch navigation on devices with touch input
        };

        return function () {
            Reveal.initialize(revealConfig);
        };
    });
}(this, this.define));
