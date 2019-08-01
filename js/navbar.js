/*  OpenNav and closeNav functions are used to show and hide navbar items in mobile view using hamberger icon */

function openNav() {
    document.getElementById("sideNav").style.left = "0";
}
  
function closeNav() {
    document.getElementById("sideNav").style.left = "-300px";
}