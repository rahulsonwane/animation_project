
$(document).ready(function () {
fetch("https://awards.channelier.com/api/getEmployeeData")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let teamElement = document.getElementsByClassName("bubble");
  // console.log(teamElement);
    data.forEach((element, index) => {
      console.log(teamElement[index].children);
      if(index<teamElement.length){
      
          teamElement[index].classList.remove("invisible");
          teamElement[index].classList.add("visible");
          teamElement[index].children[1].src = `https://awards.channelier.com${element.employeeImage}`;
          teamElement[index].children[2].innerText = element.employeeName;
          teamElement[index].children[3].innerText = element.designation;       
      }
    });
    // $("teams-wrap").append(html);
  });


});

let captchaFlag=false;
function recaptchaCallback(){
  captchaFlag=true;
 
}

function sendMail(){
 
   const data = $("#contact_form_id").serialize().toString();
   console.log(data);
   const splittedData = data.split("&");
   const firstName = splittedData[0].split("=")[1];
   const email = decodeURIComponent(splittedData[1].split("=")[1]);
   const message =decodeURIComponent(splittedData[2].split("=")[1]);
   let error=false;
   if (firstName=="") {
    document.getElementById("error-name").innerText="Name is Required";
    error=true;
   }
   if (email=="") {
     error=true;
     document.getElementById("error-email").innerText = "Email is Required";
   }else{
     if (!email.match("^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")) {
      error=true
      document.getElementById("error-email").innerText = "Required a Valid Email";
    }
   }

   if (message=="") {
     error=true;
      document.getElementById("error-message").innerText = "Message is Required";
   }

   if (!captchaFlag) {
       error = true;
       document.getElementById("error-cap").innerText =
         "Captcha is Required";
     
   }

   let body={

     Name:firstName,
     email:email,
     Message:message
     
   }
   console.log(body);
   if (!error) {

   fetch(
     "https://dev.channelier.com/index.php?route=report/CronJobScriptv1.1.1/sendArachnomesMail",
     {
       method: "POST", // or 'PUT'
       mode: "cors", // same-origin, no-cors
       headers: {
        
       
        
       },
       body: JSON.stringify(body),
     }
   )
     .then((response) => response.json())
     .then((data) => {
      console.log("Success:", data);
      $('#contact_form_id').trigger("reset");
      $("#send-msg").addClass("d-none");  
      document.getElementById("success-message").innerHTML=
        `<div class="svg-div"><svg class="checkmark animate__fadeIn animate__animated animate__slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                 <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle>
                                 <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                                </svg>

                                <h4 class="animate__fadeIn animate__animated animate__slow">
                                Sent </h4>
                           </div>`;
     })
     .catch((error) => {
       console.error("Error:", error);
     });
    }
   
}


// banner slider here
$(document).ready(function () {
  $('#portfolio-slider').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    slideSpeed: 1000,
    responsiveClass: true,
    touchDrag: true,
    mouseDrag: true,
    dots: false,
    autoplayHoverPause: true,
    pagination: true,
    slideBy: 3,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
        nav: true
      },
      600: {
        items: 2,
        slideBy: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  })

});

//wow  js

wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();


// service section js add class or remove

$(document).ready(function () {
  $('.web-develop').click(function () {
    $('.web-develop').addClass('active-web');
    $('.web-design').removeClass('active-web');
    $('.app-design').removeClass('active-web');
    $('.e-commerce').removeClass('active-web');
              
             disableScroll(); 
            $.scrollify.disable();
   });

  $('.web-design').click(function () {
    $('.web-design').addClass('active-web');
    $('.web-develop').removeClass('active-web');
    $('.app-design').removeClass('active-web');
    $('.e-commerce').removeClass('active-web');
         disableScroll(); 
         $.scrollify.disable();
  });

  $('.app-design').click(function () {
    $('.app-design').addClass('active-web');
    $('.web-develop').removeClass('active-web');
    $('.web-design').removeClass('active-web');
    $('.e-commerce').removeClass('active-web');
            disableScroll(); 
            $.scrollify.disable();
       
      });

  $('.e-commerce').click(function () {
    $('.e-commerce').addClass('active-web');
    $('.web-develop').removeClass('active-web');
    $('.app-design').removeClass('active-web');
    $('.web-design').removeClass('active-web');           
               disableScroll(); 
              $.scrollify.disable();
  });

  $('#service-inner-title li').click(function () {
     disableScroll(); 
     $.scrollify.disable();
  });


});





