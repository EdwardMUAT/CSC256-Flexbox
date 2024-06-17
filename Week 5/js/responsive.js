 // add an event listener for the window resize event
 window.addEventListener("resize", function(){
    // get the current window width
    var width = window.innerWidth;
    // set up a pointer variable to the header element
    var header = document.querySelector("header");

    // check the width of the window
    if (width < 600){
        header.style.backgroundColor = "green";
        header.style.color = "white";
    }
    else{
        header.style.backgroundColor = "lightgray";
        header.style.color = "darkgray";
    }
});