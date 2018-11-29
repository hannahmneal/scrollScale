const audrey = document.getElementById("audrey")
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

let audreyScroll = document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    // let audreyWidth = document.getElementById("container").style.minWidth = "50px";
    // window.scrollY = container
    // min-height of container = 1500px
    // 50px > width of audrey  < 33% of container 
    // 100px > height of audrey < 25% of container

    // let audreyHeight = document.getElementById("container").style.minWidth = "100px";

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

    audrey.style.width = window.scrollY + "px"
    audrey.style.height = window.scrollY + "px"


})
