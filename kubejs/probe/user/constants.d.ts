declare const global: {

  /**
   * @desc 传入值为空时返回指定的默认值
   * @param v 传入值
   * @param d 默认值
   */
  defaults<TValue>(v: TValue, d: TValue): TValue;

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
