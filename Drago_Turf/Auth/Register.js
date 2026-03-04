const SERVER_URL = "http://localhost:8080";
const locationInput = document.getElementById('tuserlocation');
const locationList = document.getElementById('location-list');

// Sample data (replace with your actual data)
const locations = [
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivagangai",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupattur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "Kanyakumari",
    "Chengalpattu"
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

let Register=document.getElementById('sumbit-1');

Register.addEventListener('click',function(e){
  e.preventDefault();
  let tusername=document.getElementById('tusername').value;
  let tuseremail =document.getElementById('tuseremail').value;
  let tusernumber=parseInt(document.getElementById('tusernumber').value);
  let tuserlocation =document.getElementById('tuserlocation').value;
  let tuserpassword =document.getElementById('tuserpassword').value;
  let age=parseInt(document.getElementById("age").value);

  console.log(typeof(tusername),typeof(tusernumber),typeof(tuserpassword),typeof(tuseremail),typeof(tuserlocation),typeof(age))

  fetch(`${SERVER_URL}/Drago/Auth/Signup`,{
    method:"POST",
    headers:{"Content-Type": "application/json"},
   body: JSON.stringify({
  userName: tusername,
  mobileNumber: tusernumber,
  password: tuserpassword,
  email: tuseremail,
  location: tuserlocation,
  age: age
})

  })
  .then(response=>{
    if(response.ok){
      alert("Register Successfully");
      window.location.href="Login.html";
    }
    else{
       return response.json().then(data=>{throw new Error(data.message || "Registration failed")})
    }
  })
  .catch(error=>{
    alert(error.message)
  })
})
