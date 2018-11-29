
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

let sectionEl = document.addEventListener("scroll", function (audreyWidth, audreyHeight) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    
    let audreyWidth = document.queryGetElementById("#audrey").window.scrollY; 
    // let audreyWidth = document.querySelector("#audrey").width.value; 

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})

