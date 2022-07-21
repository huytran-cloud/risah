$(document).ready(function(){

    $nav = $('.nav');
    $toggleMenu = $('.toggle-menu');

    // Click to open toggle menu
    $toggleMenu.click(function(){
        $nav.toggleClass('collapse');
    })

})