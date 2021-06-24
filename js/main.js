$(window).scroll(function (){
    $('#learn .section-title').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__fadeInLeft');
        }
    });
});
$(window).scroll(function (){
    $('#learn .skill1').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__fadeInUp');
        }
    });
});
$(window).scroll(function (){
    $('#learn .skill2').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__fadeInUp');
        }
    });
});
$(window).scroll(function (){
    $('#learn .skill3').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__fadeInUp');
        }
    });
});
$(window).scroll(function (){
    $('#mail .section-title').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__fadeInRight');
        }
    });
});
$(window).scroll(function (){
    $('#mail .form').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__fadeInUp');
        }
    });
});
$(window).scroll(function (){
    $('#footer .intro2').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('animate__bounceIn');
        }
    });
});













