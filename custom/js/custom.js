$(document).ready(function () {
  var href;
  
  $("a.toggle-search").remove();
  href = $(".custom-link:last").prop("href");
  //href = "https://ed-era.com/books/" + _.last(href.split("-"));
  href = "http://" + _.last(href.split("-")) + ".ed-era.com";
  $(".custom-link").prop("href", href);
});
