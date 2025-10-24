$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

var owl = $('.owl-carousel');

$('.left-navigation').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.right-navigation').click(function() {
    owl.trigger('next.owl.carousel');
});

const questions = document.querySelectorAll(".question")
console.log(questions)
for(let i = 0;i<questions.length;i++){
    questions[i].addEventListener("click",()=>{
        let current = questions[i]
        if(current.classList.contains("showAnswer")){
            current.classList.remove("showAnswer")
        }else{
            current.classList.add("showAnswer")
        }
    })
}
