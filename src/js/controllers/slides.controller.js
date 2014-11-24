(function (window, define, document) {
    'use strict';

    define([
        'revealjs'
    ], function (Reveal) {

        var setPdfStylesheet = function () {
            // Remove the css reveal library.
            $('head link[href*="reveal.css"]').remove();
            $('section').removeAttr('style');
            $('section').show();
            $('.reveal>.progress').hide();
        };

        var revealConfig = {
            history: false,
            keyboard: {
                13: 'next', // Go to the next slide when the ENTER key is pressed
                27: function () {
                    window.location.href = './';
                }, // When ESC is pressed
                80: setPdfStylesheet // When "P" is pressed
            },
            progress: true, // Display a presentation progress bar
            touch: true // Enables touch navigation on devices with touch input
        };

        return function ($scope) {
            $scope.$parent.class = 'reveal';
            $scope.$on('$viewContentLoaded', function () {
                setTimeout(function () {
                    Reveal.initialize(revealConfig);
                }, 0);
            });
            $scope.$on('$destroy', function () {
                $scope.$parent.class = '';
            });
        };
    });
}(this, this.define, this.document));
