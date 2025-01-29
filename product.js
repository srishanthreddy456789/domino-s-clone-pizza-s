function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  console.log("in product open ");
  document.getElementById("mySidenav").style.width = "350px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavright() {
    document.getElementById("mySidenavRight").style.width = "350px";
    document.getElementById("mySidenavRight").style.display = "block";
    document.getElementById("mySidenavRight").style.transition = "0.4s ease";
}

function closeNavright() {
    document.getElementById("mySidenavRight").style.width = "0";
    document.getElementById("mySidenavRight").style.width = "-350px";
    document.getElementById("mySidenavRight").style.transition = "0.4s ease";
    console.log("working in close");
}



//   console.log("in product open nav right");
//   document.getElementById("mySidenavRight").style.width = "350px";
//   document.getElementById("mySidenavRight").style.display = "block";
// }

function closeNavright() {
  document.getElementById("mySidenavRight").style.width = "0";
  document.getElementById("mySidenavRight").style.display = "none";
}
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
        window.location.replace("index.html");
        console.log(data);
    }







    ////  login // <form action="/" method="post" id="loginForm">// </form>




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

                    <button class="loginbutton" onclick="loginn()">Log In</button>

                
                <p id="forgot"><a>Forgot password</a></p>

            </div>

    
`;
    });

    async function loginn() {

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
                    window.location.replace("index.html");
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


////  signup
