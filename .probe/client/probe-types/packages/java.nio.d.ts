declare module "java.nio.DoubleBuffer" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DoubleBuffer extends $Buffer implements $Comparable<($DoubleBuffer)> {


public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (double)[]): $DoubleBuffer
public "get"(arg0: integer): double
public "get"(arg0: (double)[], arg1: integer, arg2: integer): $DoubleBuffer
public "get"(arg0: (double)[]): $DoubleBuffer
public "get"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): $DoubleBuffer
public "get"(): double
public "put"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): $DoubleBuffer
public "put"(arg0: integer, arg1: (double)[]): $DoubleBuffer
public "put"(arg0: integer, arg1: $DoubleBuffer$$Type, arg2: integer, arg3: integer): $DoubleBuffer
public "put"(arg0: (double)[]): $DoubleBuffer
public "put"(arg0: $DoubleBuffer$$Type): $DoubleBuffer
public "put"(arg0: (double)[], arg1: integer, arg2: integer): $DoubleBuffer
public "put"(arg0: double): $DoubleBuffer
public "put"(arg0: integer, arg1: double): $DoubleBuffer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $DoubleBuffer$$Type): integer
public "clear"(): $DoubleBuffer
public static "wrap"(arg0: (double)[], arg1: integer, arg2: integer): $DoubleBuffer
public static "wrap"(arg0: (double)[]): $DoubleBuffer
public "position"(arg0: integer): $DoubleBuffer
public "mismatch"(arg0: $DoubleBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (double)[]
public "arrayOffset"(): integer
public "mark"(): $DoubleBuffer
public "flip"(): $Buffer
public "rewind"(): $DoubleBuffer
public "slice"(): $DoubleBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $DoubleBuffer
public static "allocate"(arg0: integer): $DoubleBuffer
public "asReadOnlyBuffer"(): $DoubleBuffer
public "compact"(): $DoubleBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBuffer$$Type = ($DoubleBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleBuffer_ = $DoubleBuffer$$Type;
}}
declare module "java.nio.LongBuffer" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LongBuffer extends $Buffer implements $Comparable<($LongBuffer)> {


public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (long)[]): $LongBuffer
public "get"(arg0: integer): long
public "get"(arg0: (long)[], arg1: integer, arg2: integer): $LongBuffer
public "get"(arg0: (long)[]): $LongBuffer
public "get"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): $LongBuffer
public "get"(): long
public "put"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): $LongBuffer
public "put"(arg0: integer, arg1: (long)[]): $LongBuffer
public "put"(arg0: integer, arg1: $LongBuffer$$Type, arg2: integer, arg3: integer): $LongBuffer
public "put"(arg0: (long)[]): $LongBuffer
public "put"(arg0: $LongBuffer$$Type): $LongBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $LongBuffer
public "put"(arg0: long): $LongBuffer
public "put"(arg0: integer, arg1: long): $LongBuffer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $LongBuffer$$Type): integer
public "clear"(): $LongBuffer
public static "wrap"(arg0: (long)[], arg1: integer, arg2: integer): $LongBuffer
public static "wrap"(arg0: (long)[]): $LongBuffer
public "position"(arg0: integer): $LongBuffer
public "mismatch"(arg0: $LongBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (long)[]
public "arrayOffset"(): integer
public "mark"(): $LongBuffer
public "flip"(): $Buffer
public "rewind"(): $LongBuffer
public "slice"(): $LongBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $LongBuffer
public static "allocate"(arg0: integer): $LongBuffer
public "asReadOnlyBuffer"(): $LongBuffer
public "compact"(): $LongBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongBuffer$$Type = ($LongBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongBuffer_ = $LongBuffer$$Type;
}}
declare module "java.nio.channels.FileChannel" {
import {$SeekableByteChannel, $SeekableByteChannel$$Type} from "java.nio.channels.SeekableByteChannel"
import {$Arena, $Arena$$Type} from "java.lang.foreign.Arena"
import {$FileAttribute, $FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$AbstractInterruptibleChannel, $AbstractInterruptibleChannel$$Type} from "java.nio.channels.spi.AbstractInterruptibleChannel"
import {$MemorySegment, $MemorySegment$$Type} from "java.lang.foreign.MemorySegment"
import {$ReadableByteChannel, $ReadableByteChannel$$Type} from "java.nio.channels.ReadableByteChannel"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$FileChannel$MapMode, $FileChannel$MapMode$$Type} from "java.nio.channels.FileChannel$MapMode"
import {$FileLock, $FileLock$$Type} from "java.nio.channels.FileLock"
import {$WritableByteChannel, $WritableByteChannel$$Type} from "java.nio.channels.WritableByteChannel"
import {$OpenOption, $OpenOption$$Type} from "java.nio.file.OpenOption"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MappedByteBuffer, $MappedByteBuffer$$Type} from "java.nio.MappedByteBuffer"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel extends $AbstractInterruptibleChannel implements $SeekableByteChannel, $GatheringByteChannel, $ScatteringByteChannel {


public "transferFrom"(arg0: $ReadableByteChannel$$Type, arg1: long, arg2: long): long
public "lock"(arg0: long, arg1: long, arg2: boolean): $FileLock
public "lock"(): $FileLock
public "size"(): long
public "position"(arg0: long): $FileChannel
public "position"(): long
public "map"(arg0: $FileChannel$MapMode$$Type, arg1: long, arg2: long): $MappedByteBuffer
public "map"(arg0: $FileChannel$MapMode$$Type, arg1: long, arg2: long, arg3: $Arena$$Type): $MemorySegment
public "write"(arg0: $ByteBuffer$$Type, arg1: long): integer
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "read"(arg0: $ByteBuffer$$Type, arg1: long): integer
public "read"(arg0: $ByteBuffer$$Type): integer
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public static "open"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $FileChannel
public static "open"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, ...arg2: ($FileAttribute$$Type<(any)>)[]): $FileChannel
public "transferTo"(arg0: long, arg1: long, arg2: $WritableByteChannel$$Type): long
public "tryLock"(): $FileLock
public "tryLock"(arg0: long, arg1: long, arg2: boolean): $FileLock
public "force"(arg0: boolean): void
public "truncate"(arg0: long): $SeekableByteChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileChannel$$Type = ($FileChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileChannel_ = $FileChannel$$Type;
}}
declare module "java.nio.file.attribute.FileStoreAttributeView" {
import {$AttributeView, $AttributeView$$Type} from "java.nio.file.attribute.AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileStoreAttributeView extends $AttributeView {

 "name"(): string

(): string
}

export namespace $FileStoreAttributeView {
const probejs$$marker: never
}
export class $FileStoreAttributeView$$Static implements $FileStoreAttributeView {


 "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileStoreAttributeView$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileStoreAttributeView_ = $FileStoreAttributeView$$Type;
}}
declare module "java.nio.charset.CoderResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CoderResult {
static readonly "OVERFLOW": $CoderResult
static readonly "UNDERFLOW": $CoderResult


public "length"(): integer
public "toString"(): string
public "isUnderflow"(): boolean
public "throwException"(): void
public "isOverflow"(): boolean
public static "unmappableForLength"(arg0: integer): $CoderResult
public "isError"(): boolean
public static "malformedForLength"(arg0: integer): $CoderResult
public "isMalformed"(): boolean
public "isUnmappable"(): boolean
get "underflow"(): boolean
get "overflow"(): boolean
get "error"(): boolean
get "malformed"(): boolean
get "unmappable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoderResult$$Type = ($CoderResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoderResult_ = $CoderResult$$Type;
}}
declare module "java.nio.file.attribute.UserPrincipal" {
import {$Principal, $Principal$$Type} from "java.security.Principal"
import {$Subject, $Subject$$Type} from "javax.security.auth.Subject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UserPrincipal extends $Principal {

 "getName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
get "name"(): string
}

export namespace $UserPrincipal {
const probejs$$marker: never
}
export class $UserPrincipal$$Static implements $UserPrincipal {


 "getName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserPrincipal$$Type = ($UserPrincipal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserPrincipal_ = $UserPrincipal$$Type;
}}
declare module "java.nio.channels.Channel" {
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $Closeable {

 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export class $Channel$$Static implements $Channel {


 "isOpen"(): boolean
 "close"(): void
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
declare module "java.nio.charset.CharsetEncoder" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$CodingErrorAction, $CodingErrorAction$$Type} from "java.nio.charset.CodingErrorAction"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$CoderResult, $CoderResult$$Type} from "java.nio.charset.CoderResult"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetEncoder {


public "reset"(): $CharsetEncoder
public "onMalformedInput"(arg0: $CodingErrorAction$$Type): $CharsetEncoder
public "onUnmappableCharacter"(arg0: $CodingErrorAction$$Type): $CharsetEncoder
public "maxBytesPerChar"(): float
public "encode"(arg0: $CharBuffer$$Type, arg1: $ByteBuffer$$Type, arg2: boolean): $CoderResult
public "encode"(arg0: $CharBuffer$$Type): $ByteBuffer
public "flush"(arg0: $ByteBuffer$$Type): $CoderResult
public "canEncode"(arg0: charseq): boolean
public "canEncode"(arg0: character): boolean
public "charset"(): $Charset
public "replacement"(): (byte)[]
public "isLegalReplacement"(arg0: (byte)[]): boolean
public "malformedInputAction"(): $CodingErrorAction
public "unmappableCharacterAction"(): $CodingErrorAction
public "averageBytesPerChar"(): float
public "replaceWith"(arg0: (byte)[]): $CharsetEncoder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharsetEncoder$$Type = ($CharsetEncoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharsetEncoder_ = $CharsetEncoder$$Type;
}}
declare module "java.nio.channels.ReadableByteChannel" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReadableByteChannel extends $Channel {

