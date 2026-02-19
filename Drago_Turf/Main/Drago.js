
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


//boxes background animation


//turf owner
let turf_owner=document.getElementById("turf-owner");
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

let  Booking_Status=document.getElementById('nave-list3');
let cancel_booking_background=document.getElementById('cancel-booking-background');

Booking_Status.addEventListener('click',function(){
    cancel_booking_background.classList.add('background');

    setTimeout(() => {
        cancel_booking_background.classList.remove('background');
    }, 1500);
})

//offered-turf

let offered_turf =document.getElementById('nave-list5');
let offered_turf_background=document.getElementById('offered-turf-background');

offered_turf.addEventListener('click',function(){
    offered_turf_background.classList.add('background');

    setTimeout(() => {
        offered_turf_background.classList.remove('background');
    }, 1500);
})


//reviews & Ratings

let reviews_ratings =document.getElementById('nave-list2');
let review_rating_background=document.getElementById('review-rating-background');

reviews_ratings.addEventListener('click',function(){
    review_rating_background.classList.add('background');

    setTimeout(() => {
        review_rating_background.classList.remove('background');
    }, 1500);
})


//rewards

let rewards =document.getElementById('nave-list4');
let rewards_background=document.getElementById('rewards-background');

rewards.addEventListener('click',function(){
    rewards_background.classList.add('background');

    setTimeout(() => {
        rewards_background.classList.remove('background');
    }, 1500);
})


//history

let history =document.getElementById('nave-list6');
let history_background=document.getElementById('history-background');

history .addEventListener('click',function(){
    history_background.classList.add('background');

    setTimeout(() => {
        history_background.classList.remove('background');
    }, 1500);
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

    window.onload = function() {
        setTimeout(function() {
          window.scrollTo(0, 0);
        }, 100);
      };
      




      window.onload = function() {
        var tname = document.getElementById('tt1').textContent;
        var temail = document.getElementById('tt4').textContent;
        
        // Store in localStorage
        localStorage.setItem("tname", tname);
        localStorage.setItem("temail", temail);
    };
    