/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");

  //UGLY HACK TO NOT USE BROKEN FUNC IN CHOME UP TO 46
  if (navigator.userAgent.match(/Chrome\/4[0-6]/)) {
    jQuery("section.about, section.team").css({backgroundAttachment: 'scroll'});
  }

  // ***** SIGNUP MAGIC BY V
  // var hiddenInputs = $('input[name="ZIPCODE"][type="hidden"], input[name="CITY"][type="hidden"], input[name="COUNTRY"][type="hidden"]');
  // if (!matchMedia('only screen and (max-width: 480px)').matches) {
  //   $.get("http://ipinfo.io/json", function(response) {
      
  //     fillOutLocation(response.postal, response.city, response.country);
  //   });
  // } else {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(setLocationFrom);
  //   }
  //   hiddenInputs.prop('disabled', true)
  // }

  // function fillOutLocation(zipcode, city, country) {
  //     $('input[name="ZIPCODE"]').val(zipcode);
  //     $('input[name="CITY"]').val(city);
  //     $('input[name="COUNTRY"]').val(country);

  //     // Disable textfields if taken from IP geolocation + enable hidden
  //     hiddenInputs.prop('disabled', false)
  //     $('input[name="ZIPCODE"][type="text"], input[name="CITY"][type="text"], input[name="COUNTRY"][type="text"]').prop('disabled', true).hide();
  // }

  // function setLocationFrom(position) {
  //   var zipcode, city, country = "";
  //   $.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true', function(response) {
  //     var searchAddressComponents = response.results[0].address_components;

  //     $.each(searchAddressComponents, function() {
  //       if(this.types[0] == "postal_code") {
  //         zipcode = this.short_name;
  //       }
  //       if(this.types[0] == "locality") {
  //         city = this.long_name;
  //       }
  //       if(this.types[0] == "country") {
  //         country = this.long_name;
  //       }                    
  //     });
  //     fillOutLocation(zipcode, city, country);
  //   });
  // }

  // new Awesomplete($('input[data-multiple]')[0], {
  //   filter: function(text, input) {
  //     return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
  //   },
    
  //   replace: function(text) {
  //     var before = this.input.value.match(/^.+,\s*|/)[0];
  //     this.input.value = before + text + ", ";
  //   }
  // });
});

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

// $(".video-container").fitVids();



/* =================================
===  MAILCHIMP                 ====
=================================== */

// $('.mailchimp').ajaxChimp({
//     callback: mailchimpCallback,
//     // url: "http://webdesign7.us6.list-manage.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
//     url: "http://atletosports.us12.list-manage.com/subscribe/post?u=1403dc7a0d3179f1da32aecca&amp;id=ac922c570c"
// });

// function mailchimpCallback(resp) {
//      if (resp.result === 'success') {
//         $('#signup-form').slideUp(1000);
//         $('.subscription-error').slideUp(1000); //fadeOut(500);

//         // CompleteRegistration
//         // Track when a registration form is completed (ex. complete subscription, sign up for a service)
//         fbq('track', 'CompleteRegistration');

//         setTimeout(function() {
//           $('.subscription-success').slideDown(); //.html('<i class="icon_check_alt2 pull-left"></i><p>' + resp.msg + '</p>')
//         }, 1000);

//         // Buzz out
//         setTimeout(function() {
//           $('.subscription-success .addthis_sharing_toolbox').addClass("hvr-buzz-out");
//         }, 3000);

//     } else if(resp.result === 'error') {
//         $('.subscription-error').html('<i class="icon_close_alt2 pull-left"></i><p>' + resp.msg + '</p>').fadeIn(1000);
//     }
// }

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    filter: ':not(.external)',
    changeHash: true
  });

});


/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

if (matchMedia('(max-width: 480px)').matches) {
    $('.main-navigation a').on('click', function () {
        $(".navbar-toggle").click();
    });
}


/* NAVIGATION VISIBLE ON SCROLL */

$(document).ready(function () {
    mainNav();
});

$(window).scroll(function () {
    mainNav();
});

if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40)
          $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-60'});
    }
}

if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-120'});
    }
}



/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
// jQuery(function( $ ){
// 			$('#download-button').localScroll({
// 				duration:1000
// 			});
// 		});

