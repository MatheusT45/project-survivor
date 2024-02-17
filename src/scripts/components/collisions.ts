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
}
