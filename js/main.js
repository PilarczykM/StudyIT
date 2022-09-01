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
