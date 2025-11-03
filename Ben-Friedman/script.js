$('.owl-carousel').owlCarousel({
    // center:true,
    loop:true,
    margin:20,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
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

$('.president-card').each(function(i){
    $(this).click(function(j){
        $('.president-card').each(function(){
            $(this).removeClass('tabActive')
        })

        $('.president-bottom').each(function(k){
            $(this).removeClass('tabActive')
            $(this).addClass('d-none')

            if(i==k){
                $(this).addClass('tabActive')
                $(this).removeClass('d-none')
            }
        })

        $(this).addClass('tabActive')
    })
})
