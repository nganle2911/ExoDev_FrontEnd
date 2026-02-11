let projets = [];

// Cette fonction permet de charger les données des projets depuis le fichier json 
async function loadData() {
    let response = await fetch("../data/projets.json");
    // console.log(response);

    // Afficher l'erreur si le fichier json n'est pas chargé 
    if (response.ok != true) {
        throw new Error(response.status + " - " + response.statusText);
    }

    return await response.json();
}

// Cette fonction permet d'afficher les projets dans la section accueil 
function renderProjects(projets) {
    let contentHTML = "";

    projets.map((projet, indice) => {
        contentHTML += `
            <div class="projet__carte">
                <img class="carte__img" src="./img/${projet.img}" alt="thumbnail-projet" />
                <img class="carte__mask" src="./img/card-outline.png" alt="outline" aria-hidden="true" />
                <div class="carte__titre">
                    <p class="titre__projet">Voir le projet</p>
                </div>
            </div>
        `;
    });

    document.querySelector(".accueil__projets").innerHTML = contentHTML;
}

async function main() {
    projets = await loadData();
    renderProjects(projets);
}

main();