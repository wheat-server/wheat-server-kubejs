/** 方块构造器 */
type B_Builder = Internal.BlockBuilder;

/** 方块碰撞箱类型 */
type B_BoxType = 'custom' | 'full' | 'half';

/** 方块材质类型 */
type B_Material = Internal.MaterialJS_;

/**
 * 方块渲染类型
 * - `cutout`: required for blocks with texture like glass
 * - `translucent`: required for blocks like stained glass
 */
type B_RenderType = 'solid' | 'cutout' | 'cutout_mipped' | 'translucent';

/** 配置选项 */
type SetBlockPropsOpts = {
  /** 碰撞箱配置（自定义） */
  boxConfig: number[];
  /** 碰撞箱类型（内置） */
  boxType: B_BoxType;
  /** 开启碰撞箱，默认：true */
  collision: boolean;
  /** 方块显示名称 */
  displayName: string;
  /** 默认：8 */
  hardness: number;
  /** 是否为完整方块，默认：true */
  isSolid: boolean;
  /** 范围：0 ~ 1 */
  lightLevel: number;
  /** 默认：stone */
  material: B_Material;
  /** 模型文件路径 */
  modelPath: string;
  /** 默认：solid */
  renderType: B_RenderType;
  /** 默认：16 */
  resistance: number;
  /** fullBlock（未使用）*/
  isFull: boolean;
  /** opaque（未使用）*/
  isOpaque: boolean;
  /** transparent（未使用）*/
  transparent: boolean;
};

declare const global: {

  /**
   * @desc 传入值为空时返回指定的默认值
   * @param v 传入值
   * @param d 默认值
   */
  defaults<TValue>(v: TValue, d: TValue): TValue;

  /**
   * @desc 设置方块基础属性
   * @param block 方块
   * @param opts  配置选项
   */
  setBlockProps(block: B_Builder, opts: SetBlockPropsOpts): boolean;

  /**
   * @desc 写入 JSON 文件
   * @param path 文件路径，相对于 `.minecraft`
   * @param data JSON 内容对象
   */
  writeJSON(path: string, data: object): void;

  /** 颜色列表 */
  COLORS: {
    [key: string]: {
      CODE: string;
      HEX: string;
      LABEL_CN: string;
      LABEL_EN: string;
    };
  };

  /** 需要在 `client.generate_assets` 生成的 JSON 文件 */
  JSON_ASSETS: Array<{
    PATH: string;
    DATA: Internal.JsonElement;
  }>;

  /** 日志前缀 */
  LOG_PREFIX: string;

};
