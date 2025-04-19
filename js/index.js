document.getElementById("toggle-nav-bar").addEventListener("click", e => {
    toggleNavBar()
})

function toggleNavBar() {
    // lock scrollbar
    document.body.classList.toggle("lock-scrollbar")

    document.querySelector(".nav-container nav").classList.toggle("opened")
}

document.querySelector(".nav-container nav").addEventListener("click", e => {
    toggleNavBar()
})