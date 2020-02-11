class Personne{

  constructor(nom, prenom, metier){ 
    this.nom = nom;
    this.prenom = prenom;
    this.metier = metier;}
             
  setNom(nom){
    this.nom = nom;
  }

  setPrenom(prenom){
    this.prenom = prenom;
  }
  
  setMetier(metier){
    this.metier = metier;
  }

  nomEntier(){
    if(metier){
    return "je m'appelle ${this.prenom} ${this.nom} et je suis ${this.metier}.";
    } else{
      return "je m'appelle ${this.prenom} ${this.nom}.";
    }
  }
  
}
//var Policier = new Personne('Lagachette', 'Jean', 'Policier');
//console.log(Policier.nom); => "Lagachette"
