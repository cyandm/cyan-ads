export function Tabs() {
  const tabsContainer = document.getElementById("servicesTabs");
  if (!tabsContainer) return;

  const tabButtons = tabsContainer.querySelectorAll("button[data-tab]");
  const tabContents = tabsContainer.querySelectorAll(
    ".tab-content > div[data-tab]"
  );

  // Show first tab content
  tabContents.forEach((content, index) => {
    if (index === 0) {
      content.classList.add("opacity-100");
      content.classList.remove("opacity-0");
      content.style.pointerEvents = "auto";
    } else {
      content.classList.add("opacity-0");
      content.classList.remove("opacity-100");
      content.style.pointerEvents = "none";
    }
  });

  // Add active class to first tab
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add("bg-white", "text-[#000A30]");
    tabButtons[0].classList.replace("text-white", "text-[#000A30]");
  }

  // Add click event to tabs
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");

      // Remove active classes from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("bg-white");
        btn.classList.replace("text-[#000A30]", "text-white");
      });

      // Add active class to clicked button
      button.classList.add("bg-white");
      button.classList.replace("text-white", "text-[#000A30]");

      // Handle content visibility
      tabContents.forEach((content) => {
        if (content.getAttribute("data-tab") === tabId) {
          content.classList.remove("opacity-0");
          content.classList.add("opacity-100");
          content.style.pointerEvents = "auto";
        } else {
          content.classList.remove("opacity-100");
          content.classList.add("opacity-0");
          content.style.pointerEvents = "none";
        }
      });
    });
  });
}
