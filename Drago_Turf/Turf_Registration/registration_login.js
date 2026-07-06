
  const SERVER_URL = "http://localhost:8080";
  var login=document.getElementById("login-btn");
    login.addEventListener("click",(e)=>{
    e.preventDefault();
    let Turf_Name=document.getElementById("turfname-box").value;
    let Turf_Mobile_Number=document.getElementById("tmobile-box").value;    
    

    fetch(`${SERVER_URL}/Turf_Login`,{
        method:"POST",
        headers:{
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json" 
            
        },
        body:JSON.stringify({
            Turf_Name:Turf_Name,
            Turf_Mobile_Number:Turf_Mobile_Number}
        )
    })
    .then(res=>{
        if(!res.ok){            
            window.location.href="../Turf_Registration/registration.html"
        return;
      }
      localStorage.setItem("turf_Name",Turf_Name);
      localStorage.setItem("turf_Mobile_Number",Turf_Mobile_Number)
       window.location.href="../Turf_Registration/Turf_Admin.html"
      return res.json();
        
    })
    .then(data=>{
            BASE_URL = "http://localhost:8080";
        console.log(data);
        
         const resp = data;
        let turf_div=document.getElementById("turf_div")
         const newDiv1 = document.createElement('div');
        newDiv1.className = 't-g-main-block1';

        newDiv1.innerHTML =
          ` <img src=${BASE_URL+resp.Image1path} class='photosturf1'><div class='right-arrow' onclick='increaseblock(event)'></div> <div class='t-g-Nameturf'><span class='span'>Name :&nbsp; </span> ${resp.name} </div> <br> <div class='t-g-turf_id'> ${resp.id} </div> <br><div class='t-g-Locationturf'>${resp.location}</div> <br> <div class='t-g-MainAddress'>Address : &nbsp; <br>" ${resp.address}"</div> <br> <div class='t-g-Contactturf'><span class='span'>Contact : &nbsp; </span>" ${resp.contact}"</div> <br> <div class='t-g-typeturf'>Turf Type : &nbsp; " ${resp.turf_Type}"</div> <br> <div class='t-g-sizeturf'>Turf Size : &nbsp; " ${resp.turf_Size}"</div> <br> <div class='t-g-soilturf'>Soil Type" ${resp.soil_Type}"</div> <br> <div class='t-g-usageturf'>Turf Usage : &nbsp; " ${resp.turf_Usage}"</div> <br> <div class='t-g-turfamount'><span class='span'>Amount P/H : </span>${resp.turf_Amount}</div><br> <img src=${BASE_URL+resp.Image2path} class='t-g-photosturf2'> <br> <img src=${BASE_URL+resp.Image3path} class='t-g-photosturf3'><br> <img src=${BASE_URL+resp.Image4path} class='t-g-photosturf4'><br> <br> <div class='t-g-rulesturf'>Rules & Regulations : &nbsp;  <br> " ${resp.rules_Regulations} "</div><br><div class='placeorder' onclick='Book_now(event)'>Book Now</div>`;
        turf_div.appendChild(newDiv1)

    })
    .catch(error=>{
        console.log(error.message  );
        
    })
   })



   