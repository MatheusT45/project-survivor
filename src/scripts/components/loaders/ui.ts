import k from "../../kaboom";

export default function loadUI() {
  k.add([
    'points-counter',
    k.text("$ 0"),
    k.pos(24, 24),
    { value: 0 },
  ]);
  
  k.add([
    'wave-counter',
    k.text("Wave 1"),
    k.anchor("center"),
    k.pos(k.center().x, 24),
  ]);

  loadPlayerHealthBar();
}

export function loadPlayerHealthBar() {
  const player = k.get("player")[0];

  player.add([
    'player-hp-bar',
    'ui',
    k.anchor('center'),
    k.rect(26, 6),
    k.color(0, 0, 0),
    k.pos(0, 20),
  ]);

  player.add([
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
    enemies.forEach((enemy) => {
      enemy.add([
        k.anchor('center'),
        k.rect(26, 6),
        k.color(0, 0, 0),
        k.pos(0, 20),
      ]);

      enemy.add([
        k.anchor('center'),
        k.rect((24 * enemy.hp())/enemy.maxHealth, 4),
        k.color(255, 0, 0),
        k.pos(0, 20),
      ]);
    });
}