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
    margin:50,
    nav:false,
    dots: true,
    autoplay: true,
    responsive:{
        768:{
            items:3,
            dots: false,
            nav: true
        }
    }
});

// code
// burger
let burger = document.querySelector('.navbar-toggler'),
    closeBurger = document.querySelector('.close-burger'),
    openBurger = document.querySelector('.open-burger');

console.log(burger);
console.log(closeBurger.style.display === "");
console.log(openBurger.style.display === "");

function taggleNavbar() {
    if (openBurger.style.display === "") {
        openBurger.style.display = "none";
        closeBurger.style.display = "block";
        document.body.classList.toggle("hidden");
        return
    } else if (openBurger.style.display === "none") {
        openBurger.style.display = "";
        closeBurger.style.display = "";
        document.body.classList.toggle("hidden");
    }
};

burger.onclick = taggleNavbar;

// map
function myMap() {
    let mapCanvas = document.getElementById("map"),
        mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        },
        map = new google.maps.map(mapCanvas, mapOptions);
}

    // if (openBurger.style.display === "none") {

    // }


    // openBurger.style.display === "" 
    // ? () => {
    //     openBurger.style.display = "none"
    //     closeBurger.style.display = "block"
    //     return
    // } 
    // : () => {
    //     openBurger.style.display = ""
    //     closeBurger.style.display = ""
    // }

// function closeBurger() {
//     burger.classList.toggle("close");
//     document.body.classList.toggle("hidden");
// }


// burger.onclick = closeBurger;
// shadow.onclick = closeBurger;