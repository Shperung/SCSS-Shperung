
 function popup_form(){    
            $('#overlay').fadeIn(400,
              function(){ 
                $("#popup_form") 
                  .css('display', 'block')
                  .animate({opacity: 1, top: '50%'}, 200);
            }); 
        }/*popup_form*/

 function popup_close(){  

       $(document).on("click", ".popup-close, #overlay", function(){  
              $(".popup")
              .animate({opacity: 0, top: '50%'}, 200,
              function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
              }
              );
           }); 
        }/*popup_close*/




jQuery(document).ready(function () {

	/*Кастомный селект*/
	$( ".custom_select_ui" ).selectmenu();

	/*Ползунок с выбором*/
	$( "#slider_range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] +  " грн.  -  " +  ui.values[ 1 ]+" грн."  );
      }
    });
    $( "#amount" ).val( $( "#slider_range" ).slider( "values", 0 ) +  " грн.  -  " + $( "#slider_range" ).slider( "values", 1 )+" грн." );


    /*табы*/
     $( "#tabs" ).tabs();

     /* popup_form*/
     $(document).on("click", ".img_popup", function(){
        popup_form();
     });
     popup_close();












     //Вызов левого меню
     left_menu();   

});/*ready*/