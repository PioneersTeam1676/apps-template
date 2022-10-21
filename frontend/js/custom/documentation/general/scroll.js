"use strict";

// Class definition
var KTGeneralScrollDemos = function() {
    // Private functions
    var exampleChangePosition = function() {
        var scroll = document.querySelector("#kt_scroll_change_pos");
        var btnTop = document.querySelector("#kt_scroll_change_pos_top");
        var btnBottom = document.querySelector("#kt_scroll_change_pos_bottom");

        btnTop.addEventListener("click", function (e) {
            scroll.scrollTop = 0;
        });

        btnBottom.addEventListener("click", function (e) {
            scroll.scrollTop = parseInt(scroll.scrollHeight);
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleChangePosition();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralScrollDemos.init();
});
