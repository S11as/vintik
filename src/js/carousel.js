//carousel lib
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
$(window).on('load',function(){
    $('.owl-carousel').owlCarousel({
        margin:60,
        autoWidth:true,
        dots: true,
        stagePadding: 50,
    });
    $(".owl-dots")[0].style.display = "flex";
})

