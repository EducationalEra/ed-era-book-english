$(document).ready(function () {
  var href;
  
  $("a.toggle-search").remove();
  href = $(".custom-link").prop("href");
  href = "http://" + _.last(href.split("-")) + ".ed-era.com";
  $(".custom-link").prop("href", href);
});
