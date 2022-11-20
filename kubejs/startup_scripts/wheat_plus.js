// priority: 0

const defaults = global.defaults;
const setBlockProps = global.setBlockProps;
const setHorizontalFacing = global.setHorizontalFacing;

const COLORS = global.COLORS;
const JSON_ASSETS = global.JSON_ASSETS;
const LOG_PREFIX = global.LOG_PREFIX;

/** 模组 ID */
const MOD_ID = 'wheat_plus';

/** 方块模型、纹理文件基础短路径 */
const P_BLOCK = `${MOD_ID}:block`;

/** 方块模型文件基础长路径 */
const P_BLOCK_MODEL = `${MOD_ID}:models/block`;

/** 物品模型、纹理文件基础短路径*/
const P_ITEM = `${MOD_ID}:item`;

/** 物品模型文件基础长路径 */
const P_ITEM_MODEL = `${MOD_ID}:models/item`;

console.info(`${LOG_PREFIX} 处理 ${MOD_ID} 相关内容`);

// 注册方块 - 纯色方块
onEvent('block.registry', function (event) {

  console.info(`${LOG_PREFIX} 注册方块 - 纯色方块 - 开始`);

  const blocks = [
    {
      name: 'color_black',
      label: '纯色方块（黑色）',
      color: [0, 0, 0, 1],
    },
    {
      name: 'color_white',
      label: '纯色方块（白色）',
      color: [255, 255, 255, 1],
    },
    {
      name: 'color_blue',
      label: '纯色方块（蓝色）',
      color: [0, 0, 255, 1],
    },
    {
      name: 'color_green',
      label: '纯色方块（绿色）',
      color: [0, 255, 0, 1],
    },
    {
      name: 'color_red',
      label: '纯色方块（红色）',
      color: [255, 0, 0, 1],
    },
    {
      name: 'color_yellow',
      label: '纯色方块（黄色）',
      color: [255, 255, 0, 1],
    },
    {
      name: 'color_39c5bb',
      label: '纯色方块（#39C5BB）',
      color: [57, 197, 187, 1],
    },
    {
      name: 'color_66ccff',
      label: '纯色方块（#66CCFF）',
      color: [102, 204, 255, 1],
    },
  ];
  const texture = `${P_BLOCK}/common/color_base`;

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id, 'basic');

    setBlockProps(block, {
      displayName: config.label,
      isSolid: false,
      material: 'stone',
    });

    block.textureAll(texture);
    block.color(0, Color.rgba.apply(Color, config.color));
    block.item((item) => {
      item.color(0, Color.rgba.apply(Color, config.color));
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 纯色方块 - 完成`);

});

// 注册方块 - 灯（简约）
onEvent('block.registry', function (event) {

  console.info(`${LOG_PREFIX} 注册方块 - 简约灯 - 开始`);

  const blocks = [
    {
      name: 'lamp_simple_large',
      label: '简约灯（大）',
      model: 'lamp/simple_large',
    },
    {
      name: 'lamp_simple_medium',
      label: '简约灯（中）',
      model: 'lamp/simple_medium',
    },
    {
      name: 'lamp_simple_small',
      label: '简约灯（小）',
      model: 'lamp/simple_small',
    },
    {
      name: 'lamp_simple_stripe',
      label: '简约灯（条状）',
      model: 'lamp/simple_stripe',
    },
  ];

  blocks.forEach((config) => {

    const blockName = config.name;
    const blockId = `${MOD_ID}:${blockName}`;
    const block = event.create(blockId, 'stone_button');

    // 用于替换默认模型
    const modelJSON = { parent: `${P_BLOCK}/${config.model}` };

    setBlockProps(block, {
      displayName: config.label,
      lightLevel: 0.8,
      material: 'glass',
      renderType: 'translucent',
    });

    // 按钮方块默认状态
    JSON_ASSETS.push({
      PATH: `${P_BLOCK_MODEL}/${blockName}`,
      DATA: modelJSON,
    });

    // 按钮方块按下状态
    JSON_ASSETS.push({
      PATH: `${P_BLOCK_MODEL}/${blockName}_pressed`,
      DATA: modelJSON,
    });

    // 按钮物品状态
    JSON_ASSETS.push({
      PATH: `${P_ITEM_MODEL}/${blockName}`,
      DATA: modelJSON,
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 简约灯 - 完成`);

});

