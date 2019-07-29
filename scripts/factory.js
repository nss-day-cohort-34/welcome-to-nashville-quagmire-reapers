

createRestaurantDisplayComponent = (restaurant) => {
    return `
        <div id = results-section>
            <h1>${restaurant.name}</h1>
            <p>${restaurant.address}</p>
            <p>${restaurant.city}, ${restaurant.state}</p>
            <p>Reservation Phone: ${restaurant.phone}</p>
            <p>Website: ${restaurant.reserve_url}</p>
        </div>
    `
}


