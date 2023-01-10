// 
let totalremaining = 5;
let remainingNmber = 0;
let wonNumber = 0;
let lostNumber = 0;





// finding Element
const form = document.querySelector('form');
const cardBody = document.querySelector('.cardBody');
const guessingNumber = cardBody.querySelector('#guessingGame');
const submitBtn = cardBody.querySelector('.btn');
const result = cardBody.querySelector('.result');
const wonLostCount = document.createElement('p');
const remaining = cardBody.querySelector('.remaining');


form.addEventListener('submit', (event)=>{
    remainingNmber++;
    event.preventDefault();

    if (remainingNmber === 5) {
        guessingNumber.disabled = true;
        submitBtn.disabled = true;
    } if(remainingNmber< 6) {
        let guesNumber = Number(guessingNumber.value);
        checkRusult(guesNumber);
        remaining.innerHTML = `Remaining Attampt : ${totalremaining - remainingNmber}`;
        
    }
    
    guessingNumber.value = '';
})

const checkRusult = (input) =>{

    const randomNumber = getRandomNumber(5);

    if (input === randomNumber) {
        result.innerHTML ='You have Won';
        wonNumber++;
        
    } else {
        result.innerHTML =`You have lost. Random Number was : ${randomNumber}`;
        lostNumber++;
    }

    wonLostCount.innerHTML = `You have won : ${wonNumber}. You have Lost ${lostNumber}`;
    wonLostCount.classList.add('largeText');
    cardBody.appendChild(wonLostCount);

}


const getRandomNumber = (limit)=>{
   return Math.floor(Math.random()* limit) +1;
}

