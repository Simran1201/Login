let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let mail = document.getElementById("mail");
let pswd1 = document.getElementById("pswd");
let pswd2 = document.getElementById("pswd2");
let cont = document.getElementById("cont");
let remove = document.getElementById("remove");
let only_number = /[0-9]/g;

fname.onkeyup = function () {
  if (fname.value.match(only_number)) {
    document.getElementById("demo").innerHTML = "Please enter only alphabets!!";
  } else if (fname.value == "") {
    document.getElementById("demo").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo").innerHTML = "";
  }
};
fname.onclick = function () {
  if (fname.value === "") {
    document.getElementById("demo").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo").innerHTML = "";
  }
};
lname.onkeyup = function () {
  if (lname.value.match(only_number)) {
    document.getElementById("demo2").innerHTML =
      "Please enter only alphabets!!";
  } else if (lname.value == "") {
    document.getElementById("demo2").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo2").innerHTML = "";
  }
};
lname.onclick = function () {
  if (lname.value == "") {
    document.getElementById("demo2").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo2").innerHTML = "";
  }
};
mail.onkeyup = function () {
  val = mail.value;
  let at = val.indexOf("@");
  let dot = val.indexOf(".");
  if (at < 1) {
    document.getElementById("demo3").innerHTML =
      "Please enter '@' at valid place and '.' at valid place!";
  } else if (dot <= at + 2) {
    document.getElementById("demo3").innerHTML =
      "Please enter '.' at valid place";
  } else if (dot == val.length - 1) {
    document.getElementById("demo3").innerHTML =
      "Please enter some value after '.'";
  } else if (mail.value == "") {
    document.getElementById("demo3").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo3").innerHTML = "";
  }
};
mail.onclick = function () {
  if (mail.value == "") {
    document.getElementById("demo3").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo6").innerHTML = "";
  }
};

pswd1.onclick = function () {
  if (pswd1.value == "") {
    document.getElementById("demo4").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo4").innerHTML = "";
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
    // document.getElementById("demo4").innerHTML = "";
    if (psd_value.length < 8) {
      document.getElementById("demo4").innerHTML =
        "Please enter atleast 8 character";
    } else {
      document.getElementById("demo4").innerHTML = "";
    }
  } else if (pswd1.value == "") {
    document.getElementById("demo4").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo4").innerHTML =
      "Please enter at least one uppercase, one lower case, one digit, one special character and atleast 8 character";
  }
};

pswd2.onclick = function () {
  if (pswd2.value == "") {
    document.getElementById("demo5").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo5").innerHTML = "";
  }
};
pswd2.onkeyup = function () {
  if (pswd1.value !== pswd2.value) {
    document.getElementById("demo5").innerHTML = "Please enter valid password";
  } else if (pswd2.value == "") {
    document.getElementById("demo5").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo5").innerHTML = "";
  }
};

cont.onkeyup = function () {
  if (!Number(cont.value)) {
    document.getElementById("demo6").innerHTML = "Please enter only Number";
  } else if (cont.value.length != 10) {
    document.getElementById("demo6").innerHTML =
      "Please enter only 10 Digit Number";
  } else {
    document.getElementById("demo6").innerHTML = "";
  }
};
cont.onclick = function () {
  if (cont.value == "") {
    document.getElementById("demo6").innerHTML = "Please enter some value!!";
  } else {
    document.getElementById("demo6").innerHTML = "";
  }
};

