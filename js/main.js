// JS

// Contact Form Changing Submit button
const submitBtn = document.querySelector('#submit-btn'),
form = document.querySelector('.contact__form--form');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
     form.submit()
  })
}


// Toggling Video Controls
const video = document.querySelector('#hero-video');

if (video) {
video.addEventListener("mouseover", function() {
  this.controls = true
}, false);

video.addEventListener("mouseout", function() {
  this.controls = false
}, false);
}


//Mobile Navigation

const mobNav = document.querySelector('#hamburger'),
exitBtn = document.querySelector('#exitbtn'),
navBlock = document.querySelector('.mob-nav');

mobNav.addEventListener('click', togglenav)
exitBtn.addEventListener('click', togglenav)

// Toggle Navigation
function togglenav() {

   // Toggles class
   navBlock.classList.toggle('mob-nav__hidden');

}
