/*sticky nav*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
})



/*toggle button*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})









/*phone slide*/
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  /*customer-slide*/

  $('.responsive-2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
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
      

  /* top of page button */
  if ($('.top-of-page').length > 0) {     
    //when scrolling, trigger the function
          $(document).scroll(function () {
            // display button when scolling past 100px
              if ($(document).scrollTop() >= 100) {
                  $('.top-of-page').removeClass('fade-out');
              } else {
                  $('.top-of-page').addClass('fade-out');
              }
          })
  
          $('.top-of-page').click(function () {
              $("html, body").animate({scrollTop: "0px"}, 500);
          })
      }
