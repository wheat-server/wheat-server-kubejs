// priority: 0

const defaults = global.defaults;
const setBlockProps = global.setBlockProps;

const COLORS = global.COLORS;
const JSON_ASSETS = global.JSON_ASSETS;
const LOG_PREFIX = global.LOG_PREFIX;

/** 模组 ID */
const MOD_ID = 'wheat_plus';

/** 方块模型、纹理文件基础短路径 */
const P_BLOCK = `${MOD_ID}:block`;

/** 方块模型文件基础长路径 */
const P_BLOCK_MODEL = `${MOD_ID}:models/block`;

/** 方块状态文件基础长路径 */
const P_BLOCK_STATE = `${MOD_ID}:blockstates`;

/** 方块透明纹理文件路径 */
const P_BLOCK_TRANSPARENT = `${P_BLOCK}/common/transparent`;

/** 物品模型、纹理文件基础短路径*/
const P_ITEM = `${MOD_ID}:item`;

/** 物品模型文件基础长路径 */
const P_ITEM_MODEL = `${MOD_ID}:models/item`;

/** 属于创造模式标签页 wheat_plus:blocks 的方块 ID 列表 */
const TAB_BLOCKS_ITEMS = [];

/** 属于创造模式标签页 wheat_plus:minecart 的方块 ID 列表 */
const TAB_MINECART_ITEMS = [];

/** 属于创造模式标签页 wheat_plus:roads 的方块 ID 列表 */
const TAB_ROADS_ITEMS = [];

console.info(`${LOG_PREFIX} 处理 ${MOD_ID} 相关内容`);

/**
 * @description 获取栅栏方块状态 JSON
 * @param {string} postPath 栅栏 post 模型短路径
 * @param {string} sidePath 栅栏 side 模型短路径
 */
function getFenceBlockstateJson(postPath, sidePath) {
  return {
    multipart: [
      {
        apply: { model: postPath }
      },
      {
        apply: { model: sidePath, uvlock: true },
        when: { north: 'true' }
      },
      {
        apply: { model: sidePath, uvlock: true, y: 90 },
        when: { east: 'true' }
      },
      {
        apply: { model: sidePath, uvlock: true, y: 180 },
        when: { south: 'true' }
      },
      {
        apply: { model: sidePath, uvlock: true, y: 270 },
        when: { west: 'true' }
      }
    ]
  };
}

/**
 * @description 注册方块 - 砖块
 * @param {_RegistryBlock} event
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
    const block = event.create(id);

    TAB_BLOCKS_ITEMS.push(id);

    setBlockProps(block, {
      displayName: '砖块',
      textureAll: `${P_BLOCK}/${config.texture}`,
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 砖块 - 完成`);

}

/**
 * @description 注册方块 - 建筑和家具
 * @param {_RegistryBlock} event
 */
