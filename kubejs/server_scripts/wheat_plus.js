// priority: 0

// 玩家切换世界时设置为冒险模式（KubeJS Additions）
onEvent('player.change_dimension', (event) => {

  const evServer = event.getServer();
  const evPlayer = event.getPlayer();
  const player = evServer ? evServer.getPlayer(evPlayer) : null;

  if (!player) {
    console.error('自动切换游戏模式失败：找不到玩家');
    return;
  }

  if (player.isCreativeMode()) {
    player.setGameMode('adventure');
  }

});
