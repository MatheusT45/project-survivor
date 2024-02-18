import { GameObj } from "kaboom";
import k from "../kaboom";

export default function Animations() {
  k.loop(1, () => {
    const enemies = k.get("enemy");
    const player = k.get("player")[0];

    let closestEnemy = enemies[0];
    enemies.forEach((enemy) => {
      if (player.pos.dist(enemy.pos) < player.pos.dist(closestEnemy.pos)) {
        closestEnemy = enemy;
      }
    });

    if(closestEnemy) {
      const proj = k.add([
        'projectile',
        k.sprite("bullet", {
          anim: "idle",
        }),
        k.pos(player.pos),
        k.area(),
        k.anchor('center'),
        k.rotate(0),
        k.move(closestEnemy.pos.angle(player.pos), 600),
        k.offscreen({ destroy: true }),
      ])

      proj.onUpdate(() => {
        proj.angle += 1000 * k.dt()
    })
    }
  });
  
  const player = k.get("player")[0];

  k.onUpdate('enemy', (e: GameObj) => {
    e.moveTo(player.pos.x, player.pos.y, e.speed);
  });
}
