document.addEventListener("DOMContentLoaded", function(event) {
  const parallaxBudda = document.querySelector(".parallax-budda");
  const buddaLayers = parallaxBudda.querySelectorAll(".parallax-budda__layer");

  function moveBuddaLayerOnMousemove(wScrollY, wScrollX) {
    buddaLayers.forEach(layer => {
      const divider = layer.dataset.speed;
      const strafeX = (wScrollX * divider) / 7000;
      const strafeY = (wScrollY * divider) / 3000;
      layer.style.transform = `translate(-${strafeX}%, -${strafeY}%)`;
    });
  }

  const feedback = document.querySelector(".feedback");
  feedback.addEventListener("mousemove", e => {
    const wScrollX = window.event.clientX;
    const wScrollY = window.event.clientY;
    moveBuddaLayerOnMousemove(wScrollY, wScrollX);
  });
});
