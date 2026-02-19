    function login(){
        
        
    // login
    let username=document.getElementById('user-name').value;
    let password=document.getElementById('password').value;
   

    //mainpage
    let maindiv=document.getElementById('maindiv');


    if(username == 'leodas' && password == 'rolex'){
        maindiv.style.opacity='1';
        maindiv.style.zIndex="1";

       

    }
    else{
        alert('You are Not a ADMIN');
       
    }

   
}
//logout
function logout(){
    let maindiv=document.getElementById('maindiv');
    
document.getElementById('user-name').value = "";
document.getElementById('password').value = "";


    maindiv.style.opacity='0';
        maindiv.style.zIndex="-1";
    
}



//final adding



const channel = new BroadcastChannel('turf_channel');

channel.onmessage = (event) => {
  const {Nameturf,Locationturf,MainAddress,Contactturf,typeturf,sizeturf,soilturf,usageturf,turfamount, ImageData1, ImageData2, ImageData3, ImageData4,rulesturf } = event.data;
  add(Nameturf,Locationturf,MainAddress,Contactturf,typeturf,sizeturf,soilturf,usageturf,turfamount, ImageData1, ImageData2, ImageData3, ImageData4,rulesturf)
  };

function add(Nameturf,Locationturf,MainAddress,Contactturf,typeturf,sizeturf,soilturf,usageturf,turfamount, ImageData1, ImageData2, ImageData3, ImageData4,rulesturf) {
  const maindiv = document.getElementById('maindiv');
  
  const newDiv = document.createElement('div');
  newDiv.className='t-g-main-block';
  
  const newDiv1 = document.createElement('div');
  newDiv1.className='t-g-main-block1';
 
  newDiv1.innerHTML=
  ` <img src=${ImageData1} class='photosturf1'><div class='right-arrow' onclick='increaseblock(event)'></div> <div class='t-g-Nameturf'><span class='span'>Name :&nbsp; </span> ${ Nameturf } </div> <br> <div class='t-g-Locationturf'>${Locationturf }</div> <br> <div class='t-g-MainAddress'>Address : &nbsp; <br>" ${MainAddress }"</div> <br> <div class='t-g-Contactturf'><span class='span'>Contact : &nbsp; </span>" ${Contactturf }"</div> <br> <div class='t-g-typeturf'>Turf Type : &nbsp; " ${typeturf }"</div> <br> <div class='t-g-sizeturf'>Turf Size : &nbsp; " ${sizeturf }"</div> <br> <div class='t-g-soilturf'>Soil Type" ${soilturf }"</div> <br> <div class='t-g-usageturf'>Turf Usage : &nbsp; " ${usageturf }"</div> <br> <div class='t-g-turfamount'><span class='span'>Amount P/H : </span>${turfamount}</div><br> <img src=${ImageData2} class='t-g-photosturf2'> <br> <img src=${ImageData3} class='t-g-photosturf3'><br> <img src=${ImageData4} class='t-g-photosturf4'><br> <br> <div class='t-g-rulesturf'>Rules & Regulations : &nbsp;  <br> " ${rulesturf } "</div><br><div class='placeorder' onclick='Book_now(event)'>Book Now</div>`;
  const  newDiv2 =   document.createElement('div');
  newDiv2.className ='t-g-main-block2';          
  newDiv2.innerHTML=" <div class='add' onclick='insert(event)'>ADD NOW</div><div class='remove' onclick='remove(event)'>Delete</div>  "

  newDiv.appendChild(newDiv1);
  newDiv.appendChild(newDiv2);
  maindiv.appendChild(newDiv);

}

// increasing block size

let cc=0;
function increaseblock(event){
  cc++;
  if(cc%2==1){
    event.target.parentElement.parentElement.style.width='1485px';
    event.target.parentElement.parentElement.style.height='750px';
    event.target.parentElement.parentElement.style.position='absolute';
    event.target.parentElement.parentElement.style.top='0';
    event.target.parentElement.parentElement.style.left='0';
    event.target.parentElement.parentElement.style.zIndex='1';
    event.target.style.transform='rotate(-135deg)';   
    event.target.parentElement.parentElement.children[1].style.opacity='0';
 
  }
 else{

    event.target.parentElement.parentElement.style.width='300px';
    event.target.parentElement.parentElement.style.height='300px';
    event.target.parentElement.parentElement.style.position='relative';
    event.target.style.transform='rotate(45deg)';
    
    let opcity= event.target.parentElement.parentElement.children[1];
   if(opcity){
    setTimeout(()=>{
      opcity.style.opacity='1';
    },2000);
   }
 }
  
}




//remove the div

function remove(event){
    console.log('love');
    event.target.parentElement.parentElement.remove();
    
    
}

// add to the turf gallery

function insert(event){
  let insertdiv=event.target.parentElement.previousElementSibling;
  console.log(insertdiv);

  const channel1=new BroadcastChannel('admintoturfgallery');
  channel1.postMessage(insertdiv.outerHTML);
  
  
}