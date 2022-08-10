const afbeelding = document.createElement("img");
const titel = document.createElement("h1");
const para = document.createElement("p");

afbeelding.src = "https://picsum.photos/id/0/300/200";
titel.innerText = "Dit is mijn titel";
para.innerText = "en dit is mijn paragraaf";

document.body.append(afbeelding, titel, para);
