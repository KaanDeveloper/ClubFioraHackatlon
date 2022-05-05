const profileBtn = document.getElementById("profile")
const popupMenu = document.getElementById("popup-menu")
const upDownIcon = document.getElementById("up-down-icon")

if(profileBtn) {
    profileBtn.addEventListener("click", () => {
        popupMenu.classList.toggle("active")
        if(popupMenu.classList.contains("active")) {
            upDownIcon.style.transform = "rotate(180deg)"
        }
        else {
            upDownIcon.style.transform = "rotate(0)"
        }
    })
}