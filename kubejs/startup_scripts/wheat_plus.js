// priority: 0

const defaults = global.defaults;
const COLORS = global.COLORS;
const LOG_PREFIX = global.LOG_PREFIX;

/**
 * @desc 方块构造器
 * @typedef B.Builder
 * @type {Internal.BlockBuilder}
 */

/**
 * @desc 方块碰撞箱类型
 * @typedef B.BoxType
 * @type {'full'|'half'}
 */

/**
 * @desc 方块材质类型
 * @typedef B.Material
 * @type {Internal.MaterialJS_}
 */

/**
 * @desc 方块渲染类型
 * - `cutout`: required for blocks with texture like glass
 * - `translucent`: required for blocks like stained glass
 * @typedef B.RenderType
 * @type {'solid'|'cutout'|'translucent'}
 */

/** 模组 ID */
const MOD_ID = 'wheat_plus';

/** 模型文件基础路径 */
const PATH_MODEL = `${MOD_ID}:block/`;

/** 纹理文件基础路径 */
const PATH_TEXTURE = `${MOD_ID}:block/`;

/**
 * @description 设置方块基础属性
 * @param {B.Builder}    block
 * @param {object}       options
 * @param {B.BoxType}    options.boxType     碰撞箱类型
 * @param {string}       options.displayName
 * @param {number}       options.hardness
 * @param {boolean}      options.isFull      是否完整方块
 * @param {boolean}      options.isOpaque    是否不透明
 * @param {number}       options.lightLevel  范围 0 ~ 1
 * @param {B.Material}   options.material
 * @param {B.RenderType} options.renderType
 * @param {number}       options.resistance
 */
const setBlockProps = function (block, options) {

  if (!block) {
    console.error(`${LOG_PREFIX} 设置方块属性失败：缺少“block”参数`);
    return false;
  }

  if (!options) {
    options = {};
  }

  const boxType = defaults(options.boxType, '');
  const displayName = defaults(options.displayName, '');
  const hardness = defaults(options.hardness, 8);
  const isFull = defaults(options.isFull, true);
  const isOpaque = defaults(options.isOpaque, true);
  const lightLevel = defaults(options.lightLevel, 0);
  const material = defaults(options.material, 'stone');
  const renderType = defaults(options.renderType, 'solid');
  const resistance = defaults(options.resistance, 16);

  if (displayName) {
    block.displayName(displayName);
  }

  if (boxType === 'full') {
    block.box(0, 0, 0, 16, 16, 16, true);
  } else if (boxType === 'half') {
    block.box(0, 0, 0, 16, 8, 16, true);
  }

  block.fullBlock(isFull);
  block.hardness(hardness);
  block.lightLevel(lightLevel);
  block.opaque(isOpaque);
  block.material(material);
  block.renderType(renderType);
  block.resistance(resistance);

  return true;

};

console.info(`${LOG_PREFIX} 处理 ${MOD_ID} 相关内容`);

