document.addEventListener("DOMContentLoaded", init);

function init(){
    $(function() {
        $( "#slider-range-min" ).slider({
          range: "min",
          value: 37,
          min: 200,
          max: 3000,
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.value );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
      });
}