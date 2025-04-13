export function show_more_btn() {
  if (document.querySelector(".parent-buttons")) {
    const buttons_parent = document.querySelector(".parent-buttons");
    const div_buttons = document.querySelector(".div-buttons");
    const parent_height = div_buttons.clientHeight;
    const buttons_handler = document.querySelector(".handler_show_more_btn");

    buttons_handler.addEventListener("click", (e) => {
      buttons_parent.style.height = `${parent_height}px`;
      e.preventDefault();

      setTimeout(() => {
        buttons_parent.style.transition = "height 0.5s ease";
      }, 10);
    });
  }
}

show_more_btn();
