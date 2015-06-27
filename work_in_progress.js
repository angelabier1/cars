$(function() {
    $(function() {
        var VIN_CLASSNAME = 'vin';
        var LIST_VIN = $('dt:contains("VIN:") + dd');
        var DETAIL_VIN = $("span:contains('VIN:') + strong");
        var COPART = $("ul.grid_2.results-second-col li:last-child");
        DETAIL_VIN.addClass(VIN_CLASSNAME);
        LIST_VIN.addClass(VIN_CLASSNAME);
        COPART.addClass(VIN_CLASSNAME);
        var COPART_VIN = $('span#vinDiv');
        var COPART_LIST = $('ul.results-second-col > li > label:contains("VIN")');
    });

    $(function() {
        $('.vin').on('click', function() {
            vinNumber = $(this).text();
            vinNumber.replace(': ','');
            var autoCheckUrl = 'http://www.saratogahonda.com/ajax-autocheck?vin=' + vinNumber;
            var $newLink = $('<a href="autoCheckUrl" class="autocheck-link">AutoCheck Report</a> ');
            if (vinNumber) {
                $('.autocheck-link').popupWindow({
                    height = 900,
                        width = 600,
                        centerScreen: 1
                });
            }
        });
    });
});
