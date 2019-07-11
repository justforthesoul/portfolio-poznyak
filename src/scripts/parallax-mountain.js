document.addEventListener("DOMContentLoaded", function(event) {
  const parallaxMountain = document.querySelector(".parallax-mountain__moving");
  const mountainLayers = parallaxMountain.querySelectorAll(".parallax-mountain__layer");

  function moveMoutainsLayerOnScroll(wScroll) {
    mountainLayers.forEach(layer => {
      if (wScroll <= 1700) {
        const divider = layer.dataset.speed;
        const strafe = (wScroll * divider) / 700;
        layer.style.transform = `translateY(-${strafe}%)`;
      } else {
        return false;
      }
    });
  }

  window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveMoutainsLayerOnScroll(wScroll);
  });
});
