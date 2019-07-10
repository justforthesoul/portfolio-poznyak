document.addEventListener("DOMContentLoaded", function(event) {
  const parallaxMountain = document.querySelector(".parallax-mountain");
  const mountainLayers = parallaxMountain.querySelectorAll(
    ".parallax-mountain__layer"
  );

  function moveMoutainsLayerOnScroll(wScroll) {
    mountainLayers.forEach(layer => {
      if (wScroll <= 1700) {
        const divider = layer.dataset.speed;
        const strafe = (wScroll * divider) / 2000;
        layer.style.transform = `translateY(-${strafe}%)`;
      }
    });
  }

  window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveMoutainsLayerOnScroll(wScroll);
  });
});
