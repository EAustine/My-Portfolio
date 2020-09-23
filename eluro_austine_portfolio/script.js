$(function () {
  // // WINDOWS LOADER
  // $(window).on("load", function () {
  //   scroll(0, 0);
  //   $(".loader_container").fadeOut(500);
  // });

  // MINIMIZED MENU
  $(".menu_minimized").click(function () {
    $(this).toggleClass("active");
    $(".navigation_bar").toggleClass("active");
  });

  // NAV STICKY
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
      $(".moveUp").fadeIn();
    } else {
      $(".header").removeClass("sticky");
      $(".moveUp").fadeOut();
    }
  });

  // NAV LINKS
  $(".nav").click(function () {
    index = $(this).index();
    $(".nav").removeClass("active_nav");
    $(this).addClass("active_nav");
  });

  // NAV LINK MOVEMENT
  $(window).scroll(function () {
    var scrollbarloc = $(this).scrollTop();

    $(".nav").each(function () {
      var sectionOffet = $(this.hash).offset().top - 200;

      if (sectionOffet <= scrollbarloc) {
        $(this).addClass("active_nav");
        $(this).siblings().removeClass("active_nav");
      }
    });
  });

  // MOVEUP HIDE
  $(".moveUp").hide();

  // LOGO IN STICKY
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".logo").addClass("sticky");
    else $(".logo").removeClass("sticky");
  });

  // MOVEUP SCROLL
  $(".moveUp").click(function () {
    scroll(0, 0);
  });

  // WORKS GALLERY
  $(".works").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });

  // PORTOFOLIO WORKS TOGGLE
  $(".works:first").show();

  $(".container").click(function () {
    index = $(this).index();
    $(".container").removeClass("active_link");
    $(this).addClass("active_link");
    $(".works").hide();
    $(".works").eq(index).addClass("show").show();
  });

  $(".contact_info_each i:first").click(function () {
    $(".contact_info_each_text:first").toggle(500);
    $(this).toggleClass("active");
  });

  $(".contact_info_each i:last").click(function () {
    $(".contact_info_each_text:last").toggle(500);
    $(this).toggleClass("active");
  });
});
