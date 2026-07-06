const SERVER_URL = "http://localhost:8080";

function login() {


  // login
  let username = document.getElementById('user-name').value;
  let password = document.getElementById('password').value;


  //mainpage
  let maindiv = document.getElementById('maindiv');


  if (username == 'leodas' && password == 'rolex') {
    maindiv.style.opacity = '1';
    maindiv.style.zIndex = "1";



  }
  else {
    alert('You are Not a ADMIN');

  }


}
//logout
function logout() {
  let maindiv = document.getElementById('maindiv');

  document.getElementById('user-name').value = "";
  document.getElementById('password').value = "";


  maindiv.style.opacity = '0';
  maindiv.style.zIndex = "-1";

}





window.onload = () => {
  const maindiv = document.getElementById('maindiv');
  fetch(`${SERVER_URL}/add_turf`, {
    method: "GET",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
  })

    .then(response => {
      if (!response.ok) {
        throw new Error("Some thing wrong please try later")
      }
      return response.json();
    })
    .then(data => {
      for (i = 0; i < data.content.length; i++) {
        const resp = data.content[i];
        
            BASE_URL = "http://localhost:8080";
            console.log(BASE_URL);
            console.log(BASE_URL+resp.Image4path);
        if(resp.is_active=="ACTIVE"){
        

        const newDiv = document.createElement('div');
        newDiv.className = 't-g-main-block';

        const newDiv1 = document.createElement('div');
        newDiv1.className = 't-g-main-block1';

        newDiv1.innerHTML =
          ` <img src=${BASE_URL+resp.Image1path} class='photosturf1'><div class='right-arrow' onclick='increaseblock(event)'></div> <div class='t-g-Nameturf'><span class='span'>Name :&nbsp; </span> ${resp.name} </div> <br> <div class='t-g-turf_id'> ${resp.id} </div> <br><div class='t-g-Locationturf'>${resp.location}</div> <br> <div class='t-g-MainAddress'>Address : &nbsp; <br>" ${resp.address}"</div> <br> <div class='t-g-Contactturf'><span class='span'>Contact : &nbsp; </span>" ${resp.contact}"</div> <br> <div class='t-g-typeturf'>Turf Type : &nbsp; " ${resp.turf_Type}"</div> <br> <div class='t-g-sizeturf'>Turf Size : &nbsp; " ${resp.turf_Size}"</div> <br> <div class='t-g-soilturf'>Soil Type" ${resp.soil_Type}"</div> <br> <div class='t-g-usageturf'>Turf Usage : &nbsp; " ${resp.turf_Usage}"</div> <br> <div class='t-g-turfamount'><span class='span'>Amount P/H : </span>${resp.turf_Amount}</div><br> <img src=${BASE_URL+resp.Image2path} class='t-g-photosturf2'> <br> <img src=${BASE_URL+resp.Image3path} class='t-g-photosturf3'><br> <img src=${BASE_URL+resp.Image4path} class='t-g-photosturf4'><br> <br> <div class='t-g-rulesturf'>Rules & Regulations : &nbsp;  <br> " ${resp.rules_Regulations} "</div><br>`;
        const newDiv2 = document.createElement('div');
        newDiv2.className = 't-g-main-block2';
        newDiv2.innerHTML = " <div class='add' onclick='insert(event)'>ADD NOW</div><div class='remove' onclick='remove(event)'>Delete</div>  "

        newDiv.appendChild(newDiv1);
        newDiv.appendChild(newDiv2);
        maindiv.appendChild(newDiv);

      }}

    })
};



// increasing block size

let cc = 0;
function increaseblock(event) {
  cc++;
  if (cc % 2 == 1) {
    event.target.parentElement.parentElement.style.width = '1485px';
    event.target.parentElement.parentElement.style.height = '750px';
    event.target.parentElement.parentElement.style.position = 'absolute';
    event.target.parentElement.parentElement.style.top = '0';
    event.target.parentElement.parentElement.style.left = '0';
    event.target.parentElement.parentElement.style.zIndex = '1';
    event.target.style.transform = 'rotate(-135deg)';
    event.target.parentElement.parentElement.children[1].style.opacity = '0';

  }
  else {

    event.target.parentElement.parentElement.style.width = '300px';
    event.target.parentElement.parentElement.style.height = '300px';
    event.target.parentElement.parentElement.style.position = 'relative';
    event.target.style.transform = 'rotate(45deg)';

    let opcity = event.target.parentElement.parentElement.children[1];
    if (opcity) {
      setTimeout(() => {
        opcity.style.opacity = '1';
      }, 2000);
    }
  }

}




//remove the div

function remove(event) {
  event.target.parentElement.parentElement.remove();
  const id=event.target.parentElement.parentElement.children[0].children[4].textContent;
  

  fetch(`${SERVER_URL}/delete_selected_turf${id}`,{
    method:"PUT",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
  })
  .then(response=>response.text())
  .then(data=>{
    alert(data)
  })
  .catch(err=>console.log(err))

 }

// add to the turf gallery

function insert(event) {
    
  
  const id=event.target.parentElement.parentElement.children[0].children[4].textContent;

  fetch(`${SERVER_URL}/add_selected_turf${id}`, {
    method:"PUt",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
    
  })
  .then(response=>response.text())
  .then(data=>{
    alert(data)
  })
  .catch(error=>error.text);

}