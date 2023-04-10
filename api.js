function getData(country){

	let countryPlaceholder = document.querySelector("#country");
	let cityPlaceholder = document.querySelector("#city");
	let citiesDropDown = document.querySelector("#cities");

	cityPlaceholder.innerHTML = "";
	countryPlaceholder.innerHTML = "";

	if(country.trim() === ""){
		citiesDropDown.disabled = true;
		citiesDropDown.selectedIndex = 0;
		return false;
	}








    let src="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-9694EBC9-0496-4650-9A37-853A6C153F31";
    fetch(src).then(function(response){
        return response.json();
    }).then(function(result){
    //取得資料，印出來
		let cities = result[country];
		let out = "";
		out += `<option value="">Choose a city</option>`;
		for(let city of cities){
			out += `<option value="${city}">${city}</otion>`;
		}
		citiesDropDown.innerHTML = out;
		citiesDropDown.disabled = false;
		countryPlaceholder.innerHTML = country;



    });
}

getData();