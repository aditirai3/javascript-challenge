// from data.js
var tableData = data;

// Get a reference to the table body
// Select the button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function(){
	// Prevent the page from refreshing
	d3.event.preventDefault();
	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");
	
	//   check the correct values are displayed on the console
	console.log(inputValue);
	console.log(tableData);

	var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
	console.log(filteredData);
});

	data.forEach(function(weatherReport) {
	console.log(weatherReport);
	var row = tbody.append("tr");
	Object.entries(weatherReport).forEach(function([key, value]) {
	  console.log(key, value);
	  // Append a cell to the row for each value
	  // in the weather report object
	  var cell = row.append("td");
	  cell.text(value);
	});
  });
  

// //Populate table
// populate(data);

// // Filter by attribute
// button.on("click", () => {
	
// 	var inputDate = inputField1.property("value").trim();
// 	var inputCity = inputField2.property("value").toLowerCase().trim();
// 	// Filter by field matching input value
// 	var filterDate = data.filter(data => data.datetime === inputDate);
// 	console.log(filterDate)
// 	var filterCity = data.filter(data => data.city === inputCity);
// 	console.log(filterCity)
// 	var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
// 	console.log(filterData)

	// clear data
	tbody.html("");
