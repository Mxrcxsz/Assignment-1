current = 2;
var slides = ["url('content1.jpg')", "url('content2.jpg')","url('content3.jpg')","url('content4.jpg')"];
var y = document.getElementById("flex-container1");
var z = document.getElementById("flex-container2");
var yc = document.getElementById("snkrs");
var zc = document.getElementById("apprl");
var check = true

z.style.display = "none";

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

function showApprl(){
    y.style.display = "none";
    z.style.display = "flex";
    if (check == true)
    {
        zc.style.backgroundColor = "black";
        zc.style.color = "white";
        yc.style.backgroundColor = "white";
        yc.style.color = "black";
        check = false;
    }
}

function showSnkrs(){
    z.style.display = "none";
    y.style.display = "flex";
    if (check == false)
    {
        yc.style.backgroundColor = "black";
        yc.style.color = "white";
        zc.style.backgroundColor = "white";
        zc.style.color = "black";
        check = true;
    }
}