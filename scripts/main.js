const searchButtonRestaurant = document.getElementById("restaurantSearchButton")

// searchButtonRestaurant.addEventListener("click", () => getOpenTableData().then((restaurants) => {
//     // console.log(restaurants)
//     restaurants.restaurants.forEach(restaurant => {
        
//     });
// }))

getOpenTableData().then((restaurants) => {
    // console.log(restaurants)
    restaurants.restaurants.forEach(restaurant => {
        console.log(restaurant)
        const htmlString = createRestaurantDisplayComponent(restaurant)
        htmlRepresentation(htmlString)
        // console.log(htmlString)
    });
})

        


// htmlRepresentation()
