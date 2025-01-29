
const url = "https://striped-telling-dryer.glitch.me/pizza"
const non_veg = "https://striped-telling-dryer.glitch.me/pizza?category=Non-Veg"
const vege = "https://striped-telling-dryer.glitch.me/pizza?category=Veg"

let container = document.querySelector("#container")
let cartContainer = document.querySelector("#cart-container")
let priceContainer = document.querySelector("#price-container")
var orderData = JSON.parse(localStorage.getItem("cart")) || []


let totalArr = []


let Data = []

let arr2 = JSON.parse(localStorage.getItem("total"))||[]
let bag1 = 0
 for(let i=0;i<arr2.length;i++){
 bag1 = bag1+arr2[i]
 }

 var totalPrice = bag1


displaydata3()





window.addEventListener("load", () => {
  fetchData(url)

  var bs = document.querySelector("#BS")
  bs.style.color = "#6c9bb3"
  bs.style.borderBottom = '2px solid #82bb37'
  
  if (cartContainer.innerHTML == "") {

    displaydata2()
  }


  let nonvpizza = document.querySelector("#non-veg")
  nonvpizza.addEventListener("click",function(){
    fetchData(non_veg)
    nonvpizza.style.color = "#6c9bb3"
    nonvpizza.style.borderBottom = '2px solid #82bb37'
   
    vegpizza.style.color = 'unset'
    vegpizza.style.borderBottom = "none"

    bs.style.color = "unset"
  bs.style.borderBottom = 'none'

    
  })

  let vegpizza = document.querySelector("#veg")
  vegpizza.addEventListener("click",function(){
    fetchData(vege)
    vegpizza.style.color = "#6c9bb3"
    vegpizza.style.borderBottom = '2px solid #82bb37'
   
    nonvpizza.style.color = "unset"
    nonvpizza.style.borderBottom = 'none'

    bs.style.color = "unset"
  bs.style.borderBottom = 'none'
    
  })

  
  bs.addEventListener("click",function(){
  fetchData(url)
  bs.style.color = "#6c9bb3"
  bs.style.borderBottom = '2px solid #82bb37'

  vegpizza.style.color = "unset"
  vegpizza.style.borderBottom = 'none'
 
  nonvpizza.style.color = "unset"
  nonvpizza.style.borderBottom = 'none'

})

  

})

function fetchData(params) {
  fetch(params)
    .then((res) => res.json())
    .then((aka) => {

      Data = aka.map((e, i) => {
        return {
          brand: e.brand,
          name: e.name,
          title: e.title,
          image: e.image,
          description: e.description,
          size:e.size,
          quantity:e.quantity,
          category: e.category,
          price: e.price,
          id: e.id
         
        }
      })
      
      displayData(Data)
      console.log(aka)
    })
    .catch((error) => {
      console.log(error)
    })
}


















