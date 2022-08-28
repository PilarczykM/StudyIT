/* -----------------------------------------------
01. =carouselTestimonial
----------------------------------------------- */

function testimonialSlider() {
    var testimonialCarousel = document.getElementById('carouselTestimonial')

    if(testimonialCarousel) {
        testimonialCarousel.addEventListener('slide.bs.carousel', function () {
            const activeItem = this.querySelector('.active')
            document.querySelector('.js-testimonial-img').src = activeItem.getAttribute('data-js-testimonial-img')
          })
    }
    
}

testimonialSlider()