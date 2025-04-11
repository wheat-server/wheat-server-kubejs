declare module "io.netty.channel.SelectStrategyFactory" {
import {$SelectStrategy, $SelectStrategy$$Type} from "io.netty.channel.SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory {

 "newSelectStrategy"(): $SelectStrategy

(): $SelectStrategy$$Type
}

export namespace $SelectStrategyFactory {
const probejs$$marker: never
}
export class $SelectStrategyFactory$$Static implements $SelectStrategyFactory {


 "newSelectStrategy"(): $SelectStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategyFactory$$Type = (() => $SelectStrategy$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategyFactory_ = $SelectStrategyFactory$$Type;
}}
declare module "io.netty.util.Constant" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant<T extends $Constant<(T)>> extends $Comparable<(T)> {

 "name"(): string
 "id"(): integer
 "compareTo"(arg0: T): integer
}

export namespace $Constant {
const probejs$$marker: never
}
export class $Constant$$Static<T extends $Constant<(T)>> implements $Constant {


 "name"(): string
 "id"(): integer
 "compareTo"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constant$$Type<T> = ($Constant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constant_<T> = $Constant$$Type<(T)>;
}}
declare module "io.netty.channel.WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(arg0: integer, arg1: integer)

public "toString"(): string
public "high"(): integer
public "low"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriteBufferWaterMark$$Type = ($WriteBufferWaterMark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriteBufferWaterMark_ = $WriteBufferWaterMark$$Type;
}}
declare module "io.netty.buffer.ByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ByteBufConvertible, $ByteBufConvertible$$Type} from "io.netty.buffer.ByteBufConvertible"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$ByteProcessor, $ByteProcessor$$Type} from "io.netty.util.ByteProcessor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted, $Comparable<($ByteBuf)>, $ByteBufConvertible {

constructor()

public "nioBufferCount"(): integer
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "hasMemoryAddress"(): boolean
public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "ensureWritable"(arg0: integer): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "markWriterIndex"(): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "getUnsignedShortLE"(arg0: integer): integer
public "getMediumLE"(arg0: integer): integer
public "getUnsignedInt"(arg0: integer): long
public "getUnsignedMedium"(arg0: integer): integer
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeLongLE"(arg0: long): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "readUnsignedMedium"(): integer
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readFloatLE"(): float
public "readDoubleLE"(): double
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "maxCapacity"(): integer
public "readerIndex"(): integer
public "readerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "readableBytes"(): integer
public "writableBytes"(): integer
public "maxWritableBytes"(): integer
public "markReaderIndex"(): $ByteBuf
public "equals"(arg0: any): boolean
public "toString"(): string
public "toString"(arg0: $Charset$$Type): string
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): string
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "compareTo"(arg0: any): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(): integer
public "capacity"(arg0: integer): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "slice"(): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
/**
 * 
 * @deprecated
 */
public "order"(): $ByteOrder
/**
 * 
 * @deprecated
 */
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "getUnsignedShort"(arg0: integer): integer
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(arg0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "setDoubleLE"(arg0: integer, arg1: double): $ByteBuf
public "getDoubleLE"(arg0: integer): double
public "getUnsignedIntLE"(arg0: integer): long
public "readShortLE"(): short
public "readMediumLE"(): integer
public "asReadOnly"(): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "isContiguous"(): boolean
public "memoryAddress"(): long
public "maxFastWritableBytes"(): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "discardSomeReadBytes"(): $ByteBuf
public "readUnsignedMediumLE"(): integer
public "readUnsignedShortLE"(): integer
public "touch"(): $ReferenceCounted
public "touch"(arg0: any): $ReferenceCounted
public "writeFloatLE"(arg0: float): $ByteBuf
public "writeDoubleLE"(arg0: double): $ByteBuf
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "nioBuffer"(): $ByteBuffer
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "getFloatLE"(arg0: integer): float
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "readMedium"(): integer
public "getIntLE"(arg0: integer): integer
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "setFloatLE"(arg0: integer, arg1: float): $ByteBuf
public "retain"(arg0: integer): $ByteBuf
public "retain"(): $ByteBuf
public "getLongLE"(arg0: integer): long
public "asByteBuf"(): $ByteBuf
public "readSlice"(arg0: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "readIntLE"(): integer
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "writeIntLE"(arg0: integer): $ByteBuf
public "getShortLE"(arg0: integer): short
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "readLongLE"(): long
public "getMedium"(arg0: integer): integer
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "alloc"(): $ByteBufAllocator
public "release"(arg0: integer): boolean
public "release"(): boolean
public "refCnt"(): integer
get "direct"(): boolean
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
get "contiguous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuf$$Type = ($ByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBuf_ = $ByteBuf$$Type;
}}
declare module "io.netty.channel.MessageSizeEstimator" {
import {$MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$$Type} from "io.netty.channel.MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator {

 "newHandle"(): $MessageSizeEstimator$Handle

(): $MessageSizeEstimator$Handle$$Type
}

export namespace $MessageSizeEstimator {
const probejs$$marker: never
}
export class $MessageSizeEstimator$$Static implements $MessageSizeEstimator {


 "newHandle"(): $MessageSizeEstimator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$$Type = (() => $MessageSizeEstimator$Handle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator_ = $MessageSizeEstimator$$Type;
}}
declare module "io.netty.channel.ChannelProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$ChannelProgressiveFuture, $ChannelProgressiveFuture$$Type} from "io.netty.channel.ChannelProgressiveFuture"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise extends $ProgressivePromise<(void)>, $ChannelProgressiveFuture, $ChannelPromise {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "await"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "channel"(): $Channel
 "trySuccess"(): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "isVoid"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
