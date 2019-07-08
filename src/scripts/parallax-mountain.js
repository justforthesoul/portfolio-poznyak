document.addEventListener("DOMContentLoaded", function(event) {
  const parallaxMountain = document.querySelector(".parallax-mountain");
  const mountainLayers = parallaxMountain.querySelectorAll(
    ".parallax-mountain__layer"
  );
  console.log(mountainLayers);
  function moveMoutaisLayerOnScroll(wScroll) {
    mountainLayers.forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = (wScroll * divider) / 1200;
      layer.style.transform = `translateY(-${strafe}%)`;
    });
  }

  window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveMoutaisLayerOnScroll(wScroll);
  });
});
