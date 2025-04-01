import { countries } from "./countries-data.js";

// Create wrapper container
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

// Create header and search container
const header = document.createElement("header");
header.classList.add("header");

const title = document.createElement("h1");
title.textContent = "World Flags Explorer";
header.appendChild(title);

// Search input (without button)
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.id = "search";
searchInput.placeholder = "Search for a country...";
searchInput.classList.add("search-input");

searchContainer.appendChild(searchInput);
header.appendChild(searchContainer);

// Create main container
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

// Create container for the countries
const countriesContainer = document.createElement("div");
countriesContainer.classList.add("countries-container");
mainContainer.appendChild(countriesContainer);

// Function to render countries based on search filter
function renderCountries(searchTerm = "") {
    // Clear current countries
    countriesContainer.innerHTML = "";
    
    // Filter countries based on search term
    const filteredCountries = countries.filter(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filteredCountries.length === 0) {
      const noResults = document.createElement("div");
      noResults.classList.add("no-results");
      noResults.textContent = "No countries found matching your search.";
      countriesContainer.appendChild(noResults);
      return;
    }
    
    // Create and append country elements
    filteredCountries.forEach((country) => {
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("country");
  
      const flagDiv = document.createElement("div");
      flagDiv.classList.add("flag");
  
      const image = document.createElement("img");
      image.src = country.flag;
      image.alt = `Flag of ${country.name}`;
      image.loading = "lazy"; // Improves performance
  
      const flagName = document.createElement("p");
      flagName.textContent = country.name;
  
      flagDiv.appendChild(image);
      countryDiv.appendChild(flagDiv);
      countryDiv.appendChild(flagName);
      
      countriesContainer.appendChild(countryDiv);
    });
}

// Add event listener to the search input for real-time filtering
searchInput.addEventListener("input", () => {
    renderCountries(searchInput.value);
});

// Initialize with all countries
renderCountries();

// Create footer
const footer = document.createElement("footer");
footer.classList.add("footer");
footer.innerHTML = `<p>© ${new Date().getFullYear()} World Flags Explorer | All flags sourced from flagcdn.com</p>`;

// Build the DOM structure
document.body.appendChild(header);
document.body.appendChild(mainContainer);
document.body.appendChild(footer);