function regBlockBuildingAndFurniture(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 建筑和家具 - 开始`);

  const blockList = [
    // 建筑方块
    {
      name: 'building_brick_a',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '砖块（大三角）',
      model: 'building/building_brick_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_a_half_down',
      box: [0, 0, 0, 16, 8, 16, true],
      label: '砖块（大三角，下半部分）',
      model: 'building/building_brick_a_half_down',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_a_half_up',
      box: [0, 8, 0, 16, 16, 16, true],
      label: '砖块（大三角，上半部分）',
      model: 'building/building_brick_a_half_up',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_b',
      box: [8, 0, 8, 16, 16, 16, true],
      label: '砖块（小三角）',
      model: 'building/building_brick_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_c',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '砖块（缺一角）',
      model: 'building/building_brick_c',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_d',
      box: [0, 0, 12, 16, 16, 16, true],
      label: '砖块（砖块，1/4）',
      model: 'building/building_brick_d',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_d_tall',
      box: [0, 0, 12, 16, 24, 16, true],
      label: '砖块（砖块，1/4，高）',
      model: 'building/building_brick_d_tall',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_e',
      box: [0, 0, 12, 16, 16, 16, true],
      label: '砖块（青色陶瓦，1/4）',
      model: 'building/building_brick_e',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_brick_e_tall',
      box: [0, 0, 12, 16, 24, 16, true],
      label: '砖块（青色陶瓦，1/4，高）',
      model: 'building/building_brick_e_tall',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_cover_a',
      box: [0, 13, 0, 16, 15, 16, true],
      label: '井盖',
      model: 'building/building_cover_a',
      texture: '',
      orientable: false,
    },
    {
      name: 'building_fence_a_bottom',
      box: [0, 0, 0, 16, 32, 16, true],
      label: '围栏（下）',
      model: 'building/building_fence_a_bottom',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_fence_a_top',
      box: [0, 0, 0, 16, 32, 16, true],
      label: '围栏（上）',
      model: 'building/building_fence_a_top',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_fence_b',
      box: [0, 0, 7, 16, 16, 9, true],
      label: '白色栅栏',
      model: 'building/building_fence_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_fence_b_corner_inner',
      box: [6, 0, 0, 16, 16, 10, true],
      label: '白色栅栏（角落，向内）',
      model: 'building/building_fence_b_corner_inner',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_fence_b_corner_outer',
      box: [0, 0, 6, 10, 16, 16, true],
      label: '白色栅栏（角落，向外）',
      model: 'building/building_fence_b_corner_outer',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_ground_a',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '地面（红色混凝土 + 磨制闪长岩）',
      model: 'building/building_ground_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_iron_pole_a',
      box: [6, 0, 6, 10, 16, 10, true],
      label: '铁杆',
      model: 'building/building_iron_pole_a',
      texture: '',
      orientable: false,
    },
    {
      name: 'building_misc_a',
      box: [0, 8, 14, 16, 16, 16, true],
      label: '石英片',
      model: 'building/building_misc_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_misc_b',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '石英块',
      model: 'building/building_misc_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_misc_c',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '石英块',
      model: 'building/building_misc_c',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_misc_d',
      box: [0, 8, 8, 16, 16, 16, true],
      label: '石英块',
      model: 'building/building_misc_d',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_pillar_a',
      box: [1, 0, 1, 15, 16, 15, true],
      label: '柱子',
      model: 'building/building_pillar_a',
      texture: '',
      orientable: false,
    },
    {
      name: 'building_pillar_a_tall',
      box: [1, 0, 1, 15, 24, 15, true],
      label: '柱子（高）',
      model: 'building/building_pillar_a_tall',
      texture: '',
      orientable: false,
    },
    {
      name: 'building_pillar_b',
      box: [-8, 0, -8, 24, 16, 24, true],
      label: '粗柱子',
      model: 'building/building_pillar_b',
      texture: '',
      orientable: false,
    },
    {
      name: 'building_pillar_b_tall',
      box: [-8, 0, -8, 24, 24, 24, true],
      label: '粗柱子（高）',
      model: 'building/building_pillar_b_tall',
      texture: '',
      orientable: false,
    },
    {
      name: 'building_quartz_vertical_slab',
      box: [0, 0, 8, 16, 16, 16, true],
      label: '垂直石英台阶',
      model: 'building/building_quartz_vertical_slab',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_a',
      box: [0, 6, 6, 16, 10, 10, true],
      label: '铁扶手',
      model: 'building/building_rail_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_b',
      box: [0, 0, 6, 16, 10, 10, true],
      label: '铁扶手',
      model: 'building/building_rail_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_c',
      box: [0, 0, 6, 10, 10, 10, true],
      label: '铁扶手',
      model: 'building/building_rail_c',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_d',
      box: [0, 6, 0, 10, 10, 10, true],
      label: '铁扶手',
      model: 'building/building_rail_d',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_e',
      box: [-3, 6, 0, 10, 10, 15, true],
      label: '铁扶手（斜向）',
      model: 'building/building_rail_e',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_f',
      box: [0, 6, -3, 15, 10, 10, true],
      label: '铁扶手（斜向）',
      model: 'building/building_rail_f',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_f_extend',
      box: [0, 6, 0, 16, 10, 16, true],
      label: '铁扶手（斜向，扩展）',
      model: 'building/building_rail_f_extend',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_rail_g',
      box: [0, 0, 1, 16, 10, 16, true],
      label: '铁扶手（石英）',
      model: 'building/building_rail_g',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_a',
      box: [0, 0, 0, 9, 16, 9, true],
      label: '楼梯铁扶手',
      model: 'building/building_stair_rail_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_a_half',
      box: [0, 0, 0, 9, 8, 9, true],
      label: '楼梯铁扶手（半高）',
      model: 'building/building_stair_rail_a_half',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_b',
      box: [0, 0, 7, 16, 16, 9, true],
      label: '楼梯铁扶手',
      model: 'building/building_stair_rail_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_b_half',
      box: [0, 0, 7, 16, 8, 9, true],
      label: '楼梯铁扶手（半高）',
      model: 'building/building_stair_rail_b_half',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_c',
      box: [0, 0, 7, 9, 16, 9, true],
      label: '楼梯铁扶手',
      model: 'building/building_stair_rail_c',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_c_half',
      box: [0, 0, 7, 9, 8, 9, true],
      label: '楼梯铁扶手（半高）',
      model: 'building/building_stair_rail_c_half',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_d',
      box: [0, 0, 7, 16, 16, 9, true],
      label: '楼梯铁扶手',
      model: 'building/building_stair_rail_d',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_e',
      box: [0, 0, 7, 16, 16, 9, true],
      label: '楼梯铁扶手',
      model: 'building/building_stair_rail_e',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_f',
      box: [0, 0, 7, 16, 16, 9, true],
      label: '楼梯铁扶手',
      model: 'building/building_stair_rail_f',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_g',
      box: [7, 0, 7, 9, 16, 9, true],
      label: '楼梯铁扶手（垂直杆子）',
      model: 'building/building_stair_rail_g',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_h',
      box: [0, 14, 7, 16, 16, 9, true],
      label: '楼梯铁扶手（水平杆子）',
      model: 'building/building_stair_rail_h',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_stair_rail_h_half',
      box: [0, 6, 7, 16, 8, 9, true],
      label: '楼梯铁扶手（水平杆子，半高）',
      model: 'building/building_stair_rail_h_half',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_wall_a',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '墙（石砖 + 石英）',
      model: 'building/building_wall_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_wall_b',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '墙（青色陶瓦 + 石英）',
      model: 'building/building_wall_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_wall_c',
      box: [0, 0, 3, 16, 16, 14, true],
      label: '墙（石英）',
      model: 'building/building_wall_c',
      texture: '',
      orientable: true,
    },
    {
      name: 'building_wall_d',
      box: [0, 0, 3, 16, 16, 16, true],
      label: '墙（石英）',
      model: 'building/building_wall_d',
      texture: '',
      orientable: true,
    },
    // 家具方块
    {
      name: 'furniture_birch_chair_a',
      box: [4, 0, 4, 12, 16, 12, true],
      label: '白桦木椅子',
      model: 'furniture/furniture_birch_chair_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_birch_table_a',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '白桦木桌子',
      model: 'furniture/furniture_birch_table_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_faucet_a',
      box: [0, 0, 5, 16, 9, 16, true],
      label: '水龙头',
      model: 'furniture/furniture_faucet_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_black_board_a',
      box: [0, 0, 15, 16, 16, 16, true],
      label: '黑板',
      model: 'furniture/furniture_black_board_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_kitchen_counter_a',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '白桦木厨房柜台',
      model: 'furniture/furniture_kitchen_counter_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_kitchen_sink_a',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '白桦木厨房水槽',
      model: 'furniture/furniture_kitchen_sink_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_tv_a',
      box: [0, 3, 13, 16, 16, 16, true],
      label: '电视机',
      model: 'furniture/furniture_tv_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_tv_b',
      box: [0, 0, 0, 16, 16, 16, true],
      label: '电视机',
      model: 'furniture/furniture_tv_b',
      texture: '',
      orientable: true,
    },
    {
      name: 'furniture_tv_c',
      box: [3, 0, 2, 13, 14, 13, true],
      label: '电视机',
      model: 'furniture/furniture_tv_c',
      texture: '',
      orientable: true,
    },
  ];

  blockList.forEach((config) => {

    const blockBox = config.box;
    const blockLabel = config.label;
    const blockName = config.name;
    const blockId = `${MOD_ID}:${blockName}`;

    const block = config.orientable ? event.create(blockId, 'cardinal') : event.create(blockId);

    const modelPath0 = config.model;
    const modelPath1 = modelPath0 ? `${P_BLOCK}/${modelPath0}` : '';

    const texturePath0 = config.texture;
    const texturePath1 = texturePath0 ? `${P_BLOCK}/${texturePath0}` : '';

    TAB_BLOCKS_ITEMS.push(blockId);

    // 设置基础属性
    if (blockBox) {
      setBlockProps(block, {
        boxConfig: blockBox,
        boxType: 'custom',
        displayName: blockLabel,
        isSolid: false,
        modelPath: modelPath1 ? {
          blockName: blockName,
          blockNamespace: MOD_ID,
          filePath: modelPath1,
        } : null,
        renderType: 'cutout',
        textureAll: texturePath1,
      });
    } else {
      setBlockProps(block, {
        boxConfig: null,
        boxType: 'full',
        displayName: blockLabel,
        isSolid: true,
        modelPath: modelPath1 ? {
          blockName: blockName,
          blockNamespace: MOD_ID,
          filePath: modelPath1,
        } : null,
        renderType: 'solid',
        textureAll: texturePath1,
      });
    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 建筑和家具 - 完成`);

}

