var canclebtn=document.getElementById('cancle-btn');
canclebtn.addEventListener("click",()=>{
    ppup.style.opacity='1';
    ppup.style.position = 'relative';
})

var goback=document.querySelector('.goback');
var ppup=document.querySelector('.ppup');
goback.addEventListener('click',()=>{
    
    ppup.style.opacity='0';
    ppup.style.position = 'absolute';
   
    
})
var confirm1=document.querySelector('.confirm');

confirm1.addEventListener('click',()=>{
    ppup.style.opacity='0';
    ppup.style.position = 'absolute';

    var customer_name=document.getElementById('customer_name').value;
    var customer_location=document.getElementById('customer_location').value;
    var customer_email=document.getElementById('customer_email').value;
    var customer_date=document.getElementById('customer_date').value;
    var turf_name=document.getElementById('turf_name').value;
    var turf_location=document.getElementById('turf_location').value;
    var turf_ttid=document.getElementById('turf_ttid').value;
    var digitalpin=document.getElementById('digitalpin').value;





var templateParams = {
    customer_name:customer_name,
    customer_location:customer_location,
    customer_email:customer_email,
    customer_date:customer_date,
    turf_name:turf_name,
    turf_location:turf_location,
    turf_ttid:turf_ttid,
    digitalpin:digitalpin
    
  };
  emailjs.send('service_aw68exn', 'template_a5kxkcc', templateParams) // Use the correct template ID
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      window.alert("Sent successfully!");
  })
  .catch(function(error) {
      console.error('FAILED...', error);
  });
  
     
  })
