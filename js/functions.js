//Мобильное меню
function left_menu(){


var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        showLeft = document.getElementById( 'showLeft' ),
        showLeft_gamburger = document.getElementById( 'showLeft_gamburger' ),
        showRight = document.getElementById( 'showRight' ),
        showTop = document.getElementById( 'showTop' ),
        showBottom = document.getElementById( 'showBottom' ),
        showLeftPush = document.getElementById( 'showLeftPush' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        close_left = document.getElementById( 'cbp-spmenu-close-left' ),
        close_right = document.getElementById( 'cbp-spmenu-close-right' ),
        close_top = document.getElementById( 'cbp-spmenu-close-top' ),
         close_bottom = document.getElementById( 'cbp-spmenu-close-bottom' ),
        body = document.body;

showLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
};
showLeft_gamburger.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft_gamburger' );
};
showRight.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
    disableOther( 'showRight' );
};
showTop.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuTop, 'cbp-spmenu-open' );
    disableOther( 'showTop' );
};
showBottom.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuBottom, 'cbp-spmenu-open' );
    disableOther( 'showBottom' );
};
showLeftPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toright' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeftPush' );
};
showRightPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toleft' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
    disableOther( 'showRightPush' );
};



$(document).on("click", "#cbp-spmenu-close-left", function(){  
   $("body").removeClass("cbp-spmenu-push-toright");  
});
$(document).on("click", "#cbp-spmenu-close-right", function(){
   $("body").removeClass("cbp-spmenu-push-toleft");
});

close_left.onclick = function() {
        classie.toggle( menuLeft, 'cbp-spmenu-open' );  
        };
close_right.onclick = function() {
        classie.toggle( menuRight, 'cbp-spmenu-open' );        
        };
close_top.onclick = function() {
        classie.toggle( menuTop, 'cbp-spmenu-open' );        
        };
close_bottom.onclick = function() {
        classie.toggle( menuBottom, 'cbp-spmenu-open' );        
        };


function disableOther( button ) {
    if( button !== 'showLeft' ) {
        classie.toggle( showLeft, 'disabled' );
    }
     if( button !== 'showLeft_gamburger' ) {
        classie.toggle( showLeft_gamburger, 'disabled' );
    }
    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }
    if( button !== 'showTop' ) {
        classie.toggle( showTop, 'disabled' );
    }
    if( button !== 'showBottom' ) {
        classie.toggle( showBottom, 'disabled' );
    }
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
    }
}




}/*left_menu*/





