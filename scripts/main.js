//establishing a variable for the button string
const searchButtonRestaurant = document.getElementById("restaurantSearchButton")

//main js query
searchButtonRestaurant.addEventListener("click", () => getOpenTableData().then((restaurants) => {
    restaurants.restaurants.forEach(restaurant => {
        const htmlString = createRestaurantDisplayComponent(restaurant)
        htmlRepresentation(htmlString)
    });
}))

