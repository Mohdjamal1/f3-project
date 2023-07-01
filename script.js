// myProducts.filter((item)=>item.title.includes(search.value))
// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
const home = document.getElementById('home');
let login = document.getElementById('login-btn');
let signup = document.getElementById('Signup-btn');

login.addEventListener('click',()=>{
        window.location.href  ="./login/index.html";
});
signup.addEventListener('click',()=>{
    window.location.href  ="./signup/index.html";
});

if(sessionStorage.getItem("currentuser")){
    alert("you have already logged in");
      setTimeout(()=>{
      window.location.href  ="./shop/index.html";
     },2000);
  }

  home.addEventListener('click',(e)=>{
    e.preventDefault();
    if(sessionStorage.getItem('currentuser')){
      window.location.href = '../shop/index.html';
    }
    else{
        alert('You need login first.');
    }
   });

   document.getElementById('cart').addEventListener('click',(e)=>{
    e.preventDefault();
    if(sessionStorage.getItem('currentuser')){
      window.location.href = '../cart/index.html';
    }
    else{
        alert('you need to login');
    }
   });

   document.getElementById('profile').addEventListener('click',(e)=>{
    e.preventDefault();
    if(sessionStorage.getItem('currentuser')){
      window.location.href = '../profile/index.html';
    }
    else{
        alert('you need login');
    }
   })