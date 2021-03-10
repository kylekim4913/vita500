$(function(){
   
    var brgr = $('.brgrbtn');
    
    brgr.on('click',function(e){
        $('.txt_menu').toggleClass('active');
        $('.brgrbtn').toggleClass('open');
    });

    $('.s_txt a').on('click',function(e){
        e.preventDefault();
        $('.pop').addClass('active');
    });
    
    $('.out').on('click',function(){
        $('.pop').removeClass('active');
    });
})

