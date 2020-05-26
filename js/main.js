
$('.owl-carousel').owlCarousel({
    loop:false,
    animateIn: 'animate__slideInRight',
    animateOut: 'animate__slideOutLeft',
    mouseDrag: true,
    smartSpeed: 1200,
    margin:0,
    nav:true,
    navText: ["<img src='../images/left-chevron-active.svg'>", "<img src='../images/right-chevron-active.svg'>"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.creatures-page .owl-carousel .owl-nav').addClass('creatures-nav')
$('.weapons-page .owl-carousel .owl-nav').addClass('weapons-nav')
$('.activities-page .owl-carousel .owl-nav').addClass('activities-nav')


$('.creatures-nav button').on('click', function(){
    var cek = $(this).hasClass('disabled')
    var cekNext = $(this).hasClass('owl-next')
    var cekPrev = $(this).hasClass('owl-prev')
    
    if (cek == false && cekNext == true) {
        $('.creatures-page .off-wall .header').removeClass('header-animate-1')
        $('.creatures-page .off-wall .header').removeClass('header-animate-2')
        $('.creatures-page .off-wall .header').removeClass('header-animate-3')
        $('.creatures-page .off-wall .header').addClass('header-animate-1')
    }else if(cek == true && cekNext == true) {
        $('.creatures-page .off-wall .header').removeClass('header-animate-1')
        $('.creatures-page .off-wall .header').removeClass('header-animate-2')
        $('.creatures-page .off-wall .header').removeClass('header-animate-3')
        $('.creatures-page .off-wall .header').addClass('header-animate-2')
    }else if(cek == true && cekPrev == true) {
        $('.creatures-page .off-wall .header').removeClass('header-animate-1')
        $('.creatures-page .off-wall .header').removeClass('header-animate-2')
        $('.creatures-page .off-wall .header').removeClass('header-animate-3')
        $('.creatures-page .off-wall .header').addClass('header-animate-3')
    }else {
        $('.creatures-page .off-wall .header').removeClass('header-animate-1')
        $('.creatures-page .off-wall .header').removeClass('header-animate-2')
        $('.creatures-page .off-wall .header').removeClass('header-animate-3')
        $('.creatures-page .off-wall .header').addClass('header-animate-1')
    }
})

$('.weapons-nav button').on('click', function(){
    var cek = $(this).hasClass('disabled')
    var cekNext = $(this).hasClass('owl-next')
    var cekPrev = $(this).hasClass('owl-prev')
    
    if (cek == false && cekNext == true) {
        $('.weapons-page .off-wall .header').removeClass('header-animate-1')
        $('.weapons-page .off-wall .header').removeClass('header-animate-2')
        $('.weapons-page .off-wall .header').removeClass('header-animate-3')
        $('.weapons-page .off-wall .header').addClass('header-animate-1')
    }else if(cek == true && cekNext == true) {
        $('.weapons-page .off-wall .header').removeClass('header-animate-1')
        $('.weapons-page .off-wall .header').removeClass('header-animate-2')
        $('.weapons-page .off-wall .header').removeClass('header-animate-3')
        $('.weapons-page .off-wall .header').addClass('header-animate-2')
    }else if(cek == true && cekPrev == true) {
        $('.weapons-page .off-wall .header').removeClass('header-animate-1')
        $('.weapons-page .off-wall .header').removeClass('header-animate-2')
        $('.weapons-page .off-wall .header').removeClass('header-animate-3')
        $('.weapons-page .off-wall .header').addClass('header-animate-3')
    }else {
        $('.weapons-page .off-wall .header').removeClass('header-animate-1')
        $('.weapons-page .off-wall .header').removeClass('header-animate-2')
        $('.weapons-page .off-wall .header').removeClass('header-animate-3')
        $('.weapons-page .off-wall .header').addClass('header-animate-1')
    }
})

$('.activities-nav button').on('click', function(){
    var cek = $(this).hasClass('disabled')
    var cekNext = $(this).hasClass('owl-next')
    var cekPrev = $(this).hasClass('owl-prev')
    
    if (cek == false && cekNext == true) {
        $('.activities-page .off-wall .header').removeClass('header-animate-1')
        $('.activities-page .off-wall .header').removeClass('header-animate-2')
        $('.activities-page .off-wall .header').removeClass('header-animate-3')
        $('.activities-page .off-wall .header').addClass('header-animate-1')
    }else if(cek == true && cekNext == true) {
        $('.activities-page .off-wall .header').removeClass('header-animate-1')
        $('.activities-page .off-wall .header').removeClass('header-animate-2')
        $('.activities-page .off-wall .header').removeClass('header-animate-3')
        $('.activities-page .off-wall .header').addClass('header-animate-2')
    }else if(cek == true && cekPrev == true) {
        $('.activities-page .off-wall .header').removeClass('header-animate-1')
        $('.activities-page .off-wall .header').removeClass('header-animate-2')
        $('.activities-page .off-wall .header').removeClass('header-animate-3')
        $('.activities-page .off-wall .header').addClass('header-animate-3')
    }else {
        $('.activities-page .off-wall .header').removeClass('header-animate-1')
        $('.activities-page .off-wall .header').removeClass('header-animate-2')
        $('.activities-page .off-wall .header').removeClass('header-animate-3')
        $('.activities-page .off-wall .header').addClass('header-animate-1')
    }
})


var Rwall_1 = $('.relative-wall').get()

$.each( Rwall_1, function( key, value ) {
    var margin = key * 115+'px'
    $(this).css('margin-left', margin)
})

var Rwall_2 = $('.relative-wall-2').get()

$.each( Rwall_2, function( key, value ) {
    var margin = key * 115+'px'
    $(this).css('margin-left', margin)
});