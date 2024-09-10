// // Toggle small screen navbar
const menuIcon = document.getElementById("menu-icon")
const navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bi-x-octagon")
    navbar.classList.toggle("active")
}
// Change active nav links
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active")
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active")

            })
        }
    })
    // sticky navbar
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 100)

    // close small menu bar on scroll
    menuIcon.classList.remove("bi-x-octagon")
    navbar.classList.remove("active")
}

// // Type animation 
const types = new Typed(".multiple-text", {
    strings: ['Product Manager', "Frontend Developer", "Product Owner", "Project Manager", "Writer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// scrool reveal text
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal(".home-content, .about-content, .heading", { origin: "top" })

ScrollReveal().reveal(".home-img, .about-img, .services-container, .product, .contact-box", { origin: "bottom" })

// PORTFOLIO FILTER
const list = document.querySelectorAll(".list")
const itemBox = document.querySelectorAll(".itemBox")

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active")
            console.log(1)
        }
        this.classList.add("active")

        let dataFilter = this.getAttribute("data-filter")

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("active")
            itemBox[k].classList.add("hide")

            if (itemBox[k].getAttribute("data-items") === dataFilter || dataFilter === "all") {
                itemBox[k].classList.remove("hide")
                itemBox[k].classList.add("active")
            }
        }
    })
}
// lightmode
const lightModeIcon = document.getElementById("lightMode-icon")
lightModeIcon.onclick = () => {
    lightModeIcon.classList.toggle("bi-cloud-moon")
    document.body.classList.toggle("light-mode")
}
// COPY EMAIL
document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copyButton");
    const copyTextDiv = document.getElementById("copyText");
    const copyMessage = document.getElementById("copyMessage");

    // Add click event listener to the button
    copyButton.addEventListener("click", () => {
        const textToCopy = copyTextDiv.textContent;
        // Copy the text to the clipboard
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Show a success message
                copyMessage.textContent = "Email copied to clipboard!";
                copyMessage.classList.add("success");
                copyMessage.classList.remove("error");
                setTimeout(() => {
                    copyMessage.textContent = "";
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
                copyMessage.textContent = "Failed to copy text!";
                copyMessage.classList.add("error");
                copyMessage.classList.remove("success");
                setTimeout(() => {
                    copyMessage.textContent = "";
                }, 2000);
            });
    });
});

// COPYRIGHT DATE
const copyDate = document.querySelector("small")
copyDate.innerText = new Date().getFullYear()
// SUBMIT FORM TO GOOGLE SHEETS

const scriptURL = 'https://script.google.com/macros/s/AKfycbz7mZWJsctvUlMiYi5w4N89063sAozUrc2yqZjNEqrv7MoZAX5moruWHLGHD26N_CXd/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("form-message")


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = `<i class="bi bi-check-circle-fill"></i> Message sent successfully!!`
            msg.style.color = "green"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => {
            msg.style.color = "red"
            msg.innerHTML = `<i class="bi bi-x-square-fill"></i> Message not sent, Please try again`
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
})
