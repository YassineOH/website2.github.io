const nav = document.querySelector("header")


window.addEventListener("scroll", fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 200) {

        nav.className = "bg-light"
    } else {
        nav.className = "bg-primary"
    }
}


//Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

