/* eslint-disable no-undef */
var resizeCover = function () {
  var homeCover = document.getElementById("homecover-1");
  var videoVover = document.getElementById("myVideo");
  var newHeight =
    document.documentElement.clientHeight -
    document.getElementById("navbar-1").clientHeight;
  homeCover.style.height = newHeight + "px";
  homeCover.style.minHeight = newHeight + "px";
  videoVover.style.height = newHeight + "px";
  videoVover.style.minHeight = newHeight + "px";
};

jQuery(document).ready(resizeCover);
window.onresize = resizeCover;
