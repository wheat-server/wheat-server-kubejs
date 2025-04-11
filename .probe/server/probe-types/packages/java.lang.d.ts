declare module "java.lang.foreign.SegmentAllocator" {
import {$ValueLayout$OfByte, $ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$ValueLayout$OfLong, $ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$MemorySegment, $MemorySegment$$Type} from "java.lang.foreign.MemorySegment"
import {$ValueLayout$OfDouble, $ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$AddressLayout, $AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$ValueLayout$OfInt, $ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$ValueLayout$OfShort, $ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$ValueLayout$OfFloat, $ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$ValueLayout$OfChar, $ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SegmentAllocator {

 "allocate"(arg0: $AddressLayout$$Type, arg1: $MemorySegment$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfDouble$$Type, arg1: double): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfLong$$Type, arg1: long): $MemorySegment
 "allocate"(arg0: long, arg1: long): $MemorySegment
 "allocate"(arg0: long): $MemorySegment
 "allocate"(arg0: $MemoryLayout$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfByte$$Type, arg1: byte): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfChar$$Type, arg1: character): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfShort$$Type, arg1: short): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfFloat$$Type, arg1: float): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfInt$$Type, arg1: integer): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfLong$$Type, ...arg1: (long)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfDouble$$Type, ...arg1: (double)[]): $MemorySegment
 "allocateArray"(arg0: $MemoryLayout$$Type, arg1: long): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfByte$$Type, ...arg1: (byte)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfShort$$Type, ...arg1: (short)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfChar$$Type, ...arg1: (character)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfFloat$$Type, ...arg1: (float)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfInt$$Type, ...arg1: (integer)[]): $MemorySegment
 "allocateUtf8String"(arg0: string): $MemorySegment

(arg0: long, arg1: long): $MemorySegment$$Type
}

export namespace $SegmentAllocator {
function prefixAllocator(arg0: $MemorySegment$$Type): $SegmentAllocator
function slicingAllocator(arg0: $MemorySegment$$Type): $SegmentAllocator
const probejs$$marker: never
}
export class $SegmentAllocator$$Static implements $SegmentAllocator {


static "prefixAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
 "allocate"(arg0: $AddressLayout$$Type, arg1: $MemorySegment$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfDouble$$Type, arg1: double): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfLong$$Type, arg1: long): $MemorySegment
 "allocate"(arg0: long, arg1: long): $MemorySegment
 "allocate"(arg0: long): $MemorySegment
 "allocate"(arg0: $MemoryLayout$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfByte$$Type, arg1: byte): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfChar$$Type, arg1: character): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfShort$$Type, arg1: short): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfFloat$$Type, arg1: float): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfInt$$Type, arg1: integer): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfLong$$Type, ...arg1: (long)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfDouble$$Type, ...arg1: (double)[]): $MemorySegment
 "allocateArray"(arg0: $MemoryLayout$$Type, arg1: long): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfByte$$Type, ...arg1: (byte)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfShort$$Type, ...arg1: (short)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfChar$$Type, ...arg1: (character)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfFloat$$Type, ...arg1: (float)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfInt$$Type, ...arg1: (integer)[]): $MemorySegment
 "allocateUtf8String"(arg0: string): $MemorySegment
static "slicingAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SegmentAllocator$$Type = ((arg0: long, arg1: long) => $MemorySegment$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SegmentAllocator_ = $SegmentAllocator$$Type;
}}
declare module "java.lang.invoke.TypeDescriptor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor {

 "descriptorString"(): string

(): string
}

export namespace $TypeDescriptor {
const probejs$$marker: never
}
export class $TypeDescriptor$$Static implements $TypeDescriptor {


 "descriptorString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescriptor_ = $TypeDescriptor$$Type;
}}
declare module "java.lang.annotation.Annotation" {
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Annotation {

 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<($Annotation)>
}

export namespace $Annotation {
const probejs$$marker: never
}
export class $Annotation$$Static implements $Annotation {


 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<($Annotation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Annotation$$Type = ($Annotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Annotation_ = $Annotation$$Type;
}}
declare module "java.lang.constant.DirectMethodHandleDesc" {
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$DirectMethodHandleDesc$Kind, $DirectMethodHandleDesc$Kind$$Type} from "java.lang.constant.DirectMethodHandleDesc$Kind"
import {$MethodHandleDesc, $MethodHandleDesc$$Type} from "java.lang.constant.MethodHandleDesc"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$MethodTypeDesc, $MethodTypeDesc$$Type} from "java.lang.constant.MethodTypeDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectMethodHandleDesc extends $MethodHandleDesc {

 "methodName"(): string
 "kind"(): $DirectMethodHandleDesc$Kind
 "owner"(): $ClassDesc
 "refKind"(): integer
 "isOwnerInterface"(): boolean
 "lookupDescriptor"(): string
 "equals"(arg0: any): boolean
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "asType"(arg0: $MethodTypeDesc$$Type): $MethodHandleDesc
 "invocationType"(): $MethodTypeDesc
get "ownerInterface"(): boolean
}

export namespace $DirectMethodHandleDesc {
function of(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: string): $DirectMethodHandleDesc
function ofField(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $ClassDesc$$Type): $DirectMethodHandleDesc
function ofMethod(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
function ofConstructor(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $DirectMethodHandleDesc
const probejs$$marker: never
}
export class $DirectMethodHandleDesc$$Static implements $DirectMethodHandleDesc {


 "methodName"(): string
 "kind"(): $DirectMethodHandleDesc$Kind
 "owner"(): $ClassDesc
 "refKind"(): integer
 "isOwnerInterface"(): boolean
 "lookupDescriptor"(): string
 "equals"(arg0: any): boolean
static "of"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: string): $DirectMethodHandleDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "asType"(arg0: $MethodTypeDesc$$Type): $MethodHandleDesc
static "ofField"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
 "invocationType"(): $MethodTypeDesc
static "ofConstructor"(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $DirectMethodHandleDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectMethodHandleDesc$$Type = ($DirectMethodHandleDesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectMethodHandleDesc_ = $DirectMethodHandleDesc$$Type;
}}
declare module "java.lang.module.Configuration" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ModuleFinder, $ModuleFinder$$Type} from "java.lang.module.ModuleFinder"
import {$ResolvedModule, $ResolvedModule$$Type} from "java.lang.module.ResolvedModule"
import {$Set, $Set$$Type} from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Configuration {


public "toString"(): string
public static "empty"(): $Configuration
public "resolve"(arg0: $ModuleFinder$$Type, arg1: $ModuleFinder$$Type, arg2: $Collection$$Type<(string)>): $Configuration
public static "resolve"(arg0: $ModuleFinder$$Type, arg1: $List$$Type<($Configuration$$Type)>, arg2: $ModuleFinder$$Type, arg3: $Collection$$Type<(string)>): $Configuration
public "modules"(): $Set<($ResolvedModule)>
public "parents"(): $List<($Configuration)>
public "findModule"(arg0: string): $Optional<($ResolvedModule)>
public static "resolveAndBind"(arg0: $ModuleFinder$$Type, arg1: $List$$Type<($Configuration$$Type)>, arg2: $ModuleFinder$$Type, arg3: $Collection$$Type<(string)>): $Configuration
public "resolveAndBind"(arg0: $ModuleFinder$$Type, arg1: $ModuleFinder$$Type, arg2: $Collection$$Type<(string)>): $Configuration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$$Type = ($Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_ = $Configuration$$Type;
}}
declare module "java.lang.reflect.Method" {
import {$Executable, $Executable$$Type} from "java.lang.reflect.Executable"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Method extends $Executable {


public "invoke"(arg0: any, ...arg1: (any)[]): any
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getTypeParameters"(): ($TypeVariable<($Method)>)[]
public "getReturnType"(): $Class<(any)>
public "getParameterTypes"(): ($Class<(any)>)[]
public "isSynthetic"(): boolean
public "toGenericString"(): string
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotations"(): ($Annotation)[]
public "setAccessible"(arg0: boolean): void
public "isVarArgs"(): boolean
public "getParameterCount"(): integer
public "getParameterAnnotations"(): (($Annotation)[])[]
public "getGenericParameterTypes"(): ($Type)[]
public "getGenericExceptionTypes"(): ($Type)[]
public "isDefault"(): boolean
public "getGenericReturnType"(): $Type
public "getExceptionTypes"(): ($Class<(any)>)[]
public "isBridge"(): boolean
public "getDefaultValue"(): any
public "getAnnotatedReturnType"(): $AnnotatedType
get "name"(): string
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<($Method)>)[]
get "returnType"(): $Class<(any)>
get "parameterTypes"(): ($Class<(any)>)[]
get "synthetic"(): boolean
get "declaringClass"(): $Class<(any)>
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "varArgs"(): boolean
get "parameterCount"(): integer
get "parameterAnnotations"(): (($Annotation)[])[]
get "genericParameterTypes"(): ($Type)[]
get "genericExceptionTypes"(): ($Type)[]
get "default"(): boolean
get "genericReturnType"(): $Type
get "exceptionTypes"(): ($Class<(any)>)[]
get "bridge"(): boolean
get "defaultValue"(): any
get "annotatedReturnType"(): $AnnotatedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Method$$Type = ($Method);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Method_ = $Method$$Type;
}}
declare module "java.lang.invoke.MethodType" {
import {$Constable, $Constable$$Type} from "java.lang.constant.Constable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$List, $List$$Type} from "java.util.List"
import {$MethodTypeDesc, $MethodTypeDesc$$Type} from "java.lang.constant.MethodTypeDesc"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$TypeDescriptor$OfMethod, $TypeDescriptor$OfMethod$$Type} from "java.lang.invoke.TypeDescriptor$OfMethod"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodType implements $Constable, $TypeDescriptor$OfMethod<($Class<(any)>), ($MethodType)>, $Serializable {


public "returnType"(): $Class<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "wrap"(): $MethodType
public "describeConstable"(): $Optional<($MethodTypeDesc)>
public "descriptorString"(): string
public "parameterType"(arg0: integer): $Class<(any)>
public "insertParameterTypes"(arg0: integer, arg1: $List$$Type<($Class$$Type<(any)>)>): $MethodType
public "insertParameterTypes"(arg0: integer, arg1: ($TypeDescriptor$OfField$$Type<(any)>)[]): $TypeDescriptor$OfMethod<(any), (any)>
public "insertParameterTypes"(arg0: integer, ...arg1: ($Class$$Type<(any)>)[]): $MethodType
public "changeReturnType"(arg0: $TypeDescriptor$OfField$$Type<(any)>): $TypeDescriptor$OfMethod<(any), (any)>
public "changeReturnType"(arg0: $Class$$Type<(any)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(any)>, arg1: $Class$$Type<(any)>, ...arg2: ($Class$$Type<(any)>)[]): $MethodType
public static "methodType"(arg0: $Class$$Type<(any)>, arg1: $Class$$Type<(any)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(any)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(any)>, arg1: ($Class$$Type<(any)>)[]): $MethodType
public static "methodType"(arg0: $Class$$Type<(any)>, arg1: $List$$Type<($Class$$Type<(any)>)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(any)>, arg1: $MethodType$$Type): $MethodType
public "dropParameterTypes"(arg0: integer, arg1: integer): $TypeDescriptor$OfMethod<(any), (any)>
public "appendParameterTypes"(arg0: $List$$Type<($Class$$Type<(any)>)>): $MethodType
public "appendParameterTypes"(...arg0: ($Class$$Type<(any)>)[]): $MethodType
public "parameterCount"(): integer
public static "genericMethodType"(arg0: integer): $MethodType
public static "genericMethodType"(arg0: integer, arg1: boolean): $MethodType
public "lastParameterType"(): $Class<(any)>
public "parameterList"(): $List<($Class<(any)>)>
public "erase"(): $MethodType
public "toMethodDescriptorString"(): string
public "hasPrimitives"(): boolean
public "unwrap"(): $MethodType
public "parameterArray"(): ($Class<(any)>)[]
public "changeParameterType"(arg0: integer, arg1: $Class$$Type<(any)>): $MethodType
public "changeParameterType"(arg0: integer, arg1: $TypeDescriptor$OfField$$Type<(any)>): $TypeDescriptor$OfMethod<(any), (any)>
public "hasWrappers"(): boolean
public "generic"(): $MethodType
public static "fromMethodDescriptorString"(arg0: string, arg1: $ClassLoader$$Type): $MethodType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodType$$Type = ($MethodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodType_ = $MethodType$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Provides" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Provides implements $Comparable<($ModuleDescriptor$Provides)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ModuleDescriptor$Provides$$Type): integer
public "service"(): string
public "providers"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Provides$$Type = ($ModuleDescriptor$Provides);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Provides_ = $ModuleDescriptor$Provides$$Type;
}}
declare module "java.lang.invoke.VarHandle$AccessMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$AccessMode extends $Enum<($VarHandle$AccessMode)> {
static readonly "WEAK_COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "GET_VOLATILE": $VarHandle$AccessMode
static readonly "SET": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD": $VarHandle$AccessMode
static readonly "GET_AND_SET": $VarHandle$AccessMode
static readonly "GET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_RELEASE": $VarHandle$AccessMode
static readonly "SET_OPAQUE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND": $VarHandle$AccessMode
static readonly "SET_VOLATILE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_PLAIN": $VarHandle$AccessMode
static readonly "SET_RELEASE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_RELEASE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_SET_RELEASE": $VarHandle$AccessMode
static readonly "GET": $VarHandle$AccessMode
static readonly "GET_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_RELEASE": $VarHandle$AccessMode
static readonly "GET_OPAQUE": $VarHandle$AccessMode