set "success"(value: void)
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
get "void"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelProgressivePromise {
const probejs$$marker: never
}
export class $ChannelProgressivePromise$$Static implements $ChannelProgressivePromise {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "await"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "channel"(): $Channel
 "trySuccess"(): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "isVoid"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressivePromise$$Type = ($ChannelProgressivePromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressivePromise_ = $ChannelProgressivePromise$$Type;
}}
declare module "io.netty.channel.ChannelHandlerContext" {
import {$ChannelInboundInvoker, $ChannelInboundInvoker$$Type} from "io.netty.channel.ChannelInboundInvoker"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelPipeline, $ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$AttributeMap, $AttributeMap$$Type} from "io.netty.util.AttributeMap"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {

 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "name"(): string
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "pipeline"(): $ChannelPipeline
 "isRemoved"(): boolean
 "alloc"(): $ByteBufAllocator
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelHandlerContext
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
get "removed"(): boolean
}

export namespace $ChannelHandlerContext {
const probejs$$marker: never
}
export class $ChannelHandlerContext$$Static implements $ChannelHandlerContext {


 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "name"(): string
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "pipeline"(): $ChannelPipeline
 "isRemoved"(): boolean
 "alloc"(): $ByteBufAllocator
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelHandlerContext
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerContext$$Type = ($ChannelHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerContext_ = $ChannelHandlerContext$$Type;
}}
declare module "io.netty.util.concurrent.AbstractEventExecutorGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup {

constructor()

/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future<(any)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future<(any)>
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "shutdownGracefully"(): $Future$0<(any)>
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isShuttingDown"(): boolean
public "terminationFuture"(): $Future$0<(any)>
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
public "spliterator"(): $Spliterator<($EventExecutor)>
public "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
public "isTerminated"(): boolean
public "close"(): void
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEventExecutorGroup$$Type = ($AbstractEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEventExecutorGroup_ = $AbstractEventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.RejectedExecutionHandler" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$SingleThreadEventExecutor, $SingleThreadEventExecutor$$Type} from "io.netty.util.concurrent.SingleThreadEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler {

 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void

(arg0: $Runnable, arg1: $SingleThreadEventExecutor): void
}

export namespace $RejectedExecutionHandler {
const probejs$$marker: never
}
export class $RejectedExecutionHandler$$Static implements $RejectedExecutionHandler {


 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RejectedExecutionHandler$$Type = ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RejectedExecutionHandler_ = $RejectedExecutionHandler$$Type;
}}
declare module "io.netty.channel.EventLoopGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup extends $EventExecutorGroup {

 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoopGroup {
const probejs$$marker: never
}
export class $EventLoopGroup$$Static implements $EventLoopGroup {


 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopGroup$$Type = ($EventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopGroup_ = $EventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$ChannelOption, $ChannelOption$$Type} from "io.netty.channel.ChannelOption"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig {

 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "isAutoClose"(): boolean
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>): boolean
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getAllocator"(): $ByteBufAllocator
 "isAutoRead"(): boolean
 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getConnectTimeoutMillis"(): integer
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
set "allocator"(value: $ByteBufAllocator$$Type)
get "autoClose"(): boolean
get "writeSpinCount"(): integer
set "writeSpinCount"(value: integer)
set "autoClose"(value: boolean)
set "options"(value: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>)
set "connectTimeoutMillis"(value: integer)
set "autoRead"(value: boolean)
get "writeBufferHighWaterMark"(): integer
set "writeBufferHighWaterMark"(value: integer)
get "allocator"(): $ByteBufAllocator
get "autoRead"(): boolean
get "options"(): $Map<($ChannelOption<(any)>), (any)>
set "messageSizeEstimator"(value: $MessageSizeEstimator$$Type)
get "maxMessagesPerRead"(): integer
set "maxMessagesPerRead"(value: integer)
set "recvByteBufAllocator"(value: $RecvByteBufAllocator$$Type)
get "writeBufferLowWaterMark"(): integer
get "messageSizeEstimator"(): $MessageSizeEstimator
set "writeBufferLowWaterMark"(value: integer)
get "connectTimeoutMillis"(): integer
get "writeBufferWaterMark"(): $WriteBufferWaterMark
set "writeBufferWaterMark"(value: $WriteBufferWaterMark$$Type)
get "recvByteBufAllocator"(): T
}

export namespace $ChannelConfig {
const probejs$$marker: never
}
export class $ChannelConfig$$Static implements $ChannelConfig {


 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "isAutoClose"(): boolean
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>): boolean
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getAllocator"(): $ByteBufAllocator
 "isAutoRead"(): boolean
 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getConnectTimeoutMillis"(): integer
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelConfig$$Type = ($ChannelConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelConfig_ = $ChannelConfig$$Type;
}}
declare module "io.netty.util.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier {

 "get"(): integer

(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export class $IntSupplier$$Static implements $IntSupplier {


 "get"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSupplier_ = $IntSupplier$$Type;
}}
declare module "io.netty.buffer.AbstractReferenceCountedByteBuf" {
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$AbstractByteBuf, $AbstractByteBuf$$Type} from "io.netty.buffer.AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {


public "release"(): boolean
public "release"(arg0: integer): boolean
public "touch"(): $ReferenceCounted
public "touch"(arg0: any): $ReferenceCounted
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $ReferenceCounted
public "refCnt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceCountedByteBuf$$Type = ($AbstractReferenceCountedByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReferenceCountedByteBuf_ = $AbstractReferenceCountedByteBuf$$Type;
}}
declare module "io.netty.channel.ChannelPromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise extends $ChannelFuture, $Promise<(void)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "await"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelPromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "trySuccess"(): boolean
 "unvoid"(): $ChannelPromise
 "isVoid"(): boolean
 "setUncancellable"(): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
set "success"(value: void)
set "failure"(value: $Throwable$$Type)
get "void"(): boolean
set "success"(value: void)
get "cancellable"(): boolean
get "now"(): void
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelPromise {
const probejs$$marker: never
}
export class $ChannelPromise$$Static implements $ChannelPromise {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "await"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelPromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "trySuccess"(): boolean
 "unvoid"(): $ChannelPromise
 "isVoid"(): boolean
 "setUncancellable"(): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPromise$$Type = ($ChannelPromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPromise_ = $ChannelPromise$$Type;
}}
declare module "io.netty.buffer.ByteBufConvertible" {
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible {

 "asByteBuf"(): $ByteBuf

(): $ByteBuf$$Type
}

export namespace $ByteBufConvertible {
const probejs$$marker: never
}
export class $ByteBufConvertible$$Static implements $ByteBufConvertible {


