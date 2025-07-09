//snack1
function getInitials(nome) {
    const firstLetter = nome.split(" ").map(word => word.charAt(0)).join("");
    return firstLetter;
}

//snack2
function createSlug(nome){
    const lowerNome = nome.toLowerCase();
    return lowerNome
}

//snack3
function average(x, y){
    const avg = (x + y)/2;
    console.log(avg);
    return avg;
}


//snack4
function createSlug2(stringa){
    const stringModify = stringa.replace(" ", "-");
    return stringModify
}


//snack5
function isPalindrome(stringa){
    const cleaned = stringa
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Rimuove tutto tranne lettere e numeri

    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

//snack6
function createSlug3(title){
    if(title === " " || title === null || title === undefined){
        throw new Error("Titolo non valido")
    }else{
        return true
    }
}

//Snack 7
const array = [
    {
        id: 1,
        title: 'Ciao',
        slug:'ciao'
    },
    {
        id: 2,
        title: 'Ciao2',
        slug:'ciao2'
    },
    {
        id: 3,
        title: 'Ciao3',
        slug:'ciao3'
    },

];

function findPostById(array, id){
    const obj = array.find(obj => obj.id === id)
    return obj;
}


//snack8
function addPost(postsArray, newPost) {
    return postsArray.push(newPost);
}

function removePost(postsArray, id) {
    let post = postsArray.findIndex(p => p.id === id)
    postsArray.splice(post, 1);
}

//snack9
function addPostExist(postsArray, newPost) {
    let existId = postsArray.find(p => p.id === newPost.id); 
    let existSlug = postsArray.find(p => p.slug === newPost.slug); 

    if(existId){
        throw new Error("Id esiste già")
    }

    if(existSlug){
        throw new Error('Slug esiste già')
    }

    postsArray.push(newPost);

}

//snack 10
function createSlug4(newPost, postsArray){
    postsArray = postsArray.map(p => {
        if(p.slug === newPost.slug){
            return {
                ...p,
                quantity: p.quantity + 1
            }
        }
    })
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3,
    findPostById,
    addPost,
    removePost,
    addPostExist,
    createSlug4
};