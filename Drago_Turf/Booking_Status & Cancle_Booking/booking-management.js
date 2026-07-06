const SERVER_URL="http://localhost:8080";

window.onload=()=>{

    const userName=localStorage.getItem("userName");

    fetch(`${SERVER_URL}/booking/cancel-list/${userName}`)

    .then(res=>res.json())

    .then(data=>{

        const container=document.getElementById("bookingContainer");

        if(data.length===0){

            container.innerHTML="<h2 class='empty'>No Upcoming Bookings</h2>";

            return;

        }

        data.forEach(booking=>{

            container.innerHTML+=`

            <div class="card">

                <h2>${booking.turfName}</h2>

                <p><b>Booking Date :</b> ${booking.bookingDate}</p>

                <p><b>Time :</b> ${booking.bookingTime}</p>

                <p><b>Amount :</b> ₹${booking.amount}</p>

                <p><b>Status :</b> ${booking.status}</p>

                <button onclick="cancelBooking(${booking.bookingId})">

                    Cancel Booking

                </button>

            </div>

            `;

        });

    });

}

function cancelBooking(id){

    let confirmCancel=confirm("Do you really want to cancel this booking?");

    if(!confirmCancel){

        return;

    }

    fetch(`${SERVER_URL}/booking/cancel/${id}`,{

        method:"PUT"

    })

    .then(res=>res.json())

    .then(data=>{

        alert("Booking Cancelled Successfully");

        location.reload();

    });

}