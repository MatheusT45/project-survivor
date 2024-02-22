import k from "../../kaboom";

export default function loadControls() {
  const player = k.get("player")[0];

  k.onUpdate(() => {
    if (k.isKeyDown("left") || k.isKeyDown("a")) {
      player.scale.x = 2;
      player.move(-player.speed, 0);
    }

    if (k.isKeyDown("right") || k.isKeyDown("d")) {
      player.scale.x = -2;

      player.move(player.speed, 0);
    }

    if (k.isKeyDown("up") || k.isKeyDown("w")) {
      player.move(0, -player.speed);
    }

    if (k.isKeyDown("down") || k.isKeyDown("s")) {
      player.move(0, player.speed);
    }

    if (
      k.isKeyPressed('w') ||
      k.isKeyPressed('s') ||
      k.isKeyPressed('a') ||
      k.isKeyPressed('d') ||
      k.isKeyPressed('up') ||
      k.isKeyPressed('down') ||
      k.isKeyPressed('left') ||
      k.isKeyPressed('right')
    ){
      player.play('walking');
    }

    if (
      k.isKeyReleased() &&
        (
          k.isKeyDown('w') ||
          k.isKeyDown('s') ||
          k.isKeyDown('a') ||
          k.isKeyDown('d') ||
          k.isKeyDown('up') ||
          k.isKeyDown('down') ||
          k.isKeyDown('left') ||
          k.isKeyDown('right')
        )
      ) {
        player.play('walking');
    } else if(k.isKeyReleased()) {
      player.play('idle');
    }
  })
}
