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
  if (aboutDrop.classList.contains("about_drop_on")) {
    aboutDrop.classList.add("about_drop_off");
    aboutDrop.classList.remove("about_drop_on");
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
    v.style.color = "#CCCCCC";
  });
  v.addEventListener("click", (e) => {
    if (e.target.innerText === "STARTHUB") {
      location.href = "../about/starthub.html";
    } else if (e.target.innerText === "HISTORY") {
      location.href = "../about/history.html";
    } else if (e.target.innerText === "PRESS") {
      location.href = "../about/press.html";
    } else if (e.target.innerText === "PHOTO") {
      location.href = "../about/photo.html";
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
 * mouseover 와 mouseleave 시에 color 변경
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
  location.href = "./service.html";
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
