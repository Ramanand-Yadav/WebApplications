let clickCount = 0;



function checkClickCount(){
    if(clickCount%2==0){
        document.getElementById("demo").innerHTML="Asam Tea";
    }else{
        document.getElementById("demo").innerHTML="Coffee";
    }
}
function myFunciton(){
    document.getElementById("myButton").addEventListener('click', function(){
        clickCount++;
        checkClickCount();
    });
}
let myImage = document.querySelector("img");

myImage.onclick=()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc== "/HTML/images/restaurant.jpg"){
        myImage.setAttribute("src", "/HTML/images/download.jpeg");
    }else{
        myImage.setAttribute("src", "/HTML/images/restaurant.jpg");
    }
}