public static "values"(): ($VarHandle$AccessMode)[]
public "methodName"(): string
public static "valueOf"(arg0: string): $VarHandle$AccessMode
public static "valueFromMethodName"(arg0: string): $VarHandle$AccessMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarHandle$AccessMode$$Type = (("get") | ("set") | ("get_volatile") | ("set_volatile") | ("get_acquire") | ("set_release") | ("get_opaque") | ("set_opaque") | ("compare_and_set") | ("compare_and_exchange") | ("compare_and_exchange_acquire") | ("compare_and_exchange_release") | ("weak_compare_and_set_plain") | ("weak_compare_and_set") | ("weak_compare_and_set_acquire") | ("weak_compare_and_set_release") | ("get_and_set") | ("get_and_set_acquire") | ("get_and_set_release") | ("get_and_add") | ("get_and_add_acquire") | ("get_and_add_release") | ("get_and_bitwise_or") | ("get_and_bitwise_or_release") | ("get_and_bitwise_or_acquire") | ("get_and_bitwise_and") | ("get_and_bitwise_and_release") | ("get_and_bitwise_and_acquire") | ("get_and_bitwise_xor") | ("get_and_bitwise_xor_release") | ("get_and_bitwise_xor_acquire"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VarHandle$AccessMode_ = $VarHandle$AccessMode$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Requires" {
import {$ModuleDescriptor$Requires$Modifier, $ModuleDescriptor$Requires$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Requires$Modifier"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModuleDescriptor$Version, $ModuleDescriptor$Version$$Type} from "java.lang.module.ModuleDescriptor$Version"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires implements $Comparable<($ModuleDescriptor$Requires)> {


public "modifiers"(): $Set<($ModuleDescriptor$Requires$Modifier)>
public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Requires$$Type): integer
public "compareTo"(arg0: any): integer
public "accessFlags"(): $Set<($AccessFlag)>
public "rawCompiledVersion"(): $Optional<(string)>
public "compiledVersion"(): $Optional<($ModuleDescriptor$Version)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Requires$$Type = ($ModuleDescriptor$Requires);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Requires_ = $ModuleDescriptor$Requires$$Type;
}}
declare module "java.lang.invoke.VarHandle" {
import {$Constable, $Constable$$Type} from "java.lang.constant.Constable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$VarHandle$VarHandleDesc, $VarHandle$VarHandleDesc$$Type} from "java.lang.invoke.VarHandle$VarHandleDesc"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MethodType, $MethodType$$Type} from "java.lang.invoke.MethodType"
import {$VarHandle$AccessMode, $VarHandle$AccessMode$$Type} from "java.lang.invoke.VarHandle$AccessMode"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle implements $Constable {


public "get"(...arg0: (any)[]): any
public "toString"(): string
public static "storeStoreFence"(): void
public static "fullFence"(): void
public "describeConstable"(): $Optional<($VarHandle$VarHandleDesc)>
public "set"(...arg0: (any)[]): void
public "varType"(): $Class<(any)>
public "coordinateTypes"(): $List<($Class<(any)>)>
public "accessModeType"(arg0: $VarHandle$AccessMode$$Type): $MethodType
public "isAccessModeSupported"(arg0: $VarHandle$AccessMode$$Type): boolean
public static "loadLoadFence"(): void
public "hasInvokeExactBehavior"(): boolean
public "getVolatile"(...arg0: (any)[]): any
public "setVolatile"(...arg0: (any)[]): void
public "getOpaque"(...arg0: (any)[]): any
public "setOpaque"(...arg0: (any)[]): void
public "getAcquire"(...arg0: (any)[]): any
public "setRelease"(...arg0: (any)[]): void
public "compareAndSet"(...arg0: (any)[]): boolean
public "compareAndExchange"(...arg0: (any)[]): any
public "compareAndExchangeAcquire"(...arg0: (any)[]): any
public "compareAndExchangeRelease"(...arg0: (any)[]): any
public "weakCompareAndSetPlain"(...arg0: (any)[]): boolean
public "weakCompareAndSet"(...arg0: (any)[]): boolean
public "weakCompareAndSetAcquire"(...arg0: (any)[]): boolean
public "weakCompareAndSetRelease"(...arg0: (any)[]): boolean
public "getAndSet"(...arg0: (any)[]): any
public "getAndSetAcquire"(...arg0: (any)[]): any
public "getAndSetRelease"(...arg0: (any)[]): any
public "getAndAdd"(...arg0: (any)[]): any
public "getAndAddAcquire"(...arg0: (any)[]): any
public "getAndAddRelease"(...arg0: (any)[]): any
public "getAndBitwiseOr"(...arg0: (any)[]): any
public "getAndBitwiseOrAcquire"(...arg0: (any)[]): any
public "getAndBitwiseOrRelease"(...arg0: (any)[]): any
public "getAndBitwiseAnd"(...arg0: (any)[]): any
public "getAndBitwiseAndAcquire"(...arg0: (any)[]): any
public "getAndBitwiseAndRelease"(...arg0: (any)[]): any
public "getAndBitwiseXor"(...arg0: (any)[]): any
public "getAndBitwiseXorAcquire"(...arg0: (any)[]): any
public "getAndBitwiseXorRelease"(...arg0: (any)[]): any
public "withInvokeExactBehavior"(): $VarHandle
public "withInvokeBehavior"(): $VarHandle
public "toMethodHandle"(arg0: $VarHandle$AccessMode$$Type): $MethodHandle
public static "acquireFence"(): void
public static "releaseFence"(): void
set "volatile"(value: (any)[])
set "opaque"(value: (any)[])
set "release"(value: (any)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarHandle$$Type = ($VarHandle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VarHandle_ = $VarHandle$$Type;
}}
declare module "java.lang.Thread$Builder$OfPlatform" {
import {$ThreadGroup, $ThreadGroup$$Type} from "java.lang.ThreadGroup"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Thread$Builder, $Thread$Builder$$Type} from "java.lang.Thread$Builder"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$Builder$OfPlatform extends $Thread$Builder {

 "name"(arg0: string, arg1: long): $Thread$Builder
 "name"(arg0: string): $Thread$Builder
 "priority"(arg0: integer): $Thread$Builder$OfPlatform
 "group"(arg0: $ThreadGroup$$Type): $Thread$Builder$OfPlatform
 "daemon"(): $Thread$Builder$OfPlatform
 "daemon"(arg0: boolean): $Thread$Builder$OfPlatform
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder$OfPlatform
 "stackSize"(arg0: long): $Thread$Builder$OfPlatform
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder$OfPlatform
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "unstarted"(arg0: $Runnable$$Type): $Thread
}

export namespace $Thread$Builder$OfPlatform {
const probejs$$marker: never
}
export class $Thread$Builder$OfPlatform$$Static implements $Thread$Builder$OfPlatform {


 "name"(arg0: string, arg1: long): $Thread$Builder
 "name"(arg0: string): $Thread$Builder
 "priority"(arg0: integer): $Thread$Builder$OfPlatform
 "group"(arg0: $ThreadGroup$$Type): $Thread$Builder$OfPlatform
 "daemon"(): $Thread$Builder$OfPlatform
 "daemon"(arg0: boolean): $Thread$Builder$OfPlatform
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder$OfPlatform
 "stackSize"(arg0: long): $Thread$Builder$OfPlatform
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder$OfPlatform
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "unstarted"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$Builder$OfPlatform$$Type = ($Thread$Builder$OfPlatform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Thread$Builder$OfPlatform_ = $Thread$Builder$OfPlatform$$Type;
}}
declare module "java.lang.Math" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Math {
static readonly "E": double
static readonly "PI": double
static readonly "TAU": double


public static "abs"(arg0: double): double
public static "abs"(arg0: float): float
public static "abs"(arg0: long): long
public static "abs"(arg0: integer): integer
public static "sin"(arg0: double): double
public static "cos"(arg0: double): double
public static "tan"(arg0: double): double
public static "atan2"(arg0: double, arg1: double): double
public static "sqrt"(arg0: double): double
public static "log"(arg0: double): double
public static "log10"(arg0: double): double
public static "pow"(arg0: double, arg1: double): double
public static "exp"(arg0: double): double
public static "min"(arg0: double, arg1: double): double
public static "min"(arg0: float, arg1: float): float
public static "min"(arg0: long, arg1: long): long
public static "min"(arg0: integer, arg1: integer): integer
public static "max"(arg0: double, arg1: double): double
public static "max"(arg0: float, arg1: float): float
public static "max"(arg0: long, arg1: long): long
public static "max"(arg0: integer, arg1: integer): integer
public static "floor"(arg0: double): double
public static "ceil"(arg0: double): double
public static "rint"(arg0: double): double
public static "round"(arg0: float): integer
public static "round"(arg0: double): long
public static "addExact"(arg0: long, arg1: long): long
public static "addExact"(arg0: integer, arg1: integer): integer
public static "decrementExact"(arg0: integer): integer
public static "decrementExact"(arg0: long): long
public static "incrementExact"(arg0: long): long
public static "incrementExact"(arg0: integer): integer
public static "multiplyExact"(arg0: long, arg1: long): long
public static "multiplyExact"(arg0: long, arg1: integer): long
public static "multiplyExact"(arg0: integer, arg1: integer): integer
public static "multiplyHigh"(arg0: long, arg1: long): long
public static "unsignedMultiplyHigh"(arg0: long, arg1: long): long
public static "negateExact"(arg0: integer): integer
public static "negateExact"(arg0: long): long
public static "subtractExact"(arg0: long, arg1: long): long
public static "subtractExact"(arg0: integer, arg1: integer): integer
public static "fma"(arg0: double, arg1: double, arg2: double): double
public static "fma"(arg0: float, arg1: float, arg2: float): float
public static "copySign"(arg0: double, arg1: double): double
public static "copySign"(arg0: float, arg1: float): float
public static "signum"(arg0: double): double
public static "signum"(arg0: float): float
public static "clamp"(arg0: float, arg1: float, arg2: float): float
public static "clamp"(arg0: long, arg1: long, arg2: long): long
public static "clamp"(arg0: double, arg1: double, arg2: double): double
public static "clamp"(arg0: long, arg1: integer, arg2: integer): integer
public static "scalb"(arg0: float, arg1: integer): float
public static "scalb"(arg0: double, arg1: integer): double
public static "getExponent"(arg0: double): integer
public static "getExponent"(arg0: float): integer
public static "floorMod"(arg0: integer, arg1: integer): integer
public static "floorMod"(arg0: long, arg1: integer): integer
public static "floorMod"(arg0: long, arg1: long): long
public static "asin"(arg0: double): double
public static "acos"(arg0: double): double
public static "atan"(arg0: double): double
public static "cbrt"(arg0: double): double
public static "IEEEremainder"(arg0: double, arg1: double): double
public static "floorDiv"(arg0: long, arg1: long): long
public static "floorDiv"(arg0: long, arg1: integer): long
public static "floorDiv"(arg0: integer, arg1: integer): integer
public static "ceilDiv"(arg0: long, arg1: long): long
public static "ceilDiv"(arg0: long, arg1: integer): long
public static "ceilDiv"(arg0: integer, arg1: integer): integer
public static "ceilMod"(arg0: long, arg1: long): long
public static "ceilMod"(arg0: long, arg1: integer): integer
public static "ceilMod"(arg0: integer, arg1: integer): integer
public static "sinh"(arg0: double): double
public static "cosh"(arg0: double): double
public static "tanh"(arg0: double): double
public static "hypot"(arg0: double, arg1: double): double
public static "expm1"(arg0: double): double
public static "log1p"(arg0: double): double
public static "toRadians"(arg0: double): double
public static "toDegrees"(arg0: double): double
public static "random"(): double
public static "divideExact"(arg0: integer, arg1: integer): integer
public static "divideExact"(arg0: long, arg1: long): long
public static "floorDivExact"(arg0: long, arg1: long): long
public static "floorDivExact"(arg0: integer, arg1: integer): integer
public static "ceilDivExact"(arg0: long, arg1: long): long
public static "ceilDivExact"(arg0: integer, arg1: integer): integer
public static "toIntExact"(arg0: long): integer
public static "multiplyFull"(arg0: integer, arg1: integer): long
public static "absExact"(arg0: long): long
public static "absExact"(arg0: integer): integer
public static "ulp"(arg0: double): double
public static "ulp"(arg0: float): float
public static "nextAfter"(arg0: float, arg1: double): float
public static "nextAfter"(arg0: double, arg1: double): double
public static "nextUp"(arg0: double): double
public static "nextUp"(arg0: float): float
public static "nextDown"(arg0: double): double
public static "nextDown"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Math$$Type = ($Math);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Math_ = $Math$$Type;
}}
declare module "java.lang.invoke.MethodHandles$Lookup" {
import {$MethodHandleInfo, $MethodHandleInfo$$Type} from "java.lang.invoke.MethodHandleInfo"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$MethodHandles$Lookup$ClassOption, $MethodHandles$Lookup$ClassOption$$Type} from "java.lang.invoke.MethodHandles$Lookup$ClassOption"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$MethodType, $MethodType$$Type} from "java.lang.invoke.MethodType"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup {
static readonly "MODULE": integer
static readonly "PACKAGE": integer
static readonly "PUBLIC": integer
static readonly "ORIGINAL": integer
static readonly "UNCONDITIONAL": integer
static readonly "PROTECTED": integer
static readonly "PRIVATE": integer


public "toString"(): string
public "findClass"(arg0: string): $Class<(any)>
public "defineClass"(arg0: (byte)[]): $Class<(any)>
public "in"(arg0: $Class$$Type<(any)>): $MethodHandles$Lookup
public "ensureInitialized"<T>(arg0: $Class$$Type<(T)>): $Class<(T)>
public "revealDirect"(arg0: $MethodHandle$$Type): $MethodHandleInfo
public "lookupClass"(): $Class<(any)>
public "previousLookupClass"(): $Class<(any)>
public "findVirtual"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $MethodType$$Type): $MethodHandle
public "findStatic"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $MethodType$$Type): $MethodHandle
public "unreflect"(arg0: $Method$$Type): $MethodHandle
public "unreflectConstructor"(arg0: $Constructor$$Type<(any)>): $MethodHandle
public "lookupModes"(): integer
public "hasFullPrivilegeAccess"(): boolean
public "accessClass"<T>(arg0: $Class$$Type<(T)>): $Class<(T)>
public "dropLookupMode"(arg0: integer): $MethodHandles$Lookup
public "defineHiddenClass"(arg0: (byte)[], arg1: boolean, ...arg2: ($MethodHandles$Lookup$ClassOption$$Type)[]): $MethodHandles$Lookup
public "defineHiddenClassWithClassData"(arg0: (byte)[], arg1: any, arg2: boolean, ...arg3: ($MethodHandles$Lookup$ClassOption$$Type)[]): $MethodHandles$Lookup
public "findConstructor"(arg0: $Class$$Type<(any)>, arg1: $MethodType$$Type): $MethodHandle
public "findSpecial"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $MethodType$$Type, arg3: $Class$$Type<(any)>): $MethodHandle
public "findGetter"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $Class$$Type<(any)>): $MethodHandle
public "findSetter"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $Class$$Type<(any)>): $MethodHandle
public "findVarHandle"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $Class$$Type<(any)>): $VarHandle
public "findStaticGetter"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $Class$$Type<(any)>): $MethodHandle
public "findStaticSetter"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $Class$$Type<(any)>): $MethodHandle
public "findStaticVarHandle"(arg0: $Class$$Type<(any)>, arg1: string, arg2: $Class$$Type<(any)>): $VarHandle
public "bind"(arg0: any, arg1: string, arg2: $MethodType$$Type): $MethodHandle
public "unreflectSpecial"(arg0: $Method$$Type, arg1: $Class$$Type<(any)>): $MethodHandle
public "unreflectGetter"(arg0: $Field$$Type): $MethodHandle
public "unreflectSetter"(arg0: $Field$$Type): $MethodHandle
public "unreflectVarHandle"(arg0: $Field$$Type): $VarHandle
/**
 * 
 * @deprecated
 */
public "hasPrivateAccess"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandles$Lookup$$Type = ($MethodHandles$Lookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodHandles$Lookup_ = $MethodHandles$Lookup$$Type;
}}
declare module "java.lang.invoke.MethodHandleInfo" {
import {$Member, $Member$$Type} from "java.lang.reflect.Member"
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MethodType, $MethodType$$Type} from "java.lang.invoke.MethodType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleInfo {

 "getName"(): string
 "getModifiers"(): integer
 "getDeclaringClass"(): $Class<(any)>
 "isVarArgs"(): boolean
 "getReferenceKind"(): integer
 "getMethodType"(): $MethodType
 "reflectAs"<T extends $Member>(arg0: $Class$$Type<(T)>, arg1: $MethodHandles$Lookup$$Type): T
get "name"(): string
get "modifiers"(): integer
get "declaringClass"(): $Class<(any)>
get "varArgs"(): boolean
get "referenceKind"(): integer
get "methodType"(): $MethodType
}

export namespace $MethodHandleInfo {
const REF_getStatic: integer
const REF_getField: integer
const REF_putStatic: integer
const REF_newInvokeSpecial: integer
const REF_putField: integer
const REF_invokeVirtual: integer
const REF_invokeSpecial: integer
const REF_invokeStatic: integer
const REF_invokeInterface: integer
function toString(arg0: integer, arg1: $Class$$Type<(any)>, arg2: string, arg3: $MethodType$$Type): string
function referenceKindToString(arg0: integer): string
const probejs$$marker: never
}
export class $MethodHandleInfo$$Static implements $MethodHandleInfo {
static readonly "REF_getStatic": integer
static readonly "REF_getField": integer
static readonly "REF_putStatic": integer
static readonly "REF_newInvokeSpecial": integer
static readonly "REF_putField": integer
static readonly "REF_invokeVirtual": integer
static readonly "REF_invokeSpecial": integer
static readonly "REF_invokeStatic": integer
static readonly "REF_invokeInterface": integer


 "getName"(): string
static "toString"(arg0: integer, arg1: $Class$$Type<(any)>, arg2: string, arg3: $MethodType$$Type): string
 "getModifiers"(): integer
 "getDeclaringClass"(): $Class<(any)>
 "isVarArgs"(): boolean
 "getReferenceKind"(): integer
 "getMethodType"(): $MethodType
 "reflectAs"<T extends $Member>(arg0: $Class$$Type<(T)>, arg1: $MethodHandles$Lookup$$Type): T
static "referenceKindToString"(arg0: integer): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandleInfo$$Type = ($MethodHandleInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodHandleInfo_ = $MethodHandleInfo$$Type;
}}
declare module "java.lang.constant.ConstantDesc" {
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ConstantDesc {

 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any

(arg0: $MethodHandles$Lookup): any
}

export namespace $ConstantDesc {
const probejs$$marker: never
}
export class $ConstantDesc$$Static implements $ConstantDesc {


 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstantDesc$$Type = ((arg0: $MethodHandles$Lookup) => any);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstantDesc_ = $ConstantDesc$$Type;
}}
declare module "java.lang.Thread$Builder" {
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$Builder {

 "name"(arg0: string): $Thread$Builder
 "name"(arg0: string, arg1: long): $Thread$Builder
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder
 "unstarted"(arg0: $Runnable$$Type): $Thread
}

export namespace $Thread$Builder {
const probejs$$marker: never
}
export class $Thread$Builder$$Static implements $Thread$Builder {


 "name"(arg0: string): $Thread$Builder
 "name"(arg0: string, arg1: long): $Thread$Builder
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder
 "unstarted"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$Builder$$Type = ($Thread$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Thread$Builder_ = $Thread$Builder$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfBoolean" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfBoolean extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfBoolean {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfBoolean$$Static implements $ValueLayout$OfBoolean {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfBoolean$$Type = ($ValueLayout$OfBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfBoolean_ = $ValueLayout$OfBoolean$$Type;
}}
declare module "java.lang.Package" {
import {$NamedPackage, $NamedPackage$$Type} from "java.lang.NamedPackage"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$URL, $URL$$Type} from "java.net.URL"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Package extends $NamedPackage implements $AnnotatedElement {


public "getName"(): string
public "toString"(): string
public "hashCode"(): integer
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
/**
 * 
 * @deprecated
 */
public static "getPackage"(arg0: string): $Package
public "getAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isSealed"(arg0: $URL$$Type): boolean
public "isSealed"(): boolean
public static "getPackages"(): ($Package)[]
public "getSpecificationTitle"(): string
public "getSpecificationVersion"(): string
public "getSpecificationVendor"(): string
public "getImplementationTitle"(): string
public "getImplementationVersion"(): string
public "getImplementationVendor"(): string
public "isCompatibleWith"(arg0: string): boolean
get "name"(): string
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "sealed"(): boolean
get "specificationTitle"(): string
get "specificationVersion"(): string
get "specificationVendor"(): string
get "implementationTitle"(): string
get "implementationVersion"(): string
get "implementationVendor"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Package$$Type = ($Package);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Package_ = $Package$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Modifier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Modifier extends $Enum<($ModuleDescriptor$Modifier)> {
static readonly "AUTOMATIC": $ModuleDescriptor$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Modifier
static readonly "MANDATED": $ModuleDescriptor$Modifier
static readonly "OPEN": $ModuleDescriptor$Modifier


public static "values"(): ($ModuleDescriptor$Modifier)[]
public static "valueOf"(arg0: string): $ModuleDescriptor$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Modifier$$Type = (("open") | ("automatic") | ("synthetic") | ("mandated"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Modifier_ = $ModuleDescriptor$Modifier$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Exports" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModuleDescriptor$Exports$Modifier, $ModuleDescriptor$Exports$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Exports$Modifier"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports implements $Comparable<($ModuleDescriptor$Exports)> {


public "modifiers"(): $Set<($ModuleDescriptor$Exports$Modifier)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Exports$$Type): integer
public "compareTo"(arg0: any): integer
public "accessFlags"(): $Set<($AccessFlag)>
public "source"(): string
public "isQualified"(): boolean
public "targets"(): $Set<(string)>
get "qualified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Exports$$Type = ($ModuleDescriptor$Exports);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Exports_ = $ModuleDescriptor$Exports$$Type;
}}
declare module "java.lang.foreign.StructLayout" {
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$List, $List$$Type} from "java.util.List"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$GroupLayout, $GroupLayout$$Type} from "java.lang.foreign.GroupLayout"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $StructLayout extends $GroupLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withName"(arg0: string): $MemoryLayout
 "memberLayouts"(): $List<($MemoryLayout)>
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $StructLayout {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $StructLayout$$Static implements $StructLayout {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withName"(arg0: string): $MemoryLayout
 "memberLayouts"(): $List<($MemoryLayout)>
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructLayout$$Type = ($StructLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructLayout_ = $StructLayout$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfFloat" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfFloat extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfFloat {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfFloat$$Static implements $ValueLayout$OfFloat {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfFloat$$Type = ($ValueLayout$OfFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfFloat_ = $ValueLayout$OfFloat$$Type;
}}
declare module "java.lang.Class" {
import {$Constable, $Constable$$Type} from "java.lang.constant.Constable"
import {$RecordComponent, $RecordComponent$$Type} from "java.lang.reflect.RecordComponent"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"
import {$GenericDeclaration, $GenericDeclaration$$Type} from "java.lang.reflect.GenericDeclaration"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Package, $Package$$Type} from "java.lang.Package"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$URL, $URL$$Type} from "java.net.URL"
import {$ProtectionDomain, $ProtectionDomain$$Type} from "java.security.ProtectionDomain"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$Module, $Module$$Type} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Class<T> implements $Serializable, $GenericDeclaration, $Type, $AnnotatedElement, $TypeDescriptor$OfField<($Class<(any)>)>, $Constable {


public "getName"(): string
public static "forName"(arg0: string, arg1: boolean, arg2: $ClassLoader$$Type): $Class<(any)>
public static "forName"(arg0: $Module$$Type, arg1: string): $Class<(any)>
public static "forName"(arg0: string): $Class<(any)>
public "toString"(): string
public "getModule"(): $Module
public "getProtectionDomain"(): $ProtectionDomain
public "isAssignableFrom"(arg0: $Class$$Type<(any)>): boolean
public "isInstance"(arg0: any): boolean
public "getModifiers"(): integer
public "isInterface"(): boolean
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "isHidden"(): boolean
public "getSuperclass"(): $Class<(T)>
public "cast"(arg0: any): T
public "componentType"(): $TypeDescriptor$OfField<(any)>
public "describeConstable"(): $Optional<($ClassDesc)>
public "getComponentType"(): $Class<(any)>
public "isAnnotation"(): boolean
public "isEnum"(): boolean
public "isRecord"(): boolean
public "getTypeParameters"(): ($TypeVariable<($Class<(T)>)>)[]
public "getClassLoader"(): $ClassLoader
/**
 * 
 * @deprecated
 */
public "newInstance"(): T
public "getInterfaces"(): ($Class<(any)>)[]
public "isMemberClass"(): boolean
public "isLocalClass"(): boolean
public "isAnonymousClass"(): boolean
public "getEnclosingClass"(): $Class<(any)>
public "isUnnamedClass"(): boolean
public "getSimpleName"(): string
public "getCanonicalName"(): string
public "isSynthetic"(): boolean
public "getResourceAsStream"(arg0: string): $InputStream
public "getResource"(arg0: string): $URL
public "getPackageName"(): string
public "desiredAssertionStatus"(): boolean
public "getMethod"(arg0: string, ...arg1: ($Class$$Type<(any)>)[]): $Method
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getNestHost"(): $Class<(any)>
public "descriptorString"(): string
public "getPermittedSubclasses"(): ($Class<(any)>)[]
public "arrayType"(): $Class<(any)>
public "toGenericString"(): string
public "getGenericSuperclass"(): $Type
public "getPackage"(): $Package
public "getGenericInterfaces"(): ($Type)[]
public "accessFlags"(): $Set<($AccessFlag)>
public "getSigners"(): (any)[]
public "getEnclosingMethod"(): $Method
public "getEnclosingConstructor"(): $Constructor<(any)>
public "getDeclaringClass"(): $Class<(any)>
public "getTypeName"(): string
public "getClasses"(): ($Class<(any)>)[]
public "getFields"(): ($Field)[]
public "getMethods"(): ($Method)[]
public "getConstructors"(): ($Constructor<(any)>)[]
public "getField"(arg0: string): $Field
public "getConstructor"(...arg0: ($Class$$Type<(any)>)[]): $Constructor<(T)>
public "getDeclaredClasses"(): ($Class<(any)>)[]
public "getDeclaredFields"(): ($Field)[]
public "getRecordComponents"(): ($RecordComponent)[]
public "getDeclaredMethods"(): ($Method)[]
public "getDeclaredConstructors"(): ($Constructor<(any)>)[]
public "getDeclaredField"(arg0: string): $Field
public "getDeclaredMethod"(arg0: string, ...arg1: ($Class$$Type<(any)>)[]): $Method
public "getDeclaredConstructor"(...arg0: ($Class$$Type<(any)>)[]): $Constructor<(T)>
public "getEnumConstants"(): (T)[]
public "asSubclass"<U>(arg0: $Class$$Type<(U)>): $Class<(U)>
public "getAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getAnnotatedSuperclass"(): $AnnotatedType
public "getAnnotatedInterfaces"(): ($AnnotatedType)[]
public "isNestmateOf"(arg0: $Class$$Type<(any)>): boolean
public "getNestMembers"(): ($Class<(any)>)[]
public "isSealed"(): boolean
get "name"(): string
get "module"(): $Module
get "protectionDomain"(): $ProtectionDomain
get "modifiers"(): integer
get "interface"(): boolean
get "array"(): boolean
get "primitive"(): boolean
get "hidden"(): boolean
get "superclass"(): $Class<(T)>
get "annotation"(): boolean
get "enum"(): boolean
get "record"(): boolean
get "typeParameters"(): ($TypeVariable<($Class<(T)>)>)[]
get "classLoader"(): $ClassLoader
get "interfaces"(): ($Class<(any)>)[]
get "memberClass"(): boolean
get "localClass"(): boolean
get "anonymousClass"(): boolean
get "enclosingClass"(): $Class<(any)>
get "unnamedClass"(): boolean
get "simpleName"(): string
get "canonicalName"(): string
get "synthetic"(): boolean
get "packageName"(): string
get "nestHost"(): $Class<(any)>
get "permittedSubclasses"(): ($Class<(any)>)[]
get "genericSuperclass"(): $Type
get "package"(): $Package
get "genericInterfaces"(): ($Type)[]
get "signers"(): (any)[]
get "enclosingMethod"(): $Method
get "enclosingConstructor"(): $Constructor<(any)>
get "declaringClass"(): $Class<(any)>
get "typeName"(): string
get "classes"(): ($Class<(any)>)[]
get "fields"(): ($Field)[]
get "methods"(): ($Method)[]
get "constructors"(): ($Constructor<(any)>)[]
get "declaredClasses"(): ($Class<(any)>)[]
get "declaredFields"(): ($Field)[]
get "recordComponents"(): ($RecordComponent)[]
get "declaredMethods"(): ($Method)[]
get "declaredConstructors"(): ($Constructor<(any)>)[]
get "enumConstants"(): (T)[]
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "annotatedSuperclass"(): $AnnotatedType
get "annotatedInterfaces"(): ($AnnotatedType)[]
get "nestMembers"(): ($Class<(any)>)[]
get "sealed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Class$$Type<T> = ($Class<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Class_<T> = $Class$$Type<(T)>;
}}
declare module "java.lang.reflect.Member" {
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Member {

 "getName"(): string
 "getModifiers"(): integer
 "isSynthetic"(): boolean
 "accessFlags"(): $Set<($AccessFlag)>
 "getDeclaringClass"(): $Class<(any)>
get "name"(): string
get "modifiers"(): integer
get "synthetic"(): boolean
get "declaringClass"(): $Class<(any)>
}

export namespace $Member {
const PUBLIC: integer
const DECLARED: integer
const probejs$$marker: never
}
export class $Member$$Static implements $Member {
static readonly "PUBLIC": integer
static readonly "DECLARED": integer


 "getName"(): string
 "getModifiers"(): integer
 "isSynthetic"(): boolean
 "accessFlags"(): $Set<($AccessFlag)>
 "getDeclaringClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Member$$Type = ($Member);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Member_ = $Member$$Type;
}}
declare module "java.lang.ModuleLayer" {
import {$Configuration, $Configuration$$Type} from "java.lang.module.Configuration"
import {$ModuleLayer$Controller, $ModuleLayer$Controller$$Type} from "java.lang.ModuleLayer$Controller"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$Module, $Module$$Type} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer {


public "toString"(): string
public static "empty"(): $ModuleLayer
public static "boot"(): $ModuleLayer
public "modules"(): $Set<($Module)>
public "configuration"(): $Configuration
public "parents"(): $List<($ModuleLayer)>
public "findModule"(arg0: string): $Optional<($Module)>
public "defineModules"(arg0: $Configuration$$Type, arg1: $Function$$Type<(string), ($ClassLoader$$Type)>): $ModuleLayer
public static "defineModules"(arg0: $Configuration$$Type, arg1: $List$$Type<($ModuleLayer$$Type)>, arg2: $Function$$Type<(string), ($ClassLoader$$Type)>): $ModuleLayer$Controller
public static "defineModulesWithOneLoader"(arg0: $Configuration$$Type, arg1: $List$$Type<($ModuleLayer$$Type)>, arg2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithOneLoader"(arg0: $Configuration$$Type, arg1: $ClassLoader$$Type): $ModuleLayer
public static "defineModulesWithManyLoaders"(arg0: $Configuration$$Type, arg1: $List$$Type<($ModuleLayer$$Type)>, arg2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithManyLoaders"(arg0: $Configuration$$Type, arg1: $ClassLoader$$Type): $ModuleLayer
public "findLoader"(arg0: string): $ClassLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleLayer$$Type = ($ModuleLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleLayer_ = $ModuleLayer$$Type;
}}
declare module "java.lang.foreign.MemorySegment$Scope" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemorySegment$Scope {

 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "isAlive"(): boolean
get "alive"(): boolean
}

export namespace $MemorySegment$Scope {
const probejs$$marker: never
}
export class $MemorySegment$Scope$$Static implements $MemorySegment$Scope {


 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "isAlive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySegment$Scope$$Type = ($MemorySegment$Scope);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemorySegment$Scope_ = $MemorySegment$Scope$$Type;
}}
declare module "java.lang.reflect.Field" {
import {$Member, $Member$$Type} from "java.lang.reflect.Member"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AccessibleObject, $AccessibleObject$$Type} from "java.lang.reflect.AccessibleObject"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Field extends $AccessibleObject implements $Member {


public "getName"(): string
public "get"(arg0: any): any
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getBoolean"(arg0: any): boolean
public "getByte"(arg0: any): byte
public "getShort"(arg0: any): short
public "getChar"(arg0: any): character
public "getInt"(arg0: any): integer
public "getLong"(arg0: any): long
public "getFloat"(arg0: any): float
public "getDouble"(arg0: any): double
public "isSynthetic"(): boolean
public "toGenericString"(): string
public "accessFlags"(): $Set<($AccessFlag)>
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "set"(arg0: any, arg1: any): void
public "setAccessible"(arg0: boolean): void
public "getGenericType"(): $Type
public "getType"(): $Class<(any)>
public "setBoolean"(arg0: any, arg1: boolean): void
public "setByte"(arg0: any, arg1: byte): void
public "setChar"(arg0: any, arg1: character): void
public "setShort"(arg0: any, arg1: short): void
public "setInt"(arg0: any, arg1: integer): void
public "setLong"(arg0: any, arg1: long): void
public "setFloat"(arg0: any, arg1: float): void
public "setDouble"(arg0: any, arg1: double): void
public "isEnumConstant"(): boolean
public "getAnnotatedType"(): $AnnotatedType
get "name"(): string
get "modifiers"(): integer
get "synthetic"(): boolean
get "declaringClass"(): $Class<(any)>
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "genericType"(): $Type
get "type"(): $Class<(any)>
get "enumConstant"(): boolean
get "annotatedType"(): $AnnotatedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Field$$Type = ($Field);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Field_ = $Field$$Type;
}}
declare module "java.lang.reflect.AccessibleObject" {
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessibleObject implements $AnnotatedElement {


public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public static "setAccessible"(arg0: ($AccessibleObject$$Type)[], arg1: boolean): void
public "setAccessible"(arg0: boolean): void
public "trySetAccessible"(): boolean
public "canAccess"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "isAccessible"(): boolean
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "accessible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessibleObject$$Type = ($AccessibleObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessibleObject_ = $AccessibleObject$$Type;
}}
declare module "java.lang.foreign.UnionLayout" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$List, $List$$Type} from "java.util.List"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$GroupLayout, $GroupLayout$$Type} from "java.lang.foreign.GroupLayout"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UnionLayout extends $GroupLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withName"(arg0: string): $MemoryLayout
 "memberLayouts"(): $List<($MemoryLayout)>
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $UnionLayout {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $UnionLayout$$Static implements $UnionLayout {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withName"(arg0: string): $MemoryLayout
 "memberLayouts"(): $List<($MemoryLayout)>
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnionLayout$$Type = ($UnionLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnionLayout_ = $UnionLayout$$Type;
}}
declare module "java.lang.IllegalStateException" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$RuntimeException, $RuntimeException$$Type} from "java.lang.RuntimeException"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IllegalStateException extends $RuntimeException {

constructor(arg0: $Throwable$$Type)
constructor(arg0: string, arg1: $Throwable$$Type)
constructor(arg0: string)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IllegalStateException$$Type = ($IllegalStateException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IllegalStateException_ = $IllegalStateException$$Type;
}}
declare module "java.lang.ModuleLayer$Controller" {
import {$ModuleLayer, $ModuleLayer$$Type} from "java.lang.ModuleLayer"
import {$Module, $Module$$Type} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer$Controller {


public "addReads"(arg0: $Module$$Type, arg1: $Module$$Type): $ModuleLayer$Controller
public "addExports"(arg0: $Module$$Type, arg1: string, arg2: $Module$$Type): $ModuleLayer$Controller
public "addOpens"(arg0: $Module$$Type, arg1: string, arg2: $Module$$Type): $ModuleLayer$Controller
public "layer"(): $ModuleLayer
public "enableNativeAccess"(arg0: $Module$$Type): $ModuleLayer$Controller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleLayer$Controller$$Type = ($ModuleLayer$Controller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleLayer$Controller_ = $ModuleLayer$Controller$$Type;
}}
declare module "java.lang.Exception" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Exception extends $Throwable {

constructor(arg0: $Throwable$$Type)
constructor(arg0: string, arg1: $Throwable$$Type)
constructor(arg0: string)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Exception$$Type = ($Exception);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Exception_ = $Exception$$Type;
}}
declare module "java.lang.invoke.VarHandle$VarHandleDesc" {
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$DynamicConstantDesc, $DynamicConstantDesc$$Type} from "java.lang.constant.DynamicConstantDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$VarHandleDesc extends $DynamicConstantDesc<($VarHandle)> {


public "toString"(): string
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
public static "ofField"(arg0: $ClassDesc$$Type, arg1: string, arg2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public "varType"(): $ClassDesc
public static "ofArray"(arg0: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public static "ofStaticField"(arg0: $ClassDesc$$Type, arg1: string, arg2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarHandle$VarHandleDesc$$Type = ($VarHandle$VarHandleDesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VarHandle$VarHandleDesc_ = $VarHandle$VarHandleDesc$$Type;
}}
declare module "java.lang.reflect.AnnotatedTypeVariable" {
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedTypeVariable extends $AnnotatedType {

 "getAnnotatedOwnerType"(): $AnnotatedType
 "getAnnotatedBounds"(): ($AnnotatedType)[]
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
 "getType"(): $Type
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
get "annotatedOwnerType"(): $AnnotatedType
get "annotatedBounds"(): ($AnnotatedType)[]
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $Type
}

export namespace $AnnotatedTypeVariable {
const probejs$$marker: never
}
export class $AnnotatedTypeVariable$$Static implements $AnnotatedTypeVariable {


 "getAnnotatedOwnerType"(): $AnnotatedType
 "getAnnotatedBounds"(): ($AnnotatedType)[]
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
 "getType"(): $Type
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedTypeVariable$$Type = ($AnnotatedTypeVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedTypeVariable_ = $AnnotatedTypeVariable$$Type;
}}
declare module "java.lang.constant.MethodTypeDesc" {
import {$ConstantDesc, $ConstantDesc$$Type} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$List, $List$$Type} from "java.util.List"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"
import {$TypeDescriptor$OfMethod, $TypeDescriptor$OfMethod$$Type} from "java.lang.invoke.TypeDescriptor$OfMethod"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodTypeDesc extends $ConstantDesc, $TypeDescriptor$OfMethod<($ClassDesc), ($MethodTypeDesc)> {

 "returnType"(): $ClassDesc
 "equals"(arg0: any): boolean
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "descriptorString"(): string
 "parameterType"(arg0: integer): $TypeDescriptor$OfField<(any)>
 "insertParameterTypes"(arg0: integer, ...arg1: ($ClassDesc$$Type)[]): $MethodTypeDesc
 "insertParameterTypes"(arg0: integer, arg1: ($TypeDescriptor$OfField$$Type<(any)>)[]): $TypeDescriptor$OfMethod<(any), (any)>
 "changeReturnType"(arg0: $ClassDesc$$Type): $MethodTypeDesc
 "changeReturnType"(arg0: $TypeDescriptor$OfField$$Type<(any)>): $TypeDescriptor$OfMethod<(any), (any)>
 "dropParameterTypes"(arg0: integer, arg1: integer): $TypeDescriptor$OfMethod<(any), (any)>
 "parameterCount"(): integer
 "parameterList"(): $List<($ClassDesc)>
 "parameterArray"(): ($TypeDescriptor$OfField<(any)>)[]
 "changeParameterType"(arg0: integer, arg1: $ClassDesc$$Type): $MethodTypeDesc
 "changeParameterType"(arg0: integer, arg1: $TypeDescriptor$OfField$$Type<(any)>): $TypeDescriptor$OfMethod<(any), (any)>
 "displayDescriptor"(): string
}

export namespace $MethodTypeDesc {
function of(arg0: $ClassDesc$$Type): $MethodTypeDesc
function of(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $MethodTypeDesc
function of(arg0: $ClassDesc$$Type, arg1: $List$$Type<($ClassDesc$$Type)>): $MethodTypeDesc
function ofDescriptor(arg0: string): $MethodTypeDesc
const probejs$$marker: never
}
export class $MethodTypeDesc$$Static implements $MethodTypeDesc {


 "returnType"(): $ClassDesc
 "equals"(arg0: any): boolean
static "of"(arg0: $ClassDesc$$Type): $MethodTypeDesc
static "of"(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $MethodTypeDesc
static "of"(arg0: $ClassDesc$$Type, arg1: $List$$Type<($ClassDesc$$Type)>): $MethodTypeDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "descriptorString"(): string
static "ofDescriptor"(arg0: string): $MethodTypeDesc
 "parameterType"(arg0: integer): $TypeDescriptor$OfField<(any)>
 "insertParameterTypes"(arg0: integer, ...arg1: ($ClassDesc$$Type)[]): $MethodTypeDesc
 "insertParameterTypes"(arg0: integer, arg1: ($TypeDescriptor$OfField$$Type<(any)>)[]): $TypeDescriptor$OfMethod<(any), (any)>
 "changeReturnType"(arg0: $ClassDesc$$Type): $MethodTypeDesc
 "changeReturnType"(arg0: $TypeDescriptor$OfField$$Type<(any)>): $TypeDescriptor$OfMethod<(any), (any)>
 "dropParameterTypes"(arg0: integer, arg1: integer): $TypeDescriptor$OfMethod<(any), (any)>
 "parameterCount"(): integer
 "parameterList"(): $List<($ClassDesc)>
 "parameterArray"(): ($TypeDescriptor$OfField<(any)>)[]
 "changeParameterType"(arg0: integer, arg1: $ClassDesc$$Type): $MethodTypeDesc
 "changeParameterType"(arg0: integer, arg1: $TypeDescriptor$OfField$$Type<(any)>): $TypeDescriptor$OfMethod<(any), (any)>
 "displayDescriptor"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodTypeDesc$$Type = ($MethodTypeDesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodTypeDesc_ = $MethodTypeDesc$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfShort" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfShort extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfShort {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfShort$$Static implements $ValueLayout$OfShort {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfShort$$Type = ($ValueLayout$OfShort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfShort_ = $ValueLayout$OfShort$$Type;
}}
declare module "java.lang.Comparable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Comparable<T> {

 "compareTo"(arg0: T): integer

(arg0: T): integer
}

export namespace $Comparable {
const probejs$$marker: never
}
export class $Comparable$$Static<T> implements $Comparable {


 "compareTo"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Comparable$$Type<T> = ((arg0: T) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Comparable_<T> = $Comparable$$Type<(T)>;
}}
declare module "java.lang.module.ModuleDescriptor$Requires$Modifier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires$Modifier extends $Enum<($ModuleDescriptor$Requires$Modifier)> {
static readonly "TRANSITIVE": $ModuleDescriptor$Requires$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Requires$Modifier
static readonly "MANDATED": $ModuleDescriptor$Requires$Modifier
static readonly "STATIC": $ModuleDescriptor$Requires$Modifier


public static "values"(): ($ModuleDescriptor$Requires$Modifier)[]
public static "valueOf"(arg0: string): $ModuleDescriptor$Requires$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Requires$Modifier$$Type = (("transitive") | ("static") | ("synthetic") | ("mandated"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Requires$Modifier_ = $ModuleDescriptor$Requires$Modifier$$Type;
}}
declare module "java.lang.module.ModuleFinder" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ModuleReference, $ModuleReference$$Type} from "java.lang.module.ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModuleFinder {

 "find"(arg0: string): $Optional<($ModuleReference)>
 "findAll"(): $Set<($ModuleReference)>
}

export namespace $ModuleFinder {
function of(...arg0: ($Path$$Type)[]): $ModuleFinder
function compose(...arg0: ($ModuleFinder$$Type)[]): $ModuleFinder
function ofSystem(): $ModuleFinder
const probejs$$marker: never
}
export class $ModuleFinder$$Static implements $ModuleFinder {


static "of"(...arg0: ($Path$$Type)[]): $ModuleFinder
 "find"(arg0: string): $Optional<($ModuleReference)>
static "compose"(...arg0: ($ModuleFinder$$Type)[]): $ModuleFinder
static "ofSystem"(): $ModuleFinder
 "findAll"(): $Set<($ModuleReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleFinder$$Type = ($ModuleFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleFinder_ = $ModuleFinder$$Type;
}}
declare module "java.lang.foreign.Arena" {
import {$ValueLayout$OfLong, $ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$ValueLayout$OfDouble, $ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$ValueLayout$OfInt, $ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$ValueLayout$OfShort, $ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$ValueLayout$OfByte, $ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$MemorySegment, $MemorySegment$$Type} from "java.lang.foreign.MemorySegment"
import {$AddressLayout, $AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$ValueLayout$OfFloat, $ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$SegmentAllocator, $SegmentAllocator$$Type} from "java.lang.foreign.SegmentAllocator"
import {$MemorySegment$Scope, $MemorySegment$Scope$$Type} from "java.lang.foreign.MemorySegment$Scope"
import {$ValueLayout$OfChar, $ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Arena extends $SegmentAllocator, $AutoCloseable {

 "scope"(): $MemorySegment$Scope
 "close"(): void
 "allocate"(arg0: long, arg1: long): $MemorySegment
 "allocate"(arg0: $AddressLayout$$Type, arg1: $MemorySegment$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfDouble$$Type, arg1: double): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfLong$$Type, arg1: long): $MemorySegment
 "allocate"(arg0: long): $MemorySegment
 "allocate"(arg0: $MemoryLayout$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfByte$$Type, arg1: byte): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfChar$$Type, arg1: character): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfShort$$Type, arg1: short): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfFloat$$Type, arg1: float): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfInt$$Type, arg1: integer): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfLong$$Type, ...arg1: (long)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfDouble$$Type, ...arg1: (double)[]): $MemorySegment
 "allocateArray"(arg0: $MemoryLayout$$Type, arg1: long): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfByte$$Type, ...arg1: (byte)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfShort$$Type, ...arg1: (short)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfChar$$Type, ...arg1: (character)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfFloat$$Type, ...arg1: (float)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfInt$$Type, ...arg1: (integer)[]): $MemorySegment
 "allocateUtf8String"(arg0: string): $MemorySegment
}

export namespace $Arena {
function global(): $Arena
function ofAuto(): $Arena
function ofConfined(): $Arena
function ofShared(): $Arena
function prefixAllocator(arg0: $MemorySegment$$Type): $SegmentAllocator
function slicingAllocator(arg0: $MemorySegment$$Type): $SegmentAllocator
const probejs$$marker: never
}
export class $Arena$$Static implements $Arena {


 "scope"(): $MemorySegment$Scope
 "close"(): void
 "allocate"(arg0: long, arg1: long): $MemorySegment
static "global"(): $Arena
static "ofAuto"(): $Arena
static "ofConfined"(): $Arena
static "ofShared"(): $Arena
static "prefixAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
 "allocate"(arg0: $AddressLayout$$Type, arg1: $MemorySegment$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfDouble$$Type, arg1: double): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfLong$$Type, arg1: long): $MemorySegment
 "allocate"(arg0: long): $MemorySegment
 "allocate"(arg0: $MemoryLayout$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfByte$$Type, arg1: byte): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfChar$$Type, arg1: character): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfShort$$Type, arg1: short): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfFloat$$Type, arg1: float): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfInt$$Type, arg1: integer): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfLong$$Type, ...arg1: (long)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfDouble$$Type, ...arg1: (double)[]): $MemorySegment
 "allocateArray"(arg0: $MemoryLayout$$Type, arg1: long): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfByte$$Type, ...arg1: (byte)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfShort$$Type, ...arg1: (short)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfChar$$Type, ...arg1: (character)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfFloat$$Type, ...arg1: (float)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfInt$$Type, ...arg1: (integer)[]): $MemorySegment
 "allocateUtf8String"(arg0: string): $MemorySegment
static "slicingAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Arena$$Type = ($Arena);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Arena_ = $Arena$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfChar" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfChar extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfChar {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfChar$$Static implements $ValueLayout$OfChar {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfChar$$Type = ($ValueLayout$OfChar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfChar_ = $ValueLayout$OfChar$$Type;
}}
declare module "java.lang.reflect.Executable" {
import {$GenericDeclaration, $GenericDeclaration$$Type} from "java.lang.reflect.GenericDeclaration"
import {$Member, $Member$$Type} from "java.lang.reflect.Member"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AccessibleObject, $AccessibleObject$$Type} from "java.lang.reflect.AccessibleObject"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Parameter, $Parameter$$Type} from "java.lang.reflect.Parameter"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Executable extends $AccessibleObject implements $Member, $GenericDeclaration {


public "getName"(): string
public "getModifiers"(): integer
public "getTypeParameters"(): ($TypeVariable<(any)>)[]
public "getParameterTypes"(): ($Class<(any)>)[]
public "isSynthetic"(): boolean
public "toGenericString"(): string
public "accessFlags"(): $Set<($AccessFlag)>
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isVarArgs"(): boolean
public "getAnnotatedParameterTypes"(): ($AnnotatedType)[]
public "getParameterCount"(): integer
public "getParameterAnnotations"(): (($Annotation)[])[]
public "getGenericParameterTypes"(): ($Type)[]
public "getGenericExceptionTypes"(): ($Type)[]
public "getExceptionTypes"(): ($Class<(any)>)[]
public "getAnnotatedReturnType"(): $AnnotatedType
public "getParameters"(): ($Parameter)[]
public "getAnnotatedReceiverType"(): $AnnotatedType
public "getAnnotatedExceptionTypes"(): ($AnnotatedType)[]
get "name"(): string
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<(any)>)[]
get "parameterTypes"(): ($Class<(any)>)[]
get "synthetic"(): boolean
get "declaringClass"(): $Class<(any)>
get "declaredAnnotations"(): ($Annotation)[]
get "varArgs"(): boolean
get "annotatedParameterTypes"(): ($AnnotatedType)[]
get "parameterCount"(): integer
get "parameterAnnotations"(): (($Annotation)[])[]
get "genericParameterTypes"(): ($Type)[]
get "genericExceptionTypes"(): ($Type)[]
get "exceptionTypes"(): ($Class<(any)>)[]
get "annotatedReturnType"(): $AnnotatedType
get "parameters"(): ($Parameter)[]
get "annotatedReceiverType"(): $AnnotatedType
get "annotatedExceptionTypes"(): ($AnnotatedType)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executable$$Type = ($Executable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Executable_ = $Executable$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Version" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Version implements $Comparable<($ModuleDescriptor$Version)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Version$$Type): integer
public "compareTo"(arg0: any): integer
public static "parse"(arg0: string): $ModuleDescriptor$Version
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Version$$Type = ($ModuleDescriptor$Version);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Version_ = $ModuleDescriptor$Version$$Type;
}}
declare module "java.lang.invoke.TypeDescriptor$OfField" {
import {$TypeDescriptor, $TypeDescriptor$$Type} from "java.lang.invoke.TypeDescriptor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfField<F extends $TypeDescriptor$OfField<(F)>> extends $TypeDescriptor {

 "isArray"(): boolean
 "isPrimitive"(): boolean
 "componentType"(): F
 "arrayType"(): F
 "descriptorString"(): string
get "array"(): boolean
get "primitive"(): boolean
}

export namespace $TypeDescriptor$OfField {
const probejs$$marker: never
}
export class $TypeDescriptor$OfField$$Static<F extends $TypeDescriptor$OfField<(F)>> implements $TypeDescriptor$OfField {


 "isArray"(): boolean
 "isPrimitive"(): boolean
 "componentType"(): F
 "arrayType"(): F
 "descriptorString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$OfField$$Type<F> = ($TypeDescriptor$OfField<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescriptor$OfField_<F> = $TypeDescriptor$OfField$$Type<(F)>;
}}
declare module "java.lang.ref.WeakReference" {
import {$ReferenceQueue, $ReferenceQueue$$Type} from "java.lang.ref.ReferenceQueue"
import {$Reference, $Reference$$Type} from "java.lang.ref.Reference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WeakReference<T> extends $Reference<(T)> {

constructor(arg0: T)
constructor(arg0: T, arg1: $ReferenceQueue$$Type<(T)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakReference$$Type<T> = ($WeakReference<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakReference_<T> = $WeakReference$$Type<(T)>;
}}
declare module "java.lang.constant.ClassDesc" {
import {$ConstantDesc, $ConstantDesc$$Type} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ClassDesc extends $ConstantDesc, $TypeDescriptor$OfField<($ClassDesc)> {

 "equals"(arg0: any): boolean
 "isArray"(): boolean
 "isPrimitive"(): boolean
 "componentType"(): $TypeDescriptor$OfField<(any)>
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "packageName"(): string
 "descriptorString"(): string
 "arrayType"(): $TypeDescriptor$OfField<(any)>
 "arrayType"(arg0: integer): $ClassDesc
 "displayName"(): string
 "isClassOrInterface"(): boolean
 "nested"(arg0: string): $ClassDesc
 "nested"(arg0: string, ...arg1: (string)[]): $ClassDesc
get "array"(): boolean
get "primitive"(): boolean
get "classOrInterface"(): boolean
}

export namespace $ClassDesc {
function of(arg0: string): $ClassDesc
function of(arg0: string, arg1: string): $ClassDesc
function ofDescriptor(arg0: string): $ClassDesc
function ofInternalName(arg0: string): $ClassDesc
const probejs$$marker: never
}
export class $ClassDesc$$Static implements $ClassDesc {


 "equals"(arg0: any): boolean
 "isArray"(): boolean
 "isPrimitive"(): boolean
 "componentType"(): $TypeDescriptor$OfField<(any)>
static "of"(arg0: string): $ClassDesc
static "of"(arg0: string, arg1: string): $ClassDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "packageName"(): string
 "descriptorString"(): string
static "ofDescriptor"(arg0: string): $ClassDesc
 "arrayType"(): $TypeDescriptor$OfField<(any)>
 "arrayType"(arg0: integer): $ClassDesc
 "displayName"(): string
 "isClassOrInterface"(): boolean
static "ofInternalName"(arg0: string): $ClassDesc
 "nested"(arg0: string): $ClassDesc
 "nested"(arg0: string, ...arg1: (string)[]): $ClassDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassDesc$$Type = ($ClassDesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassDesc_ = $ClassDesc$$Type;
}}
declare module "java.lang.reflect.ClassFileFormatVersion" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Runtime$Version, $Runtime$Version$$Type} from "java.lang.Runtime$Version"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ClassFileFormatVersion extends $Enum<($ClassFileFormatVersion)> {
static readonly "RELEASE_15": $ClassFileFormatVersion
static readonly "RELEASE_16": $ClassFileFormatVersion
static readonly "RELEASE_17": $ClassFileFormatVersion
static readonly "RELEASE_18": $ClassFileFormatVersion
static readonly "RELEASE_11": $ClassFileFormatVersion
static readonly "RELEASE_12": $ClassFileFormatVersion
static readonly "RELEASE_13": $ClassFileFormatVersion
static readonly "RELEASE_14": $ClassFileFormatVersion
static readonly "RELEASE_20": $ClassFileFormatVersion
static readonly "RELEASE_10": $ClassFileFormatVersion
static readonly "RELEASE_21": $ClassFileFormatVersion
static readonly "RELEASE_9": $ClassFileFormatVersion
static readonly "RELEASE_8": $ClassFileFormatVersion
static readonly "RELEASE_7": $ClassFileFormatVersion
static readonly "RELEASE_6": $ClassFileFormatVersion
static readonly "RELEASE_5": $ClassFileFormatVersion
static readonly "RELEASE_4": $ClassFileFormatVersion
static readonly "RELEASE_3": $ClassFileFormatVersion
static readonly "RELEASE_2": $ClassFileFormatVersion
static readonly "RELEASE_1": $ClassFileFormatVersion
static readonly "RELEASE_0": $ClassFileFormatVersion
static readonly "RELEASE_19": $ClassFileFormatVersion


public static "values"(): ($ClassFileFormatVersion)[]
public static "valueOf"(arg0: string): $ClassFileFormatVersion
public static "valueOf"(arg0: $Runtime$Version$$Type): $ClassFileFormatVersion
public "major"(): integer
public static "latest"(): $ClassFileFormatVersion
public "runtimeVersion"(): $Runtime$Version
public static "fromMajor"(arg0: integer): $ClassFileFormatVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassFileFormatVersion$$Type = (("release_0") | ("release_1") | ("release_2") | ("release_3") | ("release_4") | ("release_5") | ("release_6") | ("release_7") | ("release_8") | ("release_9") | ("release_10") | ("release_11") | ("release_12") | ("release_13") | ("release_14") | ("release_15") | ("release_16") | ("release_17") | ("release_18") | ("release_19") | ("release_20") | ("release_21"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassFileFormatVersion_ = $ClassFileFormatVersion$$Type;
}}
declare module "java.lang.foreign.MemoryLayout" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemoryLayout {

 "byteSize"(): long
 "byteAlignment"(): long
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "withName"(arg0: string): $MemoryLayout
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $MemoryLayout {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $MemoryLayout$$Static implements $MemoryLayout {


 "byteSize"(): long
 "byteAlignment"(): long
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "withName"(arg0: string): $MemoryLayout
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryLayout$$Type = ($MemoryLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryLayout_ = $MemoryLayout$$Type;
}}
declare module "java.lang.Thread$UncaughtExceptionHandler" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$UncaughtExceptionHandler {

 "uncaughtException"(arg0: $Thread$$Type, arg1: $Throwable$$Type): void

(arg0: $Thread, arg1: $Throwable): void
}

export namespace $Thread$UncaughtExceptionHandler {
const probejs$$marker: never
}
export class $Thread$UncaughtExceptionHandler$$Static implements $Thread$UncaughtExceptionHandler {


 "uncaughtException"(arg0: $Thread$$Type, arg1: $Throwable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$UncaughtExceptionHandler$$Type = ((arg0: $Thread, arg1: $Throwable) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Thread$UncaughtExceptionHandler_ = $Thread$UncaughtExceptionHandler$$Type;
}}
declare module "java.lang.reflect.GenericDeclaration" {
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericDeclaration extends $AnnotatedElement {

 "getTypeParameters"(): ($TypeVariable<(any)>)[]
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
get "typeParameters"(): ($TypeVariable<(any)>)[]
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
}

export namespace $GenericDeclaration {
const probejs$$marker: never
}
export class $GenericDeclaration$$Static implements $GenericDeclaration {


 "getTypeParameters"(): ($TypeVariable<(any)>)[]
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDeclaration$$Type = ($GenericDeclaration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericDeclaration_ = $GenericDeclaration$$Type;
}}
declare module "java.lang.Throwable" {
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$PrintStream, $PrintStream$$Type} from "java.io.PrintStream"
import {$PrintWriter, $PrintWriter$$Type} from "java.io.PrintWriter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Throwable implements $Serializable {

constructor(arg0: $Throwable$$Type)
constructor(arg0: string, arg1: $Throwable$$Type)
constructor(arg0: string)
constructor()

public "printStackTrace"(arg0: $PrintWriter$$Type): void
public "printStackTrace"(): void
public "printStackTrace"(arg0: $PrintStream$$Type): void
public "getStackTrace"(): ($StackTraceElement)[]
public "fillInStackTrace"(): $Throwable
public "getCause"(): $Throwable
public "initCause"(arg0: $Throwable$$Type): $Throwable
public "toString"(): string
public "getMessage"(): string
public "getSuppressed"(): ($Throwable)[]
public "getLocalizedMessage"(): string
public "setStackTrace"(arg0: ($StackTraceElement$$Type)[]): void
public "addSuppressed"(arg0: $Throwable$$Type): void
get "stackTrace"(): ($StackTraceElement)[]
get "cause"(): $Throwable
get "message"(): string
get "suppressed"(): ($Throwable)[]
get "localizedMessage"(): string
set "stackTrace"(value: ($StackTraceElement$$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Throwable$$Type = ($Throwable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Throwable_ = $Throwable$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Opens$Modifier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens$Modifier extends $Enum<($ModuleDescriptor$Opens$Modifier)> {
static readonly "SYNTHETIC": $ModuleDescriptor$Opens$Modifier
static readonly "MANDATED": $ModuleDescriptor$Opens$Modifier


public static "values"(): ($ModuleDescriptor$Opens$Modifier)[]
public static "valueOf"(arg0: string): $ModuleDescriptor$Opens$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Opens$Modifier$$Type = (("synthetic") | ("mandated"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Opens$Modifier_ = $ModuleDescriptor$Opens$Modifier$$Type;
}}
declare module "java.lang.constant.DynamicConstantDesc" {
import {$ConstantDesc, $ConstantDesc$$Type} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$List, $List$$Type} from "java.util.List"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$DirectMethodHandleDesc, $DirectMethodHandleDesc$$Type} from "java.lang.constant.DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DynamicConstantDesc<T> implements $ConstantDesc {


public "constantName"(): string
public "bootstrapArgs"(): ($ConstantDesc)[]
public static "ofCanonical"<T>(arg0: $DirectMethodHandleDesc$$Type, arg1: string, arg2: $ClassDesc$$Type, arg3: ($ConstantDesc$$Type)[]): $ConstantDesc
public "bootstrapArgsList"(): $List<($ConstantDesc)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<T>(arg0: $DirectMethodHandleDesc$$Type): $DynamicConstantDesc<(T)>
public static "of"<T>(arg0: $DirectMethodHandleDesc$$Type, ...arg1: ($ConstantDesc$$Type)[]): $DynamicConstantDesc<(T)>
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): T
public "bootstrapMethod"(): $DirectMethodHandleDesc
public static "ofNamed"<T>(arg0: $DirectMethodHandleDesc$$Type, arg1: string, arg2: $ClassDesc$$Type, ...arg3: ($ConstantDesc$$Type)[]): $DynamicConstantDesc<(T)>
public "constantType"(): $ClassDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicConstantDesc$$Type<T> = ($DynamicConstantDesc<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicConstantDesc_<T> = $DynamicConstantDesc$$Type<(T)>;
}}
declare module "java.lang.RuntimeException" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RuntimeException extends $Exception {

constructor(arg0: $Throwable$$Type)
constructor(arg0: string, arg1: $Throwable$$Type)
constructor(arg0: string)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuntimeException$$Type = ($RuntimeException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuntimeException_ = $RuntimeException$$Type;
}}
declare module "java.lang.Record" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Record {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Record$$Type = ($Record);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Record_ = $Record$$Type;
}}
declare module "java.lang.reflect.AnnotatedType" {
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedType extends $AnnotatedElement {

 "getAnnotatedOwnerType"(): $AnnotatedType
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
 "getType"(): $Type
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
get "annotatedOwnerType"(): $AnnotatedType
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $Type
}

export namespace $AnnotatedType {
const probejs$$marker: never
}
export class $AnnotatedType$$Static implements $AnnotatedType {


 "getAnnotatedOwnerType"(): $AnnotatedType
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
 "getType"(): $Type
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedType$$Type = ($AnnotatedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedType_ = $AnnotatedType$$Type;
}}
declare module "java.lang.Readable" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Readable {

 "read"(arg0: $CharBuffer$$Type): integer

(arg0: $CharBuffer): integer
}

export namespace $Readable {
const probejs$$marker: never
}
export class $Readable$$Static implements $Readable {


 "read"(arg0: $CharBuffer$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Readable$$Type = ((arg0: $CharBuffer) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Readable_ = $Readable$$Type;
}}
declare module "java.lang.reflect.AccessFlag$Location" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessFlag$Location extends $Enum<($AccessFlag$Location)> {
static readonly "MODULE": $AccessFlag$Location
static readonly "MODULE_EXPORTS": $AccessFlag$Location
static readonly "FIELD": $AccessFlag$Location
static readonly "METHOD_PARAMETER": $AccessFlag$Location
static readonly "MODULE_REQUIRES": $AccessFlag$Location
static readonly "METHOD": $AccessFlag$Location
static readonly "MODULE_OPENS": $AccessFlag$Location
static readonly "CLASS": $AccessFlag$Location
static readonly "INNER_CLASS": $AccessFlag$Location


public static "values"(): ($AccessFlag$Location)[]
public static "valueOf"(arg0: string): $AccessFlag$Location
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFlag$Location$$Type = (("class") | ("field") | ("method") | ("inner_class") | ("method_parameter") | ("module") | ("module_requires") | ("module_exports") | ("module_opens"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessFlag$Location_ = $AccessFlag$Location$$Type;
}}
declare module "java.lang.constant.Constable" {
import {$ConstantDesc, $ConstantDesc$$Type} from "java.lang.constant.ConstantDesc"
import {$Optional, $Optional$$Type} from "java.util.Optional"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constable {

 "describeConstable"(): $Optional<($ConstantDesc)>

(): $Optional$$Type<($ConstantDesc$$Type)>
}

export namespace $Constable {
const probejs$$marker: never
}
export class $Constable$$Static implements $Constable {


 "describeConstable"(): $Optional<($ConstantDesc)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constable$$Type = (() => $Optional$$Type<($ConstantDesc$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constable_ = $Constable$$Type;
}}
declare module "java.lang.reflect.Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Type {

 "getTypeName"(): string
get "typeName"(): string
}

export namespace $Type {
const probejs$$marker: never
}
export class $Type$$Static implements $Type {


 "getTypeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$$Type = ($Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type_ = $Type$$Type;
}}
declare module "java.lang.Enum" {
import {$Constable, $Constable$$Type} from "java.lang.constant.Constable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Enum$EnumDesc, $Enum$EnumDesc$$Type} from "java.lang.Enum$EnumDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum<E extends $Enum<(E)>> implements $Constable, $Comparable<(E)>, $Serializable {


public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: E): integer
public static "valueOf"<T extends $Enum<(T)>>(arg0: $Class$$Type<(T)>, arg1: string): T
public "describeConstable"(): $Optional<($Enum$EnumDesc<(E)>)>
public "getDeclaringClass"(): $Class<(E)>
public "ordinal"(): integer
get "declaringClass"(): $Class<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enum$$Type<E> = ($Enum<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Enum_<E> = $Enum$$Type<(E)>;
}}
declare module "java.lang.foreign.ValueLayout$OfByte" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfByte extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfByte {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfByte$$Static implements $ValueLayout$OfByte {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfByte$$Type = ($ValueLayout$OfByte);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfByte_ = $ValueLayout$OfByte$$Type;
}}
declare module "java.lang.reflect.AnnotatedElement" {
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedElement {

 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
}

export namespace $AnnotatedElement {
const probejs$$marker: never
}
export class $AnnotatedElement$$Static implements $AnnotatedElement {


 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedElement$$Type = ($AnnotatedElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedElement_ = $AnnotatedElement$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Exports$Modifier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports$Modifier extends $Enum<($ModuleDescriptor$Exports$Modifier)> {
static readonly "SYNTHETIC": $ModuleDescriptor$Exports$Modifier
static readonly "MANDATED": $ModuleDescriptor$Exports$Modifier


public static "values"(): ($ModuleDescriptor$Exports$Modifier)[]
public static "valueOf"(arg0: string): $ModuleDescriptor$Exports$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Exports$Modifier$$Type = (("synthetic") | ("mandated"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Exports$Modifier_ = $ModuleDescriptor$Exports$Modifier$$Type;
}}
declare module "java.lang.Thread$State" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread$State extends $Enum<($Thread$State)> {
static readonly "NEW": $Thread$State
static readonly "TERMINATED": $Thread$State
static readonly "RUNNABLE": $Thread$State
static readonly "BLOCKED": $Thread$State
static readonly "WAITING": $Thread$State
static readonly "TIMED_WAITING": $Thread$State


public static "values"(): ($Thread$State)[]
public static "valueOf"(arg0: string): $Thread$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$State$$Type = (("new") | ("runnable") | ("blocked") | ("waiting") | ("timed_waiting") | ("terminated"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Thread$State_ = $Thread$State$$Type;
}}
declare module "java.lang.Runnable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Runnable {

 "run"(): void

(): void
}

export namespace $Runnable {
const probejs$$marker: never
}
export class $Runnable$$Static implements $Runnable {


 "run"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Runnable$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Runnable_ = $Runnable$$Type;
}}
declare module "java.lang.annotation.ElementType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ElementType extends $Enum<($ElementType)> {
static readonly "ANNOTATION_TYPE": $ElementType
static readonly "MODULE": $ElementType
static readonly "LOCAL_VARIABLE": $ElementType
static readonly "FIELD": $ElementType
static readonly "PACKAGE": $ElementType
static readonly "TYPE_PARAMETER": $ElementType
static readonly "METHOD": $ElementType
static readonly "RECORD_COMPONENT": $ElementType
static readonly "TYPE_USE": $ElementType
static readonly "CONSTRUCTOR": $ElementType
static readonly "TYPE": $ElementType
static readonly "PARAMETER": $ElementType


public static "values"(): ($ElementType)[]
public static "valueOf"(arg0: string): $ElementType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementType$$Type = (("type") | ("field") | ("method") | ("parameter") | ("constructor") | ("local_variable") | ("annotation_type") | ("package") | ("type_parameter") | ("type_use") | ("module") | ("record_component"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementType_ = $ElementType$$Type;
}}
declare module "java.lang.ref.ReferenceQueue" {
import {$Reference, $Reference$$Type} from "java.lang.ref.Reference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ReferenceQueue<T> {

constructor()

public "remove"(): $Reference<(T)>
public "remove"(arg0: long): $Reference<(T)>
public "poll"(): $Reference<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceQueue$$Type<T> = ($ReferenceQueue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceQueue_<T> = $ReferenceQueue$$Type<(T)>;
}}
declare module "java.lang.reflect.TypeVariable" {
import {$GenericDeclaration, $GenericDeclaration$$Type} from "java.lang.reflect.GenericDeclaration"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeVariable<D extends $GenericDeclaration> extends $Type, $AnnotatedElement {

 "getName"(): string
 "getBounds"(): ($Type)[]
 "getGenericDeclaration"(): D
 "getAnnotatedBounds"(): ($AnnotatedType)[]
 "getTypeName"(): string
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
get "name"(): string
get "bounds"(): ($Type)[]
get "genericDeclaration"(): D
get "annotatedBounds"(): ($AnnotatedType)[]
get "typeName"(): string
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
}

export namespace $TypeVariable {
const probejs$$marker: never
}
export class $TypeVariable$$Static<D extends $GenericDeclaration> implements $TypeVariable {


 "getName"(): string
 "getBounds"(): ($Type)[]
 "getGenericDeclaration"(): D
 "getAnnotatedBounds"(): ($AnnotatedType)[]
 "getTypeName"(): string
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeVariable$$Type<D> = ($TypeVariable<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeVariable_<D> = $TypeVariable$$Type<(D)>;
}}
declare module "java.lang.constant.MethodHandleDesc" {
import {$ConstantDesc, $ConstantDesc$$Type} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$DirectMethodHandleDesc$Kind, $DirectMethodHandleDesc$Kind$$Type} from "java.lang.constant.DirectMethodHandleDesc$Kind"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$MethodTypeDesc, $MethodTypeDesc$$Type} from "java.lang.constant.MethodTypeDesc"
import {$DirectMethodHandleDesc, $DirectMethodHandleDesc$$Type} from "java.lang.constant.DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleDesc extends $ConstantDesc {

 "equals"(arg0: any): boolean
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "asType"(arg0: $MethodTypeDesc$$Type): $MethodHandleDesc
 "invocationType"(): $MethodTypeDesc
}

export namespace $MethodHandleDesc {
function of(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: string): $DirectMethodHandleDesc
function ofField(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $ClassDesc$$Type): $DirectMethodHandleDesc
function ofMethod(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
function ofConstructor(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $DirectMethodHandleDesc
const probejs$$marker: never
}
export class $MethodHandleDesc$$Static implements $MethodHandleDesc {


 "equals"(arg0: any): boolean
static "of"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: string): $DirectMethodHandleDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "asType"(arg0: $MethodTypeDesc$$Type): $MethodHandleDesc
static "ofField"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: string, arg3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
 "invocationType"(): $MethodTypeDesc
static "ofConstructor"(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $DirectMethodHandleDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandleDesc$$Type = ($MethodHandleDesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodHandleDesc_ = $MethodHandleDesc$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfInt" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfInt extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfInt {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfInt$$Static implements $ValueLayout$OfInt {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfInt$$Type = ($ValueLayout$OfInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfInt_ = $ValueLayout$OfInt$$Type;
}}
declare module "java.lang.foreign.PaddingLayout" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PaddingLayout extends $MemoryLayout {

 "withByteAlignment"(arg0: long): $PaddingLayout
 "withoutName"(): $MemoryLayout
 "withName"(arg0: string): $MemoryLayout
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $PaddingLayout {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $PaddingLayout$$Static implements $PaddingLayout {


 "withByteAlignment"(arg0: long): $PaddingLayout
 "withoutName"(): $MemoryLayout
 "withName"(arg0: string): $MemoryLayout
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaddingLayout$$Type = ($PaddingLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaddingLayout_ = $PaddingLayout$$Type;
}}
declare module "java.lang.foreign.AddressLayout" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AddressLayout extends $ValueLayout {

 "withByteAlignment"(arg0: long): $AddressLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "withTargetLayout"(arg0: $MemoryLayout$$Type): $AddressLayout
 "withoutTargetLayout"(): $AddressLayout
 "targetLayout"(): $Optional<($MemoryLayout)>
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $AddressLayout {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $AddressLayout$$Static implements $AddressLayout {


 "withByteAlignment"(arg0: long): $AddressLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "withTargetLayout"(arg0: $MemoryLayout$$Type): $AddressLayout
 "withoutTargetLayout"(): $AddressLayout
 "targetLayout"(): $Optional<($MemoryLayout)>
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddressLayout$$Type = ($AddressLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddressLayout_ = $AddressLayout$$Type;
}}
declare module "java.lang.ThreadGroup" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadGroup implements $Thread$UncaughtExceptionHandler {

constructor(arg0: string)
constructor(arg0: $ThreadGroup$$Type, arg1: string)

public "getName"(): string
public "interrupt"(): void
public "toString"(): string
public "list"(): void
public "getParent"(): $ThreadGroup
/**
 * 
 * @deprecated
 */
public "checkAccess"(): void
/**
 * 
 * @deprecated
 */
public "setDaemon"(arg0: boolean): void
public "getMaxPriority"(): integer
/**
 * 
 * @deprecated
 */
public "isDaemon"(): boolean
public "activeCount"(): integer
public "enumerate"(arg0: ($ThreadGroup$$Type)[]): integer
public "enumerate"(arg0: ($ThreadGroup$$Type)[], arg1: boolean): integer
public "enumerate"(arg0: ($Thread$$Type)[]): integer
public "enumerate"(arg0: ($Thread$$Type)[], arg1: boolean): integer
public "uncaughtException"(arg0: $Thread$$Type, arg1: $Throwable$$Type): void
/**
 * 
 * @deprecated
 */
public "stop"(): void
/**
 * 
 * @deprecated
 */
public "suspend"(): void
/**
 * 
 * @deprecated
 */
public "resume"(): void
public "parentOf"(arg0: $ThreadGroup$$Type): boolean
public "activeGroupCount"(): integer
public "setMaxPriority"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "isDestroyed"(): boolean
/**
 * 
 * @deprecated
 */
public "destroy"(): void
get "name"(): string
get "parent"(): $ThreadGroup
set "daemon"(value: boolean)
get "maxPriority"(): integer
get "daemon"(): boolean
set "maxPriority"(value: integer)
get "destroyed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadGroup$$Type = ($ThreadGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadGroup_ = $ThreadGroup$$Type;
}}
declare module "java.lang.Module" {
import {$ModuleDescriptor, $ModuleDescriptor$$Type} from "java.lang.module.ModuleDescriptor"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$ModuleLayer, $ModuleLayer$$Type} from "java.lang.ModuleLayer"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Module implements $AnnotatedElement {


public "getName"(): string
public "toString"(): string
public "addReads"(arg0: $Module$$Type): $Module
public "addExports"(arg0: string, arg1: $Module$$Type): $Module
public "addOpens"(arg0: string, arg1: $Module$$Type): $Module
public "addUses"(arg0: $Class$$Type<(any)>): $Module
public "getClassLoader"(): $ClassLoader
public "getDescriptor"(): $ModuleDescriptor
public "isNamed"(): boolean
public "getResourceAsStream"(arg0: string): $InputStream
public "isOpen"(arg0: string): boolean
public "isOpen"(arg0: string, arg1: $Module$$Type): boolean
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getPackages"(): $Set<(string)>
public "isNativeAccessEnabled"(): boolean
public "canRead"(arg0: $Module$$Type): boolean
public "canUse"(arg0: $Class$$Type<(any)>): boolean
public "getLayer"(): $ModuleLayer
public "isExported"(arg0: string): boolean
public "isExported"(arg0: string, arg1: $Module$$Type): boolean
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
get "name"(): string
get "classLoader"(): $ClassLoader
get "descriptor"(): $ModuleDescriptor
get "named"(): boolean
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "packages"(): $Set<(string)>
get "nativeAccessEnabled"(): boolean
get "layer"(): $ModuleLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$$Type = ($Module);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Module_ = $Module$$Type;
}}
declare module "java.lang.Thread" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Thread$Builder$OfVirtual, $Thread$Builder$OfVirtual$$Type} from "java.lang.Thread$Builder$OfVirtual"
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Thread$State, $Thread$State$$Type} from "java.lang.Thread$State"
import {$ThreadGroup, $ThreadGroup$$Type} from "java.lang.ThreadGroup"
import {$Thread$Builder$OfPlatform, $Thread$Builder$OfPlatform$$Type} from "java.lang.Thread$Builder$OfPlatform"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread implements $Runnable {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor()
constructor(arg0: $Runnable$$Type)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type, arg2: string, arg3: long, arg4: boolean)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type, arg2: string, arg3: long)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type, arg2: string)
constructor(arg0: $Runnable$$Type, arg1: string)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type)
constructor(arg0: string)
constructor(arg0: $ThreadGroup$$Type, arg1: string)

public "getName"(): string
public "getStackTrace"(): ($StackTraceElement)[]
public "run"(): void
public "interrupt"(): void
public "toString"(): string
public static "currentThread"(): $Thread
public static "onSpinWait"(): void
public "isVirtual"(): boolean
public "join"(arg0: long): void
public "join"(arg0: long, arg1: integer): void
public "join"(): void
public "join"(arg0: $Duration$$Type): boolean
public "setContextClassLoader"(arg0: $ClassLoader$$Type): void
public "getThreadGroup"(): $ThreadGroup
/**
 * 
 * @deprecated
 */
public "checkAccess"(): void
public static "dumpStack"(): void
public "setPriority"(arg0: integer): void
public "setDaemon"(arg0: boolean): void
public "start"(): void
public "getContextClassLoader"(): $ClassLoader
public "getPriority"(): integer
public "isDaemon"(): boolean
public static "interrupted"(): boolean
public static "activeCount"(): integer
public static "enumerate"(arg0: ($Thread$$Type)[]): integer
public "isAlive"(): boolean
public "threadId"(): long
public static "setDefaultUncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): void
public "getUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public static "yield"(): void
public static "sleep"(arg0: long, arg1: integer): void
public static "sleep"(arg0: $Duration$$Type): void
public static "sleep"(arg0: long): void
public static "ofPlatform"(): $Thread$Builder$OfPlatform
public static "ofVirtual"(): $Thread$Builder$OfVirtual
public static "startVirtualThread"(arg0: $Runnable$$Type): $Thread
/**
 * 
 * @deprecated
 */
public "stop"(): void
public "isInterrupted"(): boolean
/**
 * 
 * @deprecated
 */
public "suspend"(): void
/**
 * 
 * @deprecated
 */
public "resume"(): void
public "setName"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "countStackFrames"(): integer
public static "holdsLock"(arg0: any): boolean
public static "getAllStackTraces"(): $Map<($Thread), (($StackTraceElement)[])>
/**
 * 
 * @deprecated
 */
public "getId"(): long
public "getState"(): $Thread$State
public static "getDefaultUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public "setUncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): void
get "name"(): string
get "stackTrace"(): ($StackTraceElement)[]
get "virtual"(): boolean
set "contextClassLoader"(value: $ClassLoader$$Type)
get "threadGroup"(): $ThreadGroup
set "priority"(value: integer)
set "daemon"(value: boolean)
get "contextClassLoader"(): $ClassLoader
get "priority"(): integer
get "daemon"(): boolean
get "alive"(): boolean
get "uncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
set "name"(value: string)
get "id"(): long
get "state"(): $Thread$State
set "uncaughtExceptionHandler"(value: $Thread$UncaughtExceptionHandler$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$$Type = ($Thread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Thread_ = $Thread$$Type;
}}
declare module "java.lang.reflect.Parameter" {
import {$Executable, $Executable$$Type} from "java.lang.reflect.Executable"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Parameter implements $AnnotatedElement {


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "isSynthetic"(): boolean
public "accessFlags"(): $Set<($AccessFlag)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getType"(): $Class<(any)>
public "getAnnotatedType"(): $AnnotatedType
public "getParameterizedType"(): $Type
public "isVarArgs"(): boolean
public "isNamePresent"(): boolean
public "getDeclaringExecutable"(): $Executable
public "isImplicit"(): boolean
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
get "name"(): string
get "modifiers"(): integer
get "synthetic"(): boolean
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $Class<(any)>
get "annotatedType"(): $AnnotatedType
get "parameterizedType"(): $Type
get "varArgs"(): boolean
get "namePresent"(): boolean
get "declaringExecutable"(): $Executable
get "implicit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parameter$$Type = ($Parameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parameter_ = $Parameter$$Type;
}}
declare module "java.lang.AbstractStringBuilder" {
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractStringBuilder implements $Appendable, charseq {


public "append"(arg0: charseq): $Appendable
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
public "append"(arg0: character): $Appendable
public "length"(): integer
public "toString"(): string
public static "compare"(arg0: charseq, arg1: charseq): integer
public "charAt"(arg0: integer): character
public "isEmpty"(): boolean
public "codePoints"(): $IntStream
public "subSequence"(arg0: integer, arg1: integer): charseq
public "chars"(): $IntStream
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStringBuilder$$Type = ($AbstractStringBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStringBuilder_ = $AbstractStringBuilder$$Type;
}}
declare module "java.lang.Cloneable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cloneable {

}

export namespace $Cloneable {
const probejs$$marker: never
}
export class $Cloneable$$Static implements $Cloneable {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cloneable$$Type = ($Cloneable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cloneable_ = $Cloneable$$Type;
}}
declare module "java.lang.ClassLoader" {
import {$Package, $Package$$Type} from "java.lang.Package"
import {$URL, $URL$$Type} from "java.net.URL"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"
import {$Module, $Module$$Type} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ClassLoader {


public "getName"(): string
public "loadClass"(arg0: string): $Class<(any)>
public static "getPlatformClassLoader"(): $ClassLoader
public static "getSystemClassLoader"(): $ClassLoader
public static "getSystemResourceAsStream"(arg0: string): $InputStream
public "getResourceAsStream"(arg0: string): $InputStream
public static "getSystemResource"(arg0: string): $URL
public "getResource"(arg0: string): $URL
public "getResources"(arg0: string): $Enumeration<($URL)>
public "getDefinedPackage"(arg0: string): $Package
public "resources"(arg0: string): $Stream<($URL)>
public "isRegisteredAsParallelCapable"(): boolean
public static "getSystemResources"(arg0: string): $Enumeration<($URL)>
public "getParent"(): $ClassLoader
public "getUnnamedModule"(): $Module
public "getDefinedPackages"(): ($Package)[]
public "setDefaultAssertionStatus"(arg0: boolean): void
public "setPackageAssertionStatus"(arg0: string, arg1: boolean): void
public "setClassAssertionStatus"(arg0: string, arg1: boolean): void
public "clearAssertionStatus"(): void
get "name"(): string
get "registeredAsParallelCapable"(): boolean
get "parent"(): $ClassLoader
get "unnamedModule"(): $Module
get "definedPackages"(): ($Package)[]
set "defaultAssertionStatus"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassLoader$$Type = ($ClassLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassLoader_ = $ClassLoader$$Type;
}}
declare module "java.lang.module.ModuleDescriptor" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ModuleDescriptor$Version, $ModuleDescriptor$Version$$Type} from "java.lang.module.ModuleDescriptor$Version"
import {$ModuleDescriptor$Exports, $ModuleDescriptor$Exports$$Type} from "java.lang.module.ModuleDescriptor$Exports"
import {$ModuleDescriptor$Requires, $ModuleDescriptor$Requires$$Type} from "java.lang.module.ModuleDescriptor$Requires"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"
import {$ModuleDescriptor$Opens, $ModuleDescriptor$Opens$$Type} from "java.lang.module.ModuleDescriptor$Opens"
import {$ModuleDescriptor$Provides, $ModuleDescriptor$Provides$$Type} from "java.lang.module.ModuleDescriptor$Provides"
import {$ModuleDescriptor$Modifier, $ModuleDescriptor$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Modifier"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModuleDescriptor$Builder, $ModuleDescriptor$Builder$$Type} from "java.lang.module.ModuleDescriptor$Builder"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor implements $Comparable<($ModuleDescriptor)> {


public "modifiers"(): $Set<($ModuleDescriptor$Modifier)>
public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): $Optional<($ModuleDescriptor$Version)>
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$$Type): integer
public "compareTo"(arg0: any): integer
public "packages"(): $Set<(string)>
public "isOpen"(): boolean
public "accessFlags"(): $Set<($AccessFlag)>
public static "read"(arg0: $InputStream$$Type, arg1: $Supplier$$Type<($Set$$Type<(string)>)>): $ModuleDescriptor
public static "read"(arg0: $InputStream$$Type): $ModuleDescriptor
public static "read"(arg0: $ByteBuffer$$Type, arg1: $Supplier$$Type<($Set$$Type<(string)>)>): $ModuleDescriptor
public static "read"(arg0: $ByteBuffer$$Type): $ModuleDescriptor
public "exports"(): $Set<($ModuleDescriptor$Exports)>
public "opens"(): $Set<($ModuleDescriptor$Opens)>
public "isAutomatic"(): boolean
public "uses"(): $Set<(string)>
public "provides"(): $Set<($ModuleDescriptor$Provides)>
public "requires"(): $Set<($ModuleDescriptor$Requires)>
public "mainClass"(): $Optional<(string)>
public "toNameAndVersion"(): string
public "rawVersion"(): $Optional<(string)>
public static "newModule"(arg0: string, arg1: $Set$$Type<($ModuleDescriptor$Modifier$$Type)>): $ModuleDescriptor$Builder
public static "newModule"(arg0: string): $ModuleDescriptor$Builder
public static "newOpenModule"(arg0: string): $ModuleDescriptor$Builder
public static "newAutomaticModule"(arg0: string): $ModuleDescriptor$Builder
get "open"(): boolean
get "automatic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$$Type = ($ModuleDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor_ = $ModuleDescriptor$$Type;
}}
declare module "java.lang.reflect.RecordComponent" {
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RecordComponent implements $AnnotatedElement {


public "getName"(): string
public "toString"(): string
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getGenericSignature"(): string
public "getGenericType"(): $Type
public "getType"(): $Class<(any)>
public "getAnnotatedType"(): $AnnotatedType
public "getDeclaringRecord"(): $Class<(any)>
public "getAccessor"(): $Method
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
get "name"(): string
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "genericSignature"(): string
get "genericType"(): $Type
get "type"(): $Class<(any)>
get "annotatedType"(): $AnnotatedType
get "declaringRecord"(): $Class<(any)>
get "accessor"(): $Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordComponent$$Type = ($RecordComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordComponent_ = $RecordComponent$$Type;
}}
declare module "java.lang.ref.Reference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reference<T> {


public "get"(): T
public "clear"(): void
public static "reachabilityFence"(arg0: any): void
public "enqueue"(): boolean
public "refersTo"(arg0: T): boolean
/**
 * 
 * @deprecated
 */
public "isEnqueued"(): boolean
get "enqueued"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$$Type<T> = ($Reference<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reference_<T> = $Reference$$Type<(T)>;
}}
declare module "java.lang.constant.DirectMethodHandleDesc$Kind" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DirectMethodHandleDesc$Kind extends $Enum<($DirectMethodHandleDesc$Kind)> {
static readonly "INTERFACE_SPECIAL": $DirectMethodHandleDesc$Kind
readonly "refKind": integer
static readonly "SETTER": $DirectMethodHandleDesc$Kind
static readonly "SPECIAL": $DirectMethodHandleDesc$Kind
static readonly "STATIC": $DirectMethodHandleDesc$Kind
static readonly "GETTER": $DirectMethodHandleDesc$Kind
static readonly "STATIC_GETTER": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_VIRTUAL": $DirectMethodHandleDesc$Kind
static readonly "STATIC_SETTER": $DirectMethodHandleDesc$Kind
static readonly "CONSTRUCTOR": $DirectMethodHandleDesc$Kind
readonly "isInterface": boolean
static readonly "INTERFACE_STATIC": $DirectMethodHandleDesc$Kind
static readonly "VIRTUAL": $DirectMethodHandleDesc$Kind


public static "values"(): ($DirectMethodHandleDesc$Kind)[]
public static "valueOf"(arg0: integer, arg1: boolean): $DirectMethodHandleDesc$Kind
public static "valueOf"(arg0: string): $DirectMethodHandleDesc$Kind
public static "valueOf"(arg0: integer): $DirectMethodHandleDesc$Kind
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectMethodHandleDesc$Kind$$Type = (("static") | ("interface_static") | ("virtual") | ("interface_virtual") | ("special") | ("interface_special") | ("constructor") | ("getter") | ("setter") | ("static_getter") | ("static_setter"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectMethodHandleDesc$Kind_ = $DirectMethodHandleDesc$Kind$$Type;
}}
declare module "java.lang.Iterable" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Iterable<T> {

 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void

(): $Iterator$$Type<(T)>
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $Iterable {
const probejs$$marker: never
}
export class $Iterable$$Static<T> implements $Iterable {


 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Iterable$$Type<T> = ((T)[]) | (() => $Iterator$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Iterable_<T> = $Iterable$$Type<(T)>;
}}
declare module "java.lang.StringBuilder" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$AbstractStringBuilder, $AbstractStringBuilder$$Type} from "java.lang.AbstractStringBuilder"

export class $StringBuilder extends $AbstractStringBuilder implements $Appendable, $Serializable, $Comparable<($StringBuilder)>, charseq {

constructor(arg0: charseq)
constructor(arg0: string)
constructor(arg0: integer)
constructor()

public "length"(): integer
public "toString"(): string
public "append"(arg0: $StringBuffer$$Type): $AbstractStringBuilder
public "append"(arg0: charseq): $AbstractStringBuilder
public "append"(arg0: charseq, arg1: integer, arg2: integer): $AbstractStringBuilder
public "append"(arg0: (character)[]): $AbstractStringBuilder
public "append"(arg0: string): $AbstractStringBuilder
public "append"(arg0: any): $AbstractStringBuilder
public "append"(arg0: character): $Appendable
public "append"(arg0: integer): $AbstractStringBuilder
public "append"(arg0: long): $AbstractStringBuilder
public "append"(arg0: float): $AbstractStringBuilder
public "append"(arg0: double): $AbstractStringBuilder
public "append"(arg0: boolean): $AbstractStringBuilder
public "append"(arg0: (character)[], arg1: integer, arg2: integer): $AbstractStringBuilder
public "reverse"(): $StringBuilder
public "getChars"(arg0: integer, arg1: integer, arg2: (character)[], arg3: integer): void
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $StringBuilder$$Type): integer
public "indexOf"(arg0: string, arg1: integer): integer
public "indexOf"(arg0: string): integer
public "insert"(arg0: integer, arg1: charseq): $StringBuilder
public "insert"(arg0: integer, arg1: string): $StringBuilder
public "insert"(arg0: integer, arg1: (character)[]): $StringBuilder
public "insert"(arg0: integer, arg1: any): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: integer): $StringBuilder
public "insert"(arg0: integer, arg1: double): $StringBuilder
public "insert"(arg0: integer, arg1: float): $StringBuilder
public "insert"(arg0: integer, arg1: long): $StringBuilder
public "insert"(arg0: integer, arg1: character): $StringBuilder
public "insert"(arg0: integer, arg1: boolean): $StringBuilder
public "insert"(arg0: integer, arg1: charseq, arg2: integer, arg3: integer): $StringBuilder
public "charAt"(arg0: integer): character
public "codePointAt"(arg0: integer): integer
public "codePointBefore"(arg0: integer): integer
public "codePointCount"(arg0: integer, arg1: integer): integer
public "offsetByCodePoints"(arg0: integer, arg1: integer): integer
public "lastIndexOf"(arg0: string, arg1: integer): integer
public "lastIndexOf"(arg0: string): integer
public "substring"(arg0: integer): string
public "substring"(arg0: integer, arg1: integer): string
public "replace"(arg0: integer, arg1: integer, arg2: string): $StringBuilder
public "repeat"(arg0: charseq, arg1: integer): $StringBuilder
public "repeat"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "codePoints"(): $IntStream
public "subSequence"(arg0: integer, arg1: integer): charseq
public "chars"(): $IntStream
public "delete"(arg0: integer, arg1: integer): $StringBuilder
public "setLength"(arg0: integer): void
public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "setCharAt"(arg0: integer, arg1: character): void
public "appendCodePoint"(arg0: integer): $AbstractStringBuilder
public "deleteCharAt"(arg0: integer): $StringBuilder
public static "compare"(arg0: charseq, arg1: charseq): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringBuilder$$Type = ($StringBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringBuilder_ = $StringBuilder$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Opens" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ModuleDescriptor$Opens$Modifier, $ModuleDescriptor$Opens$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Opens$Modifier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens implements $Comparable<($ModuleDescriptor$Opens)> {


public "modifiers"(): $Set<($ModuleDescriptor$Opens$Modifier)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Opens$$Type): integer
public "compareTo"(arg0: any): integer
public "accessFlags"(): $Set<($AccessFlag)>
public "source"(): string
public "isQualified"(): boolean
public "targets"(): $Set<(string)>
get "qualified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Opens$$Type = ($ModuleDescriptor$Opens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Opens_ = $ModuleDescriptor$Opens$$Type;
}}
declare module "java.lang.foreign.MemoryLayout$PathElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemoryLayout$PathElement {

}

export namespace $MemoryLayout$PathElement {
function sequenceElement(arg0: long): $MemoryLayout$PathElement
function sequenceElement(): $MemoryLayout$PathElement
function sequenceElement(arg0: long, arg1: long): $MemoryLayout$PathElement
function groupElement(arg0: string): $MemoryLayout$PathElement
function groupElement(arg0: long): $MemoryLayout$PathElement
function dereferenceElement(): $MemoryLayout$PathElement
const probejs$$marker: never
}
export class $MemoryLayout$PathElement$$Static implements $MemoryLayout$PathElement {


static "sequenceElement"(arg0: long): $MemoryLayout$PathElement
static "sequenceElement"(): $MemoryLayout$PathElement
static "sequenceElement"(arg0: long, arg1: long): $MemoryLayout$PathElement
static "groupElement"(arg0: string): $MemoryLayout$PathElement
static "groupElement"(arg0: long): $MemoryLayout$PathElement
static "dereferenceElement"(): $MemoryLayout$PathElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryLayout$PathElement$$Type = ($MemoryLayout$PathElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryLayout$PathElement_ = $MemoryLayout$PathElement$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfLong" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfLong extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfLong {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfLong$$Static implements $ValueLayout$OfLong {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfLong$$Type = ($ValueLayout$OfLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfLong_ = $ValueLayout$OfLong$$Type;
}}
declare module "java.lang.Thread$Builder$OfVirtual" {
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Thread$Builder, $Thread$Builder$$Type} from "java.lang.Thread$Builder"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$Builder$OfVirtual extends $Thread$Builder {

 "name"(arg0: string, arg1: long): $Thread$Builder
 "name"(arg0: string): $Thread$Builder
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder$OfVirtual
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "unstarted"(arg0: $Runnable$$Type): $Thread
}

export namespace $Thread$Builder$OfVirtual {
const probejs$$marker: never
}
export class $Thread$Builder$OfVirtual$$Static implements $Thread$Builder$OfVirtual {


 "name"(arg0: string, arg1: long): $Thread$Builder
 "name"(arg0: string): $Thread$Builder
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder$OfVirtual
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "unstarted"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$Builder$OfVirtual$$Type = ($Thread$Builder$OfVirtual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Thread$Builder$OfVirtual_ = $Thread$Builder$OfVirtual$$Type;
}}
declare module "java.lang.AutoCloseable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AutoCloseable {

 "close"(): void

(): void
}

export namespace $AutoCloseable {
const probejs$$marker: never
}
export class $AutoCloseable$$Static implements $AutoCloseable {


 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCloseable$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCloseable_ = $AutoCloseable$$Type;
}}
declare module "java.lang.reflect.Constructor" {
import {$Executable, $Executable$$Type} from "java.lang.reflect.Executable"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Constructor<T> extends $Executable {


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getTypeParameters"(): ($TypeVariable<($Constructor<(T)>)>)[]
public "newInstance"(...arg0: (any)[]): T
public "getParameterTypes"(): ($Class<(any)>)[]
public "isSynthetic"(): boolean
public "toGenericString"(): string
public "getDeclaringClass"(): $Class<(T)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotations"(): ($Annotation)[]
public "setAccessible"(arg0: boolean): void
public "isVarArgs"(): boolean
public "getParameterCount"(): integer
public "getParameterAnnotations"(): (($Annotation)[])[]
public "getGenericParameterTypes"(): ($Type)[]
public "getGenericExceptionTypes"(): ($Type)[]
public "getExceptionTypes"(): ($Class<(any)>)[]
public "getAnnotatedReturnType"(): $AnnotatedType
public "getAnnotatedReceiverType"(): $AnnotatedType
get "name"(): string
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<($Constructor<(T)>)>)[]
get "parameterTypes"(): ($Class<(any)>)[]
get "synthetic"(): boolean
get "declaringClass"(): $Class<(T)>
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "varArgs"(): boolean
get "parameterCount"(): integer
get "parameterAnnotations"(): (($Annotation)[])[]
get "genericParameterTypes"(): ($Type)[]
get "genericExceptionTypes"(): ($Type)[]
get "exceptionTypes"(): ($Class<(any)>)[]
get "annotatedReturnType"(): $AnnotatedType
get "annotatedReceiverType"(): $AnnotatedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constructor$$Type<T> = ($Constructor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constructor_<T> = $Constructor$$Type<(T)>;
}}
declare module "java.lang.Appendable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Appendable {

 "append"(arg0: charseq): $Appendable
 "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
 "append"(arg0: character): $Appendable
}

export namespace $Appendable {
const probejs$$marker: never
}
export class $Appendable$$Static implements $Appendable {


 "append"(arg0: charseq): $Appendable
 "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
 "append"(arg0: character): $Appendable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Appendable$$Type = ($Appendable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Appendable_ = $Appendable$$Type;
}}
declare module "java.lang.invoke.MethodHandles$Lookup$ClassOption" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup$ClassOption extends $Enum<($MethodHandles$Lookup$ClassOption)> {
static readonly "NESTMATE": $MethodHandles$Lookup$ClassOption
static readonly "STRONG": $MethodHandles$Lookup$ClassOption


public static "values"(): ($MethodHandles$Lookup$ClassOption)[]
public static "valueOf"(arg0: string): $MethodHandles$Lookup$ClassOption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandles$Lookup$ClassOption$$Type = (("nestmate") | ("strong"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodHandles$Lookup$ClassOption_ = $MethodHandles$Lookup$ClassOption$$Type;
}}
declare module "java.lang.invoke.MethodHandle" {
import {$Constable, $Constable$$Type} from "java.lang.constant.Constable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandleDesc, $MethodHandleDesc$$Type} from "java.lang.constant.MethodHandleDesc"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MethodType, $MethodType$$Type} from "java.lang.invoke.MethodType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandle implements $Constable {


public "invoke"(...arg0: (any)[]): any
public "invokeExact"(...arg0: (any)[]): any
public "asFixedArity"(): $MethodHandle
public "type"(): $MethodType
public "toString"(): string
public "describeConstable"(): $Optional<($MethodHandleDesc)>
public "asType"(arg0: $MethodType$$Type): $MethodHandle
public "invokeWithArguments"(arg0: $List$$Type<(any)>): any
public "invokeWithArguments"(...arg0: (any)[]): any
public "asSpreader"(arg0: $Class$$Type<(any)>, arg1: integer): $MethodHandle
public "asSpreader"(arg0: integer, arg1: $Class$$Type<(any)>, arg2: integer): $MethodHandle
public "isVarargsCollector"(): boolean
public "asVarargsCollector"(arg0: $Class$$Type<(any)>): $MethodHandle
public "asCollector"(arg0: integer, arg1: $Class$$Type<(any)>, arg2: integer): $MethodHandle
public "asCollector"(arg0: $Class$$Type<(any)>, arg1: integer): $MethodHandle
public "withVarargs"(arg0: boolean): $MethodHandle
public "bindTo"(arg0: any): $MethodHandle
get "varargsCollector"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandle$$Type = ($MethodHandle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodHandle_ = $MethodHandle$$Type;
}}
declare module "java.lang.StackTraceElement" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StackTraceElement implements $Serializable {

constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: integer)
constructor(arg0: string, arg1: string, arg2: string, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getClassName"(): string
public "isNativeMethod"(): boolean
public "getFileName"(): string
public "getLineNumber"(): integer
public "getModuleName"(): string
public "getModuleVersion"(): string
public "getClassLoaderName"(): string
public "getMethodName"(): string
get "className"(): string
get "nativeMethod"(): boolean
get "fileName"(): string
get "lineNumber"(): integer
get "moduleName"(): string
get "moduleVersion"(): string
get "classLoaderName"(): string
get "methodName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackTraceElement$$Type = ($StackTraceElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackTraceElement_ = $StackTraceElement$$Type;
}}
declare module "java.lang.NamedPackage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NamedPackage {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedPackage$$Type = ($NamedPackage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedPackage_ = $NamedPackage$$Type;
}}
declare module "java.lang.foreign.ValueLayout$OfDouble" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfDouble extends $ValueLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout$OfDouble {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$OfDouble$$Static implements $ValueLayout$OfDouble {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "withName"(arg0: string): $MemoryLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfDouble$$Type = ($ValueLayout$OfDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout$OfDouble_ = $ValueLayout$OfDouble$$Type;
}}
declare module "java.lang.CharSequence" {
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"

export interface $CharSequence {

 "length"(): integer
 "toString"(): string
 "charAt"(arg0: integer): character
 "isEmpty"(): boolean
 "codePoints"(): $IntStream
 "subSequence"(arg0: integer, arg1: integer): charseq
 "chars"(): $IntStream
get "empty"(): boolean
}

export namespace $CharSequence {
function compare(arg0: charseq, arg1: charseq): integer
const probejs$$marker: never
}
export class $CharSequence$$Static implements $CharSequence {


 "length"(): integer
 "toString"(): string
static "compare"(arg0: charseq, arg1: charseq): integer
 "charAt"(arg0: integer): character
 "isEmpty"(): boolean
 "codePoints"(): $IntStream
 "subSequence"(arg0: integer, arg1: integer): charseq
 "chars"(): $IntStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharSequence$$Type = ($CharSequence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharSequence_ = $CharSequence$$Type;
}}
declare module "java.lang.foreign.MemorySegment" {
import {$ValueLayout$OfLong, $ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$ValueLayout$OfDouble, $ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$ValueLayout$OfInt, $ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$Arena, $Arena$$Type} from "java.lang.foreign.Arena"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$ValueLayout$OfBoolean, $ValueLayout$OfBoolean$$Type} from "java.lang.foreign.ValueLayout$OfBoolean"
import {$Buffer, $Buffer$$Type} from "java.nio.Buffer"
import {$ValueLayout$OfShort, $ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ValueLayout$OfByte, $ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$AddressLayout, $AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$ValueLayout, $ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$ValueLayout$OfFloat, $ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$MemorySegment$Scope, $MemorySegment$Scope$$Type} from "java.lang.foreign.MemorySegment$Scope"
import {$ValueLayout$OfChar, $ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemorySegment {

 "byteSize"(): long
 "isAccessibleBy"(arg0: $Thread$$Type): boolean
 "asSlice"(arg0: long, arg1: long, arg2: long): $MemorySegment
 "asSlice"(arg0: long, arg1: long): $MemorySegment
 "asSlice"(arg0: long, arg1: $MemoryLayout$$Type): $MemorySegment
 "asSlice"(arg0: long): $MemorySegment
 "scope"(): $MemorySegment$Scope
 "get"(arg0: $ValueLayout$OfLong$$Type, arg1: long): long
 "get"(arg0: $ValueLayout$OfFloat$$Type, arg1: long): float
 "get"(arg0: $ValueLayout$OfInt$$Type, arg1: long): integer
 "get"(arg0: $ValueLayout$OfDouble$$Type, arg1: long): double
 "get"(arg0: $AddressLayout$$Type, arg1: long): $MemorySegment
 "get"(arg0: $ValueLayout$OfChar$$Type, arg1: long): character
 "get"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long): boolean
 "get"(arg0: $ValueLayout$OfShort$$Type, arg1: long): short
 "get"(arg0: $ValueLayout$OfByte$$Type, arg1: long): byte
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "load"(): void
 "mismatch"(arg0: $MemorySegment$$Type): long
 "toArray"(arg0: $ValueLayout$OfInt$$Type): (integer)[]
 "toArray"(arg0: $ValueLayout$OfChar$$Type): (character)[]
 "toArray"(arg0: $ValueLayout$OfByte$$Type): (byte)[]
 "toArray"(arg0: $ValueLayout$OfShort$$Type): (short)[]
 "toArray"(arg0: $ValueLayout$OfDouble$$Type): (double)[]
 "toArray"(arg0: $ValueLayout$OfFloat$$Type): (float)[]
 "toArray"(arg0: $ValueLayout$OfLong$$Type): (long)[]
 "fill"(arg0: byte): $MemorySegment
 "elements"(arg0: $MemoryLayout$$Type): $Stream<($MemorySegment)>
 "spliterator"(arg0: $MemoryLayout$$Type): $Spliterator<($MemorySegment)>
 "set"(arg0: $ValueLayout$OfShort$$Type, arg1: long, arg2: short): void
 "set"(arg0: $ValueLayout$OfByte$$Type, arg1: long, arg2: byte): void
 "set"(arg0: $ValueLayout$OfChar$$Type, arg1: long, arg2: character): void
 "set"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long, arg2: boolean): void
 "set"(arg0: $ValueLayout$OfLong$$Type, arg1: long, arg2: long): void
 "set"(arg0: $ValueLayout$OfFloat$$Type, arg1: long, arg2: float): void
 "set"(arg0: $ValueLayout$OfInt$$Type, arg1: long, arg2: integer): void
 "set"(arg0: $AddressLayout$$Type, arg1: long, arg2: $MemorySegment$$Type): void
 "set"(arg0: $ValueLayout$OfDouble$$Type, arg1: long, arg2: double): void
 "isNative"(): boolean
 "address"(): long
 "isReadOnly"(): boolean
 "isLoaded"(): boolean
 "unload"(): void
 "force"(): void
 "copyFrom"(arg0: $MemorySegment$$Type): $MemorySegment
 "heapBase"(): $Optional<(any)>
 "reinterpret"(arg0: long): $MemorySegment
 "reinterpret"(arg0: $Arena$$Type, arg1: $Consumer$$Type<($MemorySegment)>): $MemorySegment
 "reinterpret"(arg0: long, arg1: $Arena$$Type, arg2: $Consumer$$Type<($MemorySegment)>): $MemorySegment
 "asReadOnly"(): $MemorySegment
 "isMapped"(): boolean
 "asOverlappingSlice"(arg0: $MemorySegment$$Type): $Optional<($MemorySegment)>
 "segmentOffset"(arg0: $MemorySegment$$Type): long
 "asByteBuffer"(): $ByteBuffer
 "getUtf8String"(arg0: long): string
 "setUtf8String"(arg0: long, arg1: string): void
 "getAtIndex"(arg0: $AddressLayout$$Type, arg1: long): $MemorySegment
 "getAtIndex"(arg0: $ValueLayout$OfLong$$Type, arg1: long): long
 "getAtIndex"(arg0: $ValueLayout$OfChar$$Type, arg1: long): character
 "getAtIndex"(arg0: $ValueLayout$OfShort$$Type, arg1: long): short
 "getAtIndex"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long): boolean
 "getAtIndex"(arg0: $ValueLayout$OfByte$$Type, arg1: long): byte
 "getAtIndex"(arg0: $ValueLayout$OfDouble$$Type, arg1: long): double
 "getAtIndex"(arg0: $ValueLayout$OfFloat$$Type, arg1: long): float
 "getAtIndex"(arg0: $ValueLayout$OfInt$$Type, arg1: long): integer
 "setAtIndex"(arg0: $ValueLayout$OfChar$$Type, arg1: long, arg2: character): void
 "setAtIndex"(arg0: $ValueLayout$OfShort$$Type, arg1: long, arg2: short): void
 "setAtIndex"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long, arg2: boolean): void
 "setAtIndex"(arg0: $ValueLayout$OfByte$$Type, arg1: long, arg2: byte): void
 "setAtIndex"(arg0: $ValueLayout$OfLong$$Type, arg1: long, arg2: long): void
 "setAtIndex"(arg0: $ValueLayout$OfDouble$$Type, arg1: long, arg2: double): void
 "setAtIndex"(arg0: $ValueLayout$OfInt$$Type, arg1: long, arg2: integer): void
 "setAtIndex"(arg0: $AddressLayout$$Type, arg1: long, arg2: $MemorySegment$$Type): void
 "setAtIndex"(arg0: $ValueLayout$OfFloat$$Type, arg1: long, arg2: float): void
get "native"(): boolean
get "readOnly"(): boolean
get "loaded"(): boolean
get "mapped"(): boolean
}

export namespace $MemorySegment {
const NULL: $MemorySegment
function ofBuffer(arg0: $Buffer$$Type): $MemorySegment
function mismatch(arg0: $MemorySegment$$Type, arg1: long, arg2: long, arg3: $MemorySegment$$Type, arg4: long, arg5: long): long
function copy(arg0: $MemorySegment$$Type, arg1: long, arg2: $MemorySegment$$Type, arg3: long, arg4: long): void
function copy(arg0: $MemorySegment$$Type, arg1: $ValueLayout$$Type, arg2: long, arg3: $MemorySegment$$Type, arg4: $ValueLayout$$Type, arg5: long, arg6: long): void
function copy(arg0: $MemorySegment$$Type, arg1: $ValueLayout$$Type, arg2: long, arg3: any, arg4: integer, arg5: integer): void
function copy(arg0: any, arg1: integer, arg2: $MemorySegment$$Type, arg3: $ValueLayout$$Type, arg4: long, arg5: integer): void
function ofArray(arg0: (long)[]): $MemorySegment
function ofArray(arg0: (short)[]): $MemorySegment
function ofArray(arg0: (character)[]): $MemorySegment
function ofArray(arg0: (byte)[]): $MemorySegment
function ofArray(arg0: (double)[]): $MemorySegment
function ofArray(arg0: (float)[]): $MemorySegment
function ofArray(arg0: (integer)[]): $MemorySegment
function ofAddress(arg0: long): $MemorySegment
const probejs$$marker: never
}
export class $MemorySegment$$Static implements $MemorySegment {
static readonly "NULL": $MemorySegment


 "byteSize"(): long
 "isAccessibleBy"(arg0: $Thread$$Type): boolean
 "asSlice"(arg0: long, arg1: long, arg2: long): $MemorySegment
 "asSlice"(arg0: long, arg1: long): $MemorySegment
 "asSlice"(arg0: long, arg1: $MemoryLayout$$Type): $MemorySegment
 "asSlice"(arg0: long): $MemorySegment
static "ofBuffer"(arg0: $Buffer$$Type): $MemorySegment
 "scope"(): $MemorySegment$Scope
 "get"(arg0: $ValueLayout$OfLong$$Type, arg1: long): long
 "get"(arg0: $ValueLayout$OfFloat$$Type, arg1: long): float
 "get"(arg0: $ValueLayout$OfInt$$Type, arg1: long): integer
 "get"(arg0: $ValueLayout$OfDouble$$Type, arg1: long): double
 "get"(arg0: $AddressLayout$$Type, arg1: long): $MemorySegment
 "get"(arg0: $ValueLayout$OfChar$$Type, arg1: long): character
 "get"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long): boolean
 "get"(arg0: $ValueLayout$OfShort$$Type, arg1: long): short
 "get"(arg0: $ValueLayout$OfByte$$Type, arg1: long): byte
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "load"(): void
 "mismatch"(arg0: $MemorySegment$$Type): long
static "mismatch"(arg0: $MemorySegment$$Type, arg1: long, arg2: long, arg3: $MemorySegment$$Type, arg4: long, arg5: long): long
 "toArray"(arg0: $ValueLayout$OfInt$$Type): (integer)[]
 "toArray"(arg0: $ValueLayout$OfChar$$Type): (character)[]
 "toArray"(arg0: $ValueLayout$OfByte$$Type): (byte)[]
 "toArray"(arg0: $ValueLayout$OfShort$$Type): (short)[]
 "toArray"(arg0: $ValueLayout$OfDouble$$Type): (double)[]
 "toArray"(arg0: $ValueLayout$OfFloat$$Type): (float)[]
 "toArray"(arg0: $ValueLayout$OfLong$$Type): (long)[]
 "fill"(arg0: byte): $MemorySegment
 "elements"(arg0: $MemoryLayout$$Type): $Stream<($MemorySegment)>
 "spliterator"(arg0: $MemoryLayout$$Type): $Spliterator<($MemorySegment)>
 "set"(arg0: $ValueLayout$OfShort$$Type, arg1: long, arg2: short): void
 "set"(arg0: $ValueLayout$OfByte$$Type, arg1: long, arg2: byte): void
 "set"(arg0: $ValueLayout$OfChar$$Type, arg1: long, arg2: character): void
 "set"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long, arg2: boolean): void
 "set"(arg0: $ValueLayout$OfLong$$Type, arg1: long, arg2: long): void
 "set"(arg0: $ValueLayout$OfFloat$$Type, arg1: long, arg2: float): void
 "set"(arg0: $ValueLayout$OfInt$$Type, arg1: long, arg2: integer): void
 "set"(arg0: $AddressLayout$$Type, arg1: long, arg2: $MemorySegment$$Type): void
 "set"(arg0: $ValueLayout$OfDouble$$Type, arg1: long, arg2: double): void
static "copy"(arg0: $MemorySegment$$Type, arg1: long, arg2: $MemorySegment$$Type, arg3: long, arg4: long): void
static "copy"(arg0: $MemorySegment$$Type, arg1: $ValueLayout$$Type, arg2: long, arg3: $MemorySegment$$Type, arg4: $ValueLayout$$Type, arg5: long, arg6: long): void
static "copy"(arg0: $MemorySegment$$Type, arg1: $ValueLayout$$Type, arg2: long, arg3: any, arg4: integer, arg5: integer): void
static "copy"(arg0: any, arg1: integer, arg2: $MemorySegment$$Type, arg3: $ValueLayout$$Type, arg4: long, arg5: integer): void
 "isNative"(): boolean
 "address"(): long
 "isReadOnly"(): boolean
 "isLoaded"(): boolean
 "unload"(): void
 "force"(): void
 "copyFrom"(arg0: $MemorySegment$$Type): $MemorySegment
 "heapBase"(): $Optional<(any)>
 "reinterpret"(arg0: long): $MemorySegment
 "reinterpret"(arg0: $Arena$$Type, arg1: $Consumer$$Type<($MemorySegment)>): $MemorySegment
 "reinterpret"(arg0: long, arg1: $Arena$$Type, arg2: $Consumer$$Type<($MemorySegment)>): $MemorySegment
 "asReadOnly"(): $MemorySegment
 "isMapped"(): boolean
 "asOverlappingSlice"(arg0: $MemorySegment$$Type): $Optional<($MemorySegment)>
 "segmentOffset"(arg0: $MemorySegment$$Type): long
 "asByteBuffer"(): $ByteBuffer
 "getUtf8String"(arg0: long): string
 "setUtf8String"(arg0: long, arg1: string): void
