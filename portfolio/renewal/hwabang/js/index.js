$(document).ready(function(){
    
    $('.pc_main_menu').click(function(){
        
        $('.pc_sub_menu_box').slideDown(1000);
        
    });
    
    $('.pc_sub_menu_box').mouseleave(function(){
        
        $(this).fadeOut(500);
        
    })
    
    var mb_click=0;

    $('.tab_menu_btn').click(function(){

        if(mb_click==0){
            $('.tab_menu_box').fadeIn(300);

            mb_click=1;
        }else if(mb_click==1){
            $('.tab_menu_box').fadeOut(300);

            mb_click=0;
        }

    });
    
//    var wh=$(window).height();
//    
//    if(wh<=680){
//        $('.tabMenu_benefit li,.tabMenu_category li').css({
//            marginBottom:15
//        });
//    }
    
});//end