/*   Service code        */

 
let service = true;
  $(document).ready(function() {

    // let service = true;

    $(window).scroll(function () {

     //  var scroll = $(window).scrollTop();

    // if (service) {

    //   if(scroll >= 601 && scroll <= 1200) {

    //       $('.service-sec').addClass('service-animation'); 
    //     }

    //     else if(scroll >= 1201 && scroll <= 4000) {
    //     // else {
    //          $('.service-sec').removeClass('service-animation');
            
    //         service = false;
    //     }

    //     else if(scroll <= 600) {
    //          $('.service-sec').removeClass('service-animation');
             
    //     }

    //      // else if(scroll <= 600) {
    //      //   $('.service-sec').removeClass('service-animation');
            
    //      // }


    //   }

      
      if($('.service-sec').hasClass("active-sec")) {  

         if (service) {                 
              var i = firstIteration(0);
          
                if(i>0) {
                  var index = 1;
                  var intervalId = window.setInterval(function () {
                    serviceTest();  }, 15000);

                    function stopInterval(){
                      clearInterval(intervalId); 
                     } 

                      modal = $('.modal');
                      $.each(modal,function(index,val){
                        $('#exampleModal'+index).click(function(){
                           stopInterval();
                          // alert();
                         enableScroll(); 
                          $.scrollify.enable();
                        })
                      });
             }


          function firstIteration(index){
            if(index==0){
            $("#exampleModal"+index).modal('show');

            if($('body').hasClass("modal-open")) {
                   
               disableScroll(); 
              $.scrollify.disable();
            }

          }
  
        return index+1;

      }
          var serviceTest = function() {
            $('.service-li').each(function (e) {

              if (index == e) {

                $("#exampleModal"+e).modal();
                      e--;
                      $("#exampleModal"+e).modal('hide');
                }
                else{
                     $("#exampleModal"+3).modal('hide');
                   }

                 if($('body').hasClass("modal-open")) {
                   
                   enableScroll(); 
                  $.scrollify.enable();
                }


              })

             index++;
            }
         service = false;

        }


      }


    });

  });

/* Service code end */



// for disable window scroll functions

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
   // alert('preventmpuse');
   console.log(e);
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  // alert('preventkey');
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {
  console.log(e);
}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);

}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}




/*  Start Portolio automatic animation js */

var interVal = window.setInterval(function () {
  animateTe();

}, 4000);

function animateTe() {

  var activeClass = $('div.owl-item');
  $.each(activeClass,function(index,value){
      if($(value).hasClass("active")){
        $(value).addClass("active-portfolio");
      }
      else{
        $(value).removeClass("active-portfolio");

      }
  })

}

/* End Portolio  */


// client click js

 $(document).ready(function(){

  $(".tstm-card").on('click', function () {

    if($(this).hasClass('tstm-tl')){
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-tl op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-tl op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
    }
    if($(this).hasClass('tstm-tr')){
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-tr op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-tr op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
    }
    if($(this).hasClass('tstm-bl')){
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-bl op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-bl op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
    }
    if($(this).hasClass('tstm-br')){
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-br op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-br op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
    }
  });

});


// client automatic running animation sect js

var indexx = 0;
var intervalIds = window.setInterval(function () {
  animateTestCards();

}, 10000);

function animateTestCards() {

  $('.tstm-card').each(function (e) {

    if (indexx == e) {

      if ($(this).hasClass('tstm-tl')) {
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-tl op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-tl op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
      }

      if ($(this).hasClass('tstm-tr')) {
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-tr op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-tr op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
      }
      if ($(this).hasClass('tstm-bl')) {
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-bl op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-bl op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
      }
      if ($(this).hasClass('tstm-br')) {
        $('.tstm-active').removeClass('tstm-active tstm-5050 op-1 zdex-2 scl-1').addClass('tstm-br op-05 zdex-1 scl-04');
        $(this).removeClass('tstm-br op-05 zdex-1 scl-04').addClass('tstm-active tstm-5050 op-1 zdex-2 scl-1');
      }

    }
  })

  indexx++;

  if (indexx == 6) {
    indexx = 0;
  }
}




// back to top

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  $('#back-to-top').tooltip('show');

});




// aos animate js

this.onload = function () {
  AOS.init({
    duration: 1700
  })
}

AOS.init({
  disable: 'mobile'
});

