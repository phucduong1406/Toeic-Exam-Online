//close dropdowns on outside click
$(window).click(function(e){
  var $dropdown = $(e.target).closest(".dropdown");
  if ($dropdown.length == 0 || !$dropdown.find("input").is(":checked")) {
    $(".dropdown input:checked").prop("checked", false);
  }
});

//close other dropdown on outside click
$(".dropdown input").change(function(e){
  if ($(e.target).is(":checked")) {
    $(".dropdown input:checked:not(#" + e.target.id + ")").prop("checked", false);
  }
});

//on item select
$(".dropdown li").click(function(e){
  var $target = $(e.target);
  var $dropdown = $target.closest(".dropdown");
  var $label = $dropdown.find("label");
  var $title = $label.find("span");
  var $toggle = $dropdown.find("input");
  
  if ($dropdown.hasClass("init") || ($toggle.is(":checked") && !$target.hasClass("selected"))) {
    $dropdown.removeClass("init");
    $dropdown.find("li.selected").removeClass("selected");
    $target.addClass("selected");
    $dropdown.attr("data-val", ($target.attr("data-val") || $target.attr("data-val") == "") ? $target.attr("data-val") : $target.text().trim());
    $title.text($target.attr("data-text") ? $target.attr("data-text") : $target.text().trim());
    $label.css("width", ($title.width() + 20) + "px");
    $toggle.prop("checked", false);
  }
});

//initialize with 1st option
$(".dropdown.init li:first-child").click();