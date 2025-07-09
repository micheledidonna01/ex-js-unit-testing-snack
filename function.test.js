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

// const { findPostById } = require('./function.js');

// test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
//     expect(() =>(findPostById(array, 1)).toEqual({ id: 1, title: 'Ciao', slug: 'ciao' }))
// })


//Snack 8(Bonus)

// const {addPost} = require('./function.js');
// const {removePost} = require('./function.js');

// let posts;

// beforeEach(() => {
//     posts = [
//         { id: 1, nome: 'Ciccio', anni: 19 },
//         { id: 3, nome: 'Pedro', anni: 34 },
//     ];
// });

// afterEach(() => {
//     posts = [];
// });

// test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
//     addPost(posts, { id: 2, nome: 'Paolo', anni: 30 });
//     expect(posts).toHaveLength(3);
// });

// test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
//     removePost(posts, 1);
//     expect(posts).toHaveLength(1)
//  })



//Snack 9(Bonus)

// let posts;

// beforeEach(() =>{
//     posts = [
//         {
//             id:1,
//             nome:'Michele Didonna',
//             slug:'micheledidonna',
//         },
//         {
//             id:2,
//             nome:'Carmen Polacca',
//             slug:'carmenpolacca',
//         },
//     ]
// })

// afterEach(() => {
//     posts = [];
// })
// const {addPostExist} = require('./function.js');

// test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => { 
//     expect(() => addPostExist(posts, { id: 1, nome: 'Pierino', slug: 'ciccio' }).toThrow("Id esiste già"));
//     expect(() => addPostExist(posts, { id: 4, nome: 'Giovanni', slug: 'carmenpolacca' }).toThrow("Slug già esiste"));
// })


//Snack 10(Bonus)

let posts;

beforeEach(() => {
    posts = [
        {
            id: 1,
            nome: 'Michele Didonna',
            slug: 'micheledidonna',
            quantity: 1
        },
        {
            id: 2,
            nome: 'Carmen Polacca',
            slug: 'carmenpolacca',
            quantity: 1
        },
    ]
})

afterEach(() => {
    posts = [];
})
const { createSlug4 } = require('./function.js');

test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
    expect(() => {
        createSlug({ 
            id: 5,
            nome: 'Glorio', 
            slug: 'carmenpolacca', 
            quantity: 1 
        }, posts).toEqual({
            id: 2,
            nome: 'Carmen Polacca',
            slug: 'carmenpolacca',
            quantity: 2
        })
    })
})
