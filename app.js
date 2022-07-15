let number = 0;

const value = document.querySelector(".value");

const btnD = document.querySelector(".decrease");
const btnI = document.querySelector('.increase');
const btnR = document.querySelector('.reset');

btnD.addEventListener('click', () => { 
     number--;
        value.textContent = number;
        
})

btnI.addEventListener('click', () => { 
    number++;
       value.textContent = number;
       
})

btnR.addEventListener('click', () => { 
    number = 0 ;
       value.textContent = number;
       
})