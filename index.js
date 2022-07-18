let mail = document.getElementById("mail");
let pswd1 = document.getElementById("pswd");
let check = document.getElementById("check");

mail.onkeyup = function () {
  val = mail.value;
  let at = val.indexOf("@");
  let dot = val.indexOf(".");
  if (at < 1) {
    document.getElementById("demo1").innerHTML =
      "Please enter '@' at valid place and '.' at valid place!";
  } else if (dot <= at + 2) {
    document.getElementById("demo1").innerHTML =
      "Please enter '.' at valid place";
  } else if (dot == val.length - 1) {
    document.getElementById("demo1").innerHTML =
      "Please enter some value after '.'";
  } else if (mail.value == "") {
    document.getElementById("demo1").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo1").innerHTML = "";
  }
};
mail.onclick = function () {
  if (mail.value == "") {
    document.getElementById("demo1").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo1").innerHTML = "";
  }
};
pswd1.onclick = function () {
  if (pswd1.value == "") {
    document.getElementById("demo2").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo2").innerHTML = "";
  }
};
let upper = /[A-Z]/g;
let lower = /[a-z]/g;
let num = /[0-9]/g;
let special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
pswd1.onkeyup = function () {
  let psd_value = pswd1.value;
  if (
    psd_value.match(upper) &&
    psd_value.match(lower) &&
    psd_value.match(num) &&
    psd_value.match(special)
  ) {
    if (psd_value.length < 8) {
      document.getElementById("demo2").innerHTML =
        "Please enter atleast 8 character";
    } else {
      document.getElementById("demo2").innerHTML = "";
    }
  } else if (pswd1.value == "") {
    document.getElementById("demo2").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo2").innerHTML =
      "Please enter at least one uppercase, one lower case, one digit, one special character and atleast 8 character";
  }
};
function login(){
    val = mail.value;
    let at = val.indexOf("@");
    let dot = val.indexOf(".");
    if( mail.value === ""){
        alert("Please write your mail!!");
    }
    else if( pswd1.value === ""){
        alert("Please write your password!!");
    }
    else if (at < 1) {
        alert("Please enter '@' at valid place and '.' at valid place in Email!");
    } 
    else if (dot <= at + 2) {
        alert("Please enter '.' at valid place in Email");
    } 
    else if (dot == val.length - 1) {
        alert( "Please enter some value after '.' in Emali");
    } 
    else if (pswd1.value.match(upper) == null) { 
        alert("Please enter one upper case letter in Password!!");
    }
    else if(pswd1.value.match(num) == null){
      alert("Please enter one number in Password!!");
    }
    else if(pswd1.value.match(lower) == null){
      alert("Please enter one lower case letter in Password!!");
    }
    else if(pswd1.value.match(special) == null){
      alert("Please enter one special case letter in Password!!");
    }
    else if(pswd1.value.length < 8){
      alert("Please enter at least 8 character in Password");
    }
    else{
      let email = mail.value;
      let password = pswd1.value;
      let activity = new Date();
      let active = new Array();      
      let user_record = new Array();      
      user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
      if(user_record.some((e)=>{return e.email == email && e.password == password})){
        alert("Login successfully!!");

        localStorage.setItem("ID","login");   
               
        let current_user = user_record.filter((e)=>{
          return e.email == email && e.password == password
        })[0];
        sessionStorage.setItem("userid",email);
        sessionStorage.setItem("fullName",current_user.fullName);
        sessionStorage.setItem("contact",current_user.contact);
        // sessionStorage.setItem("profile", current_user.profile)

        let month =  activity.getMonth() + 1;
        let fullDate= activity.getDate() + "/"+ month + "/"+ activity.getFullYear();
        let fullTime = activity.getHours() + ":"+ activity.getMinutes() + ":"+ activity.getSeconds(); 

        let person = sessionStorage.getItem("userid");
        active = JSON.parse(localStorage.getItem(email)) ? JSON.parse(localStorage.getItem(email)) : [];
        if(person == email){
          active.push({
               "date": fullDate,
               "time": fullTime
         });
         localStorage.setItem(email,JSON.stringify(active));
        }
        mail.value="";
        pswd1.value="";
        check.checked =false;
        window.open("home.html");
      }
      else if((user_record.some((e)=>{return e.email != email }))){
        alert("You are not register Please Sign up first!");
        mail.value="";
        pswd1.value="";
        check.checked =false;
      }
      else{
        alert("Incorrect Password ");
        pswd1.value="";
      }        
    } //end of else condition
}
function signup(){
  var log = localStorage.getItem("ID");
  if(log=="login"){
      window.location.href="home.html";
  }
  else{
      window.location.href="signup.html";
  }
}
function setcookie(){
  document.cookie = "email=" + mail.value + "; max-age=" + 60*60*24*10;
  document.cookie = "password=" + pswd1.value+ "; max-age=" + 60*60*24*10;
  console.log(document.cookie);
}
function getcookie(){
  let cookieArray = document.cookie.split(";");
  for(var i=0; i< cookieArray.length; i++){
      var valueArray = cookieArray[i].split("=");
      console.log(valueArray)
      if(valueArray[0].trim()=="email"){
          mail.value = valueArray[1];
      }
      else if(valueArray[0].trim()=="password"){
          pswd1.value = valueArray[1];
      }
  }
}