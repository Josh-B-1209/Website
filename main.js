document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
      {
        name: "Beaconhurst School",
        image: "images/Beaconhust Badge 2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
      },
      {
        name: "Qwawekazi Mazaleni",
        image: "images/profile.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
        job: "Speech Therapist (Stel)",
      },
      {
        name: "Lynette Van Greunen",
        image: "images/profile.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
        job: "Educator",
      },
      {
        name: "Jean Shaw",
        image: "images/profile.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
        job: "Educator",
      },
      {
        name: "Stephnie Van Der Vywer",
        image: "images/profile.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
        job: "Educator",
      },
      {
        name: "Stephan Pretorius",
        image: "images/profile.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
        job: "Educator",
      },
    ]
  
    const testimonialSlider = document.querySelector(".testimonial-slider")
  
    testimonials.forEach((testimonial) => {
      const slide = document.createElement("div")
      slide.classList.add("testimonial-slide")
      slide.innerHTML = `
              <div class="testimonial-content">
                  <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                  <p class="testimonial-text">${testimonial.text}</p>
                  <p class="testimonial-author">${testimonial.name}</p>
                  ${testimonial.job ? `<p class="testimonial-job">${testimonial.job}</p>` : ""}
              </div>
          `
      testimonialSlider.appendChild(slide)
    })
  })
  
  