import { GameObj } from "kaboom";
import k from "../../kaboom";

export default function loadUI() {
  k.add([
    'points-counter',
    k.text("$ 0"),
    k.pos(24, 24),
    { value: 0 },
    k.fixed(),
  ]);

  loadPlayerHealthBar();
  loadWaveUI();
  loadMobileControlUI();
}

export function loadWaveUI() {
  const wave = k.get("wave-settings")[0];

  if(k.get("wave-counter")[0]) k.destroy(k.get("wave-counter")[0]);

  k.add([
    'wave-counter',
    k.text(wave.text),
    k.anchor("center"),
    k.pos(k.center().x, 24),
    k.fixed(),
  ]);
}

export function loadPlayerHealthBar() {
  const player = k.get("player")[0];

  if(k.get("player-hp-bar")[0]) k.destroy(k.get("player-hp-bar")[0]);
  if(k.get("player-hp-bar-outline")[0]) k.destroy(k.get("player-hp-bar-outline")[0]);

  player.add([
    'player-hp-bar-outline',
    'ui',
    k.anchor('center'),
    k.rect(26, 6),
    k.color(0, 0, 0),
    k.pos(0, 20),
  ]);

  player.add([
    'player-hp-bar',
    'ui',
    k.anchor('center'),
    k.scale(),
    k.rect((24 * player.hp())/player.maxHealth, 4),
    k.color(0, 255, 0),
    k.pos(0, 20),
  ]);
}

export function loadEnemyHealthBar() {
  const enemies = k.get("enemy");
  
  if(k.get("enemies-hp-bar")[0]) k.destroy(k.get("enemies-hp-bar")[0]);
  if(k.get("enemies-hp-bar-outline")[0]) k.destroy(k.get("enemies-hp-bar-outline")[0]);

  enemies.forEach((enemy) => {
    enemy.add([
      'enemy-hp-bar-outline',
      k.anchor('center'),
      k.rect(26, 6),
      k.color(0, 0, 0),
      k.pos(0, 20),
    ]);

    enemy.add([
      'enemy-hp-bar',
      k.anchor('center'),
      k.rect((24 * enemy.hp())/enemy.maxHealth, 4),
      k.color(255, 0, 0),
      k.pos(0, 20),
    ]);
  });
}

export function loadMobileControlUI() {
  const player = k.get("player")[0];

  let moveUp: GameObj;
  let moveRight: GameObj;
  let moveLeft: GameObj;
  let moveDown: GameObj;
  let pointer: GameObj;

  k.onMousePress(() => {
    player.play('walking');
    moveUp = k.add([
      k.sprite("arrow-button"),
      k.pos(k.mousePos().x, k.mousePos().y - 70),
      k.scale(3),
      k.area(),
      k.rotate(180),
      k.anchor("center"),
      k.fixed(),
      "arrow",
      "arrow-up",
      k.z(1),
      k.opacity(0.5)
    ]);
  
    moveRight = k.add([
      k.sprite("arrow-button"),
      k.pos(k.mousePos().x + 75, k.mousePos().y),
      k.scale(3),
      k.area(),
      k.anchor("center"),
      k.rotate(270),
      k.fixed(),
      "arrow",
      "arrow-right",
      k.z(1),
      k.opacity(0.5)
    ]);
  
    moveLeft = k.add([
      k.sprite("arrow-button"),
      k.pos(k.mousePos().x - 75, k.mousePos().y),
      k.scale(3),
      k.area(),
      k.anchor("center"),
      k.rotate(90),
      k.fixed(),
      "arrow",
      "arrow-left",
      k.z(1),
      k.opacity(0.5)
    ]);
  
    moveDown = k.add([
      k.sprite("arrow-button"),
      k.pos(k.mousePos().x, k.mousePos().y + 70),
      k.scale(3),
      k.area(),
      k.anchor("center"),
      k.fixed(),
      "arrow",
      "arrow-down",
      k.z(1),
      k.opacity(0.5)
    ]);
  
    pointer = k.add([
      k.sprite("pointer"),
      k.pos(k.mousePos()),
      k.scale(2),
      k.area({ scale: 1.5 }),
      k.anchor("center"),
      k.fixed(),
      "pointer",
      k.opacity(0.2)
    ]);
    
    pointer.onUpdate(() => {
      if (pointer.isColliding(moveUp)) {
        if (player.pos.y > 0) {
          player.move(0, -player.speed);
        }
      }
      if (pointer.isColliding(moveDown)) {
        if (player.pos.y < k.height()) {
          player.move(0, player.speed);
        }
      }
      if (pointer.isColliding(moveLeft)) {
        if (player.pos.x > 0) {
          player.scale.x = 2;
          player.move(-player.speed, 0);
        }
      }
      if (pointer.isColliding(moveRight)) {
        if (player.pos.x < k.width()) {
          player.scale.x = -2;
          player.move(player.speed, 0);
        }
      }
    });
  });

  k.onMouseDown(() => {
    pointer.pos = k.mousePos();
  });

  k.onMouseRelease(() => {
    player.play('idle');
    pointer.pos.x = 0;
    pointer.pos.y = 0;
    k.destroy(moveUp);
    k.destroy(moveRight);
    k.destroy(moveLeft);
    k.destroy(moveDown);
    k.destroy(pointer);
  })
}