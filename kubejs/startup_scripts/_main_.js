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
  WHITE: { CODE: 'white', HEX: '#F9FFFE' },
  ORANGE: { CODE: 'orange', HEX: '#F9801D' },
  MAGENTA: { CODE: 'magenta', HEX: '#C74EBD' },
  LIGHT_BLUE: { CODE: 'light_blue', HEX: '#3AB3DA' },
  YELLOW: { CODE: 'yellow', HEX: '#FED83D' },
  LIME: { CODE: 'lime', HEX: '#80C71F' },
  PINK: { CODE: 'pink', HEX: '#F38BAA' },
  GRAY: { CODE: 'gray', HEX: '#474F52' },
  LIGHT_GRAY: { CODE: 'light_gray', HEX: '#9D9D97' },
  CYAN: { CODE: 'cyan', HEX: '#169C9C' },
  PURPLE: { CODE: 'purple', HEX: '#8932B8' },
  BLUE: { CODE: 'blue', HEX: '#3C44AA' },
  BROWN: { CODE: 'brown', HEX: '#835432' },
  GREEN: { CODE: 'green', HEX: '#5E7C16' },
  RED: { CODE: 'red', HEX: '#B02E26' },
  BLACK: { CODE: 'black', HEX: '#1D1D21' },
};

global.LOG_PREFIX = '[KubeJS]';

console.info(`${global.LOG_PREFIX} 启动`);
