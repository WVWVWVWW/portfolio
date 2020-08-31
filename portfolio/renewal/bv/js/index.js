$(document).ready(function(){

    $('.titleText').each(function(index){
        $(this).delay(index*80).animate({
            opacity:1
        });
    });

});//end




(function(){

    let ww;
    let wh;
    //value

    function resizeHandler(){
        ww=window.innerWidth;
        wh=window.innerHeight;

        if(ww>=1500){
    
            new Swiper('.swiper-container', {
                slidesPerView: 6,
                spaceBetween: 10,
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                }
            });
            
        }
        
        if(1500>ww && ww>=1300){
    
            new Swiper('.swiper-container', {
                slidesPerView: 5,
                spaceBetween: 10,
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                }
            });
            
        }

        if(1300>ww && ww>=980){
    
            new Swiper('.swiper-container', {
                slidesPerView: 4,
                spaceBetween: 10,
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                }
            });
            
        }
    
        if(980>ww && ww>=760){
    
            new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 10,
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                }
            });
            
        }

        if(760>ww){

            new Swiper('.swiper-container', {
                slidesPerView: 2,
                spaceBetween: 5,
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                }
            });

        }
        //swiper
    }

    window.addEventListener('resize',resizeHandler);
    resizeHandler();
    //resize

    const sec_3_aniLine=document.querySelector('.sec_3_aniLine');
    const sec_4_aniLine=document.querySelector('.sec_4_aniLine');
    const sec_4_aniText=document.querySelector('.sec_4_aniText');
    const sec_6_aniText=document.querySelector('.sec_6_aniText');
    const sec_6_aniLine=document.querySelector('.sec_6_aniLine');
    const sec_8_aniLine=document.querySelector('.sec_8_aniLine');

    const pc_pos_3=document.querySelector('.container_2').getBoundingClientRect().top;
    const pc_pos_4=document.querySelector('.sec_4_leftTop').getBoundingClientRect().top;
    const pc_pos_6=document.querySelector('.sec_6_leftTop').getBoundingClientRect().top;
    const pos_8=document.querySelector('.sec_8').getBoundingClientRect().top;

    const tab_pos_3=document.querySelector('.tab_2_textBottom').getBoundingClientRect().top;
    const tab_pos_4=document.querySelector('.sec_4_rightWrap').getBoundingClientRect().top;
    const tab_pos_6=document.querySelector('.sec_6_rightBottom').getBoundingClientRect().top;

    function scrollHandler(scrollPos,eventCon){

        if(window.innerWidth>=980){
            if(pageYOffset>pc_pos_3){
                sec_3_aniLine.classList.add('active_ani');
            }
            if(pageYOffset>pc_pos_4){
                sec_4_aniLine.classList.add('active_ani');
                sec_4_aniText.classList.add('active_ani');
            }
            if(pageYOffset>pc_pos_6){
                sec_6_aniText.classList.add('active_ani');
                sec_6_aniLine.classList.add('active_ani');
            }
            if(pageYOffset>pos_8){
                sec_8_aniLine.classList.add('active_ani');
            }
        }else if(980>window.innerWidth){
            if(pageYOffset>tab_pos_3){
                sec_3_aniLine.classList.add('active_ani');
            }
            if(pageYOffset>tab_pos_4){
                sec_4_aniLine.classList.add('active_ani');
                sec_4_aniText.classList.add('active_ani');
            }
            if(pageYOffset>tab_pos_6){
                sec_6_aniText.classList.add('active_ani');
                sec_6_aniLine.classList.add('active_ani');
            }
            if(pageYOffset>pos_8){
                sec_8_aniLine.classList.add('active_ani');
            }
        }

    }

    window.addEventListener('scroll',scrollHandler);
    scrollHandler();
    //scroll

})();//end