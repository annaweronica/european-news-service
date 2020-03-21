
![image](/assets/images/news-title-header.png) <br>

---

[THE NEWS](https://annaweronica.github.io/european-news-service/)

---

<h1>UX</h1>

**Aim:** <br>
To get updated with the lastest news from choosen countries and within six categories.

**Target audience:**<br>
The user who is interested in latest news from *Country* within *Category*.<br>
The *Country* user can choose among:
- Sweden as default country, 
- Poland, 
- United Kingdom (named England here)
- Ireland
- France

The list of the countries is a subject to be extented. <br>

There are six categories for each *Country* to choose from: 
- Business
- Entertainment
- Health
- Science
- Sports
- Technology
- Latest news which is the section for all news from certain country.

**The structure of the news**

- The title of the news
- The image/no image/ broken image 
- Description/ no description / lack of description

The original news source opens in the new tab browser

**The user path:** <br>
The default settings while opening the webpage:
- *Country*: *Sweden*
- *Category*: *Latest news* (all categories for *Country*) dispalyed.<br>

>*Latest news* section contains all news from different categories together.<br>
>By default clicling on any *Country* only (without selecting *Category*) it will open the *Latest news* section.<br>

The user must scroll down to read the news.<br>

To open the link to the original news source the user can click either on:
- Title of the news
- Image/broken image

The user can be back to the top of the webpage either:
- by clicking on any *Country*
- by clicking on any *Category*
- by clicking on a *Go up* button on the right bottom of the webpage

**Optional paths:** <br>

-> *Country* -> *Category

The user can click on:

- *Country* to see *Latest news* from for example *Poland* and/or choose *Category* for example *Science*<br>
- Then staying within the *Catogory* *Science* the user can change the *Country* for Sweden and he will stay within the same *Category* (just different *Country*)
- To be back to the *Lastest News* for *Country* the user can click on *Lastest News* section

Wireframes:


USER STORIES
- As a user I want to see news from the default country as I open the webpage.
- As a user I want to be able to choose from which country I want to read the news from.
- As a user I want to get news by default from all categories for choosen country.
- As a user I want to be able to choose the news category for choosen country.
- As a user I want to move from one category to the same category in different country.
- As a user 

<h1>Features</h1>

**Existing features:**
- Select *Country*
- Select *Category*

**Future features to implement**
- Search news input
- Languages translation
- Weather for the country on *Country* click

<h1>Technologies</h1>

HTML/HTML5<br>
CSS/CSS3<br>
JavaScript<br>

**Frameworks:**<br>
Bootstrap<br>
jQuery<br>

**External sources imported to the project:**

BootstrapCDN<br>
popper.js<br>
Google fonts<br>
Font awesome<br>

**Online IDE:**<br>
GitPod

**Hosting service:**<br>
GitHub

**Knowledgeable resources which supported the Developer during her work:**

- [w3school](https://www.w3schools.com/js/default.asp)
- [stackoverflow](https://stackoverflow.com/)
- [Code Institute lerning materials](https://courses.codeinstitute.net/program/FullstackWebDeveloper)


External code sources implemented and modified:
- [stickey header](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
- [scroll top](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
- [stickey footer](https://startbootstrap.com/snippets/sticky-footer-flexbox/)

<h1>Testing</h1>

**HTML Validator**
- No errors or warnings to show. However:
    > Please note: there is a workaround to avoid a warning: <br>
    > `<article class="col-lg-4 wide-column col content-wide">`<br>
	>					`<h1>News</h1>`<br>
	>					`<div id="main-content">`<br>
	>					`</div>`<br>
	>				`</article>`<br>
    > To avoid the warning *empty heading* in the `<article>` had to be added. It is not visible on the webpage due to top margin on the main content.

CSS Validator
- No Error Found.

JS Hint:
- Metrics:

>There are 9 functions in this file.<br>
>Function with the largest signature take 2 arguments, while the median is 0.<br>
>Largest function has 21 statements in it, while the median is 4.<br>
>The most complex function has a cyclomatic complexity value of 5 while the median is 1.

>Two unused variables:
>	- latestNews
>	- news_query
>There are called in HTML.

<h2>Manual Testing</h2>

Webpage and its responsiveness was tested on follwoing browsers:
- Chrom
- FireFox
- Edge
- Internet Explorer

>![INTERNET EXPLORER IS NOT SUPPORTED] 


<h2>TESTING THE FEATURES</h2>

1. Selecting the *Country* 
2. Selecting the *Category*
3. Clicking on the *Go up* button

<h1>Deployment</h1>
The webpage is hosted on github with one master branch: [https://github.com/annaweronica/european-news-service](https://github.com/annaweronica/european-news-service)

Commends below were made as the work incrementation was made progressively and prevented from any code incrementation loss.

- git add .
- git commit -m "name"
- git push

<h2>GitHub Pages</h2>

**To deploy a website on GitHub Pages, follow these steps:**

1. Go to [GitHub repository](https://github.com/annaweronica/european-news-service)
2. Click on Settings
3. Scrolling down you will find GitHub Pages
4. Click on the Source dropdown menu
5. Select master branch
6. Should appear a green message saying *Your site is published at* [https://annaweronica.github.io/european-news-service/](https://annaweronica.github.io/european-news-service/)

**To create a local development repository, follow these steps:**

1. Go to [GitHub repository](https://github.com/annaweronica/european-news-service)
2. Click on the Clone or download
3. Click the check list icon on the right of the newly opened window to clone the repository using HTTPS
4. Open Terminal
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type git clone and paste the URL you copied in step 3 and run the command


<h1>Credits</h1>
Anna have joined Code Institue to leran as much as she can from the best teachers, tutors and mentors so she believs she will have the opportuinity to find the job as Developer after graduation of CI programme.<br>



**Inspiration**

<h2>Content</h2>
[News API](https://newsapi.org/)

[Flags icons](https://www.flaticon.com/)

> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

[No photo image](https://www.freeiconspng.com/downloadimg/23483)

**Thank you**
@Xav and @Kevin for support during the project<br>
@Anna Greaves for inspiration on readme.md 

---

Enjoy!

