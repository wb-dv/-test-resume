//Реализация бургер-меню ->

$(document).ready(function () {
  $(".burger").click(function () {
    $(this).toggleClass("burger_open");
    $(".nav").toggleClass("nav_open");
    $("body").toggleClass("body_locked");
  });
  $(".nav__link, .logo").click(function () {
    $(".burger").removeClass("burger_open");
    $(".nav").removeClass("nav_open");
    $("body").removeClass("body_locked");
  });
});

//Добавление фиксированной шапки при скролле ->

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".header").addClass("header_on-scroll");
    $(".header__inner").addClass("header__inner_on-scroll");
  } else {
    $(".header").removeClass("header_on-scroll");
    $(".header__inner").removeClass("header__inner_on-scroll");
  }
});

//Плавный скролл по якорям ->

$(document).ready(function () {
  $(".nav__link, .logo, .hero__link-to-portfolio").click(function () {
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
  $(".portfolio__all-works").click(function () {
    $(this).addClass("filter_active");
    $(
      ".portfolio__landing-page, .portfolio__corporate, .portfolio__e-commerce"
    ).removeClass("filter_active");
  });
  $(".portfolio__landing-page").click(function () {
    $(this).addClass("filter_active");
    $(
      ".portfolio__all-works, .portfolio__corporate, .portfolio__e-commerce"
    ).removeClass("filter_active");
  });
  $(".portfolio__corporate").click(function () {
    $(this).addClass("filter_active");
    $(
      ".portfolio__all-works, .portfolio__landing-page, .portfolio__e-commerce"
    ).removeClass("filter_active");
  });
  $(".portfolio__e-commerce").click(function () {
    $(this).addClass("filter_active");
    $(
      ".portfolio__all-works, .portfolio__landing-page, .portfolio__corporate"
    ).removeClass("filter_active");
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

// Эта часть была внутри функции выше и должна была открывать видео в мобильной версии в разделе отзывов

// $(".reviews__video-container").addClass("reviews__video-container_open");
// $(".reviews__video-closed-btn").addClass(
//   "reviews__video-closed-btn_open"
// );
// });

// $(".reviews__video-closed-btn").click(function () {
// $(".reviews__video-container").removeClass(
//   "reviews__video-container_open"
// );
// $(this).removeClass("reviews__video-closed-btn_open");

//Реазлизация состояний focused hover active для видео из блока отзывов

$(function () {
  $(".reviews__play-btn").on("focus", function () {
    $(".reviews__video-layout").addClass("reviews__video-layout_focused");
  });

  $(".reviews__play-btn").on("focusout", function () {
    $(".reviews__video-layout").removeClass("reviews__video-layout_focused");
  });
});

$(function () {
  $(".reviews__play-btn").hover(function () {
    $(".reviews__video-layout").toggleClass("reviews__video-layout_hover");
  });
});

// $(function () {
//   $(".reviews__play-btn").on("active", function () {
//     $(".reviews__video-layout").addClass("reviews__video-layout_active");
//   });

//   $(".reviews__play-btn").on("activeout", function () {
//     $(".reviews__video-layout").removeClass("reviews__video-layout_active");
//   });
// });