function displayData(data) {

  container.innerHTML = null;
  data.forEach((el, i) => {
    let card = document.createElement("div")
    card.setAttribute("class", "card")

    let image = document.createElement("img")
    image.setAttribute("src", el.image)
    image.setAttribute("id", "image")

    let price = document.createElement("p")
    price.textContent = el.price
    price.setAttribute("class", "price")



    let name = document.createElement("h2")
    name.textContent = el.name
    name.setAttribute("id", "name")

    let description = document.createElement("p")
    description.textContent = el.description
    description.setAttribute("id", "desc")




    var array = ["Regular", "Medium", "Large"];

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.setAttribute("id", "selectList")
    selectList.addEventListener("select", function () {

    })



    //Create and append the options
    for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.append(option);
    }


    var array1 = ["New Hand Tossed", "100% Wheat Thin Crust", "Cheese Burst", "Fresh Pan Pizza"];

    //Create and append select list
    let List = document.createElement("select");
    List.setAttribute("id", "List")



    //Create and append the options
    for (var i = 0; i < array1.length; i++) {
      var option = document.createElement("option");
      option.value = array1[i];
      option.text = array1[i];
      List.append(option);
    }

    let btn = document.createElement("button")
    btn.textContent = "ADD TO CART"
    btn.setAttribute("id", "btn")
    
    btn.addEventListener("click", function () {

      

      let cartData = JSON.parse(localStorage.getItem("cart")) || []

//*** */
      

    
    
    
      

let isPresent = false
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id == el.id) {
          isPresent = true;

          break;
        }
      }
      if (isPresent == true) {
        alert("Product already in the cart")
      } else {
        cartData.push(el)
        localStorage.setItem("cart", JSON.stringify(cartData))
        // alert("Product added to The cart")
        let orderData = JSON.parse(localStorage.getItem("cart")) || []
        displaydata(orderData)
     
    //     let bag = 0
    // cartData.forEach(function(ele){
    //     bag=bag+Number(ele.price)
    //     totalPrice=bag

      
    // })
    
    // document.querySelector("#hh22").innerText="Total price is: "+total
    // console.log(totalPrice)
    
        
        let totalArr = JSON.parse(localStorage.getItem("total")) || []
        totalArr.push(Number(el.price))
        var bag = 0
        for (let i = 0; i < totalArr.length; i++) {
          bag = bag + totalArr[i]
        }
console.log(totalArr)
        totalPrice = bag
        localStorage.setItem("total", JSON.stringify(totalArr))
        
        
        // let done = localStorage.setItem("total", JSON.stringify(totalArr))

        // length = orderData.length

        // console.log(length)
       
    
       

      
displaydata3()






      }





    })







    card.append(image, price, name, description, selectList, List, btn)
    container.append(card)

  })

  
}







function displaydata(data) {


  cartContainer.innerHTML = null

  data.forEach((el, i) => {
    let cart = document.createElement("div")

    let img = document.createElement("img")
    img.setAttribute("src", el.image)
    img.setAttribute("id", "image")

    let prc = document.createElement("p")
    prc.textContent = el.price
    prc.setAttribute("class", "price")



    let nam = document.createElement("h2")
    nam.textContent = el.name
    nam.setAttribute("id", "name")

    let desc = document.createElement("p")
    desc.textContent = el.description
    desc.setAttribute("id", "desc")

    
    



   let cplus = document.createElement("div")
   cplus.setAttribute("id","cplus")


    let count = document.createElement("span")
    count.textContent = Number(1)

    let plus = document.createElement("button")
    plus.textContent = "+"
    
    plus.addEventListener("click",function(){
      count.textContent = Number(count.textContent) + Number(1)


      // var orderData = JSON.parse(localStorage.getItem("cart")) || []
      // totalPrice = totalPrice + Number(el.price)
      // console.log(totalPrice)
      // localStorage.setItem("total", JSON.stringify(totalPrice))
      //   localStorage.setItem("cart", JSON.stringify(orderData))
      //   // displaydata(orderData)
      //   displaydata3()

    })
    
    let minus = document.createElement("button")

      minus.textContent = "-"
    minus.addEventListener("click",function(){
      count.textContent -= Number(1)
      var orderData = JSON.parse(localStorage.getItem("cart")) || []
      // totalPrice = totalPrice - Number(el.price)
      // console.log(totalPrice)
      // localStorage.setItem("total", JSON.stringify(totalPrice))
      //   localStorage.setItem("cart", JSON.stringify(orderData))
      //   // displaydata(orderData)
      //   displaydata3()


      
      if(count.textContent<1){
        
        orderData.splice(i,1)
        totalPrice = totalPrice - el.price
        localStorage.setItem("total", JSON.stringify(totalPrice))
        localStorage.setItem("cart", JSON.stringify(orderData))
        displaydata(orderData)
        if (cartContainer.innerHTML == "") {

          displaydata2()
        }
        
        console.log('done')
      }
      displaydata3()

    })
    




    cplus.append(minus,count,plus)
    cart.append(img, prc, nam, desc,cplus)
    cartContainer.append(cart)





  })
}

displaydata(orderData)

