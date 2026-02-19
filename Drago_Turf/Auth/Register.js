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

let regester=document.getElementById('sumbit-1');

regester.addEventListener('click',function(){
  let tusername=document.getElementById('tusername').value;
  let tuseremail =document.getElementById('tuseremail').value;
  let tusernumber=document.getElementById('tusernumber').value;
  let tuserlocation =document.getElementById('tuserlocation').value;
  let tuserpassword =document.getElementById('tuserpassword').value;
  let age=document.getElementById("age").value;
  const selectedGender = document.querySelector('input[name="tusergender"]:checked');

  console.log(tusername,tuseremail,tusernumber,tuserlocation,tuserpassword,age,selectedGender)
})