// 注册方块 - 灯（现代）
onEvent('block.registry', function (event) {

  console.info(`${LOG_PREFIX} 注册方块 - 现代灯 - 开始`);

  const keys = Object.keys(COLORS);

  /** 父模型路径 */
  const parent = `${P_BLOCK}/lamp/modern`;

  keys.forEach((key) => {

    const color = COLORS[key];
    const id = `${MOD_ID}:lamp_modern_${color.CODE}`;
    const block = event.create(id, 'basic');

    // 纹理文件路径前缀
    // wheat_plus:block/lamp_modern/color_
    const tBase = `${P_BLOCK}/lamp_modern/${color.CODE}`;

    setBlockProps(block, {
      boxType: 'full',
      displayName: `现代${color.LABEL_CN}灯`,
      isSolid: false,
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

  console.info(`${LOG_PREFIX} 注册方块 - 现代灯 - 完成`);

});

// 注册方块 - 路
onEvent('block.registry', function (event) {

  console.info(`${LOG_PREFIX} 注册方块 - 路 - 开始`);

  const blockList = [
    {
      name: 'road_blank',
      label: '路 - 空白',
      texturePath: 'common/transparent',
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

  blockList.forEach((config) => {

    /** 方块名称 */
    const blockName = config.name;

    /** 方块文本 */
    const label = (config.label || 'Unknown');

    /** 纹理文件相对路径 */
    const tPath = config.texturePath;

    /** 是否存在侧边纹理 */
    const tSide = config.hasSide;

    // 完整，普通 / 直线
    if (config.hasNormal) {

      const blockId = `${blockName}_full`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId, 'basic');
      const suffix = (config.isBlank ? '' : '，直线');

      const modelPathL = `${P_BLOCK_MODEL}/${blockId}`;
      const modelPathS = `${P_BLOCK}/${blockId}`;
      const modelJSON = {
        parent: `${P_BLOCK}/road/base_full`,
        textures: {
          content: `${P_BLOCK}/${tPath}`,
          side: tSide ? `${P_BLOCK}/${tPath}` : undefined
        }
      };

      JSON_ASSETS.push({ PATH: modelPathL, DATA: modelJSON });

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        modelPath: modelPathS,
        renderType: 'cutout',
      });

    }

    // 完整，斜线
    if (config.hasSlant) {

      const blockId = `${blockName}_full_slant`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId, 'basic');
      const suffix = '，斜线';

      const modelPathL = `${P_BLOCK_MODEL}/${blockId}`;
      const modelPathS = `${P_BLOCK}/${blockId}`;
      const modelJSON = {
        parent: `${P_BLOCK}/road/base_full`,
        textures: {
          content: `${P_BLOCK}/${tPath}_slant`,
          side: tSide ? `${P_BLOCK}/${tPath}` : undefined
        }
      };

      JSON_ASSETS.push({ PATH: modelPathL, DATA: modelJSON });

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        modelPath: modelPathS,
        renderType: 'cutout',
      });

      setHorizontalFacing(block, 'same', modelPathS);

    }

    // 一半，普通 / 直线
    if (config.hasNormal) {

      const blockId = `${blockName}_half`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId, 'basic');
      const suffix = (config.isBlank ? '' : '，直线');

      const modelPathL = `${P_BLOCK_MODEL}/${blockId}`;
      const modelPathS = `${P_BLOCK}/${blockId}`;
      const modelJSON = {
        parent: `${P_BLOCK}/road/base_half`,
        textures: {
          content: `${P_BLOCK}/${tPath}`,
          side: tSide ? `${P_BLOCK}/${tPath}` : undefined
        }
      };

      JSON_ASSETS.push({ PATH: modelPathL, DATA: modelJSON });

      setBlockProps(block, {
        boxType: 'half',
        displayName: `${label}，一半${suffix}`,
        modelPath: modelPathS,
        renderType: 'cutout',
      });

    }

    // 一半，斜线
    if (config.hasSlant) {

      const blockId = `${blockName}_half_slant`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId, 'basic');
      const suffix = '，斜线';

      const modelPathL = `${P_BLOCK_MODEL}/${blockId}`;
      const modelPathS = `${P_BLOCK}/${blockId}`;
      const modelJSON = {
        parent: `${P_BLOCK}/road/base_half`,
        textures: {
          content: `${P_BLOCK}/${tPath}_slant`,
          side: tSide ? `${P_BLOCK}/${tPath}` : undefined
        }
      };

      JSON_ASSETS.push({ PATH: modelPathL, DATA: modelJSON });

      setBlockProps(block, {
        boxType: 'half',
        displayName: `${label}，一半${suffix}`,
        modelPath: modelPathS,
        renderType: 'cutout',
      });

      setHorizontalFacing(block, 'same', modelPathS);

    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 路 - 完成`);

});

// 注册方块 - 强化混凝土
onEvent('block.registry', function (event) {

  console.info(`${LOG_PREFIX} 注册方块 - 强化混凝土 - 开始`);

  const keys = Object.keys(COLORS);

  keys.forEach((key) => {

    const color = COLORS[key];
    const id = `${MOD_ID}:reinforced_concrete_${color.CODE}`;
    const block = event.create(id, 'basic');
    const texture = `${P_BLOCK}/reinforced_concrete/${color.CODE}`;

    setBlockProps(block, {
      boxType: 'full',
      displayName: `${color.LABEL_CN}强化混凝土`,
    });

    block.textureAll(texture);

  });

  // 覆盖默认语言（en_US）
  JSON_ASSETS.push({
    PATH: 'minecraft:lang/en_us',
    DATA: {
      'block.minecraft.ancient_debris': 'White Reinforced Concrete',
      'block.minecraft.raw_copper_block': 'Gray Reinforced Concrete',
      'block.minecraft.raw_iron_block': 'Light Gray Reinforced Concrete',
    },
  });

  // 覆盖默认语言（zh_CN）
  JSON_ASSETS.push({
    PATH: 'minecraft:lang/zh_cn',
    DATA: {
      'block.minecraft.ancient_debris': '白色强化混凝土',
      'block.minecraft.raw_copper_block': '灰色强化混凝土',
      'block.minecraft.raw_iron_block': '淡灰色强化混凝土',
    },
  });

  console.info(`${LOG_PREFIX} 注册方块 - 强化混凝土 - 完成`);

});

// 注册方块 - 其它
onEvent('block.registry', function (event) {

  console.info(`${LOG_PREFIX} 注册方块 - 其它 - 开始`);

  const blocks = [
    {
      name: 'isolation_pile_a',
      box: [5, 0, 5, 11, 16, 11, true],
      label: '隔离桩',
      model: 'common/isolation_pile_a',
      orientable: false,
    },
    {
      name: 'statue_player_alex',
      box: [4, 0, 6, 12, 31, 10, true],
      label: '模型（Alex）',
      model: 'statue/player_alex',
      orientable: true,
    },
    {
      name: 'statue_player_steve',
      box: [4, 0, 6, 12, 31, 10, true],
      label: '模型（Steve）',
      model: 'statue/player_steve',
      orientable: true,
    },
  ];

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id, 'basic');
    const model = `${P_BLOCK}/${config.model}`;

    setBlockProps(block, {
      boxConfig: config.box,
      boxType: 'custom',
      displayName: config.label,
      isSolid: false,
      material: 'stone',
      modelPath: model,
      renderType: 'cutout',
    });

    if (config.orientable) {
      setHorizontalFacing(block, 'revert', model);
    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 其它 - 完成`);

});

// 注册物品
// onEvent('item.registry', function (event) {
//   console.info(`${LOG_PREFIX} 注册物品 - 开始`);
//   console.info(`${LOG_PREFIX} 注册物品 - 完成`);
// });

// 注册声音
// onEvent('sound.registry', function (event) {
//   console.info(`${LOG_PREFIX} 注册声音 - 开始`);
//   console.info(`${LOG_PREFIX} 注册声音 - 完成`);
// });
