document.addEventListener("DOMContentLoaded", function(event) {
    const togglBtn = document.querySelector(".button-toggle__btn");
    togglBtn.addEventListener("click", function() {
        if (togglBtn.classList.contains("button-toggle__btn--calm")) {
            togglBtn.classList.remove("button-toggle__btn--calm");
            togglBtn.classList.add("button-toggle__btn--active");
          } else {
            togglBtn.classList.add("button-toggle__btn--calm");
            togglBtn.classList.remove("button-toggle__btn--active");
          }
    });

});