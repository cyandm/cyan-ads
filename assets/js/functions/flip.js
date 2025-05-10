export function Flip() {
  if (document.querySelector(".flip")) {
    const moreDetailsButtons = document.querySelectorAll("#more_details");
    const lowDetailsButtons = document.querySelectorAll("#low_details");
    const flipCards = document.querySelectorAll(".flip");

    moreDetailsButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        flipCards[index].classList.add("flipped");
      });
    });

    lowDetailsButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        flipCards[index].classList.remove("flipped");
      });
    });
  }
}

Flip();
