//carousel lib
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$('.owl-carousel').owlCarousel({
    margin:60,
    autoWidth:true,
    items:5,
    dots: true,
    stagePadding: 50,
});
$(".owl-dots")[0].style.display = "flex";
