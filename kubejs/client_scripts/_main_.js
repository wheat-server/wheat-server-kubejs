// priority: 100

const JSON_ASSETS = global.JSON_ASSETS;
const LOG_PREFIX = global.LOG_PREFIX;

console.info(`${LOG_PREFIX} 加载客户端内容`);

// 生成客户端资源
ClientEvents.generateAssets('after_mods', function (event) {

  console.info(`${LOG_PREFIX} 生成客户端资源 - 开始`);

  if (Array.isArray(JSON_ASSETS)) {
    JSON_ASSETS.forEach((item) => {
      event.json(item.path, item.data);
    });
  } else {
    console.error(`${LOG_PREFIX} 生成客户端资源 - 异常 - 列表不是数组`);
  }

  console.info(`${LOG_PREFIX} 生成客户端资源 - 结束`);

});
