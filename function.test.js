//snack 1
const {getInitials} = require('./function.js')

test("La funzione getInitials restituisce le iniziali di un nome completo.",
    () => { expect(getInitials("michele didonna")).toBe("md")})
