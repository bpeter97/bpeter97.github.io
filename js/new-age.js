(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 48
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mainNav").addClass("navbar-slide-up");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav").removeClass("navbar-slide-up");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();

  // Create the smooth scroll effect on parallax header
  var parallaxSmoothScroll = function() {
    var masthead = document.querySelector(".masthead");

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }

    window.addEventListener("DOMContentLoaded", scrollLoop, false);

    var xScrollPosition;
    var yScrollPosition;

    function scrollLoop() {
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;

      setTranslate(0, yScrollPosition * -0.04, masthead);

      requestAnimationFrame(scrollLoop);
    }
  };

  parallaxSmoothScroll();

  // fade header content on scroll
  var masthead = $(".header-content");

  $(window).scroll(function() {
    var st = $(this).scrollTop();

    masthead.css({
      opacity: 1 - st / 600
    });
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(window).scroll(parallaxHeader);
})(jQuery); // End of use strict
