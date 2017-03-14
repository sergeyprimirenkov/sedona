function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.825, 
      lng: -111.67
    },
    disableDefaultUI: true,
    scrollwheel: false,
    zoom: 9
  });
  new google.maps.Marker({
    position: map.center,
    map: map,
    icon: "img/map-marker.png"
  })
}

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});



var search = document.querySelector(".search__link"),
      search_close = document.querySelector(".search__close"),
      search_form = document.querySelector(".search"),
      search_input = document.querySelector(".search__input");

  search.addEventListener("click", function(event) {
    event.preventDefault();
    search_form.classList.add("search--open");
    search_input.focus();
    document.onkeydown = function(evt) {
    evt = evt || window.event;
      if (evt.keyCode == 27) {
        search_form.classList.remove("search--open");
      }
    };
  });

  search_close.addEventListener("click", function(event) {
    event.preventDefault();
    search_form.classList.remove("search--open");
  });