 "read"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $ReadableByteChannel {
const probejs$$marker: never
}
export class $ReadableByteChannel$$Static implements $ReadableByteChannel {


 "read"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableByteChannel$$Type = ($ReadableByteChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableByteChannel_ = $ReadableByteChannel$$Type;
}}
declare module "java.nio.file.attribute.FileTime" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileTime implements $Comparable<($FileTime)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $FileTime$$Type): integer
public "compareTo"(arg0: any): integer
public static "from"(arg0: $Instant$$Type): $FileTime
public static "from"(arg0: long, arg1: $TimeUnit$$Type): $FileTime
public "to"(arg0: $TimeUnit$$Type): long
public "toMillis"(): long
public "toInstant"(): $Instant
public static "fromMillis"(arg0: long): $FileTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileTime$$Type = ($FileTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileTime_ = $FileTime$$Type;
}}
declare module "java.nio.charset.Charset" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$CharsetDecoder, $CharsetDecoder$$Type} from "java.nio.charset.CharsetDecoder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$CharsetEncoder, $CharsetEncoder$$Type} from "java.nio.charset.CharsetEncoder"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Charset implements $Comparable<($Charset)> {


public "name"(): string
public static "forName"(arg0: string, arg1: $Charset$$Type): $Charset
public static "forName"(arg0: string): $Charset
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Charset$$Type): integer
public "newDecoder"(): $CharsetDecoder
public "decode"(arg0: $ByteBuffer$$Type): $CharBuffer
public "newEncoder"(): $CharsetEncoder
public "encode"(arg0: $CharBuffer$$Type): $ByteBuffer
public "encode"(arg0: string): $ByteBuffer
public static "defaultCharset"(): $Charset
public "canEncode"(): boolean
public "contains"(arg0: $Charset$$Type): boolean
public "isRegistered"(): boolean
public static "isSupported"(arg0: string): boolean
public "aliases"(): $Set<(string)>
public static "availableCharsets"(): $SortedMap<(string), ($Charset)>
public "displayName"(arg0: $Locale$$Type): string
public "displayName"(): string
get "registered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charset$$Type = ($Charset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charset_ = $Charset$$Type;
}}
declare module "java.nio.channels.FileChannel$MapMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel$MapMode {
static readonly "READ_ONLY": $FileChannel$MapMode
static readonly "READ_WRITE": $FileChannel$MapMode
static readonly "PRIVATE": $FileChannel$MapMode


public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileChannel$MapMode$$Type = ($FileChannel$MapMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileChannel$MapMode_ = $FileChannel$MapMode$$Type;
}}
declare module "java.nio.Buffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Buffer {


public "reset"(): $Buffer
public "clear"(): $Buffer
public "position"(arg0: integer): $Buffer
public "position"(): integer
public "limit"(): integer
public "limit"(arg0: integer): $Buffer
public "remaining"(): integer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): any
public "arrayOffset"(): integer
public "capacity"(): integer
public "mark"(): $Buffer
public "flip"(): $Buffer
public "rewind"(): $Buffer
public "hasRemaining"(): boolean
public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $Buffer
public "slice"(): $Buffer
public "duplicate"(): $Buffer
get "direct"(): boolean
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Buffer$$Type = ($Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Buffer_ = $Buffer$$Type;
}}
declare module "java.nio.ByteOrder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ByteOrder {
static readonly "BIG_ENDIAN": $ByteOrder
static readonly "LITTLE_ENDIAN": $ByteOrder


