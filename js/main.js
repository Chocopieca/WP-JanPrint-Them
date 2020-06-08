$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
})

$(".first-carousel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: "",
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
    nav: false,
    dots: true,
    responsive: {
        768:{
            dots: false,
            nav: true
        }
    }
})

$('.catalog-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    navText: "",
    items: 1,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
})

$('.inst-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    navText: "",
    items: 1,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
})