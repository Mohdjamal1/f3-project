let url = `https://fakestoreapi.com/products`;
let data = [];
let mensItems = document.querySelector('.mens-item');
let womensItems = document.querySelector('.womens-item');
let Jewellery = document.querySelector('.jewellery-item');
let electronics = document.querySelector('.electronics-item');
let filterMan = document.querySelector('.filter-men');
let filterWomen = document.querySelector('.filter-women');
let filterJewelry = document.querySelector('.filter-jewelry');
let filterElect = document.querySelector('.filter-elect');
let allItem = document.querySelector('.all');

if(!localStorage.getItem("currentuser")){
  alert("you need to signup or login first to access products");
   setTimeout(()=>{
    window.location.href  ="../index.html";
   },1000);
}



let products =  JSON.parse(localStorage.getItem("products")) || [];
let cartproducts =  JSON.parse (localStorage.getItem("cartproducts") ) || [];

// let prodcont = document.querySelector(".product-container");
let filters = document.querySelectorAll(".filter");

let searchbar = document.querySelector("#search-bar");
console.log(filters);

// if(!localStorage.getItem("products")){
  fetch(url)
  .then((res) => {
      return res.json();
  })
  .then((json) => {
      products = json;
      // products = modifyproducts(products);
      localStorage.setItem("products", JSON.stringify(products));
      console.log(products);   
      //
      data = json;
      all();
      console.log(data);

      allItem.addEventListener('click',()=>{  
        all();
      })
      
      filterMan.addEventListener('click',()=>{
        filterItem();
        womensItems.parentElement.classList.add('abc');
        Jewellery.parentElement.classList.add('abc');
        electronics.parentElement.classList.add('abc');
        mensItems.parentElement.classList.remove('abc');
        filterMan.classList.add('active');
        filterWomen.classList.remove('active');
        filterJewelry.classList.remove('active');
        filterElect.classList.remove('active');
        allItem.classList.remove('active');
        menClothing();
      })

      filterWomen.addEventListener('click',()=>{
        filterItem();
        mensItems.parentElement.classList.add('abc');
        Jewellery.parentElement.classList.add('abc');
        electronics.parentElement.classList.add('abc');
        womensItems.parentElement.classList.remove('abc');
        filterMan.classList.remove('active');
        filterWomen.classList.add('active');
        filterJewelry.classList.remove('active');
        filterElect.classList.remove('active');
        allItem.classList.remove('active');
        womenClothing();
      })

      filterJewelry.addEventListener('click',()=>{
        filterItem();
        mensItems.parentElement.classList.add('abc');
        womensItems.parentElement.classList.add('abc');
        electronics.parentElement.classList.add('abc');
        Jewellery.parentElement.classList.remove('abc');
        filterMan.classList.remove('active');
        filterWomen.classList.remove('active');
        filterJewelry.classList.add('active');
        filterElect.classList.remove('active');
        allItem.classList.remove('active');
        showJewellery();
      })

      filterElect.addEventListener('click',()=>{
        filterItem();
        mensItems.parentElement.classList.add('abc');
        womensItems.parentElement.classList.add('abc');
        Jewellery.parentElement.classList.add('abc');
        electronics.parentElement.classList.remove('abc');
        filterMan.classList.remove('active');
        filterWomen.classList.remove('active');
        filterJewelry.classList.remove('active');
        filterElect.classList.add('active');
        allItem.classList.remove('active');
        showElectronic();
      })
    });//end of .then()
  //}//end of if
      //Men's Clothing
      function menClothing(){
      data.filter(element => {
      if(element.category === `men's clothing`){
        product(element,mensItems);
      }
    });
    }

      //Women's Clothing:
      function womenClothing(){
        data.filter(element => {
      if(element.category === `women's clothing`){
          product(element,womensItems);
        }
      })
    }
        //Jewellery
        function showJewellery(){
          data.filter(element => {
        if(element.category === `jewelery`){
          product(element,Jewellery);
          }
        })
      }
        //Electronics
        function showElectronic(){
          data.filter(element => {
        if(element.category === `electronics`){
            product(element,electronics);
            }
          });
        }
//making dynamic product 
function product(element,e){
          const id = element.id;
          const title = element.title;
          const description = element.description;
          const category = element.category;
          const price = element.price;
          const image = element.image;
          const rate = element.rating.rate;
          
          let div2 = document.createElement('div');
          div2.className = 'item';
          div2.innerHTML = `<div class="info">
          <img src=${image} class='my' alt="Item" /> 
          <div class="row title">Name: ${title}</div>
            <div class="row">
              <div class="price">Price: $${price}</div>
              <div class="sized">Size: S,M,L</div>
            </div>
            <div class="colors">
              Colors:
              <div class="row">
                <div class="circle" style="background-color: #000"></div>
                <div class="circle" style="background-color: #4938af"></div>
                <div class="circle" style="background-color: #203d3e"></div>
              </div>
            </div>
            <div class="row">Rating:${rate}</div>
            </div>
            <button id="addBtn-${product.id}" onclick="addtocartfunc(event)">Add to Cart</button>`;
            e.appendChild(div2);
};

function filterItem() {
  mensItems.innerHTML='';
  womensItems.innerHTML='';
  Jewellery.innerHTML='';
  electronics.innerHTML='';
}

function addtocartfunc(event){

  let str = event.target.innerText;
  let id = Number (event.target.getAttribute('id').split('-')[1]);
  console.log(id);

  if(str=="Add to Cart"){
      event.target.innerText = "Added"

      for(let product of products){
          if(product.id == id){
              cartproducts.push(product);
              break;
          }
      }

  }
  else{
      event.target.innerText = "Add to Cart"

      for(let i=0; i< cartproducts.length; i++){
          if(cartproducts[i].id == id){
              cartproducts.splice(i, 1);
          }
      }

  }
  
 localStorage.setItem("cartproducts", JSON.stringify(cartproducts));

  console.log(cartproducts);

}

function all() {
  mensItems.parentElement.classList.remove('abc');
  womensItems.parentElement.classList.remove('abc');
  Jewellery.parentElement.classList.remove('abc');
  electronics.parentElement.classList.remove('abc');
  filterMan.classList.remove('active');
  filterWomen.classList.remove('active');
  filterJewelry.classList.remove('active');
  filterElect.classList.remove('active');
  allItem.classList.add('active');
  filterItem();
  menClothing();
  womenClothing();
  showJewellery();
  showElectronic();
};

