// priority: 100

const JSON_ASSETS = global.JSON_ASSETS;
const LOG_PREFIX = global.LOG_PREFIX;

console.info(`${LOG_PREFIX} 加载客户端内容`);

// 生成客户端资源
//   event.add(new ResourceLocation(`<命名空间>:<资源相对路径>`), `JSON`);
//   event.add(new ResourceLocation(`minecraft:models/block/stone`), {});
onEvent('client.generate_assets', (event) => {

  if (!Array.isArray(JSON_ASSETS)) {
    return;
  }

  console.info(`${LOG_PREFIX} 生成客户端资源 - 开始`);

  // 生成
  JSON_ASSETS.forEach((item) => {
    event.add(new ResourceLocation(item.PATH), item.DATA);
  });

  // 重置
  global.JSON_ASSETS = null;

  console.info(`${LOG_PREFIX} 生成客户端资源 - 完成`);

});
