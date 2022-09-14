class restaurantManager {
  restaurantList = [
    {
      id: 1,
      Name: "Udupi",
      address: "KS rao road",
      city: "Mangalore",
    },
    {
      id: 2,
      Name: "Sheraton",
      address: "Whitefield",
      city: "Bangalore",
    },
    {
      id: 3,
      Name: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
    {
      id: 4,
      Name: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
  ];
  printAllRestaurantNames = function () {
    console.log(this.restaurantList.map((rest) => rest.Name));
  };

  filterRestaurantByCity = function (City) {
    console.log(this.restaurantList.filter((rest) => rest.city == City));
  };
}
const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames();
restaurantObj.filterRestaurantByCity("Mangalore");
