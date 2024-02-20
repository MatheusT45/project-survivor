import { GameObj } from "kaboom";
import k from "../../kaboom";

export function loadPlayerAttack(player: GameObj) {
  player.attackloopEvent = k.loop(player.attackSpeed, () => {
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
};

export default function loadAnimations() {
  const player = k.get("player")[0];

  loadPlayerAttack(player);

  k.onUpdate('enemy', (e: GameObj) => {
    e.moveTo(player.pos.x, player.pos.y, e.speed);
  });
}