public "toString"(): string
public static "nativeOrder"(): $ByteOrder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteOrder$$Type = ($ByteOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteOrder_ = $ByteOrder$$Type;
}}
declare module "java.nio.channels.Pipe$SourceChannel" {
import {$ReadableByteChannel, $ReadableByteChannel$$Type} from "java.nio.channels.ReadableByteChannel"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$AbstractSelectableChannel, $AbstractSelectableChannel$$Type} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SourceChannel extends $AbstractSelectableChannel implements $ReadableByteChannel, $ScatteringByteChannel {


public "validOps"(): integer
public "read"(arg0: $ByteBuffer$$Type): integer
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$SourceChannel$$Type = ($Pipe$SourceChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pipe$SourceChannel_ = $Pipe$SourceChannel$$Type;
}}
declare module "java.nio.channels.WritableByteChannel" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WritableByteChannel extends $Channel {

 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $WritableByteChannel {
const probejs$$marker: never
}
export class $WritableByteChannel$$Static implements $WritableByteChannel {


 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableByteChannel$$Type = ($WritableByteChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableByteChannel_ = $WritableByteChannel$$Type;
}}
declare module "java.nio.CharBuffer" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"
import {$Readable, $Readable$$Type} from "java.lang.Readable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharBuffer extends $Buffer implements $Comparable<($CharBuffer)>, $Appendable, charseq, $Readable {


public "reset"(): $CharBuffer
public "get"(arg0: (character)[], arg1: integer, arg2: integer): $CharBuffer
public "get"(arg0: integer): character
public "get"(): character
public "get"(arg0: (character)[]): $CharBuffer
public "get"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $CharBuffer
public "get"(arg0: integer, arg1: (character)[]): $CharBuffer
public "put"(arg0: integer, arg1: character): $CharBuffer
public "put"(arg0: (character)[], arg1: integer, arg2: integer): $CharBuffer
public "put"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $CharBuffer
public "put"(arg0: (character)[]): $CharBuffer
public "put"(arg0: $CharBuffer$$Type): $CharBuffer
public "put"(arg0: integer, arg1: $CharBuffer$$Type, arg2: integer, arg3: integer): $CharBuffer
public "put"(arg0: integer, arg1: (character)[]): $CharBuffer
public "put"(arg0: string): $CharBuffer
public "put"(arg0: string, arg1: integer, arg2: integer): $CharBuffer
public "put"(arg0: character): $CharBuffer
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "append"(arg0: character): $CharBuffer
public "append"(arg0: charseq): $CharBuffer
public "append"(arg0: charseq, arg1: integer, arg2: integer): $CharBuffer
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $CharBuffer$$Type): integer
public "clear"(): $CharBuffer
public static "wrap"(arg0: (character)[], arg1: integer, arg2: integer): $CharBuffer
public static "wrap"(arg0: charseq, arg1: integer, arg2: integer): $CharBuffer
public static "wrap"(arg0: charseq): $CharBuffer
public static "wrap"(arg0: (character)[]): $CharBuffer
public "position"(arg0: integer): $CharBuffer
public "charAt"(arg0: integer): character
public "mismatch"(arg0: $CharBuffer$$Type): integer
public "isEmpty"(): boolean
public "subSequence"(arg0: integer, arg1: integer): charseq
public "limit"(arg0: integer): $Buffer
public "chars"(): $IntStream
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): any
public "arrayOffset"(): integer
public "read"(arg0: $CharBuffer$$Type): integer
public "mark"(): $CharBuffer
public "flip"(): $CharBuffer
public "rewind"(): $Buffer
public "slice"(arg0: integer, arg1: integer): $CharBuffer
public "slice"(): $CharBuffer
public "duplicate"(): $CharBuffer
public static "allocate"(arg0: integer): $CharBuffer
public "asReadOnlyBuffer"(): $CharBuffer
public "compact"(): $CharBuffer
public "order"(): $ByteOrder
public static "compare"(arg0: charseq, arg1: charseq): integer
public "codePoints"(): $IntStream
get "empty"(): boolean
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharBuffer$$Type = ($CharBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharBuffer_ = $CharBuffer$$Type;
}}
declare module "java.nio.file.spi.FileSystemProvider" {
import {$AccessMode, $AccessMode$$Type} from "java.nio.file.AccessMode"
import {$SeekableByteChannel, $SeekableByteChannel$$Type} from "java.nio.channels.SeekableByteChannel"
import {$AsynchronousFileChannel, $AsynchronousFileChannel$$Type} from "java.nio.channels.AsynchronousFileChannel"
import {$Map, $Map$$Type} from "java.util.Map"
import {$DirectoryStream, $DirectoryStream$$Type} from "java.nio.file.DirectoryStream"
import {$List, $List$$Type} from "java.util.List"
import {$DirectoryStream$Filter, $DirectoryStream$Filter$$Type} from "java.nio.file.DirectoryStream$Filter"
import {$FileAttribute, $FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$ExecutorService, $ExecutorService$$Type} from "java.util.concurrent.ExecutorService"
import {$FileStore, $FileStore$$Type} from "java.nio.file.FileStore"
import {$LinkOption, $LinkOption$$Type} from "java.nio.file.LinkOption"
import {$CopyOption, $CopyOption$$Type} from "java.nio.file.CopyOption"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$BasicFileAttributes, $BasicFileAttributes$$Type} from "java.nio.file.attribute.BasicFileAttributes"
import {$FileAttributeView, $FileAttributeView$$Type} from "java.nio.file.attribute.FileAttributeView"
import {$URI, $URI$$Type} from "java.net.URI"
import {$OpenOption, $OpenOption$$Type} from "java.nio.file.OpenOption"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$FileSystem, $FileSystem$$Type} from "java.nio.file.FileSystem"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystemProvider {


public "isHidden"(arg0: $Path$$Type): boolean
public "delete"(arg0: $Path$$Type): void
public "checkAccess"(arg0: $Path$$Type, ...arg1: ($AccessMode$$Type)[]): void
public "copy"(arg0: $Path$$Type, arg1: $Path$$Type, ...arg2: ($CopyOption$$Type)[]): void
public "getScheme"(): string
public "getPath"(arg0: $URI$$Type): $Path
public "exists"(arg0: $Path$$Type, ...arg1: ($LinkOption$$Type)[]): boolean
public "createDirectory"(arg0: $Path$$Type, ...arg1: ($FileAttribute$$Type<(any)>)[]): void
public "getFileSystem"(arg0: $URI$$Type): $FileSystem
public static "installedProviders"(): $List<($FileSystemProvider)>
public "newFileSystem"(arg0: $URI$$Type, arg1: $Map$$Type<(string), (any)>): $FileSystem
public "newFileSystem"(arg0: $Path$$Type, arg1: $Map$$Type<(string), (any)>): $FileSystem
public "newInputStream"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $InputStream
public "newOutputStream"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $OutputStream
public "newByteChannel"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, ...arg2: ($FileAttribute$$Type<(any)>)[]): $SeekableByteChannel
public "newDirectoryStream"(arg0: $Path$$Type, arg1: $DirectoryStream$Filter$$Type<($Path)>): $DirectoryStream<($Path)>
public "createSymbolicLink"(arg0: $Path$$Type, arg1: $Path$$Type, ...arg2: ($FileAttribute$$Type<(any)>)[]): void
public "createLink"(arg0: $Path$$Type, arg1: $Path$$Type): void
public "deleteIfExists"(arg0: $Path$$Type): boolean
public "move"(arg0: $Path$$Type, arg1: $Path$$Type, ...arg2: ($CopyOption$$Type)[]): void
public "readSymbolicLink"(arg0: $Path$$Type): $Path
public "getFileStore"(arg0: $Path$$Type): $FileStore
public "isSameFile"(arg0: $Path$$Type, arg1: $Path$$Type): boolean
public "getFileAttributeView"<V extends $FileAttributeView>(arg0: $Path$$Type, arg1: $Class$$Type<(V)>, ...arg2: ($LinkOption$$Type)[]): V
public "readAttributes"<A extends $BasicFileAttributes>(arg0: $Path$$Type, arg1: $Class$$Type<(A)>, ...arg2: ($LinkOption$$Type)[]): A
public "readAttributes"(arg0: $Path$$Type, arg1: string, ...arg2: ($LinkOption$$Type)[]): $Map<(string), (any)>
public "setAttribute"(arg0: $Path$$Type, arg1: string, arg2: any, ...arg3: ($LinkOption$$Type)[]): void
public "readAttributesIfExists"<A extends $BasicFileAttributes>(arg0: $Path$$Type, arg1: $Class$$Type<(A)>, ...arg2: ($LinkOption$$Type)[]): A
public "newFileChannel"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, ...arg2: ($FileAttribute$$Type<(any)>)[]): $FileChannel
public "newAsynchronousFileChannel"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, arg2: $ExecutorService$$Type, ...arg3: ($FileAttribute$$Type<(any)>)[]): $AsynchronousFileChannel
get "scheme"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystemProvider$$Type = ($FileSystemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileSystemProvider_ = $FileSystemProvider$$Type;
}}
declare module "java.nio.channels.FileLock" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileLock implements $AutoCloseable {


public "size"(): long
public "toString"(): string
public "position"(): long
public "close"(): void
public "release"(): void
public "channel"(): $FileChannel
public "isValid"(): boolean
public "acquiredBy"(): $Channel
public "isShared"(): boolean
public "overlaps"(arg0: long, arg1: long): boolean
get "valid"(): boolean
get "shared"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileLock$$Type = ($FileLock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileLock_ = $FileLock$$Type;
}}
declare module "java.nio.IntBuffer" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IntBuffer extends $Buffer implements $Comparable<($IntBuffer)> {


public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (integer)[]): $IntBuffer
public "get"(arg0: integer): integer
public "get"(arg0: (integer)[], arg1: integer, arg2: integer): $IntBuffer
public "get"(arg0: (integer)[]): $IntBuffer
public "get"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): $IntBuffer
public "get"(): integer
public "put"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): $IntBuffer
public "put"(arg0: integer, arg1: (integer)[]): $IntBuffer
public "put"(arg0: integer, arg1: $IntBuffer$$Type, arg2: integer, arg3: integer): $IntBuffer
public "put"(arg0: (integer)[]): $IntBuffer
public "put"(arg0: $IntBuffer$$Type): $IntBuffer
public "put"(arg0: (integer)[], arg1: integer, arg2: integer): $IntBuffer
public "put"(arg0: integer): $IntBuffer
public "put"(arg0: integer, arg1: integer): $IntBuffer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $IntBuffer$$Type): integer
public "clear"(): $IntBuffer
public static "wrap"(arg0: (integer)[], arg1: integer, arg2: integer): $IntBuffer
public static "wrap"(arg0: (integer)[]): $IntBuffer
public "position"(arg0: integer): $IntBuffer
public "mismatch"(arg0: $IntBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (integer)[]
public "arrayOffset"(): integer
public "mark"(): $IntBuffer
public "flip"(): $Buffer
public "rewind"(): $IntBuffer
public "slice"(): $IntBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $IntBuffer
public static "allocate"(arg0: integer): $IntBuffer
public "asReadOnlyBuffer"(): $IntBuffer
public "compact"(): $IntBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBuffer$$Type = ($IntBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBuffer_ = $IntBuffer$$Type;
}}
declare module "java.nio.channels.ServerSocketChannel" {
import {$NetworkChannel, $NetworkChannel$$Type} from "java.nio.channels.NetworkChannel"
import {$ProtocolFamily, $ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$SocketChannel, $SocketChannel$$Type} from "java.nio.channels.SocketChannel"
import {$AbstractSelectableChannel, $AbstractSelectableChannel$$Type} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerSocket, $ServerSocket$$Type} from "java.net.ServerSocket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocketChannel extends $AbstractSelectableChannel implements $NetworkChannel {


public "socket"(): $ServerSocket
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $ServerSocketChannel
public "getLocalAddress"(): $SocketAddress
public "validOps"(): integer
public "accept"(): $SocketChannel
public static "open"(): $ServerSocketChannel
public static "open"(arg0: $ProtocolFamily$$Type): $ServerSocketChannel
public "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
public "bind"(arg0: $SocketAddress$$Type, arg1: integer): $ServerSocketChannel
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isOpen"(): boolean
public "close"(): void
get "localAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSocketChannel$$Type = ($ServerSocketChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerSocketChannel_ = $ServerSocketChannel$$Type;
}}
declare module "java.nio.ShortBuffer" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ShortBuffer extends $Buffer implements $Comparable<($ShortBuffer)> {


public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (short)[]): $ShortBuffer
public "get"(arg0: integer): short
public "get"(arg0: (short)[], arg1: integer, arg2: integer): $ShortBuffer
public "get"(arg0: (short)[]): $ShortBuffer
public "get"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): $ShortBuffer
public "get"(): short
public "put"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): $ShortBuffer
public "put"(arg0: integer, arg1: (short)[]): $ShortBuffer
public "put"(arg0: integer, arg1: $ShortBuffer$$Type, arg2: integer, arg3: integer): $ShortBuffer
public "put"(arg0: (short)[]): $ShortBuffer
public "put"(arg0: $ShortBuffer$$Type): $ShortBuffer
public "put"(arg0: (short)[], arg1: integer, arg2: integer): $ShortBuffer
public "put"(arg0: short): $ShortBuffer
public "put"(arg0: integer, arg1: short): $ShortBuffer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ShortBuffer$$Type): integer
public "clear"(): $ShortBuffer
public static "wrap"(arg0: (short)[], arg1: integer, arg2: integer): $ShortBuffer
public static "wrap"(arg0: (short)[]): $ShortBuffer
public "position"(arg0: integer): $ShortBuffer
public "mismatch"(arg0: $ShortBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (short)[]
public "arrayOffset"(): integer
public "mark"(): $ShortBuffer
public "flip"(): $Buffer
public "rewind"(): $ShortBuffer
public "slice"(): $ShortBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $ShortBuffer
public static "allocate"(arg0: integer): $ShortBuffer
public "asReadOnlyBuffer"(): $ShortBuffer
public "compact"(): $ShortBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortBuffer$$Type = ($ShortBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShortBuffer_ = $ShortBuffer$$Type;
}}
declare module "java.nio.file.AccessMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessMode extends $Enum<($AccessMode)> {
static readonly "READ": $AccessMode
static readonly "EXECUTE": $AccessMode
static readonly "WRITE": $AccessMode


