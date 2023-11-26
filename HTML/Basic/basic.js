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