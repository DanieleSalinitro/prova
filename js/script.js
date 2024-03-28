/*Crea una variabile comparison e assegnale il risultato del confronto tra due numeri per verificare se il primo numero è maggiore del secondo. Stampa sulla console il valore di comparison
Esercizio 2
Assegna alla variabile comparison il risultato del confronto tra due stringhe per verificare se le due stringhe sono uguali. Stampa sulla console il valore di comparison
Esercizio 3
Assegna alla variabile comparison il risultato del confronto tra un numero e una stringa (che rappresenta un numero) per verificare se sono uguali. Stampa sulla console il valore di comparison
let number1= 100;
let number2= 20;
let comparison=(number1>number2);

console.log(number1, number2, comparison);

let string1= "ciao"
let string2= "ciao"
let comparison2=(string1===string2);
console.log(string1, string2, comparison2);

let string3= "100";
let number3= 100;
comparison3=(parseInt(string3)===number3);
console.log(string3, number3, comparison3);*/

// Definizione dell'array di persone
/*let persone = [
    {   name: "Mario", 
        surname: "Rossi", 
        age: 25 
    },
    {   name: "luigi", 
        surname: "Bianchi", 
        age: 17 
    },
    {   name: "serena", 
        surname: "Verdi", 
        age: 30 
    },
    {   name: "Francesco",
        surname:"Blu", 
        age: 15
    }
];


let arrayPersone= persone.map;
console.log(arrayPersone);
arrayPersone.push(persone);
console.log(arrayPersone);*/
//crea yb array di oggetti che rappresentano animali. ogni oggetto ha un nome, una famiglia e una classe
/*const animals = [
    {
    nome: "cane",
    famiglia: "canidi",
    classe: "mammiferi"
    },
    {
    nome: "gatto",
    famiglia: "felidi",
    classe: "mammiferi"
    },
    {
    nome: "leone",
    famiglia: "felidi",
    classe: "mammiferi"
    },
    {
    nome: "cavallo",
    famiglia: "equidi",
    classe: "mammiferi"
    },
    {
    nome: "gallo",
    famiglia: "onidi",
    classe: "uccelli"
    },
    {
    nome: "rondine",
    famiglia: "onidi",
    classe: "uccelli"
    },
    {
    nome: "coccodrillo",
    famiglia: "crocodilidi",
    classe: "rettile"
    }
];

const newAnimals = animals.filter((el) => {
    return el.classe === "mammiferi"
});
console.log(newAnimals);
console.log(animals);*/

//crea un array di oggetti che rappresentano zucchine. ogni oggetto ha una varietà, un peso e una lunghezza. Calcola quanto pesano tutte le zucchine

/*const zucchine = [
    { varietà: "Zucchina nera di Milano", peso: 150, lunghezza: 20 },
    { varietà: "Zucchina romanesca", peso: 120, lunghezza: 18 },
    { varietà: "Zucchina lunga fiorentina", peso: 200, lunghezza: 25 },
    { varietà: "Zucchina striata di Napoli", peso: 180, lunghezza: 22 },
    { varietà: "Zucchina siciliana", peso: 170, lunghezza: 21 },
    { varietà: "Zucchina trombetta di Albenga", peso: 250, lunghezza: 30 },
    { varietà: "Zucchina bianca triestina", peso: 140, lunghezza: 17 },
    { varietà: "Zucchina tonda di Piacenza", peso: 160, lunghezza: 19 },
    { varietà: "Zucchina gialla", peso: 190, lunghezza: 23 },
    { varietà: "Zucchina costata romanesca", peso: 210, lunghezza: 26 }
];*/
/*let sommaPeso = 0;
zucchine.forEach(element => {
    sommaPeso += element.peso;
});

console.log(sommaPeso);*/

/*let valoreIniziale = 0;
let sommaPeso = zucchine.reduce((acc, el) => {
    return acc + el.peso;
}, valoreIniziale);
console.log(sommaPeso);*/
const { createApp } = Vue;

    const app = createApp({
      data(){
        return {
          message: '',
          check: false,
          miaclasse: 'red',
        }
      },
      methods: {
          toggleClass(){
              this.miaclasse= this.miaclasse === 'red'? this.miaclasse = 'blue' : 'red';
          },
          count(){

          }
      }  
    });
    app.mount('#app')
    /*oppure avremmo dovuto fare senza vue cosi:
    let valore = '';
    const inputElement= document.getElementById('input');
    const fraseFinaleElement= document.getElementById('fraseFinale');
    inputElement.addEventListener('keyup', ()=>{
        valore += inputElement.value;
        fraseFinaleElement.innerHTML = 'Il messaggio è ' + valore;
    })*/