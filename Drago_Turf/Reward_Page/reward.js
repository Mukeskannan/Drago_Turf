const SERVER_URL = "http://localhost:8080";
window.onload=()=>{
   
    
    fetch(`${SERVER_URL}/Drago/Auth/api/check`,{
        method:"GET",
         headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
    })
}