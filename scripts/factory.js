//setting a counter variable for each restaurant div
 restCounter = 0
//creating html representation
createRestaurantDisplayComponent = (restaurant) => {
    return `
        <div id = "results-section" ${restCounter++}>
            <h1>${restaurant.name}</h1>
            <p>${restaurant.address}</p>
            <p>${restaurant.city}, ${restaurant.state}</p>
            <p>Reservation Phone: ${restaurant.phone}</p>
            <p>Website: ${restaurant.reserve_url}</p>
            <button class="saveRest">Save</button>
        </div>
    `
}


