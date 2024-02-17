import k from '../kaboom';
import { getRandomPosition } from '../utils/random';

export default function Spawn() {
  k.add([
    'player', // tag the object with "player"
    k.sprite('player', {
      anim: "idle",
    }),
    k.area(),
    k.health(8),
    k.pos(k.center()),
    k.rotate(0),
    k.anchor('center'),
    k.scale(2),
    {
      speed: 320, // custom property to store movement speed
    },
  ], );


  k.loop(0.6, () => {
    const {x, y} = getRandomPosition();

    k.add([
      'enemy', // tag the object with "enemy"
      k.sprite('enemy', {
        anim: "idle",
      }),
      k.area(),
      k.pos(x, y),
      k.scale(1.5),
      k.rotate(0),
      k.anchor('center'),
    ]);
  });
}