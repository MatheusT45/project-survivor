import { GameObj } from "kaboom";
import k from "../kaboom";

export default function Collisions() {
  const player = k.get("player")[0];

  player.onCollide("enemy", (e: GameObj) => {
    k.destroy(e);
    player.hurt(1);
    k.shake(10);

    if (player.hp() <= 0) {
      k.destroy(player);
    }
  });

  k.onCollide("projectile", "enemy", (pr: GameObj, e: GameObj) => {
    k.destroy(pr);
    k.destroy(e);
    k.shake(2);
  });

  k.onCollide("collectible", "player", (c: GameObj, p: GameObj) => {
    const score = k.get("points-counter")[0];

    k.destroy(c);
    k.shake(1);
    player.points += 1;

    score.text = `$ ${player.points}`;
    score.value = player.points;
  });
  
  k.onCollide("projectile", "enemy", (pr: GameObj, e: GameObj) => {
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
  });
}
