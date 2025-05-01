// priority: 100

global.COLORS = {
  WHITE: {
    CODE: 'white',
    HEX: '#F9FFFE',
    LABEL_CN: '白色',
    LABEL_EN: 'White',
  },
  ORANGE: {
    CODE: 'orange',
    HEX: '#F9801D',
    LABEL_CN: '橙色',
    LABEL_EN: 'Orange',
  },
  MAGENTA: {
    CODE: 'magenta',
    HEX: '#C74EBD',
    LABEL_CN: '品红色',
    LABEL_EN: 'Magenta',
  },
  LIGHT_BLUE: {
    CODE: 'light_blue',
    HEX: '#3AB3DA',
    LABEL_CN: '淡蓝色',
    LABEL_EN: 'Light Blue',
  },
  YELLOW: {
    CODE: 'yellow',
    HEX: '#FED83D',
    LABEL_CN: '黄色',
    LABEL_EN: 'Yellow',
  },
  LIME: {
    CODE: 'lime',
    HEX: '#80C71F',
    LABEL_CN: '黄绿色',
    LABEL_EN: 'Lime',
  },
  PINK: {
    CODE: 'pink',
    HEX: '#F38BAA',
    LABEL_CN: '粉红色',
    LABEL_EN: 'Pink',
  },
  GRAY: {
    CODE: 'gray',
    HEX: '#474F52',
    LABEL_CN: '灰色',
    LABEL_EN: 'Gray',
  },
  LIGHT_GRAY: {
    CODE: 'light_gray',
    HEX: '#9D9D97',
    LABEL_CN: '淡灰色',
    LABEL_EN: 'Light Gray',
  },
  CYAN: {
    CODE: 'cyan',
    HEX: '#169C9C',
    LABEL_CN: '青色',
    LABEL_EN: 'Cyan',
  },
  PURPLE: {
    CODE: 'purple',
    HEX: '#8932B8',
    LABEL_CN: '紫色',
    LABEL_EN: 'Purple',
  },
  BLUE: {
    CODE: 'blue',
    HEX: '#3C44AA',
    LABEL_CN: '蓝色',
    LABEL_EN: 'Blue',
  },
  BROWN: {
    CODE: 'brown',
    HEX: '#835432',
    LABEL_CN: '棕色',
    LABEL_EN: 'Brown',
  },
  GREEN: {
    CODE: 'green',
    HEX: '#5E7C16',
    LABEL_CN: '绿色',
    LABEL_EN: 'Green',
  },
  RED: {
    CODE: 'red',
    HEX: '#B02E26',
    LABEL_CN: '红色',
    LABEL_EN: 'Red',
  },
  BLACK: {
    CODE: 'black',
    HEX: '#1D1D21',
    LABEL_CN: '黑色',
    LABEL_EN: 'Black',
  },
};

global.JSON_ASSETS = [];
global.LOG_PREFIX = '[KubeJS]';

global.defaults = function (v, d) {
  (typeof d === 'undefined') && (d = null);
  return ((typeof v === 'undefined' || v === null) ? d : v);
};

global.setBlockProps = function (block, opts) {

  if (!block) {
    console.error(`${LOG_PREFIX} 设置方块属性失败：缺少“block”参数`);
    return false;
  }

  if (!opts) {
    opts = {};
  }

  let boxConfig = defaults(opts.boxConfig, null);
  let boxType = defaults(opts.boxType, 'full');
  let displayName = defaults(opts.displayName, '');
  let hardness = defaults(opts.hardness, 8);
  let hasCollision = defaults(opts.hasCollision, true);
  let isSolid = defaults(opts.isSolid, true);
  let lightLevel = defaults(opts.lightLevel, 0);
  let mapColor = defaults(opts.mapColor, 'none');
  let modelPath = defaults(opts.modelPath, null);
  let renderType = defaults(opts.renderType, 'solid');
  let resistance = defaults(opts.resistance, 16);
  let soundType = defaults(opts.soundType, 'stone');
  let textureAll = defaults(opts.textureAll, '');
  let textureSide = defaults(opts.textureSide, '');
  let textureSideNS = defaults(opts.textureSideNS, '');
  let textureSideWE = defaults(opts.textureSideWE, '');
  let textureUpDown = defaults(opts.textureUpDown, '');

  if (boxType === 'custom') {
    if (boxConfig) {
      block.box.apply(block, boxConfig);
    }
    block.waterlogged();
  } else if (boxType === 'full') {
    block.box(0, 0, 0, 16, 16, 16, true);
  } else if (boxType === 'half') {
    block.box(0, 0, 0, 16, 8, 16, true);
    block.waterlogged();
  }

  if (displayName) {
    block.displayName(displayName);
  }

  if (!hasCollision) {
    block.noCollision();
  }

  if (!isSolid) {
    block.notSolid();
  }

  if (modelPath) {

    // 生成模型 JSON 文件
    JSON_ASSETS.push({
      path: `${modelPath.blockNamespace}:models/block/${modelPath.blockName}`,
      data: { parent: modelPath.filePath },
    });

    // // 注：不完全有效，无法使用，会导致方块显示为黑紫方块
    // block.parentModel(modelPath.filePath);

  }

  if (textureAll) {
    block.texture(textureAll);
  }

  if (textureSide) {
    block.texture([
      Direction.NORTH,
      Direction.SOUTH,
      Direction.WEST,
      Direction.EAST,
    ], textureSide);
  }

  if (textureSideNS) {
    block.texture([
      Direction.NORTH,
      Direction.SOUTH,
    ], textureSideNS);
  }

  if (textureSideWE) {
    block.texture([
      Direction.WEST,
      Direction.EAST,
    ], textureSideWE);
  }

  if (textureUpDown) {
    block.texture([
      Direction.UP,
      Direction.DOWN,
    ], textureUpDown);
  }

  block.hardness(hardness);
  block.lightLevel(lightLevel);
  block.mapColor(mapColor);
  block.soundType(soundType);
  block.renderType(renderType);
  block.resistance(resistance);

  return true;

};

global.setHorizontalFacing = function (block, type, model) {

  let prop = BlockProperties.HORIZONTAL_FACING;

  // // 设置模型旋转
  // block.blockstateJson = {
  //   'variants': {
  //     'facing=north': { model: model, y: 0 },
  //     'facing=east': { model: model, y: 90 },
  //     'facing=south': { model: model, y: 180 },
  //     'facing=west': { model: model, y: 270 }
  //   }
  // };

  // 添加属性
  block.property(prop);

  // 处理默认状态
  block.defaultState((ev) => {
    ev.set(prop, 'north');
  });

  // 处理放置状态
  switch (type) {
    // 与玩家朝向相反
    case 'revert':
      block.placementState((ev) => {
        let d = ev.getHorizontalDirection().getOpposite().toString();
        ev.set(prop, d);
      });
      break;
    // 与玩家朝向相同
    case 'same':
      block.placementState((ev) => {
        let d = ev.getHorizontalDirection().toString();
        ev.set(prop, d);
      });
      break;
    // 其他
    default:
      console.error(`${LOG_PREFIX} 设置旋转属性失败：参数“type”错误`);
      return false;
  }

  return true;

};

global.writeJSON = function (path, data) {
  JsonIO.write(path, data);
};

console.info(`${global.LOG_PREFIX} 启动`);
