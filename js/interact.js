
/*
*/
var images = document.getElementsByClassName("img");
for(var i=0; i<images.length; i++){
    images[i].addEventListener("mouseover", function(){  // mousedown
        //console.log("event listener 1")
        this.src = this.getAttribute("data-secret-src");
    });
    images[i].addEventListener("mouseout", function(){    // mouseup
        //console.log("event listener 2")
        this.src = this.getAttribute("data-original-src");
    });
}

/*
let images = document.querySelectorAll('img');
for(var i = 0; i < images.length; i++) {
    images[i].setAttribute('id', 'img' + i);
    images[i].addEventListener("click", function() {
        this.src = "images/dell-gaming-g-series-wallpaper-g7-silver.jpg";
    });
}
*/

/*
var images = document.getElementsByClassName("img");
var img_secret = document.getElementById("img_secret");
for(var i=0; i<images.length; i++){
    images[i].addEventListener("mousedown", function(){
        this.style.display = "none";
        img_secret.style.display = "block";
    });
    images[i].addEventListener("mouseup", function(){
        this.style.display = "block";
        img_secret.style.display = "none";
    });
}
*/

/*
when in doubt wrap it in this maybe
window.onload = function(){
}
*/
