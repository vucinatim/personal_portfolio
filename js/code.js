// Select DOM items
const portfolioPreviewBtn = document.querySelector("#portfolio-preview");
const musicBoxes = document.querySelectorAll(".project-container");
adjustJobTitles();

function adjustJobTitles() {
  musicBoxes.forEach(element => {
    var children = element.children;
    titleHeight = children[0].scrollHeight;
    element.style.paddingTop = titleHeight / 2 + "px";
  });
}

portfolioPreviewBtn.addEventListener("click", function() {
  alert("You are already viewing this project");
});
