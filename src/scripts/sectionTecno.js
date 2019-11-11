$(document).ready(function(){
    //$('.container').hide(0);
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido = $('.textos').offset();
        contenido = contenido.top;

        if (windowHeight >= contenido){

            
            $('div .textos').css({
                opacity: 0,
                marginTop: 0
                //display: 'none'

            });
                
            $('div .textos').animate({
                opacity: 1,
                marginTop: '-60px'
                //display: 'block'
                
            }, 1500);
            $('.container').fadeIn(500);
        }
        // }else{
        //     $('.container').fadeOut(500);
        // }

    });
});


// $(document).ready(function(){
    
//     if( $(window).width() > 800 ){
//         $('div .textos').css({
//              opacity: 0,
//              marginTop: 0
//          });
 
//          $('div .textos').animate({
//              opacity: 1,
//              marginTop: '-52px'
//         }, 1500);
//     }
//});