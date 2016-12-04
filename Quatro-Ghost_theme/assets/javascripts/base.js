$(document).ready(function() {
  $(window).scrollTop(1);
  $(".activate__mobile__nav").click(function() {
    $(".activate__mobile__nav").toggleClass("activate__mobile__nav-toggled");
    $(".navigation").toggleClass("nav-active");
  });
});