public static "values"(): ($AccessMode)[]
public static "valueOf"(arg0: string): $AccessMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessMode$$Type = (("read") | ("write") | ("execute"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessMode_ = $AccessMode$$Type;
}}
declare module "java.nio.file.OpenOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OpenOption {

}

export namespace $OpenOption {
const probejs$$marker: never
}
export class $OpenOption$$Static implements $OpenOption {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenOption$$Type = ($OpenOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenOption_ = $OpenOption$$Type;
}}
declare module "java.nio.channels.spi.AbstractSelector" {
import {$Selector, $Selector$$Type} from "java.nio.channels.Selector"
import {$SelectorProvider, $SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelector extends $Selector {


public "isOpen"(): boolean
public "provider"(): $SelectorProvider
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSelector$$Type = ($AbstractSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSelector_ = $AbstractSelector$$Type;
}}
declare module "java.nio.file.attribute.UserPrincipalLookupService" {
import {$UserPrincipal, $UserPrincipal$$Type} from "java.nio.file.attribute.UserPrincipal"
import {$GroupPrincipal, $GroupPrincipal$$Type} from "java.nio.file.attribute.GroupPrincipal"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $UserPrincipalLookupService {


public "lookupPrincipalByName"(arg0: string): $UserPrincipal
public "lookupPrincipalByGroupName"(arg0: string): $GroupPrincipal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserPrincipalLookupService$$Type = ($UserPrincipalLookupService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserPrincipalLookupService_ = $UserPrincipalLookupService$$Type;
}}
declare module "java.nio.file.Watchable" {
import {$WatchService, $WatchService$$Type} from "java.nio.file.WatchService"
import {$WatchEvent$Kind, $WatchEvent$Kind$$Type} from "java.nio.file.WatchEvent$Kind"
import {$WatchEvent$Modifier, $WatchEvent$Modifier$$Type} from "java.nio.file.WatchEvent$Modifier"
import {$WatchKey, $WatchKey$$Type} from "java.nio.file.WatchKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Watchable {

 "register"(arg0: $WatchService$$Type, arg1: ($WatchEvent$Kind$$Type<(any)>)[], ...arg2: ($WatchEvent$Modifier$$Type)[]): $WatchKey
 "register"(arg0: $WatchService$$Type, ...arg1: ($WatchEvent$Kind$$Type<(any)>)[]): $WatchKey
}

export namespace $Watchable {
const probejs$$marker: never
}
export class $Watchable$$Static implements $Watchable {


 "register"(arg0: $WatchService$$Type, arg1: ($WatchEvent$Kind$$Type<(any)>)[], ...arg2: ($WatchEvent$Modifier$$Type)[]): $WatchKey
 "register"(arg0: $WatchService$$Type, ...arg1: ($WatchEvent$Kind$$Type<(any)>)[]): $WatchKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Watchable$$Type = ($Watchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Watchable_ = $Watchable$$Type;
}}
declare module "java.nio.channels.spi.AbstractSelectableChannel" {
import {$Selector, $Selector$$Type} from "java.nio.channels.Selector"
import {$SelectorProvider, $SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"
import {$SelectionKey, $SelectionKey$$Type} from "java.nio.channels.SelectionKey"
import {$SelectableChannel, $SelectableChannel$$Type} from "java.nio.channels.SelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelectableChannel extends $SelectableChannel {


public "isBlocking"(): boolean
public "configureBlocking"(arg0: boolean): $SelectableChannel
public "keyFor"(arg0: $Selector$$Type): $SelectionKey
public "blockingLock"(): any
public "isRegistered"(): boolean
public "register"(arg0: $Selector$$Type, arg1: integer, arg2: any): $SelectionKey
public "provider"(): $SelectorProvider
public "isOpen"(): boolean
public "close"(): void
get "blocking"(): boolean
get "registered"(): boolean
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSelectableChannel$$Type = ($AbstractSelectableChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSelectableChannel_ = $AbstractSelectableChannel$$Type;
}}
declare module "java.nio.file.LinkOption" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$OpenOption, $OpenOption$$Type} from "java.nio.file.OpenOption"
import {$CopyOption, $CopyOption$$Type} from "java.nio.file.CopyOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LinkOption extends $Enum<($LinkOption)> implements $OpenOption, $CopyOption {
static readonly "NOFOLLOW_LINKS": $LinkOption


public static "values"(): ($LinkOption)[]
public static "valueOf"(arg0: string): $LinkOption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkOption$$Type = (("nofollow_links"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkOption_ = $LinkOption$$Type;
}}
declare module "java.nio.channels.AsynchronousChannel" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AsynchronousChannel extends $Channel {

 "close"(): void
 "isOpen"(): boolean
get "open"(): boolean
}

export namespace $AsynchronousChannel {
const probejs$$marker: never
}
export class $AsynchronousChannel$$Static implements $AsynchronousChannel {


 "close"(): void
 "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AsynchronousChannel$$Type = ($AsynchronousChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AsynchronousChannel_ = $AsynchronousChannel$$Type;
}}
declare module "java.nio.channels.SocketChannel" {
import {$NetworkChannel, $NetworkChannel$$Type} from "java.nio.channels.NetworkChannel"
import {$ProtocolFamily, $ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$ByteChannel, $ByteChannel$$Type} from "java.nio.channels.ByteChannel"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$Socket, $Socket$$Type} from "java.net.Socket"
import {$AbstractSelectableChannel, $AbstractSelectableChannel$$Type} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $NetworkChannel {


public "socket"(): $Socket
public "isConnected"(): boolean
public "isConnectionPending"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $SocketChannel
public "getLocalAddress"(): $SocketAddress
public "getRemoteAddress"(): $SocketAddress
public "finishConnect"(): boolean
public "shutdownInput"(): $SocketChannel
public "shutdownOutput"(): $SocketChannel
public "validOps"(): integer
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: $ByteBuffer$$Type): integer
public "connect"(arg0: $SocketAddress$$Type): boolean
public static "open"(): $SocketChannel
public static "open"(arg0: $ProtocolFamily$$Type): $SocketChannel
public static "open"(arg0: $SocketAddress$$Type): $SocketChannel
public "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isOpen"(): boolean
public "close"(): void
get "connected"(): boolean
get "connectionPending"(): boolean
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketChannel$$Type = ($SocketChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketChannel_ = $SocketChannel$$Type;
}}
declare module "java.nio.channels.Pipe" {
import {$Pipe$SourceChannel, $Pipe$SourceChannel$$Type} from "java.nio.channels.Pipe$SourceChannel"
import {$Pipe$SinkChannel, $Pipe$SinkChannel$$Type} from "java.nio.channels.Pipe$SinkChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe {


public "source"(): $Pipe$SourceChannel
public static "open"(): $Pipe
public "sink"(): $Pipe$SinkChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$$Type = ($Pipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pipe_ = $Pipe$$Type;
}}
declare module "java.nio.channels.Pipe$SinkChannel" {
import {$AbstractSelectableChannel, $AbstractSelectableChannel$$Type} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$WritableByteChannel, $WritableByteChannel$$Type} from "java.nio.channels.WritableByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SinkChannel extends $AbstractSelectableChannel implements $WritableByteChannel, $GatheringByteChannel {


public "validOps"(): integer
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$SinkChannel$$Type = ($Pipe$SinkChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pipe$SinkChannel_ = $Pipe$SinkChannel$$Type;
}}
declare module "java.nio.channels.CompletionHandler" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CompletionHandler<V, A> {

 "completed"(arg0: V, arg1: A): void
 "failed"(arg0: $Throwable$$Type, arg1: A): void
}

export namespace $CompletionHandler {
const probejs$$marker: never
}
export class $CompletionHandler$$Static<V, A> implements $CompletionHandler {


 "completed"(arg0: V, arg1: A): void
 "failed"(arg0: $Throwable$$Type, arg1: A): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletionHandler$$Type<V, A> = ($CompletionHandler<(V), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompletionHandler_<V, A> = $CompletionHandler$$Type<(V), (A)>;
}}
declare module "java.nio.channels.MulticastChannel" {
import {$NetworkChannel, $NetworkChannel$$Type} from "java.nio.channels.NetworkChannel"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$MembershipKey, $MembershipKey$$Type} from "java.nio.channels.MembershipKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MulticastChannel extends $NetworkChannel {

 "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type): $MembershipKey
 "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type, arg2: $InetAddress$$Type): $MembershipKey
 "close"(): void
 "supportedOptions"(): $Set<($SocketOption<(any)>)>
 "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $NetworkChannel
 "getLocalAddress"(): $SocketAddress
 "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
 "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
 "isOpen"(): boolean
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export namespace $MulticastChannel {
const probejs$$marker: never
}
export class $MulticastChannel$$Static implements $MulticastChannel {