/**
 * @description 注册方块 - 纯色方块
 * @param {_RegistryBlock} event
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

  const textureGrow = `${P_BLOCK}/common/color_grow`;
  const textureNormal = `${P_BLOCK}/common/color_normal`;

  blocks.forEach((config) => {

    const id = `${MOD_ID}:${config.name}`;
    const block = event.create(id);
    const colorCfg = config.color;
    const isGrow = config.grow;

    TAB_BLOCKS_ITEMS.push(id);

    setBlockProps(block, {
      displayName: config.label,
      isSolid: false,
      lightLevel: (isGrow ? 1 : 0),
      textureAll: (isGrow ? textureGrow : textureNormal),
    });

    block.color(0, Color.rgba.apply(Color, colorCfg));
    block.item((item) => {
      item.color(0, Color.rgba.apply(Color, colorCfg));
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 纯色方块 - 完成`);

}

/**
 * @description 注册方块 - 灯（现代）
 * @param {_RegistryBlock} event
 */
function regBlockLampModern(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 现代灯 - 开始`);

  /** 颜色 key 列表 */
  const keys = Object.keys(COLORS);

  /** 父模型路径 */
  const parentModel = `${P_BLOCK}/lamp/modern`;

  keys.forEach((key) => {

    const color = COLORS[key];
    const blockName = `lamp_modern_${color.CODE}`;
    const blockId = `${MOD_ID}:${blockName}`;
    const block = event.create(blockId);

    // 纹理文件路径前缀
    // wheat_plus:block/lamp_modern/color_
    const textureBase = `${P_BLOCK}/lamp_modern/${color.CODE}`;

    JSON_ASSETS.push({
      path: `${P_BLOCK_MODEL}/${blockName}`,
      data: {
        parent: parentModel,
        textures: {
          glow: `${textureBase}_glow`,
          core: `${textureBase}_core`,
          particle: `${textureBase}_core`,
        },
      },
    });

    TAB_BLOCKS_ITEMS.push(blockId);

    setBlockProps(block, {
      boxType: 'full',
      displayName: `现代${color.LABEL_CN}灯`,
      isSolid: false,
      lightLevel: 1,
      renderType: 'translucent',
      soundType: 'glass',
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 现代灯 - 完成`);

}

