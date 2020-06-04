$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
})

$(".first-carousel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: "",
    autoplay: false,
})

$(".second-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: "",
    autoplay: false,
    nav: true,
    dots: false
})

$(".third-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: "",
    autoplay: false,
    nav: false,
    dots: true,
    responsive: {
        768:{
            dots: false,
            nav: true
        }
    }
})