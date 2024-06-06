// Select all buttons with the class 'nextprev-btn' for page turning functionality
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

// Add click event listeners to each page turn button
pageTurnBtn.forEach((element, index) => {
    element.onclick = () => {
        // Get the ID of the page to be turned
        const pageTurnId = element.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        // Toggle the 'turn' class to simulate page turning
        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                // Adjust z-index to manage the stacking order of pages
                pageTurn.style.zIndex = 20 - index;
            }, 500); // Delay to allow the turn animation to complete
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500); // Delay to allow the turn animation to complete
        }
    }
})


// Select all right-side pages and the 'Contact Me' button
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

// Add click event listener to the 'Contact Me' button
contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            // Add 'turn' class to simulate page turning
            page.classList.add('turn');
            setTimeout(() => {
                // Adjust z-index after the turn animation
                page.style.zIndex = 20 + index;
            }, 500); // Delay to allow the turn animation to complete
        }, (index + 1) * 200 + 100); // Stagger the page turn timing
    })
}


// Initialize page tracking variables
let totalPages = pages.length;
let pageNumber = 0;

// Function to decrement the page number and wrap around if necessary
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


// Select the 'Back to Profile' button
const backProfileBtn = document.querySelector('.back-profile');

// Add click event listener to the 'Back to Profile' button
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            // Remove 'turn' class to simulate turning the page back
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                // Adjust z-index after the reverse turn animation
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500); // Delay to allow the reverse turn animation to complete
        }, (index + 1) * 200 + 100); // Stagger the reverse page turn timing
    })
}


// Select the right cover and the left page elements
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Initial animations for opening the book
setTimeout(() => {
    coverRight.classList.add('turn'); // Turn the right cover
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1; // Move the right cover behind other elements
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20; // Bring the left page to the front
}, 3200);

// Reverse all pages initially for a reset or initial state
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        // Remove 'turn' class to reset the page turn state
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            // Adjust z-index after the reverse turn animation
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500); // Delay to allow the reverse turn animation to complete
    }, (index + 1) * 200 + 2100); // Stagger the initial reverse page turn timing
})