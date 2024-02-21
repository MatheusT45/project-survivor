import k from "../../kaboom";

export default function loadBackground() {
  k.addLevel([
    "====",
    "====",
  ], {
    tileWidth: 411,
    tileHeight: 411,
    tiles: {
        "=": () => [
            k.sprite("dirt"),
            k.scale(0.5),
        ],
    }
  })

  // Map borders
  k.add([
    k.rect(10, 822),
    k.color(0, 0, 255),
    k.pos(0, 0),
    k.area(),
    k.body({ isStatic: true}),
  ])

  k.add([
    k.rect(10, 822),
    k.color(0, 0, 255),
    k.pos(1644, 0),
    k.area(),
    k.body({ isStatic: true}),
  ])

  k.add([
    k.rect(1644, 10),
    k.color(0, 0, 255),
    k.pos(0, 0),
    k.area(),
    k.body({ isStatic: true}),
  ])
  
  k.add([
    k.rect(1654, 10),
    k.color(0, 0, 255),
    k.pos(0, 822),
    k.area(),
    k.body({ isStatic: true}),
  ])
}
