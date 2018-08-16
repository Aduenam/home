var newsImages = [];
var api_key = process.env.NEWS_KEY;

var url = 'https://newsapi.org/v2/everything?' +
          'q=immigration&' +
          'q=ICE&' +
          'pageSize=20&' +
          'apiKey='+api_key;
          
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        var articles = json.articles;
        var x = 0;
        articles.forEach(function(article) {
            //console.log(article.urlToImage);
            var newImage = article.urlToImage;
            newsImages.push(newImage);
            console.log(newsImages[x]);
            x += 1;
            
        })
        //console.log(json.articles);
        
    });
    
print(newsImages[0]);

    
    
    
    



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
   