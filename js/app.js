    // HERO SLIDER
    $('#hero-slider').owlCarousel({
     autoplay: true,
     autoplayhoverpause: true,
     autoplaytimeout: 5000,
      loop:true,
      margin:0,
      nav:true,
      items: 1,
      dots:false,
      smartSpeed: 1000,
      navText: ['PREV', 'NEXT'],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          768:{
              items:1,
              nav:true
          },
      }    
});



    // PROJECT SLIDER
    $('#project-slider').owlCarousel({
     autoplay: true,
     autoplayhoverpause: true,
     autoplaytimeout: 5000,
      loop:true,
      margin:10,
      nav:true,
      dots:true,
      smartSpeed: 1000,
      navText: ['PREV', 'NEXT'],
      responsiveClass:true,
      responsive:{
          0:{
            items:1,
            nav:false,
            margin:0,

          },
          768:{
            items:2,
            center:true,
          },
          1140:{
            items:2,
            center:true,

          }
      }    
});


// REVIEWS SLIDER
$('#reviews-slider').owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 5000,
   loop:true,
   margin:10,
   nav:false,
   dots:true,
   smartSpeed: 1000,
   navText: ['PREV', 'NEXT'],
   responsiveClass:true,
   responsive:{
       0:{
         items:1,
         nav:false,
         margin:0,
         center:true,

       },
       768:{
         items:1,
         center:true,
       },
       1140:{
         items:1,
         center:true,

       }
   }    
});