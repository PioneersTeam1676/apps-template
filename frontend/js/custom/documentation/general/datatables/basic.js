"use strict";

// Class definition
var KTDatatablesBasic = function () {
    // Private functions

    var initZeroConfiguration = function() {
        $("#kt_datatable_zero_configuration").DataTable();
    }

    var initVerticalScroll = function() {
        $("#kt_datatable_vertical_scroll").DataTable({
            "scrollY":        "500px",
            "scrollCollapse": true,
            "paging":         false,
            "dom":   "<'table-responsive'tr>" 
        });
    }

    var initHorizontalScroll = function() {
        $("#kt_datatable_horizontal_scroll").DataTable({
            "scrollX": true
        });
    }

    var initBothScrolls = function() {
        $("#kt_datatable_both_scrolls").DataTable({
            "scrollY": 300,
            "scrollX": true
        });
    }  

    var initFixedColumns = function() {
        $("#kt_datatable_fixed_columns").DataTable({
            scrollY:        "300px",
            scrollX:        true,
            scrollCollapse: true,
            fixedColumns:   {
                left: 2
            }
        });
    }

    // Public methods
    return {
        init: function () {
            initZeroConfiguration();
            initVerticalScroll();
            initHorizontalScroll();
            initBothScrolls();
            initFixedColumns();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesBasic.init();
});