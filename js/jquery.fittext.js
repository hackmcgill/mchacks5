/*global jQuery */
/*!
* FitText.js 1.2
*
* Original:
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*
* Slight modifications by Deepanjan Roy to make it have different options
* in portrait and landscape
*/

(function( $ ){

  $.fn.fitText = function( kompressor_portrait, kompressor_landscape, options ) {

    // Setup options
    var compressor_portrait = kompressor_portrait || 1,
        compressor_landscape = kompressor_landscape || kompressor_portrait || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        var compressor = window.innerHeight > window.innerWidth
          ? compressor_portrait
          : compressor_landscape

        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
