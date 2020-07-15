// $(document).ready(() => {
//     console.log("ready!");

searchBtn.on("click", function (event) {
    event.preventDefault();
  searchBtn.on("click", function (event) {
    event.preventDefault();
    //City Search
    var citySearch = $("#citySearch").val();
    console.log("City Search:", citySearch);
    var apiKey = "7ecf98b61a0186dc2a341e9ebe25abf4";
    var queryURLCurrent =
      " http://api.openweathermap.org/data/2.5/weather?q=" +
      citySearch +
      "&units=imperial&appid=" +
      apiKey;
    console.log("queryURL:", queryURLCurrent);
    //then the currrent weather of that city shows up
    $.ajax({
      url: queryURLCurrent,
      method: "GET",å
    }).then(function (response) {
      console.log(response);
      // City Name
      var cityName = response.name;
      $("#city-name").text(cityName);
      console.log("cityName:", cityName);
      // Date
      var date = moment();
      var dateDisplay = date.format("dddd MMMM Do YYYY");
      $("#date").text(dateDisplay);
      console.log("Date Display:", dateDisplay);
      // Icon
      var iconCode = response.weather[0].icon;
      var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
      console.log(iconCode);
      $("#weather-icon").attr("src", weatherIcon);
      // Temp
      var temperature = response.main.temp;
      $("#temperature").text(temperature);
      console.log("Temperature:", temperature);
      // Humidity
      var humidity = response.main.humidity;
      $("#humidity").text(humidity);
      console.log("Humidity", humidity);
      // Wind Speed
      var windSpeed = response.wind.speed;
      $("#wind-speed").text(windSpeed);
      console.log("Wind Speed:", windSpeed);
      // UV Index
      var latitude = response.coord.lat;
      var longitude = response.coord.lon;
      var uvURL =
        "http://api.openweathermap.org/data/2.5/uvi?appid=" +
        apiKey +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude;
      console.log("uvURL:", uvURL);
      $.ajax({
        url: uvURL,
        method: "GET",
      }).then(function (response) {
        console.log("UV", response);
        var uvIndex = response.value;
        $("#uv-index").text(uvIndex);
        if (uvIndex < 2) {
          $(".index").attr("class", "low");
          console.log("You're safe!");
        }
        if (uvIndex >= 2 && uvIndex <= 5) {
          $(".index").attr("class", "moderate");
          console.log("Getting risky");
        }
        if (uvIndex > 5 && uvIndex <= 7) {
          $(".index").attr("class", "high");
          console.log("Uh oh!");
        }
        if (uvIndex > 7 && uvIndex <= 10) {
          $(".index").attr("class", "very-high");
          console.log("You better stay inside!");
        }
        if (uvIndex > 10) {
          $(".index").attr("class", "extreme");
          console.log("You will ignite on fire");
        }
        console.log("UV Index:", uvIndex);
      });
    });
  });
  searchBtn.on("click", function (event) {
    event.preventDefault();
    //City Search
    var citySearch = $("#city-search").val();
    console.log("City Search:", citySearch);
    var apiKey = "14f6ccf6c898c0ddda97eb93508451eb";
    var queryURLCurrent =
      " http://api.openweathermap.org/data/2.5/weather?q=" +
      citySearch +
      "&units=imperial&appid=" +
      apiKey;
    console.log("queryURL:", queryURLCurrent);
    //then the currrent weather of that city shows up
    $.ajax({
      url: queryURLCurrent,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      // City Name
      var cityName = response.name;
      $("#city-name").text(cityName);
      console.log("cityName:", cityName);
      // Date
      var date = moment();
      var dateDisplay = date.format("dddd MMMM Do YYYY");
      $("#date").text(dateDisplay);
      console.log("Date Display:", dateDisplay);
      // Icon
      var iconCode = response.weather[0].icon;
      var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
      console.log(iconCode);
      $("#weather-icon").attr("src", weatherIcon);
      // Temp
      var temperature = response.main.temp;
      $("#temperature").text(temperature);
      console.log("Temperature:", temperature);
      // Humidity
      var humidity = response.main.humidity;
      $("#humidity").text(humidity);
      console.log("Humidity", humidity);
      // Wind Speed
      var windSpeed = response.wind.speed;
      $("#wind-speed").text(windSpeed);
      console.log("Wind Speed:", windSpeed);
      // UV Index
      var latitude = response.coord.lat;
      var longitude = response.coord.lon;
      var uvURL =
        "http://api.openweathermap.org/data/2.5/uvi?appid=" +
        apiKey +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude;
      console.log("uvURL:", uvURL);
      $.ajax({
        url: uvURL,
        method: "GET",
      }).then(function (response) {
        console.log("UV", response);
        var uvIndex = response.value;
        $("#uv-index").text(uvIndex);
        if (uvIndex < 2) {
          $(".index").attr("class", "low");
          console.log("You're safe!");
        }
        if (uvIndex >= 2 && uvIndex <= 5) {
          $(".index").attr("class", "moderate");
          console.log("Getting risky");
        }
        if (uvIndex > 5 && uvIndex <= 7) {
          $(".index").attr("class", "high");
          console.log("Uh oh!");
        }
        if (uvIndex > 7 && uvIndex <= 10) {
          $(".index").attr("class", "very-high");
          console.log("You better stay inside!");
        }
        if (uvIndex > 10) {
          $(".index").attr("class", "extreme");
          console.log("You will ignite on fire");
        }
        console.log("UV Index:", uvIndex);
      });
    });
//   })