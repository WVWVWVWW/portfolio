$(document).ready(function(){
    
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        var bh=$(window).height();
        
        if(sct>bh){
            $('.menu').css({
                color:'#091846'
            });
        }else{
            $('.menu').css({
                color:'#efefef'
            });
        }
    });
    
    $('.slider_wrap').each(function(index){
        $(this).attr('data-index',index);
    });
    
    $('.slider_btn').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var sbc=$(this).attr('data-index')
        
        $('.slider_btn[data-index!='+ sbc +']').removeClass('slider_btn_on');
        $('.slider_btn[data-index='+ sbc +']').addClass('slider_btn_on',1000);
        
        $('.slider_wrap[data-index!='+ sbc +']').removeClass('slider_wrap_on');
        $('.slider_wrap[data-index='+ sbc +']').addClass('slider_wrap_on',2000);
        
    });
    
    var i=0;
    
    var st=setInterval(function(){
        i++;
        if(i>3){
            i=0;
        }
        
        $('.slider_btn').eq(i).trigger('click');
        
    },4000);
    
});//end