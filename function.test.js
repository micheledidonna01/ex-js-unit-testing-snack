//snack 1
// const {getInitials} = require('./function.js')

const { createSlug } = require("./function")

// test("La funzione getInitials restituisce le iniziali di un nome completo.",
//     () => { expect(getInitials("michele didonna")).toBe("md")})

//Snack 2

// const { createSlug } = require('./function.js');

// test("La funzione createSlug restituisce una stringa in lowercase.", ()=> {
//     expect(createSlug("CIAO")).toBe("ciao")
// }) 


//Snack 3

// const { average } = require('./function.js');
// test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
//     expect(average(2,4)).toBe(3)
//  })


//Snack 4

// const { createSlug2 } = require('./function.js');

// test("La funzione createSlug2 sostituisce gli spazi con -.", () => {
//     expect(createSlug2("michele didonna")).toBe("michele-didonna")
//  })


//Snack 5

// const { isPalindrome } = require('./function.js');

// test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => { 
//     expect(isPalindrome("otto")).toBe(true);
//     expect(isPalindrome("ciao")).toBe(false);
//  })


//Snack 6

// const { createSlug3 } = require('./function.js');

// test("La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido.", () => {
//     expect(() => (createSlug3("")).toThrow("Titolo non valido"))
//     expect(() => (createSlug3(null)).toThrow("Titolo non valido"))
//     expect(() => (createSlug3(undefined)).toThrow("Titolo non valido"))
//     expect(createSlug3("ciao")).toBe(true)
//  })


//Snack 7

const { findPostById } = require('./function.js');

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(() =>(findPostById(array, 1)).toEqual({ id: 1, title: 'Ciao', slug: 'ciao' }))
})