 "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type): $MembershipKey
 "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type, arg2: $InetAddress$$Type): $MembershipKey
 "close"(): void
 "supportedOptions"(): $Set<($SocketOption<(any)>)>
 "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $NetworkChannel
 "getLocalAddress"(): $SocketAddress
 "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
 "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
 "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MulticastChannel$$Type = ($MulticastChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MulticastChannel_ = $MulticastChannel$$Type;
}}
declare module "java.nio.file.WatchKey" {
import {$WatchEvent, $WatchEvent$$Type} from "java.nio.file.WatchEvent"
import {$List, $List$$Type} from "java.util.List"
import {$Watchable, $Watchable$$Type} from "java.nio.file.Watchable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchKey {

 "reset"(): boolean
 "cancel"(): void
 "isValid"(): boolean
 "pollEvents"(): $List<($WatchEvent<(any)>)>
 "watchable"(): $Watchable
get "valid"(): boolean
}

export namespace $WatchKey {
const probejs$$marker: never
}
export class $WatchKey$$Static implements $WatchKey {


 "reset"(): boolean
 "cancel"(): void
 "isValid"(): boolean
 "pollEvents"(): $List<($WatchEvent<(any)>)>
 "watchable"(): $Watchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchKey$$Type = ($WatchKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchKey_ = $WatchKey$$Type;
}}
declare module "java.nio.file.attribute.FileAttributeView" {
import {$AttributeView, $AttributeView$$Type} from "java.nio.file.attribute.AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttributeView extends $AttributeView {

 "name"(): string

(): string
}

export namespace $FileAttributeView {
const probejs$$marker: never
}
export class $FileAttributeView$$Static implements $FileAttributeView {


 "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileAttributeView$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileAttributeView_ = $FileAttributeView$$Type;
}}
declare module "java.nio.file.WatchService" {
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$WatchKey, $WatchKey$$Type} from "java.nio.file.WatchKey"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchService extends $Closeable {

 "close"(): void
 "poll"(arg0: long, arg1: $TimeUnit$$Type): $WatchKey
 "poll"(): $WatchKey
 "take"(): $WatchKey
}

export namespace $WatchService {
const probejs$$marker: never
}
export class $WatchService$$Static implements $WatchService {


 "close"(): void
 "poll"(arg0: long, arg1: $TimeUnit$$Type): $WatchKey
 "poll"(): $WatchKey
 "take"(): $WatchKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchService$$Type = ($WatchService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchService_ = $WatchService$$Type;
}}
declare module "java.nio.channels.ByteChannel" {
import {$ReadableByteChannel, $ReadableByteChannel$$Type} from "java.nio.channels.ReadableByteChannel"
import {$WritableByteChannel, $WritableByteChannel$$Type} from "java.nio.channels.WritableByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteChannel extends $ReadableByteChannel, $WritableByteChannel {

 "read"(arg0: $ByteBuffer$$Type): integer
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $ByteChannel {
const probejs$$marker: never
}
export class $ByteChannel$$Static implements $ByteChannel {


 "read"(arg0: $ByteBuffer$$Type): integer
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteChannel$$Type = ($ByteChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteChannel_ = $ByteChannel$$Type;
}}
declare module "java.nio.channels.InterruptibleChannel" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $InterruptibleChannel extends $Channel {

 "close"(): void
 "isOpen"(): boolean
get "open"(): boolean
}

export namespace $InterruptibleChannel {
const probejs$$marker: never
}
export class $InterruptibleChannel$$Static implements $InterruptibleChannel {


 "close"(): void
 "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterruptibleChannel$$Type = ($InterruptibleChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterruptibleChannel_ = $InterruptibleChannel$$Type;
}}
declare module "java.nio.file.DirectoryStream" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream<T> extends $Closeable, $Iterable<(T)> {

 "iterator"(): $Iterator<(T)>
 "close"(): void
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $DirectoryStream {
const probejs$$marker: never
}
export class $DirectoryStream$$Static<T> implements $DirectoryStream {


 "iterator"(): $Iterator<(T)>
 "close"(): void
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectoryStream$$Type<T> = ($DirectoryStream<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectoryStream_<T> = $DirectoryStream$$Type<(T)>;
}}
declare module "java.nio.channels.AsynchronousFileChannel" {
import {$AsynchronousChannel, $AsynchronousChannel$$Type} from "java.nio.channels.AsynchronousChannel"
import {$FileAttribute, $FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$FileLock, $FileLock$$Type} from "java.nio.channels.FileLock"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$OpenOption, $OpenOption$$Type} from "java.nio.file.OpenOption"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ExecutorService, $ExecutorService$$Type} from "java.util.concurrent.ExecutorService"
import {$CompletionHandler, $CompletionHandler$$Type} from "java.nio.channels.CompletionHandler"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AsynchronousFileChannel implements $AsynchronousChannel {


public "lock"(arg0: long, arg1: long, arg2: boolean): $Future<($FileLock)>
public "lock"<A>(arg0: A, arg1: $CompletionHandler$$Type<($FileLock$$Type), (A)>): void
public "lock"<A>(arg0: long, arg1: long, arg2: boolean, arg3: A, arg4: $CompletionHandler$$Type<($FileLock$$Type), (A)>): void
public "lock"(): $Future<($FileLock)>
public "size"(): long
public "write"(arg0: $ByteBuffer$$Type, arg1: long): $Future<(integer)>
public "write"<A>(arg0: $ByteBuffer$$Type, arg1: long, arg2: A, arg3: $CompletionHandler$$Type<(integer), (A)>): void
public "read"(arg0: $ByteBuffer$$Type, arg1: long): $Future<(integer)>
public "read"<A>(arg0: $ByteBuffer$$Type, arg1: long, arg2: A, arg3: $CompletionHandler$$Type<(integer), (A)>): void
public static "open"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, arg2: $ExecutorService$$Type, ...arg3: ($FileAttribute$$Type<(any)>)[]): $AsynchronousFileChannel
public static "open"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $AsynchronousFileChannel
public "tryLock"(): $FileLock
public "tryLock"(arg0: long, arg1: long, arg2: boolean): $FileLock
public "force"(arg0: boolean): void
public "truncate"(arg0: long): $AsynchronousFileChannel
public "close"(): void
public "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AsynchronousFileChannel$$Type = ($AsynchronousFileChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AsynchronousFileChannel_ = $AsynchronousFileChannel$$Type;
}}
declare module "java.nio.file.FileStore" {
import {$FileStoreAttributeView, $FileStoreAttributeView$$Type} from "java.nio.file.attribute.FileStoreAttributeView"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$FileAttributeView, $FileAttributeView$$Type} from "java.nio.file.attribute.FileAttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileStore {


public "getUnallocatedSpace"(): long
public "getBlockSize"(): long
public "supportsFileAttributeView"(arg0: $Class$$Type<($FileAttributeView$$Type)>): boolean
public "supportsFileAttributeView"(arg0: string): boolean
public "getFileStoreAttributeView"<V extends $FileStoreAttributeView>(arg0: $Class$$Type<(V)>): V
public "name"(): string
public "type"(): string
public "isReadOnly"(): boolean
public "getTotalSpace"(): long
public "getUsableSpace"(): long
public "getAttribute"(arg0: string): any
get "unallocatedSpace"(): long
get "blockSize"(): long
get "readOnly"(): boolean
get "totalSpace"(): long
get "usableSpace"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileStore$$Type = ($FileStore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileStore_ = $FileStore$$Type;
}}
declare module "java.nio.file.FileSystem" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$WatchService, $WatchService$$Type} from "java.nio.file.WatchService"
import {$FileSystemProvider, $FileSystemProvider$$Type} from "java.nio.file.spi.FileSystemProvider"
import {$PathMatcher, $PathMatcher$$Type} from "java.nio.file.PathMatcher"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$FileStore, $FileStore$$Type} from "java.nio.file.FileStore"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$UserPrincipalLookupService, $UserPrincipalLookupService$$Type} from "java.nio.file.attribute.UserPrincipalLookupService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystem implements $Closeable {


public "isOpen"(): boolean
public "provider"(): $FileSystemProvider
public "close"(): void
public "getPath"(arg0: string, ...arg1: (string)[]): $Path
public "isReadOnly"(): boolean
public "getSeparator"(): string
public "getRootDirectories"(): $Iterable<($Path)>
public "getFileStores"(): $Iterable<($FileStore)>
public "supportedFileAttributeViews"(): $Set<(string)>
public "getPathMatcher"(arg0: string): $PathMatcher
public "getUserPrincipalLookupService"(): $UserPrincipalLookupService
public "newWatchService"(): $WatchService
get "open"(): boolean
get "readOnly"(): boolean
get "separator"(): string
get "rootDirectories"(): $Iterable<($Path)>
get "fileStores"(): $Iterable<($FileStore)>
get "userPrincipalLookupService"(): $UserPrincipalLookupService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystem$$Type = ($FileSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileSystem_ = $FileSystem$$Type;
}}
declare module "java.nio.file.WatchEvent$Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Modifier {

 "name"(): string