function displaydata2() {

  let cartImg = document.createElement("img")

  cartImg.setAttribute("src", "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-empty-shopping-cart-store-icon-png-image_5624129.png")
  cartImg.setAttribute("class", "cartImg")

  let empty = document.createElement("h2")
  empty.textContent = "YOUR CART IS EMPTY"
  empty.setAttribute("class", "empty")

  let addCart = document.createElement("p")
  addCart.textContent = "Please add some items from the menu."
  addCart.setAttribute("class", "addCart")

  cartContainer.append(cartImg, empty, addCart)
}


function displaydata3() {
  
  priceContainer.innerHTML = null
  let total = document.createElement("div")
  let totalP = document.createElement("h2")
  totalP.textContent = `Subtotal‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ${totalPrice}.00`
  totalP.setAttribute("class", "totalP")
  let a = document.createElement("a")
  a.textContent = "CHECKOUT"
  a.setAttribute("class", "button")
  a.setAttribute("href","cart.html")
  

  total.append(totalP, a)

  priceContainer.append(total)


}

// function displaydata3() {
  
//   priceContainer.innerHTML = null
//   let total = document.createElement("div")
//   let totalP = document.createElement("h2")
//   totalP.textContent = `Subtotal‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ${totalPrice}.00`
//   totalP.setAttribute("class", "totalP")

//   let buttonn = document.createElement("button")
//   buttonn.textContent = "CHECKOUT"
//   buttonn.addEventListener('click',()=>{

//     // authentication
//     let arr71 = JSON.parse(localStorage.getItem('userlogin'))||[];
//     if(arr71.length == 0){
//       alert('Please Login First to place order');
//     }
//     else{
//       window.location.replace('cart.html')
//     }


//   })


//   buttonn.setAttribute("class", "button")
//   let a = document.createElement("a")
//   a.textContent = "CHECKOUT"
//   a.setAttribute("class", "button")
//   // a.setAttribute("href","cart.html")
  
//   total.append(totalP,buttonn)

//   priceContainer.append(total)








// }




//chandrakala
// ***********

