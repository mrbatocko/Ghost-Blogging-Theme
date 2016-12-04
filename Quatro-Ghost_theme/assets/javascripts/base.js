$(document).ready(function() {
  $(window).scrollTop(1);
  $(".activate__mobile__nav").click(function() {
    $(".navigation").addClass("nav-active");
  });
  $(".deactivate__mobile__nav").click(function() {
    $(".navigation").removeClass("nav-active");
  });
  $(window).scroll(function() {
    if($(window).scrollTop() > $(".home__header").outerHeight()) {
      $(".back__to__home").addClass("back__to__home-visible");
    }
    else {
      $(".back__to__home").removeClass("back__to__home-visible");
    }
  });
});
