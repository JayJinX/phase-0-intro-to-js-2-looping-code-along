// Code your solutions in this file

function writeCards(array, event) {
    for (let i=0; i< array.length; i++) {
        array.splice(i, 1,`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }

    return array;
}

function countDown(number){
    for(let n=number; n>=0; n--){
        console.log(n);
    }
    return number;
}

