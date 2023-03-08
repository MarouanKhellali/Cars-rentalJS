//menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};



var globalSubtotal = [0,0,0,0,0,0,];

// 1st car calculation
function calculatePrice1() {
    var costDesc = document.getElementById("pricePerDay1").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var days = document.getElementById("days1").value;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price1").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[0] = total;
}

// 2nd car calculation
function calculatePrice2() {
    var costDesc = document.getElementById("pricePerDay2").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var days = document.getElementById("days2").value;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price2").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[1] = total;
}

// 3rd car calculation
function calculatePrice3() {
    var costDesc = document.getElementById("pricePerDay3").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var days = document.getElementById("days3").value;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price3").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[2] = total;
}

// 4th car calculation
function calculatePrice4() {
    var costDesc = document.getElementById("pricePerDay4").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
    var days = document.getElementById("days4").value;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price4").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[3] = total;
}

// 5th car calculation
function calculatePrice5() {
    var costDesc = document.getElementById("pricePerDay5").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
   var days =document.getElementById("days5").value;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price5").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[4] = total;
}

// 6th car calculation
function calculatePrice6() {
    var costDesc = document.getElementById("pricePerDay6").innerHTML;
    var cost = costDesc[1] + costDesc[2];
    
   
    var days = document.getElementById("days6").value;
    
    var total = parseInt(cost) * parseInt(days);
    document.getElementById("price6").innerHTML = "$" + total + " for " + days + " days";
    globalSubtotal[5] = total;
}



function calculateTotal() {
    var subtotal = 0;
    
    for(var i = 0; i < 6; i++){
        subtotal += globalSubtotal[i];
    }
    
    
    
    document.getElementById("subtotal").innerHTML = "$" + subtotal;
    
}

//reviews
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
//contact
function formValidation() {
  var fname = document.contactForm.fname.value;
  var lname = document.contactForm.lname.value;
  var email = document.contactForm.email.value;
  var message = document.contactForm.message.value;
  var from =document.contactForm.from.value;
  var to= document.contactForm.to.value;
  
  
  var radiobtn = document.contactForm.gender;
  var radiobtnChecked = false;
  
  for (var i = 0; i < radiobtn.length; i++) {
      if (radiobtn[i].checked)
          radiobtnChecked = true;
  }
  
  var day = document.contactForm.day;
  var month = document.contactForm.month;
  var year = document.contactForm.year;
 
  
  var checkbox = document.contactForm.terms.checked;
  
  // Check and alert
  var alertString = "";
  
  if (fname == "")
      alertString += "*First name must be filled\n";
  
  if (lname == "")
      alertString += "*Last name must be filled\n";
  
  if (email == "")
      alertString += "*E-mail must be filled\n";
      if (from == "")
      alertString += "*you must enter the first reservation day\n";
      if (to == "")
      alertString += "*you must enter the last reservation day\n";
  
  
  
  if (radiobtnChecked == false)
      alertString += "*Select your gender\n";
  
  if (day.options[day.selectedIndex].text == "day")
      alertString += "*Select day of birth\n";
  
  if (month.options[month.selectedIndex].text == "month")
      alertString += "*Select month of birth\n";
  
  if (year.options[year.selectedIndex].text == "year")
      alertString += "*Select year of birth\n";
  
  if (message == "")
      alertString += "*Please, write us a message\n";
  
  if (checkbox == false)
      alertString += "*Please, accept terms and conditions\n";

  
  if (alertString != "") {
      window.alert(alertString);
      return false;
  }
  else
      window.alert("Thank you for submission!");
}
