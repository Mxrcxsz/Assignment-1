//For index
current = 2;
var slides = ["url(img/content1.jpg)", "url(img/content2.jpg)","url(img/content3.jpg)","url(img/content4.jpg)"];
document.getElementById("content").style.backgroundImage = slides[current];
var y = document.getElementById("flex-container1");
var z = document.getElementById("flex-container2");
var yc = document.getElementById("snkrs");
var zc = document.getElementById("apprl");
var ys = document.getElementById("s-icon");
var zs = document.getElementById("a-icon");
var check = true
z.style.display = "none";

//slideshow
function slide(n) {
    current += n;
    var x = document.getElementById("content");
    if (current < 0){
        current = 3;
    }
    else if (current > 3)
    {
        current = 0;
    }
    x.style.backgroundImage = slides[current];
}

//show apparel
function showApprl(){
    y.style.display = "none";
    z.style.display = "flex";
    if (check == true)
    {
        zc.style.backgroundColor = "black";
        zc.style.color = "white";
        zs.src = "img/shirt.png"
        yc.style.backgroundColor = "white";
        yc.style.color = "black";
        ys.src = "img/sneakers (1).png"
        check = false;
    }
}

//show sneaker
function showSnkrs(){
    z.style.display = "none";
    y.style.display = "flex";
    if (check == false)
    {
        yc.style.backgroundColor = "black";
        yc.style.color = "white";
        ys.src = "img/sneakers.png"
        zc.style.backgroundColor = "white";
        zc.style.color = "black";
        zs.src = "img/shirt (1).png"
        check = true;
    }
}

//display product 
function showProduct(title,img,price){
    let product = [title,img,price];
    sessionStorage.setItem("product",JSON.stringify(product));
}