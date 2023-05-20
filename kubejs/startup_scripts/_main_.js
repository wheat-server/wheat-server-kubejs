// priority: 100

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

  const boxConfig = defaults(opts.boxConfig, null);
  const boxType = defaults(opts.boxType, '');
  const collision = defaults(opts.collision, true);
  const displayName = defaults(opts.displayName, '');
  const hardness = defaults(opts.hardness, 8);
  const isSolid = defaults(opts.isSolid, true);
  const lightLevel = defaults(opts.lightLevel, 0);
  const material = defaults(opts.material, 'stone');
  const modelPath = defaults(opts.modelPath, '');
  const renderType = defaults(opts.renderType, 'solid');
  const resistance = defaults(opts.resistance, 16);

  if (boxConfig) {
    block.box.apply(block, boxConfig);
  } else if (boxType === 'full') {
    block.box(0, 0, 0, 16, 16, 16, true);
  } else if (boxType === 'half') {
    block.box(0, 0, 0, 16, 8, 16, true);
  }

  if (!collision) {
    block.noCollision();
  }

  if (displayName) {
    block.displayName(displayName);
  }

  if (!isSolid) {
    block.notSolid();
  }

  if (modelPath) {
    block.model(modelPath);
  }

  block.hardness(hardness);
  block.lightLevel(lightLevel);
  block.material(material);
  block.renderType(renderType);
  block.resistance(resistance);

  return true;

};

global.setHorizontalFacing = function (block, type, model) {

  const prop = BlockProperties.HORIZONTAL_FACING;

  // 设置模型旋转
  block.blockstateJson = {
    'variants': {
      'facing=north': { model: model, y: 0 },
      'facing=east': { model: model, y: 90 },
      'facing=south': { model: model, y: 180 },
      'facing=west': { model: model, y: 270 }
    }
  };

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
        const d = ev.getHorizontalDirection().getOpposite().toString();
        ev.set(prop, d);
      });
      break;
    // 与玩家朝向相同
    case 'same':
      block.placementState((ev) => {
        const d = ev.getHorizontalDirection().toString();
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

console.info(`${global.LOG_PREFIX} 启动`);
