function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNavright() {
  document.getElementById("mySidenavRight").style.width = "350px";
  document.getElementById("mySidenavRight").style.display = "block";
}

function closeNavright() {
  document.getElementById("mySidenavRight").style.width = "0";
  document.getElementById("mySidenavRight").style.display = "none";
}

////  signup


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
}


}




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
                            <button type="submit" class="signupbutton">Sign Up</button>
                </form>`;
});

////  login

let login = document.getElementById("login");

login.addEventListener("click", () => {
  let formDiv = document.getElementById("form-here");

  formDiv.innerHTML = ` <div id="logindiv">
                <h4>Welcome Back!</h4>

                <form action="/" method="post" id="loginForm">

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

                    <button class="loginbutton" />Log In</button>

                </form>
                <p id="forgot"><a>Forgot password</a></p>

            </div>

    
`;
});




let orderData = JSON.parse(localStorage.getItem("cart")) || [];


let showCart = document.getElementById("show-cart-items");

fetchAndRenderCart(orderData);

function fetchAndRenderCart(data) {
  showCart.innerHTML = "";

  if (data.length === 0) {
    showCart.innerHTML = `
    <div class="empty-cart">
   <img src="https://pizzaonline.dominos.co.in/static/assets/cart_empty.png" id="empty-img">
   <div class="empty-text"><span id="empty-text-1">Your Cart is Empty</span><br><br><span class="empty-text-2">Please add some items from the menu.</span></div>
   <div>
      <div id="explore-div"><button id="explore" onclick="myFunction()" >Explore Menu</button></div>
   </div>
