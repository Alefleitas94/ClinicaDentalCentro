$(document).ready(function() {
  $("body").scrollspy({ target: ".menu", offset: 50 });
});

$("#myNavbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

$("#back-servicio").on("click", function(event) {
  location.href = "index.html#servicio";
});

$("#back-tecnologia").on("click", function(event) {
  location.href = "index.html#tecnologia";
});

$("#back-contacto").on("click", function(event) {
  location.href = "index.html#contacto";
});
