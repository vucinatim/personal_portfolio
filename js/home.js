// Select DOM items
const jobs = document.querySelectorAll(".job");
adjustJobTitles();

// scroll stuff
// The debounce function receives our function as a parameter

const debounce = fn => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};
document.addEventListener("scroll", debounce(storeScroll), { passive: true });
// Update scroll position for first time
storeScroll();

// Click the read more btn
readMore.addEventListener("click", function() {
  window.scrollTo({
    top: 950,
    behavior: "smooth"
  });
});

window.onresize = adjustJobTitles;

function adjustJobTitles() {
  jobs.forEach(element => {
    var children = element.children;
    titleHeight = children[0].scrollHeight;
    element.style.paddingTop = titleHeight / 2 + "px";
  });
}
