//Global variables

var country = "";
var category = "";
var city = "";
var data;

//Creating local storage
localStorage.setItem("country", country);
var target = localStorage.getItem("country");
var value = localStorage.getItem("category");

//Defining a function setting the variables (country, category) 
function set_value(target, value) {
    if (target == "country") {
        country = value;
    }
    if (target == "category") {
        category = value;
    }
    return country, category;
}

function set_city(){
    if (country == "se"){
        city = "stockholm";
    }
    if (country == "pl"){
        city = "gdansk";
    }
    if (country == "gb"){
        city = "london";
    }
    console.log(city);
    return city;
}

//Building the request object and calling API
function api_call() {
    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            the_result = api_request.responseText;
            data = JSON.parse(the_result);
            display_articles();
        }
    };

    endpoint = "https://newsapi.org/v2/top-headlines";
    query = "?country=" + country + "&category=" + category;
    key = "&apiKey=5ff4a72e528b4f319854a4f14a2b0c9c";
    url = endpoint + query + key;
    // console.log(url);
    api_request.open("GET", url, true);
    api_request.send();
}

//WEAHTER API

function api_call_weather() {
    var api_request_weather = new XMLHttpRequest();
    api_request_weather.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            the_result_weather = api_request_weather.responseText;
            data = JSON.parse(the_result_weather);
            display_weather();
        }
    };

    endpoint = "https://api.openweathermap.org/data/2.5/weather";
    query = "?q=" + city;
    key = "&appid=c35fc6de6d76e7eef96c6606b320ee78";
    url = endpoint + query + key;
    console.log(url);
    api_request_weather.open("GET", url, true);
    api_request_weather.send();
}

//Getting news data to the page
function display_articles() {
    var main_content = document.getElementById('main-content');
    var html = "";
    var noDescription = "";
    // console.log(data);
    for (var i = 0; i < data.articles.length; i++) {
        html += "<article class=\"content-wide\">";
        html += "<a target=\"_blank\" href='" + data.articles[i].url + "' >";
        html += "<h1>" + data.articles[i].title + "</h1>";
        html += "<img src=\"" + data.articles[i].urlToImage + "\" alt=\"news-image\" height=\"\" width=\"\">";
        html += "</a>";
        if (data.articles[i].description == null) {
            noDescription = "No description.";
        } else {
            noDescription = data.articles[i].description;
        }
        html += "<figcaption>" + noDescription + "</figcaption>";
        html += "<hr>";
        html += "</article>";
    }
    main_content.innerHTML = html;
    }

function display_weather() {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push({id: 13,cityid: '2643743',appid: 'c35fc6de6d76e7eef96c6606b320ee78',units: 'metric',containerid: 'openweathermap-widget-13',  });  
    var script = document.createElement('openweathermap-widget-13');
	script.async = true;
	script.charset = "utf-8";
	script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
	var s = document.getElementsByTagName('openweathermap-widget-13')[0];
	s.parentNode.insertBefore(script, s);
}

function latestNews(target, value){
    set_value("category", "");
    set_value(target, value);
    api_call();
}

//Main function triggered by buttons 
function news_query(target, value) {
    set_value(target, value);
    set_city();
    api_call();
    api_call_weather();
    // console.log(data);
    //display_articles();
}

//JUMP TO THE TOP BUTTON 
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}