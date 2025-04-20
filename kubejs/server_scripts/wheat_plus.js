// priority: 0

// 阻止踩田
BlockEvents.farmlandTrampled((event) => {
  event.cancel();
});

// // 玩家切换世界时设置为冒险模式
// EntityEvents.spawned('player', (event) => {

//   const evServer = event.getServer();
//   const evPlayer = event.getPlayer();
//   const player = evServer ? evServer.getPlayer(evPlayer) : null;

//   if (!player) {
//     console.error('自动切换游戏模式失败：找不到玩家');
//     return;
//   }

//   if (player.isCreative()) {
//     player.setGameMode('adventure');
//   }

// });

// 阻止爆炸
LevelEvents.beforeExplosion((event) => {
  event.cancel();
});
