import k from "../../kaboom";

export default function loadBackground() {
  k.addLevel([
    "====",
    "====",
  ], {
    tileWidth: 410,
    tileHeight: 410,
    tiles: {
        "=": () => [
            k.sprite("dirt"),
            k.scale(0.5),
        ],
    }
  })

  // Map borders
  const borderSize = 50;
  const borderHeight = 822;
  const borderwidth = 1644;

  k.add([
    k.rect(borderSize, borderHeight + borderSize + borderSize),
    k.color(0, 0, 255),
    k.opacity(0.2),
    k.pos(-borderSize, -borderSize),
    k.area(),
    k.body({ isStatic: true}),
  ])

  k.add([
    k.rect(borderSize, borderHeight),
    k.color(0, 0, 255),
    k.opacity(0.2),
    k.pos(borderwidth, 0),
    k.area(),
    k.body({ isStatic: true}),
  ])

  k.add([
    k.rect(borderwidth + borderSize , borderSize),
    k.color(0, 0, 255),
    k.opacity(0.2),
    k.pos(0, -borderSize),
    k.area(),
    k.body({ isStatic: true}),
  ])
  
  k.add([
    k.rect(borderwidth + borderSize, borderSize),
    k.color(0, 0, 255),
    k.opacity(0.2),
    k.pos(0, 822),
    k.area(),
    k.body({ isStatic: true}),
  ])
}
