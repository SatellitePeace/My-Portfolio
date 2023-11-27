const header = document.querySelector('.header')

// Toggle small screen menu
const menuIcon = document.getElementById("menu-icon")
const navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bi-x")
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    header.classList.toggle("sticky", window.scrollY > 100)

    // remove small nav on nav link click
    menuIcon.classList.remove("bi-x")
    navbar.classList.remove("active")
}
// darkmonde
const darkModeIcon = document.getElementById("darkMode-icon")
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bi-sun")
    document.body.classList.toggle("dark-mode")
}