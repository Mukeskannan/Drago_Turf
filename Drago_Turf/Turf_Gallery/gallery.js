const locationInput = document.getElementById('Locationturf');
const locationList = document.getElementById('location-list');

// Sample data (replace with your actual data)
const locations = [
    "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", 
    "Erode", "Kallakurichi", "Kanchipuram", "Kanniyakumari", "Karur", "Krishnagiri", 
    "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", 
    "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai", "Tenkasi", 
    "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupattur", 
    "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar", 
    "Kanyakumari", "Chengalpattu",
    
    // Andhra Pradesh
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", 
    "Srikakulam", "Visakhapatnam", "West Godavari", "YSR Kadapa",
    
    // Bihar
    "Araria", "Aurangabad", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "Gaya", 
    "Hazaribagh", "Katihar", "Khagaria", "Kishanganj", "Madhubani", "Munger", "Nalanda", 
    "Purnia", "Rohtas", "Saran", "Siwan", "Patna", "Muzaffarpur", "Vaishali", "Begusarai", 
    
    // Karnataka
    "Bengaluru Urban", "Ballari", "Belagavi", "Chikkamagaluru", "Dakshina Kannada", 
    "Hassan", "Hubballi", "Mysuru", "Shivamogga", "Tumakuru", "Udupi", "Kodagu",
    
    // Kerala
    "Alappuzha", "Ernakulam", "Kollam", "Kottayam", "Kozhikode", "Malappuram", 
    "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad",
    
    // Maharashtra
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Beed", "Buldhana", 
    "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", 
    "Kolhapur", "Latur", "Mumbai", "Nanded", "Nagpur", "Nandurbar", "Nashik", "Osmanabad", 
    "Palghar", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", 
    "Thane", "Wardha", "Yavatmal",
    
    // Rajasthan
    "Ajmer", "Alwar", "Bikaner", "Bundi", "Chittorgarh", "Dausa", "Dungarpur", "Ganganagar", 
    "Jaisalmer", "Jaipur", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", 
    "Pali", "Rajsamand", "Sawai Madhopur", "Sikar", "Sri Ganganagar", "Tonk", "Udaipur",
    
    // Uttar Pradesh
    "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Auraiya", "Azamgarh", "Barabanki", 
    "Basti", "Bareilly", "Bijnor", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", 
    "Etah", "Etawah", "Faizabad", "Firozabad", "Gautam Buddh Nagar", "Ghaziabad", "Gonda", 
    "Hapur", "Hardoi", "Hathras", "Jaunpur", "Kanpur", "Kushinagar", "Lakhimpur Kheri", 
    "Lucknow", "Mathura", "Meerut", "Moradabad", "Muzaffarnagar", "Raebareli", "Rampur", 
    "Shahjahanpur", "Sultanpur", "Unnao", "Varanasi",
    
    // West Bengal
    "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Howrah", "Jalpaiguri", 
    "Kalimpong", "Kolkata", "Maldah", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", 
    "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"
];

locationInput.addEventListener('input', (e) => {
  const userInput = e.target.value.trim().toLowerCase();
  const filteredLocations = locations.filter((location) => location.toLowerCase().startsWith(userInput));

  if (userInput === '') {
    locationList.style.display = 'none';
   } else {
    locationList.style.display = 'block';
    locationList.innerHTML = '';
    filteredLocations.forEach((location) => {
      const li = document.createElement('li');
      li.textContent = location;
      li.addEventListener('click', () => {
        locationInput.value = location;
        locationList.style.display = 'none';
    });
      locationList.appendChild(li);
    });
      }
      });

 

//final adding

  const SERVER_URL = "http://localhost:8080";