(): string
}

export namespace $WatchEvent$Modifier {
const probejs$$marker: never
}
export class $WatchEvent$Modifier$$Static implements $WatchEvent$Modifier {


 "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchEvent$Modifier$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchEvent$Modifier_ = $WatchEvent$Modifier$$Type;
}}
declare module "java.nio.file.Path" {
import {$WatchService, $WatchService$$Type} from "java.nio.file.WatchService"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$WatchEvent$Kind, $WatchEvent$Kind$$Type} from "java.nio.file.WatchEvent$Kind"
import {$LinkOption, $LinkOption$$Type} from "java.nio.file.LinkOption"
import {$WatchEvent$Modifier, $WatchEvent$Modifier$$Type} from "java.nio.file.WatchEvent$Modifier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$URI, $URI$$Type} from "java.net.URI"
import {$WatchKey, $WatchKey$$Type} from "java.nio.file.WatchKey"
import {$Watchable, $Watchable$$Type} from "java.nio.file.Watchable"
import {$FileSystem, $FileSystem$$Type} from "java.nio.file.FileSystem"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Path extends $Comparable<($Path)>, $Iterable<($Path)>, $Watchable {

 "getName"(arg0: integer): $Path
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $Path$$Type): integer
 "compareTo"(arg0: any): integer
 "startsWith"(arg0: string): boolean
 "startsWith"(arg0: $Path$$Type): boolean
 "iterator"(): $Iterator<($Path)>
 "endsWith"(arg0: string): boolean
 "endsWith"(arg0: $Path$$Type): boolean
 "register"(arg0: $WatchService$$Type, arg1: ($WatchEvent$Kind$$Type<(any)>)[], ...arg2: ($WatchEvent$Modifier$$Type)[]): $WatchKey
 "register"(arg0: $WatchService$$Type, ...arg1: ($WatchEvent$Kind$$Type<(any)>)[]): $WatchKey
 "isAbsolute"(): boolean
 "resolve"(arg0: $Path$$Type): $Path
 "resolve"(arg0: string): $Path
 "getParent"(): $Path
 "getRoot"(): $Path
 "toRealPath"(...arg0: ($LinkOption$$Type)[]): $Path
 "toFile"(): $File
 "getFileName"(): $Path
 "normalize"(): $Path
 "getFileSystem"(): $FileSystem
 "relativize"(arg0: $Path$$Type): $Path
 "getNameCount"(): integer
 "toAbsolutePath"(): $Path
 "resolveSibling"(arg0: $Path$$Type): $Path
 "resolveSibling"(arg0: string): $Path
 "subpath"(arg0: integer, arg1: integer): $Path
 "toUri"(): $URI
 "spliterator"(): $Spliterator<($Path)>
 "forEach"(arg0: $Consumer$$Type<($Path)>): void
[Symbol.iterator](): IterableIterator<$Path>;
get "absolute"(): boolean
get "parent"(): $Path
get "root"(): $Path
get "fileName"(): $Path
get "fileSystem"(): $FileSystem
get "nameCount"(): integer
}

export namespace $Path {
function of(arg0: string, ...arg1: (string)[]): $Path
function of(arg0: $URI$$Type): $Path
const probejs$$marker: never
}
export class $Path$$Static implements $Path {


 "getName"(arg0: integer): $Path
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $Path$$Type): integer
 "compareTo"(arg0: any): integer
 "startsWith"(arg0: string): boolean
 "startsWith"(arg0: $Path$$Type): boolean
 "iterator"(): $Iterator<($Path)>
static "of"(arg0: string, ...arg1: (string)[]): $Path
static "of"(arg0: $URI$$Type): $Path
 "endsWith"(arg0: string): boolean
 "endsWith"(arg0: $Path$$Type): boolean
 "register"(arg0: $WatchService$$Type, arg1: ($WatchEvent$Kind$$Type<(any)>)[], ...arg2: ($WatchEvent$Modifier$$Type)[]): $WatchKey
 "register"(arg0: $WatchService$$Type, ...arg1: ($WatchEvent$Kind$$Type<(any)>)[]): $WatchKey
 "isAbsolute"(): boolean
 "resolve"(arg0: $Path$$Type): $Path
 "resolve"(arg0: string): $Path
 "getParent"(): $Path
 "getRoot"(): $Path
 "toRealPath"(...arg0: ($LinkOption$$Type)[]): $Path
 "toFile"(): $File
 "getFileName"(): $Path
 "normalize"(): $Path
 "getFileSystem"(): $FileSystem
 "relativize"(arg0: $Path$$Type): $Path
 "getNameCount"(): integer
 "toAbsolutePath"(): $Path
 "resolveSibling"(arg0: $Path$$Type): $Path
 "resolveSibling"(arg0: string): $Path
 "subpath"(arg0: integer, arg1: integer): $Path
 "toUri"(): $URI
 "spliterator"(): $Spliterator<($Path)>
 "forEach"(arg0: $Consumer$$Type<($Path)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Path$$Type = (string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Path_ = $Path$$Type;
}}
declare module "java.nio.file.attribute.GroupPrincipal" {
import {$UserPrincipal, $UserPrincipal$$Type} from "java.nio.file.attribute.UserPrincipal"
import {$Subject, $Subject$$Type} from "javax.security.auth.Subject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GroupPrincipal extends $UserPrincipal {

 "getName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
get "name"(): string
}

export namespace $GroupPrincipal {
const probejs$$marker: never
}
export class $GroupPrincipal$$Static implements $GroupPrincipal {


 "getName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupPrincipal$$Type = ($GroupPrincipal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupPrincipal_ = $GroupPrincipal$$Type;
}}
declare module "java.nio.channels.GatheringByteChannel" {
import {$WritableByteChannel, $WritableByteChannel$$Type} from "java.nio.channels.WritableByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GatheringByteChannel extends $WritableByteChannel {

 "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
 "write"(arg0: ($ByteBuffer$$Type)[]): long
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $GatheringByteChannel {
const probejs$$marker: never
}
export class $GatheringByteChannel$$Static implements $GatheringByteChannel {


 "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
 "write"(arg0: ($ByteBuffer$$Type)[]): long
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatheringByteChannel$$Type = ($GatheringByteChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatheringByteChannel_ = $GatheringByteChannel$$Type;
}}
declare module "java.nio.charset.CharsetDecoder" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$CodingErrorAction, $CodingErrorAction$$Type} from "java.nio.charset.CodingErrorAction"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$CoderResult, $CoderResult$$Type} from "java.nio.charset.CoderResult"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetDecoder {


public "reset"(): $CharsetDecoder
public "maxCharsPerByte"(): float
public "onMalformedInput"(arg0: $CodingErrorAction$$Type): $CharsetDecoder
public "onUnmappableCharacter"(arg0: $CodingErrorAction$$Type): $CharsetDecoder
public "decode"(arg0: $ByteBuffer$$Type): $CharBuffer
public "decode"(arg0: $ByteBuffer$$Type, arg1: $CharBuffer$$Type, arg2: boolean): $CoderResult
public "flush"(arg0: $CharBuffer$$Type): $CoderResult
public "charset"(): $Charset
public "replacement"(): string
public "malformedInputAction"(): $CodingErrorAction
public "unmappableCharacterAction"(): $CodingErrorAction
public "replaceWith"(arg0: string): $CharsetDecoder
public "averageCharsPerByte"(): float
public "isAutoDetecting"(): boolean
public "isCharsetDetected"(): boolean
public "detectedCharset"(): $Charset
get "autoDetecting"(): boolean
get "charsetDetected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharsetDecoder$$Type = ($CharsetDecoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharsetDecoder_ = $CharsetDecoder$$Type;
}}
declare module "java.nio.file.WatchEvent$Kind" {
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Kind<T> {

 "name"(): string
 "type"(): $Class<(T)>
}

export namespace $WatchEvent$Kind {
const probejs$$marker: never
}
export class $WatchEvent$Kind$$Static<T> implements $WatchEvent$Kind {


 "name"(): string
 "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchEvent$Kind$$Type<T> = ($WatchEvent$Kind<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchEvent$Kind_<T> = $WatchEvent$Kind$$Type<(T)>;
}}
declare module "java.nio.channels.DatagramChannel" {
import {$NetworkChannel, $NetworkChannel$$Type} from "java.nio.channels.NetworkChannel"
import {$ProtocolFamily, $ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$ByteChannel, $ByteChannel$$Type} from "java.nio.channels.ByteChannel"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$AbstractSelectableChannel, $AbstractSelectableChannel$$Type} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$MulticastChannel, $MulticastChannel$$Type} from "java.nio.channels.MulticastChannel"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MembershipKey, $MembershipKey$$Type} from "java.nio.channels.MembershipKey"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$DatagramSocket, $DatagramSocket$$Type} from "java.net.DatagramSocket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $MulticastChannel {


