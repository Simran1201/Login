function show(){
    let thead = document.querySelector("thead");
    let body = document.querySelector("tbody");
    if(thead.style.display == "none" && tbody.style.display == "none"){
      thead.style.display = "block" 
      tbody.style.display = "block"
    }
    else{
      thead.style.display = "none"
      tbody.style.display = "none"
    }
  }
  let email = sessionStorage.getItem("userid");
  console.log(email);
  let tbody = document.querySelector("tbody");
  let active = new Array();
  active = JSON.parse(localStorage.getItem(email)) ? JSON.parse(localStorage.getItem(email)) : [];
  console.log(active);
  active.forEach(fun);
  function fun(value, index){
    var txt = value.date;
    var txt2 = value.time;
    tbody.innerHTML += `
    <tr>
      <td> ${index +1}</td> 
      <td> ${txt}</td>
      <td> ${txt2}</td>
    </tr>
  `;
  }
  var log = localStorage.getItem("ID");
  if(log=="login"){
  }
  else{
    window.location.href="index.html";
  }
  function logout(){
    localStorage.setItem("ID","logout");
    sessionStorage.clear();
    alert("LOG OUT Succesfull!!")
    window.location.href = "index.html";
  }