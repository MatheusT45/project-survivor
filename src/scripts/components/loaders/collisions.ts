import { GameObj } from "kaboom";
import k from "../../kaboom";
import { loadEnemyHealthBar, loadPlayerHealthBar } from "./ui";

export default function loadCollisions() {
  const player = k.get("player")[0];

  player.onCollide("enemy", (e: GameObj) => {
    k.destroy(e);
    player.hurt(1);
    loadPlayerHealthBar();
    k.shake(10);

    if (player.hp() <= 0) {
      k.destroy(player);
    }
  });

  k.onCollide("attack", "enemy", (pr: GameObj, e: GameObj) => {
    k.destroy(pr);
    e.hurt(1);
    loadEnemyHealthBar();
    k.shake(2);

    
    if (e.hp() <= 0) {
      k.destroy(e);

      k.add([
        'collectible',
        k.sprite("energy", {
          anim: "idle",
        }),
        k.area({ scale: 2 }),
        k.pos(e.pos),
        k.scale(1),
        k.rotate(0),
        k.anchor("center"),
      ]);
    }
  });

  k.onCollide("collectible", "player", (c: GameObj, p: GameObj) => {
    const score = k.get("points-counter")[0];

    k.destroy(c);
    k.shake(1);
    player.points += 1;

    score.text = `$ ${player.points}`;
    score.value = player.points;
    // upgradePlayerAttackSpeed();
  });
}
