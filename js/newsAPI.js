var resp;

var url = 'https://newsapi.org/v2/everything?' +
          'q=immigration&' +
          'q=ICE&' +
          'pageSize=20&' +
          'apiKey=2f002fab97254fc48292f9444d1d12a6';
          
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        var articles = json.articles;
        forEach(articles, function(article) {
            console.log(article.urlToImage);
        })
        console.log(json.articles);
        
    });
    
    


var newsImages = [];


    
    
    
    



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
   