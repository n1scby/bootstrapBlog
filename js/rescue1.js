var dogName = document.getElementById("name");
var dogID = document.getElementById("id-number");
var dogBreed = document.getElementById("breed");
var dogColor = document.getElementById("color");
var dogDate = document.getElementById("in-date");
var dogSex = document.getElementsByName("sex");
var dogButton = document.getElementById("add-dog");
var cName = document.getElementById("c-dog-name");
var cID = document.getElementById("c-dog-id");
var cBreed = document.getElementById("c-dog-breed");
var cColor = document.getElementById("c-dog-color");
var cDate = document.getElementById("c-dog-date");
var cSex = document.getElementsByName("c-dog-sex");



dogButton.addEventListener("click", function(){
    alert("hello!")
    cName.innerText=dogName.value;
    cID.innerText=dogID.value;
    cBreed.innerText=dogBreed.value;
    cColor.innerText=dogColor.value;
    cDate.innerText=dogDate.value;
    cSex.innerText=dogSex.value;


});