// Hamburger menu

$(document).ready(function(){

    /* Menu fade/in out on mobile */
    $(".open-button").click(function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $(".menu").toggleClass('open');
    });

});

$(function () {
    $('.open-button').on('click', function (e) {
        var menuItem = $( e.currentTarget );

        if (menuItem.attr( 'aria-expanded') === 'true') {
            $(this).attr( 'aria-expanded', 'false');
        } else {
            $(this).attr( 'aria-expanded', 'true');
        }
    });
});