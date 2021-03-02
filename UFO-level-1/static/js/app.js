// from data.js
var tableData = data;

// Get a reference to the table body
// Select the button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function(ufo){
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
	
	filteredData.forEach(function(ufo) {
		console.log(ufo);
		var row = tbody.append("tr");
		Object.entries(ufo).forEach(function([key, value]) {
			console.log(key, value);
			  // Append a cell to the row for each value
			var cell = row.append("td");
			cell.text(value);
		});
  	});
});
// clear out data
tbody.html("");





