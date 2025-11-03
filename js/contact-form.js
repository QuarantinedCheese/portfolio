// THIS MODULE WILL HANDLE ALL CODE RELATING TO THE CONTACT FORM.


// Initialize neccessary variables

const platform = document.getElementById("contacts") //Contact
const username = document.getElementById("user")

//Error message outputs
let errormsgs = Array.from(document.getElementsByClassName("error"));

const contacterr = errormsgs[0];
const usererr = errormsgs[1];

 // -------------------------------------------------------------------- \\
// ------------------------ REAL TIME VALIDATION ------------------------ \\

// Platform
platform.addEventListener("input", function() {
    let selected = platform.options[platform.selectedIndex].value;

    if (selected == "") {
        contacterr.innerText = "No contact method Selected";
    } else {
        contacterr.innerText = "\n"
    }
});

// Username
username.addEventListener("input", function() {
    let selected = platform.options[platform.selectedIndex].value;
    let name = username.value

    switch(selected) {
        case "email":
            let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Taken from example.

            if (re.test(name)) {
                usererr.innerText = "\n"
            } else {
                usererr.innerText = "Must follow valid email format. (username@email.com)"
            }
            break;

        case "discord":
            if(name.length < 2) {
                usererr.innerText = "Username must be a minimum of 2 characters. ";
            } else if (name.length > 32) {
                usererr.innerText = "Username must be a maximum of 32 characters. ";
            } else {
                usererr.innerText = "\n";
            }
            
            if (usererr.innerText == "\n") { // If no existing errors
                let re = /^[a-zA-Z0-9_.]+$/; //I wanna go home...
                if(re.test(name)) {
                    usererr.innerText = "\n";
                } else {
                    usererr.innerText = "Username must only include a-z, 0-9, '_' and '.'";
                }
            }
            break;
            
        case "":
            contacterr.innerText = "No contact method selected.";
            break;
    }
});

// SUBMIT BUTTON VALIDATION
// double check that fields are valid.

