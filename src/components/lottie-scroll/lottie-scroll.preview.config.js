const variants = [];

["false", "true"].forEach((playthrough) => {
  [1, 2].forEach((speed) => {
    variants.push({
      name: `lottie scroll${playthrough === 'true' ? ' playthrough' : ''}${speed > 1 ? ` speed x ${speed}` : ''}`,
      context: {
        playthrough,
        speed
      }
    });
  });
});

module.exports = {
  preview: "@preview.scroll",
  name: "lottie scroll",
  context: {
    src: "../../assets/animations/sample--goal-achived.json",
    playthrough: "true",
    speed: 1,
  },
  variants
}
