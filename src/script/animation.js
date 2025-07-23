import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".viraglogo");

  if (image) {
    image.addEventListener("mouseenter", () => {
      gsap.fromTo(
        image,
        { rotation: 0 },
        { rotation: 360, duration: 1, ease: "power2.inOut" }
      );
    });
  }
});
