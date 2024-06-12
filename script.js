//U86364709
document.getElementById("erForm").addEventListener('submit', (e)=>{
    e.preventDefault(); // avoid page reload

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const eventDate = document.getElementById("eventDate").value;
    const p_vegetarian = document.getElementById("vegetarian");
    const p_nonVegetarian = document.getElementById("nonVegetarian");
    const p_vegan = document.getElementById("vegan");

    // validation
    if(!firstName || !lastName || !email || !eventDate){
        alert('Oops! You may have missed something. Please fill out all fields');
        return;
    }

    let mealPreference;

    if(p_vegetarian.checked){
        mealPreference = p_vegetarian.checked;
        return;
    } else if(p_nonVegetarian.checked){
        mealPreference = p_nonVegetarian.checked;
        return;
    } else if(p_vegan.checked){
        mealPreference = p_vegetarian.checked;
        return;
    }else{
        alert('Oops! You may have missed something. Please fill out all fields');
        return;
    }

    // submission display
    document.getElementById("erSubmission").innerHTML = `
    <h3>Event Order Confirmation</h3><br>
    <p><strong>First name: </strong> ${firstName}</p><br>
    <p><strong>Last name: </strong> ${lastName}</p><br>
    <p><strong> Email Address: </strong> ${email}</p><br>
    <p><strong> Event date: </strong> ${eventDate}</p><br>
    <p><strong> Meal preferences: </strong> ${mealPreference}</p><br>
    `
    document.getElementById("erForm").reset();
}); 