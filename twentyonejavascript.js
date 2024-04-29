// Ahsan Tariq
// my Twenty One game (Simplified Black Jack)

function generateRandomNumber(){
	return Math.floor(Math.random()*11)+1;
}

// Function to calculate and display the current hand total

let sum = generateRandomNumber();
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;

function displayTotal(){
    return sum + sum2 + sum3 + sum4 + sum5;
}

// Function to check win or bust

function checkWinOrBust(total){
if (total == 21){
    document.getElementById("twentyone").innerHTML = "You Win!";
} else if (total > 21){
    document.getElementById("twentyone").innerHTML = "Bust!";
} else {
    document.getElementById("twentyone").innerHTML = "Your hand equals " + total;
}
}


function myFunction(){
    document.getElementById('twentyone').innerHTML = 'Your hand equals ' + displayTotal();
}


function myFunction2(){
    sum2 = generateRandomNumber();
    document.getElementById('dealer').innerHTML = 'Your hand equals ' + displayTotal();
    checkWinOrBust(displayTotal());
}


function myFunction3(){
    sum3 = generateRandomNumber();
    document.getElementById('dealer2').innerHTML = 'Your hand equals ' + displayTotal();
    checkWinOrBust(displayTotal());
}

 
function myFunction4(){
    sum4 = generateRandomNumber();
    document.getElementById('dealer3').innerHTML = 'Your hand equals ' + displayTotal();
    checkWinOrBust(displayTotal());
}

function myFunction5(){
    sum5 = generateRandomNumber();
    document.getElementById('dealer4').innerHTML = 'Your hand equals ' + displayTotal();
    checkWinOrBust(displayTotal());
}
