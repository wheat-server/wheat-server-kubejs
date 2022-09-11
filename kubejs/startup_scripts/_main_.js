// priority: 100

// 注意事项：
// - 暂不支持解构赋值（2022-08-28）
// - 暂不支持设置函数参数默认值（2022-08-28）
// - 暂不支持 try catch（2022-08-28）

// 自定义方块：
// https://mods.latvian.dev/books/kubejs/page/custom-blocks

global.defaults = function (v, d) {
  (typeof d === 'undefined') && (d = null);
  return ((typeof v === 'undefined' || v === null) ? d : v);
};

global.writeJSON = function (path, data) {
  JsonIO.write(path, data);
};

// 参考：
// https://github.com/Railcraft/Railcraft/blob/mc-1.12.2/src/main/java/mods/railcraft/common/plugins/color/EnumColor.java
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
