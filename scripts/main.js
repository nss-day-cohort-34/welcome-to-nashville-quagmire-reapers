const searchButtonRestaurant = document.getElementById("restaurantSearchButton")

searchButtonRestaurant.addEventListener("click", () => getOpenTableData().then((restaurants) => {
    console.log(restaurants)
    restaurants.restaurants.forEach(restaurant => {
        const htmlString = createRestaurantDisplayComponent(restaurant)
        htmlRepresentation(htmlString)
    });
}))

// getOpenTableData().then((restaurants) => {
//     // console.log(restaurants)
//     restaurants.restaurants.forEach(restaurant => {
//         const htmlString = createRestaurantDisplayComponent(restaurant)
//         htmlRepresentation(htmlString)
//     });
// })

        


// htmlRepresentation()
