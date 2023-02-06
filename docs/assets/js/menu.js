const menu = document.getElementsByTagName("nav")[0]
const menuButton = document.getElementById("menu")

var menuShown = false;

menuButton.addEventListener("click", menuToggle)

function menuToggle() {
    menuShown = !menuShown;
    console.log(menuShown);
    if (menuShown) {
        menu.className = "navshown"
    } else {
        menu.className = ""
    }
}