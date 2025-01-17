// Fetch data from the backend JSON file
fetch("index.json")
  .then(response => response.json())
  .then(data => {
    populateHeader(data.header);
    populateSlider(data.slider);
    populateMainContent(data.main);
    populateFooter(data.footer);
  })
  .catch(error => console.error("Error loading JSON data:", error));

// Functions to populate the respective sections of the page
function populateHeader(headerData) {
  document.querySelector(".logo").textContent = headerData.logo;
}

function populateSlider(sliderData) {
  const slider = document.querySelector(".slider");
  slider.innerHTML = sliderData.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('');
}

function populateMainContent(mainData) {
  document.querySelector("h1").textContent = mainData.welcome.title;
}

