$(".sidebar a.open").on("click", function(e) {
  e.preventDefault();
  $("body").toggleClass("open-nav");
});