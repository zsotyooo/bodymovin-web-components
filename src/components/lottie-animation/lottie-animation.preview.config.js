const variants = [];

["false", "true"].forEach((autoplay) => {
  ["false", "true"].forEach((loop) => {
    variants.push({
      name: `lottie animation${autoplay === 'true' ? ' autoplay' : ''}${loop === 'true' ? ' loop' : ''}`,
      context: {
        autoplay,
        loop
      }
    });
  });
});

module.exports = {
  preview: "@preview.50view",
  name: "lottie animation",
  context: {
    src: "../../assets/animations/sample--goal-achived.json",
    loop: "false",
    autoplay: "true",
  },
  variants
}
