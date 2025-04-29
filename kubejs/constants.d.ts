// 注：需要在 `jsconfig.json` 配置文件的 `files` 字段中包含该文件（若在 `include` 字段中，定义会被覆盖）。

import type {
  $BasicBlockJS$Builder,
} from 'dev.latvian.mods.kubejs.block.custom.BasicBlockJS$Builder';

import {
  $BlockRenderType$$Type,
} from 'dev.latvian.mods.kubejs.block.BlockRenderType';

import type {
  $ButtonBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.ButtonBlockBuilder';

import type {
  $CarpetBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.CarpetBlockBuilder';

import type {
  $CropBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.CropBlockBuilder';

import type {
  $DetectorBlock$Builder,
} from 'dev.latvian.mods.kubejs.block.DetectorBlock$Builder';

import type {
  $DoorBlockBuilder
} from 'dev.latvian.mods.kubejs.block.custom.DoorBlockBuilder';

import type {
  $FallingBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.FallingBlockBuilder';

import type {
  $FenceBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.FenceBlockBuilder';

import type {
  $FenceGateBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.FenceGateBlockBuilder';

import type {
  $HorizontalDirectionalBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.HorizontalDirectionalBlockBuilder';

import type {
  $PressurePlateBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.PressurePlateBlockBuilder';

import type {
  $SlabBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.SlabBlockBuilder';

import type {
  $StairBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.StairBlockBuilder';

import type {
  $TrapdoorBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.TrapdoorBlockBuilder';

import type {
  $WallBlockBuilder,
} from 'dev.latvian.mods.kubejs.block.custom.WallBlockBuilder';

import type {
  $Block,
} from 'moe.wolfgirl.probejs.generated.registry.minecraft.Block';

import {
  $MapColor$$Type,
} from 'net.minecraft.world.level.material.MapColor';

import {
  $SoundType$$Type,
} from 'net.minecraft.world.level.block.SoundType';

/** 方块构造器 */
type BlockBuilder = (
  $BasicBlockJS$Builder &
  $ButtonBlockBuilder &
  $CarpetBlockBuilder &
  $CropBlockBuilder &
  $DetectorBlock$Builder &
  $DoorBlockBuilder &
  $FallingBlockBuilder &
  $FenceBlockBuilder &
  $FenceGateBlockBuilder &
  $HorizontalDirectionalBlockBuilder &
  $PressurePlateBlockBuilder &
  $SlabBlockBuilder &
  $StairBlockBuilder &
  $TrapdoorBlockBuilder &
  $WallBlockBuilder
);

/** 配置选项 */
type SetBlockPropsOpts = {

  /** 碰撞箱配置，默认：null */
  boxConfig?: [number, number, number, number, number, number, boolean?];

  /** 碰撞箱类型，默认 full */
  boxType?: 'custom' | 'full' | 'half';

  /** 方块显示名称 */
  displayName: string;

  /** 坚硬程度，默认：8 */
  hardness?: number;

  /** 开启碰撞箱，默认：true */
  hasCollision?: boolean;

  /** 是否为完整方块，默认：true */
  isSolid?: boolean;

  /** 亮度等级，范围：0 ~ 1，默认：0 */
  lightLevel?: number;

  /** 地图颜色，默认：none */
  mapColor?: $MapColor$$Type;

  /** 模型文件路径配置 */
  modelPath?: {

    /** 方块所属命名空间，示例：`minecraft` */
    blockNamespace: string;

    /** 方块名称，示例：`stone` */
    blockName: string;

    /** 模型文件路径，示例：`minecraft:block/stone` */
    filePath: string;

  };

  /**
   * 方块渲染类型，默认：solid
   * - `cutout`: required for blocks with texture like glass
   * - `translucent`: required for blocks like stained glass
   */
  renderType?: $BlockRenderType$$Type;

  /** 坚固程度，默认：16 */
  resistance?: number;

  /** 声音类型，默认：stone */
  soundType?: $SoundType$$Type;

  /** 纹理文件路径，每一面都相同时指定 */
  textureAll?: string;

  /** 纹理文件路径，侧面都相同时指定 */
  textureSide?: string;

  /** 纹理文件路径，上下面都相同时指定 */
  textureUpDown?: string;

};

declare global {

  /** 方块注册事件 */
  type _RegistryBlock = $Block;

  const global: {

    /**
     * @description 传入值为空时返回指定的默认值
     * @param v 传入值
     * @param d 默认值
     */
    defaults<TValue>(v: TValue, d: TValue): TValue;

    /**
     * @description 设置方块基础属性
     * @param block   方块
     * @param options 配置选项
     */
    setBlockProps(block: BlockBuilder, options: SetBlockPropsOpts): boolean;

    /**
     * @description 设置方块水平旋转属性
     * @param block 方块
     * @param type  旋转类型
     * @param model 模型路径
     */
    setHorizontalFacing(
      block: BlockBuilder,
      type: 'revert' | 'same',
      model: string
    ): boolean;

    /**
     * @description 写入 JSON 文件
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

      /** JSON 完整路径，示例：`minecraft:models/block/stone` */
      path: string;

      data: object;

    }>;

    /** 日志前缀 */
    LOG_PREFIX: string;

  };

}

export { };