AOS.init({
  disable: function () {
    var maxWidth = 959;
    return window.innerWidth < maxWidth;
  }
});



// meet our team js



// animation start while on particular section

// $(window).scroll(function () {
//   var tp = $('.service-text').offset().top;
//   if ($(this).scrollTop() > 1500) {
//     $('.service-text').addClass('d-none');
//   }
// });




// meet our team js
// $(window).scroll(function(){ 
//   var tp=$('.team-sec').offset().top;
//   console.log($('.team-sec').offset().top)
//     if ($(this).scrollTop() > tp-250) {
//        $('.team-sec').addClass('active-animation');
//     } 
// });


// meet our team js automatic js
let play = true;

$(window).scroll(function () {
    var tp = $('.team-sec').offset().top;
    //console.log($('.team-sec').offset().top)

    if ($(this).scrollTop() > tp - 20) {

      $('.team-sec').addClass('active-animation');
      
      if (play) {

        $('.active-animation').addClass('stop-scroll');

         disableScroll(); 
         $.scrollify.disable();

       setTimeout(function(){
         $(".active-animation").removeClass("stop-scroll");
           enableScroll(); 
           $.scrollify.enable();
         play= false
       }, 18000);


      }


    // setTimeout(function(){
    //        $(".active-animation").addClass("stop-scrolling");
    // }, 200);


    setTimeout(function(){
           $(".active-animation").addClass("start-team-animation");
     }, 8000);

    var tl = gsap.timeline();
    tl.to(".team-sec-heading ", {
      duration: 0.5,
      top: -20,
      ease: "back",
      delay: 3,
    })

    tl.to("#teams-wrap",{duration:1,ease:"back",display:"block"})
    // tl.to(".bubble.scl-1,.bubble.scl-08", {
    //   display: "block",
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "fast",
    //   marginTop: "-50px"
    // })
    tl.to(".bubble.scl-06,.bubble.scl-08", {
      display: "block",
      duration: 0.5,
      opacity: 1,
      ease: "fast",
      marginTop: "-50px",
    })
    tl.to(".bubble.scl-04", {
      display: "block",
      duration: 0.5,
      opacity: 1,
      ease: "fast",
      marginTop: "-50px",
      delay: 1
    })
    tl.to(".bubble.scl-02", {
      display: "block",
      duration: 0.5,
      opacity: 1,
      ease: "fast",
      marginTop: "-50px",
      delay: 1
    })

  }
});




// if($('.team-sec').hasClass("stop-scroll")) {
  
//    disableScroll();
//    alert();
// }

// function disableScroll() {
//     document.body.classList.add("stop-scrolling");
// }




  $(".bubble").hover(function () {
    $(".bubble.scl-1").css("transform", "scale(0.8)");
    $(".bubble.scl-08").css("transform", "scale(0.5)");
    $(".bubble.scl-06").css("transform", "scale(0.4)");
    $(".bubble.scl-04").css("transform", "scale(0.3)");
    $(".bubble.scl-02").css("transform", "scale(0.3)");
    $(this).css("transform", "scale(0.85)");
  }, function () {
    $(".bubble.scl-1").css("transform", "scale(1)");
    $(".bubble.scl-08").css("transform", "scale(0.8)");
    $(".bubble.scl-06").css("transform", "scale(0.5)");
    $(".bubble.scl-04").css("transform", "scale(0.4)");
    $(".bubble.scl-02").css("transform", "scale(0.2)");
  });


/*  Start Portolio automatic animation js */
// var interVal = window.setInterval(function () {
//   teamanime();

// }, 3000);

// function teamanime() {

//   var teamActive = $('.bubble');
//   $.each(teamActive,function(index,value){
//       if($(value).hasClass(".x4")){
//         $(value).addClass("active-team-bubble");
//       }
//       else{
//         $(value).removeClass("active-team-bubble");

//       }
//   })

// }


/*  Team automatic open bubble animation Start   */
var teamintervalId;
function startinterval(){

  
   teamintervalId = window.setInterval(function () {
    teamAnimation();

  }, 2500);
} 

