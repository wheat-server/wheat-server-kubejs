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
const PATH_MODEL = `${MOD_ID}:block`;

/** 纹理文件基础路径 */
const PATH_TEXTURE = `${MOD_ID}:block`;

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
      hasNormal: true, // 普通 / 直线
      hasSlant: false, // 斜线
      hasSide: false,  // 侧边纹理
      isBlank: true,   // 空白
    },
    {
      name: 'road_white',
      label: '路 - 白色',
      texturePath: 'road/content_white',
      hasNormal: true,
      hasSlant: false,
      hasSide: false,
      isBlank: true,
    },
    {
      name: 'road_yellow',
      label: '路 - 黄色',
      texturePath: 'road/content_yellow',
      hasNormal: true,
      hasSlant: false,
      hasSide: false,
      isBlank: true,
    },
    {
      name: 'road_line_single_white',
      label: '路 - 单白线',
      texturePath: 'road/line/single_white',
      hasNormal: true,
      hasSlant: true,
      hasSide: true,
      isBlank: false,
    },
    {
      name: 'road_line_single_yellow',
      label: '路 - 单黄线',
      texturePath: 'road/line/single_yellow',
      hasNormal: true,
      hasSlant: true,
      hasSide: true,
      isBlank: false,
    },
    {
      name: 'road_line_double_white',
      label: '路 - 双白线',
      texturePath: 'road/line/double_white',
      hasNormal: true,
      hasSlant: true,
      hasSide: true,
      isBlank: false,
    },
    {
      name: 'road_line_double_yellow',
      label: '路 - 双黄线',
      texturePath: 'road/line/double_yellow',
      hasNormal: true,
      hasSlant: true,
      hasSide: true,
      isBlank: false,
    },
  ];

  roadBlocksNormal.forEach((config) => {

    /** 方块 ID，包含模组 ID */
    const id = `${MOD_ID}:${config.name}`;

    /** 方块名称文本 */
    const label = (config.label || 'Unknown');

    /** 纹理文件相对路径 */
    const tPath = config.texturePath;

    /** 是否存在侧边纹理 */
    const tSide = config.hasSide;

    // 完整，直线
    if (config.hasNormal) {

      const block = event.create(`${id}_full`, 'basic');
      const suffix = (config.isBlank ? '' : '，直线');

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        renderType: 'cutout',
      });

      if (tPath) {
        block.modelJson = {
          parent: `${PATH_MODEL}/road/base_full`,
          textures: {
            content: `${PATH_TEXTURE}/${tPath}`,
            side: tSide ? `${PATH_TEXTURE}/${tPath}` : undefined
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

      if (tPath) {
        block.modelJson = {
          parent: `${PATH_MODEL}/road/base_full`,
          textures: {
            content: `${PATH_TEXTURE}/${tPath}_slant`,
            side: tSide ? `${PATH_TEXTURE}/${tPath}` : undefined
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

      if (tPath) {
        block.modelJson = {
          parent: `${PATH_MODEL}/road/base_half`,
          textures: {
            content: `${PATH_TEXTURE}/${tPath}`,
            side: tSide ? `${PATH_TEXTURE}/${tPath}` : undefined
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

      if (tPath) {
        block.modelJson = {
          parent: `${PATH_MODEL}/road/base_half`,
          textures: {
            content: `${PATH_TEXTURE}/${tPath}_slant`,
            side: tSide ? `${PATH_TEXTURE}/${tPath}` : undefined
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
    const texture = `${PATH_TEXTURE}/reinforced_concrete/${color.CODE}`;

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

// 注册方块 - 灯
onEvent('block.registry', (event) => {

  console.info(`${LOG_PREFIX} 注册方块 - 灯 - 开始`);

  const keys = Object.keys(COLORS);

  /** 父模型路径 */
  const parent = `${PATH_MODEL}/lamp/modern`;

  keys.forEach((key) => {

    const color = COLORS[key];
    const id = `${MOD_ID}:lamp_modern_${color.CODE}`;
    const block = event.create(id, 'basic');

    // 纹理文件路径前缀
    // wheat_plus:block/lamp_modern/color_
    const tBase = `${PATH_TEXTURE}/lamp_modern/${color.CODE}`;

    setBlockProps(block, {
      boxType: 'full',
      displayName: `现代${color.LABEL_CN}灯`,
      lightLevel: 1,
      material: 'glass',
      renderType: 'translucent',
    });

    block.modelJson = {
      parent: parent,
      textures: {
        glow: `${tBase}_glow`,
        core: `${tBase}_core`,
        particle: `${tBase}_core`
      }
    };

  });

  console.info(`${LOG_PREFIX} 注册方块 - 灯 - 完成`);

});

// 注册物品
// onEvent('item.registry', (event) => {
//   console.info(`${LOG_PREFIX} 注册物品 - 开始`);
//   console.info(`${LOG_PREFIX} 注册物品 - 完成`);
// });

// 注册命令 example
// https://github.com/KubeJS-Mods/KubeJS/blob/1.18/main/common/src/main/java/dev/latvian/mods/kubejs/command/CommandRegistryEventJS.java
onEvent('command.registry', (event) => {

  console.info(`${LOG_PREFIX} 注册命令 - example - 开始`);

  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal('wp-example').then(
      Commands.literal('add').then(
        Commands.argument('name', Arguments.STRING.create(event))
          .executes((ctx) => {

            const arName = Arguments.STRING.getResult(ctx, 'name');
            const msg = `Example ${arName} added.`;

            ctx.source.sendSuccess(msg, true);

            return 1;

          })
      )
    ).then(
      Commands.literal('edit').then(
        Commands.argument('name', Arguments.STRING.create(event)).then(
          Commands.argument('property', Arguments.STRING.create(event))
            .suggests((ctx, builder) => {
              return ctx.source.suggest(['test-1', 'test-2'], builder);
            }).executes((ctx) => {

              const arName = Arguments.STRING.getResult(ctx, 'name');
              const arProperty = Arguments.STRING.getResult(ctx, 'property');
              const msg = `Example property ${arProperty} for ${arName} has been edited.`

              ctx.source.sendSuccess(msg, true);

              return 1;

            })
        )
      )
    ).then(
      Commands.literal('remove').then(
        Commands.argument('name', Arguments.STRING.create(event))
          .executes((ctx) => {

            const arName = Arguments.STRING.getResult(ctx, 'name');

            ctx.source.sendSuccess(`Example ${arName} removed.`, true);

            return 1;

          })
      )
    )
  );

  console.info(`${LOG_PREFIX} 注册命令 - example - 完成`);

});