 "asByteBuf"(): $ByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufConvertible$$Type = (() => $ByteBuf$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufConvertible_ = $ByteBufConvertible$$Type;
}}
declare module "io.netty.channel.Channel" {
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$ChannelConfig, $ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Channel$Unsafe, $Channel$Unsafe$$Type} from "io.netty.channel.Channel$Unsafe"
import {$ChannelId, $ChannelId$$Type} from "io.netty.channel.ChannelId"
import {$ChannelPipeline, $ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$AttributeMap, $AttributeMap$$Type} from "io.netty.util.AttributeMap"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"
import {$ChannelMetadata, $ChannelMetadata$$Type} from "io.netty.channel.ChannelMetadata"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<($Channel)> {

 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "metadata"(): $ChannelMetadata
 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "pipeline"(): $ChannelPipeline
 "bytesBeforeWritable"(): long
 "bytesBeforeUnwritable"(): long
 "alloc"(): $ByteBufAllocator
 "closeFuture"(): $ChannelFuture
 "eventLoop"(): $EventLoop
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "compareTo"(arg0: $Channel$$Type): integer
get "open"(): boolean
get "registered"(): boolean
get "active"(): boolean
get "writable"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export class $Channel$$Static implements $Channel {


 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "metadata"(): $ChannelMetadata
 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "pipeline"(): $ChannelPipeline
 "bytesBeforeWritable"(): long
 "bytesBeforeUnwritable"(): long
 "alloc"(): $ByteBufAllocator
 "closeFuture"(): $ChannelFuture
 "eventLoop"(): $EventLoop
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "compareTo"(arg0: $Channel$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel_ = $Channel$$Type;
}}
declare module "io.netty.channel.SelectStrategy" {
import {$IntSupplier, $IntSupplier$$Type} from "io.netty.util.IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy {

 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer

(arg0: $IntSupplier, arg1: boolean): integer
}

export namespace $SelectStrategy {
const CONTINUE: integer
const BUSY_WAIT: integer
const SELECT: integer
const probejs$$marker: never
}
export class $SelectStrategy$$Static implements $SelectStrategy {
static readonly "CONTINUE": integer
static readonly "BUSY_WAIT": integer
static readonly "SELECT": integer


 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategy$$Type = ((arg0: $IntSupplier, arg1: boolean) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategy_ = $SelectStrategy$$Type;
}}
declare module "io.netty.buffer.CompositeByteBuf" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$AbstractReferenceCountedByteBuf, $AbstractReferenceCountedByteBuf$$Type} from "io.netty.buffer.AbstractReferenceCountedByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable<($ByteBuf)> {

constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer)
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, ...arg3: ($ByteBuf$$Type)[])
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, arg3: $Iterable$$Type<($ByteBuf$$Type)>)

