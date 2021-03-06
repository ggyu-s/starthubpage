const mainLogo = document.querySelector(".main_logo img");

mainLogo.addEventListener("click", () => {
  location.href = "/";
});

/**
 * about dropdown
 */
const about = document.querySelector(".nav_about");
const aboutDrop = document.querySelector(".about_drop");
const aboutDropList = document.querySelectorAll(".about_drop li");

about.addEventListener("click", () => {
  console.log("click");
  if (
    aboutDrop.classList.contains("about_drop_on") ||
    aboutDrop.classList.contains("about_drop_visible")
  ) {
    aboutDrop.classList.add("about_drop_off");
    aboutDrop.classList.remove("about_drop_on");
    aboutDrop.classList.remove("about_drop_visible");
  } else {
    aboutDrop.style.display = "block";
    aboutDrop.classList.add("about_drop_on");
    aboutDrop.classList.remove("about_drop_off");
    about.style.color = "#3A2053";
  }
});

about.addEventListener("mouseover", () => {
  about.style.color = "#3A2053";
});
about.addEventListener("mouseleave", () => {
  if (
    !aboutDrop.classList.contains("about_drop_on") &&
    !aboutDrop.classList.contains("about_drop_visible")
  ) {
    about.style.color = "#CCCCCC";
  }
});

aboutDropList.forEach((v) => {
  v.addEventListener("mouseover", () => {
    v.style.color = "#3A2053";
  });
  v.addEventListener("mouseleave", (e) => {
    if (e.target.innerText === "PHOTO") {
      v.style.color = "#3A2053";
    } else {
      v.style.color = "#CCCCCC";
    }
  });
  v.addEventListener("click", (e) => {
    if (e.target.innerText === "STARTHUB") {
      location.href = "./starthub.html";
    } else if (e.target.innerText === "HISTORY") {
      location.href = "./history.html";
    } else if (e.target.innerText === "PRESS") {
      location.href = "./press.html";
    } else if (e.target.innerText === "PHOTO") {
      location.href = "./photo.html";
    }
  });
});

/**
 * crew dropdown
 */
const crew = document.querySelector(".nav_crew");
const crewDrop = document.querySelector(".crew_drop");
const crewDropList = document.querySelectorAll(".crew_drop li");

crew.addEventListener("click", () => {
  console.log("click");
  if (crewDrop.classList.contains("crew_drop_on")) {
    crewDrop.classList.add("crew_drop_off");
    crewDrop.classList.remove("crew_drop_on");
  } else {
    crewDrop.style.display = "block";
    crewDrop.classList.add("crew_drop_on");
    crewDrop.classList.remove("crew_drop_off");
    crew.style.color = "#3A2053";
  }
});

crew.addEventListener("mouseover", () => {
  crew.style.color = "#3A2053";
});
crew.addEventListener("mouseleave", () => {
  if (!crewDrop.classList.contains("crew_drop_on")) {
    crew.style.color = "#CCCCCC";
  }
});

crewDropList.forEach((v) => {
  v.addEventListener("mouseover", () => {
    v.style.color = "#3A2053";
  });
  v.addEventListener("mouseleave", () => {
    v.style.color = "#CCCCCC";
  });
  v.addEventListener("click", (e) => {
    if (e.target.innerText === "CREW") {
      location.href = "../crew/crew.html";
    } else if (e.target.innerText === "Partnership") {
      location.href = "../crew/partnership.html";
    }
  });
});

/**
 * mouseover ??? mouseleave ?????? color ??????
 */
const service = document.querySelector(".nav_service");
const contact = document.querySelector(".nav_contact");

service.addEventListener("mouseover", () => {
  service.style.color = "#3A2053";
});
service.addEventListener("mouseleave", () => {
  service.style.color = "#CCCCCC";
});
service.addEventListener("click", () => {
  location.href = "../service/service.html";
});

contact.addEventListener("mouseover", () => {
  contact.style.color = "#3A2053";
});
contact.addEventListener("mouseleave", () => {
  contact.style.color = "#CCCCCC";
});
contact.addEventListener("click", () => {
  location.href = "../contact/contact.html";
});

const imgA = document.querySelector(".img_a");
const imgAText = document.querySelector(".img_a_text_wrapper");
const imgB = document.querySelector(".img_b");
const imgBText = document.querySelector(".img_b_text_wrapper");
const imgC = document.querySelector(".img_c");
const imgCText = document.querySelector(".img_c_text_wrapper");
const imgD = document.querySelector(".img_d");
const imgDText = document.querySelector(".img_d_text_wrapper");

imgA.addEventListener("mouseover", () => {
  imgAText.classList.add("img_animation");
});
imgA.addEventListener("mouseleave", () => {
  imgAText.classList.remove("img_animation");
});

imgB.addEventListener("mouseover", () => {
  imgBText.classList.add("img_animation");
});
imgB.addEventListener("mouseleave", () => {
  imgBText.classList.remove("img_animation");
});

imgC.addEventListener("mouseover", () => {
  imgCText.classList.add("img_animation");
});
imgC.addEventListener("mouseleave", () => {
  imgCText.classList.remove("img_animation");
});

imgD.addEventListener("mouseover", () => {
  imgDText.classList.add("img_animation");
});
imgD.addEventListener("mouseleave", () => {
  imgDText.classList.remove("img_animation");
});