window.onload=()=>{
  console.log("hi");
  const maindiv=document.getElementById("gallery-container");
  fetch(`${SERVER_URL}/add_turf`,{
    method:"GET",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
  })

  .then(response=>{
      if (!response.ok) {
        throw new Error("Some thing wrong please try later")
      }
      return response.json();
    })
    .then(data=>{
           for (i = 0; i < data.content.length; i++) {
            const resp = data.content[i];
            console.log(resp);
              console.log("hi");
        
            BASE_URL="http://localhost:8080"
            console.log(BASE_URL);
            
            
            if(resp.is_active=="YES"){
        
        const newDiv = document.createElement('div');
        newDiv.className = 't-g-main-block';

        const newDiv1 = document.createElement('div');
        newDiv1.className = 't-g-main-block1';
        console.log("hi");
        
        console.log(BASE_URL+resp.Image1path);
        
        newDiv1.innerHTML =
          ` <img src=${BASE_URL+resp.Image1path} class='photosturf1'><div class='right-arrow' onclick='increaseblock(event)'></div> <div class='t-g-Nameturf'><span class='span'>Name :&nbsp; </span> ${resp.name} </div> <br> <div class='t-g-Locationturf'>${resp.location}</div> <br> <div class='t-g-MainAddress'>Address : &nbsp; <br>" ${resp.address}"</div> <br> <div class='t-g-Contactturf'><span class='span'>Contact : &nbsp; </span>" ${resp.contact}"</div> <br> <div class='t-g-typeturf'>Turf Type : &nbsp; " ${resp.turf_Type}"</div> <br> <div class='t-g-sizeturf'>Turf Size : &nbsp; " ${resp.turf_Size}"</div> <br> <div class='t-g-soilturf'>Soil Type" ${resp.soil_Type}"</div> <br> <div class='t-g-usageturf'>Turf Usage : &nbsp; " ${resp.turf_Usage}"</div> <br> <div class='t-g-turfamount'><span class='span'>Amount P/H : </span>${resp.turf_Amount}</div><br> <img src=${BASE_URL+resp.Image2path} class='t-g-photosturf2'> <br> <img src=${BASE_URL+resp.Image3path} class='t-g-photosturf3'><br> <img src=${BASE_URL+resp.Image4path} class='t-g-photosturf4'><br> <br> <div class='t-g-rulesturf'>Rules & Regulations : &nbsp;  <br> " ${resp.rules_Regulations} "</div><br><div class='placeorder' onclick='Book_now(event)'>Book Now</div>`;
       
        newDiv.appendChild(newDiv1);
        
        maindiv.appendChild(newDiv);

      }
    }})
  }


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
    event.target.parentElement.parentElement.style.zIndex = '11';
    event.target.style.transform = 'rotate(-135deg)';

    event.target.parentElement.children[20].style.opacity='1'
    event.target.parentElement.children[22].style.opacity='1'
    event.target.parentElement.children[24].style.opacity='1'
   
    var turfName=event.target.parentElement.children[2];
    turfName.classList.add("opened")
    
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




