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