var teamindex = 0;
  function teamAnimation() {

    if ($('section.team-sec').hasClass('start-team-animation')) {

        $('div.bubble').each(function (e) {

           if (teamindex == e){

            if ($(this).hasClass('visible')) {
              
               // $(this).addClass("scalebig");
               let context = this
                setTimeout(function(){
                     $(context).addClass("active-bubble");

                     $('div.team-row').addClass('active-bg');
                 }, 2500);
              }      
          }
        })
    }

    var removeActiveClass = $('div.active-bubble');
    $.each(removeActiveClass,function(index,value){
        
        $(value).removeClass("active-bubble");

         // $(value).removeClass("scalebig");

        $('div.team-row').removeClass('active-bg');

    })

  teamindex++;
let teamnewelement = document.getElementsByClassName("visible");
   if (teamindex > teamnewelement.length) {
    teamindex = 0;
  }
}

/*   Team End  */


//$('.bubble').click(function() {

//      var collection = $("#teams-wrap .bubble");
//       console.log(collection,".bubble");

//       collection.each(function(index,element) {
//           $(element).removeClass('active-bubble');     

//     });
//     $(this).addClass('active-bubble');

//    $('.team-row').addClass('active-bg');

//});

startinterval()

// add active bg class
$('.bubble').click(function () {
  
   clearInterval(teamintervalId); 

   setTimeout(function(){

        startinterval()

       }, 1000);

    var removeActiveClasss = $('div.active-bubble');
    $.each(removeActiveClasss,function(index,value){
        $(value).removeClass("active-bubble");
        $('div.team-row').removeClass('active-bg');
    });

  // teamAnimation();
  // teamintervalId = setInterval(teamAnimation, 3000); 
  


   $('.team-row').addClass('active-bg');

});

// remove all .active-bubble classes when clicked anywhere
hide = true;
// $('body').on("click", function () {
//   if (hide) $('.bubble').removeClass('active-bubble');
//   if (hide) $('.team-row').removeClass('active-bg');
//   hide = true;
// });

// add and remove .active-bubble
$('body').on('click', '.bubble.visible', function () {
  var self = $(this);

  if (self.hasClass('active-bubble')) {
    $('.bubble.visible').removeClass('active-bubble');
    return false;
  }

  $('.bubble.visible').removeClass('active-bubble');
    self.toggleClass('active-bubble');
    hide = false;

});




// attach offsetScroll to target elements
// $(document).ready(function() {
// $('.navbar li a, .footer-links ul li a').offsetScroller({offsetPixels: 26});
// $().offsetScroller.scrollToHash(window.location.hash, {offsetPixels: 16});
// });

// for mobile menu link

$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// sticky header

// When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };


// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {

//   if ($(this).scrollTop() > 150) {

//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// on load scroll on top js

// $('html,body').animate({ scrollTop: 0 }, 800);

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

// scrollify js

$(function() {
  $.scrollify({
    section : ".section",
    sectionName:false,
    scrollSpeed: 1500,
    interstitialSection:".header,.footer",
    before: function(){
      $('.section').removeClass('active-sec')
    },
    after: function(){
      current = $.scrollify.current();
      current.addClass('active-sec')
    }
   });
});


// one page scrollify link on click

// $('.link1').click(function(){
//   $.scrollify.move("#2");
// });

$('.link2').click(function(){
  $.scrollify.move("#2");
});

$('.link3').click(function(){
  $.scrollify.move("#3");
});


$('.link4').click(function(){
  $.scrollify.move("#4");
});

$('.link5').click(function(){
  $.scrollify.move("#5");
});

// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarNav')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });

  $('.nav-link').click(function(){
    $('.navbar-toggler').toggleClass('open');
  });
});


// for scrollify  disable on mobile

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

$(window).resize(debounce(function() {
  var width = $(this).width();
  console.log(width)
  if(width > 479 && width < 1023 ) {
    $.scrollify.disable();
  }
}, 50));

$(window).trigger('resize');



// video autoplay delay code for dekstop video

const startVideo = async () => {
const video = document.querySelector('.banner-vid');

  try {
      await video.play();

      video.setAttribute('autoplay', true);

      console.log('video started playing successfully');
  } catch (err) {
    console.log(err, 'video play error');
    // do stuff in case your video is unavailable to play/autoplay
  }
}

setTimeout(startVideo, 7000);

// video autoplay delay code for mobile video
const startVideos = async () => {
const videos = document.querySelector('.mobile-vid ');

  try {
      await videos.play();

      videos.setAttribute('autoplay', true);

      console.log('video started playing successfully');
  } catch (err) {
    console.log(err, 'video play error');
    // do stuff in case your video is unavailable to play/autoplay
  }
}

setTimeout(startVideos, 7000);