function openNav() {
  console.log("in product open ");
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNavright() {
  console.log("in product open nav right");
  document.getElementById("mySidenavRight").style.width = "350px";
  document.getElementById("mySidenavRight").style.display = "block";
}

function closeNavright() {
  document.getElementById("mySidenavRight").style.width = "0";
  document.getElementById("mySidenavRight").style.display = "none";

  console.log("working in close");
}

////  signup

let signupElement = document.getElementById("signup");

signupElement.addEventListener("click", () => {
  let formDiv = document.getElementById("form-here");

  formDiv.innerHTML = `<h4>Sign Up for Free</h4>
  <form action="/" id="signupForm">
                
                    <table>
                <tr>
                                <td>
                                    <label>
                                        Email <span class="req">*</span>
                                    </label>
                            </td>
                            <td>
                                <input type="email" required autocomplete="off" id="email" />
                            </td>
                            </tr>
                            <tr>
                                <td>Phone<span class="req">*</span></td>
                                <td><input type="number" required autocomplete="off" id="phone"  /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Create Password<span class="req">*</span>
                                    </label>
                            </td>
                            <td><input type="password" required autocomplete="off" id="pass" /></td>
                            </tr>
                            </table>
                            <button type="submit" class="button1" class="signupbutton">Sign Up</button>
                </form>`;
});

////  login

let login = document.getElementById("login");

login.addEventListener("click", () => {
  let formDiv = document.getElementById("form-here");

  formDiv.innerHTML = ` <div id="logindiv">
                <h4>Welcome Back!</h4>
                
                    <table>
                        <tr>
                            <td><label>
                                    Email <span class="req">*</span>
                                </label>
                                </td>
                                <td>
                                    <input type="email" required id="enteremail" />
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Password<span class="req">*</span>
                                        </label>
                                </td>
                                <td>
                                    <input type="password" required autocomplete="off" id="enterpass" />
                                </td>
                                </tr>
                                </table>
                    <button class="button1" class="loginbutton" />Log In</button>
               
                <p id="forgot"><a>Forgot_password</a></p>
            </div>
    
`;
});




// profile name

function pro() {
  let name = document.getElementById('account');
  let chk = document.querySelector('.profile-text');
  let arr = JSON.parse(localStorage.getItem('userlogin')) || [];
  if (arr.length != 0) {
      name.textContent = arr[0].name;
      chk.textContent = "Welcome back👋";
  }
}
pro();



// logout button

let arr5 = JSON.parse(localStorage.getItem('userlogin')) || [];

if (arr5.length != 0) {
    let log = document.querySelector('.socialbutton');
    let html = `<div type="button" class="google" style="margin-left: 15px">
    <button class="red-google" onclick="logouttt()">
        <span>logout</span>
    </button>
</div>`
log.innerHTML += html;

let d = document.querySelector('.loginForm p');
d.innerHTML = "";
d.textContent = "Hello "+arr5[0].name

function logouttt(){
    alert("You Want to Logout");
    let arr = [];
    localStorage.setItem('userlogin',JSON.stringify(arr));
    pro();
    window.location.replace('main.html')
}


}





// login ?? sign Up



let signupEelement = document.getElementById("signup");

    signupEelement.addEventListener("click", () => {
        let formDiv = document.getElementById("form-here");

        formDiv.innerHTML = `<h4>Sign Up for Free</h4>
  
                
                    <table>
                
                <tr>
                <td>
                <label>
                    Name <span class="req">*</span>
                </label>
                </td>
    
    
        <td>
            <input type="name" required autocomplete="off" id="name" />
        </td>
        </tr>
        <tr>

                                <td>
                                    <label>
                                        Email <span class="req">*</span>
                                    </label>
                            </td>
                            <td>
                                <input type="email" required autocomplete="off" id="email" />
                            </td>
                            </tr>
                            <tr>
                                <td>Phone<span class="req">*</span></td>
                                <td><input type="number" required autocomplete="off" id="phone"  /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Create Password<span class="req">*</span>
                                    </label>
                            </td>
                            <td><input type="password" required autocomplete="off" id="pass" /></td>
                            </tr>
                            </table>
                            <button class="signupbutton" onclick="signupp()">Sign Up</button>`;

    });

    async function signupp() {

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let mobile = document.getElementById('phone').value;
        let password = document.getElementById('pass').value;


        let obj = {
            name: name,
            mobile: mobile,
            password: password,
            email: email
        }
        let api = await fetch("https://narrow-internal-record.glitch.me/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        let data = await api.json();
        window.location.replace("main.html");
        console.log(data);
    }







    ////  login // <form action="/" method="post" id="loginForm">// </form>




    let loginn = document.getElementById("login");

    loginn.addEventListener("click", () => {
        let formDiv = document.getElementById("form-here");

        formDiv.innerHTML = ` <div id="logindiv">
                <h4>Welcome Back!</h4>

                

                    <table>
                        <tr>
                            <td><label>
                                    Email <span class="req">*</span>
                                </label>
                                </td>
                                <td>
                                    <input type="email" required id="enteremail" />
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Password<span class="req">*</span>
                                        </label>
                                </td>
                                <td>
                                    <input type="password" required autocomplete="off" id="enterpass" />
                                </td>
                                </tr>
                                </table>

                    <button class="loginbutton" onclick="loginnn()">Log In</button>

                
                <p id="forgot"><a>Forgot password</a></p>

            </div>

    
`;
    });

    async function loginnn() {

        // let name = document.getElementById('name').value;
        let username = document.getElementById('enteremail');
        // let mobile = document.getElementById('phone').value;
        let password = document.getElementById('enterpass');

        let api = await fetch("https://narrow-internal-record.glitch.me/users")
        let data = await api.json();
        if (username.value == "") {
            alert("Please Enter Username");
            return;
        }
        if (password.value == "") {
            alert("Please Enter Password");
            return
        }
        else {
            let flag = true;
            for (let i = 0; i < data.length; i++) {
                if (username.value == data[i].email && password.value == data[i].password) {
                    flag = true;
                    let arr = [data[i]]
                    localStorage.setItem('userlogin', JSON.stringify(arr));
                    window.location.replace("main.html");
                    break;
                }
                else {
                    flag = false;
                }
            }
            if (flag == false) {
                alert("Please Enter Correct Email And Password")
                return;
            }
        }
    }
// ***************

