import { GameObj } from "kaboom";
import k from "../kaboom";
import { loadWaveUI } from "./loaders/ui";

export default function loadWaves() {
  k.add([
    'wave-settings',
    {
      value: 1,
      text: `Wave ${1}`,
      maxEnemies: 12,
      enemySpawnRate: 2,
      hasMaxEnemiesReached: false,
      haveAllEnergiesBeenCollected: false,
    }
  ]);
}


export function checkWaveClear() {
  const player = k.get("player")[0];
  const wave = k.get("wave-settings")[0];
  const enemies = k.get("enemy");
  const collectibles = k.get("collectible");

  if (wave.hasMaxEnemiesReached && enemies.length === 0) {
    wave.text = 'Wave Cleared';

    k.onUpdate('collectible', (c: GameObj) => {
      c.moveTo(player.pos.x, player.pos.y, 600);
    });

    if (collectibles.length === 0) {
      wave.haveAllEnergiesBeenCollected = true;
    }
  }

  loadWaveUI();
}