(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(250, 625, 0.3, 1.5);
        createPlatform(365, 325, 0.01, 10);
        createPlatform(365, 325, 0.5, 1);
        createPlatform(0, 550, 0.3, 0.5);
        createPlatform(250, 475, 0.3, 0.5);
        createPlatform(0, 400, 0.3, 0.5);
        createPlatform(560, 400, 0.3, 0.5);
        createPlatform(560, 325, 0.01, 7.5);
        createPlatform(560, 550, 0.3, 0.5);
        createPlatform(800, 475, 0.3, 0.5);
        createPlatform(800, 625, 0.3, 1.5);
        createPlatform(800, 325, 0.3, 0.5);
        createPlatform(0, 250, 0.3, 0.5);
        createPlatform(300, 325, 0.5, 1);
        createPlatform(300, 175, 0.3, 0.5);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);