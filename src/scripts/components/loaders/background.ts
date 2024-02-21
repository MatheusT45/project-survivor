import k from "../../kaboom";

export default function loadBackground() {
  // First row
  k.add([
    k.sprite("dirt"),
    k.pos(0, 0),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(411, 0),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(822, 0),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(1233, 0),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(1233, 0),
    k.scale(0.5),
  ]);

  // Second row
  k.add([
    k.sprite("dirt"),
    k.pos(0, 411),
    k.scale(0.5),
  ]);
  

  k.add([
    k.sprite("dirt"),
    k.pos(411, 411),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(822, 411),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(1233, 411),
    k.scale(0.5),
  ]);

  k.add([
    k.sprite("dirt"),
    k.pos(1233, 411),
    k.scale(0.5),
  ]);

  // Map borders
  k.add([
    k.rect(10, 822),
    k.color(0, 0, 255),
    k.pos(0, 0),
    k.area(),
  ])

  k.add([
    k.rect(10, 822),
    k.color(0, 0, 255),
    k.pos(1644, 0),
    k.area(),
  ])

  k.add([
    k.rect(1644, 10),
    k.color(0, 0, 255),
    k.pos(0, 0),
    k.area(),
  ])
  
  k.add([
    k.rect(1654, 10),
    k.color(0, 0, 255),
    k.pos(0, 822),
    k.area(),
  ])
}