function Book_now(event) {
  
  
 

    const galleryContainer = document.getElementById('gallery-container');
    let book_block = document.createElement('div');
    book_block.style.zIndex = '20';
    book_block.className = 'book-block-main';

    let book_block1 = document.createElement('div');
    book_block1.className = 'book-block-main1';

    book_block.appendChild(book_block1);

    // Creating name input
    let nameLabel = document.createElement("label");
    nameLabel.className = 'namelable';
    nameLabel.textContent = "Customer Name: ";
    nameLabel.htmlFor = "customerName";
    book_block1.appendChild(nameLabel);

    const inputElement = document.createElement('input');
    inputElement.name="customerusername"
    inputElement.className = 'customerName';
    inputElement.value= localStorage.getItem("userName");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Enter your Name here');
    book_block1.appendChild(inputElement);
  
  //creating location input
  let locationLabel = document.createElement("label");
  locationLabel.className='locationlable';
  locationLabel.textContent = "Customer Location: ";
  locationLabel.htmlFor = "customerLocation";
  book_block1.appendChild(locationLabel);
  const locationElement = document.createElement('input');
  locationElement.className='customerLocation'
  locationElement.setAttribute('type', 'text');
  locationElement.setAttribute('placeholder', 'Enter your Location here');
  book_block1.appendChild(locationElement);



  //creating date input
  let dateLabel = document.createElement("label");
  dateLabel.className='datelable';
  dateLabel.textContent = "Choose Your Date: ";
  dateLabel.htmlFor = "customerDate";
  book_block1.appendChild(dateLabel);
  const dateElement=document.createElement('input');
  dateElement.className='customerDate'
  dateElement.setAttribute('type','date');
  dateElement.setAttribute('placeholder','Enter your Date here')
  book_block1.appendChild(dateElement);

  //create time input
  
 let timeElement=document.createElement('div');
 timeElement.className='time-block';
  // Create a label for the starting time
  let startLabel = document.createElement("label");
  startLabel.className='starttimelable';
  startLabel.textContent = "Starting Time: ";
  startLabel.htmlFor = "startTime";
  
  // Create the starting time input
  let startTimeInput = document.createElement("input");
  startTimeInput.className='starttimeinput';
  startTimeInput.type = "time";
  startTimeInput.id = "startTime";
  startTimeInput.step = 3600; // Step is in seconds, 3600 = 1 hour
  
  // Create a label for the ending time
  let endLabel = document.createElement("label");
  endLabel.className='endtimelable';
  endLabel.textContent = "Ending Time: ";
  endLabel.htmlFor = "endTime";
  
  // Create the ending time input
  let endTimeInput = document.createElement("input");
  endTimeInput.className='endtimeinput';
  endTimeInput.type = "time";
  endTimeInput.id = "endTime";
  endTimeInput.step = 3600; // Restricts selection to whole hours
  
  // Append the labels and inputs to the document body (or a container element)
  timeElement.appendChild(startLabel);
  timeElement.appendChild(startTimeInput);
  timeElement.appendChild(document.createElement("br")); // Line break
  timeElement.appendChild(endLabel);
  timeElement.appendChild(endTimeInput);
  book_block1.appendChild(timeElement);
  
  let saveuserdetails=document.createElement('div');
  saveuserdetails.className='saveuserdetails';
  saveuserdetails.textContent="Save";
  saveuserdetails.onclick=function (event){
    save(event);
  };
  book_block1.appendChild(saveuserdetails)

  
    //creating user email input
    let emaillabel = document.createElement("label");
    emaillabel.className='emaillable';
    emaillabel.textContent = "Customer Email: ";
    emaillabel.htmlFor = "customeremail";
    book_block1.appendChild(emaillabel);
    const emailElement = document.createElement('input');
    emailElement.className='customeremail'
    emailElement.setAttribute('type', 'email');
    emailElement.setAttribute('placeholder', 'Enter your Email here');
    book_block1.appendChild(emailElement);


let rewardlabel = document.createElement("label");
    rewardlabel.className='rewardlable';
    rewardlabel.textContent = "Your Reward Points ";
    rewardlabel.htmlFor = "customeremail";
    book_block1.appendChild(rewardlabel);
    const rewardElement = document.createElement('div');
    rewardElement.className='customerrewardpoints'
   
    rewardElement.textContent="";
    book_block1.appendChild(rewardElement);
    

   
    

  function save(event){
    
    
   let change_opacity= event.target.parentElement.parentElement.children[1];
   change_opacity.style.opacity='1';
    
    let start=event.target.parentElement.children[6].children[1].value;
   
   
    let newstart=parseInt(start.split(':')[0]);

    
    
    let end=event.target.parentElement.children[6].children[4].value;
    
    let newend=parseInt(end.split(':')[0])
   

    var result=newend-newstart;
    console.log(newend);
    console.log(newstart);
    
    
    
    console.log(result);
    var final_result=Math.abs(result)
    
   
    
    let finaltime=event.target.parentElement.parentElement.children[1].children[5];
  
    

    finaltime.textContent="Total Time =" +" "+result+ " " + "Hours";
   
   
  
    var rewardusepoints=document.createElement('div');
    rewardusepoints.className='rewardusepoints';
    rewardusepoints.textContent="Use Reward Points";
   
     book_block2.appendChild(rewardusepoints)

    let userpoints=event.target.parentElement.parentElement.children[1].children[6];
    console.log(userpoints);
    
    let points=event.target.parentElement.children[11];
    console.log(userpoints,points);
    let points1=Number(points.textContent);
    
    
    
    amount(event,final_result)
      rewardusepoints.onclick=function(event){
      use(event,final_result);
    };

    
   
  if(points1>=100){
    userpoints.style.opacity='1';
    
  }
    else{
      console.log("no");
      
    }
   
  }


// edit turf owners detials

let book_block2=document.createElement('div');
  book_block2.className='book-block-main2';
turfstart=document.createElement('h2');
turfstart.textContent='Turf Details';
turfstart.className='turf-start'
book_block2.appendChild(turfstart)

let turfname=document.createElement('div');
turfname.className='turf-name';
const tname = event.target.parentElement.querySelector('.t-g-Nameturf').textContent
    .replace("Name :", "")
    .trim();turfname.textContent=tname;
book_block2.appendChild(turfname);

let turflocation=document.createElement('div');
turflocation.className='turf-location';
const tlocation=event.target.parentElement.children[4].textContent;


turflocation.textContent=tlocation;
book_block2.appendChild(turflocation);

let turfcontact=document.createElement('div');
turfcontact.className='turf-contact';
const tcontact=event.target.parentElement.children[8].textContent;
turfcontact.textContent=tcontact;
book_block2.appendChild(turfcontact);

let turfamount=document.createElement('div');
turfamount.className='turf-amount';
const tamount=event.target.parentElement.children[18].textContent;
turfamount.textContent=tamount;
book_block2.appendChild(turfamount);

let totaltime=document.createElement('div');
totaltime.className='total-time';
totaltime.textContent="Total Time=";
book_block2.appendChild(totaltime);




function amount(event,final_result){

  
  let selectamount1=turfamount.textContent;
console.log(selectamount1);
let selectedamount2=selectamount1.split(':');
let amount1=selectedamount2[1].trim().replace('"','');
console.log(amount1)

final_amount = final_result * amount1;
console.log(final_amount);

var qrcode = document.createElement('div');
qrcode.className = 'qrcode';

// clear old QR codes
document.querySelectorAll('.qrcode').forEach(qr => qr.innerHTML = "");

// UPI URL
var upiURL = `upi://pay?pa=mukeskannan804-2@oksbi&pn=TurfPayment&am=${final_amount}&cu=INR`;
console.log("UPI URL:", upiURL);


QRCode.toCanvas(upiURL, function (err, canvas) {
  if (err) {
    console.error(err);
    return;
  }
  qrcode.appendChild(canvas);
});

book_block2.appendChild(qrcode);

  let transactionidLabel = document.createElement("label");
  transactionidLabel.className='Transaction-Id';
  transactionidLabel.textContent = "Transaction Id: ";
  transactionidLabel.htmlFor = "Transactionid";
  book_block2.appendChild(transactionidLabel);
  const transactionidinputElement = document.createElement('input');
  transactionidinputElement.className='Transactionid'
  transactionidinputElement.setAttribute('type', 'text');
  transactionidinputElement.setAttribute('placeholder', 'Enter your Transaction id Here');
  book_block2.appendChild(transactionidinputElement)

  var confirm_button=document.createElement('div');
  confirm_button.className="confirm-button";
  confirm_button.textContent="CONFIRM"
  confirm_button.onclick=function (event){
    storeDb(event);}
  book_block2.appendChild(confirm_button);
  function storeDb(event) {
   
  
    // Customer details
    var customer_name = event.target.parentElement.parentElement.children[0].children[1].value;
    var customer_location = event.target.parentElement.parentElement.children[0].children[3].value;
    var customer_email = event.target.parentElement.parentElement.children[0].children[9].value;
    var customer_date = event.target.parentElement.parentElement.children[0].children[5].value;
    var customer_start_time = event.target.parentElement.parentElement.children[0].children[6].children[1].value;
    var customer_end_time = event.target.parentElement.parentElement.children[0].children[6].children[4].value;
  
    // Turf details
    var turf_name = event.target.parentElement.parentElement.children[1].children[1].textContent;
    var turf_location = event.target.parentElement.parentElement.children[1].children[2].textContent;
    var turf_contact = event.target.parentElement.parentElement.children[1].children[3].textContent;
    var turf_totaltime = event.target.parentElement.parentElement.children[1].children[5].textContent;
    var turf_ttid = event.target.parentElement.parentElement.children[1].children[8].value;

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var unique_pin = "";
    for (var i = 0; i < 16; i++) {
    unique_pin += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(unique_pin);
  var digitalpin=unique_pin


let amountPerHour = Number(turfamount.textContent.split(':')[1].trim());

let startHour = Number(customer_start_time.split(':')[0]);
let endHour = Number(customer_end_time.split(':')[0]);

let hours = Math.abs(endHour - startHour);
let final_amount = amountPerHour * hours;
console.log("DATE:", customer_date);
if (!customer_date) {
    alert("Please select date");
    return;
}
console.log("CUstomer name is",customer_name);

  fetch("http://localhost:8080/booking", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
   body: JSON.stringify({
    turfName: turf_name,
    customerName: customer_name,
    customerEmail: customer_email,
    customerLocation: customer_location,
    bookingDate: customer_date,
    bookingTime: `${customer_start_time}-${customer_end_time}`,
    amount: final_amount,
    transactionId: turf_ttid,
    status: "BOOKED"
})
})
.then(res => res.json())
.then(data => {
    console.log("Saved to DB:", data);
    alert("Booking saved successfully!");
})
.catch(err => {
    console.error("Error saving booking:", err);
});
  }

  confirm_button.addEventListener('click',()=>{
    book_block.style.opacity='0';
    book_block.style.zIndex='-1'
  })

  

  //reward point

console.log('mm');
confirm_button.addEventListener("click", function () {
  console.log('mm');
  
    let username= document.querySelector('.customerName').value;

    if (username.trim() === "") {
        alert("Please enter your profile name.");
        return;
    }

    let formData = new FormData();
    formData.append("customerusername", username);

});


}


function use(event,final_result){
  let selectamount1=turfamount.textContent;
  console.log(selectamount1);
  let selectedamount2=selectamount1.split(':');
  let amount1=selectedamount2[1].trim().replace('"','');
  console.log(amount1)
  
   
    final_amount=final_result*amount1;
    console.log(final_amount);
    final_amount1=final_amount-100;
    console.log(final_amount1);
    
    var qrcode=document.createElement('div')
    qrcode.className='qrcode1';
    
    document.querySelectorAll('.qrcode1').forEach(qr => qr.innerHTML = "");
  
      // Google Pay UPI URL (Replace with your UPI ID)
      var upiURL = `upi://pay?pa=mukeskannan804-2@oksbi&pn=TurfPayment&mc=&tid=&tr=&tn=Payment&am=${final_amount1}&cu=INR`;
       console.log("Amount Function UPI URL: ", upiURL);
  
      // Generate QR Code
      new QRCode(qrcode, upiURL);

     
      
  
    book_block2.appendChild(qrcode)
    if (!username) {
      console.log("Username not found on the page!");
      return;
  }
      
    }




book_block.appendChild(book_block2);

galleryContainer.appendChild(book_block)


}

//search bar
const locationInput1 = document.getElementById('Locationturf');
const searchButton = document.getElementById('search');

locationInput1.addEventListener('focus', () => {
    
    const blocks = document.querySelectorAll('.t-g-main-block1');
    
    if (blocks && blocks.length > 0) {
        
        blocks.forEach(block => {
            block.style.opacity = '0'; 
            block.style.position='absolute'; 
        });
    }
});


searchButton.addEventListener('click', () => {
    
    const locationValue = locationInput1.value.trim().toLowerCase(); 


    

    const locationElements = document.querySelectorAll('.t-g-Locationturf');
   
    

    if (locationElements && locationElements.length > 0) {
         
   
        locationElements.forEach(locationElement => {
     
       
            if (locationElement.textContent.trim().toLowerCase() === locationValue) {
               
                const parentBlock = locationElement.closest('.t-g-main-block1');
                if (parentBlock) {
                    parentBlock.style.opacity = '1';
                    parentBlock.style.position='relative';
                    
                }
            }
        });
    }
});


