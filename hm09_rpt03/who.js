var files = ["media/nada.jpeg",
                  "media/nada1.jpg",
                  "media/nada2.jpg",
                  "media/nada3.jpg"];
var imgs = new Array();
for(var i = 0; i<files.length; i++){
    imgs[i] = new Image();
    imgs[i].src = files[i];
}

var next = 1;
function change(img){
    img.src = imgs[next].src;
    next++;
    next %= imgs.length;
}