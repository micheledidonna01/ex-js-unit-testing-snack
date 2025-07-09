
function getInitials(nome) {
    const firstLetter = nome.split(" ").map(word => word.charAt(0)).join("");
    return firstLetter;
}

function createSlug(nome){
    const lowerNome = nome.toLowerCase();
    return lowerNome
}


function average(x, y){
    const avg = (x + y)/2;
    console.log(avg);
    return avg;
}

function createSlug2(stringa){
    const stringModify = stringa.replace(" ", "-");
    return stringModify
}

function isPalindrome(stringa){
    const cleaned = stringa
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Rimuove tutto tranne lettere e numeri

    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

function createSlug3(title){
    if(title === " " || title === null || title === undefined){
        throw new Error("Titolo non valido")
    }else{
        return true
    }
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3
};