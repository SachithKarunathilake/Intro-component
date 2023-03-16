let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);



let firstname = id("first-name"),
    lastname = id("last-name"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    failureIcon = classes("failure-icon"),
    errorMsg = classes("error");


form.addEventListener("submit", (e) => {
e.preventDefault();
});





let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      failureIcon[serial].style.opacity = "1";

    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      failureIcon[serial].style.opacity = "0";

    }
  }






form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(firstname, 0, "First Name cannot be empty");
    engine(lastname, 1, "Last Name cannot be empty");
    engine(email, 2, "Email cannot empty");
    engine(password, 3, "Password cannot be empty");
  });





// function validateEmail(emailId){
//     var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if(emailId.value.match(mailformat)){

//         document.form.text.focus();
//         return true;

//     } else
//     {
//         alert("Invalid email address.");
//         document.form.text.focus();
//         return false;
//     }
// }






