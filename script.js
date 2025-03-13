/*
Code Question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
​
console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name ); // 'Double Cheese Burger'

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?



🏆 Code Question 2
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); //"Cheese"
console.log(secondBurger.ingredients[0]); // "Salad"

P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!


Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
console.log(hamburger.ingredients[0]); //"Cheese"
console.log(secondBurger.ingredients[0]); // "Salad"
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
2 objects



🏆 Code Question 3
,
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
oltre ad hamburger altri 2 objects


🏆 Code Question 4
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

Qual è il metodo migliore per clonare l’oggetto chef, e perché?
utilizziamo lo spread operator { ...obj } perchè crea una shallow copy dell'oggetto. e poichè chef non ha oggetti annidati, quindi una copia superficiale è sufficiente. inoltre mantiene intatte le funzioni/metodi perché le funzioni sono trattate come riferimenti e non vengono perse nella copia.

Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
utilizziamo structuredClone() perché restaurant contiene oggetti annidati (address) e un valore di tipo Date (openingDate). structuredClone() crea una deep copy avanzata assicurandosi che tutti gli oggetti interni siano copiati in modo indipendente e che l'oggetto Date venga mantenuto senza trasformarlo in stringa.

🎯 Code Question 5 (Bonus)
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
​
console.log(hamburger.maker.name); // "Chef Hyur"
console.log(secondBurger.maker.name); // "Chef Hyur"
console.log(hamburger.maker.restaurant.name); // "Hyur's Burgers"
console.log(secondBurger.maker.restaurant.name); // "Hyur's II"
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
2 objects: secondBurger, newRestaurant

🎯 Code Question 6 (Bonus)
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
utilizziamo structuredClone() perché è il metodo moderno per clonare oggetti con oggetti annidati.


🎯 Snack  (Bonus)
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
*/