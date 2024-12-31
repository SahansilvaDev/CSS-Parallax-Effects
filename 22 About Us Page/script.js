<<<<<<< HEAD
<<<<<<< HEAD
"use strict";

$(document).ready(function () {
  $(window).bind("scroll", function (e) {
    parallaxScroll();
  });
});

function parallaxScroll() {
  const scrolled = $(window).scrollTop();
  $("#team-image").css("top", 0 - scrolled * 0.2 + "px");
  $(".img-1").css("top", 0 - scrolled * 0.35 + "px");
  $(".img-2").css("top", 0 - scrolled * 0.05 + "px");
}
=======
=======
>>>>>>> c9548dbaf614a57a347b5c2940db26e9a1e565db
"use strict";

$(document).ready(function () {
  $(window).bind("scroll", function (e) {
    parallaxScroll();
  });
});

function parallaxScroll() {
  const scrolled = $(window).scrollTop();
  $("#team-image").css("top", 0 - scrolled * 0.2 + "px");
  $(".img-1").css("top", 0 - scrolled * 0.35 + "px");
  $(".img-2").css("top", 0 - scrolled * 0.05 + "px");
}
<<<<<<< HEAD
>>>>>>> c9548db (SECOND EDITION commit)
=======
>>>>>>> c9548dbaf614a57a347b5c2940db26e9a1e565db
