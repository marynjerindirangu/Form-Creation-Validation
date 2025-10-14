// wrap the the entire script in a DOMContentLoaded event listener to ensure js runs after html loads
document.addEventListener("DOMContentLoaded", function(){
 // Select the form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

//listen for submission
form.addEventListener("submit", function(event){
    event.preventDefault(); 

    //retrieve and trim white spaces in input values 
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // validating
    let isValid = true;
    let messages = []

    //username vallidation
    if (username.length < 3){
        isValid = false;
        messages.push("Username must be at least 3 characters long.")
    }

    //email vallidation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }


    //Display feedback
    feedbackDiv.style.display = "block";

    if(isValid){
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; // green success color
        feedbackDiv.style.backgroundColor = "#d4edda";
    } else{
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // red error color
        feedbackDiv.style.backgroundColor = "#f8d7da";
    }


});

});