"use strict";

// Class definition
var KTFormsBootstrapSelect = function() {
    // Private functions
    var example = function() {
        // Select container element
        var elements = document.querySelectorAll(".bootstrap-select");

        // Init Bootstrap Select --- more info: https://github.com/snapappointments/bootstrap-select/
        elements.forEach(element => {
            $(element).selectpicker();
        });
        
    }

    return {
        // Public Functions
        init: function() {
            example();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsBootstrapSelect.init();
});