public "nioBufferCount"(): integer
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "hasMemoryAddress"(): boolean
public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $CompositeByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "resetReaderIndex"(): $CompositeByteBuf
public "writeMedium"(arg0: integer): $CompositeByteBuf
public "readerIndex"(arg0: integer): $CompositeByteBuf
public "writerIndex"(arg0: integer): $ByteBuf
public "markReaderIndex"(): $CompositeByteBuf
public "toString"(): string
public "getByte"(arg0: integer): byte
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "iterator"(): $Iterator<($ByteBuf)>
public "component"(arg0: integer): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $CompositeByteBuf
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $CompositeByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(): integer
public "capacity"(arg0: integer): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[]): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "order"(): $ByteOrder
public "writeChar"(arg0: integer): $CompositeByteBuf
public "writeFloat"(arg0: float): $ByteBuf
public "skipBytes"(arg0: integer): $CompositeByteBuf
public "writeBoolean"(arg0: boolean): $CompositeByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "setIndex"(arg0: integer, arg1: integer): $CompositeByteBuf
public "internalComponentAtOffset"(arg0: integer): $ByteBuf
public "addFlattenedComponents"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "discardReadComponents"(): $CompositeByteBuf
public "maxNumComponents"(): integer
public "removeComponents"(arg0: integer, arg1: integer): $CompositeByteBuf
public "componentAtOffset"(arg0: integer): $ByteBuf
public "internalComponent"(arg0: integer): $ByteBuf
public "numComponents"(): integer
public "toComponentIndex"(arg0: integer): integer
public "addComponents"(arg0: integer, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(...arg0: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: boolean, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: integer, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: boolean, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "removeComponent"(arg0: integer): $CompositeByteBuf
public "consolidate"(arg0: integer, arg1: integer): $CompositeByteBuf
public "consolidate"(): $CompositeByteBuf
public "toByteIndex"(arg0: integer): integer
public "memoryAddress"(): long
public "decompose"(arg0: integer, arg1: integer): $List<($ByteBuf)>
public "discardSomeReadBytes"(): $ByteBuf
public "touch"(arg0: any): $ReferenceCounted
public "touch"(): $ReferenceCounted
public "addComponent"(arg0: boolean, arg1: integer, arg2: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "retain"(): $CompositeByteBuf
public "retain"(arg0: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "setMedium"(arg0: integer, arg1: integer): $CompositeByteBuf
public "alloc"(): $ByteBufAllocator
public "spliterator"(): $Spliterator<($ByteBuf)>
public "forEach"(arg0: $Consumer$$Type<($ByteBuf)>): void
[Symbol.iterator](): IterableIterator<$ByteBuf>;
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeByteBuf$$Type = ($CompositeByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeByteBuf_ = $CompositeByteBuf$$Type;
}}
declare module "io.netty.channel.ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: integer)

public "defaultMaxMessagesPerRead"(): integer
public "hasDisconnect"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMetadata$$Type = ($ChannelMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelMetadata_ = $ChannelMetadata$$Type;
}}
declare module "io.netty.util.concurrent.ScheduledFuture" {
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Delayed, $Delayed$$Type} from "java.util.concurrent.Delayed"
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture<V> extends $Future<(V)>, $ScheduledFuture$0<(V)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
get "cancellable"(): boolean
get "now"(): V
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export class $ScheduledFuture$$Static<V> implements $ScheduledFuture {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$$Type<(V)>;
}}
declare module "io.netty.channel.SimpleChannelInboundHandler" {
import {$ChannelInboundHandlerAdapter, $ChannelInboundHandlerAdapter$$Type} from "io.netty.channel.ChannelInboundHandlerAdapter"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {


public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "acceptInboundMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleChannelInboundHandler$$Type<I> = ($SimpleChannelInboundHandler<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleChannelInboundHandler_<I> = $SimpleChannelInboundHandler$$Type<(I)>;
}}
declare module "io.netty.channel.epoll.EpollEventLoopGroup" {
import {$SelectStrategyFactory, $SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$List, $List$$Type} from "java.util.List"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectStrategyFactory$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: integer, arg3: $SelectStrategyFactory$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: integer)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type, arg5: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type, arg5: $EventLoopTaskQueueFactory$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $SelectStrategyFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "setIoRatio"(arg0: integer): void
public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpollEventLoopGroup$$Type = ($EpollEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpollEventLoopGroup_ = $EpollEventLoopGroup$$Type;
}}
declare module "io.netty.util.AttributeKey" {
import {$AbstractConstant, $AbstractConstant$$Type} from "io.netty.util.AbstractConstant"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T> extends $AbstractConstant<($AttributeKey<(T)>)> {


public static "valueOf"<T>(arg0: string): $AttributeKey<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(any)>, arg1: string): $AttributeKey<(T)>
public static "newInstance"<T>(arg0: string): $AttributeKey<(T)>
public static "exists"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$$Type<(T)>;
}}
declare module "io.netty.util.concurrent.OrderedEventExecutor" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor extends $EventExecutor {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $OrderedEventExecutor {
const probejs$$marker: never
}
export class $OrderedEventExecutor$$Static implements $OrderedEventExecutor {


 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderedEventExecutor$$Type = ($OrderedEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderedEventExecutor_ = $OrderedEventExecutor$$Type;
}}
declare module "io.netty.channel.nio.NioEventLoopGroup" {
import {$SelectStrategyFactory, $SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$List, $List$$Type} from "java.util.List"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$SelectorProvider, $SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type, arg7: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(arg0: integer)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "rebuildSelectors"(): void
public "setIoRatio"(arg0: integer): void
public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NioEventLoopGroup$$Type = ($NioEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NioEventLoopGroup_ = $NioEventLoopGroup$$Type;
}}
declare module "io.netty.channel.RecvByteBufAllocator" {
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator {

 "newHandle"(): $RecvByteBufAllocator$Handle

(): $RecvByteBufAllocator$Handle$$Type
}

export namespace $RecvByteBufAllocator {
const probejs$$marker: never
}
export class $RecvByteBufAllocator$$Static implements $RecvByteBufAllocator {


 "newHandle"(): $RecvByteBufAllocator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$$Type = (() => $RecvByteBufAllocator$Handle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator_ = $RecvByteBufAllocator$$Type;
}}
declare module "io.netty.channel.ChannelPipeline" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ChannelInboundInvoker, $ChannelInboundInvoker$$Type} from "io.netty.channel.ChannelInboundInvoker"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<($Map$Entry<(string), ($ChannelHandler)>)> {

 "firstContext"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: string): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "get"(arg0: string): $ChannelHandler
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "context"(arg0: string): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: string, arg2: $ChannelHandler$$Type): T
 "replace"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"(arg0: $ChannelHandler$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "last"(): $ChannelHandler
 "toMap"(): $Map<(string), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "names"(): $List<(string)>
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "lastContext"(): $ChannelHandlerContext
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelActive"(): $ChannelPipeline
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "iterator"(): $Iterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(string), ($ChannelHandler)>)>): void
[Symbol.iterator](): IterableIterator<$Map$Entry<(string), ($ChannelHandler)>>;
}

export namespace $ChannelPipeline {
const probejs$$marker: never
}
export class $ChannelPipeline$$Static implements $ChannelPipeline {


 "firstContext"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: string): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "get"(arg0: string): $ChannelHandler
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "context"(arg0: string): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: string, arg2: $ChannelHandler$$Type): T
 "replace"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"(arg0: $ChannelHandler$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "last"(): $ChannelHandler
 "toMap"(): $Map<(string), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "names"(): $List<(string)>
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "lastContext"(): $ChannelHandlerContext
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelActive"(): $ChannelPipeline
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "iterator"(): $Iterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(string), ($ChannelHandler)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPipeline$$Type = ($ChannelPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPipeline_ = $ChannelPipeline$$Type;
}}
declare module "io.netty.channel.ChannelHandler" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler {

 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
}

export namespace $ChannelHandler {
const probejs$$marker: never
}
export class $ChannelHandler$$Static implements $ChannelHandler {


 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandler$$Type = ($ChannelHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandler_ = $ChannelHandler$$Type;
}}
declare module "io.netty.util.concurrent.ThreadProperties" {
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Thread$State, $Thread$State$$Type} from "java.lang.Thread$State"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties {

 "name"(): string
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
get "daemon"(): boolean
get "alive"(): boolean
get "interrupted"(): boolean
}

export namespace $ThreadProperties {
const probejs$$marker: never
}
export class $ThreadProperties$$Static implements $ThreadProperties {


 "name"(): string
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadProperties$$Type = ($ThreadProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadProperties_ = $ThreadProperties$$Type;
}}
declare module "io.netty.channel.ChannelHandlerAdapter" {
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler {

constructor()

public "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
public "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "isSharable"(): boolean
get "sharable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerAdapter$$Type = ($ChannelHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerAdapter_ = $ChannelHandlerAdapter$$Type;
}}
declare module "io.netty.buffer.ByteBufAllocator" {
import {$CompositeByteBuf, $CompositeByteBuf$$Type} from "io.netty.buffer.CompositeByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator {

 "buffer"(): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "isDirectBufferPooled"(): boolean
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
 "compositeDirectBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(): $CompositeByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
get "directBufferPooled"(): boolean
}

export namespace $ByteBufAllocator {
const DEFAULT: $ByteBufAllocator
const probejs$$marker: never
}
export class $ByteBufAllocator$$Static implements $ByteBufAllocator {
static readonly "DEFAULT": $ByteBufAllocator


 "buffer"(): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "isDirectBufferPooled"(): boolean
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
 "compositeDirectBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(): $CompositeByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufAllocator$$Type = ($ByteBufAllocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufAllocator_ = $ByteBufAllocator$$Type;
}}
declare module "io.netty.channel.ChannelInboundHandler" {
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler extends $ChannelHandler {

 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
}

export namespace $ChannelInboundHandler {
const probejs$$marker: never
}
export class $ChannelInboundHandler$$Static implements $ChannelInboundHandler {


 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandler$$Type = ($ChannelInboundHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandler_ = $ChannelInboundHandler$$Type;
}}
declare module "io.netty.channel.ChannelInboundInvoker" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker {

 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelActive"(): $ChannelInboundInvoker
}

export namespace $ChannelInboundInvoker {
const probejs$$marker: never
}
export class $ChannelInboundInvoker$$Static implements $ChannelInboundInvoker {


 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelActive"(): $ChannelInboundInvoker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundInvoker$$Type = ($ChannelInboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundInvoker_ = $ChannelInboundInvoker$$Type;
}}
declare module "io.netty.util.Attribute" {
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute<T> {

 "setIfAbsent"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
set "ifAbsent"(value: T)
get "andRemove"(): T
}

export namespace $Attribute {
const probejs$$marker: never
}
export class $Attribute$$Static<T> implements $Attribute {


 "setIfAbsent"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attribute$$Type<T> = ($Attribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attribute_<T> = $Attribute$$Type<(T)>;
}}
declare module "io.netty.channel.DefaultEventLoopGroup" {
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$List, $List$$Type} from "java.util.List"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()

public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultEventLoopGroup$$Type = ($DefaultEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultEventLoopGroup_ = $DefaultEventLoopGroup$$Type;
}}
declare module "io.netty.channel.MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle {

 "size"(arg0: any): integer

(arg0: any): integer
}

export namespace $MessageSizeEstimator$Handle {
const probejs$$marker: never
}
export class $MessageSizeEstimator$Handle$$Static implements $MessageSizeEstimator$Handle {


 "size"(arg0: any): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$Handle$$Type = ((arg0: any) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator$Handle_ = $MessageSizeEstimator$Handle$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutor" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor extends $EventExecutorGroup {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutor {
const probejs$$marker: never
}
export class $EventExecutor$$Static implements $EventExecutor {


 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutor$$Type = ($EventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutor_ = $EventExecutor$$Type;
}}
declare module "io.netty.channel.ChannelId" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId extends $Serializable, $Comparable<($ChannelId)> {

 "asShortText"(): string
 "asLongText"(): string
 "compareTo"(arg0: $ChannelId$$Type): integer
}

export namespace $ChannelId {
const probejs$$marker: never
}
export class $ChannelId$$Static implements $ChannelId {


