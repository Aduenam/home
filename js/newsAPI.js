var newsImages = [];
var url = 'https://newsapi.org/v2/everything?' +
          'q=immigration&' +
          'q=ICE&' +
          'pageSize=20&' +
          'apiKey=2f002fab97254fc48292f9444d1d12a6';
          
var slideshow_element = document.getElementById("news-slideshow");
var default_image = "https://higherlogicdownload.s3.amazonaws.com/IMMIGRATIONJUSTICE/0778af42-f38c-4037-83df-bfe5c8a7e8da/UploadedImages/Images/we_are_all_immigrants.jpg";
var on_err = 'this.src="'+default_image+'"';

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
                newImage = default_image;
            }
            
            var div = document.createElement('div');
            if (i == 12) {div.className = 'carousel-item active';}
            else {div.className = 'carousel-item';}
            
            div.style = 'background-color:transparent;'
            
            var a = document.createElement('a');
            a.setAttribute('href', website);
            
            var carousel_item_div = document.createElement('div');
            carousel_item_div.className = "carousel-caption d-md-block";
            carousel_item_div.innerHTML = '<h5 class="captionstyles">' + article.title + '</h5>';
            
            var img = document.createElement('img');
            img.setAttribute('src', newImage);
            img.setAttribute('onerror', on_err);
            img.setAttribute('style', 'width: 100%');
            
            a.appendChild(img);
            a.appendChild(carousel_item_div);
            
            div.appendChild(a);
                 
            slideshow_element.appendChild(div);
            
            i +=1;

        });
        

   
    });
