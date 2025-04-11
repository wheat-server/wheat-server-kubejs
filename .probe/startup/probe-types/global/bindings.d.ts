import {$RegistryWrapper, $RegistryWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.RegistryWrapper"
import {$Stats, $Stats$$Type} from "net.minecraft.stats.Stats"
import {$UUIDWrapper, $UUIDWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.UUIDWrapper"
import {$NativeEventWrapper, $NativeEventWrapper$$Type} from "dev.latvian.mods.kubejs.neoforge.NativeEventWrapper"
import {$FluidAmounts, $FluidAmounts$$Type} from "dev.latvian.mods.kubejs.util.FluidAmounts"
import {$ID, $ID$$Type} from "dev.latvian.mods.kubejs.util.ID"
import {$JsonIO, $JsonIO$$Type} from "dev.latvian.mods.kubejs.util.JsonIO"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$JavaWrapper, $JavaWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.JavaWrapper"
import {$IngredientWrapper, $IngredientWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.IngredientWrapper"
import {$AABBWrapper, $AABBWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.AABBWrapper"
import {$BlockStatePredicate, $BlockStatePredicate$$Type} from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BlockWrapper, $BlockWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.BlockWrapper"
import {$Math, $Math$$Type} from "java.lang.Math"
import {$KMath, $KMath$$Type} from "dev.latvian.mods.kubejs.bindings.KMath"
import {$ParticleOptionsWrapper, $ParticleOptionsWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.ParticleOptionsWrapper"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Types, $Types$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.Types"
import {$NBTIOWrapper, $NBTIOWrapper$$Type} from "dev.latvian.mods.kubejs.util.NBTIOWrapper"
import {$ColorWrapper, $ColorWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.ColorWrapper"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$TextWrapper, $TextWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.TextWrapper"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NotificationToastData, $NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$Items, $Items$$Type} from "net.minecraft.world.item.Items"
import {$JsonUtils, $JsonUtils$$Type} from "dev.latvian.mods.kubejs.util.JsonUtils"
import {$NBTUtils, $NBTUtils$$Type} from "dev.latvian.mods.kubejs.util.NBTUtils"
import {$PlatformWrapper, $PlatformWrapper$$Type} from "dev.latvian.mods.kubejs.script.PlatformWrapper"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$Probe, $Probe$$Type} from "moe.wolfgirl.probejs.plugin.Probe"
import {$Blocks, $Blocks$$Type} from "net.minecraft.world.level.block.Blocks"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$RotationAxis, $RotationAxis$$Type} from "dev.latvian.mods.kubejs.util.RotationAxis"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$UtilsWrapper, $UtilsWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.UtilsWrapper"
import {$DirectionWrapper, $DirectionWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.DirectionWrapper"
import {$ItemWrapper, $ItemWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.ItemWrapper"
import {$TextIcons, $TextIcons$$Type} from "dev.latvian.mods.kubejs.bindings.TextIcons"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SizedIngredientWrapper, $SizedIngredientWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.SizedIngredientWrapper"
import {$BlockStateProperties, $BlockStateProperties$$Type} from "net.minecraft.world.level.block.state.properties.BlockStateProperties"
import {$FluidWrapper, $FluidWrapper$$Type} from "dev.latvian.mods.kubejs.fluid.FluidWrapper"
import {$ConsoleJS, $ConsoleJS$$Type} from "dev.latvian.mods.kubejs.script.ConsoleJS"

declare global {
const JavaMath: typeof $Math
const Platform: typeof $PlatformWrapper
const HOUR: long
const global: $HashMap
const RotationAxis: typeof $RotationAxis
const Vec4f: typeof $Vector4f
const Notification: typeof $NotificationToastData
const Matrix3f: typeof $Matrix3f
const Items: typeof $Items
const MINUTE: long
const BlockPos: typeof $BlockPos
const BlockProperties: typeof $BlockStateProperties
const Client: $Minecraft
const SoundType: typeof $SoundType
const console: $ConsoleJS
const JsonIO: typeof $JsonIO
const Vec3i: typeof $Vec3i
const Blocks: typeof $Blocks
const DamageSource: typeof $DamageSource
const Quaternionf: typeof $Quaternionf
const Duration: typeof $Duration
const Registry: typeof $RegistryWrapper
const Vec3f: typeof $Vector3f
const Vec3d: typeof $Vec3
const Matrix4f: typeof $Matrix4f
const probejs: $Probe
const Stats: typeof $Stats
const Block: typeof $BlockWrapper
const SECOND: long
export import Java = $JavaWrapper
export import NBT = $NBTUtils
export import Types = $Types
export import Facing = $DirectionWrapper
export import ParticleOptions = $ParticleOptionsWrapper
export import Fluid = $FluidWrapper
export import Color = $ColorWrapper
export import SizedIngredient = $SizedIngredientWrapper
export import Text = $TextWrapper
export import NBTIO = $NBTIOWrapper
export import Direction = $DirectionWrapper
export import TextIcons = $TextIcons
export import Item = $ItemWrapper
export import Utils = $UtilsWrapper
export import JsonUtils = $JsonUtils
export import Ingredient = $IngredientWrapper
export import KMath = $KMath
export import ID = $ID
export import BlockStatePredicate = $BlockStatePredicate
export import Component = $TextWrapper
export import UUID = $UUIDWrapper
export import NativeEvents = $NativeEventWrapper
export import AABB = $AABBWrapper
export import FluidAmounts = $FluidAmounts
}