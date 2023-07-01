let loginbtn = document.getElementById("log-in");
let emailinp = document.querySelector("#email");
let passinp = document.querySelector("#pass");
let errmsg = document.querySelector("#errmsg");

// if(localStorage.getItem("currentuser")){
//   alert("you have already logged in");
//     setTimeout(()=>{
//     window.location.href  ="/shop/index.html";
//    },1000);
// }

loginbtn.addEventListener("click", (e)=>{
    e.preventDefault();
 
    if(emailinp.value.trim() === "" || passinp.value.trim() === "" ){    
      errmsg.innerText  = "Error : All the fields are mandatory";
      errmsg.style.color = "#FF4F4F";
      errmsg.style.display = "inline-block";
      return;
    }
   //   console.log(user);
 
    if(!localStorage.getItem("users")){
    
       errmsg.innerText  = `${emailinp.value} is not available You must sign in first`;
       errmsg.style.color = "#FF4F4F";
       errmsg.style.display = "inline-block";
       return;
 
    }
    else{
 
       let usersarr = JSON.parse(localStorage.getItem("users"));
       console.log(usersarr);
 
         for(let userobj of usersarr){
           if(userobj.email == emailinp.value && userobj.password == passinp.value){
 
              userobj.token = generatetoken();                 
               sessionStorage.setItem("currentuser",  JSON.stringify (userobj));
 
               errmsg.innerText  = "Successfully Login!";
               errmsg.style.color = "#7ECD71";
               errmsg.style.display = "inline-block";
 
                 setTimeout(()=>{
                  window.location.href  ="../shop/index.html";
                 },1000);
          
               return;
           }
         }
         errmsg.innerText  = `${emailinp.value} is not available or wrong password entered`;
         errmsg.style.color = "#FF4F4F";
         errmsg.style.display = "inline-block";
         return;
    }
 });
 document.getElementById('homeLink').addEventListener('click',(e)=>{
  e.preventDefault();
  if(sessionStorage.getItem('currentuser')){
    window.location.href = '../shop/index.html';
  }
  else{
    alert('please Enter your Email and Password');
  }
 })
 
 
 function generatetoken(){
   let str = "";
   for(let i=0; i<16; i++){
       str +=   String.fromCharCode  (Math.floor(Math.random() * 89) + 33); //33 to 122
   }
 
   return str;
 }