function ajouter()
{
    console.log("Bouton cliqué");

    // 1. Récupération valeur du input de savoir
    let elSavoir = document.getElementById("libelleSavoir").value;

    // 1. Récupération valeur du input de auteur
    let elAuteur = document.getElementById("libelleAuteur").value;

    // 1. Récupération valeur du input de auteur
    let elDate = document.getElementById("date").valueAsDate;


    // 2. Préparation de ce qu'on va afficher dans le DOM
    let newElementLi = document.createElement("li");
    let newElementP = document.createElement("p");
    let newElementP2 = document.createElement("p");
    let newElementP3 = document.createElement("p");


    // Paragraphe du savoir inutile
    newElementP.innerText = elSavoir;
    newElementP2.innerText = elAuteur; 
    newElementP3.innerText = elDate; 
    
    // Insérer le P dans le LI
    newElementLi.appendChild( newElementP );
    newElementLi.appendChild( newElementP2 );
    newElementLi.appendChild( newElementP3 );
    newElementLi.appendChild( newElementBouton );

    //Ajouter un évènement à cet élément LI
    newElementLi.addEventListener("click", supprimer);


    // 3. Ajoute l'élément de liste au DOM
    let elementOl = document.getElementById("olListeSavoir");
    elementOl.appendChild( newElementLi );

  
    console.log("Savoir :" + elSavoir);

    function supprimer( event )
{
    console.log(" Vous avez cliqué sur: ");
    console.log( event.currentTarget );
    //event.currentTarget.parentNode.removeChild( event.currentTarget )
}

}