//DEPENDENCIES================================================
//DOM Elements
var searchHistory = ["Dallas", "Mexico City"];
$(document).ready(() => {
  console.log("ready!");
  displayHistory();
  $("#searchCity").on("submit", searchCity);
});
// DOM ELEMNTS
// INITAL DATA
function displayHistory() {
  $("#history").empty();
  for (var i = 0; i < searchHistory.length; i++) {
    var cityDiv = $("<div>");
    cityDiv.addClass("list-group-item");
    cityDiv.text(searchHistory[i]);
    $("#history").append(cityDiv);
  }
}
//user inputs search
function searchCity(event) {
  event.preventDefault();
  //API STUFF
  var cityName = $("#cityName").val();
  searchHistory.unshift(cityName);
  displayHistory();
  $("#cityName").val("");
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=7ecf98b61a0186dc2a341e9ebe25abf4";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
========================================================================
//Initial DATA GET JSON
var cityName = "London";

var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=7ecf98b61a0186dc2a341e9ebe25abf4";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//doc ready
$(document).ready(() => {
  console.log("ready");
});
//FUNCTIONS====================================================
//USER INPUT===================================================
//A user types a city
// var city = $("#city-info-button").on("click", function () {
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//     $("#weather-info").text(result.list[0].weather[0].main);
//   });
// });

$("#2").on("click", () => {
    var value = $("#value").val();
      $.ajax({
          type:"GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q="+ value + "&appid=acc64788e06dbfa1fe0ec8ee8b506676",
      }).then(res => {
          console.log(res)
      })
  })

//A user submits their search
//A users search history is saved
//then the currrent weather of that city shows up
//they see the city name,
//the date,
//an icon representation of weather conditions,
//the temperature,
//the humidity,
//the wind speed,
//and the UV index
//based on the UV Index
//the color is green for favorable
//the color is purple for moderate
//the color is red for severe
//They also see the 5 day forecast of their city that they searched
//the date,
//an icon representation of weather conditions,
//the temperature,
//and the humidity
//If the user searches for another city, then their past city search is saved
//The user can click on past city searches and view the weather
//Display Data
