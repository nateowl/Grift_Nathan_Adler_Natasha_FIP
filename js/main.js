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
}''





// Process Page
// Process HTML to import into HTML file
const processInfo = [
        `<div class="descProcess-half">
            <p class="processTitle">Nearly 100% of barley comes from americas farmers</p>
            <p class="processText">We source almost 100% of our ingredients from U.S. farms, and for generations we have worked hand-in-hand with our growers to ensure only the finest ingredients are used to brew our beers. No company does more to
              support growers in producing the highest-quality ingredients in the most sustainable way. We are committed to American farmers, and when you drink one of our beers, you are a part of that effort.</p>
          </div>
          <div class="descProcess-half">
            <p class="processTitle">The Spice of beer: hops</p>
            <p class="processText">Each variation of melted barley delivers a unique taste and aroma. Ready, toasted, caramel like notes are thoughtfully and precisely blended.</p>
            <p class="processTitle">Farmers: the backbone of beer</p>
            <p class="processText">Farmers are a very important part of our process. During this time we are working very closely with them to provide the necessities they and their communities need! One way we are giving back to the Americans who are
              the backbone to our company.</p>

          </div>`,
        `<div class="descProcess-half">
            <p class="processTitle">Our Signature 8 step process</p>
            <ul class="processText">
              <li>STEP 1: MILLING different types of malt crushed together to break up grain kernels to extract fermentable sugars to produce milled product called grist.</li>
              <li>STEP 2: MASHING the grit is then mixed with heated water to create a process where natural enzymes in the malt break the malt startch down into sugars.</li>
              <li>STEP 3: BREW KETTLE a sweet liquid (known as wort) is separated from the grain husks and is s brought to a controlled boil before the hops are added.</li>
              <li>STEP 4: COOLING During this stage, any malt or hop particles are removed to leave a liquid that is ready to be cooled and fermented.</li>
            </ul>
          </div>
          <div class="descProcess-half">
            <ul class="processText">
              <li>STEP 5: PRIMARY FERMENTATION yeast is added during the filling of the vessel. Yeast converts the sugary wort into beer by producing alcohol</li>
              <li>STEP 6: BEACHWOOD LAGERING For more than a century we have maintained old-world brewing techniques like “krausening” to heighten natural carbonation, and remain the only major brewer to use beechwood chips for aging.</li>
              <li>STEP 7: FILTRATION After reaching its full potential, the beer is filtered, leaving no excess materials and ingredients behind, leaving a full body liquid.</li>
              <li>STEP 8: CARBONATION The beer goes through a cellaring process, taking 3-4 weeks to complete. Then it is ready to be bottled up & shipped world wide.</li>
            </ul>

          </div>
        </div>`,
        `<div class="descProcess-half">
          <p class="processTitle">Ground Breaking Ideas, togetehr we stand</p>
          <p class="processText">
            For a limited time we will be carrying Kleenex wet wipes beer carried in an interactive case to ease the isolates mind. We are projected to release 3 million limited edition bottles. Made from recycled glass and cardboard, we are doing our part for the environment and the ever changing times. We have enhanced our production system to ensure extra care and the cleanest of ways. Enjoy a new board game from a package delivered straight to your door step!
          </p>
        </div>
        <div class="descProcess-half">
          <p class="processTitle processSmall">We have projected</p>
          <p class="processTitle processLarge">3 million limited edition</p>
          <p class="processTitle margin-large processSmall">bottles to be released</p>

          <p class="processTitle">Environmental Impact</p>
          <p class="processText">
            We work hard to use more recycled content in our packaging than ever before and obtaining more purchased electricity from renewable sources to reduce our carbon footprint.
          </p>
        </div>`,

        `<div class="descProcess-half space-out">
            <p class="processTitle">We have up to</p>
            <p class="processTitle processLarge">40 Tesla & 800 Nikola</p>
            <p class="processTitle processLarge processSmall">Renewable Energy Powered Trucks</p>
            <p class="processTitle">To reduce our carbon footprint</p>
          </div>
          <div class="descProcess-half">
            <p class="processTitle">Beer Timeline</p>
            <p class="processText">
              Budweiser takes a full month—thirty days—before it is bottled. There are more steps in the production of Budweiser than for most craft beers, including two fermentation stages.
            </p>
            <p class="processTitle">New Service</p>
            <p class="processText">
              We now offer beer delivery to all fifty states. Making beer convenient, affordable and clean. We are here for you during this time.
            </p>
          </div>`
];

const gridBtns = document.querySelectorAll(".about_btn");

// If check to make sure we are on this page
if (gridBtns) {
  gridBtns.forEach((box, i) => {
    box.addEventListener('click', showDescription)
  });
}


function showDescription() {
  if (this.children.length < 2) {
    let desc = document.createElement("div")
    desc.classList.add('descProcess');
    desc.innerHTML = processInfo[this.dataset.index];
    this.appendChild(desc)
  } else {
    this.children[1].remove()
  }
}
