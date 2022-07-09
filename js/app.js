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

//Fourth
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
    return `<div id=card><img src='${el.image}'><div id=txt_wrapper><p>${el.first_name} ${el.last_name}</p><p>House: ${el.house}</p><p>Actor: ${el.actor}</p> </div></div>`;

    // ეს კოდი ამატებს ყველა card-ზე icon-ებს მაგრამ მათზე კლიკით მოქმედება ვეღარ დავამატე
    //return `<div id=card><img src='${el.image}'><div id=txt_wrapper><p>${el.first_name} ${el.last_name}</p><p>House: ${el.house}</p><p class="hidden">Actor: ${el.actor}</p><div></div><img id="close" src=images/close.svg><img id="add" src=images/add.svg></div></div>`;
    //});
  });

  return characterCard;
}

const stringVersion = renderCards(characters);
const characters_li = document.getElementById("characters_list");

let charactersHTML = renderCards(characters).join("");
characters_li.innerHTML = stringVersion;
// Fifth
const allTxt_wrapper = document.querySelectorAll("txt_wrapper");
const wholeCard = document.getElementById("card");
const txt = document.getElementById("txt_wrapper");
const divBlock2 = document.createElement("div");
divBlock2.innerHTML = `<div class="closing"><div><img id="close" src=images/close.svg></div>
</div>`;
const divBlock3 = document.createElement("div");
divBlock3.innerHTML = `<div class="add"><div><img id="close" src=images/add.svg></div></div>`;
const blockWrapper = document.createElement("div");
blockWrapper.classList.add("block_wrapper");
wholeCard.append(blockWrapper);
blockWrapper.append(divBlock3);
blockWrapper.append(divBlock2);

const allP = document.querySelectorAll("p");
const thirdP = allP[2];
thirdP.classList.add("hidden");

const seeMoreBtn = document.querySelector(".add");
function seeMore(e) {
  e.stopPropagation();

  thirdP.classList.toggle("hidden");
}

seeMoreBtn.addEventListener("click", seeMore);

function deleteCard(el) {
  el.stopPropagation();
  txt.classList.toggle("hidden");
}

divBlock2.addEventListener("click", deleteCard);
