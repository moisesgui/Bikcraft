$(function() {
   $(".rslides").responsiveSlides({
     auto: true,
     speed: 500,
     timeout: 3000
   });
 });

$(function() {
  $(".rslides_portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true           // Boolean: Show pager, true or false
  });
});


Visibility.onVisible(function() {
  setTimeout(function(){
    $(".introduction h1").addClass("animated fadeInDown");
  }, 400);
  setTimeout(function(){
    $(".introduction blockquote").addClass("animated fadeInDown");
  }, 800);
  setTimeout(function(){
    $(".introduction .btn-yellow").addClass("animated fadeInDown");
  }, 1200);
  setTimeout(function(){
    $(".animar").addClass("animated fadeInDown");
  }, 1200);
  setTimeout(function(){
    $(".introduction_internal h1").addClass("animated fadeInDown");
  }, 400);
  setTimeout(function(){
    $(".introduction_internal p").addClass("animated fadeInDown");
  }, 800);
})
