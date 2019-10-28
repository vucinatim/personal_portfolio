// Select DOM items
const expandBtns = document.querySelectorAll(".expand-btn");

expandBtns.forEach(function(exBtn) {
  exBtn.addEventListener("click", function() {
    if (exBtn.style.transform) exBtn.style.transform = null;
    else exBtn.style.transform = "rotateX(180deg)";
    let hiddenItems = exBtn.parentElement.querySelectorAll(".hidden");
    let expansion = exBtn.previousElementSibling;
    hiddenItems.forEach(function(hiddItem) {
      if (hiddItem.classList.contains("show")) {
        hiddItem.classList.remove("show");
      } else {
        hiddItem.classList.add("show");
      }
    });
    if (expansion.style.maxHeight) expansion.style.maxHeight = null;
    else expansion.style.maxHeight = expansion.scrollHeight + "px";
  });
});
