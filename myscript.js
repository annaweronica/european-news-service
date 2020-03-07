//Global variables

var country = "se";
var category = "";
var data;

//Creating local storage
localStorage.setItem("country", country);
target = localStorage.getItem("country");
value = localStorage.getItem("category");

//Defining a function setting the variables (country, category) 
//function 1
function set_value(target, value) {
    if (target == "country") {
        country = value;
    }
    if (target == "category") {
        category = value;
    }
    return country, category;
}
//ending function 1

//Building the request object and calling API
//function 2
function api_call() {
    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            the_result = api_request.responseText;
            data = JSON.parse(the_result);
            display_articles();
        };
    };

    endpoint = "https://newsapi.org/v2/top-headlines";
    query = "?country=" + country + "&category=" + category;
    key = "&apiKey=5ff4a72e528b4f319854a4f14a2b0c9c";
    url = endpoint + query + key;
    // console.log(url);
    api_request.open("GET", url, true);
    api_request.send();
}
//ending function 2

//Getting data to the page
function display_articles() {
    var main_content = document.getElementById('main-content');
    var html = "";
    // console.log(data);
    for (var i = 0; i < data.articles.length; i++) {
        html += "<div class=\"content-wide\">";
        html += "<h2>" + data.articles[i].title + "</h2>";
        html +="<a target=\"_blank\" href='" + data.articles[i].url + "' </a>"
        html += "<img src=\"" + data.articles[i].urlToImage + "\" alt=\"news-image\" height=\"\" width=\"\">";
        html += "<p>" + data.articles[i].description + "</p>";
        html += "<p>" + data.articles[i].publishedAt + "</p>";
        html += "</div>";
    }
    main_content.innerHTML = html;

}

//Main function triggered by buttons 
function news_query(target, value) {
    set_value(target, value);
    api_call();
    // console.log(data);
    //display_articles();
}

//STEP 2
//defining the function that we are set the var & making the API call:
//*define one function setting the variable (country, category) -> set_value()
//*then define another function making the API call and -> api_call()
//then third third function calling these two functions -> news_query()

