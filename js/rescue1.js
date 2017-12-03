var dogName = document.getElementById("name");
var dogID = document.getElementById("id-number");
var dogBreed = document.getElementById("breed");
var dogColor = document.getElementById("color");
var dogDate = document.getElementById("in-date");
var dogSexMale = document.getElementById("sex-Male");
var dogSexFemale = document.getElementById("sex-Female");
var dogAge = document.getElementById("age");
var dogForm = document.getElementById("dog-form");

var dogButton = document.getElementById("add-dog");
var cName = document.getElementById("c-dog-name");
var cID = document.getElementById("c-dog-id");
var cBreed = document.getElementById("c-dog-breed");
var cColor = document.getElementById("c-dog-color");
var cDate = document.getElementById("c-dog-date");
var cSex = document.getElementById("c-dog-sex");
var cAge = document.getElementById("c-dog-age");



dogButton.addEventListener("click", function(){
    alert("hello!")
    cName.innerText= "Name: " + dogName.value;
    cID.innerText="ID: " + dogID.value;
    cBreed.innerText="Breed: " + dogBreed.value;
    cColor.innerText="Color: " + dogColor.value;
    cDate.innerText="Date: " + dogDate.value;
    cAge.innerText="Age: " + dogAge.value;
    if (dogSexMale.checked){
        cSex.innerText="Sex: " + dogSexMale.value;
    }else {
        if(dogSexFemale.checked){
        cSex.innerText="Sex: " + dogSexFemale.value;
        }
    }

    dogForm.reset();
});