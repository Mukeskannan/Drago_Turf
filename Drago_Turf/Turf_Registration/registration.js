
let mainbtn=document.getElementById('mainbtn');
let infoboxbtn=document.getElementById('infoboxbtn');
let infoboxbtn1=document.getElementById('infoboxbtn1');
let color_grad=document.getElementById('color-grad');
let infobox=document.getElementById('infobox');

mainbtn.addEventListener('click',function(){
    mainbtn.textContent='ADDING...!';
    mainbtn.classList.add('blink');
    infobox.classList.add('adding');
    setTimeout(() => {
      color_grad.classList.add('adding');
    }, 1000);
    
});
infoboxbtn.addEventListener('click',function(){
  
  mainbtn.textContent='ADDED!';
  color_grad.classList.remove('adding');

  setInterval(() => {
    mainbtn.textContent='ADD';
  }, 3000);
})

infoboxbtn1.addEventListener('click',function(){
  mainbtn.textContent='ADD';
  mainbtn.classList.remove('blink');
  infobox.classList.remove('adding'); 
  color_grad.classList.remove('adding');
})



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






//turf photoes


const imagePreview = document.getElementById('image-preview');
const fileInput = document.getElementById('photosturf');

imagePreview.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const selectedFiles = fileInput.files;
  const reader = new FileReader();

  reader.onload = () => {
    imagePreview.src = reader.result;
  };

  reader.readAsDataURL(selectedFiles[0]);
});


//turf photoes1


const imagePreview1 = document.getElementById('image-preview1');
const fileInput1 = document.getElementById('photosturf1');

imagePreview1.addEventListener('click', () => {
  fileInput1.click();
});

fileInput1.addEventListener('change', () => {
  const selectedFiles1 = fileInput1.files;
  const reader1 = new FileReader();

  reader1.onload = () => {
    imagePreview1.src = reader1.result;
  };

  reader1.readAsDataURL(selectedFiles1[0]);
});
// turf photoes2


const imagePreview2 = document.getElementById('image-preview2');
const fileInput2 = document.getElementById('photosturf2');

imagePreview2.addEventListener('click', () => {
  fileInput2.click();
});

fileInput2.addEventListener('change', () => {
  const selectedFiles2 = fileInput2.files;
  const reader2 = new FileReader();

  reader2.onload = () => {
    imagePreview2.src = reader2.result;
  };

  reader2.readAsDataURL(selectedFiles2[0]);
});

//turf photoes3


const imagePreview3 = document.getElementById('image-preview3');
const fileInput3 = document.getElementById('photosturf3');

imagePreview3.addEventListener('click', () => {
  fileInput3.click();
});

fileInput3.addEventListener('change', () => {
  const selectedFiles3 = fileInput3.files;
  const reader3 = new FileReader();

  reader3.onload = () => {
    imagePreview3.src = reader3.result;
  };

  reader3.readAsDataURL(selectedFiles3[0]);
});

const inputFields = document.querySelectorAll('input, textarea, select');
const submitBtn = document.getElementById('infoboxbtn');

inputFields.forEach((field) => {
  field.addEventListener('input', () => {
    const allFieldsFilled = Array.from(inputFields).every((field) => {
      if (field.type === 'file') {
        return field.files.length > 0;
      } else if (field.tagName === 'SELECT') {
        return field.value !== '';
      } else if (field.tagName === 'TEXTAREA') {
        return field.value.trim() !== '';
      } else {
        return field.value.trim() !== '';
      }
    });
    submitBtn.disabled = !allFieldsFilled;
  });
});


function checkForm() {
  const allFieldsFilled = Array.from(inputFields).every((field) => {
    if (field.type === 'file') {
      return field.files.length > 0;
    } else if (field.tagName === 'SELECT') {
      return field.value !== '';
    } else if (field.tagName === 'TEXTAREA') {
      return field.value.trim() !== '';
    } else {
      return field.value.trim() !== '';
    }
  });
  submitBtn.disabled = !allFieldsFilled;
}

checkForm();



let home1=document.getElementById("home1");
let t_o_details=document.getElementById("t-o-details");
let t_o_clickcount=0;
home1.addEventListener('click',()=>{
  t_o_clickcount++;
  if(t_o_clickcount%2==1){
  t_o_details.classList.add("come-right");
  home1.classList.add("house1");
  }
else{
  t_o_details.classList.remove("come-right");
  home1.classList.remove("house1");
}
})





//final adding

function addEvent(){
  const channel=new BroadcastChannel('turf_channel');
  const Nameturf=document.getElementById("Nameturf").value;
  const Locationturf=document.getElementById("Locationturf").value;
  const MainAddress=document.getElementById("MainAddress").value;
  const Contactturf=document.getElementById("Contactturf").value;
  const typeturf=document.getElementById("typeturf").value;
  const sizeturf=document.getElementById("sizeturf").value;
  const soilturf=document.getElementById("soilturf").value;
  const usageturf=document.getElementById("usageturf").value;
  const turfamount=document.getElementById("turfamount").value
  const rulesturf=document.getElementById("rulesturf").value;
  const photoe1 = document.getElementById('photosturf').files[0];
  const photoe2 = document.getElementById('photosturf1').files[0];
  const photoe3 = document.getElementById('photosturf2').files[0];
  const photoe4 = document.getElementById('photosturf3').files[0];


  if (!photoe1 || !photoe2 || !photoe3 || !photoe4) {
    alert('Please upload all the required images.');
    return;
  }



    const reader1 =new FileReader();
    const reader2 =new FileReader();
    const reader3 =new FileReader();
    const reader4 =new FileReader();

    reader1.onload=function(e1){
      reader2.onload=function(e2){
        reader3.onload=function(e3){
          reader4.onload=function(e4){
 



  
  
  channel.postMessage({
    Nameturf,
    Locationturf,
    MainAddress,
    Contactturf,
    typeturf,
    sizeturf,
    soilturf,
    usageturf,
    turfamount,
    ImageData1:e1.target.result,
    ImageData2:e2.target.result,
    ImageData3:e3.target.result,
    ImageData4:e4.target.result,
    rulesturf});
  };
  reader4.readAsDataURL(photoe4);
};
reader3.readAsDataURL(photoe3);
};
reader2.readAsDataURL(photoe2);
};
reader1.readAsDataURL(photoe1);




};