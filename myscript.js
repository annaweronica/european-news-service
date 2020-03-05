
var country = "";
var category = "";

function set_value(target, value) {
    if (target == "country") {
        country = value;
    }
    if (target == "category") { 
    category = value;
    }
console.log(country, category);
}





// country = localStorage.getItem("country");
// category = localStorage.getItem("category");

// var api_call = new XMLHttpRequest();

// api_call.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {

//         the_result = api_call.responseText;
//     }
//     return the_result;
// }


// function api_data() {
//     if (document.getElementsById("btn_country_sweden").value == "se") {
//         country == "se"; 
//     }
//     if (document.getElementsById("btn_country_poland").value == "pl") {
//         country == "pl";
//     } 
//     if (document.getElementsById("btn_country_england").value == "gb") {
//         country == "gb";
//     }

//     return country;
// }
// 
// function news_query(country) {
    // api_data;
    // endpoint = "https://newsapi.org/v2/top-headlines";
    // query = "?country=" + country + "&category=" + category;
    // key = "&apiKey=5ff4a72e528b4f319854a4f14a2b0c9c";
    // url = endpoint + query + key;

    // api_request.open("GET", url, true);
    // api_request.send();
    // console.log(country);
// }

//STEP 2
//defining the function that we are set the var & making the API call
//define one function setting the variable (country, category) 
//then define another function making the API call and then third third function calling these two functions 