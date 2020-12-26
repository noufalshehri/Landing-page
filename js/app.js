/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/



document.addEventListener("DOMContentLoaded", function () {
    /**
     * Define Global Variables
     *
    */
    const fragment = document.createDocumentFragment();
    const secArray = document.querySelectorAll('.section');
    const navBar = document.querySelector(".navbar__menu");
    const ul = document.querySelector("#navbar__list");
    /**
     * End Global Variables
     * Start Helper Functions
     *
    */
    /**
     * End Helper Functions
     * Begin Main Functions
     *
    */

    // build the nav
    function createNaveMenu() {
        for (let i = 0; i < secArray.length; i++) {
            const li = document.createElement('li');
            const anchor = document.createElement('a');
            fragment.appendChild(li);
            li.appendChild(anchor);
        }
        ul.appendChild(fragment);
        //
        const anchorlist = document.querySelectorAll('li>a');
        for (let i = 0; i < secArray.length; i++) {
            anchorlist[i].setAttribute('href', `#${secArray[i].id}`);
            anchorlist[i].textContent = secArray[i].dataset.nav;
        }

    }
    createNaveMenu();

    // Add class 'active' to section when near top of viewport
    function elementIsInView(element) {
        let bounding = element.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    document.addEventListener('scroll', () => {
        for (let section of secArray)
            if (elementIsInView(document.querySelector(`#${section.id}`)))
                document.querySelector(`#${section.id}`).classList.toggle("your-active-class");
    })
    // scroll up button
    let mainContent = document.querySelector('.main-content');
    mainContent.innerHTML += `<a href="#section1" class="up-btn">^ go up</a>`
});