"use strict";

// Class definition
var KTDatatablesAdvanced = function () {
    // Private functions

    var initColumnRendering = function() {
        var status = {
            1: {"title": "Pending", "state": "primary"},
            2: {"title": "Delivered", "state": "danger"},
            3: {"title": "Canceled", "state": "primary"},
            4: {"title": "Success", "state": "success"},
            5: {"title": "Info", "state": "info"},
            6: {"title": "Danger", "state": "danger"},
            7: {"title": "Warning", "state": "warning"},
        };

        $("#kt_datatable_column_rendering").DataTable({
            "columnDefs": [
                {
                    // The `data` parameter refers to the data for the cell (defined by the
                    // `data` option, which defaults to the column being worked with, in
                    // this case `data: 0`.
                    "render": function ( data, type, row ) {
                        var index = KTUtil.getRandomInt(1, 7);

                        return data + '<span class="ms-2 badge badge-light-' + status[index]['state'] + ' fw-bold">' + status[index]['title'] + '</span>';
                    },
                    "targets": 1
                }
            ]
        });
    }

    var initComplexHeader = function() {
        $("#kt_datatable_complex_header").DataTable({
            "columnDefs": [ {
                "visible": false,
                "targets": -1
            }]
        });
    }

    var initRowGrouping = function() {
        var groupColumn = 2;

        var table = $("#kt_datatable_row_grouping").DataTable({
            "columnDefs": [{
                "visible": false,
                "targets": groupColumn
            }],
            "order": [
                [groupColumn, "asc"]
            ],
            "displayLength": 25,
            "drawCallback": function(settings) {
                var api = this.api();
                var rows = api.rows({
                    page: "current"
                }).nodes();
                var last = null;

                api.column(groupColumn, {
                    page: "current"
                }).data().each(function(group, i) {
                    if (last !== group) {
                        $(rows).eq(i).before(
                            "<tr class=\"group fs-5 fw-bolder\"><td colspan=\"5\">" + group + "</td></tr>"
                        );

                        last = group;
                    }
                });
            }
        });

        // Order by the grouping
        $("#kt_datatable_row_grouping tbody").on("click", "tr.group", function() {
            var currentOrder = table.order()[0];
            if (currentOrder[0] === groupColumn && currentOrder[1] === "asc") {
                table.order([groupColumn, "desc"]).draw();
            } else {
                table.order([groupColumn, "asc"]).draw();
            }
        });
    }

    var initFooterCallback = function() {
        $("#kt_datatable_footer_callback").DataTable({
            "footerCallback": function ( row, data, start, end, display ) {
                var api = this.api(), data;
     
                // Remove the formatting to get integer data for summation
                var intVal = function ( i ) {
                    return typeof i === "string" ?
                        i.replace(/[\$,]/g, "")*1 :
                        typeof i === "number" ?
                            i : 0;
                };
     
                // Total over all pages
                var total = api
                    .column( 4 )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
     
                // Total over this page
                var pageTotal = api
                    .column( 4, { page: "current"} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
     
                // Update footer
                $( api.column( 4 ).footer() ).html(
                    "$"+pageTotal +" ( $"+ total +" total)"
                );
            }
        });
    }

    var initDomPositioning = function() {
        $("#kt_datatable_dom_positioning").DataTable({
            "language": {		
                "lengthMenu": "Show _MENU_",
            },
            "dom": 
                "<'row'" +
                "<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
                "<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
                ">" +
                
                "<'table-responsive'tr>" +
                
                "<'row'" + 
                "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" + 
                "<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
                ">"
        });
    }

    var initResponsive = function() {
        var status = {
            1: {"title": "Pending", "state": "primary"},
            2: {"title": "Delivered", "state": "danger"},
            3: {"title": "Canceled", "state": "primary"},
            4: {"title": "Success", "state": "success"},
            5: {"title": "Info", "state": "info"},
            6: {"title": "Danger", "state": "danger"},
            7: {"title": "Warning", "state": "warning"},
        };

        $("#kt_datatable_responsive").DataTable({
            responsive: true,
            columnDefs: [
                {
                    // The `data` parameter refers to the data for the cell (defined by the
                    // `data` option, which defaults to the column being worked with, in
                    // this case `data: 0`.
                    "render": function ( data, type, row ) {
                        var index = KTUtil.getRandomInt(1, 7);

                        return data + '<span class="ms-2 badge badge-light-' + status[index]['state'] + ' fw-bold">' + status[index]['title'] + '</span>';
                    },
                    "targets": 1
                }
            ]
        });
    }

    var initSelect = function() {
        $("#kt_datatable_select").DataTable({
            select: true
        });
    }

    // Public methods
    return {
        init: function () {
            initColumnRendering();
            initComplexHeader();
            initRowGrouping();
            initFooterCallback();
            initDomPositioning();
            initResponsive();
            initSelect();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesAdvanced.init();
});