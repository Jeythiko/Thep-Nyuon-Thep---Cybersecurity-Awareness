function toggleContent(card) {
    const content = card.querySelector('.content');
    const arrow = card.querySelector('.arrow');

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(60deg)";
    }
}
function toggleContent(nav) {
    const content = nav.querySelector('.content');
    const arrows = nav.querySelector('.nav-arrow');

    if (content.style.display === "block") {
        content.style.display = "none";
        
    } else {
        content.style.display = "block";
        
    }
}


function togglePhotos() {
  const photos = document.getElementById("photos");

  if (photos.style.display === "none" || photos.style.display === "") {
    photos.style.display = "block";
  } else {
    photos.style.display = "none";
  }
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});