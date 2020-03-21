//Global variables
var country = "";
var category = "";

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

//Building the request object and calling news API
function api_call() {
    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var the_result = api_request.responseText;
            var data = JSON.parse(the_result);
            display_articles(data);
        }
    };

    var endpoint = "https://newsapi.org/v2/top-headlines";
    var query = "?country=" + country + "&category=" + category;
    var key = "&apiKey=5ff4a72e528b4f319854a4f14a2b0c9c";
    var url = endpoint + query + key;
    // console.log(url);
    api_request.open("GET", url, true);
    api_request.send();
}

//Getting news data to the page
function display_articles(data) {
    var main_content = document.getElementById('main-content');
    var html = "";
    var noDescription = "";
    var image = "";

    //console.log(data);
    for (var i = 0; i < data.articles.length; i++) {
        html += "<article class=\"content-wide\">";
        html += "<a target=\"_blank\" href='" + data.articles[i].url + "' >";
        html += "<h1>" + data.articles[i].title + "</h1>";
        if (data.articles[i].urlToImage == null) {
            image = "assets/images/no-photo.png";
        } else {
            image = data.articles[i].urlToImage;
        }
        html += "<img src=\"" + image + "\" alt=\"news-image\" height=\"\" width=\"\">";
        html += "</a>";
        if (data.articles[i].description == null) {
            noDescription = "No description.";
        } else {
            noDescription = data.articles[i].description;
        }
        html += "<figcaption>" + noDescription + "</figcaption>";
        html += "<hr>";
        html += "</article>";
        html = html.replace("http:", "https:");
    }
    main_content.innerHTML = html;
}

function latestNews(target, value) {
    set_value("category", "");
    set_value(target, value);
    api_call();
    topFunction();
}

//Main function triggered by buttons 
function news_query(target, value) {
    set_value(target, value);
    api_call();
    topFunction();
}

//JUMP TO THE TOP BUTTON & SHRINKING HEADER
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "30px";
        document.getElementById("customize-script-container").style.display = "none";
    } else {
        document.getElementById("header").style.fontSize = "90px";
        document.getElementById("customize-script-container").style.display = "block";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}