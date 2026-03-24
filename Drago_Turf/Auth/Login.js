    const SERVER_URL = "http://localhost:8080";
    const token = localStorage.getItem("token");

    var login=document.getElementById("login-btn")
    login.addEventListener("click",(e)=>{
        e.preventDefault()
        
        
        let username=document.getElementById("username-box").value;
        let password=document.getElementById("password-box").value;
        fetch(`${SERVER_URL}/Drago/Auth/Signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userName: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Login Failed");
        }
        return response.json();  //  convert response to JSON
    })
    .then(data => {
        alert("Login Successfully");

        // Now token available
        localStorage.setItem("token", data.Token);
        console.log(data.Token)
        console.log("Token stored successfully");
        // Redirect if needed
       setTimeout(function(){
         window.location.href="../Main/Drago.html";
       },100)
    })
    .catch(error => {
        alert(error.message);
    });
    })