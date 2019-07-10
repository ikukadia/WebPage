// NAVBAR
window.onscroll = function() {
  stickyNavbar("navbar");
  resizeNavbar("navbar");
  positionIndicator("navbar", "links");
};

function stickyNavbar(navId) {
  var navbar = document.getElementById(navId);

  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function resizeNavbar(id) {
  var elem = document.getElementById(id);
  if (
    document.body.scrollTop > 160 ||
    document.documentElement.scrollTop > 160
  ) {
    elem.style.padding = "10px";
    elem.style.fontSize = "25px";
  } else {
    elem.style.padding = "15px";
    elem.style.fontSize = "30px";
  }
}

function positionIndicator(navId, linkId) {
  var navbar = document.getElementById(navId);
  var links = document.getElementById(linkId).children;
  var pos = window.pageYOffset + navbar.offsetHeight;

  for (var i = 0; i < links.length; i++) {
    var currLink = links[i];
    var section = document.getElementById(currLink.href.split("#")[1]);

    if (
      section.offsetTop <= pos &&
      section.offsetTop + section.offsetHeight > pos
    ) {
      currLink.classList.add("active");
      section.style.top = navbar.offsetBottom;
    } else {
      currLink.classList.remove("active");
    }
  }
}

// CAROUSEL
var currSlide = 1;
displaySlides("slide", currSlide);
function displaySlides(className, nextSlide) {
  var elem = document.getElementsByClassName(className);
  if (nextSlide > elem.length) {
    currSlide = 1;
  } else if (nextSlide < 1) {
    currSlide = elem.length;
  }
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.display = "none";
  }
  elem[currSlide - 1].style.display = "block";
}
document.getElementById("prev").addEventListener("click", function() {
  displaySlides("slide", --currSlide);
});
document.getElementById("next").addEventListener("click", function() {
  displaySlides("slide", ++currSlide);
});

// MODAL
function modalFunc(modalId, triggerId, closeClass) {
  var modal = document.getElementById(modalId);
  var trigger = document.getElementById(triggerId);
  var close = document.getElementsByClassName(closeClass)[0];

  trigger.addEventListener("click", function() {
    modal.style.display = "block";
  });
  close.addEventListener("click", function() {
    modal.style.display = "none";
  });
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
modalFunc("modal", "modal-trigger", "close");
