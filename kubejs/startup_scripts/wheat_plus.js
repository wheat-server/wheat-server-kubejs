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

/**
 * @description 注册方块 - 砖块
 * @param {Registry.Block} event
 */
function regBlockBrick(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 砖块 - 开始`);

  const blocks = [
    { name: 'brick_a', texture: 'brick/brick_a' },
    { name: 'brick_b', texture: 'brick/brick_b' },
    { name: 'brick_c', texture: 'brick/brick_c' },
    { name: 'brick_d', texture: 'brick/brick_d' },
  ];

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id, 'basic');

    setBlockProps(block, {
      displayName: '砖块',
      material: 'stone',
    });

    block.textureAll(`${P_BLOCK}/${config.texture}`);

  });

  console.info(`${LOG_PREFIX} 注册方块 - 砖块 - 完成`);

}

/**
 * @description 注册方块 - 纯色方块
 * @param {Registry.Block} event
 */
function regBlockColor(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 纯色方块 - 开始`);

  const blocks = [
    {
      name: 'color_white_grow',
      label: '纯色方块（白色，发光）',
      color: [255, 255, 255, 1],
      grow: true,
    },
    {
      name: 'color_blue_grow',
      label: '纯色方块（蓝色，发光）',
      color: [0, 0, 255, 1],
      grow: true,
    },
    {
      name: 'color_green_grow',
      label: '纯色方块（绿色，发光）',
      color: [0, 255, 0, 1],
      grow: true,
    },
    {
      name: 'color_red_grow',
      label: '纯色方块（红色）',
      color: [255, 0, 0, 1],
      grow: true,
    },
    {
      name: 'color_black',
      label: '纯色方块（黑色）',
      color: [0, 0, 0, 1],
      grow: false,
    },
    {
      name: 'color_white',
      label: '纯色方块（白色）',
      color: [255, 255, 255, 1],
      grow: false,
    },
    {
      name: 'color_blue',
      label: '纯色方块（蓝色）',
      color: [0, 0, 255, 1],
      grow: false,
    },
    {
      name: 'color_green',
      label: '纯色方块（绿色）',
      color: [0, 255, 0, 1],
      grow: false,
    },
    {
      name: 'color_red',
      label: '纯色方块（红色）',
      color: [255, 0, 0, 1],
      grow: false,
    },
    {
      name: 'color_yellow',
      label: '纯色方块（黄色）',
      color: [255, 255, 0, 1],
      grow: false,
    },
    {
      name: 'color_39c5bb',
      label: '纯色方块（#39C5BB）',
      color: [57, 197, 187, 1],
      grow: false,
    },
    {
      name: 'color_66ccff',
      label: '纯色方块（#66CCFF）',
      color: [102, 204, 255, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_one',
      label: '纯色方块（广州地铁一号线，#F3D03E）',
      color: [243, 208, 62, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_two',
      label: '纯色方块（广州地铁二号线，#00629B）',
      color: [0, 98, 155, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_three',
      label: '纯色方块（广州地铁三号线，#ECA154）',
      color: [236, 161, 84, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_four',
      label: '纯色方块（广州地铁四号线，#00843D）',
      color: [0, 132, 61, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_five',
      label: '纯色方块（广州地铁五号线，#C5003E）',
      color: [197, 0, 62, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_six',
      label: '纯色方块（广州地铁六号线，#80225F）',
      color: [128, 34, 95, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_seven',
      label: '纯色方块（广州地铁七号线，#97D700）',
      color: [151, 215, 0, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_eight',
      label: '纯色方块（广州地铁八号线，#008C95）',
      color: [0, 140, 149, 1],
      grow: false,
    },
    {
      name: 'color_gz_line_nine',
      label: '纯色方块（广州地铁九号线，#71CC98）',
      color: [113, 204, 152, 1],
      grow: false,
    },
  ];

  const tGrow = `${P_BLOCK}/common/color_grow`;
  const tNormal = `${P_BLOCK}/common/color_normal`;

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id, 'basic');
    const colorCfg = config.color;
    const isGrow = config.grow;

    setBlockProps(block, {
      displayName: config.label,
      isSolid: false,
      lightLevel: (isGrow ? 1 : 0),
      material: 'stone',
    });

    block.textureAll(isGrow ? tGrow : tNormal);
    block.color(0, Color.rgba.apply(Color, colorCfg));
    block.item((item) => {
      item.color(0, Color.rgba.apply(Color, colorCfg));
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 纯色方块 - 完成`);

}

/**
 * @description 注册方块 - 灯（现代）
 * @param {Registry.Block} event
 */
function regBlockLampModern(event) {

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

}

/**
 * @description 注册方块 - 灯（简约）
 * @param {Registry.Block} event
 */
function regBlockLampSimple(event) {

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

}

/**
 * @description 注册方块 - 矿车方块
 * @param {Registry.Block} event
 */
function regBlockMinecart(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 矿车方块 - 开始`);

  /** 父模型路径 */
  const modelParent = `${P_BLOCK}/minecart/main`;

  /** 纹理文件路径前缀 */
  const texturePrefix = `${P_BLOCK}/minecart/`;

  const blocks = [
    { name: 'mtr_gz_gf_1', label: '广州地铁 - 广佛线' },
    { name: 'mtr_gz_gf_2', label: '广州地铁 - 广佛线' },
    { name: 'mtr_gz_l1_1', label: '广州地铁 - 一号线' },
    { name: 'mtr_gz_l1_2', label: '广州地铁 - 一号线' },
    { name: 'mtr_gz_l2_1', label: '广州地铁 - 二号线' },
    { name: 'mtr_gz_l3_1', label: '广州地铁 - 三号线' },
    { name: 'mtr_gz_l3_2', label: '广州地铁 - 三号线' },
    { name: 'mtr_gz_l4_1', label: '广州地铁 - 四号线' },
    { name: 'mtr_gz_l5_1', label: '广州地铁 - 五号线' },
    { name: 'mtr_gz_l6_1', label: '广州地铁 - 六号线' },
    { name: 'mtr_gz_l7_1', label: '广州地铁 - 七号线' },
    { name: 'mtr_gz_l8_1', label: '广州地铁 - 八号线' },
    { name: 'mtr_gz_l9_1', label: '广州地铁 - 九号线' },
    { name: 'mtr_gz_l13_1', label: '广州地铁 - 十三号线' },
    { name: 'mtr_gz_l14_1', label: '广州地铁 - 十四号线' },
    { name: 'mtr_gz_l21_1', label: '广州地铁 - 二十一号线' },
    { name: 'cr_ca25g_red', label: '中国铁路 - CA25G_RED' },
    { name: 'cr_cr200j_we', label: '中国铁路 - CR200J_WE' },
    { name: 'cr_cr200j_ze', label: '中国铁路 - CR200J_ZE' },
    { name: 'cr_kd25g_red', label: '中国铁路 - KD25G_RED' },
    { name: 'cr_rw25g_red', label: '中国铁路 - RW25G_RED' },
    { name: 'cr_rz25g_red', label: '中国铁路 - RZ25G_RED' },
    { name: 'cr_rz125z_bj', label: '中国铁路 - RZ125Z_BJ' },
    { name: 'cr_rz125z_gz', label: '中国铁路 - RZ125Z_GZ' },
    { name: 'cr_rz125z_new', label: '中国铁路 - RZ125Z_NEW' },
    { name: 'cr_rz125z_sh', label: '中国铁路 - RZ125Z_SH' },
    { name: 'cr_uz25g_red', label: '中国铁路 - UZ25G_RED' },
    { name: 'cr_xl25g_red', label: '中国铁路 - XL25G_RED' },
    { name: 'cr_yw22b_new', label: '中国铁路 - YW22B_NEW' },
    { name: 'cr_yw22b_old', label: '中国铁路 - YW22B_OLD' },
    { name: 'cr_yw25b_new', label: '中国铁路 - YW25B_NEW' },
    { name: 'cr_yw25b_old', label: '中国铁路 - YW25B_OLD' },
    { name: 'cr_yw25g_new', label: '中国铁路 - YW25G_NEW' },
    { name: 'cr_yw25g_red', label: '中国铁路 - YW25G_RED' },
    { name: 'cr_yw25k_blue', label: '中国铁路 - YW25K_BLUE' },
    { name: 'cr_yw25k_new', label: '中国铁路 - YW25K_NEW' },
    { name: 'cr_yw25t_new', label: '中国铁路 - YW25T_NEW' },
    { name: 'cr_yw25t_white', label: '中国铁路 - YW25T_WHITE' },
    { name: 'cr_yz22b_new', label: '中国铁路 - YZ22B_NEW' },
    { name: 'cr_yz22b_old', label: '中国铁路 - YZ22B_OLD' },
    { name: 'cr_yz25b_new', label: '中国铁路 - YZ25B_NEW' },
    { name: 'cr_yz25b_old', label: '中国铁路 - YZ25B_OLD' },
    { name: 'cr_yz25dt_jl', label: '中国铁路 - YZ25DT_JL' },
    { name: 'cr_yz25g_new', label: '中国铁路 - YZ25G_NEW' },
    { name: 'cr_yz25g_red', label: '中国铁路 - YZ25G_RED' },
    { name: 'cr_yz25k_blue', label: '中国铁路 - YZ25K_BLUE' },
    { name: 'cr_yz25k_new', label: '中国铁路 - YZ25K_NEW' },
    { name: 'cr_yz25t_new', label: '中国铁路 - YZ25T_NEW' },
    { name: 'cr_yz25t_white', label: '中国铁路 - YZ25T_WHITE' },
    { name: 'cr_yz25z_wh', label: '中国铁路 - YZ25Z_WH' },
  ];

  blocks.forEach((config) => {

    const blockName = config.name;
    const blockId = `${MOD_ID}:minecart_${blockName}`;
    const block = event.create(blockId, 'basic');

    const modelPathL = `${P_BLOCK_MODEL}/minecart/${blockName}`;
    const modelPathS = `${P_BLOCK}/minecart/${blockName}`;
    const modelJSON = {
      parent: modelParent,
      textures: {
        main: `${texturePrefix}${blockName}`
      }
    };

    // 生成模型 JSON 文件
    JSON_ASSETS.push({ PATH: modelPathL, DATA: modelJSON });

    // 设置基础属性
    setBlockProps(block, {
      boxConfig: [-3, 0, -6, 19, 16, 22],
      boxType: 'custom',
      collision: false,
      displayName: config.label,
      isSolid: false,
      material: 'metal',
      modelPath: modelPathS,
      renderType: 'cutout',
    });

    // 设置旋转属性
    setHorizontalFacing(block, 'same', modelPathS);

  });

  console.info(`${LOG_PREFIX} 注册方块 - 矿车方块 - 完成`);

}

/**
 * @description 注册方块 - 强化混凝土
 * @param {Registry.Block} event
 */
function regBlockReinforcedConcrete(event) {

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

}

/**
 * @description 注册方块 - 路
 * @param {Registry.Block} event
 */
function regBlockRoad(event) {

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

}

/**
 * @description 注册方块 - 其他 - 基础
 * @param {Registry.Block} event
 */
function regBlockOtherBasic(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 基础 - 开始`);

  const blocks = [
    {
      name: 'crate_a',
      box: null,
      label: '板条箱',
      model: '',
      texture: 'common/crate_a',
      orientable: false,
    },
    {
      name: 'isolation_pile_a',
      box: [5, 0, 5, 11, 16, 11, true],
      label: '隔离桩',
      model: 'common/isolation_pile_a',
      texture: '',
      orientable: false,
    },
    {
      name: 'station_sign_a',
      box: [5, -16, 5, 11, 32, 11, true],
      label: '站牌',
      model: 'common/station_sign_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'statue_player_alex',
      box: [4, 0, 6, 12, 31, 10, true],
      label: '模型（Alex）',
      model: 'statue/player_alex',
      texture: '',
      orientable: true,
    },
    {
      name: 'statue_player_steve',
      box: [4, 0, 6, 12, 31, 10, true],
      label: '模型（Steve）',
      model: 'statue/player_steve',
      texture: '',
      orientable: true,
    },
    {
      name: 'ticket_machine_a',
      box: [6, 0, 6, 10, 16, 10, true],
      label: '售票机',
      model: 'common/ticket_machine_a',
      texture: '',
      orientable: true,
    },
  ];

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id, 'basic');
    const box = config.box;
    const label = config.label;
    const mPath = config.model;
    const tPath = config.texture;

    // 设置基础属性
    if (box) {
      setBlockProps(block, {
        boxConfig: box,
        boxType: 'custom',
        displayName: label,
        isSolid: false,
        material: 'stone',
        renderType: 'cutout',
      });
    } else {
      setBlockProps(block, {
        boxConfig: null,
        boxType: 'full',
        displayName: label,
        isSolid: true,
        material: 'stone',
        renderType: 'solid',
      });
    }

    // 设置模型或纹理文件路径
    if (mPath) {
      block.model(`${P_BLOCK}/${mPath}`);
    } else if (tPath) {
      block.textureAll(`${P_BLOCK}/${tPath}`);
    }

    // 设置方块旋转
    if (config.orientable) {
      setHorizontalFacing(block, 'revert', `${P_BLOCK}/${mPath}`);
    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 基础 - 完成`);

}

/**
 * @description 注册方块 - 其他 - 特殊
 * @param {Registry.Block} event
 */
function regBlockOtherShaped(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 特殊 - 开始`);

  const blocks = [
    {
      name: 'gravel_stairs',
      label: '沙砾楼梯',
      texture: 'minecraft:block/gravel',
      type: 'stairs',
    },
    {
      name: 'gravel_slab',
      label: '沙砾半砖',
      texture: 'minecraft:block/gravel',
      type: 'slab',
    },
    {
      name: 'oak_leaves_wall',
      label: '橡木树叶墙',
      texture: `${P_BLOCK}/common/oak_leaves`,
      type: 'wall',
    },
  ];

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id, config.type);

    // 设置基础属性
    setBlockProps(block, {
      displayName: config.label,
      material: 'stone',
      renderType: 'cutout_mipped',
    });

    // 设置方块纹理
    block.textureAll(config.texture);

  });

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 特殊 - 完成`);

}

// 注册方块
onEvent('block.registry', regBlockBrick);
onEvent('block.registry', regBlockColor);
onEvent('block.registry', regBlockLampModern);
onEvent('block.registry', regBlockLampSimple);
onEvent('block.registry', regBlockMinecart);
onEvent('block.registry', regBlockRoad);
onEvent('block.registry', regBlockReinforcedConcrete);
onEvent('block.registry', regBlockOtherBasic);
onEvent('block.registry', regBlockOtherShaped);

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
