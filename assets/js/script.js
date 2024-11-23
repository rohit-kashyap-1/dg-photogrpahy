$(".do-mini-type").click(function(){
    $(".do-mini-type").removeClass("active")
    $(this).addClass("active")

    $(".session-pic").removeClass("active")
    $(".mini-"+$(this).attr("data-session")).addClass("active")
})

$('.slick-testimonials').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });