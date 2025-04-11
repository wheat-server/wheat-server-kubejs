declare module "org.lwjgl.util.freetype.FT_Size" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$FT_Size_Internal, $FT_Size_Internal$$Type} from "org.lwjgl.util.freetype.FT_Size_Internal"
import {$FT_Size$Buffer, $FT_Size$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Size$Buffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Size extends $Struct<($FT_Size)> implements $NativeResource {
static readonly "GENERIC": integer
static readonly "ALIGNOF": integer
static readonly "METRICS": integer
static readonly "SIZEOF": integer
static readonly "INTERNAL": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public static "validate"(arg0: long): void
public "set"(arg0: $FT_Size$$Type): $FT_Size
public "set"(arg0: $FT_Face$$Type, arg1: $FT_Generic$$Type, arg2: $FT_Size_Metrics$$Type): $FT_Size
public static "create"(arg0: long): $FT_Size
public static "create"(arg0: long, arg1: integer): $FT_Size$Buffer
public static "create"(): $FT_Size
public static "create"(arg0: integer): $FT_Size$Buffer
public "generic"(arg0: $Consumer$$Type<($FT_Generic)>): $FT_Size
public "generic"(): $FT_Generic
public "generic"(arg0: $FT_Generic$$Type): $FT_Size
public "metrics"(arg0: $FT_Size_Metrics$$Type): $FT_Size
public "metrics"(): $FT_Size_Metrics
public "sizeof"(): integer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Size
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Size$Buffer
public static "malloc"(): $FT_Size
public static "malloc"(arg0: integer): $FT_Size$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Size
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Size$Buffer
public static "calloc"(arg0: integer): $FT_Size$Buffer
public static "calloc"(): $FT_Size
public static "createSafe"(arg0: long): $FT_Size
public static "createSafe"(arg0: long, arg1: integer): $FT_Size$Buffer
public static "nface"(arg0: long, arg1: $FT_Face$$Type): void
public static "nface"(arg0: long): $FT_Face
public static "nmetrics"(arg0: long, arg1: $FT_Size_Metrics$$Type): void
public static "nmetrics"(arg0: long): $FT_Size_Metrics
public "face"(): $FT_Face
public "face"(arg0: $FT_Face$$Type): $FT_Size
public static "ngeneric"(arg0: long): $FT_Generic
public static "ngeneric"(arg0: long, arg1: $FT_Generic$$Type): void
public static "ninternal"(arg0: long): $FT_Size_Internal
public static "ninternal"(arg0: long, arg1: $FT_Size_Internal$$Type): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size$$Type = ($FT_Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Size_ = $FT_Size$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Alloc_FuncI" {
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Alloc_FuncI extends $CallbackI {

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long

(arg0: long, arg1: long): long
get "callInterface"(): $FFICIF
}

export namespace $FT_Alloc_FuncI {
const CIF: $FFICIF
const probejs$$marker: never
}
export class $FT_Alloc_FuncI$$Static implements $FT_Alloc_FuncI {
static readonly "CIF": $FFICIF


 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Alloc_FuncI$$Type = ((arg0: long, arg1: long) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Alloc_FuncI_ = $FT_Alloc_FuncI$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Bitmap$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Bitmap, $FT_Bitmap$$Type} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_Bitmap$Buffer extends $StructBuffer<($FT_Bitmap), ($FT_Bitmap$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "buffer"(arg0: integer): $ByteBuffer
public "rows"(): integer
public "width"(): integer
public "pitch"(): integer
public "palette"(): long
public "num_grays"(): short
public "pixel_mode"(): byte
public "palette_mode"(): byte
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap$Buffer$$Type = ($FT_Bitmap$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Bitmap$Buffer_ = $FT_Bitmap$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Realloc_FuncI" {
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Realloc_FuncI extends $CallbackI {

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long

(arg0: long, arg1: long, arg2: long, arg3: long): long
get "callInterface"(): $FFICIF
}

export namespace $FT_Realloc_FuncI {
const CIF: $FFICIF
const probejs$$marker: never
}
export class $FT_Realloc_FuncI$$Static implements $FT_Realloc_FuncI {
static readonly "CIF": $FFICIF


 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Realloc_FuncI$$Type = ((arg0: long, arg1: long, arg2: long, arg3: long) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Realloc_FuncI_ = $FT_Realloc_FuncI$$Type;
}}
declare module "org.lwjgl.system.Callback" {
import {$Pointer, $Pointer$$Type} from "org.lwjgl.system.Pointer"
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Callback implements $Pointer, $NativeResource {


public static "get"<T extends $CallbackI>(arg0: long): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "address"(): long
public "free"(): void
public static "free"(arg0: long): void
public static "getSafe"<T extends $CallbackI>(arg0: long): T
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callback$$Type = ($Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Callback_ = $Callback$$Type;
}}
declare module "org.lwjgl.system.Pointer$Default" {
import {$Pointer, $Pointer$$Type} from "org.lwjgl.system.Pointer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pointer$Default implements $Pointer {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$Default$$Type = ($Pointer$Default);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointer$Default_ = $Pointer$Default$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Free_FuncI" {
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Free_FuncI extends $CallbackI {

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long

(arg0: long, arg1: long): void
get "callInterface"(): $FFICIF
}

export namespace $FT_Free_FuncI {
const CIF: $FFICIF
const probejs$$marker: never
}
export class $FT_Free_FuncI$$Static implements $FT_Free_FuncI {
static readonly "CIF": $FFICIF


 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Free_FuncI$$Type = ((arg0: long, arg1: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Free_FuncI_ = $FT_Free_FuncI$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Stream_IoFunc" {
import {$Callback, $Callback$$Type} from "org.lwjgl.system.Callback"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"
import {$FT_Stream_IoFuncI, $FT_Stream_IoFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"

export class $FT_Stream_IoFunc extends $Callback implements $FT_Stream_IoFuncI {


public static "create"(arg0: long): $FT_Stream_IoFunc
public static "create"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream_IoFunc
public static "createSafe"(arg0: long): $FT_Stream_IoFunc
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_IoFunc$$Type = ($FT_Stream_IoFunc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Stream_IoFunc_ = $FT_Stream_IoFunc$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Size_Metrics" {
import {$FT_Size_Metrics$Buffer, $FT_Size_Metrics$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics$Buffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Metrics extends $Struct<($FT_Size_Metrics)> {
static readonly "ASCENDER": integer
static readonly "Y_PPEM": integer
static readonly "X_SCALE": integer
static readonly "X_PPEM": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "MAX_ADVANCE": integer
static readonly "Y_SCALE": integer
static readonly "HEIGHT": integer
static readonly "DESCENDER": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $FT_Size_Metrics
public static "create"(arg0: long, arg1: integer): $FT_Size_Metrics$Buffer
public "height"(): long
public "sizeof"(): integer
public static "nheight"(arg0: long): long
public static "createSafe"(arg0: long, arg1: integer): $FT_Size_Metrics$Buffer
public static "createSafe"(arg0: long): $FT_Size_Metrics
public "descender"(): long
public "y_scale"(): long
public "y_ppem"(): short
public static "nx_ppem"(arg0: long): short
public static "ny_ppem"(arg0: long): short
public "x_ppem"(): short
public "ascender"(): long
public static "ndescender"(arg0: long): long
public static "nascender"(arg0: long): long
public "x_scale"(): long
public "max_advance"(): long
public static "nmax_advance"(arg0: long): long
public static "ny_scale"(arg0: long): long
public static "nx_scale"(arg0: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Metrics$$Type = ($FT_Size_Metrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Size_Metrics_ = $FT_Size_Metrics$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_List$Buffer" {
import {$FT_List, $FT_List$$Type} from "org.lwjgl.util.freetype.FT_List"
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode, $FT_ListNode$$Type} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_List$Buffer extends $StructBuffer<($FT_List), ($FT_List$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "tail"(): $FT_ListNode
public "head"(): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_List$Buffer$$Type = ($FT_List$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_List$Buffer_ = $FT_List$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Generic_Finalizer" {
import {$FT_Generic_FinalizerI, $FT_Generic_FinalizerI$$Type} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$Callback, $Callback$$Type} from "org.lwjgl.system.Callback"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Generic_Finalizer extends $Callback implements $FT_Generic_FinalizerI {


public static "create"(arg0: long): $FT_Generic_Finalizer
public static "create"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic_Finalizer
public static "createSafe"(arg0: long): $FT_Generic_Finalizer
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long): void
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic_Finalizer$$Type = ($FT_Generic_Finalizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Generic_Finalizer_ = $FT_Generic_Finalizer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_ListNode$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode, $FT_ListNode$$Type} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_ListNode$Buffer extends $StructBuffer<($FT_ListNode), ($FT_ListNode$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_ListNode
public "data"(arg0: integer): $ByteBuffer
public "prev"(): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_ListNode$Buffer$$Type = ($FT_ListNode$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_ListNode$Buffer_ = $FT_ListNode$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_GlyphSlot" {
import {$FT_Glyph_Metrics, $FT_Glyph_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Vector, $FT_Vector$$Type} from "org.lwjgl.util.freetype.FT_Vector"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Outline, $FT_Outline$$Type} from "org.lwjgl.util.freetype.FT_Outline"
import {$FT_GlyphSlot$Buffer, $FT_GlyphSlot$Buffer$$Type} from "org.lwjgl.util.freetype.FT_GlyphSlot$Buffer"
import {$FT_Bitmap, $FT_Bitmap$$Type} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_GlyphSlot extends $Struct<($FT_GlyphSlot)> {
static readonly "BITMAP": integer
static readonly "FORMAT": integer
static readonly "METRICS": integer
static readonly "SIZEOF": integer
static readonly "LIBRARY": integer
static readonly "SUBGLYPHS": integer
static readonly "NUM_SUBGLYPHS": integer
static readonly "OTHER": integer
static readonly "BITMAP_TOP": integer
static readonly "CONTROL_DATA": integer
static readonly "GENERIC": integer
static readonly "GLYPH_INDEX": integer
static readonly "LINEARHORIADVANCE": integer
static readonly "LINEARVERTADVANCE": integer
static readonly "ALIGNOF": integer
static readonly "NEXT": integer
static readonly "INTERNAL": integer
static readonly "OUTLINE": integer
static readonly "CONTROL_LEN": integer
static readonly "RSB_DELTA": integer
static readonly "BITMAP_LEFT": integer
static readonly "ADVANCE": integer
static readonly "LSB_DELTA": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_GlyphSlot
public "format"(): integer
public static "create"(arg0: long): $FT_GlyphSlot
public static "create"(arg0: long, arg1: integer): $FT_GlyphSlot$Buffer
public "generic"(): $FT_Generic
public "advance"(): $FT_Vector
public "metrics"(): $FT_Glyph_Metrics
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_GlyphSlot
public static "createSafe"(arg0: long, arg1: integer): $FT_GlyphSlot$Buffer
public "library"(): long
public "bitmap"(): $FT_Bitmap
public "bitmap_top"(): integer
public "glyph_index"(): integer
public "lsb_delta"(): long
public static "nnext"(arg0: long): $FT_GlyphSlot
public static "nadvance"(arg0: long): $FT_Vector
public static "nformat"(arg0: long): integer
public static "nbitmap"(arg0: long): $FT_Bitmap
public static "nface"(arg0: long): $FT_Face
public static "noutline"(arg0: long): $FT_Outline
public static "nsubglyphs"(arg0: long): long
public static "nlsb_delta"(arg0: long): long
public static "nrsb_delta"(arg0: long): long
public static "nmetrics"(arg0: long): $FT_Glyph_Metrics
public "rsb_delta"(): long
public static "nlibrary"(arg0: long): long
public static "nother"(arg0: long): long
public "outline"(): $FT_Outline
public "bitmap_left"(): integer
public "face"(): $FT_Face
public static "nlinearHoriAdvance"(arg0: long): long
public static "nbitmap_left"(arg0: long): integer
public static "nbitmap_top"(arg0: long): integer
public static "nglyph_index"(arg0: long): integer
public static "nlinearVertAdvance"(arg0: long): long
public static "nnum_subglyphs"(arg0: long): integer
public "linearHoriAdvance"(): long
public "linearVertAdvance"(): long
public static "ncontrol_len"(arg0: long): long
public static "ncontrol_data"(arg0: long): $ByteBuffer
public static "ngeneric"(arg0: long): $FT_Generic
public static "ninternal"(arg0: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_GlyphSlot$$Type = ($FT_GlyphSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_GlyphSlot_ = $FT_GlyphSlot$$Type;
}}
declare module "org.lwjgl.system.Pointer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Pointer {

 "address"(): long

(): long
}

export namespace $Pointer {
const POINTER_SIZE: integer
const CLONG_SIZE: integer
const CLONG_SHIFT: integer
const BITS32: boolean
const POINTER_SHIFT: integer
const BITS64: boolean
const probejs$$marker: never
}
export class $Pointer$$Static implements $Pointer {
static readonly "POINTER_SIZE": integer
static readonly "CLONG_SIZE": integer
static readonly "CLONG_SHIFT": integer
static readonly "BITS32": boolean
static readonly "POINTER_SHIFT": integer
static readonly "BITS64": boolean


 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointer_ = $Pointer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Realloc_Func" {
import {$FT_Realloc_FuncI, $FT_Realloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$Callback, $Callback$$Type} from "org.lwjgl.system.Callback"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Realloc_Func extends $Callback implements $FT_Realloc_FuncI {


public static "create"(arg0: long): $FT_Realloc_Func
public static "create"(arg0: $FT_Realloc_FuncI$$Type): $FT_Realloc_Func
public static "createSafe"(arg0: long): $FT_Realloc_Func
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Realloc_Func$$Type = ($FT_Realloc_Func);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Realloc_Func_ = $FT_Realloc_Func$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Vector" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Vector$Buffer, $FT_Vector$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Vector$Buffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Vector extends $Struct<($FT_Vector)> implements $NativeResource {
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "X": integer
static readonly "Y": integer

constructor(arg0: $ByteBuffer$$Type)

public static "nx"(arg0: long): long
public static "nx"(arg0: long, arg1: long): void
public static "ny"(arg0: long, arg1: long): void
public static "ny"(arg0: long): long
public "x"(): long
public "x"(arg0: long): $FT_Vector
public "set"(arg0: $FT_Vector$$Type): $FT_Vector
public "set"(arg0: long, arg1: long): $FT_Vector
public static "create"(arg0: long): $FT_Vector
public static "create"(arg0: integer): $FT_Vector$Buffer
public static "create"(arg0: long, arg1: integer): $FT_Vector$Buffer
public static "create"(): $FT_Vector
public "y"(arg0: long): $FT_Vector
public "y"(): long
public "sizeof"(): integer
public static "malloc"(arg0: integer): $FT_Vector$Buffer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Vector$Buffer
public static "malloc"(): $FT_Vector
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Vector
public static "calloc"(): $FT_Vector
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Vector
public static "calloc"(arg0: integer): $FT_Vector$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Vector$Buffer
public static "createSafe"(arg0: long, arg1: integer): $FT_Vector$Buffer
public static "createSafe"(arg0: long): $FT_Vector
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Vector$$Type = ($FT_Vector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Vector_ = $FT_Vector$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Size_Metrics$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Metrics$Buffer extends $StructBuffer<($FT_Size_Metrics), ($FT_Size_Metrics$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "height"(): long
public "descender"(): long
public "y_scale"(): long
public "y_ppem"(): short
public "x_ppem"(): short
public "ascender"(): long
public "x_scale"(): long
public "max_advance"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Metrics$Buffer$$Type = ($FT_Size_Metrics$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Size_Metrics$Buffer_ = $FT_Size_Metrics$Buffer$$Type;
}}
declare module "org.lwjgl.PointerBuffer" {
import {$FloatBuffer, $FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$Pointer, $Pointer$$Type} from "org.lwjgl.system.Pointer"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$CustomBuffer, $CustomBuffer$$Type} from "org.lwjgl.system.CustomBuffer"
import {$IntBuffer, $IntBuffer$$Type} from "java.nio.IntBuffer"
import {$LongBuffer, $LongBuffer$$Type} from "java.nio.LongBuffer"
import {$DoubleBuffer, $DoubleBuffer$$Type} from "java.nio.DoubleBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ShortBuffer, $ShortBuffer$$Type} from "java.nio.ShortBuffer"

export class $PointerBuffer extends $CustomBuffer<($PointerBuffer)> implements $Comparable<($PointerBuffer)> {


public "get"(arg0: (long)[], arg1: integer, arg2: integer): $PointerBuffer
public static "get"(arg0: $ByteBuffer$$Type): long
public "get"(): long
public "get"(arg0: integer): long
public static "get"(arg0: $ByteBuffer$$Type, arg1: integer): long
public "get"(arg0: (long)[]): $PointerBuffer
public "put"(arg0: $IntBuffer$$Type): $PointerBuffer
public "put"(arg0: $ShortBuffer$$Type): $PointerBuffer
public "put"(arg0: $FloatBuffer$$Type): $PointerBuffer
public "put"(arg0: $DoubleBuffer$$Type): $PointerBuffer
public "put"(arg0: $LongBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $DoubleBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $FloatBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $LongBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $IntBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $ShortBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $ByteBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: long): $PointerBuffer
public static "put"(arg0: $ByteBuffer$$Type, arg1: long): void
public "put"(arg0: long): $PointerBuffer
public "put"(arg0: (long)[]): $PointerBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $PointerBuffer
public "put"(arg0: $ByteBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $Pointer$$Type): $PointerBuffer
public "put"(arg0: $Pointer$$Type): $PointerBuffer
public static "put"(arg0: $ByteBuffer$$Type, arg1: integer, arg2: long): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $PointerBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public static "create"(arg0: long, arg1: integer): $PointerBuffer
public static "create"(arg0: $ByteBuffer$$Type): $PointerBuffer
public "getByteBuffer"(arg0: integer): $ByteBuffer
public "getByteBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public static "allocateDirect"(arg0: integer): $PointerBuffer
public "getLongBuffer"(arg0: integer, arg1: integer): $LongBuffer
public "getLongBuffer"(arg0: integer): $LongBuffer
public "getStringASCII"(): string
public "getStringASCII"(arg0: integer): string
public "getShortBuffer"(arg0: integer): $ShortBuffer
public "getShortBuffer"(arg0: integer, arg1: integer): $ShortBuffer
public "getStringUTF8"(): string
public "getStringUTF8"(arg0: integer): string
public "getPointerBuffer"(arg0: integer): $PointerBuffer
public "getPointerBuffer"(arg0: integer, arg1: integer): $PointerBuffer
public "putAddressOf"(arg0: $CustomBuffer$$Type<(any)>): $PointerBuffer
public "putAddressOf"(arg0: integer, arg1: $CustomBuffer$$Type<(any)>): $PointerBuffer
public "getIntBuffer"(arg0: integer, arg1: integer): $IntBuffer
public "getIntBuffer"(arg0: integer): $IntBuffer
public "getDoubleBuffer"(arg0: integer, arg1: integer): $DoubleBuffer
public "getDoubleBuffer"(arg0: integer): $DoubleBuffer
public "getFloatBuffer"(arg0: integer): $FloatBuffer
public "getFloatBuffer"(arg0: integer, arg1: integer): $FloatBuffer
public "getStringUTF16"(arg0: integer): string
public "getStringUTF16"(): string
public "sizeof"(): integer
get "stringASCII"(): string
get "stringUTF8"(): string
get "stringUTF16"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointerBuffer$$Type = ($PointerBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointerBuffer_ = $PointerBuffer$$Type;
}}
declare module "org.lwjgl.CLongBuffer" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$CustomBuffer, $CustomBuffer$$Type} from "org.lwjgl.system.CustomBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $CLongBuffer extends $CustomBuffer<($CLongBuffer)> implements $Comparable<($CLongBuffer)> {


public "get"(arg0: integer): long
public "get"(): long
public static "get"(arg0: $ByteBuffer$$Type): long
public static "get"(arg0: $ByteBuffer$$Type, arg1: integer): long
public "get"(arg0: (long)[]): $CLongBuffer
public "get"(arg0: (long)[], arg1: integer, arg2: integer): $CLongBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $CLongBuffer
public static "put"(arg0: $ByteBuffer$$Type, arg1: integer, arg2: long): void
public "put"(arg0: integer, arg1: long): $CLongBuffer
public "put"(arg0: (long)[]): $CLongBuffer
public static "put"(arg0: $ByteBuffer$$Type, arg1: long): void
public "put"(arg0: long): $CLongBuffer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CLongBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public static "create"(arg0: $ByteBuffer$$Type): $CLongBuffer
public static "create"(arg0: long, arg1: integer): $CLongBuffer
public static "allocateDirect"(arg0: integer): $CLongBuffer
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CLongBuffer$$Type = ($CLongBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CLongBuffer_ = $CLongBuffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Outline$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Vector$Buffer, $FT_Vector$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Vector$Buffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ShortBuffer, $ShortBuffer$$Type} from "java.nio.ShortBuffer"
import {$FT_Outline, $FT_Outline$$Type} from "org.lwjgl.util.freetype.FT_Outline"

export class $FT_Outline$Buffer extends $StructBuffer<($FT_Outline), ($FT_Outline$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "flags"(): integer
public "tags"(): $ByteBuffer
public "contours"(): $ShortBuffer
public "n_points"(): short
public "n_contours"(): short
public "points"(): $FT_Vector$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Outline$Buffer$$Type = ($FT_Outline$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Outline$Buffer_ = $FT_Outline$Buffer$$Type;
}}
declare module "org.lwjgl.system.CallbackI" {
import {$Pointer, $Pointer$$Type} from "org.lwjgl.system.Pointer"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CallbackI extends $Pointer {

 "callback"(arg0: long, arg1: long): void
 "address"(): long
 "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}

export namespace $CallbackI {
const probejs$$marker: never
}
export class $CallbackI$$Static implements $CallbackI {


 "callback"(arg0: long, arg1: long): void
 "address"(): long
 "getCallInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackI$$Type = ($CallbackI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallbackI_ = $CallbackI$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_CharMap$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_CharMap, $FT_CharMap$$Type} from "org.lwjgl.util.freetype.FT_CharMap"

export class $FT_CharMap$Buffer extends $StructBuffer<($FT_CharMap), ($FT_CharMap$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "encoding"(): integer
public "face"(): $FT_Face
public "platform_id"(): short
public "encoding_id"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_CharMap$Buffer$$Type = ($FT_CharMap$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_CharMap$Buffer_ = $FT_CharMap$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_GlyphSlot$Buffer" {
import {$FT_Glyph_Metrics, $FT_Glyph_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Vector, $FT_Vector$$Type} from "org.lwjgl.util.freetype.FT_Vector"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$FT_GlyphSlot, $FT_GlyphSlot$$Type} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Outline, $FT_Outline$$Type} from "org.lwjgl.util.freetype.FT_Outline"
import {$FT_Bitmap, $FT_Bitmap$$Type} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_GlyphSlot$Buffer extends $StructBuffer<($FT_GlyphSlot), ($FT_GlyphSlot$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_GlyphSlot
public "format"(): integer
public "generic"(): $FT_Generic
public "advance"(): $FT_Vector
public "metrics"(): $FT_Glyph_Metrics
public "library"(): long
public "bitmap"(): $FT_Bitmap
public "bitmap_top"(): integer
public "glyph_index"(): integer
public "lsb_delta"(): long
public "rsb_delta"(): long
public "outline"(): $FT_Outline
public "bitmap_left"(): integer
public "face"(): $FT_Face
public "linearHoriAdvance"(): long
public "linearVertAdvance"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_GlyphSlot$Buffer$$Type = ($FT_GlyphSlot$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_GlyphSlot$Buffer_ = $FT_GlyphSlot$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_StreamDesc" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_StreamDesc$Buffer, $FT_StreamDesc$Buffer$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc$Buffer"

export class $FT_StreamDesc extends $Struct<($FT_StreamDesc)> implements $NativeResource {
static readonly "ALIGNOF": integer
static readonly "POINTER": integer
static readonly "SIZEOF": integer
static readonly "VALUE": integer

constructor(arg0: $ByteBuffer$$Type)

public "value"(arg0: long): $FT_StreamDesc
public "value"(): long
public "set"(arg0: $FT_StreamDesc$$Type): $FT_StreamDesc
public static "create"(arg0: long, arg1: integer): $FT_StreamDesc$Buffer
public static "create"(): $FT_StreamDesc
public static "create"(arg0: long): $FT_StreamDesc
public static "create"(arg0: integer): $FT_StreamDesc$Buffer
public "pointer"(): long
public "pointer"(arg0: long): $FT_StreamDesc
public static "npointer"(arg0: long): long
public static "npointer"(arg0: long, arg1: long): void
public "sizeof"(): integer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_StreamDesc$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_StreamDesc
public static "malloc"(): $FT_StreamDesc
public static "malloc"(arg0: integer): $FT_StreamDesc$Buffer
public static "calloc"(arg0: integer): $FT_StreamDesc$Buffer
public static "calloc"(): $FT_StreamDesc
public static "calloc"(arg0: $MemoryStack$$Type): $FT_StreamDesc
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_StreamDesc$Buffer
public static "createSafe"(arg0: long, arg1: integer): $FT_StreamDesc$Buffer
public static "createSafe"(arg0: long): $FT_StreamDesc
public static "nvalue"(arg0: long, arg1: long): void
public static "nvalue"(arg0: long): long
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_StreamDesc$$Type = ($FT_StreamDesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_StreamDesc_ = $FT_StreamDesc$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Face" {
import {$FT_BBox, $FT_BBox$$Type} from "org.lwjgl.util.freetype.FT_BBox"
import {$FT_GlyphSlot, $FT_GlyphSlot$$Type} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$PointerBuffer, $PointerBuffer$$Type} from "org.lwjgl.PointerBuffer"
import {$FT_Memory, $FT_Memory$$Type} from "org.lwjgl.util.freetype.FT_Memory"
import {$FT_List, $FT_List$$Type} from "org.lwjgl.util.freetype.FT_List"
import {$FT_Size, $FT_Size$$Type} from "org.lwjgl.util.freetype.FT_Size"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Face$Buffer, $FT_Face$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Face$Buffer"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Bitmap_Size$Buffer, $FT_Bitmap_Size$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_CharMap, $FT_CharMap$$Type} from "org.lwjgl.util.freetype.FT_CharMap"
import {$FT_Stream, $FT_Stream$$Type} from "org.lwjgl.util.freetype.FT_Stream"

export class $FT_Face extends $Struct<($FT_Face)> {
static readonly "UNDERLINE_THICKNESS": integer
static readonly "GLYPH": integer
static readonly "SIZES_LIST": integer
static readonly "NUM_GLYPHS": integer
static readonly "EXTENSIONS": integer
static readonly "AUTOHINT": integer
static readonly "DRIVER": integer
static readonly "SIZEOF": integer
static readonly "FACE_FLAGS": integer
static readonly "NUM_FACES": integer
static readonly "NUM_FIXED_SIZES": integer
static readonly "MEMORY": integer
static readonly "FAMILY_NAME": integer
static readonly "AVAILABLE_SIZES": integer
static readonly "UNDERLINE_POSITION": integer
static readonly "INTERNAL": integer
static readonly "MAX_ADVANCE_HEIGHT": integer
static readonly "ASCENDER": integer
static readonly "UNITS_PER_EM": integer
static readonly "MAX_ADVANCE_WIDTH": integer
static readonly "FACE_INDEX": integer
static readonly "SIZE": integer
static readonly "STREAM": integer
static readonly "NUM_CHARMAPS": integer
static readonly "CHARMAPS": integer
static readonly "HEIGHT": integer
static readonly "STYLE_FLAGS": integer
static readonly "GENERIC": integer
static readonly "BBOX": integer
static readonly "ALIGNOF": integer
static readonly "STYLE_NAME": integer
static readonly "DESCENDER": integer
static readonly "CHARMAP": integer

constructor(arg0: $ByteBuffer$$Type)

public "size"(): $FT_Size
public static "create"(arg0: long, arg1: integer): $FT_Face$Buffer
public static "create"(arg0: long): $FT_Face
public "generic"(): $FT_Generic
public "glyph"(): $FT_GlyphSlot
public static "nunits_per_EM"(arg0: long): short
public "units_per_EM"(): short
public "max_advance_width"(): short
public "num_charmaps"(): integer
public "max_advance_height"(): short
public "style_flags"(): long
public static "nnum_glyphs"(arg0: long): long
public static "navailable_sizes"(arg0: long): $FT_Bitmap_Size$Buffer
public static "nextensions"(arg0: long): long
public static "nfamily_nameString"(arg0: long): string
public static "nsizes_list"(arg0: long): $FT_List
public static "nfamily_name"(arg0: long): $ByteBuffer
public static "nface_flags"(arg0: long): long
public "style_nameString"(): string
public "num_fixed_sizes"(): integer
public "family_nameString"(): string
public "available_sizes"(): $FT_Bitmap_Size$Buffer
public static "nstyle_flags"(arg0: long): long
public static "nstyle_name"(arg0: long): $ByteBuffer
public static "nstyle_nameString"(arg0: long): string
public "family_name"(): $ByteBuffer
public static "nnum_fixed_sizes"(arg0: long): integer
public "underline_position"(): short
public static "nnum_charmaps"(arg0: long): integer
public static "nmax_advance_width"(arg0: long): short
public static "nface_index"(arg0: long): long
public "height"(): short
public "sizeof"(): integer
public static "nheight"(arg0: long): short
public static "createSafe"(arg0: long): $FT_Face
public static "createSafe"(arg0: long, arg1: integer): $FT_Face$Buffer
public static "nsize"(arg0: long): $FT_Size
public "descender"(): short
public static "nnum_faces"(arg0: long): long
public "charmap"(): $FT_CharMap
public "face_flags"(): long
public "num_glyphs"(): long
public "face_index"(): long
public "style_name"(): $ByteBuffer
public "charmaps"(): $PointerBuffer
public "num_faces"(): long
public "bbox"(): $FT_BBox
public "ascender"(): short
public static "ndriver"(arg0: long): long
public static "nmemory"(arg0: long): $FT_Memory
public static "nstream$"(arg0: long): $FT_Stream
public static "nbbox"(arg0: long): $FT_BBox
public static "ndescender"(arg0: long): short
public static "ngeneric"(arg0: long): $FT_Generic
public static "ncharmap"(arg0: long): $FT_CharMap
public static "ncharmaps"(arg0: long): $PointerBuffer
public static "ninternal"(arg0: long): long
public static "nascender"(arg0: long): short
public static "nautohint"(arg0: long): $FT_Generic
public static "nglyph"(arg0: long): $FT_GlyphSlot
public static "nmax_advance_height"(arg0: long): short
public static "nunderline_position"(arg0: long): short
public "underline_thickness"(): short
public static "nunderline_thickness"(arg0: long): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Face$$Type = ($FT_Face);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Face_ = $FT_Face$$Type;
}}
declare module "org.lwjgl.glfw.GLFWVidMode$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GLFWVidMode, $GLFWVidMode$$Type} from "org.lwjgl.glfw.GLFWVidMode"

export class $GLFWVidMode$Buffer extends $StructBuffer<($GLFWVidMode), ($GLFWVidMode$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "width"(): integer
public "refreshRate"(): integer
public "height"(): integer
public "redBits"(): integer
public "greenBits"(): integer
public "blueBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GLFWVidMode$Buffer$$Type = ($GLFWVidMode$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GLFWVidMode$Buffer_ = $GLFWVidMode$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Size_Internal" {
import {$FT_Size_Internal$Buffer, $FT_Size_Internal$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Size_Internal$Buffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Internal extends $Struct<($FT_Size_Internal)> {
static readonly "AUTOHINT_METRICS": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "MODULE_DATA": integer
static readonly "AUTOHINT_MODE": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $FT_Size_Internal
public static "create"(arg0: long, arg1: integer): $FT_Size_Internal$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Size_Internal$Buffer
public static "createSafe"(arg0: long): $FT_Size_Internal
public "module_data"(): long
public "autohint_mode"(): integer
public static "nautohint_metrics"(arg0: long): $FT_Size_Metrics
public static "nmodule_data"(arg0: long): long
public "autohint_metrics"(): $FT_Size_Metrics
public static "nautohint_mode"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Internal$$Type = ($FT_Size_Internal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Size_Internal_ = $FT_Size_Internal$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Stream_CloseFuncI" {
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Stream_CloseFuncI extends $CallbackI {

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long

(arg0: long): void
get "callInterface"(): $FFICIF
}

export namespace $FT_Stream_CloseFuncI {
const CIF: $FFICIF
const probejs$$marker: never
}
export class $FT_Stream_CloseFuncI$$Static implements $FT_Stream_CloseFuncI {
static readonly "CIF": $FFICIF


 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_CloseFuncI$$Type = ((arg0: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Stream_CloseFuncI_ = $FT_Stream_CloseFuncI$$Type;
}}
declare module "org.lwjgl.system.Struct$StructValidation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Struct$StructValidation {

 "validate"(arg0: long): void

(arg0: long): void
}

export namespace $Struct$StructValidation {
const probejs$$marker: never
}
export class $Struct$StructValidation$$Static implements $Struct$StructValidation {


 "validate"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$StructValidation$$Type = ((arg0: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Struct$StructValidation_ = $Struct$StructValidation$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Size$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Size, $FT_Size$$Type} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Size$Buffer extends $StructBuffer<($FT_Size), ($FT_Size$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "generic"(arg0: $Consumer$$Type<($FT_Generic)>): $FT_Size$Buffer
public "generic"(): $FT_Generic
public "generic"(arg0: $FT_Generic$$Type): $FT_Size$Buffer
public "metrics"(arg0: $FT_Size_Metrics$$Type): $FT_Size$Buffer
public "metrics"(): $FT_Size_Metrics
public "face"(): $FT_Face
public "face"(arg0: $FT_Face$$Type): $FT_Size$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size$Buffer$$Type = ($FT_Size$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Size$Buffer_ = $FT_Size$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_BBox" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_BBox$Buffer, $FT_BBox$Buffer$$Type} from "org.lwjgl.util.freetype.FT_BBox$Buffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_BBox extends $Struct<($FT_BBox)> implements $NativeResource {
static readonly "YMIN": integer
static readonly "YMAX": integer
static readonly "XMIN": integer
static readonly "XMAX": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "set"(arg0: $FT_BBox$$Type): $FT_BBox
public "set"(arg0: long, arg1: long, arg2: long, arg3: long): $FT_BBox
public static "create"(): $FT_BBox
public static "create"(arg0: integer): $FT_BBox$Buffer
public static "create"(arg0: long): $FT_BBox
public static "create"(arg0: long, arg1: integer): $FT_BBox$Buffer
public "yMax"(): long
public "yMax"(arg0: long): $FT_BBox
public "xMax"(): long
public "xMax"(arg0: long): $FT_BBox
public "xMin"(arg0: long): $FT_BBox
public "xMin"(): long
public "yMin"(): long
public "yMin"(arg0: long): $FT_BBox
public "sizeof"(): integer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_BBox$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_BBox
public static "malloc"(arg0: integer): $FT_BBox$Buffer
public static "malloc"(): $FT_BBox
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_BBox$Buffer
public static "calloc"(): $FT_BBox
public static "calloc"(arg0: integer): $FT_BBox$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_BBox
public static "createSafe"(arg0: long): $FT_BBox
public static "createSafe"(arg0: long, arg1: integer): $FT_BBox$Buffer
public static "nyMax"(arg0: long): long
public static "nyMax"(arg0: long, arg1: long): void
public static "nxMin"(arg0: long, arg1: long): void
public static "nxMin"(arg0: long): long
public static "nxMax"(arg0: long): long
public static "nxMax"(arg0: long, arg1: long): void
public static "nyMin"(arg0: long, arg1: long): void
public static "nyMin"(arg0: long): long
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_BBox$$Type = ($FT_BBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_BBox_ = $FT_BBox$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Free_Func" {
import {$Callback, $Callback$$Type} from "org.lwjgl.system.Callback"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"
import {$FT_Free_FuncI, $FT_Free_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Free_Func extends $Callback implements $FT_Free_FuncI {


public static "create"(arg0: long): $FT_Free_Func
public static "create"(arg0: $FT_Free_FuncI$$Type): $FT_Free_Func
public static "createSafe"(arg0: long): $FT_Free_Func
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long): void
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Free_Func$$Type = ($FT_Free_Func);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Free_Func_ = $FT_Free_Func$$Type;
}}
declare module "org.lwjgl.glfw.GLFWVidMode" {
import {$GLFWVidMode$Buffer, $GLFWVidMode$Buffer$$Type} from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $GLFWVidMode extends $Struct<($GLFWVidMode)> {
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "GREENBITS": integer
static readonly "WIDTH": integer
static readonly "REFRESHRATE": integer
static readonly "HEIGHT": integer
static readonly "REDBITS": integer
static readonly "BLUEBITS": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $GLFWVidMode
public static "create"(arg0: long, arg1: integer): $GLFWVidMode$Buffer
public "width"(): integer
public static "nrefreshRate"(arg0: long): integer
public "refreshRate"(): integer
public "height"(): integer
public "sizeof"(): integer
public static "nheight"(arg0: long): integer
public static "nwidth"(arg0: long): integer
public static "createSafe"(arg0: long): $GLFWVidMode
public static "createSafe"(arg0: long, arg1: integer): $GLFWVidMode$Buffer
public "redBits"(): integer
public "greenBits"(): integer
public "blueBits"(): integer
public static "ngreenBits"(arg0: long): integer
public static "nblueBits"(arg0: long): integer
public static "nredBits"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GLFWVidMode$$Type = ($GLFWVidMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GLFWVidMode_ = $GLFWVidMode$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_List" {
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_List$Buffer, $FT_List$Buffer$$Type} from "org.lwjgl.util.freetype.FT_List$Buffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode, $FT_ListNode$$Type} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_List extends $Struct<($FT_List)> {
static readonly "HEAD": integer
static readonly "ALIGNOF": integer
static readonly "TAIL": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "tail"(): $FT_ListNode
public static "create"(arg0: long): $FT_List
public static "create"(arg0: long, arg1: integer): $FT_List$Buffer
public "head"(): $FT_ListNode
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_List
public static "createSafe"(arg0: long, arg1: integer): $FT_List$Buffer
public static "nhead"(arg0: long): $FT_ListNode
public static "ntail"(arg0: long): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_List$$Type = ($FT_List);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_List_ = $FT_List$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Glyph_Metrics$Buffer" {
import {$FT_Glyph_Metrics, $FT_Glyph_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Glyph_Metrics$Buffer extends $StructBuffer<($FT_Glyph_Metrics), ($FT_Glyph_Metrics$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "width"(): long
public "height"(): long
public "horiBearingX"(): long
public "horiBearingY"(): long
public "vertBearingX"(): long
public "vertBearingY"(): long
public "horiAdvance"(): long
public "vertAdvance"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Glyph_Metrics$Buffer$$Type = ($FT_Glyph_Metrics$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Glyph_Metrics$Buffer_ = $FT_Glyph_Metrics$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Glyph_Metrics" {
import {$FT_Glyph_Metrics$Buffer, $FT_Glyph_Metrics$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Glyph_Metrics$Buffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Glyph_Metrics extends $Struct<($FT_Glyph_Metrics)> {
static readonly "HORIADVANCE": integer
static readonly "VERTBEARINGX": integer
static readonly "VERTBEARINGY": integer
static readonly "HORIBEARINGY": integer
static readonly "VERTADVANCE": integer
static readonly "ALIGNOF": integer
static readonly "HORIBEARINGX": integer
static readonly "SIZEOF": integer
static readonly "WIDTH": integer
static readonly "HEIGHT": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $FT_Glyph_Metrics
public static "create"(arg0: long, arg1: integer): $FT_Glyph_Metrics$Buffer
public "width"(): long
public "height"(): long
public "sizeof"(): integer
public static "nheight"(arg0: long): long
public static "nwidth"(arg0: long): long
public static "createSafe"(arg0: long): $FT_Glyph_Metrics
public static "createSafe"(arg0: long, arg1: integer): $FT_Glyph_Metrics$Buffer
public "horiBearingX"(): long
public "horiBearingY"(): long
public static "nhoriBearingX"(arg0: long): long
public "vertBearingX"(): long
public "vertBearingY"(): long
public "horiAdvance"(): long
public "vertAdvance"(): long
public static "nhoriAdvance"(arg0: long): long
public static "nhoriBearingY"(arg0: long): long
public static "nvertBearingX"(arg0: long): long
public static "nvertAdvance"(arg0: long): long
public static "nvertBearingY"(arg0: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Glyph_Metrics$$Type = ($FT_Glyph_Metrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Glyph_Metrics_ = $FT_Glyph_Metrics$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Bitmap_Size, $FT_Bitmap_Size$$Type} from "org.lwjgl.util.freetype.FT_Bitmap_Size"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap_Size$Buffer extends $StructBuffer<($FT_Bitmap_Size), ($FT_Bitmap_Size$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "size"(): long
public "width"(): short
public "height"(): short
public "y_ppem"(): long
public "x_ppem"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap_Size$Buffer$$Type = ($FT_Bitmap_Size$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Bitmap_Size$Buffer_ = $FT_Bitmap_Size$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Face$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Size, $FT_Size$$Type} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_BBox, $FT_BBox$$Type} from "org.lwjgl.util.freetype.FT_BBox"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Bitmap_Size$Buffer, $FT_Bitmap_Size$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$FT_GlyphSlot, $FT_GlyphSlot$$Type} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$PointerBuffer, $PointerBuffer$$Type} from "org.lwjgl.PointerBuffer"
import {$FT_CharMap, $FT_CharMap$$Type} from "org.lwjgl.util.freetype.FT_CharMap"

export class $FT_Face$Buffer extends $StructBuffer<($FT_Face), ($FT_Face$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "size"(): $FT_Size
public "generic"(): $FT_Generic
public "glyph"(): $FT_GlyphSlot
public "units_per_EM"(): short
public "max_advance_width"(): short
public "num_charmaps"(): integer
public "max_advance_height"(): short
public "style_flags"(): long
public "style_nameString"(): string
public "num_fixed_sizes"(): integer
public "family_nameString"(): string
public "available_sizes"(): $FT_Bitmap_Size$Buffer
public "family_name"(): $ByteBuffer
public "underline_position"(): short
public "height"(): short
public "descender"(): short
public "charmap"(): $FT_CharMap
public "face_flags"(): long
public "num_glyphs"(): long
public "face_index"(): long
public "style_name"(): $ByteBuffer
public "charmaps"(): $PointerBuffer
public "num_faces"(): long
public "bbox"(): $FT_BBox
public "ascender"(): short
public "underline_thickness"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Face$Buffer$$Type = ($FT_Face$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Face$Buffer_ = $FT_Face$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Bitmap" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Bitmap$Buffer, $FT_Bitmap$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Bitmap$Buffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap extends $Struct<($FT_Bitmap)> implements $NativeResource {
static readonly "PALETTE": integer
static readonly "ALIGNOF": integer
static readonly "PIXEL_MODE": integer
static readonly "PALETTE_MODE": integer
static readonly "SIZEOF": integer
static readonly "PITCH": integer
static readonly "WIDTH": integer
static readonly "BUFFER": integer
static readonly "ROWS": integer
static readonly "NUM_GRAYS": integer

constructor(arg0: $ByteBuffer$$Type)

public "buffer"(arg0: integer): $ByteBuffer
public static "create"(): $FT_Bitmap
public static "create"(arg0: long, arg1: integer): $FT_Bitmap$Buffer
public static "create"(arg0: long): $FT_Bitmap
public static "create"(arg0: integer): $FT_Bitmap$Buffer
public "rows"(): integer
public "width"(): integer
public "sizeof"(): integer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Bitmap
public static "malloc"(arg0: integer): $FT_Bitmap$Buffer
public static "malloc"(): $FT_Bitmap
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Bitmap$Buffer
public static "calloc"(arg0: integer): $FT_Bitmap$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Bitmap
public static "calloc"(): $FT_Bitmap
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Bitmap$Buffer
public static "nwidth"(arg0: long): integer
public static "createSafe"(arg0: long): $FT_Bitmap
public static "createSafe"(arg0: long, arg1: integer): $FT_Bitmap$Buffer
public "pitch"(): integer
public "palette"(): long
public static "npalette"(arg0: long): long
public "num_grays"(): short
public static "nbuffer"(arg0: long, arg1: integer): $ByteBuffer
public static "npitch"(arg0: long): integer
public static "nrows"(arg0: long): integer
public static "nnum_grays"(arg0: long): short
public "pixel_mode"(): byte
public static "npixel_mode"(arg0: long): byte
public "palette_mode"(): byte
public static "npalette_mode"(arg0: long): byte
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap$$Type = ($FT_Bitmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Bitmap_ = $FT_Bitmap$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Stream$Buffer" {
import {$FT_StreamDesc, $FT_StreamDesc$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Stream_CloseFuncI, $FT_Stream_CloseFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$FT_Stream_IoFunc, $FT_Stream_IoFunc$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFunc"
import {$FT_Stream_CloseFunc, $FT_Stream_CloseFunc$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFunc"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$FT_Stream_IoFuncI, $FT_Stream_IoFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Stream, $FT_Stream$$Type} from "org.lwjgl.util.freetype.FT_Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Stream$Buffer extends $StructBuffer<($FT_Stream), ($FT_Stream$Buffer)> implements $NativeResource {

constructor(arg0: $ByteBuffer$$Type)
constructor(arg0: long, arg1: integer)

public "base"(arg0: $ByteBuffer$$Type): $FT_Stream$Buffer
public "base"(): $ByteBuffer
public "size"(arg0: long): $FT_Stream$Buffer
public "size"(): long
public "read"(): $FT_Stream_IoFunc
public "read"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream$Buffer
public "descriptor"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream$Buffer
public "descriptor"(): $FT_StreamDesc
public "descriptor"(arg0: $FT_StreamDesc$$Type): $FT_Stream$Buffer
public "pos"(arg0: long): $FT_Stream$Buffer
public "pos"(): long
public "pathname"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream$Buffer
public "pathname"(): $FT_StreamDesc
public "pathname"(arg0: $FT_StreamDesc$$Type): $FT_Stream$Buffer
public "close$"(): $FT_Stream_CloseFunc
public "close$"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream$Buffer$$Type = ($FT_Stream$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Stream$Buffer_ = $FT_Stream$Buffer$$Type;
}}
declare module "org.lwjgl.system.NativeResource" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $NativeResource extends $AutoCloseable {

 "close"(): void
 "free"(): void

(): void
}

export namespace $NativeResource {
const probejs$$marker: never
}
export class $NativeResource$$Static implements $NativeResource {


 "close"(): void
 "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeResource$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeResource_ = $NativeResource$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Bitmap_Size" {
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Bitmap_Size$Buffer, $FT_Bitmap_Size$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap_Size extends $Struct<($FT_Bitmap_Size)> {
static readonly "Y_PPEM": integer
static readonly "X_PPEM": integer
static readonly "ALIGNOF": integer
static readonly "SIZE": integer
static readonly "SIZEOF": integer
static readonly "WIDTH": integer
static readonly "HEIGHT": integer

constructor(arg0: $ByteBuffer$$Type)

public "size"(): long
public static "create"(arg0: long): $FT_Bitmap_Size
public static "create"(arg0: long, arg1: integer): $FT_Bitmap_Size$Buffer
public "width"(): short
public "height"(): short
public "sizeof"(): integer
public static "nheight"(arg0: long): short
public static "nwidth"(arg0: long): short
public static "createSafe"(arg0: long): $FT_Bitmap_Size
public static "createSafe"(arg0: long, arg1: integer): $FT_Bitmap_Size$Buffer
public static "nsize"(arg0: long): long
public "y_ppem"(): long
public static "nx_ppem"(arg0: long): long
public static "ny_ppem"(arg0: long): long
public "x_ppem"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap_Size$$Type = ($FT_Bitmap_Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Bitmap_Size_ = $FT_Bitmap_Size$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Vector$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Vector, $FT_Vector$$Type} from "org.lwjgl.util.freetype.FT_Vector"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Vector$Buffer extends $StructBuffer<($FT_Vector), ($FT_Vector$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "x"(arg0: long): $FT_Vector$Buffer
public "x"(): long
public "y"(): long
public "y"(arg0: long): $FT_Vector$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Vector$Buffer$$Type = ($FT_Vector$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Vector$Buffer_ = $FT_Vector$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_StreamDesc$Buffer" {
import {$FT_StreamDesc, $FT_StreamDesc$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_StreamDesc$Buffer extends $StructBuffer<($FT_StreamDesc), ($FT_StreamDesc$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "value"(arg0: long): $FT_StreamDesc$Buffer
public "value"(): long
public "pointer"(): long
public "pointer"(arg0: long): $FT_StreamDesc$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_StreamDesc$Buffer$$Type = ($FT_StreamDesc$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_StreamDesc$Buffer_ = $FT_StreamDesc$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Size_Internal$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$FT_Size_Internal, $FT_Size_Internal$$Type} from "org.lwjgl.util.freetype.FT_Size_Internal"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Internal$Buffer extends $StructBuffer<($FT_Size_Internal), ($FT_Size_Internal$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "module_data"(): long
public "autohint_mode"(): integer
public "autohint_metrics"(): $FT_Size_Metrics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Internal$Buffer$$Type = ($FT_Size_Internal$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Size_Internal$Buffer_ = $FT_Size_Internal$Buffer$$Type;
}}
declare module "org.lwjgl.system.libffi.FFICIF" {
import {$FFICIF$Buffer, $FFICIF$Buffer$$Type} from "org.lwjgl.system.libffi.FFICIF$Buffer"
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FFIType, $FFIType$$Type} from "org.lwjgl.system.libffi.FFIType"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$PointerBuffer, $PointerBuffer$$Type} from "org.lwjgl.PointerBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FFICIF extends $Struct<($FFICIF)> implements $NativeResource {
static readonly "ARG_TYPES": integer
static readonly "BYTES": integer
static readonly "NARGS": integer
static readonly "ALIGNOF": integer
static readonly "RTYPE": integer
static readonly "SIZEOF": integer
static readonly "ABI": integer
static readonly "FLAGS": integer

constructor(arg0: $ByteBuffer$$Type)

public "flags"(): integer
public "bytes"(): integer
public static "create"(arg0: integer): $FFICIF$Buffer
public static "create"(arg0: long, arg1: integer): $FFICIF$Buffer
public static "create"(arg0: long): $FFICIF
public static "create"(): $FFICIF
public "rtype"(): $FFIType
public "nargs"(): integer
public static "nrtype"(arg0: long): $FFIType
public "abi"(): integer
public "sizeof"(): integer
public static "malloc"(): $FFICIF
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FFICIF$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FFICIF
public static "malloc"(arg0: integer): $FFICIF$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FFICIF$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FFICIF
public static "calloc"(arg0: integer): $FFICIF$Buffer
public static "calloc"(): $FFICIF
public static "createSafe"(arg0: long): $FFICIF
public static "createSafe"(arg0: long, arg1: integer): $FFICIF$Buffer
public "arg_types"(arg0: integer): $PointerBuffer
public static "narg_types"(arg0: long, arg1: integer): $PointerBuffer
public static "nabi"(arg0: long): integer
public static "nnargs"(arg0: long): integer
public static "nflags"(arg0: long): integer
public static "nbytes"(arg0: long): integer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FFICIF$$Type = ($FFICIF);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FFICIF_ = $FFICIF$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Generic$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Generic_FinalizerI, $FT_Generic_FinalizerI$$Type} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$FT_Generic_Finalizer, $FT_Generic_Finalizer$$Type} from "org.lwjgl.util.freetype.FT_Generic_Finalizer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Generic$Buffer extends $StructBuffer<($FT_Generic), ($FT_Generic$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "data"(): long
public "data"(arg0: long): $FT_Generic$Buffer
public "finalizer"(): $FT_Generic_Finalizer
public "finalizer"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic$Buffer$$Type = ($FT_Generic$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Generic$Buffer_ = $FT_Generic$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Memory$Buffer" {
import {$FT_Memory, $FT_Memory$$Type} from "org.lwjgl.util.freetype.FT_Memory"
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_Alloc_Func, $FT_Alloc_Func$$Type} from "org.lwjgl.util.freetype.FT_Alloc_Func"
import {$FT_Free_Func, $FT_Free_Func$$Type} from "org.lwjgl.util.freetype.FT_Free_Func"
import {$FT_Realloc_FuncI, $FT_Realloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$FT_Alloc_FuncI, $FT_Alloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$FT_Realloc_Func, $FT_Realloc_Func$$Type} from "org.lwjgl.util.freetype.FT_Realloc_Func"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Free_FuncI, $FT_Free_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Memory$Buffer extends $StructBuffer<($FT_Memory), ($FT_Memory$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "user"(): long
public "user"(arg0: long): $FT_Memory$Buffer
public "realloc"(arg0: $FT_Realloc_FuncI$$Type): $FT_Memory$Buffer
public "realloc"(): $FT_Realloc_Func
public "free$"(): $FT_Free_Func
public "free$"(arg0: $FT_Free_FuncI$$Type): $FT_Memory$Buffer
public "alloc"(): $FT_Alloc_Func
public "alloc"(arg0: $FT_Alloc_FuncI$$Type): $FT_Memory$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Memory$Buffer$$Type = ($FT_Memory$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Memory$Buffer_ = $FT_Memory$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_CharMap" {
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_CharMap$Buffer, $FT_CharMap$Buffer$$Type} from "org.lwjgl.util.freetype.FT_CharMap$Buffer"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_CharMap extends $Struct<($FT_CharMap)> {
static readonly "PLATFORM_ID": integer
static readonly "ENCODING": integer
static readonly "ALIGNOF": integer
static readonly "ENCODING_ID": integer
static readonly "SIZEOF": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public "encoding"(): integer
public static "create"(arg0: long): $FT_CharMap
public static "create"(arg0: long, arg1: integer): $FT_CharMap$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_CharMap$Buffer
public static "createSafe"(arg0: long): $FT_CharMap
public static "nface"(arg0: long): $FT_Face
public static "nencoding"(arg0: long): integer
public "face"(): $FT_Face
public "platform_id"(): short
public "encoding_id"(): short
public static "nencoding_id"(arg0: long): short
public static "nplatform_id"(arg0: long): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_CharMap$$Type = ($FT_CharMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_CharMap_ = $FT_CharMap$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Generic_FinalizerI" {
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Generic_FinalizerI extends $CallbackI {

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long

(arg0: long): void
get "callInterface"(): $FFICIF
}

export namespace $FT_Generic_FinalizerI {
const CIF: $FFICIF
const probejs$$marker: never
}
export class $FT_Generic_FinalizerI$$Static implements $FT_Generic_FinalizerI {
static readonly "CIF": $FFICIF


 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic_FinalizerI$$Type = ((arg0: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Generic_FinalizerI_ = $FT_Generic_FinalizerI$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Stream_CloseFunc" {
import {$FT_Stream_CloseFuncI, $FT_Stream_CloseFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$Callback, $Callback$$Type} from "org.lwjgl.system.Callback"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Stream_CloseFunc extends $Callback implements $FT_Stream_CloseFuncI {


public static "create"(arg0: long): $FT_Stream_CloseFunc
public static "create"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream_CloseFunc
public static "createSafe"(arg0: long): $FT_Stream_CloseFunc
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long): void
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_CloseFunc$$Type = ($FT_Stream_CloseFunc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Stream_CloseFunc_ = $FT_Stream_CloseFunc$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Stream_IoFuncI" {
import {$CallbackI, $CallbackI$$Type} from "org.lwjgl.system.CallbackI"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Stream_IoFuncI extends $CallbackI {

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long

(arg0: long, arg1: long, arg2: long, arg3: long): long
get "callInterface"(): $FFICIF
}

export namespace $FT_Stream_IoFuncI {
const CIF: $FFICIF
const probejs$$marker: never
}
export class $FT_Stream_IoFuncI$$Static implements $FT_Stream_IoFuncI {
static readonly "CIF": $FFICIF


 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_IoFuncI$$Type = ((arg0: long, arg1: long, arg2: long, arg3: long) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Stream_IoFuncI_ = $FT_Stream_IoFuncI$$Type;
}}
declare module "org.lwjgl.system.MemoryStack" {
import {$Pointer, $Pointer$$Type} from "org.lwjgl.system.Pointer"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$CustomBuffer, $CustomBuffer$$Type} from "org.lwjgl.system.CustomBuffer"
import {$IntBuffer, $IntBuffer$$Type} from "java.nio.IntBuffer"
import {$LongBuffer, $LongBuffer$$Type} from "java.nio.LongBuffer"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"
import {$CLongBuffer, $CLongBuffer$$Type} from "org.lwjgl.CLongBuffer"
import {$DoubleBuffer, $DoubleBuffer$$Type} from "java.nio.DoubleBuffer"
import {$ShortBuffer, $ShortBuffer$$Type} from "java.nio.ShortBuffer"
import {$PointerBuffer, $PointerBuffer$$Type} from "org.lwjgl.PointerBuffer"
import {$FloatBuffer, $FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Pointer$Default, $Pointer$Default$$Type} from "org.lwjgl.system.Pointer$Default"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MemoryStack extends $Pointer$Default implements $AutoCloseable {


public "UTF16"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF16"(arg0: charseq): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $ByteBuffer
public "bytes"(...arg0: (byte)[]): $ByteBuffer
public "bytes"(arg0: byte): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte, arg2: byte): $ByteBuffer
public "close"(): void
public "getSize"(): integer
public static "create"(): $MemoryStack
public static "create"(arg0: $ByteBuffer$$Type): $MemoryStack
public static "create"(arg0: integer): $MemoryStack
public "getAddress"(): long
public "nbyte"(arg0: byte): long
public "ASCII"(arg0: charseq): $ByteBuffer
public "ASCII"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF8"(arg0: charseq): $ByteBuffer
public "UTF8"(arg0: charseq, arg1: boolean): $ByteBuffer
public "push"(): $MemoryStack
public "pop"(): $MemoryStack
public "ints"(arg0: integer, arg1: integer): $IntBuffer
public "ints"(arg0: integer): $IntBuffer
public "ints"(...arg0: (integer)[]): $IntBuffer
public "ints"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IntBuffer
public "ints"(arg0: integer, arg1: integer, arg2: integer): $IntBuffer
public "longs"(arg0: long, arg1: long): $LongBuffer
public "longs"(arg0: long): $LongBuffer
public "longs"(arg0: long, arg1: long, arg2: long): $LongBuffer
public "longs"(arg0: long, arg1: long, arg2: long, arg3: long): $LongBuffer
public "longs"(...arg0: (long)[]): $LongBuffer
public "doubles"(arg0: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double, arg2: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double, arg2: double, arg3: double): $DoubleBuffer
public "doubles"(...arg0: (double)[]): $DoubleBuffer
public "mallocFloat"(arg0: integer): $FloatBuffer
public static "stackMallocPointer"(arg0: integer): $PointerBuffer
public static "stackShorts"(...arg0: (short)[]): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short, arg2: short, arg3: short): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short): $ShortBuffer
public static "stackShorts"(arg0: short): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short, arg2: short): $ShortBuffer
public static "stackCallocInt"(arg0: integer): $IntBuffer
public static "stackASCIISafe"(arg0: charseq): $ByteBuffer
public static "stackASCIISafe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackDoubles"(arg0: double, arg1: double, arg2: double, arg3: double): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double, arg2: double): $DoubleBuffer
public static "stackDoubles"(arg0: double): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double): $DoubleBuffer
public static "stackDoubles"(...arg0: (double)[]): $DoubleBuffer
public "getFrameIndex"(): integer
public "callocShort"(arg0: integer): $ShortBuffer
public "mallocCLong"(arg0: integer): $CLongBuffer
public static "nstackCalloc"(arg0: integer, arg1: integer, arg2: integer): long
public static "stackMallocLong"(arg0: integer): $LongBuffer
public static "stackCallocLong"(arg0: integer): $LongBuffer
public static "stackFloats"(arg0: float, arg1: float, arg2: float): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float): $FloatBuffer
public static "stackFloats"(arg0: float): $FloatBuffer
public static "stackFloats"(...arg0: (float)[]): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatBuffer
public static "stackCallocShort"(arg0: integer): $ShortBuffer
public static "stackMallocDouble"(arg0: integer): $DoubleBuffer
public "pointersOfElements"(arg0: $CustomBuffer$$Type<(any)>): $PointerBuffer
public "callocPointer"(arg0: integer): $PointerBuffer
public static "stackCallocDouble"(arg0: integer): $DoubleBuffer
public "callocCLong"(arg0: integer): $CLongBuffer
public static "stackMalloc"(arg0: integer): $ByteBuffer
public static "nstackMalloc"(arg0: integer): long
public static "nstackMalloc"(arg0: integer, arg1: integer): long
public "mallocShort"(arg0: integer): $ShortBuffer
public "callocFloat"(arg0: integer): $FloatBuffer
public "callocDouble"(arg0: integer): $DoubleBuffer
public static "stackCallocCLong"(arg0: integer): $CLongBuffer
public static "stackCallocFloat"(arg0: integer): $FloatBuffer
public static "stackCallocPointer"(arg0: integer): $PointerBuffer
public static "stackMallocShort"(arg0: integer): $ShortBuffer
public static "stackCLongs"(...arg0: (long)[]): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long, arg2: long): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long, arg2: long, arg3: long): $CLongBuffer
public static "stackCLongs"(arg0: long): $CLongBuffer
public static "stackPointers"(...arg0: (long)[]): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long, arg2: long): $PointerBuffer
public static "stackPointers"(arg0: long): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long, arg2: long, arg3: long): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type, arg3: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(...arg0: ($Pointer$$Type)[]): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type): $PointerBuffer
public static "stackMallocInt"(arg0: integer): $IntBuffer
public static "stackUTF8Safe"(arg0: charseq): $ByteBuffer
public static "stackUTF8Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF16Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF16Safe"(arg0: charseq): $ByteBuffer
public static "stackMallocCLong"(arg0: integer): $CLongBuffer
public static "stackCalloc"(arg0: integer): $ByteBuffer
public "mallocDouble"(arg0: integer): $DoubleBuffer
public static "stackMallocFloat"(arg0: integer): $FloatBuffer
public "mallocPointer"(arg0: integer): $PointerBuffer
public "getPointerAddress"(): long
public static "stackUTF16"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF16"(arg0: charseq): $ByteBuffer
public "nlong"(arg0: long): long
public "nint"(arg0: integer): long
public "nASCIISafe"(arg0: charseq, arg1: boolean): integer
public "nclong"(arg0: long): long
public "nUTF16Safe"(arg0: charseq, arg1: boolean): integer
public "nshort"(arg0: short): long
public static "ncreate"(arg0: long, arg1: integer): $MemoryStack
public "shorts"(arg0: short, arg1: short, arg2: short, arg3: short): $ShortBuffer
public "shorts"(arg0: short, arg1: short, arg2: short): $ShortBuffer
public "shorts"(arg0: short, arg1: short): $ShortBuffer
public "shorts"(...arg0: (short)[]): $ShortBuffer
public "shorts"(arg0: short): $ShortBuffer
public "callocLong"(arg0: integer): $LongBuffer
public "nfloat"(arg0: float): long
public "UTF16Safe"(arg0: charseq): $ByteBuffer
public "UTF16Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF8Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF8Safe"(arg0: charseq): $ByteBuffer
public static "stackLongs"(arg0: long): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long, arg2: long, arg3: long): $LongBuffer
public static "stackLongs"(...arg0: (long)[]): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long, arg2: long): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long): $LongBuffer
public "nUTF16"(arg0: charseq, arg1: boolean): integer
public static "stackPop"(): $MemoryStack
public "npointer"(arg0: $Buffer$$Type): long
public "npointer"(arg0: long): long
public "npointer"(arg0: $Pointer$$Type): long
public "mallocLong"(arg0: integer): $LongBuffer
public "clongs"(arg0: long): $CLongBuffer
public "clongs"(...arg0: (long)[]): $CLongBuffer
public "clongs"(arg0: long, arg1: long, arg2: long): $CLongBuffer
public "clongs"(arg0: long, arg1: long): $CLongBuffer
public "clongs"(arg0: long, arg1: long, arg2: long, arg3: long): $CLongBuffer
public static "stackInts"(arg0: integer): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer, arg2: integer): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer): $IntBuffer
public static "stackInts"(...arg0: (integer)[]): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IntBuffer
public "ndouble"(arg0: double): long
public "ASCIISafe"(arg0: charseq): $ByteBuffer
public "ASCIISafe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "nUTF8Safe"(arg0: charseq, arg1: boolean): integer
public static "stackBytes"(arg0: byte): $ByteBuffer
public static "stackBytes"(...arg0: (byte)[]): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte, arg2: byte): $ByteBuffer
public "floats"(...arg0: (float)[]): $FloatBuffer
public "floats"(arg0: float, arg1: float): $FloatBuffer
public "floats"(arg0: float): $FloatBuffer
public "floats"(arg0: float, arg1: float, arg2: float): $FloatBuffer
public "floats"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatBuffer
public static "stackASCII"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackASCII"(arg0: charseq): $ByteBuffer
public static "stackUTF8"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF8"(arg0: charseq): $ByteBuffer
public "malloc"(arg0: integer): $ByteBuffer
public "malloc"(arg0: integer, arg1: integer): $ByteBuffer
public static "stackPush"(): $MemoryStack
public "calloc"(arg0: integer): $ByteBuffer
public "calloc"(arg0: integer, arg1: integer): $ByteBuffer
public "ncalloc"(arg0: integer, arg1: integer, arg2: integer): long
public "nmalloc"(arg0: integer): long
public "nmalloc"(arg0: integer, arg1: integer): long
public static "stackGet"(): $MemoryStack
public "callocInt"(arg0: integer): $IntBuffer
public "setPointer"(arg0: integer): void
public "getPointer"(): integer
public "nUTF8"(arg0: charseq, arg1: boolean): integer
public "nASCII"(arg0: charseq, arg1: boolean): integer
public "pointers"(arg0: $Buffer$$Type, arg1: $Buffer$$Type, arg2: $Buffer$$Type, arg3: $Buffer$$Type): $PointerBuffer
public "pointers"(arg0: $Buffer$$Type, arg1: $Buffer$$Type, arg2: $Buffer$$Type): $PointerBuffer
public "pointers"(arg0: $Buffer$$Type, arg1: $Buffer$$Type): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type): $PointerBuffer
public "pointers"(...arg0: ($Buffer$$Type)[]): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type): $PointerBuffer
public "pointers"(...arg0: (long)[]): $PointerBuffer
public "pointers"(arg0: long, arg1: long, arg2: long, arg3: long): $PointerBuffer
public "pointers"(arg0: long, arg1: long, arg2: long): $PointerBuffer
public "pointers"(arg0: long, arg1: long): $PointerBuffer
public "pointers"(arg0: long): $PointerBuffer
public "pointers"(arg0: $Buffer$$Type): $PointerBuffer
public "pointers"(...arg0: ($Pointer$$Type)[]): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type, arg3: $Pointer$$Type): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type): $PointerBuffer
public "mallocInt"(arg0: integer): $IntBuffer
get "size"(): integer
get "address"(): long
get "frameIndex"(): integer
get "pointerAddress"(): long
set "pointer"(value: integer)
get "pointer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStack$$Type = ($MemoryStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryStack_ = $MemoryStack$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Alloc_Func" {
import {$FT_Alloc_FuncI, $FT_Alloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$Callback, $Callback$$Type} from "org.lwjgl.system.Callback"
import {$FFICIF, $FFICIF$$Type} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Alloc_Func extends $Callback implements $FT_Alloc_FuncI {


public static "create"(arg0: long): $FT_Alloc_Func
public static "create"(arg0: $FT_Alloc_FuncI$$Type): $FT_Alloc_Func
public static "createSafe"(arg0: long): $FT_Alloc_Func
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long): long
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Alloc_Func$$Type = ($FT_Alloc_Func);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Alloc_Func_ = $FT_Alloc_Func$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Generic" {
import {$FT_Generic$Buffer, $FT_Generic$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Generic$Buffer"
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Generic_FinalizerI, $FT_Generic_FinalizerI$$Type} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$FT_Generic_Finalizer, $FT_Generic_Finalizer$$Type} from "org.lwjgl.util.freetype.FT_Generic_Finalizer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Generic extends $Struct<($FT_Generic)> implements $NativeResource {
static readonly "DATA": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "FINALIZER": integer

constructor(arg0: $ByteBuffer$$Type)

public "data"(arg0: long): $FT_Generic
public "data"(): long
public static "validate"(arg0: long): void
public "set"(arg0: long, arg1: $FT_Generic_FinalizerI$$Type): $FT_Generic
public "set"(arg0: $FT_Generic$$Type): $FT_Generic
public "finalizer"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic
public "finalizer"(): $FT_Generic_Finalizer
public static "create"(arg0: long): $FT_Generic
public static "create"(arg0: long, arg1: integer): $FT_Generic$Buffer
public static "create"(arg0: integer): $FT_Generic$Buffer
public static "create"(): $FT_Generic
public static "ndata"(arg0: long): long
public static "ndata"(arg0: long, arg1: long): void
public static "nfinalizer"(arg0: long): $FT_Generic_Finalizer
public static "nfinalizer"(arg0: long, arg1: $FT_Generic_FinalizerI$$Type): void
public "sizeof"(): integer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Generic
public static "malloc"(): $FT_Generic
public static "malloc"(arg0: integer): $FT_Generic$Buffer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Generic$Buffer
public static "calloc"(): $FT_Generic
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Generic
public static "calloc"(arg0: integer): $FT_Generic$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Generic$Buffer
public static "createSafe"(arg0: long, arg1: integer): $FT_Generic$Buffer
public static "createSafe"(arg0: long): $FT_Generic
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic$$Type = ($FT_Generic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Generic_ = $FT_Generic$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Stream" {
import {$FT_StreamDesc, $FT_StreamDesc$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$FT_Stream_CloseFuncI, $FT_Stream_CloseFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$FT_Stream_IoFunc, $FT_Stream_IoFunc$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFunc"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Memory, $FT_Memory$$Type} from "org.lwjgl.util.freetype.FT_Memory"
import {$FT_Stream$Buffer, $FT_Stream$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Stream$Buffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Stream_CloseFunc, $FT_Stream_CloseFunc$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFunc"
import {$FT_Stream_IoFuncI, $FT_Stream_IoFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Stream extends $Struct<($FT_Stream)> implements $NativeResource {
static readonly "READ": integer
static readonly "DESCRIPTOR": integer
static readonly "MEMORY": integer
static readonly "POS": integer
static readonly "PATHNAME": integer
static readonly "ALIGNOF": integer
static readonly "SIZE": integer
static readonly "SIZEOF": integer
static readonly "LIMIT": integer
static readonly "CLOSE": integer
static readonly "BASE": integer
static readonly "CURSOR": integer

constructor(arg0: $ByteBuffer$$Type)

public "base"(): $ByteBuffer
public "base"(arg0: $ByteBuffer$$Type): $FT_Stream
public "size"(arg0: long): $FT_Stream
public "size"(): long
public "set"(arg0: $FT_Stream$$Type): $FT_Stream
public "set"(arg0: $ByteBuffer$$Type, arg1: long, arg2: long, arg3: $FT_StreamDesc$$Type, arg4: $FT_StreamDesc$$Type, arg5: $FT_Stream_IoFuncI$$Type, arg6: $FT_Stream_CloseFuncI$$Type): $FT_Stream
public "read"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream
public "read"(): $FT_Stream_IoFunc
public "descriptor"(arg0: $FT_StreamDesc$$Type): $FT_Stream
public "descriptor"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream
public "descriptor"(): $FT_StreamDesc
public static "create"(): $FT_Stream
public static "create"(arg0: integer): $FT_Stream$Buffer
public static "create"(arg0: long, arg1: integer): $FT_Stream$Buffer
public static "create"(arg0: long): $FT_Stream
public "pos"(arg0: long): $FT_Stream
public "pos"(): long
public static "nread"(arg0: long): $FT_Stream_IoFunc
public static "nread"(arg0: long, arg1: $FT_Stream_IoFuncI$$Type): void
public "pathname"(arg0: $FT_StreamDesc$$Type): $FT_Stream
public "pathname"(): $FT_StreamDesc
public "pathname"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream
public "sizeof"(): integer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Stream
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Stream$Buffer
public static "malloc"(): $FT_Stream
public static "malloc"(arg0: integer): $FT_Stream$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Stream$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Stream
public static "calloc"(arg0: integer): $FT_Stream$Buffer
public static "calloc"(): $FT_Stream
public static "createSafe"(arg0: long, arg1: integer): $FT_Stream$Buffer
public static "createSafe"(arg0: long): $FT_Stream
public static "nsize"(arg0: long, arg1: long): void
public static "nsize"(arg0: long): long
public static "nbase"(arg0: long): $ByteBuffer
public static "nbase"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "npos"(arg0: long, arg1: long): void
public static "npos"(arg0: long): long
public static "npathname"(arg0: long): $FT_StreamDesc
public static "npathname"(arg0: long, arg1: $FT_StreamDesc$$Type): void
public static "nclose$"(arg0: long, arg1: $FT_Stream_CloseFuncI$$Type): void
public static "nclose$"(arg0: long): $FT_Stream_CloseFunc
public "close$"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream
public "close$"(): $FT_Stream_CloseFunc
public static "ncursor"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "ncursor"(arg0: long, arg1: integer): $ByteBuffer
public static "nlimit$"(arg0: long, arg1: integer): $ByteBuffer
public static "nlimit$"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "ndescriptor"(arg0: long, arg1: $FT_StreamDesc$$Type): void
public static "ndescriptor"(arg0: long): $FT_StreamDesc
public static "nmemory"(arg0: long): $FT_Memory
public static "nmemory"(arg0: long, arg1: $FT_Memory$$Type): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream$$Type = ($FT_Stream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Stream_ = $FT_Stream$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Memory" {
import {$FT_Memory$Buffer, $FT_Memory$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Memory$Buffer"
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Alloc_Func, $FT_Alloc_Func$$Type} from "org.lwjgl.util.freetype.FT_Alloc_Func"
import {$FT_Realloc_FuncI, $FT_Realloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$FT_Free_Func, $FT_Free_Func$$Type} from "org.lwjgl.util.freetype.FT_Free_Func"
import {$FT_Alloc_FuncI, $FT_Alloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Realloc_Func, $FT_Realloc_Func$$Type} from "org.lwjgl.util.freetype.FT_Realloc_Func"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Free_FuncI, $FT_Free_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Memory extends $Struct<($FT_Memory)> implements $NativeResource {
static readonly "ALLOC": integer
static readonly "ALIGNOF": integer
static readonly "REALLOC": integer
static readonly "SIZEOF": integer
static readonly "USER": integer
static readonly "FREE": integer

constructor(arg0: $ByteBuffer$$Type)

public "set"(arg0: $FT_Memory$$Type): $FT_Memory
public "set"(arg0: long, arg1: $FT_Alloc_FuncI$$Type, arg2: $FT_Free_FuncI$$Type, arg3: $FT_Realloc_FuncI$$Type): $FT_Memory
public static "create"(arg0: long, arg1: integer): $FT_Memory$Buffer
public static "create"(): $FT_Memory
public static "create"(arg0: long): $FT_Memory
public static "create"(arg0: integer): $FT_Memory$Buffer
public "user"(arg0: long): $FT_Memory
public "user"(): long
public "sizeof"(): integer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Memory$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Memory
public static "malloc"(arg0: integer): $FT_Memory$Buffer
public static "malloc"(): $FT_Memory
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Memory
public static "calloc"(arg0: integer): $FT_Memory$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Memory$Buffer
public static "calloc"(): $FT_Memory
public static "createSafe"(arg0: long): $FT_Memory
public static "createSafe"(arg0: long, arg1: integer): $FT_Memory$Buffer
public "realloc"(): $FT_Realloc_Func
public "realloc"(arg0: $FT_Realloc_FuncI$$Type): $FT_Memory
public static "nalloc"(arg0: long, arg1: $FT_Alloc_FuncI$$Type): void
public static "nalloc"(arg0: long): $FT_Alloc_Func
public static "nrealloc"(arg0: long, arg1: $FT_Realloc_FuncI$$Type): void
public static "nrealloc"(arg0: long): $FT_Realloc_Func
public "free$"(arg0: $FT_Free_FuncI$$Type): $FT_Memory
public "free$"(): $FT_Free_Func
public static "nuser"(arg0: long): long
public static "nuser"(arg0: long, arg1: long): void
public static "nfree$"(arg0: long): $FT_Free_Func
public static "nfree$"(arg0: long, arg1: $FT_Free_FuncI$$Type): void
public "alloc"(): $FT_Alloc_Func
public "alloc"(arg0: $FT_Alloc_FuncI$$Type): $FT_Memory
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Memory$$Type = ($FT_Memory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Memory_ = $FT_Memory$$Type;
}}
declare module "org.lwjgl.system.Struct" {
import {$Pointer$Default, $Pointer$Default$$Type} from "org.lwjgl.system.Pointer$Default"
import {$Struct$StructValidation, $Struct$StructValidation$$Type} from "org.lwjgl.system.Struct$StructValidation"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Struct<SELF extends $Struct<(SELF)>> extends $Pointer$Default {


public "clear"(): void
public static "validate"(arg0: long, arg1: integer, arg2: integer, arg3: $Struct$StructValidation$$Type): void
public "isNull"(arg0: integer): boolean
public "free"(): void
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$$Type<SELF> = ($Struct<(SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Struct_<SELF> = $Struct$$Type<(SELF)>;
}}
declare module "org.lwjgl.util.freetype.FT_ListNode" {
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode$Buffer, $FT_ListNode$Buffer$$Type} from "org.lwjgl.util.freetype.FT_ListNode$Buffer"

export class $FT_ListNode extends $Struct<($FT_ListNode)> {
static readonly "DATA": integer
static readonly "PREV": integer
static readonly "ALIGNOF": integer
static readonly "NEXT": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_ListNode
public "data"(arg0: integer): $ByteBuffer
public "prev"(): $FT_ListNode
public static "create"(arg0: long): $FT_ListNode
public static "create"(arg0: long, arg1: integer): $FT_ListNode$Buffer
public static "ndata"(arg0: long, arg1: integer): $ByteBuffer
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_ListNode
public static "createSafe"(arg0: long, arg1: integer): $FT_ListNode$Buffer
public static "nnext"(arg0: long): $FT_ListNode
public static "nprev"(arg0: long): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_ListNode$$Type = ($FT_ListNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_ListNode_ = $FT_ListNode$$Type;
}}
declare module "org.lwjgl.system.StructBuffer" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$CustomBuffer, $CustomBuffer$$Type} from "org.lwjgl.system.CustomBuffer"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StructBuffer<T extends $Struct<(T)>, SELF extends $StructBuffer<(T), (SELF)>> extends $CustomBuffer<(SELF)> implements $Iterable<(T)> {


public "get"(arg0: integer, arg1: T): SELF
public "get"(arg0: T): SELF
public "get"(arg0: integer): T
public "get"(): T
public "put"(arg0: integer, arg1: T): SELF
public "put"(arg0: T): SELF
public "iterator"(): $Iterator<(T)>
public "apply"(arg0: integer, arg1: $Consumer$$Type<(T)>): SELF
public "apply"(arg0: $Consumer$$Type<(T)>): SELF
public "stream"(): $Stream<(T)>
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public "parallelStream"(): $Stream<(T)>
public "sizeof"(): integer
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructBuffer$$Type<T, SELF> = ($StructBuffer<(T), (SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructBuffer_<T, SELF> = $StructBuffer$$Type<(T), (SELF)>;
}}
declare module "org.lwjgl.util.freetype.FT_BBox$Buffer" {
import {$StructBuffer, $StructBuffer$$Type} from "org.lwjgl.system.StructBuffer"
import {$FT_BBox, $FT_BBox$$Type} from "org.lwjgl.util.freetype.FT_BBox"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_BBox$Buffer extends $StructBuffer<($FT_BBox), ($FT_BBox$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "yMax"(arg0: long): $FT_BBox$Buffer
public "yMax"(): long
public "xMax"(arg0: long): $FT_BBox$Buffer
public "xMax"(): long
public "xMin"(arg0: long): $FT_BBox$Buffer
public "xMin"(): long
public "yMin"(): long
public "yMin"(arg0: long): $FT_BBox$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_BBox$Buffer$$Type = ($FT_BBox$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_BBox$Buffer_ = $FT_BBox$Buffer$$Type;
}}
declare module "org.lwjgl.util.freetype.FT_Outline" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$FT_Outline$Buffer, $FT_Outline$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Outline$Buffer"
import {$FT_Vector$Buffer, $FT_Vector$Buffer$$Type} from "org.lwjgl.util.freetype.FT_Vector$Buffer"
import {$NativeResource, $NativeResource$$Type} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ShortBuffer, $ShortBuffer$$Type} from "java.nio.ShortBuffer"

export class $FT_Outline extends $Struct<($FT_Outline)> implements $NativeResource {
static readonly "CONTOURS": integer
static readonly "N_CONTOURS": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "FLAGS": integer
static readonly "POINTS": integer
static readonly "N_POINTS": integer
static readonly "TAGS": integer

constructor(arg0: $ByteBuffer$$Type)

public "flags"(): integer
public static "create"(): $FT_Outline
public static "create"(arg0: long): $FT_Outline
public static "create"(arg0: integer): $FT_Outline$Buffer
public static "create"(arg0: long, arg1: integer): $FT_Outline$Buffer
public "tags"(): $ByteBuffer
public static "npoints"(arg0: long): $FT_Vector$Buffer
public "sizeof"(): integer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Outline
public static "malloc"(): $FT_Outline
public static "malloc"(arg0: integer): $FT_Outline$Buffer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Outline$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Outline$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Outline
public static "calloc"(): $FT_Outline
public static "calloc"(arg0: integer): $FT_Outline$Buffer
public static "createSafe"(arg0: long): $FT_Outline
public static "createSafe"(arg0: long, arg1: integer): $FT_Outline$Buffer
public static "nflags"(arg0: long): integer
public static "nn_points"(arg0: long): short
public static "ncontours"(arg0: long): $ShortBuffer
public "contours"(): $ShortBuffer
public static "ntags"(arg0: long): $ByteBuffer
public "n_points"(): short
public "n_contours"(): short
public "points"(): $FT_Vector$Buffer
public static "nn_contours"(arg0: long): short
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Outline$$Type = ($FT_Outline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FT_Outline_ = $FT_Outline$$Type;
}}
declare module "org.lwjgl.system.CustomBuffer" {
import {$Pointer$Default, $Pointer$Default$$Type} from "org.lwjgl.system.Pointer$Default"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CustomBuffer<SELF extends $CustomBuffer<(SELF)>> extends $Pointer$Default {


public "reset"(): SELF
public "put"(arg0: SELF): SELF
public "toString"(): string
public "clear"(): SELF
public "position"(): integer
public "position"(arg0: integer): SELF
public "limit"(): integer
public "limit"(arg0: integer): SELF
public "remaining"(): integer
public "capacity"(): integer
public "address"(): long
public "address"(arg0: integer): long
public "mark"(): SELF
public "flip"(): SELF
public "rewind"(): SELF
public "hasRemaining"(): boolean
public "slice"(): SELF
public "slice"(arg0: integer, arg1: integer): SELF
public "duplicate"(): SELF
public "free"(): void
public "compact"(): SELF
public "sizeof"(): integer
public "address0"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBuffer$$Type<SELF> = ($CustomBuffer<(SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBuffer_<SELF> = $CustomBuffer$$Type<(SELF)>;
}}
