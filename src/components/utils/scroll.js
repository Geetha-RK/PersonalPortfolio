// // window.onscroll = () => {
// export const handleScroll = () => {
//     // Get the current scroll position
//     const scrollPosition = window.scrollY;

//   document.querySelector(".mountain").style.marginTop = scrollY + "px";

//   document.querySelector(".trees").style.marginTop = scrollY / 1.5 + "px";

//   document.querySelector(".stars").style.marginTop = scrollY * 2 + "px";

//   document.querySelector(".stars").style.marginRight = scrollY / 5 + "px";


//       // Moon rotation: Rotate slowly as you scroll
//       document.querySelector(".moon").style.transform = `rotate(-${scrollPosition / 0.5}deg)`;

//       // Moon vertical movement: Move upward based on scroll position (parallax effect)
//       document.querySelector(".moon").style.transform += ` translateY(-${scrollPosition * 5}px)`;
  
//       // Moon horizontal movement: Slightly move left based on scroll
//       document.querySelector(".moon").style.transform += ` translateX(-${scrollPosition * 0.1}px)`;

//   document.querySelector(".Home h1").style.marginTop = scrollY + "px";

//   document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;
// };

// src/scroll.js
export const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    // Manipulate elements based on scroll position
    const mountain = document.querySelector('.mountain');
    const trees = document.querySelector('.trees');
    const stars = document.querySelector('.stars');
    const moon = document.querySelector('.moon');
    const homeHeader = document.querySelector('.Home h1');
  
    if (mountain) {
      mountain.style.marginTop = `${scrollPosition}px`;
    }
  
    if (trees) {
      trees.style.marginTop = `${scrollPosition / 4.5}px`;
    }
  
    if (stars) {
      stars.style.marginTop = `${scrollPosition * 2}px`;
      stars.style.marginRight = `${scrollPosition / 5}px`;
    }
  
    if (moon) {
      moon.style.transform = `rotate(-${scrollPosition / 2.5}deg) translateY(-${scrollPosition * 5}px) translateX(-${scrollPosition * 2}px)`;
    }
  
    if (homeHeader) {
      homeHeader.style.marginTop = `${scrollPosition}px`;
      homeHeader.style.opacity = `${(200 - scrollPosition) / 200}`;
    }
  };
  