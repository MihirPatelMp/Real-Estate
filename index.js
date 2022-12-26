$(function () {
  let navbar = $(".navbar");
  let logo = $(".logo");
  let navlist = $(".nav-list");
  let navToggle = $("#nav-toggle");

  $("#property-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class = "slick-arrow slick-prev">previous</a>',
    nextArrow: '<a href="#" class ="slick-arrow slick-next">next</a>',

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(".testimonials-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<a href="#" class = "slick-arrow slick-prev"><</a>',
    nextArrow: '<a href="#" class ="slick-arrow slick-next">></a>',
  });

  navToggle.on("click", () => {
    navlist.css("right", "0");
  });
  $(".close-flyout").on("click", () => {
    navlist.css("right", "-100%");
  });
  $(document).on("click", (e) => {
    let target = $(e.target);
    if (
      !(
        target.closest("#nav-toggle").length > 0 ||
        target.closest(".nav-list").length > 0
      )
    ) {
      navlist.css("right", "-100%");
    }
  });

  $(document).scroll(() => {
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
      navlist.addClass("is-sticky");
      logo.find("a").css("color", "#000");
      navbar.css("background", "#fff");
      navToggle.css("border-color", "#000");
      navToggle.find(".strip").css("background-color", "#000");
    } else {
      navlist.removeClass("is-sticky");
      logo.find("a").css("color", "#fff");
      navbar.css("background", "transparent");
      navToggle.css("border-color", "#fff");
      navToggle.find(".strip").css("background-color", "#fff");
    }
    navbar.css(
      scrollTop >= 200
        ? { padding: "0.5rem", "box-shadow": "0px -4px 10px 1px #999" }
        : { padding: "1rem", "box-shadow": "none" }
    );
  });

  $(document).trigger("scroll");
  navlist.find("a").on("click", () => navlist.css("right", "-100%"));
});