/**
 * @description 注册方块 - 灯（简约）
 * @param {_RegistryBlock} event
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
    const block = event.create(blockId, 'button');

    // 用于替换默认模型
    const modelJSON = { parent: `${P_BLOCK}/${config.model}` };

    // 按钮方块默认状态
    JSON_ASSETS.push({
      path: `${P_BLOCK_MODEL}/${blockName}`,
      data: modelJSON,
    });

    // 按钮方块按下状态
    JSON_ASSETS.push({
      path: `${P_BLOCK_MODEL}/${blockName}_pressed`,
      data: modelJSON,
    });

    // 按钮物品状态
    JSON_ASSETS.push({
      path: `${P_ITEM_MODEL}/${blockName}`,
      data: modelJSON,
    });

    TAB_BLOCKS_ITEMS.push(blockId);

    setBlockProps(block, {
      displayName: config.label,
      lightLevel: 0.8,
      renderType: 'translucent',
      soundType: 'glass',
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 简约灯 - 完成`);

}

/**
 * @description 注册方块 - 矿车方块
 * @param {_RegistryBlock} event
 */
function regBlockMinecart(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 矿车方块 - 开始`);

  /** 父模型路径 */
  const modelParent = `${P_BLOCK}/minecart/main`;

  /** 纹理文件路径前缀 */
  const texturePrefix = `${P_BLOCK}/minecart/`;

  const blockList = [
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

  blockList.forEach((config) => {

    const blockName = config.name;
    const blockId = `${MOD_ID}:minecart_${blockName}`;
    const block = event.create(blockId, 'cardinal');

    // 生成模型 JSON 文件
    JSON_ASSETS.push({
      path: `${P_BLOCK_MODEL}/minecart_${blockName}`,
      data: {
        parent: modelParent,
        textures: {
          main: `${texturePrefix}${blockName}`,
        },
      },
    });

    TAB_MINECART_ITEMS.push(blockId);

    // 设置基础属性
    setBlockProps(block, {
      boxConfig: [-3, 0, -6, 19, 16, 22, true],
      boxType: 'custom',
      displayName: config.label,
      hasCollision: false,
      isSolid: false,
      renderType: 'cutout',
      soundType: 'metal',
    });

  });

  console.info(`${LOG_PREFIX} 注册方块 - 矿车方块 - 完成`);

}

/**
 * @description 注册方块 - 强化混凝土
 * @param {_RegistryBlock} event
 */
function regBlockReinforcedConcrete(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 强化混凝土 - 开始`);

  const keys = Object.keys(COLORS);

  keys.forEach((key) => {

    const color = COLORS[key];
    const id = `${MOD_ID}:reinforced_concrete_${color.CODE}`;
    const block = event.create(id);
    const texture = `${P_BLOCK}/reinforced_concrete/${color.CODE}`;

    TAB_BLOCKS_ITEMS.push(id);

    setBlockProps(block, {
      boxType: 'full',
      displayName: `${color.LABEL_CN}强化混凝土`,
      textureAll: texture,
    });

  });

  // // 覆盖默认语言（en_US）
  // JSON_ASSETS.push({
  //   path: 'minecraft:lang/en_us',
  //   data: {
  //     'block.minecraft.ancient_debris': 'White Reinforced Concrete',
  //     'block.minecraft.raw_copper_block': 'Gray Reinforced Concrete',
  //     'block.minecraft.raw_iron_block': 'Light Gray Reinforced Concrete',
  //   },
  // });

  // // 覆盖默认语言（zh_CN）
  // JSON_ASSETS.push({
  //   path: 'minecraft:lang/zh_cn',
  //   data: {
  //     'block.minecraft.ancient_debris': '白色强化混凝土',
  //     'block.minecraft.raw_copper_block': '灰色强化混凝土',
  //     'block.minecraft.raw_iron_block': '淡灰色强化混凝土',
  //   },
  // });

  console.info(`${LOG_PREFIX} 注册方块 - 强化混凝土 - 完成`);

}

