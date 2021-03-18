$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 800) {
            
            var scroll = $(window).scrollTop();
            console.log(scroll)
            $('header .texts').css({
                'transform': 'translate(0px,' +scroll/2 +'%)'
            })
            $('.main .about article').css({
                'transform': 'translate(0px,-' +  scroll / 10 +'%)'
            })
        }
    })
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800) {
            $('.main .about article').css({
                'transform': 'translate(0px, 0px)'
            })
            $('header .texts').css({
                'transform': 'translate(0px, 0px)'
            })
        }
    })
})