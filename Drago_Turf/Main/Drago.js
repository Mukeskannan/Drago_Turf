  const SERVER_URL = "http://localhost:8080";
window.onload=()=>{
   
     setTimeout(function() {
          window.scrollTo(0, 0);
        }, 100);
    
    fetch(`${SERVER_URL}/Drago/Auth/api/check`,{
        method:"GET",
         headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
    })

    const token = localStorage.getItem("token");

fetch("http://localhost:8080/Drago/Auth/api/me", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + token
    }
})
.then(res => res.json())
.then(data => {
    document.getElementById("tt1").innerText = data.userName;
            localStorage.setItem("userName", data.userName);

    document.getElementById("tt2").innerText = data.location;
    document.getElementById("tt3").innerText = data.mobileNumber;
    document.getElementById("tt4").innerText = data.email;
    document.getElementById("tt5").innerText = data.age;
});
}

      


// three line properties
let home=document.getElementById("home");

let nave=document.getElementById('nave');

let logo=document.getElementById('logo');
let logo_text3=document.getElementById('logo-text3')
let click_count=0;
home.addEventListener('click' ,function (){
    click_count=click_count+1;
    if(click_count%2==1){
        console.log(click_count);
        

    nave.classList.add('hovered');
    logo.classList.add('logohovered');
    logo_text3.classList.add('logo3');
    
    if(profile_click_count%2==1){
        profile_click_count=profile_click_count+1;
        profile_info.classList.remove('profileinfo');
    }
  
    }
    
    else{
    nave.classList.remove('hovered');
    logo.classList.remove('logohovered');
    logo_text3.classList.remove('logo3');
    }
});


let profile=document.getElementById('profile');

let profile_info=document.getElementById('profile-info');
profile_click_count=0;
profile.addEventListener('click',function(){
    profile_click_count=profile_click_count+1;
    if(profile_click_count%2==1){
        
        profile_info.classList.add('profileinfo');

        if(click_count%2==1){
            nave.classList.remove('hovered');
            logo.classList.remove('logohovered');
            logo_text3.classList.remove('logo3');
            click_count=click_count+1;
        }
      
    }
    else{
        profile_info.classList.remove('profileinfo');
    }
})



let nav2=document.getElementById('nav2');
let service=document.getElementById('our-services');
let nav3=document.getElementById('nav3');
let contact=document.getElementById('our-contact');
let nav4=document.getElementById('nav4');
let about_us=document.getElementById('our-aboutus');
let total_info=document.getElementById("total-info");

nav2.addEventListener('mouseover',function(){
    total_info.classList.add('total_info')
    service.classList.add('our_service')
});
nav2.addEventListener('mouseout',function(){
    service.classList.remove('our_service')
    total_info.classList.remove('total_info')
});
nav3.addEventListener('mouseover',function(){
    total_info.classList.add('total_info')
    contact.classList.add('our_contact')
});
nav3.addEventListener('mouseout',function(){
    contact.classList.remove('our_contact')
    total_info.classList.remove('total_info')
});
nav4.addEventListener('mouseover',function(){
    total_info.classList.add('total_info')
    about_us.classList.add('our_aboutus')
});
nav4.addEventListener('mouseout',function(){
    about_us.classList.remove('our_aboutus')
    total_info.classList.remove('total_info')
});




//turf owner
let turf_owner=document.getElementById("registration");
let Register_Your_Turf =document.getElementById('nave-list1');
let turf_owner_background=document.getElementById('turf-owner-background');

Register_Your_Turf.addEventListener('click',function(){
    turf_owner_background.classList.add('background');

    setTimeout(() => {
        turf_owner_background.classList.remove('background');
    }, 1500);
})
turf_owner.addEventListener('mouseover',()=>{
    turf_owner_background.classList.remove('background');
})
//cancle-booking
let booking_status_main=document.getElementById('cancel-booking')
let  Booking_Status=document.getElementById('nave-list3');
let cancel_booking_background=document.getElementById('cancel-booking-background');

Booking_Status.addEventListener('click',function(){
    cancel_booking_background.classList.add('background');

    setTimeout(() => {
        cancel_booking_background.classList.remove('background');
    }, 1500);
})

booking_status_main.addEventListener('mouseover',()=>{
    cancel_booking_background.classList.remove('background');
})



//history
let history_main=document.getElementById("history")
let history =document.getElementById('nave-list6');
let history_background=document.getElementById('history-background');

history .addEventListener('click',function(){
    history_background.classList.add('background');

    setTimeout(() => {
        history_background.classList.remove('background');
    }, 1500);
})

history_main.addEventListener('mouseover',()=>{
    history_background.classList.remove('background');
})

//turf collection paragraph

let arrow_mark2=document.getElementById("arrow-mark2");
let t_c_p=document.getElementById('t-c-p');


arrow_mark2.addEventListener('mouseover',()=>{
  t_c_p.classList.add("opcity");
})

arrow_mark2.addEventListener('mouseout',()=>{
    setInterval(() => {
        t_c_p.classList.remove("opcity");
    }, 1500);
  
  
})


// document loaded
let span1=document.getElementById("intro-sp1");
let span2=document.getElementById("intro-sp2");
let span3=document.getElementById("intro-sp3");
let intro=document.getElementById("intro");
let t_v=document.getElementById("turf-visit");


document.addEventListener("DOMContentLoaded", ()=>{
    intro.classList.add("loaded");
    span1.classList.add("loaded1");

    span2.classList.add("loaded2");
    span3.classList.add("loaded3");
    setInterval(()=>{
        t_v.classList.add("shake");
    },3000)
    
    
        
    })