 "asShortText"(): string
 "asLongText"(): string
 "compareTo"(arg0: $ChannelId$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelId$$Type = ($ChannelId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelId_ = $ChannelId$$Type;
}}
declare module "io.netty.channel.ChannelProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$ProgressiveFuture, $ProgressiveFuture$$Type} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<(void)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "await"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
get "void"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelProgressiveFuture {
const probejs$$marker: never
}
export class $ChannelProgressiveFuture$$Static implements $ChannelProgressiveFuture {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "await"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressiveFuture$$Type = ($ChannelProgressiveFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressiveFuture_ = $ChannelProgressiveFuture$$Type;
}}
declare module "io.netty.channel.RecvByteBufAllocator$Handle" {
import {$ChannelConfig, $ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * 
 * @deprecated
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle {

 "continueReading"(): boolean
 "readComplete"(): void
 "reset"(arg0: $ChannelConfig$$Type): void
 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "attemptedBytesRead"(): integer
 "attemptedBytesRead"(arg0: integer): void
 "incMessagesRead"(arg0: integer): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
}

export namespace $RecvByteBufAllocator$Handle {
const probejs$$marker: never
}
export class $RecvByteBufAllocator$Handle$$Static implements $RecvByteBufAllocator$Handle {


 "continueReading"(): boolean
 "readComplete"(): void
 "reset"(arg0: $ChannelConfig$$Type): void
 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "attemptedBytesRead"(): integer
 "attemptedBytesRead"(arg0: integer): void
 "incMessagesRead"(arg0: integer): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$Handle$$Type = ($RecvByteBufAllocator$Handle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator$Handle_ = $RecvByteBufAllocator$Handle$$Type;
}}
declare module "io.netty.util.concurrent.ProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture<V> extends $Future<(V)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "await"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
get "cancellable"(): boolean
get "now"(): V
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ProgressiveFuture {
const probejs$$marker: never
}
export class $ProgressiveFuture$$Static<V> implements $ProgressiveFuture {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "await"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressiveFuture$$Type<V> = ($ProgressiveFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressiveFuture_<V> = $ProgressiveFuture$$Type<(V)>;
}}
declare module "io.netty.util.concurrent.Future" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future<V> extends $Future$0<(V)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
get "cancellable"(): boolean
get "now"(): V
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export class $Future$$Static<V> implements $Future {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$$Type<V> = ($Future<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future_<V> = $Future$$Type<(V)>;
}}
declare module "io.netty.channel.ChannelOutboundBuffer" {
import {$ChannelOutboundBuffer$MessageProcessor, $ChannelOutboundBuffer$MessageProcessor$$Type} from "io.netty.channel.ChannelOutboundBuffer$MessageProcessor"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {


public "nioBufferCount"(): integer
public "remove"(arg0: $Throwable$$Type): boolean
public "remove"(): boolean
public "size"(): integer
public "isEmpty"(): boolean
public "current"(): any
public "isWritable"(): boolean
public "progress"(arg0: long): void
public "addFlush"(): void
public "addMessage"(arg0: any, arg1: integer, arg2: $ChannelPromise$$Type): void
public "currentProgress"(): long
public "bytesBeforeWritable"(): long
public "bytesBeforeUnwritable"(): long
public "nioBuffers"(arg0: integer, arg1: long): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
/**
 * 
 * @deprecated
 */
public "recycle"(): void
public "removeBytes"(arg0: long): void
public "nioBufferSize"(): long
public "forEachFlushedMessage"(arg0: $ChannelOutboundBuffer$MessageProcessor$$Type): void
public "setUserDefinedWritability"(arg0: integer, arg1: boolean): void
public "totalPendingWriteBytes"(): long
public "getUserDefinedWritability"(arg0: integer): boolean
get "empty"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$$Type = ($ChannelOutboundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer_ = $ChannelOutboundBuffer$$Type;
}}
declare module "io.netty.channel.ChannelOutboundInvoker" {
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker {

 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
}

export namespace $ChannelOutboundInvoker {
const probejs$$marker: never
}
export class $ChannelOutboundInvoker$$Static implements $ChannelOutboundInvoker {


 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundInvoker$$Type = ($ChannelOutboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundInvoker_ = $ChannelOutboundInvoker$$Type;
}}
declare module "io.netty.util.AttributeMap" {
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap {

 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
}

export namespace $AttributeMap {
const probejs$$marker: never
}
export class $AttributeMap$$Static implements $AttributeMap {


 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeMap$$Type = ($AttributeMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeMap_ = $AttributeMap$$Type;
}}
declare module "io.netty.util.concurrent.MultithreadEventExecutorGroup" {
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$AbstractEventExecutorGroup, $AbstractEventExecutorGroup$$Type} from "io.netty.util.concurrent.AbstractEventExecutorGroup"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {


/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isTerminated"(): boolean
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "isShuttingDown"(): boolean
public "terminationFuture"(): $Future<(any)>
public "executorCount"(): integer
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future$0<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventExecutorGroup$$Type = ($MultithreadEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventExecutorGroup_ = $MultithreadEventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.SingleThreadEventExecutor" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$AbstractScheduledEventExecutor, $AbstractScheduledEventExecutor$$Type} from "io.netty.util.concurrent.AbstractScheduledEventExecutor"
import {$ThreadProperties, $ThreadProperties$$Type} from "io.netty.util.concurrent.ThreadProperties"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor, $OrderedEventExecutor$$Type} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {


/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "isTerminated"(): boolean
public "isShutdown"(): boolean
public "addShutdownHook"(arg0: $Runnable$$Type): void
public "removeShutdownHook"(arg0: $Runnable$$Type): void
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "isShuttingDown"(): boolean
public "terminationFuture"(): $Future$0<(any)>
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
public "lazyExecute"(arg0: $Runnable$$Type): void
public "pendingTasks"(): integer
public "inEventLoop"(arg0: $Thread$$Type): boolean
public "threadProperties"(): $ThreadProperties
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "parent"(): $EventExecutorGroup
public "next"(): $EventExecutor
public "newPromise"<V>(): $Promise<(V)>
public "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
public "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
public "inEventLoop"(): boolean
public "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future<(any)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleThreadEventExecutor$$Type = ($SingleThreadEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleThreadEventExecutor_ = $SingleThreadEventExecutor$$Type;
}}
declare module "io.netty.channel.EventLoopTaskQueueFactory" {
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory {

 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>

(arg0: integer): $Queue$$Type<($Runnable$$Type)>
}

export namespace $EventLoopTaskQueueFactory {
const probejs$$marker: never
}
export class $EventLoopTaskQueueFactory$$Static implements $EventLoopTaskQueueFactory {


 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopTaskQueueFactory$$Type = ((arg0: integer) => $Queue$$Type<($Runnable$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopTaskQueueFactory_ = $EventLoopTaskQueueFactory$$Type;
}}
declare module "io.netty.util.concurrent.AbstractScheduledEventExecutor" {
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"
import {$AbstractEventExecutor, $AbstractEventExecutor$$Type} from "io.netty.util.concurrent.AbstractEventExecutor"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {


public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractScheduledEventExecutor$$Type = ($AbstractScheduledEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractScheduledEventExecutor_ = $AbstractScheduledEventExecutor$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ScheduledExecutorService, $ScheduledExecutorService$$Type} from "java.util.concurrent.ScheduledExecutorService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<($EventExecutor)> {

/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutorGroup {
const probejs$$marker: never
}
export class $EventExecutorGroup$$Static implements $EventExecutorGroup {


/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorGroup$$Type = ($EventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorGroup_ = $EventExecutorGroup$$Type;
}}
declare module "io.netty.util.ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor {

 "process"(arg0: byte): boolean

(arg0: byte): boolean
}

export namespace $ByteProcessor {
const FIND_NUL: $ByteProcessor
const FIND_COMMA: $ByteProcessor
const FIND_CR: $ByteProcessor
const FIND_ASCII_SPACE: $ByteProcessor
const FIND_NON_CR: $ByteProcessor
const FIND_NON_CRLF: $ByteProcessor
const FIND_LF: $ByteProcessor
const FIND_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_LINEAR_WHITESPACE: $ByteProcessor
const FIND_SEMI_COLON: $ByteProcessor
const FIND_NON_NUL: $ByteProcessor
const FIND_CRLF: $ByteProcessor
const FIND_NON_LF: $ByteProcessor
const probejs$$marker: never
}
export class $ByteProcessor$$Static implements $ByteProcessor {
static readonly "FIND_NUL": $ByteProcessor
static readonly "FIND_COMMA": $ByteProcessor
static readonly "FIND_CR": $ByteProcessor
static readonly "FIND_ASCII_SPACE": $ByteProcessor
static readonly "FIND_NON_CR": $ByteProcessor
static readonly "FIND_NON_CRLF": $ByteProcessor
static readonly "FIND_LF": $ByteProcessor
static readonly "FIND_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_SEMI_COLON": $ByteProcessor
static readonly "FIND_NON_NUL": $ByteProcessor
static readonly "FIND_CRLF": $ByteProcessor
static readonly "FIND_NON_LF": $ByteProcessor


 "process"(arg0: byte): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteProcessor$$Type = ((arg0: byte) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteProcessor_ = $ByteProcessor$$Type;
}}
declare module "io.netty.util.concurrent.Promise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise<V> extends $Future<(V)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "await"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "awaitUninterruptibly"(): $Promise<(V)>
 "setUncancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
set "success"(value: V)
set "failure"(value: $Throwable$$Type)
get "cancellable"(): boolean
get "now"(): V
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $Promise {
const probejs$$marker: never
}
export class $Promise$$Static<V> implements $Promise {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "await"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "awaitUninterruptibly"(): $Promise<(V)>
 "setUncancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Promise$$Type<V> = ($Promise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Promise_<V> = $Promise$$Type<(V)>;
}}
declare module "io.netty.util.ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted {

 "release"(arg0: integer): boolean
 "release"(): boolean
 "touch"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
 "refCnt"(): integer
}

export namespace $ReferenceCounted {
const probejs$$marker: never
}
export class $ReferenceCounted$$Static implements $ReferenceCounted {


 "release"(arg0: integer): boolean
 "release"(): boolean
 "touch"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
 "refCnt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceCounted$$Type = ($ReferenceCounted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceCounted_ = $ReferenceCounted$$Type;
}}
declare module "io.netty.channel.MultithreadEventLoopGroup" {
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$EventLoopGroup, $EventLoopGroup$$Type} from "io.netty.channel.EventLoopGroup"
import {$List, $List$$Type} from "java.util.List"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$MultithreadEventExecutorGroup, $MultithreadEventExecutorGroup$$Type} from "io.netty.util.concurrent.MultithreadEventExecutorGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {


public "next"(): $EventExecutor
public "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
public "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
public "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventLoopGroup$$Type = ($MultithreadEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventLoopGroup_ = $MultithreadEventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelInboundHandlerAdapter" {
import {$ChannelHandlerAdapter, $ChannelHandlerAdapter$$Type} from "io.netty.channel.ChannelHandlerAdapter"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelInboundHandler, $ChannelInboundHandler$$Type} from "io.netty.channel.ChannelInboundHandler"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {

constructor()

public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
public "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
public "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
public "channelActive"(arg0: $ChannelHandlerContext$$Type): void
public "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandlerAdapter$$Type = ($ChannelInboundHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandlerAdapter_ = $ChannelInboundHandlerAdapter$$Type;
}}
declare module "io.netty.channel.ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor {

 "processMessage"(arg0: any): boolean

(arg0: any): boolean
}

export namespace $ChannelOutboundBuffer$MessageProcessor {
const probejs$$marker: never
}
export class $ChannelOutboundBuffer$MessageProcessor$$Static implements $ChannelOutboundBuffer$MessageProcessor {


 "processMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$MessageProcessor$$Type = ((arg0: any) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer$MessageProcessor_ = $ChannelOutboundBuffer$MessageProcessor$$Type;
}}
declare module "io.netty.util.concurrent.ProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$ProgressiveFuture, $ProgressiveFuture$$Type} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise<V> extends $Promise<(V)>, $ProgressiveFuture<(V)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "await"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: V): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
set "success"(value: V)
set "failure"(value: $Throwable$$Type)
get "cancellable"(): boolean
get "now"(): V
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ProgressivePromise {
const probejs$$marker: never
}
export class $ProgressivePromise$$Static<V> implements $ProgressivePromise {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "await"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: V): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressivePromise$$Type<V> = ($ProgressivePromise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressivePromise_<V> = $ProgressivePromise$$Type<(V)>;
}}
declare module "io.netty.channel.Channel$Unsafe" {
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelOutboundBuffer, $ChannelOutboundBuffer$$Type} from "io.netty.channel.ChannelOutboundBuffer"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe {

 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "outboundBuffer"(): $ChannelOutboundBuffer
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
 "beginRead"(): void
 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "voidPromise"(): $ChannelPromise
 "closeForcibly"(): void
 "deregister"(arg0: $ChannelPromise$$Type): void
}

export namespace $Channel$Unsafe {
const probejs$$marker: never
}
export class $Channel$Unsafe$$Static implements $Channel$Unsafe {


 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "outboundBuffer"(): $ChannelOutboundBuffer
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
 "beginRead"(): void
 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "voidPromise"(): $ChannelPromise
 "closeForcibly"(): void
 "deregister"(arg0: $ChannelPromise$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Unsafe$$Type = ($Channel$Unsafe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel$Unsafe_ = $Channel$Unsafe$$Type;
}}
declare module "io.netty.channel.ChannelFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture extends $Future<(void)> {

 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "await"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
get "void"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelFuture {
const probejs$$marker: never
}
export class $ChannelFuture$$Static implements $ChannelFuture {


 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "await"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelFuture$$Type = ($ChannelFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelFuture_ = $ChannelFuture$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory" {
import {$EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory {

 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser

(arg0: ($EventExecutor)[]): $EventExecutorChooserFactory$EventExecutorChooser$$Type
}

export namespace $EventExecutorChooserFactory {
const probejs$$marker: never
}
export class $EventExecutorChooserFactory$$Static implements $EventExecutorChooserFactory {


 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$$Type = ((arg0: ($EventExecutor)[]) => $EventExecutorChooserFactory$EventExecutorChooser$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory_ = $EventExecutorChooserFactory$$Type;
}}
declare module "io.netty.channel.EventLoop" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$EventLoopGroup, $EventLoopGroup$$Type} from "io.netty.channel.EventLoopGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor, $OrderedEventExecutor$$Type} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {

 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "newPromise"<V>(): $Promise<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoop {
const probejs$$marker: never
}
export class $EventLoop$$Static implements $EventLoop {


 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "newPromise"<V>(): $Promise<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "terminationFuture"(): $Future$0<(any)>
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoop$$Type = ($EventLoop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoop_ = $EventLoop$$Type;
}}
declare module "io.netty.channel.ChannelOption" {
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$AbstractConstant, $AbstractConstant$$Type} from "io.netty.util.AbstractConstant"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T> extends $AbstractConstant<($ChannelOption<(T)>)> {
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<(boolean)>
static readonly "IP_TOS": $ChannelOption<(integer)>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<(boolean)>
static readonly "SO_SNDBUF": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_IF": $ChannelOption<($NetworkInterface)>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<($WriteBufferWaterMark)>
static readonly "TCP_NODELAY": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN": $ChannelOption<(integer)>
static readonly "SO_LINGER": $ChannelOption<(integer)>
static readonly "SO_RCVBUF": $ChannelOption<(integer)>
static readonly "SO_KEEPALIVE": $ChannelOption<(boolean)>
static readonly "ALLOCATOR": $ChannelOption<($ByteBufAllocator)>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<($InetAddress)>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<(boolean)>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<($MessageSizeEstimator)>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<(integer)>
static readonly "SO_TIMEOUT": $ChannelOption<(integer)>
static readonly "SO_REUSEADDR": $ChannelOption<(boolean)>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<(integer)>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<(boolean)>
static readonly "SO_BACKLOG": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<(integer)>
static readonly "AUTO_CLOSE": $ChannelOption<(boolean)>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<(integer)>
static readonly "SO_BROADCAST": $ChannelOption<(boolean)>
static readonly "AUTO_READ": $ChannelOption<(boolean)>
static readonly "IP_MULTICAST_TTL": $ChannelOption<(integer)>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<($RecvByteBufAllocator)>


public static "valueOf"<T>(arg0: string): $ChannelOption<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(any)>, arg1: string): $ChannelOption<(T)>
/**
 * 
 * @deprecated
 */
public static "newInstance"<T>(arg0: string): $ChannelOption<(T)>
public "validate"(arg0: T): void
public static "exists"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOption$$Type<T> = ($ChannelOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOption_<T> = $ChannelOption$$Type<(T)>;
}}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser" {
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser {

 "next"(): $EventExecutor

(): $EventExecutor$$Type
}

export namespace $EventExecutorChooserFactory$EventExecutorChooser {
const probejs$$marker: never
}
export class $EventExecutorChooserFactory$EventExecutorChooser$$Static implements $EventExecutorChooserFactory$EventExecutorChooser {


