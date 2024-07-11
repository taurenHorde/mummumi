
$(document).ready(function(){

    // $('#a2>p').hide(); 
    // $('#a2>p:first-child').show(); 
    // setInterval(function(){
    //  $('#a2>p:first-child').fadeOut().next().fadeIn().end(1000).appendTo('#a2'); },3000);
    //  // alarm

    $('.nav').mouseover(function(){
        $('header').css({height:'250px',background:'white'})
    }).mouseout(function(){

        if($(document).scrollTop() > 10){
        $('header').css({height:'60px',background:'white'})
        $('.logo>img').eq(0).css({display:'none'})
        $('.logo>img').eq(1).css({display:'block'})
        } else {
        $('header').css({height:'60px',background:'none'})  
        $('.logo>img').eq(0).css({display:'block'})
        $('.logo>img').eq(1).css({display:'none'})
        }
    }) // menu

    $(window).scroll(function(){     
        var T = $(document).scrollTop();

        if(T > 10){
            $('header').css({top:'0px',background:'white'});
            $('.nav>ul>li>a').css({color:'black'})
            $('.logo>img').eq(0).css({display:'none'})
            $('.logo>img').eq(1).css({display:'block'})

        } else {
            $('header').css({background:'none'});
            $('.nav>ul>li>a').css({color:'gray'})
            $('.logo>img').eq(0).css({display:'block'})
            $('.logo>img').eq(1).css({display:'none'})

        }
    }) // menu scroll
    




    // $('.select>div').click(function(){
    //     var Sn = $(this).index();
        
        
    //     $(this).css({borderRadius:'20px',background:'white',color:'black'}).siblings().css({borderRadius:'0',background:'none',color:'white'})
        
    //     $('.number>div').css({opacity:0,left:'300px'})
    //     $('.number>div').eq(Sn).css({opacity:1,left:'0px'})

    //     var text = $(this).children('p').text();
        
    //     $('.title2_text').text(text)

    // })// sec1 click


    $('.mo_but').click(function(){
        $('.mo_nav').css({right:0})
        $('#full').css({display:'block'})

    })//mo_menu

    $('.mo_but2').click(function(){
        $('.mo_nav').css({right:'-50%'})
        $('#full').css({display:'none'})

    })//mo_menu



    $('.select>div').click(function(){

        var Hi = $(this).index();

        console.log(Hi);
         $('.his_view>div').css({display:'none'})
         $('.his_view>div').eq(Hi).css({display:'block'})


    })//page1_history 


})//end
