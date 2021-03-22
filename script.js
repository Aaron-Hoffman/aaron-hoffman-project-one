// Create functioning mobile navigation

// Grab the html elements I will need 
const mobileNav = document.querySelector('#mobileNav');
const leftContent = document.querySelector('.left');
const rightContent = document.querySelector('.right');

//  On click, toggle a class to make the nav visible
mobileNav.addEventListener('click' , function() {
    leftContent.classList.toggle('onLeft');
    rightContent.classList.toggle('onRight');
})



//  Create functionality for comment section

//  Grab elements I will need
const form = document.querySelector('#blogForm');
const name = document.querySelector('#name');
const comment = document.querySelector('#comment');
const commentSection = document.querySelector('#comments');

// Listen for when the comment form is submitted 
form.addEventListener('submit', function(e) {
    //  Prevent page refresh 
    e.preventDefault();
    
    //  Grab form values to be used 
    let postName = name.value;
    let postComment = comment.value;

    //  Get current date
    let date = new Date();
    let datePieces = date.toDateString().split(' ');
    datePieces.shift();
    let year = datePieces.pop();
    let month = datePieces.join(' ');
    


    //  Assemble element to add to the dom
    let htmlToAppend = `<div class="container">
    <div class="imgContainer">
        <img src="./assets/user.png" alt="Headshot of the commenter">
    </div>
    <div class="textContainer">
        <h4>${postName} <span>- Reply</span></h4>
        <p>${postComment}</p>
        <p class="date">${month},${year} at 0 hours ago</p>
    </div>
    </div>`;

    //  Add to the page
    commentSection.insertAdjacentHTML("beforeend", htmlToAppend);
})


// {/* <div class="container">
//     <div class="imgContainer">
//          <img src="./assets/blog-6.jpeg" alt="Headshot of the commenter">
//     </div>
//     <div class="textContainer">
//         <h4>Daniel Vandaft <span>- Reply</span></h4>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, fuga. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//         <p class="date">Jul 17,2015 at 15 hours ago</p>
//     </div>
// </div> */}