// 注册方块 - 路
onEvent('block.registry', (event) => {

  console.info(`${LOG_PREFIX} 注册方块 - 路 - 开始`);

  /** 普通路方块 */
  const roadBlocksNormal = [
    {
      name: 'road_blank',
      label: '路 - 空白',
      texturePath: 'transparent',
      hasNormal: true,
      hasSlant: false,
      isBlank: true,
    },
    {
      name: 'road_line_single_white',
      label: '路 - 单白线',
      texturePath: 'road/line/single_white',
      hasNormal: true,
      hasSlant: true,
      isBlank: false,
    },
    {
      name: 'road_line_single_yellow',
      label: '路 - 单黄线',
      texturePath: 'road/line/single_yellow',
      hasNormal: true,
      hasSlant: true,
      isBlank: false,
    },
    {
      name: 'road_line_double_white',
      label: '路 - 双白线',
      texturePath: 'road/line/double_white',
      hasNormal: true,
      hasSlant: true,
      isBlank: false,
    },
    {
      name: 'road_line_double_yellow',
      label: '路 - 双黄线',
      texturePath: 'road/line/double_yellow',
      hasNormal: true,
      hasSlant: true,
      isBlank: false,
    },
  ];

  roadBlocksNormal.forEach((config) => {

    /** 方块 ID，包含模组 ID */
    const id = `${MOD_ID}:${config.name}`;

    /** 方块名称文本 */
    const label = (config.label || 'Unknown');

    /** 纹理文件相对路径 */
    const texturePath = config.texturePath;

    // 完整，直线
    if (config.hasNormal) {

      const block = event.create(`${id}_full`, 'basic');
      const suffix = (config.isBlank ? '' : '，直线');

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        renderType: 'cutout',
      });

      if (texturePath) {
        block.modelJson = {
          parent: `${PATH_MODEL}road/base_full`,
          textures: {
            content: `${PATH_TEXTURE}${texturePath}`,
            side: `${PATH_TEXTURE}${texturePath}`
          }
        };
      }

    }

    // 完整，斜线
    if (config.hasSlant) {

      const block = event.create(`${id}_full_slant`, 'basic');
      const suffix = (config.isBlank ? '' : '，斜线');

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        renderType: 'cutout',
      });

      if (texturePath) {
        block.modelJson = {
          parent: `${PATH_MODEL}road/base_full`,
          textures: {
            content: `${PATH_TEXTURE}${texturePath}_slant`,
            side: `${PATH_TEXTURE}${texturePath}`
          }
        };
      }

    }

    // 一半，直线
    if (config.hasNormal) {

      const block = event.create(`${id}_half`, 'basic');
      const suffix = (config.isBlank ? '' : '，直线');

      setBlockProps(block, {
        boxType: 'half',
        displayName: `${label}，一半${suffix}`,
        renderType: 'cutout',
      });

      if (texturePath) {
        block.modelJson = {
          parent: `${PATH_MODEL}road/base_half`,
          textures: {
            content: `${PATH_TEXTURE}${texturePath}`,
            side: `${PATH_TEXTURE}${texturePath}`
          }
        };
      }

    }

    // 一半，斜线
    if (config.hasSlant) {

      const block = event.create(`${id}_half_slant`, 'basic');
      const suffix = (config.isBlank ? '' : '，斜线');

      setBlockProps(block, {
        boxType: 'half',
        displayName: `${label}，一半${suffix}`,
        renderType: 'cutout',
      });

      if (texturePath) {
        block.modelJson = {
          parent: `${PATH_MODEL}road/base_half`,
          textures: {
            content: `${PATH_TEXTURE}${texturePath}_slant`,
            side: `${PATH_TEXTURE}${texturePath}`
          }
        };
      }

    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 路 - 完成`);

});

// 注册方块 - 强化混凝土
onEvent('block.registry', (event) => {

  console.info(`${LOG_PREFIX} 注册方块 - 强化混凝土 - 开始`);

  const keys = Object.keys(COLORS);

  keys.forEach((key) => {

    const color = COLORS[key];
    const id = `${MOD_ID}:reinforced_concrete_${color.CODE}`;
    const block = event.create(id, 'basic');
    const texture = `${PATH_TEXTURE}reinforced_concrete/${color.CODE}`;

    setBlockProps(block, {
      boxType: 'full',
      displayName: `${color.LABEL_CN}强化混凝土`,
    });

    block.modelJson = {
      parent: 'minecraft:block/cube_all',
      textures: { all: texture },
    };

  });

  console.info(`${LOG_PREFIX} 注册方块 - 强化混凝土 - 完成`);

});

// 注册物品
// onEvent('item.registry', (event) => {
//   console.info(`${LOG_PREFIX} 注册物品 - 开始`);
//   console.info(`${LOG_PREFIX} 注册物品 - 完成`);
// });
