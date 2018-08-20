var newsImages = [];
var url = 'https://newsapi.org/v2/everything?' +
          'q=immigration&' +
          'q=ICE&' +
          'pageSize=20&' +
          'apiKey=2f002fab97254fc48292f9444d1d12a6';
          
var slideshow_element = document.getElementById("news-slideshow");

var i = 1;
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        var articles = json.articles;
        articles.forEach(function(article) {
            var newImage = article.urlToImage;
            var website = article.url;
            var text = article.description;
            if (newImage == null) {
                newImage = "https://cdn3.bigcommerce.com/s-vw57mn/products/40160/images/117175/Hero-Arts-Cling-Stamps-Newspaper-Bold-Prints-857009156494_image1__21010.1517348776.600.600.jpg?c=2";
            }
            
            var div = document.createElement('div');
            div.className = 'mySlides fade';
            div.innerHTML =
             '<div class="numbertext">'+ i + ' / 20</div>\
                <a href = ' + website + '> <img src=' + newImage + ' style="width:100%"></a>\
                 <div class="text">' + text +'</div>'; 
                 
            slideshow_element.appendChild(div);
            i +=1;

        });
        
        showSlides();
        
        
    });



// var lang = new Array();
// lang = ["English", "Chinese", "Korean"];

// function buildLanguages() {
//     var langDiv = document.getElementById("langDiv");
//     var html = "<form>";
//     for (var i = 0; i < lang.length; i++) {
//         html += "<input type='checkbox' name='" + lang[i] + "' value='" + i + "' onClick=\"setValue(this.value);\">" + lang[i] + "<br>";
//     }
//     html += "</form>";

//     langDiv.innerHTML = html;
// }
// buildLanguages();
    

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"; 
    
    setTimeout(showSlides, 1000); // Change image every 6 seconds
    sleep(5000);
}


   