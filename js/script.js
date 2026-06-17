const trains = [

{
id:1,
name:"Rajdhani Express",
from:"Delhi",
to:"Mumbai",
departure:"16:00",
arrival:"08:00",
seats:45
},

{
id:2,
name:"Shatabdi Express",
from:"Bhopal",
to:"Delhi",
departure:"07:00",
arrival:"13:00",
seats:30
},

{
id:3,
name:"Duronto Express",
from:"Delhi",
to:"Kolkata",
departure:"18:00",
arrival:"10:00",
seats:25
},

{
id:4,
name:"Vande Bharat Express",
from:"Delhi",
to:"Varanasi",
departure:"06:00",
arrival:"14:00",
seats:60
},

{
id:5,
name:"Intercity Express",
from:"Kota",
to:"Ruthiyai",
departure:"09:30",
arrival:"11:15",
seats:55
},

{
id:6,
name:"Chambal Express",
from:"Kota",
to:"Guna",
departure:"13:15",
arrival:"15:00",
seats:40
},

{
id:7,
name:"Malwa Express",
from:"Kota",
to:"Bhopal",
departure:"07:45",
arrival:"12:30",
seats:65
},

{
id:8,
name:"Jan Shatabdi",
from:"Kota",
to:"Jaipur",
departure:"10:00",
arrival:"13:00",
seats:50
},

{
id:9,
name:"Mewar Express",
from:"Kota",
to:"Delhi",
departure:"20:30",
arrival:"05:30",
seats:75
},

{
id:10,
name:"Golden Temple Mail",
from:"Mumbai",
to:"Delhi",
departure:"21:00",
arrival:"18:00",
seats:80
},

{
id:11,
name:"Garib Rath",
from:"Delhi",
to:"Jaipur",
departure:"09:00",
arrival:"14:00",
seats:90
},

{
id:12,
name:"Sampark Kranti",
from:"Jaipur",
to:"Delhi",
departure:"15:00",
arrival:"20:00",
seats:45
},

{
id:13,
name:"Udaipur Express",
from:"Udaipur",
to:"Jaipur",
departure:"08:00",
arrival:"14:00",
seats:60
},

{
id:14,
name:"Karnavati Express",
from:"Ahmedabad",
to:"Mumbai",
departure:"05:45",
arrival:"12:30",
seats:70
},

{
id:15,
name:"Tejas Express",
from:"Mumbai",
to:"Goa",
departure:"06:00",
arrival:"13:30",
seats:40
},

{
id:16,
name:"Goa Express",
from:"Goa",
to:"Delhi",
departure:"14:00",
arrival:"11:00",
seats:55
},

{
id:17,
name:"Indore Intercity",
from:"Indore",
to:"Bhopal",
departure:"07:15",
arrival:"10:30",
seats:65
},

{
id:18,
name:"Narmada Express",
from:"Bhopal",
to:"Indore",
departure:"18:00",
arrival:"21:00",
seats:50
},

{
id:19,
name:"Vindhyachal Express",
from:"Bhopal",
to:"Jabalpur",
departure:"08:45",
arrival:"15:00",
seats:40
},

{
id:20,
name:"Mahakaushal Express",
from:"Jabalpur",
to:"Delhi",
departure:"17:30",
arrival:"09:00",
seats:60
},

{
id:21,
name:"Rewa Express",
from:"Rewa",
to:"Bhopal",
departure:"20:00",
arrival:"06:00",
seats:55
},

{
id:22,
name:"Bundelkhand Express",
from:"Jhansi",
to:"Delhi",
departure:"12:00",
arrival:"19:00",
seats:45
},

{
id:23,
name:"Kashi Vishwanath Express",
from:"Varanasi",
to:"Delhi",
departure:"11:00",
arrival:"04:00",
seats:80
},

{
id:24,
name:"Sanghamitra Express",
from:"Patna",
to:"Bangalore",
departure:"09:00",
arrival:"18:00",
seats:70
},

{
id:25,
name:"Howrah Mail",
from:"Kolkata",
to:"Mumbai",
departure:"13:00",
arrival:"22:00",
seats:75
},

{
id:26,
name:"Coromandel Express",
from:"Kolkata",
to:"Chennai",
departure:"15:30",
arrival:"18:00",
seats:65
},

{
id:27,
name:"Tamil Nadu Express",
from:"Delhi",
to:"Chennai",
departure:"22:30",
arrival:"06:00",
seats:95
},

{
id:28,
name:"Chennai Mail",
from:"Chennai",
to:"Mumbai",
departure:"18:45",
arrival:"20:30",
seats:70
},

{
id:29,
name:"Kerala Express",
from:"Delhi",
to:"Kochi",
departure:"11:25",
arrival:"12:45",
seats:85
},

{
id:30,
name:"Humsafar Express",
from:"Lucknow",
to:"Delhi",
departure:"16:15",
arrival:"22:30",
seats:60
}

];

