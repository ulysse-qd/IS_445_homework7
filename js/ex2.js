const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

const houseSelect = document.getElementById("house");

houses.forEach((house, index) => {
  const option = document.createElement("option");
  option.value = house.code;
  option.text = house.name;
  houseSelect.appendChild(option);
});

const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const characterList = document.getElementById("characters");

houseSelect.addEventListener("change", () => {
  const houseCode = houseSelect.value;
  const characters = getCharacters(houseCode);
  characterList.innerHTML = "";
  characters.forEach((character, index) => {
    const li = document.createElement("li");
    li.innerText = character;
    characterList.appendChild(li);
  });
});