public "socket"(): $DatagramSocket
public "isConnected"(): boolean
public "setOption"(arg0: $SocketOption$$Type<(any)>, arg1: any): $NetworkChannel
public "getLocalAddress"(): $SocketAddress
public "getRemoteAddress"(): $SocketAddress
public "validOps"(): integer
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "write"(arg0: $ByteBuffer$$Type): integer
public "read"(arg0: $ByteBuffer$$Type): integer
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public "connect"(arg0: $SocketAddress$$Type): $DatagramChannel
public static "open"(arg0: $ProtocolFamily$$Type): $DatagramChannel
public static "open"(): $DatagramChannel
public "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
public "disconnect"(): $DatagramChannel
public "send"(arg0: $ByteBuffer$$Type, arg1: $SocketAddress$$Type): integer
public "receive"(arg0: $ByteBuffer$$Type): $SocketAddress
public "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type): $MembershipKey
public "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type, arg2: $InetAddress$$Type): $MembershipKey
public "close"(): void
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isOpen"(): boolean
get "connected"(): boolean
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramChannel$$Type = ($DatagramChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramChannel_ = $DatagramChannel$$Type;
}}
declare module "java.nio.file.attribute.FileAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttribute<T> {

 "name"(): string
 "value"(): T
}

export namespace $FileAttribute {
const probejs$$marker: never
}
export class $FileAttribute$$Static<T> implements $FileAttribute {


 "name"(): string
 "value"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileAttribute$$Type<T> = ($FileAttribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileAttribute_<T> = $FileAttribute$$Type<(T)>;
}}
declare module "java.nio.charset.CodingErrorAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CodingErrorAction {
static readonly "REPORT": $CodingErrorAction
static readonly "IGNORE": $CodingErrorAction
static readonly "REPLACE": $CodingErrorAction


public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodingErrorAction$$Type = ($CodingErrorAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodingErrorAction_ = $CodingErrorAction$$Type;
}}
declare module "java.nio.channels.spi.AbstractInterruptibleChannel" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"
import {$InterruptibleChannel, $InterruptibleChannel$$Type} from "java.nio.channels.InterruptibleChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractInterruptibleChannel implements $Channel, $InterruptibleChannel {


public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractInterruptibleChannel$$Type = ($AbstractInterruptibleChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractInterruptibleChannel_ = $AbstractInterruptibleChannel$$Type;
}}
declare module "java.nio.FloatBuffer" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FloatBuffer extends $Buffer implements $Comparable<($FloatBuffer)> {


public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (float)[]): $FloatBuffer
public "get"(arg0: integer): float
public "get"(arg0: (float)[], arg1: integer, arg2: integer): $FloatBuffer
public "get"(arg0: (float)[]): $FloatBuffer
public "get"(arg0: integer, arg1: (float)[], arg2: integer, arg3: integer): $FloatBuffer
public "get"(): float
public "put"(arg0: integer, arg1: (float)[], arg2: integer, arg3: integer): $FloatBuffer
public "put"(arg0: integer, arg1: (float)[]): $FloatBuffer
public "put"(arg0: integer, arg1: $FloatBuffer$$Type, arg2: integer, arg3: integer): $FloatBuffer
public "put"(arg0: (float)[]): $FloatBuffer
public "put"(arg0: $FloatBuffer$$Type): $FloatBuffer
public "put"(arg0: (float)[], arg1: integer, arg2: integer): $FloatBuffer
public "put"(arg0: float): $FloatBuffer
public "put"(arg0: integer, arg1: float): $FloatBuffer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $FloatBuffer$$Type): integer
public "clear"(): $FloatBuffer
public static "wrap"(arg0: (float)[], arg1: integer, arg2: integer): $FloatBuffer
public static "wrap"(arg0: (float)[]): $FloatBuffer
public "position"(arg0: integer): $FloatBuffer
public "mismatch"(arg0: $FloatBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (float)[]
public "arrayOffset"(): integer
public "mark"(): $FloatBuffer
public "flip"(): $Buffer
public "rewind"(): $FloatBuffer
public "slice"(): $FloatBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $FloatBuffer
public static "allocate"(arg0: integer): $FloatBuffer
public "asReadOnlyBuffer"(): $FloatBuffer
public "compact"(): $FloatBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatBuffer$$Type = ($FloatBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatBuffer_ = $FloatBuffer$$Type;
}}
declare module "java.nio.channels.spi.SelectorProvider" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"
import {$ProtocolFamily, $ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$ServerSocketChannel, $ServerSocketChannel$$Type} from "java.nio.channels.ServerSocketChannel"
import {$AbstractSelector, $AbstractSelector$$Type} from "java.nio.channels.spi.AbstractSelector"
import {$SocketChannel, $SocketChannel$$Type} from "java.nio.channels.SocketChannel"
import {$Pipe, $Pipe$$Type} from "java.nio.channels.Pipe"
import {$DatagramChannel, $DatagramChannel$$Type} from "java.nio.channels.DatagramChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectorProvider {


public "openSocketChannel"(): $SocketChannel
public "openSocketChannel"(arg0: $ProtocolFamily$$Type): $SocketChannel
public static "provider"(): $SelectorProvider
public "inheritedChannel"(): $Channel
public "openSelector"(): $AbstractSelector
public "openDatagramChannel"(arg0: $ProtocolFamily$$Type): $DatagramChannel
public "openDatagramChannel"(): $DatagramChannel
public "openPipe"(): $Pipe
public "openServerSocketChannel"(): $ServerSocketChannel
public "openServerSocketChannel"(arg0: $ProtocolFamily$$Type): $ServerSocketChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectorProvider$$Type = ($SelectorProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectorProvider_ = $SelectorProvider$$Type;
}}
declare module "java.nio.file.WatchEvent" {
import {$WatchEvent$Kind, $WatchEvent$Kind$$Type} from "java.nio.file.WatchEvent$Kind"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent<T> {

 "context"(): T
 "count"(): integer
 "kind"(): $WatchEvent$Kind<(T)>
}

export namespace $WatchEvent {
const probejs$$marker: never
}
export class $WatchEvent$$Static<T> implements $WatchEvent {


 "context"(): T
 "count"(): integer
 "kind"(): $WatchEvent$Kind<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchEvent$$Type<T> = ($WatchEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchEvent_<T> = $WatchEvent$$Type<(T)>;
}}
declare module "java.nio.channels.ScatteringByteChannel" {
import {$ReadableByteChannel, $ReadableByteChannel$$Type} from "java.nio.channels.ReadableByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScatteringByteChannel extends $ReadableByteChannel {

 "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
 "read"(arg0: ($ByteBuffer$$Type)[]): long
 "read"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $ScatteringByteChannel {
const probejs$$marker: never
}
export class $ScatteringByteChannel$$Static implements $ScatteringByteChannel {


 "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
 "read"(arg0: ($ByteBuffer$$Type)[]): long
 "read"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScatteringByteChannel$$Type = ($ScatteringByteChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScatteringByteChannel_ = $ScatteringByteChannel$$Type;
}}
declare module "java.nio.file.PathMatcher" {
import {$Path, $Path$$Type} from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PathMatcher {

 "matches"(arg0: $Path$$Type): boolean

(arg0: $Path): boolean
}

export namespace $PathMatcher {
const probejs$$marker: never
}
export class $PathMatcher$$Static implements $PathMatcher {


 "matches"(arg0: $Path$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathMatcher$$Type = ((arg0: $Path) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathMatcher_ = $PathMatcher$$Type;
}}
declare module "java.nio.file.CopyOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CopyOption {

}

export namespace $CopyOption {
const probejs$$marker: never
}
export class $CopyOption$$Static implements $CopyOption {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyOption$$Type = ($CopyOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyOption_ = $CopyOption$$Type;
}}
declare module "java.nio.channels.SeekableByteChannel" {
import {$ByteChannel, $ByteChannel$$Type} from "java.nio.channels.ByteChannel"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SeekableByteChannel extends $ByteChannel {

 "size"(): long
 "position"(arg0: long): $SeekableByteChannel
 "position"(): long
 "write"(arg0: $ByteBuffer$$Type): integer
 "read"(arg0: $ByteBuffer$$Type): integer
 "truncate"(arg0: long): $SeekableByteChannel
 "isOpen"(): boolean
 "close"(): void
get "open"(): boolean
}

export namespace $SeekableByteChannel {
const probejs$$marker: never
}
export class $SeekableByteChannel$$Static implements $SeekableByteChannel {


