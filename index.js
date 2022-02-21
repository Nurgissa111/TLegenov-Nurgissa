$(".modal-body").mousemove(function(){
  let result=true;
  let x = document.forms["myForm"]["Username"].value;
  if (x == "") {
    result=false;
}

  let y=document.forms["myForm"]["Password"].value;
  let z=document.forms["myForm"]["ConfirmPassword"].value;
  if (y!=z) {
result=false;
}


  if (result==true) {
    document.querySelector(".button_disable").style.opacity=1;
  }
  else{
      document.querySelector(".registerbtn").disable=true;
  }
})

function validateForm() {
  let result = true;
  let trueResult = "successful user registration"
  let x = document.fores["myForm"]["Username"].value;
  if (x =="" ) {
    result = false;
    alert("Name must be filled out");
    return false;
  }

  let y=document.forms["myForm"]["Password"].value;
  let z=document.forms["myForm"]["ConfirmPassword"].value;
  if (y!=z){
    result=false;
    alert("Password is incorrect");
    return false;
  }
  if (result==true){
    alert("successful user registration");
    return false;
  }
}





function validateForm() {
let result=true;
let x = document.forms["myForm"]["Username"].value;
let trueResult="successful user registration";
if (x == "") {
result=false;
alert("Name must be filled out");
return false;
}
let y=document.forms["myForm"]["Password"].value;
let z=document.forms["myForm"]["ConfirmPassword"].value;
if (y!=z) {
result=false;
alert("Password is incorrect");
return false;
}
if (result==true) {
alert("successful user registration");
return false;
}
}
$(".btn-lg").click(function(){
  var audio=new  Audio("sound/Sound.mp3");
  audio.play();
})
