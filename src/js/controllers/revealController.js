(function () {
    'use strict';

    define([
        'revealjs'
    ], function () {

        var revealConfig = {
            // Display controls in the bottom right corner
            controls: true,
            // Display a presentation progress bar
            progress: true,
            // Display the page number of the current slide
            slideNumber: false,
            // Push each slide change to the browser history
            history: false,
            // Enable keyboard shortcuts for navigation
            keyboard: true,
            // Enable the slide overview mode
            overview: false,
            // Vertical centering of slides
            center: true,
            theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
            transition: Reveal.getQueryHash().transition || 'default'
        }

        return function () {
            Reveal.initialize(revealConfig);
        };
    });
}(this.define));