/**
 * @description 注册方块 - 路
 * @param {_RegistryBlock} event
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
    const texturePath = config.texturePath;

    /** 是否存在侧边纹理 */
    const textureSide = config.hasSide;

    // 完整，普通 / 直线
    if (config.hasNormal) {

      const blockId = `${blockName}_full`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId);
      const suffix = (config.isBlank ? '' : '，直线');

      JSON_ASSETS.push({
        path: `${P_BLOCK_MODEL}/${blockId}`,
        data: {
          parent: `${P_BLOCK}/road/base_full`,
          textures: {
            content: `${P_BLOCK}/${texturePath}`,
            side: textureSide ? `${P_BLOCK}/${texturePath}` : P_BLOCK_TRANSPARENT,
          },
        },
      });

      TAB_ROADS_ITEMS.push(fullId);

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        renderType: 'cutout',
      });

    }

    // 完整，斜线
    if (config.hasSlant) {

      const blockId = `${blockName}_full_slant`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId, 'cardinal');
      const suffix = '，斜线';

      JSON_ASSETS.push({
        path: `${P_BLOCK_MODEL}/${blockId}`,
        data: {
          parent: `${P_BLOCK}/road/base_full`,
          textures: {
            content: `${P_BLOCK}/${texturePath}_slant`,
            side: textureSide ? `${P_BLOCK}/${texturePath}` : P_BLOCK_TRANSPARENT,
          },
        },
      });

      TAB_ROADS_ITEMS.push(fullId);

      setBlockProps(block, {
        boxType: 'full',
        displayName: `${label}，完整${suffix}`,
        renderType: 'cutout',
      });

    }

    // 一半，普通 / 直线
    if (config.hasNormal) {

      const blockId = `${blockName}_half`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId);
      const suffix = (config.isBlank ? '' : '，直线');

      JSON_ASSETS.push({
        path: `${P_BLOCK_MODEL}/${blockId}`,
        data: {
          parent: `${P_BLOCK}/road/base_half`,
          textures: {
            content: `${P_BLOCK}/${texturePath}`,
            side: textureSide ? `${P_BLOCK}/${texturePath}` : P_BLOCK_TRANSPARENT,
          },
        },
      });

      TAB_ROADS_ITEMS.push(fullId);

      setBlockProps(block, {
        boxType: 'half',
        displayName: `${label}，一半${suffix}`,
        renderType: 'cutout',
      });

    }

    // 一半，斜线
    if (config.hasSlant) {

      const blockId = `${blockName}_half_slant`;
      const fullId = `${MOD_ID}:${blockId}`;
      const block = event.create(fullId, 'cardinal');
      const suffix = '，斜线';

      JSON_ASSETS.push({
        path: `${P_BLOCK_MODEL}/${blockId}`,
        data: {
          parent: `${P_BLOCK}/road/base_half`,
          textures: {
            content: `${P_BLOCK}/${texturePath}_slant`,
            side: textureSide ? `${P_BLOCK}/${texturePath}` : P_BLOCK_TRANSPARENT,
          },
        },
      });

      TAB_ROADS_ITEMS.push(fullId);

      setBlockProps(block, {
        boxType: 'half',
        displayName: `${label}，一半${suffix}`,
        renderType: 'cutout',
      });

    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 路 - 完成`);

}

/**
 * @description 注册方块 - 其他 - 基础
 * @param {_RegistryBlock} event
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
      name: 'road_sign_a_ns',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '路牌（NS）',
      model: 'road_sign/road_sign_a_ns',
      texture: '',
      orientable: false,
    },
    {
      name: 'road_sign_a_we',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '路牌（WE）',
      model: 'road_sign/road_sign_a_we',
      texture: '',
      orientable: false,
    },
    {
      name: 'road_sign_a_pole',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '路牌（杆子）',
      model: 'road_sign/road_sign_a_pole',
      texture: '',
      orientable: false,
    },
    {
      name: 'station_sign_a',
      box: [0, 0, 6, 16, 16, 10, true],
      label: '站牌',
      model: 'common/station_sign_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'statue_player_alex',
      box: [0, 0, 5, 16, 32, 11, true],
      label: '模型（Alex）',
      model: 'statue/player_alex',
      texture: '',
      orientable: true,
    },
    {
      name: 'statue_player_steve',
      box: [0, 0, 5, 16, 32, 11, true],
      label: '模型（Steve）',
      model: 'statue/player_steve',
      texture: '',
      orientable: true,
    },
    {
      name: 'ticket_machine_a',
      box: [3, 0, 6, 13, 30, 16, true],
      label: '售票机',
      model: 'common/ticket_machine_a',
      texture: '',
      orientable: true,
    },
    {
      name: 'traffic_light_a_pedestrian_ns',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '人行道红绿灯（NS）',
      model: 'traffic_light/traffic_light_a_pedestrian_ns',
      texture: '',
      orientable: true,
    },
    {
      name: 'traffic_light_a_pedestrian_we',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '人行道红绿灯（WE）',
      model: 'traffic_light/traffic_light_a_pedestrian_we',
      texture: '',
      orientable: true,
    },
    {
      name: 'traffic_light_a_traffic_h_ns',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '交通红绿灯（水平，NS）',
      model: 'traffic_light/traffic_light_a_traffic_h_ns',
      texture: '',
      orientable: true,
    },
    {
      name: 'traffic_light_a_traffic_h_we',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '交通红绿灯（水平，WE）',
      model: 'traffic_light/traffic_light_a_traffic_h_we',
      texture: '',
      orientable: true,
    },
    {
      name: 'traffic_light_a_traffic_v_ns',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '交通红绿灯（垂直，NS）',
      model: 'traffic_light/traffic_light_a_traffic_v_ns',
      texture: '',
      orientable: true,
    },
    {
      name: 'traffic_light_a_traffic_v_we',
      box: [1, 1, 1, 15, 15, 15, true],
      label: '交通红绿灯（垂直，we）',
      model: 'traffic_light/traffic_light_a_traffic_v_we',
      texture: '',
      orientable: true,
    },
  ];

  blocks.forEach((config) => {

    const blockBox = config.box;
    const blockLabel = config.label;
    const blockName = config.name;
    const blockId = `${MOD_ID}:${blockName}`;

    const block = config.orientable ? event.create(blockId, 'cardinal') : event.create(blockId);

    const modelPath0 = config.model;
    const modelPath1 = modelPath0 ? `${P_BLOCK}/${modelPath0}` : '';

    const texturePath0 = config.texture;
    const texturePath1 = texturePath0 ? `${P_BLOCK}/${texturePath0}` : '';

    TAB_BLOCKS_ITEMS.push(blockId);

    // 设置基础属性
    if (blockBox) {
      setBlockProps(block, {
        boxConfig: blockBox,
        boxType: 'custom',
        displayName: blockLabel,
        isSolid: false,
        modelPath: modelPath1 ? {
          blockName: blockName,
          blockNamespace: MOD_ID,
          filePath: modelPath1,
        } : null,
        renderType: 'cutout',
        textureAll: texturePath1,
      });
    } else {
      setBlockProps(block, {
        boxConfig: null,
        boxType: 'full',
        displayName: blockLabel,
        isSolid: true,
        modelPath: modelPath1 ? {
          blockName: blockName,
          blockNamespace: MOD_ID,
          filePath: modelPath1,
        } : null,
        renderType: 'solid',
        textureAll: texturePath1,
      });
    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 基础 - 完成`);

}

