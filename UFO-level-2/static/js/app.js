// from data.js
var tableData = data;

// Get a reference to the table body
// Select the button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

tableData.forEach(function(ufo) {
	console.log(ufo);
	var row = tbody.append("tr");
	Object.entries(ufo).forEach(function([key, value]) {
		console.log(key, value);
		  // Append a cell to the row for each value
		var cell = row.append("td");
		cell.text(value);
	});
  });

// Create event handlers 
button.on("click", runEnter);
function runEnter(){
	// Prevent the page from refreshing
	d3.event.preventDefault();
	// Select the input element and get the raw HTML node
	var inputDate = d3.select("#datetime");
	var inputCity = d3.select("#city");
  	var inputState = d3.select("#state");
  	var inputCount = d3.select("#country");
  	var inputShape = d3.select("#shape");

	// Get the value property of the input element
	var inputValue1 = inputDate.property("value");
	var inputValue2 = inputCity.property("value");
  	var inputValue3 = inputState.property("value");
  	var inputValue4 = inputCount.property("value");
  	var inputValue5 = inputShape.property("value");

	
	function multifilter(newList){
		// create an empty list
		var inputlist = []
		// push input value to empty list
		if (inputValue1 != "") {inputlist.push(newList.datetime === inputValue1)} else {inputlist.push(true)};
		if (inputValue2 != "") {inputlist.push(newList.city === inputValue2)} else {inputlist.push(true)};
		if (inputValue3 != "") {inputlist.push(newList.state === inputValue3)} else {inputlist.push(true)};
		if (inputValue4 != "") {inputlist.push(newList.country === inputValue4)} else {inputlist.push(true)};
		if (inputValue5 != "") {inputlist.push(newList.shape === inputValue5)} else {inputlist.push(true)};
		return inputlist[0] && inputlist[1] && inputlist[2] && inputlist[3] && inputlist[4]
	};

	var filteredData = tableData.filter(multifilter);
	console.log(filteredData);
	
	tbody.html(""); // to clear out previous data

	filteredData.forEach(function(ufo) {
		var row = tbody.append("tr");
		Object.entries(ufo).forEach(function([key, value]) {
			console.log(key, value);
			var cell = row.append("td");
			cell.text(value);
		});
	});
};







