// See the settings page: https://kaboomjs.com/
import kaboom from "kaboom";

export const k = kaboom({
  canvas: document.getElementById("game") as HTMLCanvasElement,
  background: [ 0, 0, 0],
  font: "sans-serif",
});

export default k;
