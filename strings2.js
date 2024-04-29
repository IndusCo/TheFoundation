// function to check if word is Palindrome

function checkPali(){
    let attempts = 3
    let userInput;

// sets attempt amount and loop

    alert("This is the Palindrome Checker, you may check 3 words.")
    while(attempts>0){
        const string = prompt("Enter a word to check if it is a Palindrome");

        //while loop closes the loop once attempts exhausted

        const stringValue = string.split('');
        console.log(stringValue);

        //splits the word into letters

        const reverseStringValues = stringValue.reverse('');
        console.log(reverseStringValues);

        //reverses letters

        const joinedString = reverseStringValues.join ('');
        console.log(joinedString);

        //joins letters back together

        if(string == joinedString){
            attempts-- //deducts an attempt if this condition
            console.log("it is a palindrome");
            alert("It is a palindrome!" + " " + attempts + " words left.");
        }
        else{
            attempts-- //deducts an attempt if this condition
            console.log("It is not a palindrome");
            alert("It is NOT a palindrome!" + " " + attempts + " words left.");
        }    
        
        //checks to see if word is spelled the same forwards and backwards

    console.log(attempts + " attempts left.");
    }
}

//function to validate inputs on registration form

function validateForm(){
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const zipcode = document.getElementById('zipcode').value;
    
    //fetching the user inputs by name

    let firstPlusLast = (firstname + " " + lastname);
    let length = firstPlusLast.length;
    let length2 = zipcode.length

    //defining the variables and length of inputs

    if(length > 20){
        alert("Too Many Characters!"); //validating if too many characters
        return;
    }
    else if(length2 != 5){
        alert("Invalid Zip Format"); //validating if 5 digits or not
        return;
    }

    alert("Registration Successful."); //notifying user that inputs are valid
    document.getElementById('registrationForm').submit();
}
