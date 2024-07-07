// Get all the elements with the "scroll-animation" class
const scrollAnimationEls = document.querySelectorAll(".scroll-animation");

// Set up a function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Set up a function to handle the scroll event
function handleScroll() {
  // Loop through each "scroll-animation" element
  scrollAnimationEls.forEach((el) => {
    // If the element is in the viewport, add the "fade-in" class
    if (isInViewport(el)) {
      el.classList.add("fade-in");
    } else {
      // Otherwise, remove the "fade-in" class
      el.classList.remove("fade-in");
    }
  });
}

// Add an event listener for the scroll event
window.addEventListener("scroll", handleScroll);

// Call the "handleScroll" function once on page load to check if any elements are already in view
handleScroll();
