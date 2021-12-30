const getCharacters = require('./utils/characters');

getCharacters((error, data) => {
    if(error){
        return console.log(error);
    } 
    console.log(data);
})

