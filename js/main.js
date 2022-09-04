/* -----------------------------------------------
01. =carouselTestimonial
----------------------------------------------- */

function testimonialSlider() {
  var testimonialCarousel = document.getElementById("carouselTestimonial");

  if (testimonialCarousel) {
    testimonialCarousel.addEventListener("slide.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img");
    });
  }
}

testimonialSlider();

/* -----------------------------------------------
02. =carouselPreviewVideo
----------------------------------------------- */

function coursePreviewVideo() {
  const coursePreviewModal = document.querySelector(".js-course-preview-modal");

  if (!coursePreviewModal) return;

  coursePreviewModal.addEventListener("show.bs.modal", function () {
    this.querySelector(".js-course-preview-video").play();
    this.querySelector(".js-course-preview-video").currentTime = 0;
  });

  coursePreviewModal.addEventListener("hide.bs.modal", function () {
    this.querySelector(".js-course-preview-video").pause();
  });
}

coursePreviewVideo();

/* -----------------------------------------------
03. =styleSwitcher
----------------------------------------------- */
function styleSwitcher() {
  const styleSwitcher = document.querySelector(".js-style-switcher");
  const styleSwitcherToggler = document.querySelector(
    ".js-style-switcher-toggler"
  );

  // Toggle open / close acction
  styleSwitcherToggler.addEventListener("click", function () {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}

styleSwitcher();

/* -----------------------------------------------
04. =themeColors
----------------------------------------------- */
function themeColors() {
  const colorKey = "color";
  const colorStyle = document.querySelector(".js-color-style");
  const themeColorsContainer = document.querySelector(".js-theme-colors");

  if (localStorage.getItem(colorKey)) {
    setColor();
  } else {
    localStorage.setItem(colorKey, "color-1");
    setColor();
  }

  themeColorsContainer.addEventListener("click", ({ target }) => {
    if (target.classList.contains("js-theme-color-item")) {
      localStorage.setItem(
        colorKey,
        target.getAttribute("data-js-theme-color")
      );

      setColor();
    }
  });

  function setColor() {
    let path = colorStyle.getAttribute("href").split("/");
    colorStyle.setAttribute(
      "href",
      path
        .slice(0, path.length - 1)
        .concat(localStorage.getItem(colorKey) + ".css")
        .join("/")
    );

    if (document.querySelector(".js-theme-color-item.active")) {
      document
        .querySelector(".js-theme-color-item.active")
        .classList.remove("active");
    }

    document
      .querySelector(
        "[data-js-theme-color=" + localStorage.getItem(colorKey) + "]"
      )
      .classList.add("active");
  }
}

themeColors();

/* -----------------------------------------------
05. =themeLightDarkMode
----------------------------------------------- */
function themeLightDarkMode() {
  const darkModeKey = "dark-mode";
  const lightDarkModeClass = "t-dark";
  let toggler = document.querySelector(".js-dark-mode");

  if (!localStorage.getItem(darkModeKey)) {
    localStorage.setItem(darkModeKey, false);
  } else {
    toggler.checked =
      localStorage.getItem(darkModeKey).toLowerCase() === "true";
  }

  toggler.addEventListener("click", function () {
    localStorage.setItem(darkModeKey, toggler.checked);
    setMode();
  });

  function setMode() {
    const mode = localStorage.getItem(darkModeKey);
    let bodyTag = document.body;

    if (mode === "false" && bodyTag.classList.contains(lightDarkModeClass)) {
      bodyTag.classList.remove(lightDarkModeClass);
    } else if (
      mode === "true" &&
      !bodyTag.classList.contains(lightDarkModeClass)
    ) {
      bodyTag.classList.add(lightDarkModeClass);
    }
  }

  setMode();
}

themeLightDarkMode();
