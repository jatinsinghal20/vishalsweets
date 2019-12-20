/**
 * Created by Mr Jatin on 3/29/2018.
 */
document.onload = start();
var up = false;

var canvas  =  document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");

var X = 0;
var Y =0;
var startTime;
var openTime;
var index =0;
var box_Opened = false

images = ["images/gift.png","images/1.png","images/2.png","images/3.png"]

var nums = [1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
canvas.addEventListener('click', function(event) {
    clearInterval(startTime);
    X=0;
    Y=0;
    openBox();
});

function start(){
   startTime = setInterval(function () {
        update();
        draw(0);
    },1000/30);

}

function draw(index){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var img = new Image();
    if(index===4){
        index = 3;
        clearInterval(openTime);
        box_Opened = true
    }
    img.src = images[index];
    ctx.drawImage(img,X,Y,canvas.width,canvas.height);
    if(box_Opened){
        showImages();
    }
}

function update(){
    if(Y===10){
        up= true;
    }
    if(up)
        Y--;
    else Y++;

    if(Y===0){
        up=false;
    }
}

function openBox(){
    openTime = setInterval(function () {
        index++;
        draw(Math.floor(index/130));
    },1000/90);
}

function showImages(){
    var img = document.getElementById("Surprise");
    img.classList.remove("hidden");
    img.offsetWidth = img.offsetWidth;
    img.classList.add("animate");

    var audio = document.getElementById("audio");
    audio.play();



    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime()) {}

    document.getElementById("pics").classList.add("back");
    var id = 0;
   startTime = setInterval(function(){
       unhideImage(id++);
   },1000)
}


function unhideImage(id){
    if(id===63){
        clearInterval(startTime);
        document.getElementById("pics").classList.remove("back");
        document.getElementById("pics").classList.add("back1");
    }
    var index = "i"+ranNums[id];

    var img = document.getElementById(index);
    img.classList.remove("hidden");
    img.offsetWidth = img.offsetWidth;
    img.classList.add("animate");
}

