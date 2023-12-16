let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});

var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}

document.addEventListener("DOMContentLoaded", function () {
  var primaryColors = document.getElementById("primary-colors");
  var secondaryColors = document.getElementById("secondary-colors");

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle the animation
  function handleScrollAnimation() {
    if (isElementInViewport(primaryColors)) {
      primaryColors.style.opacity = 1;
    }

    if (isElementInViewport(secondaryColors)) {
      secondaryColors.style.opacity = 1;
    }
  }

  // Add the event listener for scroll
  window.addEventListener("scroll", handleScrollAnimation);

  // Initial check on page load
  handleScrollAnimation();
});