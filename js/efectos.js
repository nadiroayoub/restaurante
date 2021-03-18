$(document).ready(function(){

    //Menu Effect
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //Header effect
    if( $(window).width() > 800 ) {
        $('header .texts').css({
            opacity: 0,
            marginTop: 0
        })
        $('header .texts').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    // Scroll Elements Menu - About
    var about = $('#about').offset().top,
        menu = $('#platillos').offset().top,
        galery = $('#galery').offset().top,
        ubication = $('#ubication').offset().top;

    $('#btn-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 100
        }, 500);
    })

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    })
    $('#btn-galery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galery
        }, 500);
    })
    $('#btn-ubication').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubication
        }, 500);
    })
    
})