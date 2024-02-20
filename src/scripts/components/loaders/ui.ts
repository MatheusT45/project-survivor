import k from "../../kaboom";

export default function loadUI() {
  k.add([
    'points-counter',
    k.text("$ 0"),
    k.pos(24, 24),
    { value: 0 },
  ]);
  
  k.add([
    'wave-counter',
    k.text("Wave 1"),
    k.anchor("center"),
    k.pos(k.center().x, 24),
  ]);
}