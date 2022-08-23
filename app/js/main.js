//Реализация бургер-меню ->

$(document).ready(function () {
  $(".burger").click(function () {
    $(this).toggleClass("_open");
    $(".menu").toggleClass("_open");
    $("body").toggleClass("body_locked");
  });
  $(".menu__link, .logo").click(function () {
    $(".burger").removeClass("_open");
    $(".menu").removeClass("_open");
    $("body").removeClass("body_locked");
  });
});

//Добавление фиксированной шапки при скролле ->

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".nav").addClass("nav_on-scroll");
    $(".nav__inner").addClass("nav__inner_on-scroll");
  } else {
    $(".nav").removeClass("nav_on-scroll");
    $(".nav__inner").removeClass("nav__inner_on-scroll");
  }
});

//Плавный скролл по якорям ->

$(document).ready(function () {
  $(".menu__link, .logo, .header__portfolio-link").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top - 80;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      600
    );
    return false;
  });
});

let mixer = mixitup(".portfolio__images");

//Активное состояние при выборе фильтра ->

$(document).ready(function () {
  $(".filter__btn_all").click(function () {
    $(this).addClass("_active");
    $(
      ".filter__btn_landings, .filter__btn_corporate, .filter__btn_e-commerce"
    ).removeClass("_active");
  });
  $(".filter__btn_landings").click(function () {
    $(this).addClass("_active");
    $(
      ".filter__btn_all, .filter__btn_corporate, .filter__btn_e-commerce"
    ).removeClass("_active");
  });
  $(".filter__btn_corporate").click(function () {
    $(this).addClass("_active");
    $(
      ".filter__btn_all, .filter__btn_landings, .filter__btn_e-commerce"
    ).removeClass("_active");
  });
  $(".filter__btn_e-commerce").click(function () {
    $(this).addClass("_active");
    $(
      ".filter__btn_all, .filter__btn_landings, .filter__btn_corporate"
    ).removeClass("_active");
  });
});

//Сниппет для тоггла атрибута ->

$.fn.toggleAttr = function (attr, val) {
  var test = $(this).attr(attr);
  if (test) {
    // if attrib exists with ANY value, still remove it
    $(this).removeAttr(attr);
  } else {
    $(this).attr(attr, val);
  }
  return this;
};

// jquery toggle just the attribute value
$.fn.toggleAttrVal = function (attr, val1, val2) {
  var test = $(this).attr(attr);
  if (test === val1) {
    $(this).attr(attr, val2);
    return this;
  }
  if (test === val2) {
    $(this).attr(attr, val1);
    return this;
  }
  // default to val1 if neither
  $(this).attr(attr, val1);
  return this;
};

//Кнопка play на видео ->

$(function () {
  $(".reviews__video-container").each(function () {
    let $videoContainer = $(this),
      $video = $videoContainer.find("video")[0],
      playClass = "reviews__video_now-playing";

    $videoContainer.click(function () {
      if ($videoContainer.hasClass(playClass)) {
        $videoContainer.removeClass(playClass);
        $video.pause();
      } else {
        $videoContainer.addClass(playClass);
        $video.play();
      }
      $(".reviews__video").toggleAttr("controls", "");
    });
  });
});

//Реазлизация состояний focus и hover для видео из блока отзывов

$(function () {
  $(".reviews__play-btn").on("focus", function () {
    $(".reviews__video-layout").addClass("_focused");
  });

  $(".reviews__play-btn").on("focusout", function () {
    $(".reviews__video-layout").removeClass("_focused");
  });
});

$(function () {
  $(".reviews__play-btn").hover(function () {
    $(".reviews__video-layout").toggleClass("_hover");
  });
});
