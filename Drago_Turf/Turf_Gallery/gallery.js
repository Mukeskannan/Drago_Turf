
document.addEventListener("DOMContentLoaded", function() {
  var username = localStorage.getItem("tname");
  var useremail = localStorage.getItem("temail");

  if (username && useremail) {
      console.log("Username:", username);
      console.log("User Email:", useremail);

     
  } else {
      console.log("No data found in localStorage.");
  }
});
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



const channel1 = new BroadcastChannel('admintoturfgallery');

// Load data from localStorage when the page loads
window.onload = () => {
  const storedData = localStorage.getItem('galleryData');
  if (storedData) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = storedData;
  }
};

// Listen for messages from the admin page
channel1.onmessage = (event) => {
  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML += event.data; // Append new data to the gallery

  // Save updated content to localStorage
  localStorage.setItem('galleryData', galleryContainer.innerHTML);
};


// increasing block size

let t_g_main_block= document.querySelectorAll('.t-g-main-block');
let cc=0;
function increaseblock(event){
  cc++;
  if(cc%2==1){
   
    event.target.parentElement.style.width='1485px';
    event.target.parentElement.style.height='750px';
    event.target.parentElement.style.position='absolute';
    event.target.parentElement.style.top='0';
    event.target.parentElement.style.left='0';
    event.target.parentElement.style.zIndex='4';
    event.target.style.transform='rotate(-135deg)';
    event.target.parentElement.children[22].style.opacity='1';
    event.target.parentElement.children[24].style.opacity='1';
    event.target.parentElement.children[20].style.opacity='1';


  }
 else{
  event.target.parentElement.style.width='300px';
  event.target.parentElement.style.height='300px';
  event.target.parentElement.style.position='relative';
  event.target.style.transform='rotate(45deg)';
  event.target.parentElement.children[22].style.opacity='0';
    event.target.parentElement.children[24].style.opacity='0';
    event.target.parentElement.children[20].style.opacity='0';
  
}}





function Book_now(event) {
  
    var username = localStorage.getItem("tname");
    var useremail = localStorage.getItem("temail");
  
    if (username && useremail) {
        console.log("Username:", username);
        console.log("User Email:", useremail);
  
       
    } else {
        console.log("No data found in localStorage.");
    }
 

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

    const inputElement = document.createElement('div');
    inputElement.name="customerusername"
    inputElement.className = 'customerName';
    inputElement.textContent=username;
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
    
    // Get username from localStorage
var username = localStorage.getItem("tname");

if (username) {
    fetch("http://localhost/My%20Project/Turf/get_reward_points.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ customerusername: username })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            rewardElement.textContent = data.point; // Update reward points
        } else {
            rewardElement.textContent = "0"; // If no points found, set to 0
        }
    })
    .catch(error => console.error("Error fetching reward points:", error));
} else {
    rewardElement.textContent = "0";
}


   
    

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
const tname=event.target.parentElement.children[2].textContent;
turfname.textContent=tname;
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

 
  final_amount=final_result*amount1;
  console.log(final_amount);
  
 var  qrcode=document.createElement('div')
  qrcode.className='qrcode';
  
  document.querySelectorAll('.qrcode').forEach(qr => qr.innerHTML = "");

    // Google Pay UPI URL (Replace with your UPI ID)
    var upiURL = `upi://pay?pa=mukeskannan804-2@oksbi&pn=TurfPayment&mc=&tid=&tr=&tn=Payment&am=${final_amount}&cu=INR`;
     console.log("Amount Function UPI URL: ", upiURL);

    // Generate QR Code
    new QRCode(qrcode, upiURL);

  book_block2.appendChild(qrcode)

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
    sendemail(event);}
  book_block2.appendChild(confirm_button);
  function sendemail(event) {
   
  
    // Customer details
    var customer_name = event.target.parentElement.parentElement.children[0].children[1].textContent;
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

    
  
    var templateParams = {
          customer_email: customer_email,
          to_name:customer_name,
          customer_name:customer_name,
          customer_location:customer_location,
          customer_email:customer_email,
          customer_date:customer_date,
          customer_start_time:customer_start_time,
          customer_end_time:customer_end_time,
          turf_name:turf_name,
          turf_location:turf_location,
          turf_contact:turf_contact,
          turf_totaltime:turf_totaltime,
          turf_ttid:turf_ttid,
          digitalpin:digitalpin
        };

  
        emailjs.send('service_aw68exn', 'template_lt7ncep', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       window.alert("Sent successfully!");
       console.log("log")
       
    })
    var bookingData = {
      customer_name: customer_name,
      customer_location: customer_location,
      customer_email: customer_email,
      customer_date: customer_date,
      customer_start_time: customer_start_time,
      customer_end_time: customer_end_time,
      turf_name: turf_name,
      turf_location: turf_location,
      turf_contact: turf_contact,
      turf_totaltime: turf_totaltime,
      turf_ttid: turf_ttid,
      digitalpin:digitalpin
  };
  // Send data to PHP

  fetch("http://localhost/My%20Project/Turf/store_booking.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(bookingData)
})
.then(response => response.text())  // Get raw text response
.then(text => {
    console.log("Raw Response:", text); // Debug response
    try {
        const data = JSON.parse(text); // Parse JSON
        if (data.message) {
            alert("Booking Confirmed!");
        } else {
            alert("Error: " + data.error);
        }
    } catch (e) {
        console.error("Invalid JSON response", text);
    }
})
.catch(error => console.error("Fetch Error:", error));
  }

    
    
  

  confirm_button.addEventListener('click',()=>{
    book_block.style.opacity='0';
    book_block.style.zIndex='-1'
  })

  

  //reward point

console.log('mm');
confirm_button.addEventListener("click", function () {
  console.log('mm');
  
    let username= document.querySelector('.customerName').textContent;

    if (username.trim() === "") {
        alert("Please enter your profile name.");
        return;
    }

    let formData = new FormData();
    formData.append("customerusername", username);
    alert (username)

    fetch("update_points.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show response message
    })
    .catch(error => console.error("Error:", error));
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

  // Send AJAX request to check & update reward points
  fetch("update_point.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username })
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          console.log("Points updated successfully! Remaining Points:", data.remainingPoints);
          alert(`Points deducted successfully! Your remaining points: ${data.remainingPoints}`);
      } else {
          console.log("Error:", data.message);
          alert(data.message);
      }
  })
  .catch(error => console.error("Error:", error));


      
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


