// priority: 0

console.info(`${global.LOG_PREFIX} 注册 wheat_plus 相关内容`);

/** 模组 ID */
const modID = 'wheat_plus';

/**
 * @description 设置方块碰撞箱属性
 * @param {Internal.BlockBuilder} block
 * @param {'full'|'half'}         type
 */
const setBlockBoxProps = function (block, type) {
  if (type === 'full') {
    block.box(0, 0, 0, 16, 16, 16, true);
    block.fullBlock(true);
    block.opaque(true);
  } else if (type === 'half') {
    block.box(0, 0, 0, 16, 8, 16, true);
    block.fullBlock(false);
    block.opaque(false);
  }
};

// 注册方块
onEvent('block.registry', (event) => {

  console.info(`${global.LOG_PREFIX} 注册方块 - 开始`);

  /** 模型文件基础路径 */
  const modelPathBase = `${modID}:block/`;

  /** 纹理文件基础路径 */
  const texturePathBase = `${modID}:block/`;

  /** 路方块基础属性 */
  const roadBlockAttrs = {
    hardness: 8.0,
    lightLevel: 0,
    material: 'rock',
    renderType: 'cutout',
    resistance: 16.0,
  };

  /** 普通路方块 */
  const roadBlocksNormal = [
    {
      name: 'road_blank',
      label: '路 - 空白',
      texturePath: 'transparent',
      hasNormal: true,
      hasSlant: false,
    },
    {
      name: 'road_line_single_white',
      label: '路 - 单白线',
      texturePath: 'road/line/single_white',
      hasNormal: true,
      hasSlant: true,
    },
    {
      name: 'road_line_single_yellow',
      label: '路 - 单黄线',
      texturePath: 'road/line/single_yellow',
      hasNormal: true,
      hasSlant: true,
    },
    {
      name: 'road_line_double_white',
      label: '路 - 双白线',
      texturePath: 'road/line/double_white',
      hasNormal: true,
      hasSlant: true,
    },
    {
      name: 'road_line_double_yellow',
      label: '路 - 双黄线',
      texturePath: 'road/line/double_yellow',
      hasNormal: true,
      hasSlant: true,
    },
  ];

  roadBlocksNormal.forEach((config) => {

    /** 方块 ID，包含模组 ID */
    const id = `${modID}:${config.name}`;

    /** 方块名称文本 */
    const label = (config.label || 'Unknown');

    /** 纹理文件相对路径 */
    const texturePath = config.texturePath;

    // 完整，直线
    if (config.hasNormal) {

      const block = event.create(`${id}_full`, 'basic');

      block.displayName(`${label}，完整，直线`);

      setBlockBoxProps(block, 'full');

      if (texturePath) {
        block.modelJson = {
          parent: `${modelPathBase}road/base_full`,
          textures: {
            content: `${texturePathBase}${texturePath}`,
            side: `${texturePathBase}${texturePath}`
          }
        };
      }

      for (let attr in roadBlockAttrs) {
        block[attr](roadBlockAttrs[attr]);
      }

    }

    // 完整，斜线
    if (config.hasSlant) {

      const block = event.create(`${id}_full_slant`, 'basic');

      block.displayName(`${label}，完整，斜线`);

      setBlockBoxProps(block, 'full');

      if (texturePath) {
        block.modelJson = {
          parent: `${modelPathBase}road/base_full`,
          textures: {
            content: `${texturePathBase}${texturePath}_slant`,
            side: `${texturePathBase}${texturePath}`
          }
        };
      }

      for (let attr in roadBlockAttrs) {
        block[attr](roadBlockAttrs[attr]);
      }

    }

    // 一半，直线
    if (config.hasNormal) {

      const block = event.create(`${id}_half`, 'basic');

      block.displayName(`${label}，一半，直线`);

      setBlockBoxProps(block, 'half');

      if (texturePath) {
        block.modelJson = {
          parent: `${modelPathBase}road/base_half`,
          textures: {
            content: `${texturePathBase}${texturePath}`,
            side: `${texturePathBase}${texturePath}`
          }
        };
      }

      for (let attr in roadBlockAttrs) {
        block[attr](roadBlockAttrs[attr]);
      }

    }

    // 一半，斜线
    if (config.hasSlant) {

      const block = event.create(`${id}_half_slant`, 'basic');

      block.displayName(`${label}，一半，斜线`);

      setBlockBoxProps(block, 'half');

      if (texturePath) {
        block.modelJson = {
          parent: `${modelPathBase}road/base_half`,
          textures: {
            content: `${texturePathBase}${texturePath}_slant`,
            side: `${texturePathBase}${texturePath}`
          }
        };
      }

      for (let attr in roadBlockAttrs) {
        block[attr](roadBlockAttrs[attr]);
      }

    }

  });

  console.info(`${global.LOG_PREFIX} 注册方块 - 完成`);

});

// 注册物品
onEvent('item.registry', (event) => {

  console.info(`${global.LOG_PREFIX} 注册物品 - 开始`);

  // event.create('example_item').displayName('Example Item');

  console.info(`${global.LOG_PREFIX} 注册物品 - 完成`);

});