 "size"(): long
 "position"(arg0: long): $SeekableByteChannel
 "position"(): long
 "write"(arg0: $ByteBuffer$$Type): integer
 "read"(arg0: $ByteBuffer$$Type): integer
 "truncate"(arg0: long): $SeekableByteChannel
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeekableByteChannel$$Type = ($SeekableByteChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeekableByteChannel_ = $SeekableByteChannel$$Type;
}}
declare module "java.nio.channels.Selector" {
import {$SelectorProvider, $SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"
import {$SelectionKey, $SelectionKey$$Type} from "java.nio.channels.SelectionKey"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Selector implements $Closeable {


public "isOpen"(): boolean
public "provider"(): $SelectorProvider
public "close"(): void
public "keys"(): $Set<($SelectionKey)>
public static "open"(): $Selector
public "selectNow"(arg0: $Consumer$$Type<($SelectionKey)>): integer
public "selectNow"(): integer
public "select"(): integer
public "select"(arg0: $Consumer$$Type<($SelectionKey)>): integer
public "select"(arg0: long): integer
public "select"(arg0: $Consumer$$Type<($SelectionKey)>, arg1: long): integer
public "selectedKeys"(): $Set<($SelectionKey)>
public "wakeup"(): $Selector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Selector$$Type = ($Selector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Selector_ = $Selector$$Type;
}}
declare module "java.nio.file.DirectoryStream$Filter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream$Filter<T> {

 "accept"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $DirectoryStream$Filter {
const probejs$$marker: never
}
export class $DirectoryStream$Filter$$Static<T> implements $DirectoryStream$Filter {


 "accept"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectoryStream$Filter$$Type<T> = ((arg0: T) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectoryStream$Filter_<T> = $DirectoryStream$Filter$$Type<(T)>;
}}
declare module "java.nio.channels.MembershipKey" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$MulticastChannel, $MulticastChannel$$Type} from "java.nio.channels.MulticastChannel"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MembershipKey {


public "drop"(): void
public "group"(): $InetAddress
public "block"(arg0: $InetAddress$$Type): $MembershipKey
public "channel"(): $MulticastChannel
public "isValid"(): boolean
public "unblock"(arg0: $InetAddress$$Type): $MembershipKey
public "networkInterface"(): $NetworkInterface
public "sourceAddress"(): $InetAddress
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MembershipKey$$Type = ($MembershipKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MembershipKey_ = $MembershipKey$$Type;
}}
declare module "java.nio.MappedByteBuffer" {
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MappedByteBuffer extends $ByteBuffer {


public "reset"(): $ByteBuffer
public "load"(): $MappedByteBuffer
public "clear"(): $MappedByteBuffer
public "position"(arg0: integer): $ByteBuffer
public "limit"(arg0: integer): $ByteBuffer
public "mark"(): $MappedByteBuffer
public "flip"(): $Buffer
public "rewind"(): $MappedByteBuffer
public "slice"(arg0: integer, arg1: integer): $ByteBuffer
public "slice"(): $ByteBuffer
public "duplicate"(): $MappedByteBuffer
public "compact"(): $MappedByteBuffer
public "isLoaded"(): boolean
public "force"(): $MappedByteBuffer
public "force"(arg0: integer, arg1: integer): $MappedByteBuffer
public "array"(): any
get "loaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappedByteBuffer$$Type = ($MappedByteBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MappedByteBuffer_ = $MappedByteBuffer$$Type;
}}
declare module "java.nio.file.attribute.BasicFileAttributes" {
import {$FileTime, $FileTime$$Type} from "java.nio.file.attribute.FileTime"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BasicFileAttributes {

 "size"(): long
 "isDirectory"(): boolean
 "isRegularFile"(): boolean
 "isSymbolicLink"(): boolean
 "lastModifiedTime"(): $FileTime
 "lastAccessTime"(): $FileTime
 "creationTime"(): $FileTime
 "isOther"(): boolean
 "fileKey"(): any
get "directory"(): boolean
get "regularFile"(): boolean
get "symbolicLink"(): boolean
get "other"(): boolean
}

export namespace $BasicFileAttributes {
const probejs$$marker: never
}
export class $BasicFileAttributes$$Static implements $BasicFileAttributes {


 "size"(): long
 "isDirectory"(): boolean
 "isRegularFile"(): boolean
 "isSymbolicLink"(): boolean
 "lastModifiedTime"(): $FileTime
 "lastAccessTime"(): $FileTime
 "creationTime"(): $FileTime
 "isOther"(): boolean
 "fileKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFileAttributes$$Type = ($BasicFileAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicFileAttributes_ = $BasicFileAttributes$$Type;
}}
declare module "java.nio.channels.NetworkChannel" {
import {$Channel, $Channel$$Type} from "java.nio.channels.Channel"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Set, $Set$$Type} from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $NetworkChannel extends $Channel {

 "supportedOptions"(): $Set<($SocketOption<(any)>)>
 "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $NetworkChannel
 "getLocalAddress"(): $SocketAddress
 "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
 "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
 "isOpen"(): boolean
 "close"(): void
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export namespace $NetworkChannel {
const probejs$$marker: never
}
export class $NetworkChannel$$Static implements $NetworkChannel {


 "supportedOptions"(): $Set<($SocketOption<(any)>)>
 "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $NetworkChannel
 "getLocalAddress"(): $SocketAddress
 "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
 "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkChannel$$Type = ($NetworkChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkChannel_ = $NetworkChannel$$Type;
}}
declare module "java.nio.file.attribute.AttributeView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeView {

 "name"(): string

(): string
}

export namespace $AttributeView {
const probejs$$marker: never
}
export class $AttributeView$$Static implements $AttributeView {


 "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeView$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeView_ = $AttributeView$$Type;
}}
declare module "java.nio.ByteBuffer" {
import {$FloatBuffer, $FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$IntBuffer, $IntBuffer$$Type} from "java.nio.IntBuffer"
import {$LongBuffer, $LongBuffer$$Type} from "java.nio.LongBuffer"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"
import {$DoubleBuffer, $DoubleBuffer$$Type} from "java.nio.DoubleBuffer"
import {$ShortBuffer, $ShortBuffer$$Type} from "java.nio.ShortBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuffer extends $Buffer implements $Comparable<($ByteBuffer)> {


public "reset"(): $ByteBuffer
public "get"(arg0: (byte)[]): $ByteBuffer
public "get"(arg0: integer): byte
public "get"(): byte
public "get"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuffer
public "get"(arg0: integer, arg1: (byte)[]): $ByteBuffer
public "get"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuffer
public "put"(arg0: integer, arg1: byte): $ByteBuffer
public "put"(arg0: $ByteBuffer$$Type): $ByteBuffer
public "put"(arg0: integer, arg1: $ByteBuffer$$Type, arg2: integer, arg3: integer): $ByteBuffer
public "put"(arg0: (byte)[]): $ByteBuffer
public "put"(arg0: integer, arg1: (byte)[]): $ByteBuffer
public "put"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuffer
public "put"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuffer
public "put"(arg0: byte): $ByteBuffer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public "getShort"(): short
public "getShort"(arg0: integer): short
public "putShort"(arg0: integer, arg1: short): $ByteBuffer
public "putShort"(arg0: short): $ByteBuffer
public "getChar"(arg0: integer): character
public "getChar"(): character
public "putChar"(arg0: integer, arg1: character): $ByteBuffer
public "putChar"(arg0: character): $ByteBuffer
public "getInt"(arg0: integer): integer
public "getInt"(): integer
public "putInt"(arg0: integer, arg1: integer): $ByteBuffer
public "putInt"(arg0: integer): $ByteBuffer
public "getLong"(arg0: integer): long
public "getLong"(): long
public "putLong"(arg0: long): $ByteBuffer
public "putLong"(arg0: integer, arg1: long): $ByteBuffer
public "getFloat"(): float
public "getFloat"(arg0: integer): float
public "putFloat"(arg0: float): $ByteBuffer
public "putFloat"(arg0: integer, arg1: float): $ByteBuffer
public "getDouble"(arg0: integer): double
public "getDouble"(): double
public "putDouble"(arg0: integer, arg1: double): $ByteBuffer
public "putDouble"(arg0: double): $ByteBuffer
public "clear"(): $ByteBuffer
public static "wrap"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuffer
public static "wrap"(arg0: (byte)[]): $ByteBuffer
public "position"(arg0: integer): $ByteBuffer
public "mismatch"(arg0: $ByteBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): any
public "arrayOffset"(): integer
public "mark"(): $Buffer
public "flip"(): $ByteBuffer
public "rewind"(): $Buffer
public "slice"(): $Buffer
public "slice"(arg0: integer, arg1: integer): $ByteBuffer
public "duplicate"(): $Buffer
public static "allocate"(arg0: integer): $ByteBuffer
public "alignmentOffset"(arg0: integer, arg1: integer): integer
public static "allocateDirect"(arg0: integer): $ByteBuffer
public "asReadOnlyBuffer"(): $ByteBuffer
public "compact"(): $ByteBuffer
public "order"(arg0: $ByteOrder$$Type): $ByteBuffer
public "order"(): $ByteOrder
public "alignedSlice"(arg0: integer): $ByteBuffer
public "asCharBuffer"(): $CharBuffer
public "asShortBuffer"(): $ShortBuffer
public "asIntBuffer"(): $IntBuffer
public "asLongBuffer"(): $LongBuffer
public "asFloatBuffer"(): $FloatBuffer
public "asDoubleBuffer"(): $DoubleBuffer
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "float"(): float
get "double"(): double
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuffer$$Type = ($ByteBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBuffer_ = $ByteBuffer$$Type;
}}
