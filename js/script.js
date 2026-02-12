let projets = [];

// Cette fonction permet de charger les données des projets depuis le fichier json 
async function loadData() {
    let response = await fetch("../data/projets.json");

    // Afficher l'erreur si le fichier json n'est pas chargé 
    if (response.ok != true) {
        throw new Error(response.status + " - " + response.statusText);
    }

    return await response.json();
}

// Cette fonction permet d'afficher les projets dans la section accueil 
function renderProjects(projets) {
    let contentHTML = "";

    // Boucler sur les projets pour afficher les cartes
    projets.map((projet) => {
        contentHTML += `
            <div class="projet__carte" data-title="${projet.titre}">
                <img class="carte__img" src="./img/${projet.img}" alt="thumbnail-projet" />
                <img class="carte__mask" src="./img/card-outline.png" alt="outline" aria-hidden="true" />
                <div class="carte__titre">
                    <p class="titre__projet">Voir le projet</p>
                </div>
            </div>
        `;
    });

    document.querySelector(".accueil__projets").innerHTML = contentHTML;

    // Ajouter un effet de survol sur chaque carte pour que le titre dynamique se change en fonction du titre du projet
    document.querySelectorAll(".projet__carte").forEach(carte => {
        carte.addEventListener("mouseover", () => {
            document.querySelector(".titreDynamique").textContent = carte.dataset.title;
        });
    });
}

async function main() {
    projets = await loadData();
    renderProjects(projets);
}

main();