 "next"(): $EventExecutor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Type = (() => $EventExecutor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory$EventExecutorChooser_ = $EventExecutorChooserFactory$EventExecutorChooser$$Type;
}}
declare module "io.netty.util.AbstractConstant" {
import {$Constant, $Constant$$Type} from "io.netty.util.Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<(T)>> implements $Constant<(T)> {


public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: T): integer
public "compareTo"(arg0: any): integer
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConstant$$Type<T> = ($AbstractConstant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConstant_<T> = $AbstractConstant$$Type<(T)>;
}}
declare module "io.netty.buffer.AbstractByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$ByteProcessor, $ByteProcessor$$Type} from "io.netty.util.ByteProcessor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {


public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "getUnsignedByte"(arg0: integer): short
public "markWriterIndex"(): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "getUnsignedShortLE"(arg0: integer): integer
public "getMediumLE"(arg0: integer): integer
public "getUnsignedInt"(arg0: integer): long
public "getUnsignedMedium"(arg0: integer): integer
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeLongLE"(arg0: long): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "readUnsignedMedium"(): integer
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "maxCapacity"(): integer
public "readerIndex"(): integer
public "readerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "readableBytes"(): integer
public "writableBytes"(): integer
public "maxWritableBytes"(): integer
public "markReaderIndex"(): $ByteBuf
public "equals"(arg0: any): boolean
public "toString"(arg0: $Charset$$Type): string
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "compareTo"(arg0: any): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "slice"(): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "getUnsignedShort"(arg0: integer): integer
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(): boolean
public "isReadable"(arg0: integer): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "getUnsignedIntLE"(arg0: integer): long
public "readShortLE"(): short
public "readMediumLE"(): integer
public "asReadOnly"(): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "getUnsignedMediumLE"(arg0: integer): integer
public "discardSomeReadBytes"(): $ByteBuf
public "readUnsignedMediumLE"(): integer
public "readUnsignedShortLE"(): integer
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "nioBuffer"(): $ByteBuffer
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "readMedium"(): integer
public "getIntLE"(arg0: integer): integer
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "getLongLE"(arg0: integer): long
public "readSlice"(arg0: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "readIntLE"(): integer
public "nioBuffers"(): ($ByteBuffer)[]
public "writeIntLE"(arg0: integer): $ByteBuf
public "getShortLE"(arg0: integer): short
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "readLongLE"(): long
public "getMedium"(arg0: integer): integer
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "touch"(): $ReferenceCounted
public "touch"(arg0: any): $ReferenceCounted
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractByteBuf$$Type = ($AbstractByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractByteBuf_ = $AbstractByteBuf$$Type;
}}
declare module "io.netty.util.concurrent.GenericFutureListener" {
import {$EventListener, $EventListener$$Type} from "java.util.EventListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener<F extends $Future<(any)>> extends $EventListener {

 "operationComplete"(arg0: F): void

(arg0: F): void
}

export namespace $GenericFutureListener {
const probejs$$marker: never
}
export class $GenericFutureListener$$Static<F extends $Future<(any)>> implements $GenericFutureListener {


 "operationComplete"(arg0: F): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericFutureListener$$Type<F> = ((arg0: F) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericFutureListener_<F> = $GenericFutureListener$$Type<(F)>;
}}
