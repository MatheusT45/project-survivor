import k from '../kaboom';
import { getRandomPosition } from '../utils/random';

export default function spawn() {
  k.add([
    'player', // tag the object with "player"
    k.sprite('player', {
      anim: "idle",
    }),
    k.area({ scale: 0.6}),
    k.health(8),
    k.pos(k.center()),
    k.rotate(0),
    k.anchor('center'),
    k.scale(2),
    {
      speed: 320, // custom property to store movement speed
      points: 0,
      attackSpeed: 1,
    },
  ], );


  let enemyCounter = 0;

  const enemySpawnerLoop = k.loop(2, () => {
    const {x, y} = getRandomPosition();

    // prevents enemies from spawning on top of the player
    if (k.get('player')[0].pos.dist(k.vec2(x, y)) < 200) return;

    k.add([
      'enemy', // tag the object with "enemy"
      k.sprite('enemy', {
        anim: "idle",
      }),
      k.area({ scale: 0.7 }),
      k.health(4),
      k.pos(x, y),
      k.scale(1.5),
      k.rotate(0),
      k.anchor('center'),
      {
        speed: 120,
      }
    ]);
    enemyCounter++;
    
    if(enemyCounter === 12) {
      enemySpawnerLoop.cancel();
    }
  });
}