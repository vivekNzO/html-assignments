$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

var owl = $('.owl-carousel');

$('.carousel-prev').click(function(){
    owl.trigger('prev.owl.carousel')
})

$('.carousel-next').click(function(){
    owl.trigger('next.owl.carousel')
})

