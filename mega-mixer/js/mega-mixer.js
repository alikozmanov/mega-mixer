

const ListeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony",
    "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];

const card = document.getElementById("card");
const boutonAEffacer = document.getElementById("ButtonToDelete");
const sizer = document.getElementById("sizer");
const BoutonPlacer = document.getElementById("BoutonPlacer");
const BoutonInitialiser = document.getElementById("BoutonInitialiser");
const numberSelect = document.getElementById("numberSelect");





//  card.classList.toggle('flip');


for (let i = 0; i < ListeApprenants.length; i++) {
    const uneCarte = document.createElement("div");
    uneCarte.classList.add("flipcard");
    uneCarte.classList.add("h");
    uneCarte.innerHTML = `<div class="front interrogation">
  ?
</div>
<div class="back smiley" style='background-image: url("images/smiley/smiley-10.png");'>
  <div class="prenom"></div>
  <div class="nom">Nom</div>
</div>`;
    sizer.appendChild(uneCarte);
}


document.getElementById("numberSelect").addEventListener("change", (event) => {

    sizer.style.width = event.target.value + "px";
});

document.getElementById("BoutonPlacer").addEventListener("click", (event) => {
    const allCards = document.querySelectorAll(".flipcard");
    const tabshuffle = _.shuffle(ListeApprenants);

    allCards.forEach((carte, index) => {
        carte.querySelector(".nom").textContent = tabshuffle[index];
        carte.querySelector(".smiley").style.backgroundImage = "url(images/smiley/smiley-" + (Math.floor(Math.random() * 15) + 1) + ".png)";
        setTimeout(() => {
            carte.classList.toggle('flip');
        }, 400 * index);


    })
    numberSelect.disabled = true;
    BoutonPlacer.disabled = true;
    BoutonInitialiser.disabled = false;

});


document.getElementById("BoutonInitialiser").addEventListener("click", (event) => {
    const allCards = document.querySelectorAll(".flipcard");
    allCards.forEach((carte, index) => {
        carte.classList.toggle('flip');
    })
    numberSelect.disabled = false;
    BoutonPlacer.disabled = false;
    BoutonInitialiser.disabled = true;

});




/*         <div class="flipcard h" id="card">
            <div class="front interrogation">
                ?
            </div>
            <div class="back smiley" style='background-image: url("images/smiley/smiley-10.png");'>
                <div class="prenom">Prénom</div>
                <div class="nom">Nom</div>
            </div>
        </div>
        */