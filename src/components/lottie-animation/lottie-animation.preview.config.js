const variants = [];

["false", "true"].forEach((autoplay) => {
  ["false", "true"].forEach((loop) => {
    variants.push({
      name: `${autoplay === 'true' ? '' : 'no '}autoplay ${loop === 'true' ? '' : 'no '}loop`,
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
  title: "lottie animation",
  context: {
    src: "../../assets/animations/sample--goal-achived.json",
    loop: "false",
    autoplay: "true",
  },
  variants
}
