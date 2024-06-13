//U86364709
document.getElementById("erForm").addEventListener('submit', (e)=>{
    e.preventDefault(); // avoid page reload

    //variables for event portal
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const eventDate = document.getElementById("eventDate").value;
    const mealPreferences = Array.from(document.querySelectorAll('input[name="mealPreferences"]:checked')).map(el => el.value);


    // validation
    if(!firstName || !lastName || !email || !eventDate || mealPreferences.length ===0){
        alert('Oops! You may have missed something. Please fill out all fields');
        return;
    }

    

    // finalize submission display functionality
    const display = document.getElementById("erSubmission");
    display.innerHTML = `
    <h3>Event Order Confirmation</h3><br>
    <p><strong>First name: </strong> ${firstName}</p><br>
    <p><strong>Last name: </strong> ${lastName}</p><br>
    <p><strong> Email Address: </strong> ${email}</p><br>
    <p><strong> Event date: </strong> ${eventDate}</p><br>
    <p><strong> Meal preferences: </strong> ${mealPreferences.join(" & ")}</p><br>
    `
    document.getElementById("erForm").reset();
}); 