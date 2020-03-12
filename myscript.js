//Global variables

var country = "";
var category = "";
var data;

//Creating local storage
localStorage.setItem("country", country);
target = localStorage.getItem("country");
value = localStorage.getItem("category");

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

//Building the request object and calling API
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
    console.log(url);
    api_request.open("GET", url, true);
    api_request.send();
}

//Getting data to the page
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
            noDescription = "No description";
        } else {
            noDescription = data.articles[i].description;
        }
        html += "<figcaption>" + noDescription + "</figcaption>";
        html += "<hr>"
        html += "</article>";
    }
    main_content.innerHTML = html;
    }

function latestNews(target, value){
    set_value("category", "");
    set_value(target, value);
    api_call();
};

//Main function triggered by buttons 
function news_query(target, value) {
    set_value(target, value);
    api_call();
    // console.log(data);
    //display_articles();
}

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

//JUMP TO THE TOP BUTTON 
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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