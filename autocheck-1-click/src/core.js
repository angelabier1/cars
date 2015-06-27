$(function() {


    $(function() {
        var VIN_CLASSNAME = 'vin';
        var BD_LIST_VIN = $('dt:contains("VIN:") + dd');
        var BD_DETAIL_VIN = $("span:contains('VIN:') + strong");
        var IAAI_VIN = $('td div span.tip_VIN');
        var IAAI_LIST_VIN = $('dd.tip_vehicleStats');
        var BMW_REG = $('tr > td > a.reglink');
        var COPART = $("ul.grid_2.results-second-col li:last-child");


        IAAI_VIN.addClass(VIN_CLASSNAME);
        COPART.addClass(VIN_CLASSNAME);

        BD_DETAIL_VIN.addClass(VIN_CLASSNAME);
        BD_LIST_VIN.addClass(VIN_CLASSNAME);

        BMW_REG.addClass(VIN_CLASSNAME);
    });

    $(function() {
        $('.vin').on('click', function() {
            vinNumber = $(this).text().replace('VIN: ','');
            if (vinNumber) {
                window.open('http://www.saratogahonda.com/ajax-autocheck?vin=' + vinNumber);
            }
        });
    });
});
