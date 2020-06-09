// owlCarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});


$(".first-carousel").owlCarousel({
    loop: true,
    navText: "",
    items: 1,
    margin: 10,
    nav: false
});

$(".second-carousel").owlCarousel({
    loop: true,
    navText: "",
    items: 1,
    margin: 10,
    autoplay: false,
    dots: false,
    nav: true,
});

$(".third-carousel").owlCarousel({
    loop: true,
    navText: "",
    items: 1,
    margin: 10,
    dots: true,
    responsive: {
        768:{
            dots: false,
            nav: true
        }
    }
});

$('.catalog-carousel').owlCarousel({
    navText: "",
    loop:false,
    margin:5,
    nav:true,
    dots: false,
    items: 1,
    responsive:{
        768:{
            items:3
        }
    }
});

$('.inst-carousel').owlCarousel({
    loop: true,
    navText: "",
    items: 1,
    margin:5,
    nav:false,
    dots: true,
    autoplay: true,
    responsive:{
        768:{
            items:3
        }
    }
});

// code

let burger = document.querySelector('.nav-right-block>button');


burger.onclick = function() {
    this.classList.toggle("close");
    document.body.classList.toggle("hidden");
}