/**
 * @description 注册方块 - 其他 - 特殊
 * @param {_RegistryBlock} event
 */
function regBlockOtherShaped(event) {

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 特殊 - 开始`);

  const blockList = [
    {
      name: 'gravel_stairs',
      label: '沙砾楼梯',
      blockstate: null,
      texture: 'minecraft:block/gravel',
      type: 'stairs',
    },
    {
      name: 'gravel_slab',
      label: '沙砾半砖',
      blockstate: null,
      texture: 'minecraft:block/gravel',
      type: 'slab',
    },
    {
      name: 'oak_leaves_wall',
      label: '橡木树叶墙',
      blockstate: null,
      texture: `${P_BLOCK}/common/oak_leaves`,
      type: 'wall',
    },
    {
      name: 'pole_a_horizon',
      label: '杆子（水平）',
      blockstate: getFenceBlockstateJson(
        `${P_BLOCK}/pole/pole_a_horizon_post`,
        `${P_BLOCK}/pole/pole_a_horizon_side`,
      ),
      texture: 'block/light_gray_concrete',
      type: 'fence',
    },
    {
      name: 'pole_a_vertical',
      label: '杆子（垂直）',
      blockstate: getFenceBlockstateJson(
        `${P_BLOCK}/pole/pole_a_vertical_post`,
        `${P_BLOCK}/pole/pole_a_vertical_side`,
      ),
      texture: 'block/light_gray_concrete',
      type: 'fence',
    },
  ];

  blockList.forEach((config) => {

    const blockName = config.name;
    const blockId = `${MOD_ID}:${blockName}`;
    const block = event.create(blockId, config.type);

    TAB_BLOCKS_ITEMS.push(blockId);

    // 设置基础属性
    setBlockProps(block, {
      displayName: config.label,
      renderType: 'cutout_mipped',
      textureAll: config.texture,
    });

    // 生成方块状态
    if (config.blockstate) {
      JSON_ASSETS.push({
        path: `${P_BLOCK_STATE}/${blockName}`,
        data: config.blockstate,
      });
    }

  });

  console.info(`${LOG_PREFIX} 注册方块 - 其他 - 特殊 - 完成`);

}

// 注册方块
StartupEvents.registry('block', regBlockBrick);
StartupEvents.registry('block', regBlockBuildingAndFurniture);
StartupEvents.registry('block', regBlockColor);
StartupEvents.registry('block', regBlockLampModern);
StartupEvents.registry('block', regBlockLampSimple);
StartupEvents.registry('block', regBlockMinecart);
StartupEvents.registry('block', regBlockRoad);
StartupEvents.registry('block', regBlockReinforcedConcrete);
StartupEvents.registry('block', regBlockOtherBasic);
StartupEvents.registry('block', regBlockOtherShaped);

// 注册物品
StartupEvents.registry('item', (event) => {

  let itemMaizitong = event.create(`${MOD_ID}:maizitong`);

  itemMaizitong.displayName({ text: '麦子通' });
  itemMaizitong.tooltip({ text: '麦子交通一卡通' })
  itemMaizitong.fireResistant();
  itemMaizitong.maxStackSize(1);
  itemMaizitong.parentModel(`${P_ITEM}/maizitong`);

});

// 注册创造模式标签页
StartupEvents.registry('creative_mode_tab', (event) => {

  // 创建标签页
  const tabBlocks = event.create('wheat_plus:blocks');
  const tabMinecart = event.create('wheat_plus:minecart');
  const tabRoads = event.create('wheat_plus:roads');

  // 设置名称
  tabBlocks.displayName('Wheat Plus | 方块');
  tabMinecart.displayName('Wheat Plus | 矿车');
  tabRoads.displayName('Wheat Plus | 路');

  // 设置图标
  tabBlocks.icon(() => {
    return 'minecraft:hay_block';
  });
  tabMinecart.icon(() => {
    return 'minecraft:minecart';
  });
  tabRoads.icon(() => {
    return 'minecraft:gray_concrete';
  });

  // 设置内容
  // 注：若通过该方式添加，顺序会乱
  tabBlocks.content(() => {
    return ['minecraft:paper'];
  });
  tabMinecart.content(() => {
    return ['minecraft:paper'];
  });
  tabRoads.content(() => {
    return ['minecraft:paper'];
  });

});
StartupEvents.modifyCreativeTab('wheat_plus:blocks', (event) => {
  event.add(TAB_BLOCKS_ITEMS);
});
StartupEvents.modifyCreativeTab('wheat_plus:minecart', (event) => {
  event.add(TAB_MINECART_ITEMS);
});
StartupEvents.modifyCreativeTab('wheat_plus:roads', (event) => {
  event.add(TAB_ROADS_ITEMS);
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
