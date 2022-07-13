Words1 = ['weebs', 'in', 'out'];
Words2 = ['empire', 'of', 'wapan'];
Words3 = ['rising', 'sun', 'japan'];

function shuffleWords () {
    return Math.floor(Math.random() * 3)
};

function generateMixedMessage (arrayWords1, arrayWords2, arrayWords3) {
    for(let i = 0; i < arrayWords1.length; i++ ){
        console.log(`${arrayWords1[shuffleWords()]} ${arrayWords2[shuffleWords()]} ${arrayWords3[shuffleWords()]}`)
    }
};

generateMixedMessage(Words1, Words2, Words3)