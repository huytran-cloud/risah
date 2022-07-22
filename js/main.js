const responsive = {
    0: {
        items: 1
    },
    
    320: {
        items: 1
    },

    560: {
        items: 2
    },

    960: {
        items: 3
    },

    1130: {
        items: 4
    }
}

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
        responsive: responsive,
    });

    // Click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1500)
    })

    // Click to scroll down
    $('.site-title button').click(function(){
        $('html,body').animate({
            scrollTop: 920
        }, 1000)
    })

    // AOS Instance 
    AOS.init();

})

// Alert popup function
function alertFunc(){
    alert("Chưa có LinkedIn và Google")
}