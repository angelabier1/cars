var overlay_html = '<div id="overlay" class="overlay">' +
    '<div id="my_awesome_iframe_container">' +
    '<iframe id="1click_iframe" width=100% height=100% frameborder=0></iframe>' +
    '</div>' +
    '</div>';

//need to get the name of the extension
// var list_vin = document.querySelectorAll('div.table-row>')
//$wl is WishList Button
// var $wl = $('button#wl_action');
var methods = {};

  // This method will eventually return
  // VINs from the current page.
  methods.getAutoCheck = function(){
    var nodes = document.querySelectorAll('*');
    return nodes.length;
  };

var $vins = $('div.table-row > div.col01 > div.text-holder > dl > dt:contains("VIN:") + dd')
$vins.each(function() {
$(this).on(click, function() {

});
});

document.querySelector('#overlay').classList.add('show');
  document.querySelector('#overlay').onclick = removeOverlay;
//  window.onfocus = removeOverlay;


}
function removeOverlay(){

  document.getElementById("overlay").classList.remove('show');

}


.nodeName == 'DT' && srcElement.previousSibling.textContent == 'VIN:' || srcElement.nodeName == 'STRONG'



window.addEventListener('load', setup, true);


"background": {
        "scripts": ["src/background.js"]



    $('dd.vin').on('click', function(e) {
        srcElement
    });
    },

    window.open('http://www.saratogahonda.com/ajax-autocheck?vin=' + vinNumber);



                    window.open('http://www.saratogahonda.com/ajax-autocheck?vin=' + vinNumber, "popupWindow", "width=600,height=600,scrollbars=yes");



 $(function() {$('#ctl00_ContentPlaceHolder1_VINc_VINLabel').on('click',function() {
       vinNumber = $(this).innerHtml;
       if(vinNumber){
          window.open('http://www.saratogahonda.com/ajax-autocheck?vin=' + vinNumber);
       }
    });
  });