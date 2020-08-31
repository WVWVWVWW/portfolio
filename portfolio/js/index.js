$(document).ready(function(){

    /* ------------------------ */

    let winW=$(window).width();
    let winH=$(window).height();

    $(window).resize(function(){
        winW=$(window).width();
        winH=$(window).height();
    });

    /* ------------------------ */

    $('.menuBtn').click(function(){
        $('.menuBox').fadeToggle(500);
    });
    
    let sec03Top=$('.sec03').offset().top;

    $(window).scroll(function(){
        let sct=$(window).scrollTop();

        if(sct>=sec03Top){
            $('.skill_box .skill').each(function(index){
                $(this).delay(index*80).animate({
                    opacity:1
                });
            });
        }
    });
    
    function popUp(folderName,boxName){

        $(folderName).click(function(){
            $(boxName).fadeIn();
        });

        $('.close_btn').click(function(){
            $(boxName).fadeOut();
        });

    }
    popUp('.others_namecard','.namecard_box');
    popUp('.others_illust','.illust_box');
    popUp('.others_photo','.photo_box');
    popUp('.others_griptok','.griptok_box');
    popUp('.others_frames','.frames_box');

    $('.menu').click(function(){
        $('.menuBox').fadeOut(500);
    });


});//end

(function(){

    const wrap=document.querySelector('.wrap');
    const gage=document.querySelector('.gage');
    const bannerTitle=document.querySelector('.sec01_title');
    const footerTitle=document.querySelector('.footer_title');
    const noTitle=document.querySelector('.others_no');
    const menuAll=document.querySelectorAll('.menu');

    let useScroll;
    let per;
    let boxH;
    let imgH;
    let mousePos={x:0, y:0};
    /* let secTop; */
    let ww;
    let wh;
    
    window.addEventListener('scroll',function(){

        useScroll=wrap.offsetHeight-window.innerHeight;
        per=pageYOffset/useScroll
        let moveScroll=per*100

        gage.style.width=moveScroll+'%';
        gage.innerHTML=Math.round(moveScroll)+'%';

        window.scroll({
            behavior:"smooth",
        });

    });

    function imgMove(boxName,imgName){

        const boxElem=document.querySelector(boxName);
        const imgElem=document.querySelector(imgName);
        boxH=boxElem.offsetHeight;
        imgH=imgElem.offsetHeight;
        let imgMoving=-imgH+boxH;

        boxElem.addEventListener('mouseover',function(){
            imgElem.style.transform=`translateY(${imgMoving}px)`;
        });

        boxElem.addEventListener('mouseout',function(){
            imgElem.style.transform=`translateY(0)`
        });

    }

    window.addEventListener('mousemove',function(e){
        mousePos.x= -1 + (e.clientX/window.innerWidth)*2;
        mousePos.y= 1 - (e.clientY/window.innerHeight)*2;

        bannerTitle.style.transform=`translate(${-mousePos.x*5}%,${mousePos.y*5}%)`;
        footerTitle.style.transform=`translate(${-mousePos.x*5}%,${mousePos.y*5}%)`;
    });

    noTitle.addEventListener('click',function(){
        alert('준비중입니다 :-)');
    });

    /* -------------------------------------------------------- */

    function menuClick(menuNum,secNum){

        let secTop=document.querySelector(secNum);

        menuNum.addEventListener('click',function(){

            window.scroll({
                behavior:'smooth',
                top:secTop.offsetTop
            });

        });

    }
        
    menuClick(menuAll[0],'.sec02');
    menuClick(menuAll[1],'.sec03');
    menuClick(menuAll[2],'.sec04');
    menuClick(menuAll[3],'.sec05');
    menuClick(menuAll[4],'.sec06');
    menuClick(menuAll[5],'.sec07');
    menuClick(menuAll[6],'.sec08');

    /* document.querySelector('.menu01').addEventListener('click',function(){
        window.scroll({
            behavior:'smooth',
            top:document.querySelector('.sec02').offsetTop
        });
    }); */

    /* -------------------------------------------------------- */

    function resizeHandler(){

        ww=window.innerWidth;
        wh=window.innerHeight;

        useScroll=wrap.offsetHeight-window.innerHeight;
        per=pageYOffset/useScroll

        imgMove('.bv_pc_box','.bv_pc_img>img');
        imgMove('.bv_mo_box','.bv_mo_img>img');
        imgMove('.hw_pc_box','.hw_pc_img>img');
        imgMove('.hw_mo_box','.hw_mo_img>img');
        imgMove('.zs_pc_box','.zs_pc_img>img');
        imgMove('.zs_mo_box','.zs_mo_img>img');
        imgMove('.ts_pc_box','.ts_pc_img>img');
        imgMove('.ts_mo_box','.ts_mo_img>img');

    }

    window.addEventListener('resize',resizeHandler);
    resizeHandler();
    

})();//end