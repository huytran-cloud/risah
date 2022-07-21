$(document).ready(function(){

    $nav = $('.nav');
    $toggleMenu = $('.toggle-menu');

    // Click to open toggle menu
    $toggleMenu.click(function(){
        $nav.toggleClass('collapse');
    })

    // Owl-Carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6969,
        // nav: true,
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });

})