let slideIndex = 0;
showSlides();

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}
