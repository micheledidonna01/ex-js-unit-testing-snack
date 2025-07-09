
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

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2
};