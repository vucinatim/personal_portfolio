// Select DOM items
const musicBoxes = document.querySelectorAll(".music-container");
adjustJobTitles();

function adjustJobTitles() {
  musicBoxes.forEach(element => {
    var children = element.children;
    titleHeight = children[0].scrollHeight;
    element.style.paddingTop = titleHeight / 2 + "px";
  });
}
