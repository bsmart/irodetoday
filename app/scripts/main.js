// Windows https://github.com/nick-jonas/nick-jonas.github.com/tree/master/windows
$(document).ready(function() {

    $('.window').windows({
        snapping: true,
        snapSpeed: 500,
        snapInterval: 1100,
        onScroll: function(scrollPos) {
            // scrollPos:Number
        },
        onSnapComplete: function($el) {
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el) {
            // when new window ($el) enters viewport
        }
    })

});


$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});