// function openNav() {
//     document.getElementById("myNav").style.left = "0";
// }
//
// function closeNav() {
//     document.getElementById("myNav").style.left = "+100%";
// }

function toggleSideBarClassName() {
    const sideBarEl = document.getElementById("myNav");
    sideBarEl.classList.toggle("menu__active");
}