
@@include('../../components/header/header.js', {})
@@include('../../components/action/action.js', {})
@@include('../../components/modal/modal.js', {})

const scrollElements = document.querySelectorAll('.js-scroll');
let throttleTimer = false;

const throttle = (callback, time) => {
  //don't run the function while throttle timer is true
  if (throttleTimer) return;

  //first set throttle timer to true so the function doesn't run
  throttleTimer = true;

  setTimeout(() => {
    //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
    callback();
    throttleTimer = false;
  }, time);
}

const elementInView = (elem, percentageScroll = 100) => {
  const elemTop = elem.getBoundingClientRect().top;

  return (
    ((elemTop <= window.innerHeight || elemTop <= document.documentElement.clientHeight) * (percentageScroll / 100))
  );
}

const displayElement = (element) => {
  element.classList.add("scrolled");
};

const hideElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((elem) => {
    if (elementInView(elem, 100)) {
      displayElement(elem);
    } else {
      hideElement(elem);
    }
  })
}


window.addEventListener('scroll', () => {
  throttle(handleScrollAnimation, 250);
})
