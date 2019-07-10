document.addEventListener("DOMContentLoaded", function(event) {
  let togglBtn = document.querySelector(".button-toggle__btn");
  let popapMenu = document.querySelector(".popap-menu");
  togglBtn.addEventListener("click", function() {
    if (togglBtn.classList.contains("button-toggle__btn--calm")) {
      togglBtn.classList.remove("button-toggle__btn--calm");
      togglBtn.classList.add("button-toggle__btn--active");
      popapMenu.classList.remove("js-hidden");
    } else {
      togglBtn.classList.add("button-toggle__btn--calm");
      togglBtn.classList.remove("button-toggle__btn--active");
      popapMenu.classList.add("js-hidden");
    }
  });
});
