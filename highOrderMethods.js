// dans ce fichier je m'entrainerai sur les méthodes les plus fréquemment utilisées en js, à savoir: map(), sort(), forEach() 
// filter() et reduce().
const array = [
  { name : "télé" , price : 100},
  { name : "album", price : 15},
  { name : "ordinateur", price : 300},
  { name : "voiture", price : 4000}
  ]


// retourne les objets ayant un prix inférieur ou égal à 100.
const filteredArray = array.filter((item) => { return item.price <= 100});
console.log(filteredArray);


// retourner la valeur de l'attribut souhaité des objets du tableau. 
const mappedArray = array.map((item) => { return item.price});
console.log(mappedArray);

// trouver un objet.
const foundItem = array.find((item) => { return item === "album"});
console.log(foundItem);

//Appliquer un fonction pour chacun des membres d'un tableau.
const foreachItem = array.forEach((item)=>{ console.log(item.price) };
