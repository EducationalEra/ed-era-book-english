$(document).ready(function () {
  function init () {
    var href, $lastLink;

    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    href = $lastLink.prop("href");
    href = "https://ed-era.com/books/" + _.last(href.split("-"));
    $lastLink.prop("href", href);
  }
  init();

  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});
