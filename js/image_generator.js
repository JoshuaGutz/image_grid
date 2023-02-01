
// Replaces this html
//    <div id="grid">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_1024x768.jpg"  alt="Image 1">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_1200x1920.jpg" alt="Image 2">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_1366x768.jpg"  alt="Image 3">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_1600x2560.jpg" alt="Image 4">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_2160x3840.jpg" alt="Image 5">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_2560x1600.jpg" alt="Image 6">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_3840x2160.jpg" alt="Image 7">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_768x1024.jpg"  alt="Image 8">
//        <img class="img" src="images/cover_img.jpg" data-original-src="images/cover_img.jpg" data-secret-src="images/img0_768x1366.jpg"  alt="Image 9">
//    </div>

var div = document.createElement('div');
div.setAttribute("id", "grid");
document.body.appendChild(div);

var image_path = "images/";
var cover_img = "cover_img.jpg";
var secret_imgs = [ "img1.jpg", "img2.jpg", "img3.jpg", 
                    "img4.jpg", "img0.jpg", "img10.jpg", 
                    "img7.jpg", "img8.jpg", "img9.jpg" ];
for(var i=0; i<secret_imgs.length; i++) {
    var img = document.createElement("img");
    img.classList.add("grid-cell", "img");
    img.src = image_path+cover_img;
    img.alt = "Image " + (i+1);
    img.setAttribute("data-original-src", image_path+cover_img);
    img.setAttribute("data-secret-src", image_path+secret_imgs[i]);
    document.getElementById("grid").appendChild(img);
}