//train search + display + booking

const trainForm = document.getElementById("trainForm");
const results = document.getElementById("results");

trainForm.addEventListener("submit", function(e){

    e.preventDefault();

    const from =
    document.getElementById("from").value.trim();

    const to =
    document.getElementById("to").value.trim();

    const date =
    document.getElementById("date").value;

    if(from === "" || to === "" || date === ""){
        alert("Please fill all fields");
        return;
    }

    const filtered = trains.filter(train =>

        train.from.toLowerCase() === from.toLowerCase()

        &&

        train.to.toLowerCase() === to.toLowerCase()

    );

    displayTrains(filtered);

});

function displayTrains(trainList){

    results.innerHTML = "";

    if(trainList.length === 0){

        results.innerHTML = `
        <div class="train-card">
            <h3>No Trains Found</h3>
            <p>Please try another route.</p>
        </div>
        `;

        return;
    }

    trainList.forEach(train => {

        const card = document.createElement("div");

        card.classList.add("train-card");

        card.innerHTML = `

        <h3>${train.name}</h3>

        <p>
        <strong>${train.from}</strong>
        ➜
        <strong>${train.to}</strong>
        </p>

        <p>Departure : ${train.departure}</p>

        <p>Arrival : ${train.arrival}</p>

        <p>Seats Available : ${train.seats}</p>

        <button onclick="bookTrain('${train.name}')">
            Book Ticket
        </button>

        `;

        results.appendChild(card);

    });

}
function bookTrain(trainName){

    const passenger =
    prompt("Enter Passenger Name");

    if(!passenger){
        return;
    }

    const pnr =
    Math.floor(
        100000000 +
        Math.random() * 900000000
    );

    const booking = {

        passenger,
        trainName,
        pnr

    };

    const bookings =
    JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

    bookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    alert(

`Booking Confirmed

Passenger : ${passenger}

Train : ${trainName}

PNR : ${pnr}

Status : Confirmed`

    );

}
const addJourney =
document.getElementById("addJourney");

const destinationInput =
document.getElementById("destinationInput");

const journeyList =
document.getElementById("journeyList");

addJourney.addEventListener("click", () => {

    const destination =
    destinationInput.value.trim();

    if(destination === ""){
        alert("Enter Destination");
        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML = `

    ${destination}

    <button class="delete-btn">
        Delete
    </button>

    `;

    journeyList.appendChild(li);

    destinationInput.value = "";

});

journeyList.addEventListener("click", (e) => {

    if(
        e.target.classList.contains("delete-btn")
    ){

        e.target.parentElement.remove();

    }

});

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const message =
    document.getElementById("message").value.trim();

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        alert("Name is required");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Enter valid email");
        return;
    }

    if(phone.length !== 10){
        alert("Phone number must be 10 digits");
        return;
    }

    if(message === ""){
        alert("Message cannot be empty");
        return;
    }

    const contactData = {

        name,
        email,
        phone,
        message

    };

    const contacts =
    JSON.parse(
        localStorage.getItem("contacts")
    ) || [];

    contacts.push(contactData);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    alert(
        "Message Submitted Successfully!"
    );

    contactForm.reset();

});