let time = 0;

function typewriter(){
    let letters = document.querySelector('h1');

    if(letters){
        let arrayletters = letters.innerText.split('');
        letters.innerText = '';
        
        arrayletters.forEach((element,index) => {
            setTimeout(() => {
                letters.innerText += element;
                time += +100 * index;
            },100 * index);
        });
    }
}
function revertTypeWriter(){
    setTimeout(() => {
        let letters = document.querySelector('h1');
        let arrayletters = letters.innerText.split('');
        arrayletters.forEach((e,i) => {
            setTimeout(() => {
                letters.innerText = letters.innerText.slice(0,letters.innerText.length - 1); //remove 1 caracter apartir do ultimo 
            },150 * i);
        });
        console.log('chamou');
    },8000);
}
function replaceByIndex(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
typewriter();
revertTypeWriter();
