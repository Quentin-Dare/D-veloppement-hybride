// Créer et manipuler des objets en JS


//Déclaration
let sport = { nom: "Handball", description:"un jeu de ballon"};

//Manipuler
console.log(sport);
console.log(sport.nom);

//Modifier

sport.nom = "Football";
console.log(sport.nom); 

// ajout d'un attribut
sport.nombreJoueurs = 11; 
console.log(sport);

// Un objet peut avoir des méthodes
var sport2 ={
    nom: "Badminton",
    description: "Ca vole",
    afficher: function (){
        console.log(` ${tihs.nom.toUpperCase()} ${this.description} `);
    }
};

sport2.afficher();

// Tableaux d'objets

