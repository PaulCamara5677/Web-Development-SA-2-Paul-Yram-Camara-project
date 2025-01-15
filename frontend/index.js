// Fetch data from the backend JSON file
fetch("backend.json")
  .then(response => response.json())
  .then(data => {
    populateHeader(data.header);
    populateSlider(data.slider);
    populateMainContent(data.main);
    populateFooter(data.footer);
  })
  .catch(error => console.error("Error loading JSON data:", error));

// Populate the header section
function populateHeader(headerData) {
  const header = document.querySelector(".header");
  header.querySelector(".logo").textContent = headerData.logo;

  // Populate navigation links
  const nav = header.querySelector(".nav");
  const links = headerData.nav.links.map(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    return a;
  });

  links.forEach(link => nav.insertBefore(link, nav.querySelector(".dropdown")));

  // Populate dropdown items
  const dropdownContent = nav.querySelector(".dropdown-content");
  headerData.nav.dropdown.items.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.label;
    dropdownContent.appendChild(a);
  });
}

// Populate the slider section
function populateSlider(sliderData) {
  const slider = document.querySelector(".slider");
  slider.innerHTML = ""; // Clear existing images

  sliderData.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    slider.appendChild(img);
  });
}

// Populate the main content
function populateMainContent(mainData) {
  // Welcome section
  const welcomeTitle = document.querySelector("h1");
  welcomeTitle.textContent = mainData.welcome.title;

  const welcomeQuote = document.querySelector(".quote");
  welcomeQuote.textContent = mainData.welcome.quote;

  // Description section
  const descriptionSection = document.querySelector(".description");
  const descriptionParagraph = descriptionSection.querySelector("p");
  descriptionParagraph.textContent = mainData.description.text;

  const descriptionImage = descriptionSection.querySelector(".photo");
  descriptionImage.src = mainData.description.image.src;
  descriptionImage.alt = mainData.description.image.alt;

  // Highlights section
  const highlightsSection = document.querySelector(".highlights");
  highlightsSection.innerHTML = ""; // Clear existing highlights

  mainData.highlights.forEach(highlight => {
    const highlightDiv = document.createElement("div");
    highlightDiv.className = "highlight";

    const img = document.createElement("img");
    img.src = highlight.image.src;
    img.alt = highlight.image.alt;

    const p = document.createElement("p");
    p.textContent = highlight.text;

    highlightDiv.appendChild(img);
    highlightDiv.appendChild(p);
    highlightsSection.appendChild(highlightDiv);
  });
}

// Populate the footer section
function populateFooter(footerData) {
  const footer = document.querySelector(".footer");
  footer.querySelector("p").textContent = footerData.text;

  const socialMedia = document.createElement("p");
  socialMedia.innerHTML = footerData.socialMedia;
  footer.appendChild(socialMedia);
}
