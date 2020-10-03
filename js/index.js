

$(window).scroll(()=>{

    let scroll = $(window).scrollTop();

    if (scroll == 0) {

        scrollTop();
    }
    else {

        scrollAny();
    }
});

function scrollTop() {
    $(".custom-nav").css("backgroundColor", "transparent");
    $(".custom-nav .navbar > a").css("color", "white");
    $(".navbar-collapse .navbar-nav .nav-item >a").css("color", "white");
    $(".custom-nav").css('box-shadow', 'none');
}

function scrollAny() {
    $(".custom-nav").css("backgroundColor", "rgba(255, 255, 255, 1)");
    $(".custom-nav .navbar > a").css("color", "black");
    $(".navbar-collapse .navbar-nav .nav-item >a").css("color", "black");
    $(".custom-nav").css('box-shadow', '0 1px 8px 3px rgba(0, 0, 0, 0.5)');
}




$(window).scroll(()=> {

    let scroll = $(window).scrollTop();

    if (scroll > 50) {
        $('.btn-up').fadeIn(500);
    }
    else {
        $('.btn-up').fadeOut(500);
    }

});

$(".btn-up").click(()=> {

    $("html").animate({ scrollTop: '0' }, 2000);

});

$(document).ready(()=> {
    $(".owl-carousel").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        dotsSpeed: 1000,
        dots: true,
        margin:10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            760: {
                items: 1,

            },
            1000: {
                items: 3,
            }
        },
      


    });
});

$(".nav-link").click(function(){
    let src=$(this).attr('href');
    if(src=='index.html')
    {
      
        window.location.replace("index.html");
    }
    if(src=='coachs.html')
    {
      
        window.location.replace("coachs.html");
    }
    if(src=='classes.html')
    {
        window.location.replace("classes.html");
    }
    if(src=='offers.html')
    {
        window.location.replace("offers.html");
    }
    if(src=='index.html#contact-us')
    {
      
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000);
        window.location.replace("index.html#contact-us");
    }
    if(src=='#contact-us')
    {
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000);   
    }

    if(src=='#home' ||src=='#offers' ||src=='#about' ||src=='#classes' ||src=='#coachs' )
    {
        $("html,body").animate({ scrollTop:'0' } ,2000)
    }
    else
    {    
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000)
    }
});

AOS.init();


var typed = new Typed('.element',{
    strings: ["BMI CALCULATOR.^1000", "FITNESS.^1000","WORKOUT.^1000"],
    typeSpeed: 60,
    loop:true,
    smartBackspace: true,
    backSpeed:60,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
});
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
