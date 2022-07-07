//First
const btn = document.getElementById("button");

function elDelete(el) {
  el.stopPropagation();
  btn.classList.add("hidden");
}

btn.addEventListener("click", elDelete);

//Second
const body = document.querySelector("body");
const image = document.createElement("img");
const divBlock = document.createElement("div");
divBlock.classList.add("image");
divBlock.innerHTML = ` <img class=image src="https://picsum.photos/id/1/200/300" alt="image" >`;
body.append(divBlock);

//Third
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];
function renderCards(userArr) {
  const characterCard = userArr.map((el) => {
    return `<div class= card><img src='${el.image}'><div class=txt_wrapper><p>${el.first_name} ${el.last_name}</p><p>House: ${el.house}</p></div></div>`;
  });

  return characterCard;
}

const stringVersion = renderCards(characters);
const characters_li = document.getElementById("characters_list");

let charactersHTML = renderCards(characters).join("");
characters_li.innerHTML = stringVersion;
