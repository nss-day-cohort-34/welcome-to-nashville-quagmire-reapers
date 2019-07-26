createRestaurantDisplayComponent = (object) => {
    return `
        <section id="restaurants">
            <h2>${object.name}</h2>
            <p>${object.address}</p>
            <p>${object.city}, ${state}</p>
        </section>
    `
}