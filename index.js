const about = document.querySelector(".nav_about");
const aboutDrop = document.querySelector(".about_drop");

about.addEventListener("click", () => {
  console.log("click");
  if (aboutDrop.classList.contains("about_drop_on")) {
    aboutDrop.classList.add("about_drop_off");
    aboutDrop.classList.remove("about_drop_on");
  } else {
    aboutDrop.style.display = "block";
    aboutDrop.classList.add("about_drop_on");
    aboutDrop.classList.remove("about_drop_off");
  }
});
