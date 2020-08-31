$(document).ready(function(){

    let i=2;

    $('.sec01').click(function(){

        i--;
        if(i==0){
            i=2;
            $('.slide').fadeIn();
        }

        $('.slide').eq(i).fadeOut();

    });

    const slideSt=setInterval(function(){
        $('.sec01').trigger('click');
    },4000);


    $('.coffeeBean_black').click(function(){
        $('.bean_box_black').fadeIn();
    });

    $('.bean_box_black').mouseleave(function(){
        $(this).fadeOut();
    });

    $('.coffeeBean_aroma').click(function(){
        $('.bean_box_aroma').fadeIn();
    });

    $('.bean_box_aroma').mouseleave(function(){
        $(this).fadeOut();
    });

    $('.tab_header_btn').click(function(){
        $('.tab_box').fadeIn();
    });

    $('.tab_box_btn').click(function(){
        $('.tab_box').fadeOut();
    });

});//end


(function(){

    const wrap=document.querySelector('.wrap');
    const title_box_top=document.querySelector('.title_box_top');
    const title_box_bottom=document.querySelector('.title_box_bottom');
    const in_header=document.querySelector('.in_header');
    const header_top_menu=document.querySelector('.header_top_menu');
    const top_menu=document.querySelectorAll('.top_menu');
    const header_logo=document.querySelector('.header_logo');
    const sec02=document.querySelector('.sec02');
    const sec03=document.querySelector('.sec03');
    const ac_menu=document.querySelectorAll('.ac_menu');
    const ac_ul=document.querySelector('.accordion_wrap ul');

    let useScroll;
    let per;

    window.addEventListener('scroll',function(){

        useScroll=wrap.offsetHeight-window.innerHeight;
        per=pageYOffset/useScroll;

        let titleMove=per*100

        if(pageYOffset>0 && pageYOffset<sec03.offsetTop){
            title_box_top.style.left=-titleMove+'%';
            title_box_bottom.style.right=-titleMove+'%';
        }

        if(pageYOffset>sec02.offsetTop){
            in_header.style.marginTop=0;
            in_header.style.backgroundColor=`#48494c`;
            header_top_menu.style.display=`none`;
            /* for(let i=0; i<top_menu.length; i++){
                top_menu[i].style.backgroundColor=`#48494c`;
            } */
            top_menu.forEach(function(item){
                item.style.backgroundColor=`#48494c`;
            });
            header_logo.style.backgroundColor=`#b70037`;
        }else{
            in_header.style.marginTop=`50px`;
            in_header.style.backgroundColor=`#b70037`;
            header_top_menu.style.display=`flex`;
            /* for(let i=0; i<top_menu.length; i++){
                top_menu[i].style.backgroundColor=`#b70037`;
            } */
            top_menu.forEach(function(item){
                item.style.backgroundColor=`#b70037`;
            });
            header_logo.style.backgroundColor=`#48494c`;
        }

    });

    ac_menu.forEach(function(item){
        item.addEventListener('click',function(){
            ac_menu.forEach(function(item){
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    ac_ul.addEventListener('mouseleave',function(){
        ac_menu.forEach(function(item){
            item.classList.remove('active');
        });
    });

})();//end