</div>
`;

    return;
  }

  let cardDetail = [];
  data.forEach((element) => {
    cardDetail.push(getCard(element));
  });

  //   cardDetail = [`<div id=1>First div</div>`, `<div id=1>Second div</div>`];
  showCart.innerHTML = `<div id="entire-div">${cardDetail.join("")}</div>`;
}

function getCard(item) {
  //item =  {
  // 	"id": 1,
  // 	"name": "Margherita",
  // 	"image": "https://images.dominos.co.in/new_margherita_2502.jpg",
  // 	"price": "199",
  // 	"category": "Veg",
  // 	"description": "Delightful Kashundi flavours on a veg pizza which is Loaded with spicy jalapenos ",
  // 	"size": "Regular"
  // }

  return `<div id="card">
                <div>
                    <div>
                        <img src="${item.image}" alt="photo" id="cart-photo">
                    </div>
                    <div>
                        <span class="item-title">${item.name}</span>
                    <br>
                    <span class="item-description">${item.description}</span>
                    <div class="item-option"><span>${
                      item.size
                    }</span><span>|</span><span>New Hand Tossed</span></div>
                    <hr style="width:95%;text-align:left;margin-left:0;text-decoration: dashed;">
                    <p id="customization-head">Your Customization</p>
                    <p id="customization-title">Added Toppings : <span>Extra Cheese</span></p>
                    </div>
                    <div>
                        <div class="increase-price">
                            <div class="price">
                                <div class="price-final"><span class="rupee"> ₹ ${
                                  item.quantity * item.price
                                }</span></div>
                                </div>
                                <div class="quantity-change"><div class="identity" style="display:none">${
                                  item.id
                                }</div>
                                    <div class="decrease"> <img src="https://pizzaonline.dominos.co.in/static/assets/icons/minus.svg" alt=""></div>
                                    |<div class="count">${item.quantity}</div> |
                                    <div class="increase"><img src="https://pizzaonline.dominos.co.in/static/assets/icons/plus.svg" alt=""></div>
                                </div>
                                </div>
                        </div>
                        </div>
                        </div>
                        `;
}

//// Increasing and decreasing quantity

let quantities = document.getElementsByClassName("quantity-change");

for (let idx = 0; idx < quantities.length; idx++) {
  let quantity = quantities[idx];
  "quanity is", quantity;

  //// logic for increase quantity
  let increaseElem = quantity.getElementsByClassName("increase")[0];

  increaseElem.addEventListener("click", increaseMyValue, false);

  function increaseMyValue() {
    let val = quantity.getElementsByClassName("count")[0];
    let id = quantity.getElementsByClassName("identity")[0];

    currentId = +id.innerHTML;

    let currentVal = +val.innerHTML;

    currentVal += 1;
    quantity.getElementsByClassName("count")[0].innerHTML = currentVal;

    //// setting getting in LS

    modifyLS(currentId, currentVal);
  }

  /// logic for decrease quantity

  let decreaseElem = quantity.getElementsByClassName("decrease")[0];

  decreaseElem.addEventListener("click", decreaseMyValue, false);

  function decreaseMyValue() {
    let val = quantity.getElementsByClassName("count")[0];

    let currentVal = +val.innerHTML;

    currentVal -= 1;

    let id = quantity.getElementsByClassName("identity")[0];

    currentId = +id.innerHTML;

    if (currentVal < 1) {
      let alertItem = confirm("Are you sure you want to remove this item?");

      if (alertItem == true) {
        //whatever you want to do
        console.log("working");
        removefromDOMandLS(currentId);
        //////////////////////////////////******************************************//////////////
        return;
      }
    }
    quantity.getElementsByClassName("count")[0].innerHTML = currentVal;

    modifyLS(currentId, currentVal);
  }

  //// modify cart values

  function modifyLS(id, newQuantity) {
    let orderDataNew = JSON.parse(localStorage.getItem("cart")) || [];

    orderDataNew.forEach((element, index) => {
      if (element.id === id) {
        element.quantity = newQuantity;
        location.reload();
      }
    });
    localStorage.setItem("cart", JSON.stringify(orderDataNew));
    //totalBill(orderDataNew)
  }
}

//// function for removing from LS and DOM

function removefromDOMandLS(Id) {
  let orderDataNew = JSON.parse(localStorage.getItem("cart")) || [];

  let updatedData = orderDataNew.filter((element, index) => {
    if (element.id === Id) {
      return false;
    }
    return true;
  });
  localStorage.setItem("cart", JSON.stringify(updatedData));
  location.reload();
}

///Calculating final total

let billDiv = document.querySelector(".bill");

function totalBill() {
  let total = 0;
  orderData.forEach((element) => {
    total += element.price * element.quantity;
  });

  let subTotal = document.getElementById("subTotalNow");
  subTotal.innerText = `₹ ${total}`;

  let taxAndCharges = document.getElementById("total-tax");
  let tax = +((18 / 100) * total).toFixed(2);

  taxAndCharges.innerText = `₹ ${tax}`;

  let grandTotal = document.getElementById("grand");

  let discount = document.getElementById("discount");
  let discountAmt = 0;

  if (orderData !== []) {
    discountAmt = 100;
  }
  discount.innerText = `₹ ${discountAmt}`;

  let grand = total - discountAmt + tax;

  if (orderData.length === 0) {
    grand = 0;
  }
  grandTotal.innerText = `₹ ${grand}`;
}

totalBill(orderData); // calling total bill here

//// place order api call - POST request

let placeOrderButton = document.querySelector("#place-order");

placeOrderButton.addEventListener("click", placeOrderFunction);

const orderAPI = "https://narrow-internal-record.glitch.me/orders";

let orderArray = JSON.parse(localStorage.getItem("cart")) || [];

for (let i = 0; i < orderArray.length; i++) {
  orderArray[i]["status"] = "Order Placed";
  orderArray[i]["id"]++;
}

function placeOrderFunction() {
  console.log("working");
  fetch(orderAPI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderArray),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      localStorage.setItem("cart", JSON.stringify(null));
      location.href = "/status.html";
    })
    .catch((error) => console.log("error", error));
}

//Redirection logic on clicking explore menu

function myFunction() {
  location.href = "index.html";
}
