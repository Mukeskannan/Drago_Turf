const SERVER_URL = "http://localhost:8080";

window.onload = () => {

    const userName = localStorage.getItem("userName");

    if(userName == null){
        alert("Please Login");
        return;
    }
    console.log(`${SERVER_URL}/booking/history/${userName}`);

fetch(`${SERVER_URL}/booking/history/${userName}`)
    .then(res=>res.json())
    .then(data=>{

        const container=document.getElementById("historyContainer");

        if(data.length==0){

            container.innerHTML=
            `
            <div class="noData">
                No Booking History Found
            </div>
            `;

            return;
        }

        data.forEach(booking=>{

            container.innerHTML+=`

            <div class="card">

                <h2>${booking.turfName}</h2>

                <div class="row">
                    <b>Customer :</b>
                    ${booking.customerName}
                </div>

                <div class="row">
                    <b>Email :</b>
                    ${booking.customerEmail}
                </div>

                <div class="row">
                    <b>Location :</b>
                    ${booking.customerLocation}
                </div>

                <div class="row">
                    <b>Date :</b>
                    ${booking.bookingDate}
                </div>

                <div class="row">
                    <b>Time :</b>
                    ${booking.bookingTime}
                </div>

                <div class="row">
                    <b>Amount :</b>
                    ${booking.amount}
                </div>

                <div class="row">
                    <b>Transaction Id :</b>
                    ${booking.transactionId}
                </div>

                <div class="row status">
                    ${booking.status}
                </div>

            </div>

            `;

        });

    });

}