/* =================================
===  VIDEO BACKGROUND           ====
=================================== */
if (matchMedia('(min-width: 640px)').matches) {

   $(document).ready(function() {
    var videobackground = new $.backgroundVideo($('body'), {
      "align": "centerXY",
      "width": 960,
      "height": 540,
      "path": "video/",
      "filename": "video",
      "types": ["webm", "mp4","ogv"]
    });
  });

}


// /* =================================
// ===  FULL SCREEN HEADER         ====
// =================================== */
// function alturaMaxima() {
//   var altura = $(window).height();
//   $(".full-screen").css('min-height',altura);

// }

// $(document).ready(function() {
//   alturaMaxima();
//   $(window).bind('resize', alturaMaxima);
// });


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
// var scrollAnimationTime = 1200,
//     scrollAnimation = 'easeInOutExpo';
// $('a.scrollto').bind('click.smoothscroll', function (event) {
//     event.preventDefault();
//     var target = this.hash;
//     $('html, body').stop().animate({
//         'scrollTop': $(target).offset().top
//     }, scrollAnimationTime, scrollAnimation, function () {
//         window.location.hash = target;
//     });
// });


/* =================================
===  WOW ANIMATION             ====
=================================== */
// wow = new WOW(
//   {
//     mobile: false
//   });
// wow.init();


/* =================================
===  OWL CROUSEL               ====
=================================== */
// $(document).ready(function () {

//   $("#intro-statements .intro-carousel").owlCarousel({

//       navigation: false, // Show next and prev buttons
//       slideSpeed: 800,
//       paginationSpeed: 400,
//       autoPlay: 5000,
//       singleItem: true
//   });

//   var bgIndex = 0;
//   var screensCount = 3;
//   for(var i = 0; i < screensCount; i++) { // BG preload images
//     $('<img/>')[0].src = "images/feature-bg-"+i+".jpg";
//   }
//   $("#features-list").owlCarousel({

//       navigation: true, // Show next and prev buttons
//       navigationText: false, // Show next and prev buttons
//       slideSpeed: 800,
//       pagination: false,
//       // paginationSpeed: 400,
//       // autoPlay: 5000,
//       singleItem: true,

//   });

//   var owl = $("#screenshots");

//   owl.owlCarousel({
//       items: 4, //10 items above 1000px browser width
//       itemsDesktop: [1000, 4], //5 items between 1000px and 901px
//       itemsDesktopSmall: [900, 2], // betweem 900px and 601px
//       itemsTablet: [600, 1], //2 items between 600 and 0
//       itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
//   });


// });


/* =================================
===  Nivo Lightbox              ====
=================================== */
$(document).ready(function () {

    // $('#screenshots a').nivoLightbox({
    //     effect: 'fadeScale',
    // });

    $('.signup a').nivoLightbox({
        effect: 'fadeScale',
    });

});


/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */
// $("#subscribe").submit(function (e) {
//     e.preventDefault();
//     var email = $("#subscriber-email").val();
//     var dataString = 'email=' + email;

//     function isValidEmail(emailAddress) {
//         var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
//         return pattern.test(emailAddress);
//     };

//     if (isValidEmail(email)) {
//         $.ajax({
//             type: "POST",
//             url: "subscribe/subscribe.php",
//             data: dataString,
//             success: function () {
//                 $('.subscription-success').fadeIn(1000);
//                 $('.subscription-error').fadeOut(500);
//                 $('.hide-after').fadeOut(500);
//             }
//         });
//     } else {
//         $('.subscription-error').fadeIn(1000);
//     }

//     return false;
// });




/* =================================
===  CONTACT FORM          ====
=================================== */
// $("#contact").submit(function (e) {
//     e.preventDefault();
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var subject = $("#subject").val();
//     var message = $("#message").val();
//     var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

//     function isValidEmail(emailAddress) {
//         var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
//         return pattern.test(emailAddress);
//     };

//     if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
//         $.ajax({
//             type: "POST",
//             url: "sendmail.php",
//             data: dataString,
//             success: function () {
//                 $('.success').fadeIn(1000);
//                 $('.error').fadeOut(500);
//             }
//         });
//     } else {
//         $('.error').fadeIn(1000);
//         $('.success').fadeOut(500);
//     }

//     return false;
// });




/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
// $('.expand-form').simpleexpand({
//     'defaultTarget': '.expanded-contact-form'
// });



/* =================================
===  STELLAR                    ====
=================================== */
// $(window).stellar({
// horizontalScrolling: false
// });


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}