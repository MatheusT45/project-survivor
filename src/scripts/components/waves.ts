import { GameObj } from "kaboom";
import k from "../kaboom";
import { loadWaveUI } from "./loaders/ui";
import { spawnEnemyWave } from "./spawner";

export default function loadWaves() {
  k.add([
    'wave-settings',
    {
      value: 1,
      text: `Wave ${1}`,
      maxEnemies: 12,
      enemiesSpawned: 0,
      enemySpawnRate: 2,
      hasMaxEnemiesReached: false,
      haveAllEnergiesBeenCollected: false,
    }
  ]);
}


export function checkWaveClear(absorb: boolean = false) {
  const player = k.get("player")[0];
  const wave = k.get("wave-settings")[0];
  const enemies = k.get("enemy");
  const collectibles = k.get("collectible");

  if (wave.hasMaxEnemiesReached && enemies.length === 0) {
    wave.text = 'Wave Cleared';

    k.onUpdate('collectible', (c: GameObj) => {
      if (wave.hasMaxEnemiesReached && enemies.length === 0 && absorb) {
        c.moveTo(player.pos.x, player.pos.y, 600);
      }
    });
    
    if (collectibles.length === 0) {
      wave.haveAllEnergiesBeenCollected = true;

      k.wait(2, () => {
        wave.value++;
        wave.text = `Wave ${wave.value}`;
        wave.hasMaxEnemiesReached = false;
        wave.haveAllEnergiesBeenCollected = false;
        wave.maxEnemies += 14 + (wave.value * 2);
        wave.enemySpawnRate -= 0.1;

        loadWaveUI();
        spawnEnemyWave();
      });
    }
  }

  loadWaveUI();
}