// myProducts.filter((item)=>item.title.includes(search.value))
// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
const home = document.getElementById('home');
let login = document.getElementById('login-btn');
let signup = document.getElementById('Signup-btn');

login.addEventListener('click',()=>{
        window.location.href  ="/login/index.html";
});
signup.addEventListener('click',()=>{
    window.location.href  ="/signup/index.html";
});

if(localStorage.getItem("currentuser")){
    alert("you have already logged in");
      setTimeout(()=>{
      window.location.href  ="/shop/index.html";
     },2000);
  }