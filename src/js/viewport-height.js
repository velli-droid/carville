export function setViewportHeigth() {
    const root = document.querySelector(":root");
    let viewportHeight = window.innerHeight;

    root?.style.setProperty("--viewport-inner-height", `${viewportHeight}px`);
    
    window.addEventListener("resize", function () {
      viewportHeight = window.innerHeight;
      root?.style.setProperty("--viewport-inner-height", `${viewportHeight}px`);
    });
}
  