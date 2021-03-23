// Create functioning mobile navigation
//  CSS for this starts on line 94 of _mediaQueries partial

// Grab the html elements needed
const mobileNav = document.querySelector('#mobileNav');
const leftContent = document.querySelector('.left');
const rightContent = document.querySelector('.right');

//  On click, toggle a class to make the nav visible
mobileNav.addEventListener('click' , function() {
    leftContent.classList.toggle('onLeft');
    rightContent.classList.toggle('onRight');
})



//  Create functionality for comment section

//  Helper function to build html elements
function makeElement(tagName, className='', textContent='') {
    //  Create the element
    const element = document.createElement(tagName);
    //  If a class name is given add to the element
    if (className) {
        element.classList.add(className);
    }
    // If text is given add to the element
    if (textContent) {
        const text = document.createTextNode(textContent);
        element.appendChild(text);
    }
    return element;
}

//  Helper function to get current date and format as in the comment section 
function getDate() {
    // Get current date
    const date = new Date();
    // Process to get date in the format the comment section uses
    const datePieces = date.toDateString().split(' ');
    datePieces.shift();
    const year = datePieces.pop();
    const month = datePieces.join(' ');
    return `${month},${year}`
}

// Function to build out the comment HTML 
function createComment(postName, postComment, date) {
    //  Overall container for the comment
    const commentElement = makeElement('div', 'container');

    //  Image 
    const imgContainer = makeElement('div', 'imgContainer');
    imgContainer.innerHTML = `<img src="./assets/user.png" alt="blank profile picture">`;

    // Text content
    const textContainer = makeElement('div', 'textContainer');
    // Build elements
    const h4 = makeElement('h4', '', `${postName} `);
    const span = makeElement('span', '', '- Reply');
    h4.appendChild(span);
    const commentP = makeElement('p', '', `${postComment}`);
    const commentDate = makeElement('p', 'date', `${date} at 0 hours ago`)
    // Add to textContainer
    textContainer.appendChild(h4);
    textContainer.appendChild(commentP);
    textContainer.appendChild(commentDate);

    //  Add text and image to container
    commentElement.appendChild(imgContainer);
    commentElement.appendChild(textContainer);

    return commentElement;
}

//  Grab elements needed
const form = document.querySelector('#blogForm');
const name = document.querySelector('#name');
const comment = document.querySelector('#comment');
const commentSection = document.querySelector('#comments');

// Listen for when the comment form is submitted 
form.addEventListener('submit', function(e) {
    //  Prevent page refresh 
    e.preventDefault();
    
    //  Grab form values to be used 
    const postName = name.value;
    const postComment = comment.value;

    //  Get current date
    const date = getDate();
    
    //  Assemble element to add to the dom
    const commentElement = createComment(postName, postComment, date);

    // Add to page
    commentSection.appendChild(commentElement);
})