(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".cssload");

    let promise = new Promise(function(resolve) {
      setTimeout(() => {
        if (!preloader.classList.contains("loaded")) {
          preloader.classList.add("loaded");
          preloader.closest(".loading").classList.remove("loading");
        }
        resolve();
      }, 3000);
    }).then(function() {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    });
  });
})();
