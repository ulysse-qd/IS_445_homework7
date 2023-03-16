// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const input = document.getElementById("country");
const suggestions = document.getElementById("suggestions");
const filteredCountries = countryList.filter(country => country.startsWith("A"));

input.addEventListener("input", () => {
  suggestions.innerHTML = "";
  const userInput = input.value.trim().toLowerCase();
  const matchedCountries = filteredCountries.filter(country =>
    country.toLowerCase().startsWith(userInput)
  );

  matchedCountries.forEach(country => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.textContent = country;
    suggestion.addEventListener("click", () => {
      input.value = country;
      suggestions.innerHTML = "";
    });
    suggestions.appendChild(suggestion);
  });
});