static "ofArray"(arg0: (long)[]): $MemorySegment
static "ofArray"(arg0: (short)[]): $MemorySegment
static "ofArray"(arg0: (character)[]): $MemorySegment
static "ofArray"(arg0: (byte)[]): $MemorySegment
static "ofArray"(arg0: (double)[]): $MemorySegment
static "ofArray"(arg0: (float)[]): $MemorySegment
static "ofArray"(arg0: (integer)[]): $MemorySegment
static "ofAddress"(arg0: long): $MemorySegment
 "getAtIndex"(arg0: $AddressLayout$$Type, arg1: long): $MemorySegment
 "getAtIndex"(arg0: $ValueLayout$OfLong$$Type, arg1: long): long
 "getAtIndex"(arg0: $ValueLayout$OfChar$$Type, arg1: long): character
 "getAtIndex"(arg0: $ValueLayout$OfShort$$Type, arg1: long): short
 "getAtIndex"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long): boolean
 "getAtIndex"(arg0: $ValueLayout$OfByte$$Type, arg1: long): byte
 "getAtIndex"(arg0: $ValueLayout$OfDouble$$Type, arg1: long): double
 "getAtIndex"(arg0: $ValueLayout$OfFloat$$Type, arg1: long): float
 "getAtIndex"(arg0: $ValueLayout$OfInt$$Type, arg1: long): integer
 "setAtIndex"(arg0: $ValueLayout$OfChar$$Type, arg1: long, arg2: character): void
 "setAtIndex"(arg0: $ValueLayout$OfShort$$Type, arg1: long, arg2: short): void
 "setAtIndex"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long, arg2: boolean): void
 "setAtIndex"(arg0: $ValueLayout$OfByte$$Type, arg1: long, arg2: byte): void
 "setAtIndex"(arg0: $ValueLayout$OfLong$$Type, arg1: long, arg2: long): void
 "setAtIndex"(arg0: $ValueLayout$OfDouble$$Type, arg1: long, arg2: double): void
 "setAtIndex"(arg0: $ValueLayout$OfInt$$Type, arg1: long, arg2: integer): void
 "setAtIndex"(arg0: $AddressLayout$$Type, arg1: long, arg2: $MemorySegment$$Type): void
 "setAtIndex"(arg0: $ValueLayout$OfFloat$$Type, arg1: long, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySegment$$Type = ($MemorySegment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemorySegment_ = $MemorySegment$$Type;
}}
declare module "java.lang.foreign.ValueLayout" {
import {$ValueLayout$OfLong, $ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$ValueLayout$OfDouble, $ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ValueLayout$OfInt, $ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$ValueLayout$OfBoolean, $ValueLayout$OfBoolean$$Type} from "java.lang.foreign.ValueLayout$OfBoolean"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$ValueLayout$OfShort, $ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"
import {$ValueLayout$OfByte, $ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$AddressLayout, $AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout, $SequenceLayout$$Type} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ValueLayout$OfFloat, $ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$ValueLayout$OfChar, $ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout extends $MemoryLayout {

 "withByteAlignment"(arg0: long): $ValueLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "withName"(arg0: string): $ValueLayout
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $ValueLayout {
const JAVA_CHAR: $ValueLayout$OfChar
const ADDRESS_UNALIGNED: $AddressLayout
const JAVA_LONG_UNALIGNED: $ValueLayout$OfLong
const JAVA_BOOLEAN: $ValueLayout$OfBoolean
const JAVA_INT_UNALIGNED: $ValueLayout$OfInt
const JAVA_DOUBLE: $ValueLayout$OfDouble
const JAVA_LONG: $ValueLayout$OfLong
const JAVA_CHAR_UNALIGNED: $ValueLayout$OfChar
const JAVA_FLOAT: $ValueLayout$OfFloat
const JAVA_BYTE: $ValueLayout$OfByte
const ADDRESS: $AddressLayout
const JAVA_FLOAT_UNALIGNED: $ValueLayout$OfFloat
const JAVA_SHORT: $ValueLayout$OfShort
const JAVA_DOUBLE_UNALIGNED: $ValueLayout$OfDouble
const JAVA_SHORT_UNALIGNED: $ValueLayout$OfShort
const JAVA_INT: $ValueLayout$OfInt
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $ValueLayout$$Static implements $ValueLayout {
static readonly "JAVA_CHAR": $ValueLayout$OfChar
static readonly "ADDRESS_UNALIGNED": $AddressLayout
static readonly "JAVA_LONG_UNALIGNED": $ValueLayout$OfLong
static readonly "JAVA_BOOLEAN": $ValueLayout$OfBoolean
static readonly "JAVA_INT_UNALIGNED": $ValueLayout$OfInt
static readonly "JAVA_DOUBLE": $ValueLayout$OfDouble
static readonly "JAVA_LONG": $ValueLayout$OfLong
static readonly "JAVA_CHAR_UNALIGNED": $ValueLayout$OfChar
static readonly "JAVA_FLOAT": $ValueLayout$OfFloat
static readonly "JAVA_BYTE": $ValueLayout$OfByte
static readonly "ADDRESS": $AddressLayout
static readonly "JAVA_FLOAT_UNALIGNED": $ValueLayout$OfFloat
static readonly "JAVA_SHORT": $ValueLayout$OfShort
static readonly "JAVA_DOUBLE_UNALIGNED": $ValueLayout$OfDouble
static readonly "JAVA_SHORT_UNALIGNED": $ValueLayout$OfShort
static readonly "JAVA_INT": $ValueLayout$OfInt


 "withByteAlignment"(arg0: long): $ValueLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(any)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "withName"(arg0: string): $ValueLayout
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$$Type = ($ValueLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueLayout_ = $ValueLayout$$Type;
}}
declare module "java.lang.foreign.SequenceLayout" {
import {$StructLayout, $StructLayout$$Type} from "java.lang.foreign.StructLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MemoryLayout$PathElement, $MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle, $VarHandle$$Type} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout, $PaddingLayout$$Type} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout, $UnionLayout$$Type} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SequenceLayout extends $MemoryLayout {

 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "elementLayout"(): $MemoryLayout
 "flatten"(): $SequenceLayout
 "elementCount"(): long
 "withName"(arg0: string): $MemoryLayout
 "withElementCount"(arg0: long): $SequenceLayout
 "reshape"(...arg0: (long)[]): $SequenceLayout
 "byteSize"(): long
 "byteAlignment"(): long
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}

export namespace $SequenceLayout {
function sequenceLayout(arg0: $MemoryLayout$$Type): $SequenceLayout
function sequenceLayout(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
function paddingLayout(arg0: long): $PaddingLayout
function structLayout(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
function unionLayout(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
const probejs$$marker: never
}
export class $SequenceLayout$$Static implements $SequenceLayout {


 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "elementLayout"(): $MemoryLayout
 "flatten"(): $SequenceLayout
 "elementCount"(): long
 "withName"(arg0: string): $MemoryLayout
 "withElementCount"(arg0: long): $SequenceLayout
 "reshape"(...arg0: (long)[]): $SequenceLayout
 "byteSize"(): long
 "byteAlignment"(): long
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "name"(): $Optional<(string)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequenceLayout$$Type = ($SequenceLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequenceLayout_ = $SequenceLayout$$Type;
}}
declare module "java.lang.reflect.AccessFlag" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AccessFlag$Location, $AccessFlag$Location$$Type} from "java.lang.reflect.AccessFlag$Location"
import {$ClassFileFormatVersion, $ClassFileFormatVersion$$Type} from "java.lang.reflect.ClassFileFormatVersion"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessFlag extends $Enum<($AccessFlag)> {
static readonly "TRANSITIVE": $AccessFlag
static readonly "SYNCHRONIZED": $AccessFlag
static readonly "VOLATILE": $AccessFlag
static readonly "VARARGS": $AccessFlag
static readonly "STRICT": $AccessFlag
static readonly "ENUM": $AccessFlag
static readonly "SUPER": $AccessFlag
static readonly "NATIVE": $AccessFlag
static readonly "SYNTHETIC": $AccessFlag
static readonly "FINAL": $AccessFlag
static readonly "BRIDGE": $AccessFlag
static readonly "ABSTRACT": $AccessFlag
static readonly "STATIC": $AccessFlag
static readonly "PRIVATE": $AccessFlag
static readonly "OPEN": $AccessFlag
static readonly "STATIC_PHASE": $AccessFlag
static readonly "MODULE": $AccessFlag
static readonly "INTERFACE": $AccessFlag
static readonly "ANNOTATION": $AccessFlag
static readonly "PUBLIC": $AccessFlag
static readonly "MANDATED": $AccessFlag
static readonly "PROTECTED": $AccessFlag
static readonly "TRANSIENT": $AccessFlag


public static "values"(): ($AccessFlag)[]
public static "valueOf"(arg0: string): $AccessFlag
public static "maskToAccessFlags"(arg0: integer, arg1: $AccessFlag$Location$$Type): $Set<($AccessFlag)>
public "mask"(): integer
public "sourceModifier"(): boolean
public "locations"(): $Set<($AccessFlag$Location)>
public "locations"(arg0: $ClassFileFormatVersion$$Type): $Set<($AccessFlag$Location)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFlag$$Type = (("public") | ("private") | ("protected") | ("static") | ("final") | ("super") | ("open") | ("transitive") | ("synchronized") | ("static_phase") | ("volatile") | ("bridge") | ("transient") | ("varargs") | ("native") | ("interface") | ("abstract") | ("strict") | ("synthetic") | ("annotation") | ("enum") | ("mandated") | ("module"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessFlag_ = $AccessFlag$$Type;
}}
declare module "java.lang.Runtime$Version" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Runtime$Version implements $Comparable<($Runtime$Version)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): $List<(integer)>
public "hashCode"(): integer
public "compareTo"(arg0: $Runtime$Version$$Type): integer
public "compareTo"(arg0: any): integer
public "update"(): integer
public "feature"(): integer
/**
 * 
 * @deprecated
 */
public "security"(): integer
public static "parse"(arg0: string): $Runtime$Version
/**
 * 
 * @deprecated
 */
public "major"(): integer
/**
 * 
 * @deprecated
 */
public "minor"(): integer
public "pre"(): $Optional<(string)>
public "build"(): $Optional<(integer)>
public "optional"(): $Optional<(string)>
public "interim"(): integer
public "equalsIgnoreOptional"(arg0: any): boolean
public "patch"(): integer
public "compareToIgnoreOptional"(arg0: $Runtime$Version$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Runtime$Version$$Type = ($Runtime$Version);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Runtime$Version_ = $Runtime$Version$$Type;
}}
declare module "java.lang.module.ModuleDescriptor$Builder" {
import {$ModuleDescriptor, $ModuleDescriptor$$Type} from "java.lang.module.ModuleDescriptor"
import {$ModuleDescriptor$Opens, $ModuleDescriptor$Opens$$Type} from "java.lang.module.ModuleDescriptor$Opens"
import {$ModuleDescriptor$Requires$Modifier, $ModuleDescriptor$Requires$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Requires$Modifier"
import {$ModuleDescriptor$Provides, $ModuleDescriptor$Provides$$Type} from "java.lang.module.ModuleDescriptor$Provides"
import {$List, $List$$Type} from "java.util.List"
import {$ModuleDescriptor$Opens$Modifier, $ModuleDescriptor$Opens$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Opens$Modifier"
import {$ModuleDescriptor$Exports, $ModuleDescriptor$Exports$$Type} from "java.lang.module.ModuleDescriptor$Exports"
import {$ModuleDescriptor$Version, $ModuleDescriptor$Version$$Type} from "java.lang.module.ModuleDescriptor$Version"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModuleDescriptor$Exports$Modifier, $ModuleDescriptor$Exports$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Exports$Modifier"
import {$ModuleDescriptor$Requires, $ModuleDescriptor$Requires$$Type} from "java.lang.module.ModuleDescriptor$Requires"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Builder {


public "version"(arg0: string): $ModuleDescriptor$Builder
public "version"(arg0: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "packages"(arg0: $Set$$Type<(string)>): $ModuleDescriptor$Builder
public "exports"(arg0: string): $ModuleDescriptor$Builder
public "exports"(arg0: $Set$$Type<($ModuleDescriptor$Exports$Modifier$$Type)>, arg1: string, arg2: $Set$$Type<(string)>): $ModuleDescriptor$Builder
public "exports"(arg0: string, arg1: $Set$$Type<(string)>): $ModuleDescriptor$Builder
public "exports"(arg0: $Set$$Type<($ModuleDescriptor$Exports$Modifier$$Type)>, arg1: string): $ModuleDescriptor$Builder
public "exports"(arg0: $ModuleDescriptor$Exports$$Type): $ModuleDescriptor$Builder
public "opens"(arg0: string): $ModuleDescriptor$Builder
public "opens"(arg0: $Set$$Type<($ModuleDescriptor$Opens$Modifier$$Type)>, arg1: string, arg2: $Set$$Type<(string)>): $ModuleDescriptor$Builder
public "opens"(arg0: string, arg1: $Set$$Type<(string)>): $ModuleDescriptor$Builder
public "opens"(arg0: $ModuleDescriptor$Opens$$Type): $ModuleDescriptor$Builder
public "opens"(arg0: $Set$$Type<($ModuleDescriptor$Opens$Modifier$$Type)>, arg1: string): $ModuleDescriptor$Builder
public "uses"(arg0: string): $ModuleDescriptor$Builder
public "provides"(arg0: $ModuleDescriptor$Provides$$Type): $ModuleDescriptor$Builder
public "provides"(arg0: string, arg1: $List$$Type<(string)>): $ModuleDescriptor$Builder
public "build"(): $ModuleDescriptor
public "requires"(arg0: $ModuleDescriptor$Requires$$Type): $ModuleDescriptor$Builder
public "requires"(arg0: $Set$$Type<($ModuleDescriptor$Requires$Modifier$$Type)>, arg1: string, arg2: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "requires"(arg0: string): $ModuleDescriptor$Builder
public "requires"(arg0: $Set$$Type<($ModuleDescriptor$Requires$Modifier$$Type)>, arg1: string): $ModuleDescriptor$Builder
public "mainClass"(arg0: string): $ModuleDescriptor$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Builder$$Type = ($ModuleDescriptor$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDescriptor$Builder_ = $ModuleDescriptor$Builder$$Type;
}}
declare module "java.lang.invoke.TypeDescriptor$OfMethod" {
import {$TypeDescriptor, $TypeDescriptor$$Type} from "java.lang.invoke.TypeDescriptor"
import {$List, $List$$Type} from "java.util.List"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfMethod<F extends $TypeDescriptor$OfField<(F)>, M extends $TypeDescriptor$OfMethod<(F), (M)>> extends $TypeDescriptor {

 "returnType"(): F
 "parameterType"(arg0: integer): F
 "insertParameterTypes"(arg0: integer, ...arg1: (F)[]): M
 "changeReturnType"(arg0: F): M
 "dropParameterTypes"(arg0: integer, arg1: integer): M
 "parameterCount"(): integer
 "parameterList"(): $List<(F)>
 "parameterArray"(): (F)[]
 "changeParameterType"(arg0: integer, arg1: F): M
 "descriptorString"(): string
}

export namespace $TypeDescriptor$OfMethod {
const probejs$$marker: never
}
export class $TypeDescriptor$OfMethod$$Static<F extends $TypeDescriptor$OfField<(F)>, M extends $TypeDescriptor$OfMethod<(F), (M)>> implements $TypeDescriptor$OfMethod {


 "returnType"(): F
 "parameterType"(arg0: integer): F
 "insertParameterTypes"(arg0: integer, ...arg1: (F)[]): M
 "changeReturnType"(arg0: F): M
 "dropParameterTypes"(arg0: integer, arg1: integer): M
 "parameterCount"(): integer
 "parameterList"(): $List<(F)>
 "parameterArray"(): (F)[]
 "changeParameterType"(arg0: integer, arg1: F): M
 "descriptorString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$OfMethod$$Type<F, M> = ($TypeDescriptor$OfMethod<(F), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescriptor$OfMethod_<F, M> = $TypeDescriptor$OfMethod$$Type<(F), (M)>;
}}
declare module "java.lang.module.ResolvedModule" {
import {$Configuration, $Configuration$$Type} from "java.lang.module.Configuration"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModuleReference, $ModuleReference$$Type} from "java.lang.module.ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ResolvedModule {


public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reads"(): $Set<($ResolvedModule)>
public "reference"(): $ModuleReference
public "configuration"(): $Configuration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolvedModule$$Type = ($ResolvedModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResolvedModule_ = $ResolvedModule$$Type;
}}
declare module "java.lang.Enum$EnumDesc" {
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$DynamicConstantDesc, $DynamicConstantDesc$$Type} from "java.lang.constant.DynamicConstantDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum$EnumDesc<E extends $Enum<(E)>> extends $DynamicConstantDesc<(E)> {


public "toString"(): string
public static "of"<E extends $Enum<(E)>>(arg0: $ClassDesc$$Type, arg1: string): $Enum$EnumDesc<(E)>
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enum$EnumDesc$$Type<E> = ($Enum$EnumDesc<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Enum$EnumDesc_<E> = $Enum$EnumDesc$$Type<(E)>;
}}
declare module "java.lang.StringBuffer" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$AbstractStringBuilder, $AbstractStringBuilder$$Type} from "java.lang.AbstractStringBuilder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StringBuffer extends $AbstractStringBuilder implements $Appendable, $Serializable, $Comparable<($StringBuffer)>, charseq {

constructor(arg0: charseq)
constructor(arg0: string)
constructor(arg0: integer)
constructor()

public "length"(): integer
public "toString"(): string
public "append"(arg0: (character)[]): $AbstractStringBuilder
public "append"(arg0: integer): $StringBuffer
public "append"(arg0: long): $StringBuffer
public "append"(arg0: float): $StringBuffer
public "append"(arg0: (character)[], arg1: integer, arg2: integer): $StringBuffer
public "append"(arg0: boolean): $StringBuffer
public "append"(arg0: character): $StringBuffer
public "append"(arg0: double): $AbstractStringBuilder
public "append"(arg0: string): $AbstractStringBuilder
public "append"(arg0: $StringBuffer$$Type): $AbstractStringBuilder
public "append"(arg0: charseq): $AbstractStringBuilder
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
public "append"(arg0: any): $AbstractStringBuilder
public "reverse"(): $StringBuffer
public "getChars"(arg0: integer, arg1: integer, arg2: (character)[], arg3: integer): void
public "compareTo"(arg0: $StringBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public "indexOf"(arg0: string, arg1: integer): integer
public "indexOf"(arg0: string): integer
public "insert"(arg0: integer, arg1: long): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: character): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: boolean): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: float): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: double): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: any): $StringBuffer
public "insert"(arg0: integer, arg1: string): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: (character)[]): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: charseq): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: charseq, arg2: integer, arg3: integer): $AbstractStringBuilder
public "charAt"(arg0: integer): character
public "codePointAt"(arg0: integer): integer
public "codePointBefore"(arg0: integer): integer
public "codePointCount"(arg0: integer, arg1: integer): integer
public "offsetByCodePoints"(arg0: integer, arg1: integer): integer
public "lastIndexOf"(arg0: string, arg1: integer): integer
public "lastIndexOf"(arg0: string): integer
public "substring"(arg0: integer): string
public "substring"(arg0: integer, arg1: integer): string
public "replace"(arg0: integer, arg1: integer, arg2: string): $StringBuffer
public "repeat"(arg0: charseq, arg1: integer): $AbstractStringBuilder
public "repeat"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "codePoints"(): $IntStream
public "subSequence"(arg0: integer, arg1: integer): charseq
public "chars"(): $IntStream
public "delete"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "setLength"(arg0: integer): void
public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "setCharAt"(arg0: integer, arg1: character): void
public "appendCodePoint"(arg0: integer): $StringBuffer
public "deleteCharAt"(arg0: integer): $StringBuffer
public static "compare"(arg0: charseq, arg1: charseq): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringBuffer$$Type = ($StringBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringBuffer_ = $StringBuffer$$Type;
}}
