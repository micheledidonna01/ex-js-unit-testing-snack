
function getInitials(nome) {
    const firstLetter = nome.split(" ").map(word => word.charAt(0)).join("");
    return firstLetter;
}

module.exports = {
    getInitials,

};