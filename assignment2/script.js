let button = document.getElementById("submitButton");
let message = document.getElementById("afterSubmit");

button.addEventListener("click", ()=>{
    message.innerText = "Thank you for your input! Your form has been submitted.";
    document.getElementById("myForm").reset();
});