var img = document.forms["myForm"]["img_load"];
img.onchange = function (e) {
  if (img.value != "") {
    let extensions = ["jpg", "jpeg", "png", "BMP"]; //checking the valid extension
    // console.log(img.value);
    var img_ext = img.value.substring(img.value.lastIndexOf(".") + 1);
    // console.log(img_ext);
    if (extensions.includes(img_ext) == false) {
      document.getElementById("demo7").innerHTML =
        "Please upload image only!! (.jpg,.jpeg,.png,.bmp)";
    } else {
      let siz = parseFloat(img.files[0].size / (1024 * 1024)).toFixed(2); //checking the size of image
      if (siz >= 2) {
        document.getElementById("demo7").innerHTML =
          "The image size should be less than 2mb!!";
      } else {
        var show_image = document.getElementById("demo8");
        //Checking for width and height of image
        let selected = img.files[0];
        // console.log(selected)
        var reader = new FileReader();
        reader.onload = function (e) {
          var imgObj = new Image();
          imgObj.src = e.target.result;
          //   console.log(imgObj)
          // console.log(show_image.src=e.target.result)
          show_image.src = e.target.result;
          // document.getElementsByTagName("img").src=e.target.result;
          imgObj.onload = function () {
            console.log(`Height: ${imgObj.height} Width: ${imgObj.width}`);
            if (imgObj.height >= 150 && imgObj.width >= 150) {
              document.getElementById("demo7").innerHTML =
                "Please upload file of 150X150";
              // document.getElementById("demo8").src = "";
            } else {
              document.getElementById("demo7").innerHTML = "";
            }
          };
        };
        reader.readAsDataURL(selected);
        //Showing image in page:
        show_image.src = URL.createObjectURL(e.target.files[0]);
        show_image.style.display = "block";
        // console.log(show_image)
        // console.log(img.files[0])
        document.getElementById("demo7").innerHTML = "";
      }
    }
    document.getElementById("remove").style.display = "block";


    var hide = document.getElementById("img"); //name of img
    //Removing of image
    remove.onclick = function (event) {
      document.getElementById("remove").style.display = "none";
      event.preventDefault();
      if (hide.value != "") {
        hide.value = "";
        document.getElementById("demo7").innerHTML = "";
        // document.getElementById("demo8").src = "";
        show_image.style.display = "none";
      } else {
        document.getElementById("remove").innerHTML = "";
        document.getElementById("demo7").innerHTML = "";
        show_image.style.display = "block";
      }
    };
  }
};

function validate() {
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let block = document.getElementById("card");
  let pass= document.getElementById("img");
  val = mail.value;
  let at = val.indexOf("@");
  let dot = val.indexOf(".");
  console.log(pass)
  if (male.checked == true) {
    var specific = "Mr.";
  } else if (female.checked == true) {
    var specific = "Ms.";
  } else {
    var specific = "";
  }
  if (fname.value === ""|| lname.value === ""|| mail.value === ""||  pswd1.value === ""|| pswd2.value === "" || cont.value === "" || img.value ==="" ) {
    alert("Please Fill the Required field!!");
  }
  else if(fname.value.match(only_number) || lname.value.match(only_number) || !Number(cont.value) || cont.value.length != 10){
    alert("Please enter valide value");
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
  else if(pswd1.value !== pswd2.value){
    alert("Please enter valide matching confirm Password!!");
  }
  else {
          let show_image = document.getElementById("profile");
          show_image.src = URL.createObjectURL(pass.files[0]);
          let gender = document.querySelector("input[type=radio][name=gender]:checked");
          let ok = document.getElementById("ok");
          ok.onclick = function(){                
            if(block.style.display==="block"){
              block.style.display="none";
              fname.value="";
              lname.value="";
              mail.value="";
              cont.value="";
              pswd1.value="";
              pswd2.value="";
              gender.checked =false;
              img.value="";
              remove.style.display="none";
              document.getElementById("demo8").style.display="none";
              window.location.href = "index.html";
            } 
          }   
          let name = fname.value + " " + lname.value;
          let formData = new Array();
          formData = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
          if(formData.some((e)=>{return e.email == val})){
            alert ("You have been Already register!!");
            fname.value="";
              lname.value="";
              mail.value="";
              cont.value="";
              pswd1.value="";
              pswd2.value="";
              gender.checked =false;
              img.value="";
              remove.style.display="none";
              document.getElementById("demo8").style.display="none";
              window.location.href = "index.html";
          }
          else{
            // document.querySelector("#img").addEventListener("change",function(){
            //   let reader = new FileReader();
            //   reader.addEventListener("load",()=>{
            //     formData.push({"profile": reader.result})
            //   })
            // })
            formData.push({
            "fullName": name,
            "password": pswd1.value,
            "email": val,
            "contact": cont.value
          });
          localStorage.setItem("users",JSON.stringify(formData));
          
          block.style.display = "block",
          document.getElementById("fullName").innerHTML=`${specific} ${fname.value} ${lname.value}`;
          document.getElementById("email").innerHTML=` ${mail.value} `;
          document.getElementById("phone").innerHTML = `+91 ${cont.value}`;
          document.getElementById("profile").innerHTML= `${show_image}`;
          alert("Thank You for sign up!!");
          }         
          // alert(`
          //   Full Name: ${specific} ${fname.value} ${lname.value}
          //   Email Id: ${mail.value} 
          //   Contact No.: +91 ${cont.value}
          //   Profile Image: ${pass.files[0].name}
          // `);          
  }
}