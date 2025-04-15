const tabs = document.querySelectorAll(".tab");
const tabsHeader = document.querySelector(".tabs-header");
const tabsContent = document.querySelectorAll(".tab-content");

function hideTabContent(a) {
  for (let i = a; i < tabsContent.length; i++) {
    tabsContent[i].classList.remove("show");
    tabsContent[i].classList.add("hidden");
  }
}

hideTabContent(1);

function showTabContent(b) {
  if (tabsContent[b].classList.contains("hidden")) {
    tabsContent[b].classList.remove("hidden");
    tabsContent[b].classList.add("show");
  }
}

tabsHeader.addEventListener("click", function (event) {
  let target = event.target;

  if (target && target.classList.contains("tab")) {
    for (let i = 0; i < tabs.length; i++) {
      if (target == tabs[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
});
