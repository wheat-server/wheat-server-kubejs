declare module "com.mojang.blaze3d.font.SheetGlyphInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheetGlyphInfo {

 "getOversample"(): float
 "getBearingLeft"(): float
 "getBearingTop"(): float
 "getPixelWidth"(): integer
 "getPixelHeight"(): integer
 "getLeft"(): float
 "getRight"(): float
 "getTop"(): float
 "isColored"(): boolean
 "upload"(arg0: integer, arg1: integer): void
 "getBottom"(): float
get "oversample"(): float
get "bearingLeft"(): float
get "bearingTop"(): float
get "pixelWidth"(): integer
get "pixelHeight"(): integer
get "left"(): float
get "right"(): float
get "top"(): float
get "colored"(): boolean
get "bottom"(): float
}

export namespace $SheetGlyphInfo {
const probejs$$marker: never
}
export class $SheetGlyphInfo$$Static implements $SheetGlyphInfo {


 "getOversample"(): float
 "getBearingLeft"(): float
 "getBearingTop"(): float
 "getPixelWidth"(): integer
 "getPixelHeight"(): integer
 "getLeft"(): float
 "getRight"(): float
 "getTop"(): float
 "isColored"(): boolean
 "upload"(arg0: integer, arg1: integer): void
 "getBottom"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SheetGlyphInfo$$Type = ($SheetGlyphInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SheetGlyphInfo_ = $SheetGlyphInfo$$Type;
}}
declare module "com.mojang.blaze3d.shaders.Program$Type" {
import {$Program, $Program$$Type} from "com.mojang.blaze3d.shaders.Program"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Program$Type extends $Enum<($Program$Type)> {
static readonly "VERTEX": $Program$Type
static readonly "FRAGMENT": $Program$Type


public "getName"(): string
public static "values"(): ($Program$Type)[]
public static "valueOf"(arg0: string): $Program$Type
public "getExtension"(): string
public "getPrograms"(): $Map<(string), ($Program)>
get "name"(): string
get "extension"(): string
get "programs"(): $Map<(string), ($Program)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$Type$$Type = (("vertex") | ("fragment"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Program$Type_ = $Program$Type$$Type;
}}
declare module "com.mojang.serialization.OptionalDynamic" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DynamicLike, $DynamicLike$$Type} from "com.mojang.serialization.DynamicLike"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $OptionalDynamic<T> extends $DynamicLike<(T)> {

constructor(arg0: $DynamicOps$$Type<(T)>, arg1: $DataResult$$Type<($Dynamic$$Type<(T)>)>)

public "get"(arg0: string): $OptionalDynamic<(T)>
public "get"(): $DataResult<($Dynamic<(T)>)>
public "decode"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<($Pair<(A), (T)>)>
public "map"<U>(arg0: $Function$$Type<($Dynamic<(T)>), (U)>): $DataResult<(U)>
public "result"(): $Optional<($Dynamic<(T)>)>
public "flatMap"<U>(arg0: $Function$$Type<($Dynamic<(T)>), ($DataResult$$Type<(U)>)>): $DataResult<(U)>
public "getElement"(arg0: string): $DataResult<(T)>
public "asString"(): $DataResult<(string)>
public "orElseEmptyMap"(): $Dynamic<(T)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asNumber"(): $DataResult<(number)>
public "asBoolean"(): $DataResult<(boolean)>
public "into"<V>(arg0: $Function$$Type<($Dynamic<(T)>), (V)>): $DataResult<(V)>
public "getGeneric"(arg0: T): $DataResult<(T)>
public "orElseEmptyList"(): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalDynamic$$Type<T> = ($OptionalDynamic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalDynamic_<T> = $OptionalDynamic$$Type<(T)>;
}}
declare module "com.mojang.realmsclient.gui.RealmsDataFetcher$ServerListData" {
import {$RealmsServer, $RealmsServer$$Type} from "com.mojang.realmsclient.dto.RealmsServer"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RealmsDataFetcher$ServerListData extends $Record {

constructor(arg0: $List$$Type<($RealmsServer$$Type)>, arg1: $List$$Type<($RealmsServer$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "availableSnapshotServers"(): $List<($RealmsServer)>
public "serverList"(): $List<($RealmsServer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsDataFetcher$ServerListData$$Type = ({"availableSnapshotServers"?: $List$$Type<($RealmsServer$$Type)>, "serverList"?: $List$$Type<($RealmsServer$$Type)>}) | ([availableSnapshotServers?: $List$$Type<($RealmsServer$$Type)>, serverList?: $List$$Type<($RealmsServer$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsDataFetcher$ServerListData_ = $RealmsDataFetcher$ServerListData$$Type;
}}
declare module "com.mojang.serialization.Decoder$Boxed" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"

export interface $Decoder$Boxed<A> {

 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "decoder"(): $Decoder<(A)>

(arg0: $Dynamic<(T)>): $DataResult$$Type<($Pair$$Type<(A), (T)>)>
}

export namespace $Decoder$Boxed {
const probejs$$marker: never
}
export class $Decoder$Boxed$$Static<A> implements $Decoder$Boxed {


 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "decoder"(): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Boxed$$Type<A> = ((arg0: $Dynamic<(T)>) => $DataResult$$Type<($Pair$$Type<(A), (T)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder$Boxed_<A> = $Decoder$Boxed$$Type<(A)>;
}}
declare module "com.mojang.brigadier.arguments.StringArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$StringArgumentType$StringType, $StringArgumentType$StringType$$Type} from "com.mojang.brigadier.arguments.StringArgumentType$StringType"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $StringArgumentType implements $ArgumentType<(string)> {


public "getExamples"(): $Collection<(string)>
public "toString"(): string
public "parse"(arg0: $StringReader$$Type): any
public "getType"(): $StringArgumentType$StringType
public static "string"(): $StringArgumentType
public static "getString"(arg0: $CommandContext$$Type<(any)>, arg1: string): string
public static "word"(): $StringArgumentType
public static "escapeIfRequired"(arg0: string): string
public static "greedyString"(): $StringArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): string
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "type"(): $StringArgumentType$StringType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentType$$Type = ($StringArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringArgumentType_ = $StringArgumentType$$Type;
}}
declare module "com.mojang.serialization.codecs.UnboundedMapCodec" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Codec$ResultFunction, $Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BaseMapCodec, $BaseMapCodec$$Type} from "com.mojang.serialization.codecs.BaseMapCodec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$SimpleMapCodec, $SimpleMapCodec$$Type} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $UnboundedMapCodec<K, V> extends $Record implements $BaseMapCodec<(K), (V)>, $Codec<($Map<(K), (V)>)> {

constructor(keyCodec: $Codec$$Type<(K)>, elementCodec: $Codec$$Type<(V)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type<(any)>, arg2: any): $DataResult<(any)>
public "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
public "elementCodec"(): $Codec<(V)>
public "keyCodec"(): $Codec<(K)>
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "dispatch"<E>(arg0: string, arg1: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "dispatch"<E>(arg0: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $MapDecoder$$Type<($Map$$Type<(K), (V)>)>, arg2: $Supplier$$Type<(string)>): $MapCodec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $MapEncoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $MapDecoder$$Type<($Map$$Type<(K), (V)>)>): $MapCodec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $Encoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $Decoder$$Type<($Map$$Type<(K), (V)>)>, arg2: string): $Codec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $Encoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $Decoder$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
public "validate"(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $Consumer$$Type<(string)>, arg1: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public static "unit"<A>(arg0: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public static "unit"<A>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "string"(arg0: integer, arg1: integer): $Codec<(string)>
public "orElseGet"(arg0: $Consumer$$Type<(string)>, arg1: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public "orElseGet"(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public "orElseGet"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "recursive"<A>(arg0: string, arg1: $Function$$Type<($Codec<($Map<(K), (V)>)>), ($Codec$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<($Map<(K), (V)>)>
public static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "stable"(): $Codec<($Map<(K), (V)>)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
public static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
public "dispatchStable"<E>(arg0: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "comapFlatMap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($Map$$Type<(K), (V)>)>): $Codec<(S)>
public static "sizeLimitedString"(arg0: integer): $Codec<(string)>
public static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: string): $MapCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"(arg0: string, arg1: $Map$$Type<(K), (V)>): $MapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: string, arg1: $Map$$Type<(K), (V)>, arg2: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: $Map$$Type<(K), (V)>, arg3: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(any)>
public static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
public static "stringResolver"<E>(arg0: $Function$$Type<(E), (string)>, arg1: $Function$$Type<(string), (E)>): $Codec<(E)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
public "dispatchMap"<E>(arg0: string, arg1: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public "sizeLimitedListOf"(arg0: integer): $Codec<($List<($Map<(K), (V)>)>)>
public "promotePartial"(arg0: $Consumer$$Type<(any)>): $Decoder<(any)>
public "flatComapMap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<(S)>
public "partialDispatch"<E>(arg0: string, arg1: $Function$$Type<(E), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
public "lenientOptionalFieldOf"(arg0: string, arg1: $Map$$Type<(K), (V)>): $MapCodec<($Map<(K), (V)>)>
public "lenientOptionalFieldOf"(arg0: string, arg1: $Map$$Type<(K), (V)>, arg2: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "lenientOptionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: $Map$$Type<(K), (V)>, arg3: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "lenientOptionalFieldOf"(arg0: string): $MapCodec<($Optional<($Map<(K), (V)>)>)>
public "listOf"(arg0: integer, arg1: integer): $Codec<($List<($Map<(K), (V)>)>)>
public "listOf"(): $Codec<($List<($Map<(K), (V)>)>)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "mapResult"(arg0: $Codec$ResultFunction$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public "deprecated"(arg0: integer): $Codec<($Map<(K), (V)>)>
public static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
public "flatXmap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<(S)>
public static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "fieldOf"(arg0: string): $MapCodec<($Map<(K), (V)>)>
public static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public "xmap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), (S)>, arg1: $Function$$Type<(S), ($Map$$Type<(K), (V)>)>): $Codec<(S)>
public static "empty"<A>(): $MapEncoder<($Map<(K), (V)>)>
public static "error"<A>(arg0: string): $Encoder<($Map<(K), (V)>)>
public "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $Map$$Type<(K), (V)>): $DataResult<(T)>
public "comap"<B>(arg0: $Function$$Type<(B), ($Map$$Type<(K), (V)>)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Encoder<(B)>
public "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "map"<B>(arg0: $Function$$Type<($Map<(K), (V)>), (B)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
public "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Map<(K), (V)>)>
public "boxed"(): $Decoder$Boxed<($Map<(K), (V)>)>
public "terminal"(): $Decoder$Terminal<($Map<(K), (V)>)>
public "simple"(): $Decoder$Simple<($Map<(K), (V)>)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<($Map$$Type<(K), (V)>)>): $Decoder<($Map<(K), (V)>)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<($Map$$Type<(K), (V)>)>): $Decoder<($Map<(K), (V)>)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<($Map$$Type<(K), (V)>)>): $Decoder<($Map<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundedMapCodec$$Type<K, V> = ({"keyCodec"?: $Codec$$Type<(any)>, "elementCodec"?: $Codec$$Type<(any)>}) | ([keyCodec?: $Codec$$Type<(any)>, elementCodec?: $Codec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboundedMapCodec_<K, V> = $UnboundedMapCodec$$Type<(K), (V)>;
}}
declare module "com.mojang.brigadier.suggestion.Suggestion" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $Suggestion implements $Comparable<($Suggestion)> {

constructor(arg0: $StringRange$$Type, arg1: string)
constructor(arg0: $StringRange$$Type, arg1: string, arg2: $Message$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "expand"(arg0: string, arg1: $StringRange$$Type): $Suggestion
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Suggestion$$Type): integer
public "apply"(arg0: string): string
public "compareToIgnoreCase"(arg0: $Suggestion$$Type): integer
public "getText"(): string
public "getRange"(): $StringRange
public "getTooltip"(): $Message
get "text"(): string
get "range"(): $StringRange
get "tooltip"(): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Suggestion$$Type = ($Suggestion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Suggestion_ = $Suggestion$$Type;
}}
declare module "com.mojang.datafixers.functions.PointFree" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $PointFree<T> {

constructor()

public "type"(): $Type<(T)>
public "toString"(): string
public "toString"(arg0: integer): string
public static "indent"(arg0: integer): string
public "eval"(): $Function<($DynamicOps<(any)>), (T)>
public "evalCached"(): $Function<($DynamicOps<(any)>), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointFree$$Type<T> = ($PointFree<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointFree_<T> = $PointFree$$Type<(T)>;
}}
declare module "com.mojang.authlib.properties.PropertyMap" {
import {$Property, $Property$$Type} from "com.mojang.authlib.properties.Property"
import {$ForwardingMultimap, $ForwardingMultimap$$Type} from "com.google.common.collect.ForwardingMultimap"

export class $PropertyMap extends $ForwardingMultimap<(string), ($Property)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyMap$$Type = ($PropertyMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyMap_ = $PropertyMap$$Type;
}}
declare module "com.mojang.blaze3d.platform.MonitorCreator" {
import {$Monitor, $Monitor$$Type} from "com.mojang.blaze3d.platform.Monitor"

export interface $MonitorCreator {

 "createMonitor"(arg0: long): $Monitor

(arg0: long): $Monitor$$Type
}

export namespace $MonitorCreator {
const probejs$$marker: never
}
export class $MonitorCreator$$Static implements $MonitorCreator {


 "createMonitor"(arg0: long): $Monitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorCreator$$Type = ((arg0: long) => $Monitor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorCreator_ = $MonitorCreator$$Type;
}}
declare module "com.mojang.brigadier.arguments.StringArgumentType$StringType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $StringArgumentType$StringType extends $Enum<($StringArgumentType$StringType)> {
static readonly "QUOTABLE_PHRASE": $StringArgumentType$StringType
static readonly "GREEDY_PHRASE": $StringArgumentType$StringType
static readonly "SINGLE_WORD": $StringArgumentType$StringType


public "getExamples"(): $Collection<(string)>
public static "values"(): ($StringArgumentType$StringType)[]
public static "valueOf"(arg0: string): $StringArgumentType$StringType
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentType$StringType$$Type = (("single_word") | ("quotable_phrase") | ("greedy_phrase"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringArgumentType$StringType_ = $StringArgumentType$StringType$$Type;
}}
declare module "com.mojang.authlib.ProfileLookupCallback" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export interface $ProfileLookupCallback {

 "onProfileLookupFailed"(arg0: string, arg1: $Exception$$Type): void
 "onProfileLookupSucceeded"(arg0: $GameProfile$$Type): void
}

export namespace $ProfileLookupCallback {
const probejs$$marker: never
}
export class $ProfileLookupCallback$$Static implements $ProfileLookupCallback {


 "onProfileLookupFailed"(arg0: string, arg1: $Exception$$Type): void
 "onProfileLookupSucceeded"(arg0: $GameProfile$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileLookupCallback$$Type = ($ProfileLookupCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProfileLookupCallback_ = $ProfileLookupCallback$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService" {
import {$HttpAuthenticationService, $HttpAuthenticationService$$Type} from "com.mojang.authlib.HttpAuthenticationService"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$UserApiService, $UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$ServicesKeySet, $ServicesKeySet$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import {$Environment, $Environment$$Type} from "com.mojang.authlib.Environment"
import {$MinecraftSessionService, $MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository, $GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"

export class $YggdrasilAuthenticationService extends $HttpAuthenticationService {

constructor(arg0: $Proxy$$Type)
constructor(arg0: $Proxy$$Type, arg1: $Environment$$Type)

public "getServicesKeySet"(): $ServicesKeySet
public "createUserApiService"(arg0: string): $UserApiService
public "createMinecraftSessionService"(): $MinecraftSessionService
public "createProfileRepository"(): $GameProfileRepository
get "servicesKeySet"(): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YggdrasilAuthenticationService$$Type = ($YggdrasilAuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YggdrasilAuthenticationService_ = $YggdrasilAuthenticationService$$Type;
}}
declare module "com.mojang.realmsclient.dto.Subscription" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$Subscription$SubscriptionType, $Subscription$SubscriptionType$$Type} from "com.mojang.realmsclient.dto.Subscription$SubscriptionType"

export class $Subscription extends $ValueObject {
 "daysLeft": integer
 "type": $Subscription$SubscriptionType
 "startDate": long

constructor()

public static "parse"(arg0: string): $Subscription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subscription$$Type = ($Subscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Subscription_ = $Subscription$$Type;
}}
declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function" {
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export interface $Dynamic2CommandExceptionType$Function {

 "apply"(arg0: any, arg1: any): $Message

(arg0: any, arg1: any): $Message$$Type
}

export namespace $Dynamic2CommandExceptionType$Function {
const probejs$$marker: never
}
export class $Dynamic2CommandExceptionType$Function$$Static implements $Dynamic2CommandExceptionType$Function {


 "apply"(arg0: any, arg1: any): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic2CommandExceptionType$Function$$Type = ((arg0: any, arg1: any) => $Message$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic2CommandExceptionType$Function_ = $Dynamic2CommandExceptionType$Function$$Type;
}}
declare module "com.mojang.datafixers.kinds.App2" {
import {$K2, $K2$$Type} from "com.mojang.datafixers.kinds.K2"

export interface $App2<F extends $K2, A, B> {

}

export namespace $App2 {
const probejs$$marker: never
}
export class $App2$$Static<F extends $K2, A, B> implements $App2 {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $App2$$Type<F, A, B> = ($App2<(F), (A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $App2_<F, A, B> = $App2$$Type<(F), (A), (B)>;
}}
declare module "com.mojang.datafixers.functions.PointFreeRule" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PointFree, $PointFree$$Type} from "com.mojang.datafixers.functions.PointFree"

export interface $PointFreeRule {

 "rewrite"<A>(arg0: $PointFree$$Type<(A)>): $Optional<($PointFree<(A)>)>
 "rewriteOrNop"<A>(arg0: $PointFree$$Type<(A)>): $PointFree<(A)>

(arg0: $PointFree<(A)>): $Optional$$Type<($PointFree$$Type<(A)>)>
}

export namespace $PointFreeRule {
function seq(...arg0: ($PointFreeRule$$Type)[]): $PointFreeRule
function all(arg0: $PointFreeRule$$Type): $PointFreeRule
function choice(...arg0: ($PointFreeRule$$Type)[]): $PointFreeRule
function one(arg0: $PointFreeRule$$Type): $PointFreeRule
function nop(): $PointFreeRule
function everywhere(arg0: $PointFreeRule$$Type, arg1: $PointFreeRule$$Type): $PointFreeRule
function many(arg0: $PointFreeRule$$Type): $PointFreeRule
function once(arg0: $PointFreeRule$$Type): $PointFreeRule
const probejs$$marker: never
}
export class $PointFreeRule$$Static implements $PointFreeRule {


static "seq"(...arg0: ($PointFreeRule$$Type)[]): $PointFreeRule
static "all"(arg0: $PointFreeRule$$Type): $PointFreeRule
static "choice"(...arg0: ($PointFreeRule$$Type)[]): $PointFreeRule
static "one"(arg0: $PointFreeRule$$Type): $PointFreeRule
 "rewrite"<A>(arg0: $PointFree$$Type<(A)>): $Optional<($PointFree<(A)>)>
static "nop"(): $PointFreeRule
static "everywhere"(arg0: $PointFreeRule$$Type, arg1: $PointFreeRule$$Type): $PointFreeRule
static "many"(arg0: $PointFreeRule$$Type): $PointFreeRule
static "once"(arg0: $PointFreeRule$$Type): $PointFreeRule
 "rewriteOrNop"<A>(arg0: $PointFree$$Type<(A)>): $PointFree<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointFreeRule$$Type = ((arg0: $PointFree<(A)>) => $Optional$$Type<($PointFree$$Type<(A)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointFreeRule_ = $PointFreeRule$$Type;
}}
declare module "com.mojang.blaze3d.shaders.Program" {
import {$GlslPreprocessor, $GlslPreprocessor$$Type} from "com.mojang.blaze3d.preprocessor.GlslPreprocessor"
import {$Shader, $Shader$$Type} from "com.mojang.blaze3d.shaders.Shader"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Program$Type, $Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $Program {


public "getName"(): string
public "close"(): void
public static "compileShader"(arg0: $Program$Type$$Type, arg1: string, arg2: $InputStream$$Type, arg3: string, arg4: $GlslPreprocessor$$Type): $Program
public "attachToShader"(arg0: $Shader$$Type): void
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$$Type = ($Program);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Program_ = $Program$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexBuffer$Usage" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $VertexBuffer$Usage extends $Enum<($VertexBuffer$Usage)> {
static readonly "STATIC": $VertexBuffer$Usage
static readonly "DYNAMIC": $VertexBuffer$Usage


public static "values"(): ($VertexBuffer$Usage)[]
public static "valueOf"(arg0: string): $VertexBuffer$Usage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuffer$Usage$$Type = (("static") | ("dynamic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBuffer$Usage_ = $VertexBuffer$Usage$$Type;
}}
declare module "com.mojang.brigadier.suggestion.SuggestionsBuilder" {
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $SuggestionsBuilder {

constructor(arg0: string, arg1: string, arg2: integer)
constructor(arg0: string, arg1: integer)

public "getInput"(): string
public "add"(arg0: $SuggestionsBuilder$$Type): $SuggestionsBuilder
public "build"(): $Suggestions
public "getRemaining"(): string
public "buildFuture"(): $CompletableFuture<($Suggestions)>
public "createOffset"(arg0: integer): $SuggestionsBuilder
public "getStart"(): integer
public "restart"(): $SuggestionsBuilder
public "getRemainingLowerCase"(): string
public "suggest"(arg0: integer, arg1: $Message$$Type): $SuggestionsBuilder
public "suggest"(arg0: string): $SuggestionsBuilder
public "suggest"(arg0: string, arg1: $Message$$Type): $SuggestionsBuilder
public "suggest"(arg0: integer): $SuggestionsBuilder
get "input"(): string
get "remaining"(): string
get "start"(): integer
get "remainingLowerCase"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionsBuilder$$Type = ($SuggestionsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuggestionsBuilder_ = $SuggestionsBuilder$$Type;
}}
declare module "com.mojang.authlib.minecraft.UserApiService$UserProperties" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UserApiService$UserFlag, $UserApiService$UserFlag$$Type} from "com.mojang.authlib.minecraft.UserApiService$UserFlag"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BanDetails, $BanDetails$$Type} from "com.mojang.authlib.minecraft.BanDetails"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $UserApiService$UserProperties extends $Record {

constructor(flags: $Set$$Type<($UserApiService$UserFlag$$Type)>, bannedScopes: $Map$$Type<(string), ($BanDetails$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "flags"(): $Set<($UserApiService$UserFlag)>
public "hashCode"(): integer
public "flag"(arg0: $UserApiService$UserFlag$$Type): boolean
public "bannedScopes"(): $Map<(string), ($BanDetails)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$UserProperties$$Type = ({"flags"?: $Set$$Type<($UserApiService$UserFlag$$Type)>, "bannedScopes"?: $Map$$Type<(string), ($BanDetails$$Type)>}) | ([flags?: $Set$$Type<($UserApiService$UserFlag$$Type)>, bannedScopes?: $Map$$Type<(string), ($BanDetails$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserApiService$UserProperties_ = $UserApiService$UserProperties$$Type;
}}
declare module "com.mojang.authlib.HttpAuthenticationService" {
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AuthenticationService, $AuthenticationService$$Type} from "com.mojang.authlib.AuthenticationService"
import {$URL, $URL$$Type} from "java.net.URL"
import {$MinecraftSessionService, $MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository, $GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"

export class $HttpAuthenticationService implements $AuthenticationService {


public static "constantURL"(arg0: string): $URL
public static "concatenateURL"(arg0: $URL$$Type, arg1: string): $URL
public "getProxy"(): $Proxy
public static "buildQuery"(arg0: $Map$$Type<(string), (any)>): string
public "createMinecraftSessionService"(): $MinecraftSessionService
public "createProfileRepository"(): $GameProfileRepository
get "proxy"(): $Proxy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpAuthenticationService$$Type = ($HttpAuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HttpAuthenticationService_ = $HttpAuthenticationService$$Type;
}}
declare module "com.mojang.authlib.minecraft.report.AbuseReport" {
import {$ReportedEntity, $ReportedEntity$$Type} from "com.mojang.authlib.minecraft.report.ReportedEntity"
import {$ReportEvidence, $ReportEvidence$$Type} from "com.mojang.authlib.minecraft.report.ReportEvidence"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbuseReport extends $Record {

constructor(opinionComments: string, reason: string, evidence: $ReportEvidence$$Type, skinUrl: string, reportedEntity: $ReportedEntity$$Type, createdTime: $Instant$$Type)

public static "name"(arg0: string, arg1: $ReportedEntity$$Type, arg2: $Instant$$Type): $AbuseReport
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reason"(): string
public static "skin"(arg0: string, arg1: string, arg2: string, arg3: $ReportedEntity$$Type, arg4: $Instant$$Type): $AbuseReport
public "createdTime"(): $Instant
public "opinionComments"(): string
public "reportedEntity"(): $ReportedEntity
public static "chat"(arg0: string, arg1: string, arg2: $ReportEvidence$$Type, arg3: $ReportedEntity$$Type, arg4: $Instant$$Type): $AbuseReport
public "evidence"(): $ReportEvidence
public "skinUrl"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReport$$Type = ({"opinionComments"?: string, "skinUrl"?: string, "reason"?: string, "evidence"?: $ReportEvidence$$Type, "reportedEntity"?: $ReportedEntity$$Type, "createdTime"?: $Instant$$Type}) | ([opinionComments?: string, skinUrl?: string, reason?: string, evidence?: $ReportEvidence$$Type, reportedEntity?: $ReportedEntity$$Type, createdTime?: $Instant$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReport_ = $AbuseReport$$Type;
}}
declare module "com.mojang.realmsclient.dto.ValueObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ValueObject {

constructor()

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueObject$$Type = ($ValueObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueObject_ = $ValueObject$$Type;
}}
declare module "com.mojang.realmsclient.client.RealmsClient$Environment" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export class $RealmsClient$Environment extends $Enum<($RealmsClient$Environment)> {
readonly "baseUrl": string
readonly "protocol": string
static readonly "STAGE": $RealmsClient$Environment
static readonly "LOCAL": $RealmsClient$Environment
static readonly "PRODUCTION": $RealmsClient$Environment


public static "values"(): ($RealmsClient$Environment)[]
public static "valueOf"(arg0: string): $RealmsClient$Environment
public static "byName"(arg0: string): $Optional<($RealmsClient$Environment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$Environment$$Type = (("production") | ("stage") | ("local"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsClient$Environment_ = $RealmsClient$Environment$$Type;
}}
declare module "com.mojang.authlib.properties.Property" {
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Property extends $Record {

constructor(arg0: string, arg1: string)
constructor(name: string, value: string, signature: string)

public "signature"(): string
public "name"(): string
public "value"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "isSignatureValid"(arg0: $PublicKey$$Type): boolean
public "hasSignature"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$$Type = ({"signature"?: string, "name"?: string, "value"?: string}) | ([signature?: string, name?: string, value?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property_ = $Property$$Type;
}}
declare module "com.mojang.brigadier.builder.LiteralArgumentBuilder" {
import {$ArgumentBuilder, $ArgumentBuilder$$Type} from "com.mojang.brigadier.builder.ArgumentBuilder"
import {$LiteralCommandNode, $LiteralCommandNode$$Type} from "com.mojang.brigadier.tree.LiteralCommandNode"

export class $LiteralArgumentBuilder<S> extends $ArgumentBuilder<(S), ($LiteralArgumentBuilder<(S)>)> {


public "build"(): $LiteralCommandNode<(S)>
public static "literal"<S>(arg0: string): $LiteralArgumentBuilder<(S)>
public "getLiteral"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralArgumentBuilder$$Type<S> = ($LiteralArgumentBuilder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiteralArgumentBuilder_<S> = $LiteralArgumentBuilder$$Type<(S)>;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormatElement" {
import {$VertexFormatElement$Usage, $VertexFormatElement$Usage$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement$Usage"
import {$VertexFormatElement$Type, $VertexFormatElement$Type$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement$Type"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VertexFormatElement extends $Record {
static readonly "UV2": $VertexFormatElement
static readonly "POSITION": $VertexFormatElement
static readonly "UV": $VertexFormatElement
static readonly "UV1": $VertexFormatElement
static readonly "MAX_COUNT": integer
static readonly "COLOR": $VertexFormatElement
static readonly "UV0": $VertexFormatElement
static readonly "NORMAL": $VertexFormatElement

constructor(id: integer, index: integer, type: $VertexFormatElement$Type$$Type, usage: $VertexFormatElement$Usage$$Type, count: integer)

public "byteSize"(): integer
public "index"(): integer
public "type"(): $VertexFormatElement$Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public static "register"(arg0: integer, arg1: integer, arg2: $VertexFormatElement$Type$$Type, arg3: $VertexFormatElement$Usage$$Type, arg4: integer): $VertexFormatElement
public "id"(): integer
public "mask"(): integer
public "usage"(): $VertexFormatElement$Usage
public static "findNextId"(): integer
public static "elementsFromMask"(arg0: integer): $Stream<($VertexFormatElement)>
public "setupBufferState"(arg0: integer, arg1: long, arg2: integer): void
public static "byId"(arg0: integer): $VertexFormatElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$$Type = ({"index"?: integer, "id"?: integer, "count"?: integer, "usage"?: $VertexFormatElement$Usage$$Type, "type"?: $VertexFormatElement$Type$$Type}) | ([index?: integer, id?: integer, count?: integer, usage?: $VertexFormatElement$Usage$$Type, type?: $VertexFormatElement$Type$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatElement_ = $VertexFormatElement$$Type;
}}
declare module "com.mojang.authlib.minecraft.MinecraftProfileTextures" {
import {$MinecraftProfileTexture, $MinecraftProfileTexture$$Type} from "com.mojang.authlib.minecraft.MinecraftProfileTexture"
import {$SignatureState, $SignatureState$$Type} from "com.mojang.authlib.SignatureState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MinecraftProfileTextures extends $Record {
static readonly "EMPTY": $MinecraftProfileTextures

constructor(skin: $MinecraftProfileTexture$$Type, cape: $MinecraftProfileTexture$$Type, elytra: $MinecraftProfileTexture$$Type, signatureState: $SignatureState$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "elytra"(): $MinecraftProfileTexture
public "skin"(): $MinecraftProfileTexture
public "signatureState"(): $SignatureState
public "cape"(): $MinecraftProfileTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTextures$$Type = ({"skin"?: $MinecraftProfileTexture$$Type, "cape"?: $MinecraftProfileTexture$$Type, "signatureState"?: $SignatureState$$Type, "elytra"?: $MinecraftProfileTexture$$Type}) | ([skin?: $MinecraftProfileTexture$$Type, cape?: $MinecraftProfileTexture$$Type, signatureState?: $SignatureState$$Type, elytra?: $MinecraftProfileTexture$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftProfileTextures_ = $MinecraftProfileTextures$$Type;
}}
declare module "com.mojang.realmsclient.dto.RealmsServerList" {
import {$RealmsServer, $RealmsServer$$Type} from "com.mojang.realmsclient.dto.RealmsServer"
import {$List, $List$$Type} from "java.util.List"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $RealmsServerList extends $ValueObject {
 "servers": $List<($RealmsServer)>

constructor()

public static "parse"(arg0: string): $RealmsServerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerList$$Type = ($RealmsServerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerList_ = $RealmsServerList$$Type;
}}
declare module "com.mojang.datafixers.types.Type$TypeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Type$TypeError {

constructor(arg0: string)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$TypeError$$Type = ($Type$TypeError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$TypeError_ = $Type$TypeError$$Type;
}}
declare module "com.mojang.brigadier.builder.ArgumentBuilder" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SingleRedirectModifier, $SingleRedirectModifier$$Type} from "com.mojang.brigadier.SingleRedirectModifier"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"

export class $ArgumentBuilder<S, T extends $ArgumentBuilder<(S), (T)>> {

constructor()

public "build"(): $CommandNode<(S)>
public "requires"(arg0: $Predicate$$Type<(S)>): T
public "fork"(arg0: $CommandNode$$Type<(S)>, arg1: $RedirectModifier$$Type<(S)>): T
public "redirect"(arg0: $CommandNode$$Type<(S)>): T
public "redirect"(arg0: $CommandNode$$Type<(S)>, arg1: $SingleRedirectModifier$$Type<(S)>): T
public "then"(arg0: $ArgumentBuilder$$Type<(S), (any)>): T
public "then"(arg0: $CommandNode$$Type<(S)>): T
public "getRequirement"(): $Predicate<(S)>
public "getRedirect"(): $CommandNode<(S)>
public "getArguments"(): $Collection<($CommandNode<(S)>)>
public "isFork"(): boolean
public "forward"(arg0: $CommandNode$$Type<(S)>, arg1: $RedirectModifier$$Type<(S)>, arg2: boolean): T
public "executes"(arg0: $Command$$Type<(S)>): T
public "getCommand"(): $Command<(S)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
get "requirement"(): $Predicate<(S)>
get "arguments"(): $Collection<($CommandNode<(S)>)>
get "command"(): $Command<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentBuilder$$Type<S, T> = ($ArgumentBuilder<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentBuilder_<S, T> = $ArgumentBuilder$$Type<(S), (T)>;
}}
declare module "com.mojang.realmsclient.dto.WorldTemplate" {
import {$WorldTemplate$WorldTemplateType, $WorldTemplate$WorldTemplateType$$Type} from "com.mojang.realmsclient.dto.WorldTemplate$WorldTemplateType"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export class $WorldTemplate extends $ValueObject {
 "trailer": string
 "image": string
 "author": string
 "name": string
 "link": string
 "recommendedPlayers": string
 "id": string
 "type": $WorldTemplate$WorldTemplateType
 "version": string

constructor()

public static "parse"(arg0: $JsonObject$$Type): $WorldTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplate$$Type = ($WorldTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTemplate_ = $WorldTemplate$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.ServicesKeyType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ServicesKeyType extends $Enum<($ServicesKeyType)> {
static readonly "PROFILE_KEY": $ServicesKeyType
static readonly "PROFILE_PROPERTY": $ServicesKeyType


public static "values"(): ($ServicesKeyType)[]
public static "valueOf"(arg0: string): $ServicesKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeyType$$Type = (("profile_property") | ("profile_key"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServicesKeyType_ = $ServicesKeyType$$Type;
}}
declare module "com.mojang.datafixers.util.Unit" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Unit extends $Enum<($Unit)> {
static readonly "INSTANCE": $Unit


public "toString"(): string
public static "values"(): ($Unit)[]
public static "valueOf"(arg0: string): $Unit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unit$$Type = (("instance"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Unit_ = $Unit$$Type;
}}
declare module "com.mojang.blaze3d.audio.Channel" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AudioStream, $AudioStream$$Type} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBuffer, $SoundBuffer$$Type} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $Channel {
static readonly "BUFFER_DURATION_SECONDS": integer


public "setPitch"(arg0: float): void
public "stop"(): void
public "destroy"(): void
public "updateStream"(): void
public "stopped"(): boolean
public "pause"(): void
public "setRelative"(arg0: boolean): void
public "setSelfPosition"(arg0: $Vec3$$Type): void
public "attachStaticBuffer"(arg0: $SoundBuffer$$Type): void
public "disableAttenuation"(): void
public "linearAttenuation"(arg0: float): void
public "attachBufferStream"(arg0: $AudioStream$$Type): void
public "setLooping"(arg0: boolean): void
public "setVolume"(arg0: float): void
public "unpause"(): void
public "playing"(): boolean
public "play"(): void
set "pitch"(value: float)
set "relative"(value: boolean)
set "selfPosition"(value: $Vec3$$Type)
set "looping"(value: boolean)
set "volume"(value: float)
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
declare module "com.mojang.serialization.Decoder$Simple" {
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"

export interface $Decoder$Simple<A> {

 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>

(arg0: $Dynamic<(T)>): $DataResult$$Type<(A)>
}

export namespace $Decoder$Simple {
const probejs$$marker: never
}
export class $Decoder$Simple$$Static<A> implements $Decoder$Simple {


 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Simple$$Type<A> = ((arg0: $Dynamic<(T)>) => $DataResult$$Type<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder$Simple_<A> = $Decoder$Simple$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.dto.RealmsServer$Compatibility" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RealmsServer$Compatibility extends $Enum<($RealmsServer$Compatibility)> {
static readonly "COMPATIBLE": $RealmsServer$Compatibility
static readonly "NEEDS_DOWNGRADE": $RealmsServer$Compatibility
static readonly "UNVERIFIABLE": $RealmsServer$Compatibility
static readonly "NEEDS_UPGRADE": $RealmsServer$Compatibility
static readonly "INCOMPATIBLE": $RealmsServer$Compatibility
static readonly "RELEASE_TYPE_INCOMPATIBLE": $RealmsServer$Compatibility


public static "values"(): ($RealmsServer$Compatibility)[]
public static "valueOf"(arg0: string): $RealmsServer$Compatibility
public "isCompatible"(): boolean
public "needsDowngrade"(): boolean
public "needsUpgrade"(): boolean
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$Compatibility$$Type = (("unverifiable") | ("incompatible") | ("release_type_incompatible") | ("needs_downgrade") | ("needs_upgrade") | ("compatible"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer$Compatibility_ = $RealmsServer$Compatibility$$Type;
}}
declare module "com.mojang.serialization.Decoder" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"

export interface $Decoder<A> {

 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Decoder<(A)>
 "promotePartial"(arg0: $Consumer$$Type<(string)>): $Decoder<(A)>
 "simple"(): $Decoder$Simple<(A)>
 "fieldOf"(arg0: string): $MapDecoder<(A)>

(arg0: $DynamicOps<(T)>, arg1: T): $DataResult$$Type<($Pair$$Type<(A), (T)>)>
}

export namespace $Decoder {
function error<A>(arg0: string): $Decoder<(A)>
function unit<A>(arg0: A): $MapDecoder<(A)>
function unit<A>(arg0: $Supplier$$Type<(A)>): $MapDecoder<(A)>
function ofTerminal<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
function ofSimple<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
function ofBoxed<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
const probejs$$marker: never
}
export class $Decoder$$Static<A> implements $Decoder {


 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
static "error"<A>(arg0: string): $Decoder<(A)>
static "unit"<A>(arg0: A): $MapDecoder<(A)>
static "unit"<A>(arg0: $Supplier$$Type<(A)>): $MapDecoder<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Decoder<(A)>
 "promotePartial"(arg0: $Consumer$$Type<(string)>): $Decoder<(A)>
 "simple"(): $Decoder$Simple<(A)>
static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
 "fieldOf"(arg0: string): $MapDecoder<(A)>
static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$$Type<A> = ((arg0: $DynamicOps<(T)>, arg1: T) => $DataResult$$Type<($Pair$$Type<(A), (T)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder_<A> = $Decoder$$Type<(A)>;
}}
declare module "com.mojang.datafixers.types.templates.RecursivePoint$RecursivePointType" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TypeRewriteRule, $TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$$Type} from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$$Type} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$Type$TypeMatcher, $Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$View, $View$$Type} from "com.mojang.datafixers.View"
import {$PointFreeRule, $PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $RecursivePoint$RecursivePointType<A> extends $Type<(A)> {

constructor(arg0: $RecursiveTypeFamily$$Type, arg1: integer, arg2: $Supplier$$Type<($Type$$Type<(A)>)>)

public "index"(): integer
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "toString"(): string
public "hashCode"(): integer
public "out"(): $View<(A), (A)>
public "in"(): $View<(A), (A)>
public "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $RewriteResult<(A), (any)>
public "family"(): $RecursiveTypeFamily
public "one"(arg0: $TypeRewriteRule$$Type): $Optional<($RewriteResult<(A), (any)>)>
public "point"(arg0: $DynamicOps$$Type<(any)>): $Optional<(A)>
public "everywhere"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $Optional<($RewriteResult<(A), (any)>)>
public "updateMu"(arg0: $RecursiveTypeFamily$$Type): $Type<(any)>
public "unfold"(): $Type<(A)>
public "findChoiceType"(arg0: string, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(any)>)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findCheckedType"(arg0: integer): $Optional<($Type<(any)>)>
public "findFieldTypeOpt"(arg0: string): $Optional<($Type<(any)>)>
public "buildTemplate"(): $TypeTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecursivePoint$RecursivePointType$$Type<A> = ($RecursivePoint$RecursivePointType<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecursivePoint$RecursivePointType_<A> = $RecursivePoint$RecursivePointType$$Type<(A)>;
}}
declare module "com.mojang.brigadier.context.CommandContextBuilder" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ParsedArgument, $ParsedArgument$$Type} from "com.mojang.brigadier.context.ParsedArgument"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$SuggestionContext, $SuggestionContext$$Type} from "com.mojang.brigadier.context.SuggestionContext"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$ParsedCommandNode, $ParsedCommandNode$$Type} from "com.mojang.brigadier.context.ParsedCommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"

export class $CommandContextBuilder<S> {

constructor(arg0: $CommandDispatcher$$Type<(S)>, arg1: S, arg2: $CommandNode$$Type<(S)>, arg3: integer)

public "findSuggestionContext"(arg0: integer): $SuggestionContext<(S)>
public "copy"(): $CommandContextBuilder<(S)>
public "build"(arg0: string): $CommandContext<(S)>
public "getChild"(): $CommandContextBuilder<(S)>
public "getSource"(): S
public "getRange"(): $StringRange
public "withCommand"(arg0: $Command$$Type<(S)>): $CommandContextBuilder<(S)>
public "withNode"(arg0: $CommandNode$$Type<(S)>, arg1: $StringRange$$Type): $CommandContextBuilder<(S)>
public "withSource"(arg0: S): $CommandContextBuilder<(S)>
public "getArguments"(): $Map<(string), ($ParsedArgument<(S), (any)>)>
public "getLastChild"(): $CommandContextBuilder<(S)>
public "getRootNode"(): $CommandNode<(S)>
public "getNodes"(): $List<($ParsedCommandNode<(S)>)>
public "withArgument"(arg0: string, arg1: $ParsedArgument$$Type<(S), (any)>): $CommandContextBuilder<(S)>
public "getDispatcher"(): $CommandDispatcher<(S)>
public "getCommand"(): $Command<(S)>
public "withChild"(arg0: $CommandContextBuilder$$Type<(S)>): $CommandContextBuilder<(S)>
get "child"(): $CommandContextBuilder<(S)>
get "source"(): S
get "range"(): $StringRange
get "arguments"(): $Map<(string), ($ParsedArgument<(S), (any)>)>
get "lastChild"(): $CommandContextBuilder<(S)>
get "rootNode"(): $CommandNode<(S)>
get "nodes"(): $List<($ParsedCommandNode<(S)>)>
get "dispatcher"(): $CommandDispatcher<(S)>
get "command"(): $Command<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandContextBuilder$$Type<S> = ($CommandContextBuilder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandContextBuilder_<S> = $CommandContextBuilder$$Type<(S)>;
}}
declare module "com.mojang.serialization.MapDecoder" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $MapDecoder<A> extends $Keyable {

 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<(A)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $MapDecoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $MapDecoder<(B)>
 "decoder"(): $Decoder<(A)>
 "ap"<E>(arg0: $MapDecoder$$Type<($Function$$Type<(A), (E)>)>): $MapDecoder<(E)>
 "compressedDecode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $MapDecoder<(A)>
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
}

export namespace $MapDecoder {
function forStrings(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
const probejs$$marker: never
}
export class $MapDecoder$$Static<A> implements $MapDecoder {


 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<(A)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $MapDecoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $MapDecoder<(B)>
 "decoder"(): $Decoder<(A)>
 "ap"<E>(arg0: $MapDecoder$$Type<($Function$$Type<(A), (E)>)>): $MapDecoder<(E)>
 "compressedDecode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $MapDecoder<(A)>
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecoder$$Type<A> = ($MapDecoder<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDecoder_<A> = $MapDecoder$$Type<(A)>;
}}
declare module "com.mojang.brigadier.context.ParsedArgument" {
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"

export class $ParsedArgument<S, T> {

constructor(arg0: integer, arg1: integer, arg2: T)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getResult"(): T
public "getRange"(): $StringRange
get "result"(): T
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedArgument$$Type<S, T> = ($ParsedArgument<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsedArgument_<S, T> = $ParsedArgument$$Type<(S), (T)>;
}}
declare module "com.mojang.datafixers.kinds.App" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export interface $App<F extends $K1, A> {

}

export namespace $App {
const probejs$$marker: never
}
export class $App$$Static<F extends $K1, A> implements $App {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $App$$Type<F, A> = ($App<(F), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $App_<F, A> = $App$$Type<(F), (A)>;
}}
declare module "com.mojang.blaze3d.platform.NativeImage" {
import {$IntUnaryOperator, $IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$File, $File$$Type} from "java.io.File"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$NativeImage$Format, $NativeImage$Format$$Type} from "com.mojang.blaze3d.platform.NativeImage$Format"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $NativeImage implements $AutoCloseable {

constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: $NativeImage$Format$$Type, arg1: integer, arg2: integer, arg3: boolean)

public "writeToFile"(arg0: $Path$$Type): void
public "writeToFile"(arg0: $File$$Type): void
public "toString"(): string
public "format"(): $NativeImage$Format
public static "read"(arg0: $InputStream$$Type): $NativeImage
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $InputStream$$Type): $NativeImage
public static "read"(arg0: (byte)[]): $NativeImage
public static "read"(arg0: $ByteBuffer$$Type): $NativeImage
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $ByteBuffer$$Type): $NativeImage
public "close"(): void
public "copyFrom"(arg0: $NativeImage$$Type): void
public "getLuminanceOrAlpha"(arg0: integer, arg1: integer): byte
public "getGreenOrLuminance"(arg0: integer, arg1: integer): byte
public "downloadDepthBuffer"(arg0: float): void
public "getWidth"(): integer
public "asByteArray"(): (byte)[]
public "untrack"(): void
public "getHeight"(): integer
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void
public "getPixelsRGBA"(): (integer)[]
public "setPixelLuminance"(arg0: integer, arg1: integer, arg2: byte): void
public "getRedOrLuminance"(arg0: integer, arg1: integer): byte
/**
 * 
 * @deprecated
 */
public "makePixelArray"(): (integer)[]
public "getPixelRGBA"(arg0: integer, arg1: integer): integer
public "applyToAllPixels"(arg0: $IntUnaryOperator$$Type): void
public "downloadTexture"(arg0: integer, arg1: boolean): void
public "copyFromFont"(arg0: $FT_Face$$Type, arg1: integer): boolean
public "setPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): void
public "getBlueOrLuminance"(arg0: integer, arg1: integer): byte
public "resizeSubRectTo"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $NativeImage$$Type): void
public "drawPixels"(): void
public "mappedCopy"(arg0: $IntUnaryOperator$$Type): $NativeImage
public "blendPixel"(arg0: integer, arg1: integer, arg2: integer): void
public "flipY"(): void
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "copyRect"(arg0: $NativeImage$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "copyRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): void
get "width"(): integer
get "height"(): integer
get "pixelsRGBA"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$$Type = ($NativeImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImage_ = $NativeImage$$Type;
}}
declare module "com.mojang.realmsclient.dto.RealmsWorldOptions" {
import {$RealmsServer$Compatibility, $RealmsServer$Compatibility$$Type} from "com.mojang.realmsclient.dto.RealmsServer$Compatibility"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export class $RealmsWorldOptions extends $ValueObject {
readonly "spawnMonsters": boolean
readonly "spawnProtection": integer
readonly "commandBlocks": boolean
 "templateImage": string
readonly "pvp": boolean
readonly "spawnNPCs": boolean
 "templateId": long
readonly "version": string
 "empty": boolean
readonly "difficulty": integer
readonly "spawnAnimals": boolean
readonly "gameMode": integer
readonly "forceGameMode": boolean
readonly "compatibility": $RealmsServer$Compatibility

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: boolean, arg6: integer, arg7: integer, arg8: boolean, arg9: string, arg10: string, arg11: $RealmsServer$Compatibility$$Type)

public "clone"(): any
public static "parse"(arg0: $JsonObject$$Type): $RealmsWorldOptions
public "toJson"(): string
public static "createEmptyDefaults"(): $RealmsWorldOptions
public "setEmpty"(arg0: boolean): void
public "getSlotName"(arg0: integer): string
public static "createDefaults"(): $RealmsWorldOptions
public "getDefaultSlotName"(arg0: integer): string
set "empty"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsWorldOptions$$Type = ($RealmsWorldOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsWorldOptions_ = $RealmsWorldOptions$$Type;
}}
declare module "com.mojang.realmsclient.dto.WorldTemplatePaginatedList" {
import {$WorldTemplate, $WorldTemplate$$Type} from "com.mojang.realmsclient.dto.WorldTemplate"
import {$List, $List$$Type} from "java.util.List"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $WorldTemplatePaginatedList extends $ValueObject {
 "total": integer
 "size": integer
 "templates": $List<($WorldTemplate)>
 "page": integer

constructor()
constructor(arg0: integer)

public static "parse"(arg0: string): $WorldTemplatePaginatedList
public "isLastPage"(): boolean
get "lastPage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplatePaginatedList$$Type = ($WorldTemplatePaginatedList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTemplatePaginatedList_ = $WorldTemplatePaginatedList$$Type;
}}
declare module "com.mojang.blaze3d.font.GlyphProvider$Conditional" {
import {$FontOption$Filter, $FontOption$Filter$$Type} from "net.minecraft.client.gui.font.FontOption$Filter"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$GlyphProvider, $GlyphProvider$$Type} from "com.mojang.blaze3d.font.GlyphProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable {

constructor(arg0: $GlyphProvider$$Type, arg1: $FontOption$Filter$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "filter"(): $FontOption$Filter
public "provider"(): $GlyphProvider
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$Conditional$$Type = ({"provider"?: $GlyphProvider$$Type, "filter"?: $FontOption$Filter$$Type}) | ([provider?: $GlyphProvider$$Type, filter?: $FontOption$Filter$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphProvider$Conditional_ = $GlyphProvider$Conditional$$Type;
}}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder$Instance" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$RecordCodecBuilder$Instance$Mu, $RecordCodecBuilder$Instance$Mu$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance$Mu"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$Products$P10, $Products$P10$$Type} from "com.mojang.datafixers.Products$P10"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P11, $Products$P11$$Type} from "com.mojang.datafixers.Products$P11"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$Products$P1, $Products$P1$$Type} from "com.mojang.datafixers.Products$P1"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$Products$P16, $Products$P16$$Type} from "com.mojang.datafixers.Products$P16"
import {$Products$P14, $Products$P14$$Type} from "com.mojang.datafixers.Products$P14"
import {$Products$P15, $Products$P15$$Type} from "com.mojang.datafixers.Products$P15"
import {$Products$P12, $Products$P12$$Type} from "com.mojang.datafixers.Products$P12"
import {$Products$P13, $Products$P13$$Type} from "com.mojang.datafixers.Products$P13"
import {$Applicative$Mu, $Applicative$Mu$$Type} from "com.mojang.datafixers.kinds.Applicative$Mu"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9, $Products$P9$$Type} from "com.mojang.datafixers.Products$P9"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15, $Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14, $Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function16, $Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $RecordCodecBuilder$Instance<O> implements $Applicative<($RecordCodecBuilder$Mu<(O)>), ($RecordCodecBuilder$Instance$Mu<(O)>)> {

constructor()

public "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "point"<A>(arg0: A): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "point"<A>(arg0: A, arg1: $Lifecycle$$Type): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "stable"<A>(arg0: A): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "ap2"<A, B, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (B)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift1"<A, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function$$Type<(A), (R)>)>): $Function<($App<($RecordCodecBuilder$Mu<(O)>), (A)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap3"<T1, T2, T3, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "deprecated"<A>(arg0: A, arg1: integer): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<($RecordCodecBuilder$Instance$Mu$$Type<(O)>), ($RecordCodecBuilder$Mu$$Type<(O)>)>): $Applicative<($RecordCodecBuilder$Mu<(O)>), ($RecordCodecBuilder$Instance$Mu<(O)>)>
public "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap"<A, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg15: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift2"<A, B, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<($RecordCodecBuilder$Mu<(O)>), (A)>), ($App<($RecordCodecBuilder$Mu<(O)>), (B)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift3"<T1, T2, T3, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg15: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>, arg16: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T16)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T8)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T9)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T8)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (B)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>): $Products$P11<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>): $Products$P10<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>): $Products$P9<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>, arg15: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T16)>): $Products$P16<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>): $Products$P15<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>): $Products$P14<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>): $Products$P13<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>): $Products$P12<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>): $Products$P3<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>): $Products$P2<($RecordCodecBuilder$Mu<(O)>), (T1), (T2)>
public "group"<T1>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>): $Products$P1<($RecordCodecBuilder$Mu<(O)>), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>): $Products$P8<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>): $Products$P7<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>): $Products$P6<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>): $Products$P5<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>): $Products$P4<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Instance$$Type<O> = ($RecordCodecBuilder$Instance<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder$Instance_<O> = $RecordCodecBuilder$Instance$$Type<(O)>;
}}
declare module "com.mojang.realmsclient.dto.PingResult" {
import {$List, $List$$Type} from "java.util.List"
import {$RegionPingResult, $RegionPingResult$$Type} from "com.mojang.realmsclient.dto.RegionPingResult"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$$Type} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $PingResult extends $ValueObject implements $ReflectionBasedSerialization {
 "pingResults": $List<($RegionPingResult)>
 "realmIds": $List<(long)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingResult$$Type = ($PingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingResult_ = $PingResult$$Type;
}}
declare module "com.mojang.blaze3d.audio.ListenerTransform" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ListenerTransform extends $Record {
static readonly "INITIAL": $ListenerTransform

constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Vec3
public "right"(): $Vec3
public "up"(): $Vec3
public "forward"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListenerTransform$$Type = ({"position"?: $Vec3$$Type, "forward"?: $Vec3$$Type, "up"?: $Vec3$$Type}) | ([position?: $Vec3$$Type, forward?: $Vec3$$Type, up?: $Vec3$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListenerTransform_ = $ListenerTransform$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest" {
import {$AbuseReport, $AbuseReport$$Type} from "com.mojang.authlib.minecraft.report.AbuseReport"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$AbuseReportRequest$ClientInfo, $AbuseReportRequest$ClientInfo$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo"
import {$AbuseReportRequest$RealmInfo, $AbuseReportRequest$RealmInfo$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo"
import {$AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$ThirdPartyServerInfo$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbuseReportRequest extends $Record {

constructor(version: integer, id: $UUID$$Type, report: $AbuseReport$$Type, clientInfo: $AbuseReportRequest$ClientInfo$$Type, thirdPartyServerInfo: $AbuseReportRequest$ThirdPartyServerInfo$$Type, realmInfo: $AbuseReportRequest$RealmInfo$$Type, reportType: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): integer
public "hashCode"(): integer
public "id"(): $UUID
public "report"(): $AbuseReport
public "clientInfo"(): $AbuseReportRequest$ClientInfo
public "realmInfo"(): $AbuseReportRequest$RealmInfo
public "reportType"(): string
public "thirdPartyServerInfo"(): $AbuseReportRequest$ThirdPartyServerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$$Type = ({"version"?: integer, "report"?: $AbuseReport$$Type, "id"?: $UUID$$Type, "realmInfo"?: $AbuseReportRequest$RealmInfo$$Type, "thirdPartyServerInfo"?: $AbuseReportRequest$ThirdPartyServerInfo$$Type, "clientInfo"?: $AbuseReportRequest$ClientInfo$$Type, "reportType"?: string}) | ([version?: integer, report?: $AbuseReport$$Type, id?: $UUID$$Type, realmInfo?: $AbuseReportRequest$RealmInfo$$Type, thirdPartyServerInfo?: $AbuseReportRequest$ThirdPartyServerInfo$$Type, clientInfo?: $AbuseReportRequest$ClientInfo$$Type, reportType?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest_ = $AbuseReportRequest$$Type;
}}
declare module "com.mojang.authlib.GameProfileRepository" {
import {$ProfileLookupCallback, $ProfileLookupCallback$$Type} from "com.mojang.authlib.ProfileLookupCallback"

export interface $GameProfileRepository {

 "findProfilesByNames"(arg0: (string)[], arg1: $ProfileLookupCallback$$Type): void

(arg0: (string)[], arg1: $ProfileLookupCallback): void
}

export namespace $GameProfileRepository {
const probejs$$marker: never
}
export class $GameProfileRepository$$Static implements $GameProfileRepository {


 "findProfilesByNames"(arg0: (string)[], arg1: $ProfileLookupCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfileRepository$$Type = ((arg0: (string)[], arg1: $ProfileLookupCallback) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameProfileRepository_ = $GameProfileRepository$$Type;
}}
declare module "com.mojang.serialization.MapCodec" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$MapCodec$ResultFunction, $MapCodec$ResultFunction$$Type} from "com.mojang.serialization.MapCodec$ResultFunction"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$CompressorHolder, $CompressorHolder$$Type} from "com.mojang.serialization.CompressorHolder"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$RecordCodecBuilder, $RecordCodecBuilder$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $MapCodec<A> extends $CompressorHolder implements $MapDecoder<(A)>, $MapEncoder<(A)> {

constructor()

public static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
public static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(string)>): $MapCodec<(A)>
public "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $MapCodec<(A)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public "orElse"(arg0: A): $MapCodec<(A)>
public "orElse"(arg0: $UnaryOperator$$Type<(string)>, arg1: A): $MapCodec<(A)>
public "orElse"(arg0: $Consumer$$Type<(string)>, arg1: A): $MapCodec<(A)>
public static "unit"<A>(arg0: A): $MapCodec<(A)>
public static "unit"<A>(arg0: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "orElseGet"(arg0: $Consumer$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "orElseGet"(arg0: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "orElseGet"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $MapCodec<(A)>
public static "recursive"<A>(arg0: string, arg1: $Function$$Type<($Codec<(A)>), ($MapCodec$$Type<(A)>)>): $MapCodec<(A)>
public "dependent"<E>(arg0: $MapCodec$$Type<(E)>, arg1: $Function$$Type<(A), ($Pair$$Type<(E), ($MapCodec$$Type<(E)>)>)>, arg2: $BiFunction$$Type<(A), (E), (A)>): $MapCodec<(A)>
public "stable"(): $MapCodec<(A)>
public static "assumeMapUnsafe"<A>(arg0: $Codec$$Type<(A)>): $MapCodec<(A)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $MapDecoder<(any)>
public "forGetter"<O>(arg0: $Function$$Type<(O), (A)>): $RecordCodecBuilder<(O), (A)>
public "mapResult"(arg0: $MapCodec$ResultFunction$$Type<(A)>): $MapCodec<(A)>
public "deprecated"(arg0: integer): $MapCodec<(A)>
public "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $MapCodec<(S)>
public "setPartial"(arg0: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "fieldOf"(arg0: string): $MapCodec<(A)>
public "codec"(): $Codec<(A)>
public "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $MapCodec<(S)>
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<(A)>
public "map"<B>(arg0: $Function$$Type<(A), (B)>): $MapDecoder<(B)>
public "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $MapDecoder<(B)>
public "decoder"(): $Decoder<(A)>
public "ap"<E>(arg0: $MapDecoder$$Type<($Function$$Type<(A), (E)>)>): $MapDecoder<(E)>
public "compressedDecode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "encoder"(): $Encoder<(A)>
public "compressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>): $RecordBuilder<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
public "comap"<B>(arg0: $Function$$Type<(B), (A)>): $MapEncoder<(B)>
public "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $MapEncoder<(B)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
set "partial"(value: $Supplier$$Type<(A)>)
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeStructureModifierSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeStructureModifierSerializersTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EntitySubPredicateType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EntitySubPredicateTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentValueEffectType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentValueEffectTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenChunkGenerator
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenChunkGeneratorTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenPoolAliasBinding
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenPoolAliasBindingTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenMaterialRule
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenMaterialRuleTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenBiomeSource
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenBiomeSourceTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeGlobalLootModifierSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeGlobalLootModifierSerializersTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeBiomeModifierSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeBiomeModifierSerializersTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.BlockType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.BlockTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentLevelBasedValueType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentLevelBasedValueTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeConditionCodecs
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeConditionCodecsTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentEntityEffectType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentEntityEffectTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenMaterialCondition
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenMaterialConditionTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentProviderType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentProviderTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentLocationBasedEffectType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentLocationBasedEffectTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenDensityFunctionType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenDensityFunctionTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$$Type<A> = (Special.NeoforgeStructureModifierSerializers) | (Special.EntitySubPredicateType) | (Special.EnchantmentValueEffectType) | (Special.WorldgenChunkGenerator) | (Special.WorldgenPoolAliasBinding) | (Special.WorldgenMaterialRule) | (Special.WorldgenBiomeSource) | (Special.NeoforgeGlobalLootModifierSerializers) | (Special.NeoforgeBiomeModifierSerializers) | (Special.BlockType) | (Special.EnchantmentLevelBasedValueType) | (Special.NeoforgeConditionCodecs) | (Special.EnchantmentEntityEffectType) | (Special.WorldgenMaterialCondition) | (Special.EnchantmentProviderType) | (Special.EnchantmentLocationBasedEffectType) | (Special.WorldgenDensityFunctionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCodec_<A> = $MapCodec$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.dto.Backup" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$Date, $Date$$Type} from "java.util.Date"

export class $Backup extends $ValueObject {
 "metadata": $Map<(string), (string)>
 "size": long
 "lastModifiedDate": $Date
 "backupId": string
 "changeList": $Map<(string), (string)>

constructor()

public static "parse"(arg0: $JsonElement$$Type): $Backup
public "isUploadedVersion"(): boolean
public "setUploadedVersion"(arg0: boolean): void
get "uploadedVersion"(): boolean
set "uploadedVersion"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Backup$$Type = ($Backup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Backup_ = $Backup$$Type;
}}
declare module "com.mojang.math.Transformation" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ITransformationExtension, $ITransformationExtension$$Type} from "net.neoforged.neoforge.common.extensions.ITransformationExtension"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $Transformation implements $ITransformationExtension {
static readonly "CODEC": $Codec<($Transformation)>
static readonly "EXTENDED_CODEC": $Codec<($Transformation)>

constructor(arg0: $Matrix4f$$Type)
constructor(arg0: $Vector3f$$Type, arg1: $Quaternionf$$Type, arg2: $Vector3f$$Type, arg3: $Quaternionf$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "identity"(): $Transformation
public "compose"(arg0: $Transformation$$Type): $Transformation
public "getNormalMatrix"(): $Matrix3f
public "inverse"(): $Transformation
public "getScale"(): $Vector3f
public "getMatrix"(): $Matrix4f
public "slerp"(arg0: $Transformation$$Type, arg1: float): $Transformation
public "getTranslation"(): $Vector3f
public "getRightRotation"(): $Quaternionf
public "getLeftRotation"(): $Quaternionf
public "isIdentity"(): boolean
public "rotateTransform"(arg0: $Direction$$Type): $Direction
public "applyOrigin"(arg0: $Vector3f$$Type): $Transformation
public "transformNormal"(arg0: $Vector3f$$Type): void
public "transformPosition"(arg0: $Vector4f$$Type): void
public "blockCenterToCorner"(): $Transformation
public "blockCornerToCenter"(): $Transformation
get "normalMatrix"(): $Matrix3f
get "scale"(): $Vector3f
get "matrix"(): $Matrix4f
get "translation"(): $Vector3f
get "rightRotation"(): $Quaternionf
get "leftRotation"(): $Quaternionf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transformation$$Type = ($Transformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transformation_ = $Transformation$$Type;
}}
declare module "com.mojang.authlib.AuthenticationService" {
import {$MinecraftSessionService, $MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository, $GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"

export interface $AuthenticationService {

 "createMinecraftSessionService"(): $MinecraftSessionService
 "createProfileRepository"(): $GameProfileRepository
}

export namespace $AuthenticationService {
const probejs$$marker: never
}
export class $AuthenticationService$$Static implements $AuthenticationService {


 "createMinecraftSessionService"(): $MinecraftSessionService
 "createProfileRepository"(): $GameProfileRepository
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuthenticationService$$Type = ($AuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuthenticationService_ = $AuthenticationService$$Type;
}}
declare module "com.mojang.brigadier.tree.CommandNode" {
import {$CommandContextBuilder, $CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$AmbiguityConsumer, $AmbiguityConsumer$$Type} from "com.mojang.brigadier.AmbiguityConsumer"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder, $ArgumentBuilder$$Type} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $CommandNode<S> implements $Comparable<($CommandNode<(S)>)> {


public "getExamples"(): $Collection<(string)>
public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $CommandNode$$Type<(S)>): integer
public "canUse"(arg0: S): boolean
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "getChild"(arg0: string): $CommandNode<(S)>
public "getChildren"(): $Collection<($CommandNode<(S)>)>
public "findAmbiguities"(arg0: $AmbiguityConsumer$$Type<(S)>): void
public "getRequirement"(): $Predicate<(S)>
public "getRedirect"(): $CommandNode<(S)>
public "getUsageText"(): string
public "getRelevantNodes"(arg0: $StringReader$$Type): $Collection<($CommandNode<(S)>)>
public "createBuilder"(): $ArgumentBuilder<(S), (any)>
public "addChild"(arg0: $CommandNode$$Type<(S)>): void
public "isFork"(): boolean
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getCommand"(): $Command<(S)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
get "examples"(): $Collection<(string)>
get "name"(): string
get "children"(): $Collection<($CommandNode<(S)>)>
get "requirement"(): $Predicate<(S)>
get "redirect"(): $CommandNode<(S)>
get "usageText"(): string
get "fork"(): boolean
get "command"(): $Command<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandNode$$Type<S> = ($CommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandNode_<S> = $CommandNode$$Type<(S)>;
}}
declare module "com.mojang.serialization.ListBuilder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"

export interface $ListBuilder<T> {

 "ops"(): $DynamicOps<(T)>
 "add"<E>(arg0: E, arg1: $Encoder$$Type<(E)>): $ListBuilder<(T)>
 "add"(arg0: $DataResult$$Type<(T)>): $ListBuilder<(T)>
 "add"(arg0: T): $ListBuilder<(T)>
 "addAll"<E>(arg0: $Iterable$$Type<(E)>, arg1: $Encoder$$Type<(E)>): $ListBuilder<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "build"(arg0: $DataResult$$Type<(T)>): $DataResult<(T)>
 "withErrorsFrom"(arg0: $DataResult$$Type<(any)>): $ListBuilder<(T)>
 "mapError"(arg0: $UnaryOperator$$Type<(string)>): $ListBuilder<(T)>
}

export namespace $ListBuilder {
const probejs$$marker: never
}
export class $ListBuilder$$Static<T> implements $ListBuilder {


 "ops"(): $DynamicOps<(T)>
 "add"<E>(arg0: E, arg1: $Encoder$$Type<(E)>): $ListBuilder<(T)>
 "add"(arg0: $DataResult$$Type<(T)>): $ListBuilder<(T)>
 "add"(arg0: T): $ListBuilder<(T)>
 "addAll"<E>(arg0: $Iterable$$Type<(E)>, arg1: $Encoder$$Type<(E)>): $ListBuilder<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "build"(arg0: $DataResult$$Type<(T)>): $DataResult<(T)>
 "withErrorsFrom"(arg0: $DataResult$$Type<(any)>): $ListBuilder<(T)>
 "mapError"(arg0: $UnaryOperator$$Type<(string)>): $ListBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListBuilder$$Type<T> = ($ListBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListBuilder_<T> = $ListBuilder$$Type<(T)>;
}}
declare module "com.mojang.brigadier.tree.RootCommandNode" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CommandContextBuilder, $CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$ArgumentBuilder, $ArgumentBuilder$$Type} from "com.mojang.brigadier.builder.ArgumentBuilder"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export class $RootCommandNode<S> extends $CommandNode<(S)> {

constructor()

public "getExamples"(): $Collection<(string)>
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "isValidInput"(arg0: string): boolean
public "getUsageText"(): string
public "createBuilder"(): $ArgumentBuilder<(S), (any)>
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "name"(): string
get "usageText"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootCommandNode$$Type<S> = ($RootCommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootCommandNode_<S> = $RootCommandNode$$Type<(S)>;
}}
declare module "com.mojang.serialization.DynamicOps" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$List, $List$$Type} from "java.util.List"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ListBuilder, $ListBuilder$$Type} from "com.mojang.serialization.ListBuilder"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export interface $DynamicOps<T> {

 "getStream"(arg0: T): $DataResult<($Stream<(T)>)>
 "remove"(arg0: T, arg1: string): T
 "get"(arg0: T, arg1: string): $DataResult<(T)>
 "update"(arg0: T, arg1: string, arg2: $Function$$Type<(T), (T)>): T
 "empty"(): T
 "set"(arg0: T, arg1: string, arg2: T): T
 "emptyList"(): T
 "getByteBuffer"(arg0: T): $DataResult<($ByteBuffer)>
 "emptyMap"(): T
 "getMap"(arg0: T): $DataResult<($MapLike<(T)>)>
 "createMap"(arg0: $Map$$Type<(T), (T)>): T
 "createMap"(arg0: $Stream$$Type<($Pair$$Type<(T), (T)>)>): T
 "createLong"(arg0: long): T
 "createString"(arg0: string): T
 "createList"(arg0: $Stream$$Type<(T)>): T
 "getStringValue"(arg0: T): $DataResult<(string)>
 "getBooleanValue"(arg0: T): $DataResult<(boolean)>
 "getList"(arg0: T): $DataResult<($Consumer<($Consumer<(T)>)>)>
 "createDouble"(arg0: double): T
 "createFloat"(arg0: float): T
 "createLongList"(arg0: $LongStream$$Type): T
 "mergeToPrimitive"(arg0: T, arg1: T): $DataResult<(T)>
 "mergeToList"(arg0: T, arg1: T): $DataResult<(T)>
 "mergeToList"(arg0: T, arg1: $List$$Type<(T)>): $DataResult<(T)>
 "getLongStream"(arg0: T): $DataResult<($LongStream)>
 "createShort"(arg0: short): T
 "createByteList"(arg0: $ByteBuffer$$Type): T
 "createIntList"(arg0: $IntStream$$Type): T
 "getIntStream"(arg0: T): $DataResult<($IntStream)>
 "createBoolean"(arg0: boolean): T
 "getNumberValue"(arg0: T, arg1: number): number
 "getNumberValue"(arg0: T): $DataResult<(number)>
 "listBuilder"(): $ListBuilder<(T)>
 "compressMaps"(): boolean
 "withParser"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<(E)>)>
 "convertMap"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "getGeneric"(arg0: T, arg1: T): $DataResult<(T)>
 "convertTo"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "createNumeric"(arg0: number): T
 "getMapValues"(arg0: T): $DataResult<($Stream<($Pair<(T), (T)>)>)>
 "getMapEntries"(arg0: T): $DataResult<($Consumer<($BiConsumer<(T), (T)>)>)>
 "withEncoder"<E>(arg0: $Encoder$$Type<(E)>): $Function<(E), ($DataResult<(T)>)>
 "withDecoder"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<($Pair<(E), (T)>)>)>
 "updateGeneric"(arg0: T, arg1: T, arg2: $Function$$Type<(T), (T)>): T
 "convertList"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "mapBuilder"(): $RecordBuilder<(T)>
 "createByte"(arg0: byte): T
 "mergeToMap"(arg0: T, arg1: $MapLike$$Type<(T)>): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: $Map$$Type<(T), (T)>): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: T, arg2: T): $DataResult<(T)>
 "createInt"(arg0: integer): T
}

export namespace $DynamicOps {
const probejs$$marker: never
}
export class $DynamicOps$$Static<T> implements $DynamicOps {


 "getStream"(arg0: T): $DataResult<($Stream<(T)>)>
 "remove"(arg0: T, arg1: string): T
 "get"(arg0: T, arg1: string): $DataResult<(T)>
 "update"(arg0: T, arg1: string, arg2: $Function$$Type<(T), (T)>): T
 "empty"(): T
 "set"(arg0: T, arg1: string, arg2: T): T
 "emptyList"(): T
 "getByteBuffer"(arg0: T): $DataResult<($ByteBuffer)>
 "emptyMap"(): T
 "getMap"(arg0: T): $DataResult<($MapLike<(T)>)>
 "createMap"(arg0: $Map$$Type<(T), (T)>): T
 "createMap"(arg0: $Stream$$Type<($Pair$$Type<(T), (T)>)>): T
 "createLong"(arg0: long): T
 "createString"(arg0: string): T
 "createList"(arg0: $Stream$$Type<(T)>): T
 "getStringValue"(arg0: T): $DataResult<(string)>
 "getBooleanValue"(arg0: T): $DataResult<(boolean)>
 "getList"(arg0: T): $DataResult<($Consumer<($Consumer<(T)>)>)>
 "createDouble"(arg0: double): T
 "createFloat"(arg0: float): T
 "createLongList"(arg0: $LongStream$$Type): T
 "mergeToPrimitive"(arg0: T, arg1: T): $DataResult<(T)>
 "mergeToList"(arg0: T, arg1: T): $DataResult<(T)>
 "mergeToList"(arg0: T, arg1: $List$$Type<(T)>): $DataResult<(T)>
 "getLongStream"(arg0: T): $DataResult<($LongStream)>
 "createShort"(arg0: short): T
 "createByteList"(arg0: $ByteBuffer$$Type): T
 "createIntList"(arg0: $IntStream$$Type): T
 "getIntStream"(arg0: T): $DataResult<($IntStream)>
 "createBoolean"(arg0: boolean): T
 "getNumberValue"(arg0: T, arg1: number): number
 "getNumberValue"(arg0: T): $DataResult<(number)>
 "listBuilder"(): $ListBuilder<(T)>
 "compressMaps"(): boolean
 "withParser"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<(E)>)>
 "convertMap"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "getGeneric"(arg0: T, arg1: T): $DataResult<(T)>
 "convertTo"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "createNumeric"(arg0: number): T
 "getMapValues"(arg0: T): $DataResult<($Stream<($Pair<(T), (T)>)>)>
 "getMapEntries"(arg0: T): $DataResult<($Consumer<($BiConsumer<(T), (T)>)>)>
 "withEncoder"<E>(arg0: $Encoder$$Type<(E)>): $Function<(E), ($DataResult<(T)>)>
 "withDecoder"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<($Pair<(E), (T)>)>)>
 "updateGeneric"(arg0: T, arg1: T, arg2: $Function$$Type<(T), (T)>): T
 "convertList"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "mapBuilder"(): $RecordBuilder<(T)>
 "createByte"(arg0: byte): T
 "mergeToMap"(arg0: T, arg1: $MapLike$$Type<(T)>): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: $Map$$Type<(T), (T)>): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: T, arg2: T): $DataResult<(T)>
 "createInt"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicOps$$Type<T> = ($DynamicOps<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicOps_<T> = $DynamicOps$$Type<(T)>;
}}
declare module "com.mojang.authlib.minecraft.TelemetrySession" {
import {$TelemetryEvent, $TelemetryEvent$$Type} from "com.mojang.authlib.minecraft.TelemetryEvent"

export interface $TelemetrySession {

 "isEnabled"(): boolean
 "createNewEvent"(arg0: string): $TelemetryEvent
get "enabled"(): boolean
}

export namespace $TelemetrySession {
const DISABLED: $TelemetrySession
const probejs$$marker: never
}
export class $TelemetrySession$$Static implements $TelemetrySession {
static readonly "DISABLED": $TelemetrySession


 "isEnabled"(): boolean
 "createNewEvent"(arg0: string): $TelemetryEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetrySession$$Type = ($TelemetrySession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TelemetrySession_ = $TelemetrySession$$Type;
}}
declare module "com.mojang.serialization.codecs.SimpleMapCodec" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$BaseMapCodec, $BaseMapCodec$$Type} from "com.mojang.serialization.codecs.BaseMapCodec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SimpleMapCodec<K, V> extends $MapCodec<($Map<(K), (V)>)> implements $BaseMapCodec<(K), (V)> {

constructor(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type<(any)>, arg2: $RecordBuilder$$Type<(any)>): $RecordBuilder<(any)>
public "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public "elementCodec"(): $Codec<(V)>
public "keyCodec"(): $Codec<(K)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $MapDecoder<(any)>
public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapCodec$$Type<K, V> = ($SimpleMapCodec<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMapCodec_<K, V> = $SimpleMapCodec$$Type<(K), (V)>;
}}
declare module "com.mojang.datafixers.types.families.Algebra" {
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"

export interface $Algebra {

 "toString"(arg0: integer): string
 "apply"(arg0: integer): $RewriteResult<(any), (any)>
}

export namespace $Algebra {
const probejs$$marker: never
}
export class $Algebra$$Static implements $Algebra {


 "toString"(arg0: integer): string
 "apply"(arg0: integer): $RewriteResult<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Algebra$$Type = ($Algebra);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Algebra_ = $Algebra$$Type;
}}
declare module "com.mojang.blaze3d.shaders.AbstractUniform" {
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $AbstractUniform {

constructor()

public "setMat4x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x2"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setMat2x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat3x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): void
public "setMat3x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat3x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat4x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "set"(arg0: $Vector3f$$Type): void
public "set"(arg0: $Vector4f$$Type): void
public "set"(arg0: $Matrix3f$$Type): void
public "set"(arg0: $Matrix4f$$Type): void
public "set"(arg0: integer): void
public "set"(arg0: float): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "set"(arg0: float, arg1: float): void
public "set"(arg0: (float)[]): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setMat4x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float): void
public "setSafe"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setSafe"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractUniform$$Type = ($AbstractUniform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractUniform_ = $AbstractUniform$$Type;
}}
declare module "com.mojang.datafixers.TypedOptic$Element" {
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optic, $Optic$$Type} from "com.mojang.datafixers.optics.Optic"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TypedOptic$Element<S, T, A, B> extends $Record {

constructor(sType: $Type$$Type<(S)>, tType: $Type$$Type<(T)>, aType: $Type$$Type<(A)>, bType: $Type$$Type<(B)>, optic: $Optic$$Type<(any), (S), (T), (A), (B)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tType"(): $Type<(T)>
public "aType"(): $Type<(A)>
public "sType"(): $Type<(S)>
public "castOuterUnchecked"<S2, T2>(arg0: $Type$$Type<(S2)>, arg1: $Type$$Type<(T2)>): $TypedOptic$Element<(S2), (T2), (A), (B)>
public "optic"(): $Optic<(any), (S), (T), (A), (B)>
public "bType"(): $Type<(B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedOptic$Element$$Type<S, T, A, B> = ({"optic"?: $Optic$$Type<(never), (any), (any), (any), (any)>, "bType"?: $Type$$Type<(any)>, "aType"?: $Type$$Type<(any)>, "tType"?: $Type$$Type<(any)>, "sType"?: $Type$$Type<(any)>}) | ([optic?: $Optic$$Type<(never), (any), (any), (any), (any)>, bType?: $Type$$Type<(any)>, aType?: $Type$$Type<(any)>, tType?: $Type$$Type<(any)>, sType?: $Type$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedOptic$Element_<S, T, A, B> = $TypedOptic$Element$$Type<(S), (T), (A), (B)>;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormat" {
import {$VertexBuffer, $VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$List, $List$$Type} from "java.util.List"
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$VertexFormat$Builder, $VertexFormat$Builder$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Builder"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export class $VertexFormat {
static readonly "UNKNOWN_ELEMENT": integer


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $VertexFormat$Builder
public "contains"(arg0: $VertexFormatElement$$Type): boolean
public "getOffset"(arg0: $VertexFormatElement$$Type): integer
public "getElements"(): $List<($VertexFormatElement)>
public "getElementName"(arg0: $VertexFormatElement$$Type): string
public "getVertexSize"(): integer
public "getElementAttributeNames"(): $List<(string)>
public "getOffsetsByElement"(): (integer)[]
public "hasNormal"(): boolean
public "hasColor"(): boolean
public "hasUV"(arg0: integer): boolean
public "setupBufferState"(): void
public "clearBufferState"(): void
public "getElementMapping"(): $ImmutableMap<(string), ($VertexFormatElement)>
public "getElementsMask"(): integer
public "getImmediateDrawVertexBuffer"(): $VertexBuffer
public "hasPosition"(): boolean
get "elements"(): $List<($VertexFormatElement)>
get "vertexSize"(): integer
get "elementAttributeNames"(): $List<(string)>
get "offsetsByElement"(): (integer)[]
get "elementMapping"(): $ImmutableMap<(string), ($VertexFormatElement)>
get "elementsMask"(): integer
get "immediateDrawVertexBuffer"(): $VertexBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$$Type = ($VertexFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat_ = $VertexFormat$$Type;
}}
declare module "com.mojang.datafixers.View$Mu" {
import {$K2, $K2$$Type} from "com.mojang.datafixers.kinds.K2"

export class $View$Mu implements $K2 {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$Mu$$Type = ($View$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View$Mu_ = $View$Mu$$Type;
}}
declare module "com.mojang.realmsclient.dto.Ops" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$Set, $Set$$Type} from "java.util.Set"

export class $Ops extends $ValueObject {
 "ops": $Set<(string)>

constructor()

public static "parse"(arg0: string): $Ops
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ops$$Type = ($Ops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ops_ = $Ops$$Type;
}}
declare module "com.mojang.authlib.minecraft.report.ReportChatMessage" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ReportChatMessage extends $Record {

constructor(index: integer, profileId: $UUID$$Type, sessionId: $UUID$$Type, timestamp: $Instant$$Type, salt: long, lastSeen: $List$$Type<($ByteBuffer$$Type)>, message: string, signature: $ByteBuffer$$Type, messageReported: boolean)

public "signature"(): $ByteBuffer
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "message"(): string
public "timestamp"(): $Instant
public "messageReported"(): boolean
public "salt"(): long
public "lastSeen"(): $List<($ByteBuffer)>
public "sessionId"(): $UUID
public "profileId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportChatMessage$$Type = ({"timestamp"?: $Instant$$Type, "signature"?: $ByteBuffer$$Type, "sessionId"?: $UUID$$Type, "messageReported"?: boolean, "salt"?: long, "message"?: string, "index"?: integer, "lastSeen"?: $List$$Type<($ByteBuffer$$Type)>, "profileId"?: $UUID$$Type}) | ([timestamp?: $Instant$$Type, signature?: $ByteBuffer$$Type, sessionId?: $UUID$$Type, messageReported?: boolean, salt?: long, message?: string, index?: integer, lastSeen?: $List$$Type<($ByteBuffer$$Type)>, profileId?: $UUID$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReportChatMessage_ = $ReportChatMessage$$Type;
}}
declare module "com.mojang.brigadier.arguments.IntegerArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $IntegerArgumentType implements $ArgumentType<(integer)> {


public "getExamples"(): $Collection<(string)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type): any
public static "getInteger"(arg0: $CommandContext$$Type<(any)>, arg1: string): integer
public static "integer"(arg0: integer, arg1: integer): $IntegerArgumentType
public static "integer"(): $IntegerArgumentType
public static "integer"(arg0: integer): $IntegerArgumentType
public "getMaximum"(): integer
public "getMinimum"(): integer
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): integer
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "maximum"(): integer
get "minimum"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerArgumentType$$Type = ($IntegerArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerArgumentType_ = $IntegerArgumentType$$Type;
}}
declare module "com.mojang.serialization.Keyable" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $Keyable {

 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>

(arg0: $DynamicOps<(T)>): $Stream$$Type<(T)>
}

export namespace $Keyable {
function forStrings(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
const probejs$$marker: never
}
export class $Keyable$$Static implements $Keyable {


 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyable$$Type = ((arg0: $DynamicOps<(T)>) => $Stream$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyable_ = $Keyable$$Type;
}}
declare module "com.mojang.brigadier.context.SuggestionContext" {
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export class $SuggestionContext<S> {
readonly "parent": $CommandNode<(S)>
readonly "startPos": integer

constructor(arg0: $CommandNode$$Type<(S)>, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionContext$$Type<S> = ($SuggestionContext<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuggestionContext_<S> = $SuggestionContext$$Type<(S)>;
}}
declare module "com.mojang.serialization.MapCodec$ResultFunction" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"

export interface $MapCodec$ResultFunction<A> {

 "apply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>, arg2: $DataResult$$Type<(A)>): $DataResult<(A)>
 "coApply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
}

export namespace $MapCodec$ResultFunction {
const probejs$$marker: never
}
export class $MapCodec$ResultFunction$$Static<A> implements $MapCodec$ResultFunction {


 "apply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>, arg2: $DataResult$$Type<(A)>): $DataResult<(A)>
 "coApply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$ResultFunction$$Type<A> = ($MapCodec$ResultFunction<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCodec$ResultFunction_<A> = $MapCodec$ResultFunction$$Type<(A)>;
}}
declare module "com.mojang.blaze3d.shaders.Shader" {
import {$Program, $Program$$Type} from "com.mojang.blaze3d.shaders.Program"

export interface $Shader {

 "getId"(): integer
 "getFragmentProgram"(): $Program
 "getVertexProgram"(): $Program
 "attachToProgram"(): void
 "markDirty"(): void
get "id"(): integer
get "fragmentProgram"(): $Program
get "vertexProgram"(): $Program
}

export namespace $Shader {
const probejs$$marker: never
}
export class $Shader$$Static implements $Shader {


 "getId"(): integer
 "getFragmentProgram"(): $Program
 "getVertexProgram"(): $Program
 "attachToProgram"(): void
 "markDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shader$$Type = ($Shader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shader_ = $Shader$$Type;
}}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder$Instance$Mu" {
import {$Applicative$Mu, $Applicative$Mu$$Type} from "com.mojang.datafixers.kinds.Applicative$Mu"

export class $RecordCodecBuilder$Instance$Mu<O> implements $Applicative$Mu {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Instance$Mu$$Type<O> = ($RecordCodecBuilder$Instance$Mu<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder$Instance$Mu_<O> = $RecordCodecBuilder$Instance$Mu$$Type<(O)>;
}}
declare module "com.mojang.realmsclient.dto.RealmsNotification" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"

export class $RealmsNotification {


public "seen"(): boolean
public "uuid"(): $UUID
public "dismissable"(): boolean
public static "parseList"(arg0: string): $List<($RealmsNotification)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNotification$$Type = ($RealmsNotification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsNotification_ = $RealmsNotification$$Type;
}}
declare module "com.mojang.realmsclient.dto.ServerActivity" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export class $ServerActivity extends $ValueObject {
 "leaveTime": long
 "profileUuid": string
 "joinTime": long

constructor()

public static "parse"(arg0: $JsonObject$$Type): $ServerActivity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerActivity$$Type = ($ServerActivity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerActivity_ = $ServerActivity$$Type;
}}
declare module "com.mojang.authlib.minecraft.MinecraftProfileTexture" {
import {$Map, $Map$$Type} from "java.util.Map"

export class $MinecraftProfileTexture {
static readonly "PROFILE_TEXTURE_COUNT": integer

constructor(arg0: string, arg1: $Map$$Type<(string), (string)>)

public "toString"(): string
public "getUrl"(): string
public "getHash"(): string
public "getMetadata"(arg0: string): string
get "url"(): string
get "hash"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTexture$$Type = ($MinecraftProfileTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftProfileTexture_ = $MinecraftProfileTexture$$Type;
}}
declare module "com.mojang.datafixers.View" {
import {$App2, $App2$$Type} from "com.mojang.datafixers.kinds.App2"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$View$Mu, $View$Mu$$Type} from "com.mojang.datafixers.View$Mu"
import {$PointFreeRule, $PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$PointFree, $PointFree$$Type} from "com.mojang.datafixers.functions.PointFree"

export class $View<A, B> extends $Record implements $App2<($View$Mu), (A), (B)> {

constructor(arg0: $PointFree$$Type<($Function$$Type<(A), (B)>)>)

public "type"(): $Type<(A)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "newType"(): $Type<(B)>
public "flatMap"<C>(arg0: $Function$$Type<($Type<(B)>), ($View$$Type<(B), (C)>)>): $View<(A), (C)>
public "function"(): $PointFree<($Function<(A), (B)>)>
public static "create"<A, B>(arg0: $PointFree$$Type<($Function$$Type<(A), (B)>)>): $View<(A), (B)>
public static "create"<A, B>(arg0: string, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>, arg3: $Function$$Type<($DynamicOps<(any)>), ($Function$$Type<(A), (B)>)>): $View<(A), (B)>
public "compose"<C>(arg0: $View$$Type<(C), (A)>): $View<(C), (B)>
public "rewrite"(arg0: $PointFreeRule$$Type): $Optional<($View<(A), (B)>)>
public "funcType"(): $Type<($Function<(A), (B)>)>
public static "nopView"<A>(arg0: $Type$$Type<(A)>): $View<(A), (A)>
public "isNop"(): boolean
public "rewriteOrNop"(arg0: $PointFreeRule$$Type): $View<(A), (B)>
get "nop"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$$Type<A, B> = ({"function"?: $PointFree$$Type<($Function$$Type<(any), (any)>)>}) | ([arg?: $PointFree$$Type<($Function$$Type<(any), (any)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View_<A, B> = $View$$Type<(A), (B)>;
}}
declare module "com.mojang.datafixers.types.Type" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TypeRewriteRule, $TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Type$Mu, $Type$Mu$$Type} from "com.mojang.datafixers.types.Type$Mu"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$$Type} from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import {$OpticFinder, $OpticFinder$$Type} from "com.mojang.datafixers.OpticFinder"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$$Type} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$Type$TypeMatcher, $Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Typed, $Typed$$Type} from "com.mojang.datafixers.Typed"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$PointFreeRule, $PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $Type<A> implements $App<($Type$Mu), (A)> {

constructor()

public "equals"(arg0: any): boolean
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "write"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
public "read"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $TypeRewriteRule$$Type, arg2: $PointFreeRule$$Type, arg3: T): $DataResult<($Pair<($Optional<(any)>), (T)>)>
public "read"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), ($Dynamic<(T)>)>)>
public "finder"(): $OpticFinder<(A)>
public "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $RewriteResult<(A), (any)>
public static "unbox"<A>(arg0: $App$$Type<($Type$Mu$$Type), (A)>): $Type<(A)>
public "one"(arg0: $TypeRewriteRule$$Type): $Optional<($RewriteResult<(A), (any)>)>
public "findField"(arg0: string): $OpticFinder<(any)>
public "template"(): $TypeTemplate
public "rewrite"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type): $Optional<($RewriteResult<(A), (any)>)>
public "point"(arg0: $DynamicOps$$Type<(any)>): $Optional<(A)>
public "pointTyped"(arg0: $DynamicOps$$Type<(any)>): $Optional<($Typed<(A)>)>
public "ifSame"<B>(arg0: $Type$$Type<(B)>, arg1: $RewriteResult$$Type<(B), (any)>): $Optional<($RewriteResult<(A), (any)>)>
public "ifSame"<B>(arg0: $Type$$Type<(B)>, arg1: B): $Optional<(A)>
public "ifSame"<B>(arg0: $Typed$$Type<(B)>): $Optional<(A)>
public "everywhere"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $Optional<($RewriteResult<(A), (any)>)>
public "readTyped"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<($Typed<(A)>), (T)>)>
public "readTyped"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<($Typed<(A)>), (T)>)>
public "getSetType"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>): $Type<(any)>
public static "opticView"<S, T, A, B>(arg0: $Type$$Type<(S)>, arg1: $RewriteResult$$Type<(A), (B)>, arg2: $TypedOptic$$Type<(S), (T), (A), (B)>): $RewriteResult<(S), (T)>
public "updateMu"(arg0: $RecursiveTypeFamily$$Type): $Type<(any)>
public "findType"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "writeDynamic"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<($Dynamic<(T)>)>
public "findFieldType"(arg0: string): $Type<(any)>
public "findChoiceType"(arg0: string, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(any)>)>
public "readAndWrite"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $Type$$Type<(any)>, arg2: $TypeRewriteRule$$Type, arg3: $PointFreeRule$$Type, arg4: T): $DataResult<(T)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findCheckedType"(arg0: integer): $Optional<($Type<(any)>)>
public "findFieldTypeOpt"(arg0: string): $Optional<($Type<(any)>)>
public "findTypeCached"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "rewriteOrNop"(arg0: $TypeRewriteRule$$Type): $RewriteResult<(A), (any)>
public "buildTemplate"(): $TypeTemplate
public "codec"(): $Codec<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$$Type<A> = ($Type<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type_<A> = $Type$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.dto.PlayerInfo" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$$Type} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $PlayerInfo extends $ValueObject implements $ReflectionBasedSerialization {

constructor()

public "getUuid"(): $UUID
public "getName"(): string
public "setName"(arg0: string): void
public "setOperator"(arg0: boolean): void
public "setUuid"(arg0: $UUID$$Type): void
public "getOnline"(): boolean
public "isOperator"(): boolean
public "setOnline"(arg0: boolean): void
public "setAccepted"(arg0: boolean): void
public "getAccepted"(): boolean
get "uuid"(): $UUID
get "name"(): string
set "name"(value: string)
set "operator"(value: boolean)
set "uuid"(value: $UUID$$Type)
get "online"(): boolean
get "operator"(): boolean
set "online"(value: boolean)
set "accepted"(value: boolean)
get "accepted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInfo$$Type = ($PlayerInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInfo_ = $PlayerInfo$$Type;
}}
declare module "com.mojang.brigadier.ImmutableStringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ImmutableStringReader {

 "canRead"(): boolean
 "canRead"(arg0: integer): boolean
 "peek"(arg0: integer): character
 "peek"(): character
 "getString"(): string
 "getRemaining"(): string
 "getCursor"(): integer
 "getRead"(): string
 "getRemainingLength"(): integer
 "getTotalLength"(): integer
get "string"(): string
get "remaining"(): string
get "cursor"(): integer
get "read"(): string
get "remainingLength"(): integer
get "totalLength"(): integer
}

export namespace $ImmutableStringReader {
const probejs$$marker: never
}
export class $ImmutableStringReader$$Static implements $ImmutableStringReader {


 "canRead"(): boolean
 "canRead"(arg0: integer): boolean
 "peek"(arg0: integer): character
 "peek"(): character
 "getString"(): string
 "getRemaining"(): string
 "getCursor"(): integer
 "getRead"(): string
 "getRemainingLength"(): integer
 "getTotalLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableStringReader$$Type = ($ImmutableStringReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableStringReader_ = $ImmutableStringReader$$Type;
}}
declare module "com.mojang.datafixers.Products$P3" {
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export class $Products$P3<F extends $K1, T1, T2, T3> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function3$$Type<(T1), (T2), (T3), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T4, T5, T6, T7, T8>(arg0: $Products$P5$$Type<(F), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T4, T5>(arg0: $Products$P2$$Type<(F), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T4, T5, T6, T7>(arg0: $Products$P4$$Type<(F), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T4>(arg0: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T4, T5, T6>(arg0: $Products$P3$$Type<(F), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "t3"(): $App<(F), (T3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P3$$Type<F, T1, T2, T3> = ($Products$P3<(F), (T1), (T2), (T3)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P3_<F, T1, T2, T3> = $Products$P3$$Type<(F), (T1), (T2), (T3)>;
}}
declare module "com.mojang.datafixers.Products$P4" {
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P4<F extends $K1, T1, T2, T3, T4> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T5, T6, T7, T8>(arg0: $Products$P4$$Type<(F), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T5>(arg0: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T5, T6, T7>(arg0: $Products$P3$$Type<(F), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T5, T6>(arg0: $Products$P2$$Type<(F), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "t3"(): $App<(F), (T3)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P4$$Type<F, T1, T2, T3, T4> = ($Products$P4<(F), (T1), (T2), (T3), (T4)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P4_<F, T1, T2, T3, T4> = $Products$P4$$Type<(F), (T1), (T2), (T3), (T4)>;
}}
declare module "com.mojang.datafixers.Products$P1" {
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P1<F extends $K1, T1> {

constructor(arg0: $App$$Type<(F), (T1)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function$$Type<(T1), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function$$Type<(T1), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "and"<T2, T3, T4, T5, T6, T7>(arg0: $Products$P6$$Type<(F), (T2), (T3), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T2, T3, T4, T5, T6, T7, T8>(arg0: $Products$P7$$Type<(F), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T2, T3, T4, T5>(arg0: $Products$P4$$Type<(F), (T2), (T3), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T2, T3>(arg0: $Products$P2$$Type<(F), (T2), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
public "and"<T2, T3, T4>(arg0: $Products$P3$$Type<(F), (T2), (T3), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T2>(arg0: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
public "and"<T2, T3, T4, T5, T6>(arg0: $Products$P5$$Type<(F), (T2), (T3), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P1$$Type<F, T1> = ($Products$P1<(F), (T1)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P1_<F, T1> = $Products$P1$$Type<(F), (T1)>;
}}
declare module "com.mojang.datafixers.Products$P2" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P2<F extends $K1, T1, T2> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $BiFunction$$Type<(T1), (T2), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($BiFunction$$Type<(T1), (T2), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T3, T4, T5, T6, T7, T8>(arg0: $Products$P6$$Type<(F), (T3), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T3, T4, T5, T6, T7>(arg0: $Products$P5$$Type<(F), (T3), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T3, T4, T5>(arg0: $Products$P3$$Type<(F), (T3), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T3, T4, T5, T6>(arg0: $Products$P4$$Type<(F), (T3), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "and"<T3, T4>(arg0: $Products$P2$$Type<(F), (T3), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T3>(arg0: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P2$$Type<F, T1, T2> = ($Products$P2<(F), (T1), (T2)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P2_<F, T1, T2> = $Products$P2$$Type<(F), (T1), (T2)>;
}}
declare module "com.mojang.datafixers.Products$P7" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P7<F extends $K1, T1, T2, T3, T4, T5, T6, T7> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T8>(arg0: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "t3"(): $App<(F), (T3)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
public "t6"(): $App<(F), (T6)>
public "t7"(): $App<(F), (T7)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P7$$Type<F, T1, T2, T3, T4, T5, T6, T7> = ($Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P7_<F, T1, T2, T3, T4, T5, T6, T7> = $Products$P7$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>;
}}
declare module "com.mojang.datafixers.Products$P8" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P8<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
public "t6"(): $App<(F), (T6)>
public "t7"(): $App<(F), (T7)>
public "t8"(): $App<(F), (T8)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P8$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8> = ($Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P8_<F, T1, T2, T3, T4, T5, T6, T7, T8> = $Products$P8$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>;
}}
declare module "com.mojang.datafixers.Products$P5" {
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P5<F extends $K1, T1, T2, T3, T4, T5> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T6>(arg0: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "and"<T6, T7, T8>(arg0: $Products$P3$$Type<(F), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T6, T7>(arg0: $Products$P2$$Type<(F), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "t3"(): $App<(F), (T3)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P5$$Type<F, T1, T2, T3, T4, T5> = ($Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P5_<F, T1, T2, T3, T4, T5> = $Products$P5$$Type<(F), (T1), (T2), (T3), (T4), (T5)>;
}}
declare module "com.mojang.datafixers.Products$P6" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P6<F extends $K1, T1, T2, T3, T4, T5, T6> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T7, T8>(arg0: $Products$P2$$Type<(F), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T7>(arg0: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "t3"(): $App<(F), (T3)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
public "t6"(): $App<(F), (T6)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P6$$Type<F, T1, T2, T3, T4, T5, T6> = ($Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P6_<F, T1, T2, T3, T4, T5, T6> = $Products$P6$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6)>;
}}
declare module "com.mojang.brigadier.context.StringRange" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"

export class $StringRange {

constructor(arg0: integer, arg1: integer)

public "get"(arg0: string): string
public "get"(arg0: $ImmutableStringReader$$Type): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLength"(): integer
public "isEmpty"(): boolean
public static "at"(arg0: integer): $StringRange
public static "between"(arg0: integer, arg1: integer): $StringRange
public "getEnd"(): integer
public "getStart"(): integer
public static "encompassing"(arg0: $StringRange$$Type, arg1: $StringRange$$Type): $StringRange
get "length"(): integer
get "empty"(): boolean
get "end"(): integer
get "start"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringRange$$Type = ($StringRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringRange_ = $StringRange$$Type;
}}
declare module "com.mojang.serialization.CompressorHolder" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Compressable, $Compressable$$Type} from "com.mojang.serialization.Compressable"

export class $CompressorHolder implements $Compressable {

constructor()

public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorHolder$$Type = ($CompressorHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorHolder_ = $CompressorHolder$$Type;
}}
declare module "com.mojang.datafixers.util.Either$Mu" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export class $Either$Mu<R> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$Mu$$Type<R> = ($Either$Mu<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Either$Mu_<R> = $Either$Mu$$Type<(R)>;
}}
declare module "com.mojang.brigadier.arguments.DoubleArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $DoubleArgumentType implements $ArgumentType<(double)> {


public "getExamples"(): $Collection<(string)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getDouble"(arg0: $CommandContext$$Type<(any)>, arg1: string): double
public "parse"(arg0: $StringReader$$Type): double
public "getMaximum"(): double
public "getMinimum"(): double
public static "doubleArg"(arg0: double, arg1: double): $DoubleArgumentType
public static "doubleArg"(): $DoubleArgumentType
public static "doubleArg"(arg0: double): $DoubleArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): double
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "maximum"(): double
get "minimum"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleArgumentType$$Type = ($DoubleArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleArgumentType_ = $DoubleArgumentType$$Type;
}}
declare module "com.mojang.serialization.RecordBuilder" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"

export interface $RecordBuilder<T> {

 "ops"(): $DynamicOps<(T)>
 "add"<E>(arg0: string, arg1: E, arg2: $Encoder$$Type<(E)>): $RecordBuilder<(T)>
 "add"(arg0: string, arg1: T): $RecordBuilder<(T)>
 "add"(arg0: string, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: T): $RecordBuilder<(T)>
 "add"(arg0: $DataResult$$Type<(T)>, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "build"(arg0: $DataResult$$Type<(T)>): $DataResult<(T)>
 "withErrorsFrom"(arg0: $DataResult$$Type<(any)>): $RecordBuilder<(T)>
 "setLifecycle"(arg0: $Lifecycle$$Type): $RecordBuilder<(T)>
 "mapError"(arg0: $UnaryOperator$$Type<(string)>): $RecordBuilder<(T)>
set "lifecycle"(value: $Lifecycle$$Type)
}

export namespace $RecordBuilder {
const probejs$$marker: never
}
export class $RecordBuilder$$Static<T> implements $RecordBuilder {


 "ops"(): $DynamicOps<(T)>
 "add"<E>(arg0: string, arg1: E, arg2: $Encoder$$Type<(E)>): $RecordBuilder<(T)>
 "add"(arg0: string, arg1: T): $RecordBuilder<(T)>
 "add"(arg0: string, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: T): $RecordBuilder<(T)>
 "add"(arg0: $DataResult$$Type<(T)>, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "build"(arg0: $DataResult$$Type<(T)>): $DataResult<(T)>
 "withErrorsFrom"(arg0: $DataResult$$Type<(any)>): $RecordBuilder<(T)>
 "setLifecycle"(arg0: $Lifecycle$$Type): $RecordBuilder<(T)>
 "mapError"(arg0: $UnaryOperator$$Type<(string)>): $RecordBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordBuilder$$Type<T> = ($RecordBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordBuilder_<T> = $RecordBuilder$$Type<(T)>;
}}
declare module "com.mojang.datafixers.Products$P9" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P9<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P9$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9> = ($Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P9_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9> = $Products$P9$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>;
}}
declare module "com.mojang.brigadier.exceptions.CommandSyntaxException" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$CommandExceptionType, $CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$BuiltInExceptionProvider, $BuiltInExceptionProvider$$Type} from "com.mojang.brigadier.exceptions.BuiltInExceptionProvider"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $CommandSyntaxException extends $Exception {
static "BUILT_IN_EXCEPTIONS": $BuiltInExceptionProvider
static "ENABLE_COMMAND_STACK_TRACES": boolean
static readonly "CONTEXT_AMOUNT": integer

constructor(arg0: $CommandExceptionType$$Type, arg1: $Message$$Type)
constructor(arg0: $CommandExceptionType$$Type, arg1: $Message$$Type, arg2: string, arg3: integer)

public "getInput"(): string
public "getMessage"(): string
public "getContext"(): string
public "getType"(): $CommandExceptionType
public "getCursor"(): integer
public "getRawMessage"(): $Message
get "input"(): string
get "message"(): string
get "context"(): string
get "type"(): $CommandExceptionType
get "cursor"(): integer
get "rawMessage"(): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandSyntaxException$$Type = ($CommandSyntaxException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandSyntaxException_ = $CommandSyntaxException$$Type;
}}
declare module "com.mojang.serialization.DataResult$Error" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$DataResult$Instance, $DataResult$Instance$$Type} from "com.mojang.serialization.DataResult$Instance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataResult$Mu, $DataResult$Mu$$Type} from "com.mojang.serialization.DataResult$Mu"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DataResult$Error<R> extends $Record implements $DataResult<(R)> {

constructor(messageSupplier: $Supplier$$Type<(string)>, partialValue: $Optional$$Type<(R)>, lifecycle: $Lifecycle$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "map"(arg0: $Function$$Type<(any), (any)>): $DataResult<(any)>
public "result"(): $Optional<(R)>
public "message"(): string
public "flatMap"(arg0: $Function$$Type<(any), (any)>): $DataResult<(any)>
public "error"(): $Optional<($DataResult$Error<(R)>)>
public "messageSupplier"(): $Supplier<(string)>
public "ap"(arg0: $DataResult$$Type<(any)>): $DataResult<(any)>
public "partialValue"(): $Optional<(R)>
public "mapOrElse"<T>(arg0: $Function$$Type<(R), (T)>, arg1: $Function$$Type<($DataResult$Error<(R)>), (T)>): T
public "ifError"(arg0: $Consumer$$Type<($DataResult$Error<(R)>)>): $DataResult<(R)>
public "ifSuccess"(arg0: $Consumer$$Type<(R)>): $DataResult<(R)>
public "getOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(string), (E)>): R
public "resultOrPartial"(arg0: $Consumer$$Type<(string)>): $Optional<(R)>
public "resultOrPartial"(): $Optional<(R)>
public "setLifecycle"(arg0: $Lifecycle$$Type): $DataResult$Error<(R)>
public "hasResultOrPartial"(): boolean
public "getPartialOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(string), (E)>): R
public "promotePartial"(arg0: $Consumer$$Type<(string)>): $DataResult<(R)>
public "lifecycle"(): $Lifecycle
public "isSuccess"(): boolean
public "setPartial"(arg0: $Supplier$$Type<(any)>): $DataResult<(any)>
public "setPartial"(arg0: R): $DataResult$Error<(R)>
public "mapError"(arg0: $UnaryOperator$$Type<(string)>): $DataResult$Error<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(string)>, arg1: $Lifecycle$$Type): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(string)>, arg1: R, arg2: $Lifecycle$$Type): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(string)>, arg1: R): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(string)>): $DataResult<(R)>
public static "instance"(): $DataResult$Instance
public "isError"(): boolean
public static "unbox"<R>(arg0: $App$$Type<($DataResult$Mu$$Type), (R)>): $DataResult<(R)>
public static "success"<R>(arg0: R, arg1: $Lifecycle$$Type): $DataResult<(R)>
public static "success"<R>(arg0: R): $DataResult<(R)>
public static "partialGet"<K, V>(arg0: $Function$$Type<(K), (V)>, arg1: $Supplier$$Type<(string)>): $Function<(K), ($DataResult<(V)>)>
public "apply3"<R2, R3, S>(arg0: $Function3$$Type<(R), (R2), (R3), (S)>, arg1: $DataResult$$Type<(R2)>, arg2: $DataResult$$Type<(R3)>): $DataResult<(S)>
public "getOrThrow"(): R
public static "appendMessages"(arg0: string, arg1: string): string
public "apply2stable"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
public "addLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
public "getPartialOrThrow"(): R
public "apply2"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
set "partial"(value: $Supplier$$Type<(any)>)
set "partial"(value: R)
get "orThrow"(): R
get "partialOrThrow"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Error$$Type<R> = ({"lifecycle"?: $Lifecycle$$Type, "messageSupplier"?: $Supplier$$Type<(string)>, "partialValue"?: (any)?}) | ([lifecycle?: $Lifecycle$$Type, messageSupplier?: $Supplier$$Type<(string)>, partialValue?: (any)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Error_<R> = $DataResult$Error$$Type<(R)>;
}}
declare module "com.mojang.realmsclient.dto.RealmsServer$WorldType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RealmsServer$WorldType extends $Enum<($RealmsServer$WorldType)> {
static readonly "ADVENTUREMAP": $RealmsServer$WorldType
static readonly "MINIGAME": $RealmsServer$WorldType
static readonly "EXPERIENCE": $RealmsServer$WorldType
static readonly "NORMAL": $RealmsServer$WorldType
static readonly "INSPIRATION": $RealmsServer$WorldType


public static "values"(): ($RealmsServer$WorldType)[]
public static "valueOf"(arg0: string): $RealmsServer$WorldType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$WorldType$$Type = (("normal") | ("minigame") | ("adventuremap") | ("experience") | ("inspiration"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer$WorldType_ = $RealmsServer$WorldType$$Type;
}}
declare module "com.mojang.brigadier.exceptions.DynamicCommandExceptionType" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandExceptionType, $CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$CommandSyntaxException, $CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $DynamicCommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Function$$Type<(any), ($Message$$Type)>)

public "create"(arg0: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type, arg1: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicCommandExceptionType$$Type = ($DynamicCommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicCommandExceptionType_ = $DynamicCommandExceptionType$$Type;
}}
declare module "com.mojang.blaze3d.vertex.Tesselator" {
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $Tesselator {

constructor()
constructor(arg0: integer)

public "clear"(): void
public "begin"(arg0: $VertexFormat$Mode$$Type, arg1: $VertexFormat$$Type): $BufferBuilder
public static "getInstance"(): $Tesselator
public static "init"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tesselator$$Type = ($Tesselator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tesselator_ = $Tesselator$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.response.KeyPairResponse$KeyPair" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KeyPairResponse$KeyPair extends $Record {

constructor(privateKey: string, publicKey: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "privateKey"(): string
public "publicKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPairResponse$KeyPair$$Type = ({"publicKey"?: string, "privateKey"?: string}) | ([publicKey?: string, privateKey?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPairResponse$KeyPair_ = $KeyPairResponse$KeyPair$$Type;
}}
declare module "com.mojang.datafixers.schemas.Schema" {
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$$Type} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$DSL$TypeReference, $DSL$TypeReference$$Type} from "com.mojang.datafixers.DSL$TypeReference"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"

export class $Schema {

constructor(arg0: integer, arg1: $Schema$$Type)

public "register"(arg0: $Map$$Type<(string), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg1: string, arg2: $Supplier$$Type<($TypeTemplate$$Type)>): void
public "register"(arg0: $Map$$Type<(string), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg1: string, arg2: $Function$$Type<(string), ($TypeTemplate$$Type)>): void
public "id"(arg0: string): $TypeTemplate
public "getParent"(): $Schema
public "getType"(arg0: $DSL$TypeReference$$Type): $Type<(any)>
public "types"(): $Set<(string)>
public "getTypeRaw"(arg0: $DSL$TypeReference$$Type): $Type<(any)>
public "registerBlockEntities"(arg0: $Schema$$Type): $Map<(string), ($Supplier<($TypeTemplate)>)>
public "getVersionKey"(): integer
public "getChoiceType"(arg0: $DSL$TypeReference$$Type, arg1: string): $Type<(any)>
public "findChoiceType"(arg0: $DSL$TypeReference$$Type): $TaggedChoice$TaggedChoiceType<(any)>
public "registerEntities"(arg0: $Schema$$Type): $Map<(string), ($Supplier<($TypeTemplate)>)>
public "registerType"(arg0: boolean, arg1: $DSL$TypeReference$$Type, arg2: $Supplier$$Type<($TypeTemplate$$Type)>): void
public "resolveTemplate"(arg0: string): $TypeTemplate
public "registerSimple"(arg0: $Map$$Type<(string), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg1: string): void
public "registerTypes"(arg0: $Schema$$Type, arg1: $Map$$Type<(string), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg2: $Map$$Type<(string), ($Supplier$$Type<($TypeTemplate$$Type)>)>): void
get "parent"(): $Schema
get "versionKey"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Schema$$Type = ($Schema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Schema_ = $Schema$$Type;
}}
declare module "com.mojang.realmsclient.client.RealmsClient$CompatibleVersionResponse" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RealmsClient$CompatibleVersionResponse extends $Enum<($RealmsClient$CompatibleVersionResponse)> {
static readonly "OTHER": $RealmsClient$CompatibleVersionResponse
static readonly "COMPATIBLE": $RealmsClient$CompatibleVersionResponse
static readonly "OUTDATED": $RealmsClient$CompatibleVersionResponse


public static "values"(): ($RealmsClient$CompatibleVersionResponse)[]
public static "valueOf"(arg0: string): $RealmsClient$CompatibleVersionResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$CompatibleVersionResponse$$Type = (("compatible") | ("outdated") | ("other"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsClient$CompatibleVersionResponse_ = $RealmsClient$CompatibleVersionResponse$$Type;
}}
declare module "com.mojang.datafixers.Products$P10" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"

export class $Products$P10<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P10$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = ($Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P10_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = $Products$P10$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>;
}}
declare module "com.mojang.datafixers.Products$P11" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"

export class $Products$P11<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P11$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = ($Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P11_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = $Products$P11$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>;
}}
declare module "com.mojang.datafixers.Products$P16" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function16, $Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P16<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P16$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = ($Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P16_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = $Products$P16$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>;
}}
declare module "com.mojang.datafixers.Products$P14" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function14, $Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P14<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P14$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = ($Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P14_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = $Products$P14$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>;
}}
declare module "com.mojang.datafixers.Products$P15" {
import {$Function15, $Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P15<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P15$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = ($Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P15_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = $Products$P15$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>;
}}
declare module "com.mojang.datafixers.Products$P12" {
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P12<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P12$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = ($Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P12_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = $Products$P12$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>;
}}
declare module "com.mojang.datafixers.Products$P13" {
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P13<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> {

constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (any)>, arg1: $App$$Type<(F), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P13$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = ($Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P13_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = $Products$P13$$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>;
}}
declare module "com.mojang.blaze3d.platform.ScreenManager" {
import {$MonitorCreator, $MonitorCreator$$Type} from "com.mojang.blaze3d.platform.MonitorCreator"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$Monitor, $Monitor$$Type} from "com.mojang.blaze3d.platform.Monitor"

export class $ScreenManager {

constructor(arg0: $MonitorCreator$$Type)

public "shutdown"(): void
public static "clamp"(arg0: integer, arg1: integer, arg2: integer): integer
public "findBestMonitor"(arg0: $Window$$Type): $Monitor
public "getMonitor"(arg0: long): $Monitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenManager$$Type = ($ScreenManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenManager_ = $ScreenManager$$Type;
}}
declare module "com.mojang.datafixers.types.Type$Mu" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export class $Type$Mu implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$Mu$$Type = ($Type$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$Mu_ = $Type$Mu$$Type;
}}
declare module "com.mojang.brigadier.AmbiguityConsumer" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export interface $AmbiguityConsumer<S> {

 "ambiguous"(arg0: $CommandNode$$Type<(S)>, arg1: $CommandNode$$Type<(S)>, arg2: $CommandNode$$Type<(S)>, arg3: $Collection$$Type<(string)>): void

(arg0: $CommandNode<(S)>, arg1: $CommandNode<(S)>, arg2: $CommandNode<(S)>, arg3: $Collection<(string)>): void
}

export namespace $AmbiguityConsumer {
const probejs$$marker: never
}
export class $AmbiguityConsumer$$Static<S> implements $AmbiguityConsumer {


 "ambiguous"(arg0: $CommandNode$$Type<(S)>, arg1: $CommandNode$$Type<(S)>, arg2: $CommandNode$$Type<(S)>, arg3: $Collection$$Type<(string)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbiguityConsumer$$Type<S> = ((arg0: $CommandNode<(S)>, arg1: $CommandNode<(S)>, arg2: $CommandNode<(S)>, arg3: $Collection<(string)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmbiguityConsumer_<S> = $AmbiguityConsumer$$Type<(S)>;
}}
declare module "com.mojang.datafixers.Typed" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$List, $List$$Type} from "java.util.List"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$OpticFinder, $OpticFinder$$Type} from "com.mojang.datafixers.OpticFinder"

export class $Typed<A> {

constructor(arg0: $Type$$Type<(A)>, arg1: $DynamicOps$$Type<(any)>, arg2: A)

public "getOrCreate"<FT>(arg0: $OpticFinder$$Type<(FT)>): FT
public "get"<FT>(arg0: $OpticFinder$$Type<(FT)>): FT
public "toString"(): string
public "update"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<(FT), (FT)>): $Typed<(any)>
public "update"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<(FT), (FR)>): $Typed<(any)>
public "getValue"(): A
public "out"(): $Typed<(A)>
public "set"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Typed$$Type<(FR)>): $Typed<(any)>
public "set"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: FR): $Typed<(any)>
public "set"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: FT): $Typed<(any)>
public "write"(): $DataResult<($Dynamic<(any)>)>
public "getOrDefault"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: FT): FT
public "getType"(): $Type<(A)>
public static "pair"<A, B>(arg0: $Typed$$Type<(A)>, arg1: $Typed$$Type<(B)>): $Typed<($Pair<(A), (B)>)>
public "getAll"<FT>(arg0: $TypedOptic$$Type<(A), (any), (FT), (any)>): $List<(FT)>
public "updateRecursive"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<(FT), (FR)>): $Typed<(any)>
public "updateRecursive"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<(FT), (FT)>): $Typed<(any)>
public "getOptional"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Optional<(FT)>
public "getAllTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $List<($Typed<(FT)>)>
public "inj1"<B>(arg0: $Type$$Type<(B)>): $Typed<($Either<(A), (B)>)>
public "inj2"<B>(arg0: $Type$$Type<(B)>): $Typed<($Either<(B), (A)>)>
public "getTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Typed<(FT)>
public "updateTyped"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<($Typed<(any)>), ($Typed$$Type<(any)>)>): $Typed<(any)>
public "updateTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<($Typed<(any)>), ($Typed$$Type<(any)>)>): $Typed<(any)>
public "getOptionalTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Optional<($Typed<(FT)>)>
public "getOrCreateTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Typed<(FT)>
public "updateRecursiveTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<($Typed<(any)>), ($Typed$$Type<(any)>)>): $Typed<(any)>
public "updateRecursiveTyped"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<($Typed<(any)>), ($Typed$$Type<(any)>)>): $Typed<(any)>
public "getOps"(): $DynamicOps<(any)>
get "value"(): A
get "type"(): $Type<(A)>
get "ops"(): $DynamicOps<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Typed$$Type<A> = ($Typed<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Typed_<A> = $Typed$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.gui.RealmsDataFetcher" {
import {$RealmsClient, $RealmsClient$$Type} from "com.mojang.realmsclient.client.RealmsClient"
import {$DataFetcher$Task, $DataFetcher$Task$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher$Task"
import {$List, $List$$Type} from "java.util.List"
import {$RealmsServerPlayerLists, $RealmsServerPlayerLists$$Type} from "com.mojang.realmsclient.dto.RealmsServerPlayerLists"
import {$RealmsNewsManager, $RealmsNewsManager$$Type} from "com.mojang.realmsclient.gui.RealmsNewsManager"
import {$DataFetcher, $DataFetcher$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher"
import {$RealmsNews, $RealmsNews$$Type} from "com.mojang.realmsclient.dto.RealmsNews"
import {$RealmsDataFetcher$ServerListData, $RealmsDataFetcher$ServerListData$$Type} from "com.mojang.realmsclient.gui.RealmsDataFetcher$ServerListData"
import {$RealmsNotification, $RealmsNotification$$Type} from "com.mojang.realmsclient.dto.RealmsNotification"

export class $RealmsDataFetcher {
readonly "dataFetcher": $DataFetcher
readonly "notificationsTask": $DataFetcher$Task<($List<($RealmsNotification)>)>
readonly "pendingInvitesTask": $DataFetcher$Task<(integer)>
readonly "trialAvailabilityTask": $DataFetcher$Task<(boolean)>
readonly "newsTask": $DataFetcher$Task<($RealmsNews)>
readonly "newsManager": $RealmsNewsManager
readonly "serverListUpdateTask": $DataFetcher$Task<($RealmsDataFetcher$ServerListData)>
readonly "onlinePlayersTask": $DataFetcher$Task<($RealmsServerPlayerLists)>

constructor(arg0: $RealmsClient$$Type)

public "getTasks"(): $List<($DataFetcher$Task<(any)>)>
get "tasks"(): $List<($DataFetcher$Task<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsDataFetcher$$Type = ($RealmsDataFetcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsDataFetcher_ = $RealmsDataFetcher$$Type;
}}
declare module "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$Dynamic3CommandExceptionType$Function, $Dynamic3CommandExceptionType$Function$$Type} from "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType$Function"
import {$CommandExceptionType, $CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$CommandSyntaxException, $CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"

export class $Dynamic3CommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Dynamic3CommandExceptionType$Function$$Type)

public "create"(arg0: any, arg1: any, arg2: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type, arg1: any, arg2: any, arg3: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic3CommandExceptionType$$Type = ($Dynamic3CommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic3CommandExceptionType_ = $Dynamic3CommandExceptionType$$Type;
}}
declare module "com.mojang.brigadier.context.ParsedCommandNode" {
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export class $ParsedCommandNode<S> {

constructor(arg0: $CommandNode$$Type<(S)>, arg1: $StringRange$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getNode"(): $CommandNode<(S)>
public "getRange"(): $StringRange
get "node"(): $CommandNode<(S)>
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedCommandNode$$Type<S> = ($ParsedCommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsedCommandNode_<S> = $ParsedCommandNode$$Type<(S)>;
}}
declare module "com.mojang.brigadier.tree.LiteralCommandNode" {
import {$CommandContextBuilder, $CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder, $ArgumentBuilder$$Type} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $LiteralCommandNode<S> extends $CommandNode<(S)> {

constructor(arg0: string, arg1: $Command$$Type<(S)>, arg2: $Predicate$$Type<(S)>, arg3: $CommandNode$$Type<(S)>, arg4: $RedirectModifier$$Type<(S)>, arg5: boolean)

public "getExamples"(): $Collection<(string)>
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "isValidInput"(arg0: string): boolean
public "getUsageText"(): string
public "createBuilder"(): $ArgumentBuilder<(any), (any)>
public "getLiteral"(): string
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "name"(): string
get "usageText"(): string
get "literal"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralCommandNode$$Type<S> = ($LiteralCommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiteralCommandNode_<S> = $LiteralCommandNode$$Type<(S)>;
}}
declare module "com.mojang.realmsclient.dto.Subscription$SubscriptionType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Subscription$SubscriptionType extends $Enum<($Subscription$SubscriptionType)> {
static readonly "NORMAL": $Subscription$SubscriptionType
static readonly "RECURRING": $Subscription$SubscriptionType


public static "values"(): ($Subscription$SubscriptionType)[]
public static "valueOf"(arg0: string): $Subscription$SubscriptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subscription$SubscriptionType$$Type = (("normal") | ("recurring"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Subscription$SubscriptionType_ = $Subscription$SubscriptionType$$Type;
}}
declare module "com.mojang.datafixers.util.Pair$Mu" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export class $Pair$Mu<S> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Mu$$Type<S> = ($Pair$Mu<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair$Mu_<S> = $Pair$Mu$$Type<(S)>;
}}
declare module "com.mojang.blaze3d.vertex.PoseStack$Pose" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $PoseStack$Pose {


public "copy"(): $PoseStack$Pose
public "normal"(): $Matrix3f
public "transformNormal"(arg0: float, arg1: float, arg2: float, arg3: $Vector3f$$Type): $Vector3f
public "transformNormal"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type): $Vector3f
public "pose"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStack$Pose$$Type = ($PoseStack$Pose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStack$Pose_ = $PoseStack$Pose$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormat$IndexType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $VertexFormat$IndexType extends $Enum<($VertexFormat$IndexType)> {
readonly "bytes": integer
readonly "asGLType": integer
static readonly "INT": $VertexFormat$IndexType
static readonly "SHORT": $VertexFormat$IndexType


public static "values"(): ($VertexFormat$IndexType)[]
public static "valueOf"(arg0: string): $VertexFormat$IndexType
public static "least"(arg0: integer): $VertexFormat$IndexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$IndexType$$Type = (("short") | ("int"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat$IndexType_ = $VertexFormat$IndexType$$Type;
}}
declare module "com.mojang.math.OctahedralGroup" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $OctahedralGroup extends $Enum<($OctahedralGroup)> implements $StringRepresentable {
static readonly "ROT_60_REF_PNP": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_POS": $OctahedralGroup
static readonly "ROT_180_FACE_XZ": $OctahedralGroup
static readonly "ROT_180_FACE_XY": $OctahedralGroup
static readonly "ROT_90_X_POS": $OctahedralGroup
static readonly "ROT_60_REF_NPN": $OctahedralGroup
static readonly "SWAP_NEG_XZ": $OctahedralGroup
static readonly "ROT_60_REF_NNN": $OctahedralGroup
static readonly "ROT_60_REF_NPP": $OctahedralGroup
static readonly "ROT_60_REF_PPN": $OctahedralGroup
static readonly "SWAP_NEG_XY": $OctahedralGroup
static readonly "ROT_90_REF_Z_NEG": $OctahedralGroup
static readonly "ROT_90_X_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_NEG": $OctahedralGroup
static readonly "ROT_60_REF_NNP": $OctahedralGroup
static readonly "ROT_60_REF_PNN": $OctahedralGroup
static readonly "ROT_60_REF_PPP": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_NEG": $OctahedralGroup
static readonly "ROT_120_NNN": $OctahedralGroup
static readonly "ROT_120_NPP": $OctahedralGroup
static readonly "ROT_120_PPN": $OctahedralGroup
static readonly "ROT_120_NPN": $OctahedralGroup
static readonly "ROT_90_REF_X_POS": $OctahedralGroup
static readonly "ROT_120_PNP": $OctahedralGroup
static readonly "SWAP_YZ": $OctahedralGroup
static readonly "ROT_90_REF_Y_NEG": $OctahedralGroup
static readonly "ROT_120_NNP": $OctahedralGroup
static readonly "ROT_120_PNN": $OctahedralGroup
static readonly "ROT_120_PPP": $OctahedralGroup
static readonly "ROT_90_Y_POS": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_POS": $OctahedralGroup
static readonly "ROT_90_Y_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_NEG": $OctahedralGroup
static readonly "INVERT_X": $OctahedralGroup
static readonly "ROT_90_REF_Y_POS": $OctahedralGroup
static readonly "ROT_90_Z_NEG": $OctahedralGroup
static readonly "ROT_180_FACE_YZ": $OctahedralGroup
static readonly "ROT_90_REF_X_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_POS": $OctahedralGroup
static readonly "ROT_90_Z_POS": $OctahedralGroup
static readonly "INVERSION": $OctahedralGroup
static readonly "SWAP_NEG_YZ": $OctahedralGroup
static readonly "IDENTITY": $OctahedralGroup
static readonly "ROT_90_REF_Z_POS": $OctahedralGroup
static readonly "SWAP_XY": $OctahedralGroup
static readonly "SWAP_XZ": $OctahedralGroup
static readonly "INVERT_Z": $OctahedralGroup
static readonly "INVERT_Y": $OctahedralGroup


public "toString"(): string
public static "values"(): ($OctahedralGroup)[]
public static "valueOf"(arg0: string): $OctahedralGroup
public "compose"(arg0: $OctahedralGroup$$Type): $OctahedralGroup
public "rotate"(arg0: $Direction$$Type): $Direction
public "rotate"(arg0: $FrontAndTop$$Type): $FrontAndTop
public "inverts"(arg0: $Direction$Axis$$Type): boolean
public "transformation"(): $Matrix3f
public "inverse"(): $OctahedralGroup
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public "getRemappedEnumConstantName"(): string
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OctahedralGroup$$Type = (("identity") | ("rot_180_face_xy") | ("rot_180_face_xz") | ("rot_180_face_yz") | ("rot_120_nnn") | ("rot_120_nnp") | ("rot_120_npn") | ("rot_120_npp") | ("rot_120_pnn") | ("rot_120_pnp") | ("rot_120_ppn") | ("rot_120_ppp") | ("rot_180_edge_xy_neg") | ("rot_180_edge_xy_pos") | ("rot_180_edge_xz_neg") | ("rot_180_edge_xz_pos") | ("rot_180_edge_yz_neg") | ("rot_180_edge_yz_pos") | ("rot_90_x_neg") | ("rot_90_x_pos") | ("rot_90_y_neg") | ("rot_90_y_pos") | ("rot_90_z_neg") | ("rot_90_z_pos") | ("inversion") | ("invert_x") | ("invert_y") | ("invert_z") | ("rot_60_ref_nnn") | ("rot_60_ref_nnp") | ("rot_60_ref_npn") | ("rot_60_ref_npp") | ("rot_60_ref_pnn") | ("rot_60_ref_pnp") | ("rot_60_ref_ppn") | ("rot_60_ref_ppp") | ("swap_xy") | ("swap_yz") | ("swap_xz") | ("swap_neg_xy") | ("swap_neg_yz") | ("swap_neg_xz") | ("rot_90_ref_x_neg") | ("rot_90_ref_x_pos") | ("rot_90_ref_y_neg") | ("rot_90_ref_y_pos") | ("rot_90_ref_z_neg") | ("rot_90_ref_z_pos"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OctahedralGroup_ = $OctahedralGroup$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexSorting$DistanceFunction" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export interface $VertexSorting$DistanceFunction {

 "apply"(arg0: $Vector3f$$Type): float

(arg0: $Vector3f): float
}

export namespace $VertexSorting$DistanceFunction {
const probejs$$marker: never
}
export class $VertexSorting$DistanceFunction$$Static implements $VertexSorting$DistanceFunction {


 "apply"(arg0: $Vector3f$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexSorting$DistanceFunction$$Type = ((arg0: $Vector3f) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexSorting$DistanceFunction_ = $VertexSorting$DistanceFunction$$Type;
}}
declare module "com.mojang.brigadier.RedirectModifier" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Collection, $Collection$$Type} from "java.util.Collection"

export interface $RedirectModifier<S> {

 "apply"(arg0: $CommandContext$$Type<(S)>): $Collection<(S)>

(arg0: $CommandContext<(S)>): $Collection$$Type<(S)>
}

export namespace $RedirectModifier {
const probejs$$marker: never
}
export class $RedirectModifier$$Static<S> implements $RedirectModifier {


 "apply"(arg0: $CommandContext$$Type<(S)>): $Collection<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedirectModifier$$Type<S> = ((arg0: $CommandContext<(S)>) => $Collection$$Type<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedirectModifier_<S> = $RedirectModifier$$Type<(S)>;
}}
declare module "com.mojang.blaze3d.vertex.VertexSorting" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$VertexSorting$DistanceFunction, $VertexSorting$DistanceFunction$$Type} from "com.mojang.blaze3d.vertex.VertexSorting$DistanceFunction"

export interface $VertexSorting {

 "sort"(arg0: ($Vector3f$$Type)[]): (integer)[]

(arg0: ($Vector3f)[]): (integer)[]
}

export namespace $VertexSorting {
const ORTHOGRAPHIC_Z: $VertexSorting
const DISTANCE_TO_ORIGIN: $VertexSorting
function byDistance(arg0: float, arg1: float, arg2: float): $VertexSorting
function byDistance(arg0: $Vector3f$$Type): $VertexSorting
function byDistance(arg0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
const probejs$$marker: never
}
export class $VertexSorting$$Static implements $VertexSorting {
static readonly "ORTHOGRAPHIC_Z": $VertexSorting
static readonly "DISTANCE_TO_ORIGIN": $VertexSorting


 "sort"(arg0: ($Vector3f$$Type)[]): (integer)[]
static "byDistance"(arg0: float, arg1: float, arg2: float): $VertexSorting
static "byDistance"(arg0: $Vector3f$$Type): $VertexSorting
static "byDistance"(arg0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexSorting$$Type = ((arg0: ($Vector3f)[]) => (integer)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexSorting_ = $VertexSorting$$Type;
}}
declare module "com.mojang.datafixers.util.Function13" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($BiFunction<(T12), (T13), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function<(T13), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function4<(T10), (T11), (T12), (T13), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function3<(T11), (T12), (T13), (R)>)>
 "curry"(): $Function<(T1), ($Function12<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function11<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function8<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function6<(T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function10<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function5<(T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function7<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function9<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
}

export namespace $Function13 {
const probejs$$marker: never
}
export class $Function13$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> implements $Function13 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($BiFunction<(T12), (T13), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function<(T13), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function4<(T10), (T11), (T12), (T13), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function3<(T11), (T12), (T13), (R)>)>
 "curry"(): $Function<(T1), ($Function12<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function11<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function8<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function6<(T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function10<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function5<(T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function7<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function9<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = $Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>;
}}
declare module "com.mojang.datafixers.util.Function12" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"

export interface $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function<(T12), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function3<(T10), (T11), (T12), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($BiFunction<(T11), (T12), (R)>)>
 "curry"(): $Function<(T1), ($Function11<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function10<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function7<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function5<(T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function9<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function4<(T9), (T10), (T11), (T12), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function6<(T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function8<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
}

export namespace $Function12 {
const probejs$$marker: never
}
export class $Function12$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> implements $Function12 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function<(T12), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function3<(T10), (T11), (T12), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($BiFunction<(T11), (T12), (R)>)>
 "curry"(): $Function<(T1), ($Function11<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function10<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function7<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function5<(T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function9<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function4<(T9), (T10), (T11), (T12), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function6<(T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function8<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = $Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>;
}}
declare module "com.mojang.datafixers.util.Function15" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function14, $Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function4<(T12), (T13), (T14), (T15), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function3<(T13), (T14), (T15), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function6<(T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($Function<(T15), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function5<(T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($BiFunction<(T14), (T15), (R)>)>
 "curry"(): $Function<(T1), ($Function14<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function13<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function10<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function8<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function12<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function7<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function9<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function11<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
}

export namespace $Function15 {
const probejs$$marker: never
}
export class $Function15$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> implements $Function15 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function4<(T12), (T13), (T14), (T15), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function3<(T13), (T14), (T15), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function6<(T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($Function<(T15), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function5<(T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($BiFunction<(T14), (T15), (R)>)>
 "curry"(): $Function<(T1), ($Function14<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function13<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function10<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function8<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function12<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function7<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function9<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function11<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = $Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>;
}}
declare module "com.mojang.datafixers.util.Function14" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function3<(T12), (T13), (T14), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($BiFunction<(T13), (T14), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function5<(T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function4<(T11), (T12), (T13), (T14), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function<(T14), (R)>)>
 "curry"(): $Function<(T1), ($Function13<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function12<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function9<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function7<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function11<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function6<(T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function8<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function10<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
}

export namespace $Function14 {
const probejs$$marker: never
}
export class $Function14$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> implements $Function14 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function3<(T12), (T13), (T14), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($BiFunction<(T13), (T14), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function5<(T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function4<(T11), (T12), (T13), (T14), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function<(T14), (R)>)>
 "curry"(): $Function<(T1), ($Function13<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function12<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function9<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function7<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function11<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function6<(T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function8<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function10<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = $Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>;
}}
declare module "com.mojang.datafixers.util.Function16" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15, $Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14, $Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function5<(T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function4<(T13), (T14), (T15), (T16), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function7<(T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($BiFunction<(T15), (T16), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function6<(T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function3<(T14), (T15), (T16), (R)>)>
 "curry"(): $Function<(T1), ($Function15<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function14<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function11<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function9<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function13<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function8<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function10<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function12<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry15"(): $Function15<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), ($Function<(T16), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
}

export namespace $Function16 {
const probejs$$marker: never
}
export class $Function16$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> implements $Function16 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function5<(T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function4<(T13), (T14), (T15), (T16), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function7<(T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($BiFunction<(T15), (T16), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function6<(T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function3<(T14), (T15), (T16), (R)>)>
 "curry"(): $Function<(T1), ($Function15<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function14<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function11<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function9<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function13<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function8<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function10<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function12<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry15"(): $Function15<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), ($Function<(T16), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = $Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>;
}}
declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$Dynamic2CommandExceptionType$Function, $Dynamic2CommandExceptionType$Function$$Type} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function"
import {$CommandExceptionType, $CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$CommandSyntaxException, $CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"

export class $Dynamic2CommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Dynamic2CommandExceptionType$Function$$Type)

public "create"(arg0: any, arg1: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type, arg1: any, arg2: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic2CommandExceptionType$$Type = ($Dynamic2CommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic2CommandExceptionType_ = $Dynamic2CommandExceptionType$$Type;
}}
declare module "com.mojang.datafixers.types.templates.TypeTemplate" {
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$FamilyOptic, $FamilyOptic$$Type} from "com.mojang.datafixers.FamilyOptic"
import {$TypeFamily, $TypeFamily$$Type} from "com.mojang.datafixers.types.families.TypeFamily"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export interface $TypeTemplate {

 "size"(): integer
 "apply"(arg0: $TypeFamily$$Type): $TypeFamily
 "hmap"(arg0: $TypeFamily$$Type, arg1: $IntFunction$$Type<($RewriteResult$$Type<(any), (any)>)>): $IntFunction<($RewriteResult<(any), (any)>)>
 "applyO"<A, B>(arg0: $FamilyOptic$$Type<(A), (B)>, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>): $FamilyOptic<(A), (B)>
 "findFieldOrType"<A, B>(arg0: integer, arg1: string, arg2: $Type$$Type<(A)>, arg3: $Type$$Type<(B)>): $Either<($TypeTemplate), ($Type$FieldNotFoundException)>
 "toSimpleType"(): $Type<(any)>
}

export namespace $TypeTemplate {
const probejs$$marker: never
}
export class $TypeTemplate$$Static implements $TypeTemplate {


 "size"(): integer
 "apply"(arg0: $TypeFamily$$Type): $TypeFamily
 "hmap"(arg0: $TypeFamily$$Type, arg1: $IntFunction$$Type<($RewriteResult$$Type<(any), (any)>)>): $IntFunction<($RewriteResult<(any), (any)>)>
 "applyO"<A, B>(arg0: $FamilyOptic$$Type<(A), (B)>, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>): $FamilyOptic<(A), (B)>
 "findFieldOrType"<A, B>(arg0: integer, arg1: string, arg2: $Type$$Type<(A)>, arg3: $Type$$Type<(B)>): $Either<($TypeTemplate), ($Type$FieldNotFoundException)>
 "toSimpleType"(): $Type<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeTemplate$$Type = ($TypeTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeTemplate_ = $TypeTemplate$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormat$Mode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $VertexFormat$Mode extends $Enum<($VertexFormat$Mode)> {
readonly "asGLMode": integer
static readonly "QUADS": $VertexFormat$Mode
readonly "primitiveLength": integer
readonly "primitiveStride": integer
readonly "connectedPrimitives": boolean
static readonly "TRIANGLE_FAN": $VertexFormat$Mode
static readonly "DEBUG_LINES": $VertexFormat$Mode
static readonly "TRIANGLES": $VertexFormat$Mode
static readonly "DEBUG_LINE_STRIP": $VertexFormat$Mode
static readonly "LINE_STRIP": $VertexFormat$Mode
static readonly "LINES": $VertexFormat$Mode
static readonly "TRIANGLE_STRIP": $VertexFormat$Mode


public static "values"(): ($VertexFormat$Mode)[]
public static "valueOf"(arg0: string): $VertexFormat$Mode
public "indexCount"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$Mode$$Type = (("lines") | ("line_strip") | ("debug_lines") | ("debug_line_strip") | ("triangles") | ("triangle_strip") | ("triangle_fan") | ("quads"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat$Mode_ = $VertexFormat$Mode$$Type;
}}
declare module "com.mojang.realmsclient.util.RealmsPersistence$RealmsPersistenceData" {
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$$Type} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
 "hasUnreadNews": boolean
 "newsLink": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsPersistence$RealmsPersistenceData$$Type = ($RealmsPersistence$RealmsPersistenceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsPersistence$RealmsPersistenceData_ = $RealmsPersistence$RealmsPersistenceData$$Type;
}}
declare module "com.mojang.brigadier.context.ContextChain$Stage" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ContextChain$Stage extends $Enum<($ContextChain$Stage)> {
static readonly "EXECUTE": $ContextChain$Stage
static readonly "MODIFY": $ContextChain$Stage


public static "values"(): ($ContextChain$Stage)[]
public static "valueOf"(arg0: string): $ContextChain$Stage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextChain$Stage$$Type = (("modify") | ("execute"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextChain$Stage_ = $ContextChain$Stage$$Type;
}}
declare module "com.mojang.datafixers.util.Function11" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"

export interface $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($BiFunction<(T10), (T11), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function<(T11), (R)>)>
 "curry"(): $Function<(T1), ($Function10<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function9<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function6<(T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function4<(T8), (T9), (T10), (T11), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function8<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function3<(T9), (T10), (T11), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function5<(T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function7<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
}

export namespace $Function11 {
const probejs$$marker: never
}
export class $Function11$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> implements $Function11 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($BiFunction<(T10), (T11), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function<(T11), (R)>)>
 "curry"(): $Function<(T1), ($Function10<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function9<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function6<(T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function4<(T8), (T9), (T10), (T11), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function8<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function3<(T9), (T10), (T11), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function5<(T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function7<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = $Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>;
}}
declare module "com.mojang.datafixers.util.Function10" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function<(T10), (R)>)>
 "curry"(): $Function<(T1), ($Function9<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function8<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function5<(T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function3<(T8), (T9), (T10), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function7<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($BiFunction<(T9), (T10), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function4<(T7), (T8), (T9), (T10), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function6<(T5), (T6), (T7), (T8), (T9), (T10), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
}

export namespace $Function10 {
const probejs$$marker: never
}
export class $Function10$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> implements $Function10 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function<(T10), (R)>)>
 "curry"(): $Function<(T1), ($Function9<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function8<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function5<(T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function3<(T8), (T9), (T10), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function7<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($BiFunction<(T9), (T10), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function4<(T7), (T8), (T9), (T10), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function6<(T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = $Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>;
}}
declare module "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType$Function" {
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export interface $Dynamic3CommandExceptionType$Function {

 "apply"(arg0: any, arg1: any, arg2: any): $Message

(arg0: any, arg1: any, arg2: any): $Message$$Type
}

export namespace $Dynamic3CommandExceptionType$Function {
const probejs$$marker: never
}
export class $Dynamic3CommandExceptionType$Function$$Static implements $Dynamic3CommandExceptionType$Function {


 "apply"(arg0: any, arg1: any, arg2: any): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic3CommandExceptionType$Function$$Type = ((arg0: any, arg1: any, arg2: any) => $Message$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic3CommandExceptionType$Function_ = $Dynamic3CommandExceptionType$Function$$Type;
}}
declare module "com.mojang.realmsclient.dto.PendingInvitesList" {
import {$List, $List$$Type} from "java.util.List"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$PendingInvite, $PendingInvite$$Type} from "com.mojang.realmsclient.dto.PendingInvite"

export class $PendingInvitesList extends $ValueObject {
 "pendingInvites": $List<($PendingInvite)>

constructor()

public static "parse"(arg0: string): $PendingInvitesList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingInvitesList$$Type = ($PendingInvitesList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PendingInvitesList_ = $PendingInvitesList$$Type;
}}
declare module "com.mojang.blaze3d.font.GlyphInfo" {
import {$SheetGlyphInfo, $SheetGlyphInfo$$Type} from "com.mojang.blaze3d.font.SheetGlyphInfo"
import {$BakedGlyph, $BakedGlyph$$Type} from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $GlyphInfo {

 "getBoldOffset"(): float
 "getShadowOffset"(): float
 "bake"(arg0: $Function$$Type<($SheetGlyphInfo), ($BakedGlyph$$Type)>): $BakedGlyph
 "getAdvance"(arg0: boolean): float
 "getAdvance"(): float
get "boldOffset"(): float
get "shadowOffset"(): float
get "advance"(): float
}

export namespace $GlyphInfo {
const probejs$$marker: never
}
export class $GlyphInfo$$Static implements $GlyphInfo {


 "getBoldOffset"(): float
 "getShadowOffset"(): float
 "bake"(arg0: $Function$$Type<($SheetGlyphInfo), ($BakedGlyph$$Type)>): $BakedGlyph
 "getAdvance"(arg0: boolean): float
 "getAdvance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphInfo$$Type = ($GlyphInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphInfo_ = $GlyphInfo$$Type;
}}
declare module "com.mojang.blaze3d.vertex.PoseStack" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$IPoseStackExtension, $IPoseStackExtension$$Type} from "net.neoforged.neoforge.client.extensions.IPoseStackExtension"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export class $PoseStack implements $IPoseStackExtension {

constructor()

public "clear"(): boolean
public "scale"(arg0: float, arg1: float, arg2: float): void
public "last"(): $PoseStack$Pose
public "mulPose"(arg0: $Matrix4f$$Type): void
public "mulPose"(arg0: $Quaternionf$$Type): void
public "setIdentity"(): void
public "rotateAround"(arg0: $Quaternionf$$Type, arg1: float, arg2: float, arg3: float): void
public "translate"(arg0: double, arg1: double, arg2: double): void
public "translate"(arg0: float, arg1: float, arg2: float): void
public "pushPose"(): void
public "popPose"(): void
public "pushTransformation"(arg0: $Transformation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStack$$Type = ($PoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStack_ = $PoseStack$$Type;
}}
declare module "com.mojang.datafixers.OpticFinder" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export interface $OpticFinder<FT> {

 "type"(): $Type<(FT)>
 "findType"<A>(arg0: $Type$$Type<(A)>, arg1: boolean): $Either<($TypedOptic<(A), (any), (FT), (FT)>), ($Type$FieldNotFoundException)>
 "findType"<A, FR>(arg0: $Type$$Type<(A)>, arg1: $Type$$Type<(FR)>, arg2: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
 "inField"<GT>(arg0: string, arg1: $Type$$Type<(GT)>): $OpticFinder<(FT)>
}

export namespace $OpticFinder {
const probejs$$marker: never
}
export class $OpticFinder$$Static<FT> implements $OpticFinder {


 "type"(): $Type<(FT)>
 "findType"<A>(arg0: $Type$$Type<(A)>, arg1: boolean): $Either<($TypedOptic<(A), (any), (FT), (FT)>), ($Type$FieldNotFoundException)>
 "findType"<A, FR>(arg0: $Type$$Type<(A)>, arg1: $Type$$Type<(FR)>, arg2: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
 "inField"<GT>(arg0: string, arg1: $Type$$Type<(GT)>): $OpticFinder<(FT)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpticFinder$$Type<FT> = ($OpticFinder<(FT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpticFinder_<FT> = $OpticFinder$$Type<(FT)>;
}}
declare module "com.mojang.datafixers.util.Either" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Either$Mu, $Either$Mu$$Type} from "com.mojang.datafixers.util.Either$Mu"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Either<L, R> implements $App<($Either$Mu<(R)>), (L)> {


public "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
public "flatMap"<L2>(arg0: $Function$$Type<(L), ($Either$$Type<(L2), (R)>)>): $Either<(L2), (R)>
public static "unwrap"<U>(arg0: $Either$$Type<(U), (U)>): U
public "left"(): $Optional<(L)>
public static "left"<L, R>(arg0: L): $Either<(L), (R)>
public static "right"<L, R>(arg0: R): $Either<(L), (R)>
public "right"(): $Optional<(R)>
public "swap"(): $Either<(R), (L)>
public static "unbox"<L, R>(arg0: $App$$Type<($Either$Mu$$Type<(R)>), (L)>): $Either<(L), (R)>
public "mapLeft"<T>(arg0: $Function$$Type<(L), (T)>): $Either<(T), (R)>
public "mapRight"<T>(arg0: $Function$$Type<(R), (T)>): $Either<(L), (T)>
public "orThrow"(): L
public "mapBoth"<C, D>(arg0: $Function$$Type<(L), (C)>, arg1: $Function$$Type<(R), (D)>): $Either<(C), (D)>
public "ifLeft"(arg0: $Consumer$$Type<(L)>): $Either<(L), (R)>
public "ifRight"(arg0: $Consumer$$Type<(R)>): $Either<(L), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$$Type<L, R> = ($Either<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Either_<L, R> = $Either$$Type<(L), (R)>;
}}
declare module "com.mojang.brigadier.arguments.FloatArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $FloatArgumentType implements $ArgumentType<(float)> {


public "getExamples"(): $Collection<(string)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getFloat"(arg0: $CommandContext$$Type<(any)>, arg1: string): float
public "parse"(arg0: $StringReader$$Type): float
public "getMaximum"(): float
public "getMinimum"(): float
public static "floatArg"(arg0: float, arg1: float): $FloatArgumentType
public static "floatArg"(): $FloatArgumentType
public static "floatArg"(arg0: float): $FloatArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): float
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "maximum"(): float
get "minimum"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatArgumentType$$Type = ($FloatArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatArgumentType_ = $FloatArgumentType$$Type;
}}
declare module "com.mojang.serialization.MapEncoder" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $MapEncoder<A> extends $Keyable {

 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
 "encoder"(): $Encoder<(A)>
 "compressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>): $RecordBuilder<(T)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $MapEncoder<(A)>
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $MapEncoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $MapEncoder<(B)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
}

export namespace $MapEncoder {
function makeCompressedBuilder<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
function forStrings(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
const probejs$$marker: never
}
export class $MapEncoder$$Static<A> implements $MapEncoder {


 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
 "encoder"(): $Encoder<(A)>
 "compressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>): $RecordBuilder<(T)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $MapEncoder<(A)>
static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $MapEncoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $MapEncoder<(B)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapEncoder$$Type<A> = ($MapEncoder<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapEncoder_<A> = $MapEncoder$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.util.LevelType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $LevelType extends $Enum<($LevelType)> {
static readonly "AMPLIFIED": $LevelType
static readonly "FLAT": $LevelType
static readonly "LARGE_BIOMES": $LevelType
static readonly "DEFAULT": $LevelType


public "getName"(): $Component
public static "values"(): ($LevelType)[]
public static "valueOf"(arg0: string): $LevelType
public "getDtoIndex"(): integer
get "name"(): $Component
get "dtoIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelType$$Type = (("default") | ("flat") | ("large_biomes") | ("amplified"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelType_ = $LevelType$$Type;
}}
declare module "com.mojang.datafixers.kinds.Applicative$Mu" {
import {$Functor$Mu, $Functor$Mu$$Type} from "com.mojang.datafixers.kinds.Functor$Mu"

export interface $Applicative$Mu extends $Functor$Mu {

}

export namespace $Applicative$Mu {
const probejs$$marker: never
}
export class $Applicative$Mu$$Static implements $Applicative$Mu {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Applicative$Mu$$Type = ($Applicative$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Applicative$Mu_ = $Applicative$Mu$$Type;
}}
declare module "com.mojang.blaze3d.platform.Monitor" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"

export class $Monitor {

constructor(arg0: long)

public "getY"(): integer
public "toString"(): string
public "getPreferredVidMode"(arg0: $Optional$$Type<($VideoMode$$Type)>): $VideoMode
public "getMode"(arg0: integer): $VideoMode
public "getX"(): integer
public "getCurrentMode"(): $VideoMode
public "getVideoModeIndex"(arg0: $VideoMode$$Type): integer
public "refreshVideoModes"(): void
public "getModeCount"(): integer
public "getMonitor"(): long
get "y"(): integer
get "x"(): integer
get "currentMode"(): $VideoMode
get "modeCount"(): integer
get "monitor"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Monitor$$Type = ($Monitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Monitor_ = $Monitor$$Type;
}}
declare module "com.mojang.brigadier.arguments.LongArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $LongArgumentType implements $ArgumentType<(long)> {


public "getExamples"(): $Collection<(string)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getLong"(arg0: $CommandContext$$Type<(any)>, arg1: string): long
public "parse"(arg0: $StringReader$$Type): long
public "getMaximum"(): long
public "getMinimum"(): long
public static "longArg"(arg0: long, arg1: long): $LongArgumentType
public static "longArg"(): $LongArgumentType
public static "longArg"(arg0: long): $LongArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): long
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
get "maximum"(): long
get "minimum"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArgumentType$$Type = ($LongArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongArgumentType_ = $LongArgumentType$$Type;
}}
declare module "com.mojang.blaze3d.platform.InputConstants$Key" {
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$InputConstants$Type, $InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $InputConstants$Key {


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): integer
public "getType"(): $InputConstants$Type
public "getDisplayName"(): $Component
public "getNumericKeyValue"(): $OptionalInt
get "name"(): string
get "value"(): integer
get "type"(): $InputConstants$Type
get "displayName"(): $Component
get "numericKeyValue"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Key$$Type = ($InputConstants$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputConstants$Key_ = $InputConstants$Key$$Type;
}}
declare module "com.mojang.datafixers.util.Function9" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
 "curry"(): $Function<(T1), ($Function8<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function7<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function4<(T6), (T7), (T8), (T9), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($BiFunction<(T8), (T9), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function6<(T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function<(T9), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function3<(T7), (T8), (T9), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function5<(T5), (T6), (T7), (T8), (T9), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
}

export namespace $Function9 {
const probejs$$marker: never
}
export class $Function9$$Static<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> implements $Function9 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
 "curry"(): $Function<(T1), ($Function8<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function7<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function4<(T6), (T7), (T8), (T9), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($BiFunction<(T8), (T9), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function6<(T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function<(T9), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function3<(T7), (T8), (T9), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function5<(T5), (T6), (T7), (T8), (T9), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>;
}}
declare module "com.mojang.datafixers.util.Function8" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
 "curry"(): $Function<(T1), ($Function7<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function6<(T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function3<(T6), (T7), (T8), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function<(T8), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function5<(T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($BiFunction<(T7), (T8), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function4<(T5), (T6), (T7), (T8), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
}

export namespace $Function8 {
const probejs$$marker: never
}
export class $Function8$$Static<T1, T2, T3, T4, T5, T6, T7, T8, R> implements $Function8 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
 "curry"(): $Function<(T1), ($Function7<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function6<(T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function3<(T6), (T7), (T8), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function<(T8), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function5<(T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($BiFunction<(T7), (T8), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function4<(T5), (T6), (T7), (T8), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R> = $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>;
}}
declare module "com.mojang.datafixers.util.Function7" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function7<T1, T2, T3, T4, T5, T6, T7, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
 "curry"(): $Function<(T1), ($Function6<(T2), (T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function5<(T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($BiFunction<(T6), (T7), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function4<(T4), (T5), (T6), (T7), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function<(T7), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function3<(T5), (T6), (T7), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
}

export namespace $Function7 {
const probejs$$marker: never
}
export class $Function7$$Static<T1, T2, T3, T4, T5, T6, T7, R> implements $Function7 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
 "curry"(): $Function<(T1), ($Function6<(T2), (T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function5<(T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($BiFunction<(T6), (T7), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function4<(T4), (T5), (T6), (T7), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function<(T7), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function3<(T5), (T6), (T7), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function7_<T1, T2, T3, T4, T5, T6, T7, R> = $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>;
}}
declare module "com.mojang.datafixers.util.Function6" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function6<T1, T2, T3, T4, T5, T6, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
 "curry"(): $Function<(T1), ($Function5<(T2), (T3), (T4), (T5), (T6), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function4<(T3), (T4), (T5), (T6), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function<(T6), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function3<(T4), (T5), (T6), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($BiFunction<(T5), (T6), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
}

export namespace $Function6 {
const probejs$$marker: never
}
export class $Function6$$Static<T1, T2, T3, T4, T5, T6, R> implements $Function6 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
 "curry"(): $Function<(T1), ($Function5<(T2), (T3), (T4), (T5), (T6), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function4<(T3), (T4), (T5), (T6), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function<(T6), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function3<(T4), (T5), (T6), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($BiFunction<(T5), (T6), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function6$$Type<T1, T2, T3, T4, T5, T6, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function6_<T1, T2, T3, T4, T5, T6, R> = $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>;
}}
declare module "com.mojang.datafixers.util.Function5" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function5<T1, T2, T3, T4, T5, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
 "curry"(): $Function<(T1), ($Function4<(T2), (T3), (T4), (T5), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function3<(T3), (T4), (T5), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($BiFunction<(T4), (T5), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function<(T5), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
}

export namespace $Function5 {
const probejs$$marker: never
}
export class $Function5$$Static<T1, T2, T3, T4, T5, R> implements $Function5 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
 "curry"(): $Function<(T1), ($Function4<(T2), (T3), (T4), (T5), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function3<(T3), (T4), (T5), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($BiFunction<(T4), (T5), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function<(T5), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function5$$Type<T1, T2, T3, T4, T5, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function5_<T1, T2, T3, T4, T5, R> = $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>;
}}
declare module "com.mojang.datafixers.util.Function4" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"

export interface $Function4<T1, T2, T3, T4, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
 "curry"(): $Function<(T1), ($Function3<(T2), (T3), (T4), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($BiFunction<(T3), (T4), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function<(T4), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
}

export namespace $Function4 {
const probejs$$marker: never
}
export class $Function4$$Static<T1, T2, T3, T4, R> implements $Function4 {


 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
 "curry"(): $Function<(T1), ($Function3<(T2), (T3), (T4), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($BiFunction<(T3), (T4), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function<(T4), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function4$$Type<T1, T2, T3, T4, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function4_<T1, T2, T3, T4, R> = $Function4$$Type<(T1), (T2), (T3), (T4), (R)>;
}}
declare module "com.mojang.datafixers.util.Function3" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $Function3<T1, T2, T3, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3): R
 "curry"(): $Function<(T1), ($BiFunction<(T2), (T3), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function<(T3), (R)>)>

(arg0: T1, arg1: T2, arg2: T3): R
}

export namespace $Function3 {
const probejs$$marker: never
}
export class $Function3$$Static<T1, T2, T3, R> implements $Function3 {


 "apply"(arg0: T1, arg1: T2, arg2: T3): R
 "curry"(): $Function<(T1), ($BiFunction<(T2), (T3), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function<(T3), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function3$$Type<T1, T2, T3, R> = ((arg0: T1, arg1: T2, arg2: T3) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function3_<T1, T2, T3, R> = $Function3$$Type<(T1), (T2), (T3), (R)>;
}}
declare module "com.mojang.serialization.Decoder$Terminal" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"

export interface $Decoder$Terminal<A> {

 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>

(arg0: $DynamicOps<(T)>, arg1: T): $DataResult$$Type<(A)>
}

export namespace $Decoder$Terminal {
const probejs$$marker: never
}
export class $Decoder$Terminal$$Static<A> implements $Decoder$Terminal {


 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Terminal$$Type<A> = ((arg0: $DynamicOps<(T)>, arg1: T) => $DataResult$$Type<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder$Terminal_<A> = $Decoder$Terminal$$Type<(A)>;
}}
declare module "com.mojang.datafixers.kinds.Applicative" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$Products$P10, $Products$P10$$Type} from "com.mojang.datafixers.Products$P10"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$Products$P11, $Products$P11$$Type} from "com.mojang.datafixers.Products$P11"
import {$Products$P1, $Products$P1$$Type} from "com.mojang.datafixers.Products$P1"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$Products$P16, $Products$P16$$Type} from "com.mojang.datafixers.Products$P16"
import {$Products$P14, $Products$P14$$Type} from "com.mojang.datafixers.Products$P14"
import {$Products$P15, $Products$P15$$Type} from "com.mojang.datafixers.Products$P15"
import {$Products$P12, $Products$P12$$Type} from "com.mojang.datafixers.Products$P12"
import {$Products$P13, $Products$P13$$Type} from "com.mojang.datafixers.Products$P13"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Applicative$Mu, $Applicative$Mu$$Type} from "com.mojang.datafixers.kinds.Applicative$Mu"
import {$Products$P9, $Products$P9$$Type} from "com.mojang.datafixers.Products$P9"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15, $Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14, $Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function16, $Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Functor, $Functor$$Type} from "com.mojang.datafixers.kinds.Functor"

export interface $Applicative<F extends $K1, Mu extends $Applicative$Mu> extends $Functor<(F), (Mu)> {

 "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<(F), (A)>): $App<(F), (R)>
 "ap"<A, R>(arg0: $App$$Type<(F), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<(F), (A)>): $App<(F), (R)>
 "point"<A>(arg0: A): $App<(F), (A)>
 "ap2"<A, B, R>(arg0: $App$$Type<(F), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<(F), (A)>, arg2: $App$$Type<(F), (B)>): $App<(F), (R)>
 "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>): $App<(F), (R)>
 "lift1"<A, R>(arg0: $App$$Type<(F), ($Function$$Type<(A), (R)>)>): $Function<($App<(F), (A)>), ($App<(F), (R)>)>
 "ap3"<T1, T2, T3, R>(arg0: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>): $App<(F), (R)>
 "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<(F), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>): $App<(F), (R)>
 "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<(F), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>, arg15: $App$$Type<(F), (T15)>): $App<(F), (R)>
 "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>): $App<(F), (R)>
 "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>): $App<(F), (R)>
 "lift2"<A, B, R>(arg0: $App$$Type<(F), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<(F), (A)>), ($App<(F), (B)>), ($App<(F), (R)>)>
 "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (R)>)>
 "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>): $App<(F), (R)>
 "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<(F), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>): $App<(F), (R)>
 "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>): $App<(F), (R)>
 "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>): $App<(F), (R)>
 "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (R)>)>
 "lift3"<T1, T2, T3, R>(arg0: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (R)>)>
 "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<(F), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>): $App<(F), (R)>
 "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>): $App<(F), (R)>
 "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<(F), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>): $App<(F), (R)>
 "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (R)>)>
 "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<(F), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>, arg15: $App$$Type<(F), (T15)>, arg16: $App$$Type<(F), (T16)>): $App<(F), (R)>
 "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>): $App<(F), (R)>
 "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>): $App<(F), (R)>
 "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>): $App<(F), (R)>
 "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<(F), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>): $App<(F), (R)>
 "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>): $App<(F), (R)>
 "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>): $App<(F), (R)>
 "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (T9)>), ($App<(F), (R)>)>
 "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (R)>)>
 "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>): $App<(F), (R)>
 "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (R)>)>
 "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<(F), (A)>, arg2: $App$$Type<(F), (B)>): $App<(F), (R)>
 "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<(F), (T)>): $App<(F), (R)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}

export namespace $Applicative {
function unbox<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<(Mu), (F)>): $Applicative<(F), (Mu)>
const probejs$$marker: never
}
export class $Applicative$$Static<F extends $K1, Mu extends $Applicative$Mu> implements $Applicative {


static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<(Mu), (F)>): $Applicative<(F), (Mu)>
 "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<(F), (A)>): $App<(F), (R)>
 "ap"<A, R>(arg0: $App$$Type<(F), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<(F), (A)>): $App<(F), (R)>
 "point"<A>(arg0: A): $App<(F), (A)>
 "ap2"<A, B, R>(arg0: $App$$Type<(F), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<(F), (A)>, arg2: $App$$Type<(F), (B)>): $App<(F), (R)>
 "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>): $App<(F), (R)>
 "lift1"<A, R>(arg0: $App$$Type<(F), ($Function$$Type<(A), (R)>)>): $Function<($App<(F), (A)>), ($App<(F), (R)>)>
 "ap3"<T1, T2, T3, R>(arg0: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>): $App<(F), (R)>
 "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<(F), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>): $App<(F), (R)>
 "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<(F), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>, arg15: $App$$Type<(F), (T15)>): $App<(F), (R)>
 "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>): $App<(F), (R)>
 "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>): $App<(F), (R)>
 "lift2"<A, B, R>(arg0: $App$$Type<(F), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<(F), (A)>), ($App<(F), (B)>), ($App<(F), (R)>)>
 "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (R)>)>
 "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>): $App<(F), (R)>
 "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<(F), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>): $App<(F), (R)>
 "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>): $App<(F), (R)>
 "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>): $App<(F), (R)>
 "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (R)>)>
 "lift3"<T1, T2, T3, R>(arg0: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (R)>)>
 "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<(F), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>): $App<(F), (R)>
 "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>): $App<(F), (R)>
 "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<(F), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>): $App<(F), (R)>
 "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (R)>)>
 "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<(F), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>, arg15: $App$$Type<(F), (T15)>, arg16: $App$$Type<(F), (T16)>): $App<(F), (R)>
 "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>): $App<(F), (R)>
 "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>): $App<(F), (R)>
 "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>): $App<(F), (R)>
 "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<(F), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>): $App<(F), (R)>
 "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>): $App<(F), (R)>
 "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>): $App<(F), (R)>
 "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (T9)>), ($App<(F), (R)>)>
 "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (R)>)>
 "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>): $App<(F), (R)>
 "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (R)>)>
 "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<(F), (A)>, arg2: $App$$Type<(F), (B)>): $App<(F), (R)>
 "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<(F), (T)>): $App<(F), (R)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Applicative$$Type<F, Mu> = ($Applicative<(F), (Mu)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Applicative_<F, Mu> = $Applicative$$Type<(F), (Mu)>;
}}
declare module "com.mojang.serialization.Encoder" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"

export interface $Encoder<A> {

 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(A)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "fieldOf"(arg0: string): $MapEncoder<(A)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>

(arg0: A, arg1: $DynamicOps<(T)>, arg2: T): $DataResult$$Type<(T)>
}

export namespace $Encoder {
function empty<A>(): $MapEncoder<(A)>
function error<A>(arg0: string): $Encoder<(A)>
const probejs$$marker: never
}
export class $Encoder$$Static<A> implements $Encoder {


 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
static "empty"<A>(): $MapEncoder<(A)>
static "error"<A>(arg0: string): $Encoder<(A)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(A)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "fieldOf"(arg0: string): $MapEncoder<(A)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Encoder$$Type<A> = ((arg0: A, arg1: $DynamicOps<(T)>, arg2: T) => $DataResult$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Encoder_<A> = $Encoder$$Type<(A)>;
}}
declare module "com.mojang.serialization.Dynamic" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$OptionalDynamic, $OptionalDynamic$$Type} from "com.mojang.serialization.OptionalDynamic"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DynamicLike, $DynamicLike$$Type} from "com.mojang.serialization.DynamicLike"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $Dynamic<T> extends $DynamicLike<(T)> {

constructor(arg0: $DynamicOps$$Type<(T)>)
constructor(arg0: $DynamicOps$$Type<(T)>, arg1: T)

public "remove"(arg0: string): $Dynamic<(T)>
public "get"(arg0: string): $OptionalDynamic<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "cast"<U>(arg0: $DynamicOps$$Type<(U)>): U
public "update"(arg0: string, arg1: $Function$$Type<($Dynamic<(any)>), ($Dynamic$$Type<(any)>)>): $Dynamic<(T)>
public "convert"<R>(arg0: $DynamicOps$$Type<(R)>): $Dynamic<(R)>
public static "convert"<S, T>(arg0: $DynamicOps$$Type<(S)>, arg1: $DynamicOps$$Type<(T)>, arg2: S): T
public "decode"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<($Pair<(A), (T)>)>
public "getValue"(): T
public "map"(arg0: $Function$$Type<(T), (T)>): $Dynamic<(T)>
public static "copyField"(arg0: $Dynamic$$Type<(any)>, arg1: string, arg2: $Dynamic$$Type<(any)>, arg3: string): $Dynamic<(any)>
public "merge"(arg0: $Dynamic$$Type<(any)>): $OptionalDynamic<(T)>
public "merge"(arg0: $Dynamic$$Type<(any)>, arg1: $Dynamic$$Type<(any)>): $OptionalDynamic<(T)>
public "set"(arg0: string, arg1: $Dynamic$$Type<(any)>): $Dynamic<(T)>
public "getElement"(arg0: string): $DataResult<(T)>
public "asString"(): $DataResult<(string)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asNumber"(): $DataResult<(number)>
public "castTyped"<U>(arg0: $DynamicOps$$Type<(U)>): $Dynamic<(U)>
public "asBoolean"(): $DataResult<(boolean)>
public "into"<V>(arg0: $Function$$Type<($Dynamic<(T)>), (V)>): V
public "getGeneric"(arg0: T): $DataResult<(T)>
public "getMapValues"(): $DataResult<($Map<($Dynamic<(T)>), ($Dynamic<(T)>)>)>
public "updateGeneric"(arg0: T, arg1: $Function$$Type<(T), (T)>): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public static "copyAndFixField"<T>(arg0: $Dynamic$$Type<(T)>, arg1: string, arg2: $Dynamic$$Type<(any)>, arg3: string, arg4: $UnaryOperator$$Type<($Dynamic<(T)>)>): $Dynamic<(any)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "updateMapValues"(arg0: $Function$$Type<($Pair<($Dynamic<(any)>), ($Dynamic<(any)>)>), ($Pair$$Type<($Dynamic$$Type<(any)>), ($Dynamic$$Type<(any)>)>)>): $Dynamic<(T)>
public "replaceField"(arg0: string, arg1: string, arg2: $Optional$$Type<($Dynamic$$Type<(any)>)>): $Dynamic<(T)>
public "renameField"(arg0: string, arg1: string): $Dynamic<(T)>
public "renameAndFixField"(arg0: string, arg1: string, arg2: $UnaryOperator$$Type<($Dynamic<(any)>)>): $Dynamic<(T)>
public "setFieldIfPresent"(arg0: string, arg1: $Optional$$Type<($Dynamic$$Type<(any)>)>): $Dynamic<(T)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
get "value"(): T
get "mapValues"(): $DataResult<($Map<($Dynamic<(T)>), ($Dynamic<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic$$Type<T> = ($Dynamic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic_<T> = $Dynamic$$Type<(T)>;
}}
declare module "com.mojang.blaze3d.platform.NativeImage$Format" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $NativeImage$Format extends $Enum<($NativeImage$Format)> {
static readonly "LUMINANCE_ALPHA": $NativeImage$Format
static readonly "RGBA": $NativeImage$Format
static readonly "LUMINANCE": $NativeImage$Format
static readonly "RGB": $NativeImage$Format


public static "values"(): ($NativeImage$Format)[]
public static "valueOf"(arg0: string): $NativeImage$Format
public "luminanceOrGreenOffset"(): integer
public "luminanceOrRedOffset"(): integer
public "luminanceOrBlueOffset"(): integer
public "hasLuminanceOrGreen"(): boolean
public "setPackPixelStoreState"(): void
public "luminanceOrAlphaOffset"(): integer
public "hasLuminanceOrAlpha"(): boolean
public "setUnpackPixelStoreState"(): void
public "components"(): integer
public "luminanceOffset"(): integer
public "supportedByStb"(): boolean
public "hasLuminanceOrBlue"(): boolean
public "hasLuminance"(): boolean
public "hasLuminanceOrRed"(): boolean
public "alphaOffset"(): integer
public "greenOffset"(): integer
public "glFormat"(): integer
public "hasAlpha"(): boolean
public "hasRed"(): boolean
public "hasGreen"(): boolean
public "redOffset"(): integer
public "blueOffset"(): integer
public "hasBlue"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$Format$$Type = (("rgba") | ("rgb") | ("luminance_alpha") | ("luminance"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImage$Format_ = $NativeImage$Format$$Type;
}}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$RecordCodecBuilder$Instance, $RecordCodecBuilder$Instance$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecordCodecBuilder<O, F> implements $App<($RecordCodecBuilder$Mu<(O)>), (F)> {


public static "of"<O, F>(arg0: $Function$$Type<(O), (F)>, arg1: $MapCodec$$Type<(F)>): $RecordCodecBuilder<(O), (F)>
public static "of"<O, F>(arg0: $Function$$Type<(O), (F)>, arg1: string, arg2: $Codec$$Type<(F)>): $RecordCodecBuilder<(O), (F)>
public static "create"<O>(arg0: $Function$$Type<($RecordCodecBuilder$Instance<(O)>), ($App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (O)>)>): $Codec<(O)>
public static "instance"<O>(): $RecordCodecBuilder$Instance<(O)>
public static "build"<O>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (O)>): $MapCodec<(O)>
public static "unbox"<O, F>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (F)>): $RecordCodecBuilder<(O), (F)>
public "dependent"<E>(arg0: $Function$$Type<(O), (E)>, arg1: $MapEncoder$$Type<(E)>, arg2: $Function$$Type<(F), ($MapDecoder$$Type<(E)>)>): $RecordCodecBuilder<(O), (E)>
public static "point"<O, F>(arg0: F, arg1: $Lifecycle$$Type): $RecordCodecBuilder<(O), (F)>
public static "point"<O, F>(arg0: F): $RecordCodecBuilder<(O), (F)>
public static "stable"<O, F>(arg0: F): $RecordCodecBuilder<(O), (F)>
public static "mapCodec"<O>(arg0: $Function$$Type<($RecordCodecBuilder$Instance<(O)>), ($App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (O)>)>): $MapCodec<(O)>
public static "deprecated"<O, F>(arg0: F, arg1: integer): $RecordCodecBuilder<(O), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$$Type<O, F> = ($RecordCodecBuilder<(O), (F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder_<O, F> = $RecordCodecBuilder$$Type<(O), (F)>;
}}
declare module "com.mojang.realmsclient.util.RealmsPersistence" {
import {$RealmsPersistence$RealmsPersistenceData, $RealmsPersistence$RealmsPersistenceData$$Type} from "com.mojang.realmsclient.util.RealmsPersistence$RealmsPersistenceData"

export class $RealmsPersistence {

constructor()

public "read"(): $RealmsPersistence$RealmsPersistenceData
public "save"(arg0: $RealmsPersistence$RealmsPersistenceData$$Type): void
public static "readFile"(): $RealmsPersistence$RealmsPersistenceData
public static "writeFile"(arg0: $RealmsPersistence$RealmsPersistenceData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsPersistence$$Type = ($RealmsPersistence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsPersistence_ = $RealmsPersistence$$Type;
}}
declare module "com.mojang.blaze3d.platform.DisplayData" {
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"

export class $DisplayData {
readonly "fullscreenHeight": $OptionalInt
readonly "fullscreenWidth": $OptionalInt
readonly "width": integer
readonly "height": integer
readonly "isFullscreen": boolean

constructor(arg0: integer, arg1: integer, arg2: $OptionalInt$$Type, arg3: $OptionalInt$$Type, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayData$$Type = ($DisplayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayData_ = $DisplayData$$Type;
}}
declare module "com.mojang.blaze3d.platform.VideoMode" {
import {$GLFWVidMode$Buffer, $GLFWVidMode$Buffer$$Type} from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GLFWVidMode, $GLFWVidMode$$Type} from "org.lwjgl.glfw.GLFWVidMode"

export class $VideoMode {

constructor(arg0: $GLFWVidMode$$Type)
constructor(arg0: $GLFWVidMode$Buffer$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(): string
public static "read"(arg0: string): $Optional<($VideoMode)>
public "getWidth"(): integer
public "getHeight"(): integer
public "getRefreshRate"(): integer
public "getBlueBits"(): integer
public "getGreenBits"(): integer
public "getRedBits"(): integer
get "width"(): integer
get "height"(): integer
get "refreshRate"(): integer
get "blueBits"(): integer
get "greenBits"(): integer
get "redBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VideoMode$$Type = ($VideoMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VideoMode_ = $VideoMode$$Type;
}}
declare module "com.mojang.realmsclient.client.RealmsClient" {
import {$BackupList, $BackupList$$Type} from "com.mojang.realmsclient.dto.BackupList"
import {$RealmsServerAddress, $RealmsServerAddress$$Type} from "com.mojang.realmsclient.dto.RealmsServerAddress"
import {$UploadInfo, $UploadInfo$$Type} from "com.mojang.realmsclient.dto.UploadInfo"
import {$RealmsServer, $RealmsServer$$Type} from "com.mojang.realmsclient.dto.RealmsServer"
import {$RealmsWorldOptions, $RealmsWorldOptions$$Type} from "com.mojang.realmsclient.dto.RealmsWorldOptions"
import {$WorldTemplatePaginatedList, $WorldTemplatePaginatedList$$Type} from "com.mojang.realmsclient.dto.WorldTemplatePaginatedList"
import {$Subscription, $Subscription$$Type} from "com.mojang.realmsclient.dto.Subscription"
import {$PendingInvitesList, $PendingInvitesList$$Type} from "com.mojang.realmsclient.dto.PendingInvitesList"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$RealmsClient$CompatibleVersionResponse, $RealmsClient$CompatibleVersionResponse$$Type} from "com.mojang.realmsclient.client.RealmsClient$CompatibleVersionResponse"
import {$WorldGenerationInfo, $WorldGenerationInfo$$Type} from "com.mojang.realmsclient.util.WorldGenerationInfo"
import {$RealmsServerList, $RealmsServerList$$Type} from "com.mojang.realmsclient.dto.RealmsServerList"
import {$Ops, $Ops$$Type} from "com.mojang.realmsclient.dto.Ops"
import {$RealmsClient$Environment, $RealmsClient$Environment$$Type} from "com.mojang.realmsclient.client.RealmsClient$Environment"
import {$RealmsNotification, $RealmsNotification$$Type} from "com.mojang.realmsclient.dto.RealmsNotification"
import {$ServerActivityList, $ServerActivityList$$Type} from "com.mojang.realmsclient.dto.ServerActivityList"
import {$WorldDownload, $WorldDownload$$Type} from "com.mojang.realmsclient.dto.WorldDownload"
import {$RealmsServerPlayerLists, $RealmsServerPlayerLists$$Type} from "com.mojang.realmsclient.dto.RealmsServerPlayerLists"
import {$PingResult, $PingResult$$Type} from "com.mojang.realmsclient.dto.PingResult"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$RealmsNews, $RealmsNews$$Type} from "com.mojang.realmsclient.dto.RealmsNews"
import {$RealmsServer$WorldType, $RealmsServer$WorldType$$Type} from "com.mojang.realmsclient.dto.RealmsServer$WorldType"

export class $RealmsClient {
static readonly "ENVIRONMENT": $RealmsClient$Environment

constructor(arg0: string, arg1: string, arg2: $Minecraft$$Type)

public "notificationsDismiss"(arg0: $List$$Type<($UUID$$Type)>): void
public "update"(arg0: long, arg1: string, arg2: string): void
public "join"(arg0: long): $RealmsServerAddress
public "op"(arg0: long, arg1: $UUID$$Type): $Ops
public "close"(arg0: long): boolean
public "open"(arg0: long): boolean
public static "create"(): $RealmsClient
public static "create"(arg0: $Minecraft$$Type): $RealmsClient
public "getNotifications"(): $List<($RealmsNotification)>
public "putIntoMinigameMode"(arg0: long, arg1: string): boolean
public "fetchWorldTemplates"(arg0: integer, arg1: integer, arg2: $RealmsServer$WorldType$$Type): $WorldTemplatePaginatedList
public "resetWorldWithTemplate"(arg0: long, arg1: string): boolean
public "requestDownloadInfo"(arg0: long, arg1: integer): $WorldDownload
public "createSnapshotRealm"(arg0: long): $RealmsServer
public "requestUploadInfo"(arg0: long, arg1: string): $UploadInfo
public "initializeRealm"(arg0: long, arg1: string, arg2: string): void
public "deleteRealm"(arg0: long): void
public "clientCompatible"(): $RealmsClient$CompatibleVersionResponse
public "rejectInvitation"(arg0: string): void
public "acceptInvitation"(arg0: string): void
public "hasParentalConsent"(): boolean
public "getOwnRealm"(arg0: long): $RealmsServer
public "restoreWorld"(arg0: long, arg1: string): void
public "pendingInvites"(): $PendingInvitesList
public "resetWorldWithSeed"(arg0: long, arg1: $WorldGenerationInfo$$Type): boolean
public "subscriptionFor"(arg0: long): $Subscription
public "uninviteMyselfFrom"(arg0: long): void
public "getNews"(): $RealmsNews
public "listRealms"(): $RealmsServerList
public "getActivity"(arg0: long): $ServerActivityList
public "getLiveStats"(): $RealmsServerPlayerLists
public "trialAvailable"(): boolean
public "sendPingResults"(arg0: $PingResult$$Type): void
public "notificationsSeen"(arg0: $List$$Type<($UUID$$Type)>): void
public "backupsFor"(arg0: long): $BackupList
public "uninvite"(arg0: long, arg1: $UUID$$Type): void
public "invite"(arg0: long, arg1: string): $RealmsServer
public "agreeToTos"(): void
public "switchSlot"(arg0: long, arg1: integer): boolean
public "deop"(arg0: long, arg1: $UUID$$Type): $Ops
public "updateSlot"(arg0: long, arg1: integer, arg2: $RealmsWorldOptions$$Type): void
public "listSnapshotEligibleRealms"(): $List<($RealmsServer)>
public "pendingInvitesCount"(): integer
get "notifications"(): $List<($RealmsNotification)>
get "news"(): $RealmsNews
get "liveStats"(): $RealmsServerPlayerLists
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$$Type = ($RealmsClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsClient_ = $RealmsClient$$Type;
}}
declare module "com.mojang.datafixers.util.Pair" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$Pair$Mu, $Pair$Mu$$Type} from "com.mojang.datafixers.util.Pair$Mu"

export class $Pair<F, S> implements $App<($Pair$Mu<(S)>), (F)> {

constructor(arg0: F, arg1: S)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public static "toMap"<F, S>(): $Collector<($Pair<(F), (S)>), (any), ($Map<(F), (S)>)>
public "getFirst"(): F
public "swap"(): $Pair<(S), (F)>
public static "unbox"<F, S>(arg0: $App$$Type<($Pair$Mu$$Type<(S)>), (F)>): $Pair<(F), (S)>
public "getSecond"(): S
public "mapFirst"<F2>(arg0: $Function$$Type<(F), (F2)>): $Pair<(F2), (S)>
public "mapSecond"<S2>(arg0: $Function$$Type<(S), (S2)>): $Pair<(F), (S2)>
get "first"(): F
get "second"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$$Type<(F), (S)>;
}}
declare module "com.mojang.serialization.DataResult" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DataResult$Instance, $DataResult$Instance$$Type} from "com.mojang.serialization.DataResult$Instance"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataResult$Mu, $DataResult$Mu$$Type} from "com.mojang.serialization.DataResult$Mu"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$DataResult$Error, $DataResult$Error$$Type} from "com.mojang.serialization.DataResult$Error"

export interface $DataResult<R> extends $App<($DataResult$Mu), (R)> {

 "map"<T>(arg0: $Function$$Type<(R), (T)>): $DataResult<(T)>
 "result"(): $Optional<(R)>
 "flatMap"<R2>(arg0: $Function$$Type<(R), ($DataResult$$Type<(R2)>)>): $DataResult<(R2)>
 "error"(): $Optional<($DataResult$Error<(R)>)>
 "isError"(): boolean
 "ap"<R2>(arg0: $DataResult$$Type<($Function$$Type<(R), (R2)>)>): $DataResult<(R2)>
 "mapOrElse"<T>(arg0: $Function$$Type<(R), (T)>, arg1: $Function$$Type<($DataResult$Error<(R)>), (T)>): T
 "apply3"<R2, R3, S>(arg0: $Function3$$Type<(R), (R2), (R3), (S)>, arg1: $DataResult$$Type<(R2)>, arg2: $DataResult$$Type<(R3)>): $DataResult<(S)>
 "ifError"(arg0: $Consumer$$Type<($DataResult$Error<(R)>)>): $DataResult<(R)>
 "ifSuccess"(arg0: $Consumer$$Type<(R)>): $DataResult<(R)>
 "getOrThrow"(): R
 "getOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(string), (E)>): R
 "resultOrPartial"(arg0: $Consumer$$Type<(string)>): $Optional<(R)>
 "resultOrPartial"(): $Optional<(R)>
 "setLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
 "apply2stable"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
 "hasResultOrPartial"(): boolean
 "addLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
 "getPartialOrThrow"(): R
 "getPartialOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(string), (E)>): R
 "promotePartial"(arg0: $Consumer$$Type<(string)>): $DataResult<(R)>
 "lifecycle"(): $Lifecycle
 "isSuccess"(): boolean
 "setPartial"(arg0: R): $DataResult<(R)>
 "setPartial"(arg0: $Supplier$$Type<(R)>): $DataResult<(R)>
 "apply2"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
 "mapError"(arg0: $UnaryOperator$$Type<(string)>): $DataResult<(R)>
get "orThrow"(): R
get "partialOrThrow"(): R
set "partial"(value: R)
set "partial"(value: $Supplier$$Type<(R)>)
}

export namespace $DataResult {
function error<R>(arg0: $Supplier$$Type<(string)>, arg1: $Lifecycle$$Type): $DataResult<(R)>
function error<R>(arg0: $Supplier$$Type<(string)>, arg1: R, arg2: $Lifecycle$$Type): $DataResult<(R)>
function error<R>(arg0: $Supplier$$Type<(string)>, arg1: R): $DataResult<(R)>
function error<R>(arg0: $Supplier$$Type<(string)>): $DataResult<(R)>
function instance(): $DataResult$Instance
function unbox<R>(arg0: $App$$Type<($DataResult$Mu$$Type), (R)>): $DataResult<(R)>
function success<R>(arg0: R, arg1: $Lifecycle$$Type): $DataResult<(R)>
function success<R>(arg0: R): $DataResult<(R)>
function partialGet<K, V>(arg0: $Function$$Type<(K), (V)>, arg1: $Supplier$$Type<(string)>): $Function<(K), ($DataResult<(V)>)>
function appendMessages(arg0: string, arg1: string): string
const probejs$$marker: never
}
export class $DataResult$$Static<R> implements $DataResult {


 "map"<T>(arg0: $Function$$Type<(R), (T)>): $DataResult<(T)>
 "result"(): $Optional<(R)>
 "flatMap"<R2>(arg0: $Function$$Type<(R), ($DataResult$$Type<(R2)>)>): $DataResult<(R2)>
static "error"<R>(arg0: $Supplier$$Type<(string)>, arg1: $Lifecycle$$Type): $DataResult<(R)>
static "error"<R>(arg0: $Supplier$$Type<(string)>, arg1: R, arg2: $Lifecycle$$Type): $DataResult<(R)>
 "error"(): $Optional<($DataResult$Error<(R)>)>
static "error"<R>(arg0: $Supplier$$Type<(string)>, arg1: R): $DataResult<(R)>
static "error"<R>(arg0: $Supplier$$Type<(string)>): $DataResult<(R)>
static "instance"(): $DataResult$Instance
 "isError"(): boolean
static "unbox"<R>(arg0: $App$$Type<($DataResult$Mu$$Type), (R)>): $DataResult<(R)>
static "success"<R>(arg0: R, arg1: $Lifecycle$$Type): $DataResult<(R)>
static "success"<R>(arg0: R): $DataResult<(R)>
 "ap"<R2>(arg0: $DataResult$$Type<($Function$$Type<(R), (R2)>)>): $DataResult<(R2)>
 "mapOrElse"<T>(arg0: $Function$$Type<(R), (T)>, arg1: $Function$$Type<($DataResult$Error<(R)>), (T)>): T
static "partialGet"<K, V>(arg0: $Function$$Type<(K), (V)>, arg1: $Supplier$$Type<(string)>): $Function<(K), ($DataResult<(V)>)>
 "apply3"<R2, R3, S>(arg0: $Function3$$Type<(R), (R2), (R3), (S)>, arg1: $DataResult$$Type<(R2)>, arg2: $DataResult$$Type<(R3)>): $DataResult<(S)>
 "ifError"(arg0: $Consumer$$Type<($DataResult$Error<(R)>)>): $DataResult<(R)>
 "ifSuccess"(arg0: $Consumer$$Type<(R)>): $DataResult<(R)>
 "getOrThrow"(): R
 "getOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(string), (E)>): R
 "resultOrPartial"(arg0: $Consumer$$Type<(string)>): $Optional<(R)>
 "resultOrPartial"(): $Optional<(R)>
 "setLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
static "appendMessages"(arg0: string, arg1: string): string
 "apply2stable"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
 "hasResultOrPartial"(): boolean
 "addLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
 "getPartialOrThrow"(): R
 "getPartialOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(string), (E)>): R
 "promotePartial"(arg0: $Consumer$$Type<(string)>): $DataResult<(R)>
 "lifecycle"(): $Lifecycle
 "isSuccess"(): boolean
 "setPartial"(arg0: R): $DataResult<(R)>
 "setPartial"(arg0: $Supplier$$Type<(R)>): $DataResult<(R)>
 "apply2"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
 "mapError"(arg0: $UnaryOperator$$Type<(string)>): $DataResult<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$$Type<R> = ($DataResult<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult_<R> = $DataResult$$Type<(R)>;
}}
declare module "com.mojang.brigadier.suggestion.Suggestions" {
import {$Suggestion, $Suggestion$$Type} from "com.mojang.brigadier.suggestion.Suggestion"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$List, $List$$Type} from "java.util.List"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"

export class $Suggestions {

constructor(arg0: $StringRange$$Type, arg1: $List$$Type<($Suggestion$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "merge"(arg0: string, arg1: $Collection$$Type<($Suggestions$$Type)>): $Suggestions
public static "empty"(): $CompletableFuture<($Suggestions)>
public static "create"(arg0: string, arg1: $Collection$$Type<($Suggestion$$Type)>): $Suggestions
public "getRange"(): $StringRange
public "getList"(): $List<($Suggestion)>
get "range"(): $StringRange
get "list"(): $List<($Suggestion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Suggestions$$Type = ($Suggestions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Suggestions_ = $Suggestions$$Type;
}}
declare module "com.mojang.brigadier.exceptions.CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommandExceptionType {

}

export namespace $CommandExceptionType {
const probejs$$marker: never
}
export class $CommandExceptionType$$Static implements $CommandExceptionType {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandExceptionType$$Type = ($CommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandExceptionType_ = $CommandExceptionType$$Type;
}}
declare module "com.mojang.brigadier.arguments.ArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $ArgumentType<T> {

 "getExamples"(): $Collection<(string)>
 "parse"(arg0: $StringReader$$Type): T
 "parse"<S>(arg0: $StringReader$$Type, arg1: S): T
 "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>

(arg0: $StringReader): T
get "examples"(): $Collection<(string)>
}

export namespace $ArgumentType {
const probejs$$marker: never
}
export class $ArgumentType$$Static<T> implements $ArgumentType {


 "getExamples"(): $Collection<(string)>
 "parse"(arg0: $StringReader$$Type): T
 "parse"<S>(arg0: $StringReader$$Type, arg1: S): T
 "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentType$$Type<T> = ((arg0: $StringReader) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentType_<T> = $ArgumentType$$Type<(T)>;
}}
declare module "com.mojang.datafixers.kinds.Functor" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9, $Products$P9$$Type} from "com.mojang.datafixers.Products$P9"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P10, $Products$P10$$Type} from "com.mojang.datafixers.Products$P10"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$Products$P11, $Products$P11$$Type} from "com.mojang.datafixers.Products$P11"
import {$Functor$Mu, $Functor$Mu$$Type} from "com.mojang.datafixers.kinds.Functor$Mu"
import {$Products$P1, $Products$P1$$Type} from "com.mojang.datafixers.Products$P1"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Products$P16, $Products$P16$$Type} from "com.mojang.datafixers.Products$P16"
import {$Kind1, $Kind1$$Type} from "com.mojang.datafixers.kinds.Kind1"
import {$Products$P14, $Products$P14$$Type} from "com.mojang.datafixers.Products$P14"
import {$Products$P15, $Products$P15$$Type} from "com.mojang.datafixers.Products$P15"
import {$Products$P12, $Products$P12$$Type} from "com.mojang.datafixers.Products$P12"
import {$Products$P13, $Products$P13$$Type} from "com.mojang.datafixers.Products$P13"

export interface $Functor<F extends $K1, Mu extends $Functor$Mu> extends $Kind1<(F), (Mu)> {

 "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<(F), (T)>): $App<(F), (R)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>

(arg0: $Function<(T), (R)>, arg1: $App<(F), (T)>): $App$$Type<(F), (R)>
}

export namespace $Functor {
function unbox<F extends $K1, Mu extends $Functor$Mu>(arg0: $App$$Type<(Mu), (F)>): $Functor<(F), (Mu)>
const probejs$$marker: never
}
export class $Functor$$Static<F extends $K1, Mu extends $Functor$Mu> implements $Functor {


 "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<(F), (T)>): $App<(F), (R)>
static "unbox"<F extends $K1, Mu extends $Functor$Mu>(arg0: $App$$Type<(Mu), (F)>): $Functor<(F), (Mu)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Functor$$Type<F, Mu> = ((arg0: $Function<(T), (R)>, arg1: $App<(F), (T)>) => $App$$Type<(F), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Functor_<F, Mu> = $Functor$$Type<(F), (Mu)>;
}}
declare module "com.mojang.realmsclient.util.WorldGenerationInfo" {
import {$LevelType, $LevelType$$Type} from "com.mojang.realmsclient.util.LevelType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WorldGenerationInfo extends $Record {

constructor(arg0: string, arg1: $LevelType$$Type, arg2: boolean, arg3: $Set$$Type<(string)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "seed"(): string
public "generateStructures"(): boolean
public "experiments"(): $Set<(string)>
public "levelType"(): $LevelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenerationInfo$$Type = ({"experiments"?: $Set$$Type<(string)>, "levelType"?: $LevelType$$Type, "generateStructures"?: boolean, "seed"?: string}) | ([experiments?: $Set$$Type<(string)>, levelType?: $LevelType$$Type, generateStructures?: boolean, seed?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldGenerationInfo_ = $WorldGenerationInfo$$Type;
}}
declare module "com.mojang.authlib.minecraft.report.ReportedEntity" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ReportedEntity extends $Record {

constructor(profileId: $UUID$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "profileId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportedEntity$$Type = ({"profileId"?: $UUID$$Type}) | ([profileId?: $UUID$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReportedEntity_ = $ReportedEntity$$Type;
}}
declare module "com.mojang.realmsclient.dto.ServerActivityList" {
import {$ServerActivity, $ServerActivity$$Type} from "com.mojang.realmsclient.dto.ServerActivity"
import {$List, $List$$Type} from "java.util.List"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $ServerActivityList extends $ValueObject {
 "periodInMillis": long
 "serverActivities": $List<($ServerActivity)>

constructor()

public static "parse"(arg0: string): $ServerActivityList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerActivityList$$Type = ($ServerActivityList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerActivityList_ = $ServerActivityList$$Type;
}}
declare module "com.mojang.authlib.minecraft.report.ReportEvidence" {
import {$ReportChatMessage, $ReportChatMessage$$Type} from "com.mojang.authlib.minecraft.report.ReportChatMessage"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ReportEvidence extends $Record {

constructor(messages: $List$$Type<($ReportChatMessage$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "messages"(): $List<($ReportChatMessage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportEvidence$$Type = ({"messages"?: $List$$Type<($ReportChatMessage$$Type)>}) | ([messages?: $List$$Type<($ReportChatMessage$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReportEvidence_ = $ReportEvidence$$Type;
}}
declare module "com.mojang.datafixers.types.families.RecursiveTypeFamily" {
import {$FamilyOptic, $FamilyOptic$$Type} from "com.mojang.datafixers.FamilyOptic"
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$TypeFamily, $TypeFamily$$Type} from "com.mojang.datafixers.types.families.TypeFamily"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TypeRewriteRule, $TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$RecursivePoint$RecursivePointType, $RecursivePoint$RecursivePointType$$Type} from "com.mojang.datafixers.types.templates.RecursivePoint$RecursivePointType"
import {$Algebra, $Algebra$$Type} from "com.mojang.datafixers.types.families.Algebra"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$Type$TypeMatcher, $Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$PointFreeRule, $PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $RecursiveTypeFamily implements $TypeFamily {

constructor(arg0: string, arg1: $TypeTemplate$$Type)

public "name"(): string
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: integer): $Type<(any)>
public "template"(): $TypeTemplate
public "buildMuType"<A>(arg0: $Type$$Type<(A)>, arg1: $RecursiveTypeFamily$$Type): $RecursivePoint$RecursivePointType<(A)>
public "everywhere"(arg0: integer, arg1: $TypeRewriteRule$$Type, arg2: $PointFreeRule$$Type): $Optional<($RewriteResult<(any), (any)>)>
public "findType"<A, B>(arg0: integer, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>, arg3: $Type$TypeMatcher$$Type<(A), (B)>, arg4: boolean): $Either<($TypedOptic<(any), (any), (A), (B)>), ($Type$FieldNotFoundException)>
public "fold"(arg0: $Algebra$$Type, arg1: $RecursiveTypeFamily$$Type): $IntFunction<($RewriteResult<(any), (any)>)>
public static "familyOptic"<A, B>(arg0: $IntFunction$$Type<($TypedOptic$$Type<(any), (any), (A), (B)>)>): $FamilyOptic<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecursiveTypeFamily$$Type = ($RecursiveTypeFamily);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecursiveTypeFamily_ = $RecursiveTypeFamily$$Type;
}}
declare module "com.mojang.realmsclient.gui.task.DataFetcher$Task" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataFetcher$Task<T> {


public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Task$$Type<T> = ($DataFetcher$Task<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFetcher$Task_<T> = $DataFetcher$Task$$Type<(T)>;
}}
declare module "com.mojang.serialization.DataResult$Instance$Mu" {
import {$Applicative$Mu, $Applicative$Mu$$Type} from "com.mojang.datafixers.kinds.Applicative$Mu"

export class $DataResult$Instance$Mu implements $Applicative$Mu {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Instance$Mu$$Type = ($DataResult$Instance$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Instance$Mu_ = $DataResult$Instance$Mu$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.ProfileResult" {
import {$ProfileActionType, $ProfileActionType$$Type} from "com.mojang.authlib.yggdrasil.ProfileActionType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ProfileResult extends $Record {

constructor(arg0: $GameProfile$$Type)
constructor(profile: $GameProfile$$Type, actions: $Set$$Type<($ProfileActionType$$Type)>)

public "profile"(): $GameProfile
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "actions"(): $Set<($ProfileActionType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileResult$$Type = ({"actions"?: $Set$$Type<($ProfileActionType$$Type)>, "profile"?: $GameProfile$$Type}) | ([actions?: $Set$$Type<($ProfileActionType$$Type)>, profile?: $GameProfile$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProfileResult_ = $ProfileResult$$Type;
}}
declare module "com.mojang.serialization.DataResult$Instance" {
import {$DataResult$Instance$Mu, $DataResult$Instance$Mu$$Type} from "com.mojang.serialization.DataResult$Instance$Mu"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10, $Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$Products$P10, $Products$P10$$Type} from "com.mojang.datafixers.Products$P10"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$DataResult$Mu, $DataResult$Mu$$Type} from "com.mojang.serialization.DataResult$Mu"
import {$Products$P11, $Products$P11$$Type} from "com.mojang.datafixers.Products$P11"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$Products$P1, $Products$P1$$Type} from "com.mojang.datafixers.Products$P1"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$Products$P16, $Products$P16$$Type} from "com.mojang.datafixers.Products$P16"
import {$Products$P14, $Products$P14$$Type} from "com.mojang.datafixers.Products$P14"
import {$Products$P15, $Products$P15$$Type} from "com.mojang.datafixers.Products$P15"
import {$Products$P12, $Products$P12$$Type} from "com.mojang.datafixers.Products$P12"
import {$Products$P13, $Products$P13$$Type} from "com.mojang.datafixers.Products$P13"
import {$Applicative$Mu, $Applicative$Mu$$Type} from "com.mojang.datafixers.kinds.Applicative$Mu"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9, $Products$P9$$Type} from "com.mojang.datafixers.Products$P9"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13, $Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12, $Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15, $Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14, $Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function16, $Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $DataResult$Instance extends $Enum<($DataResult$Instance)> implements $Applicative<($DataResult$Mu), ($DataResult$Instance$Mu)> {
static readonly "INSTANCE": $DataResult$Instance


public static "values"(): ($DataResult$Instance)[]
public static "valueOf"(arg0: string): $DataResult$Instance
public "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T)>): $App<($DataResult$Mu), (R)>
public "ap"<A, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>): $App<($DataResult$Mu), (R)>
public "point"<A>(arg0: A): $App<($DataResult$Mu), (A)>
public "ap2"<A, B, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>, arg2: $App$$Type<($DataResult$Mu$$Type), (B)>): $App<($DataResult$Mu), (R)>
public "lift1"<A, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function$$Type<(A), (R)>)>): $Function<($App<($DataResult$Mu), (A)>), ($App<($DataResult$Mu), (R)>)>
public "ap3"<T1, T2, T3, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>): $App<($DataResult$Mu), (R)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<($DataResult$Instance$Mu$$Type), ($DataResult$Mu$$Type)>): $Applicative<($DataResult$Mu), ($DataResult$Instance$Mu)>
public "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>): $App<($DataResult$Mu), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>): $App<($DataResult$Mu), (R)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>): $App<($DataResult$Mu), (R)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg15: $App$$Type<($DataResult$Mu$$Type), (T15)>): $App<($DataResult$Mu), (R)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>): $App<($DataResult$Mu), (R)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>): $App<($DataResult$Mu), (R)>
public "lift2"<A, B, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<($DataResult$Mu), (A)>), ($App<($DataResult$Mu), (B)>), ($App<($DataResult$Mu), (R)>)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (R)>)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>): $App<($DataResult$Mu), (R)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>): $App<($DataResult$Mu), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>): $App<($DataResult$Mu), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>): $App<($DataResult$Mu), (R)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (R)>)>
public "lift3"<T1, T2, T3, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (R)>)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>): $App<($DataResult$Mu), (R)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>): $App<($DataResult$Mu), (R)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T14)>): $App<($DataResult$Mu), (R)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (R)>)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg15: $App$$Type<($DataResult$Mu$$Type), (T15)>, arg16: $App$$Type<($DataResult$Mu$$Type), (T16)>): $App<($DataResult$Mu), (R)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>): $App<($DataResult$Mu), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>): $App<($DataResult$Mu), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>): $App<($DataResult$Mu), (R)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>): $App<($DataResult$Mu), (R)>
public "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>): $App<($DataResult$Mu), (R)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>): $App<($DataResult$Mu), (R)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (T8)>), ($App<($DataResult$Mu), (T9)>), ($App<($DataResult$Mu), (R)>)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (R)>)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>): $App<($DataResult$Mu), (R)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (T8)>), ($App<($DataResult$Mu), (R)>)>
public "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>, arg2: $App$$Type<($DataResult$Mu$$Type), (B)>): $App<($DataResult$Mu), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>): $Products$P11<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>): $Products$P10<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>): $Products$P9<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T15)>, arg15: $App$$Type<($DataResult$Mu$$Type), (T16)>): $Products$P16<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T15)>): $Products$P15<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T14)>): $Products$P14<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>): $Products$P13<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>): $Products$P12<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>): $Products$P3<($DataResult$Mu), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>): $Products$P2<($DataResult$Mu), (T1), (T2)>
public "group"<T1>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>): $Products$P1<($DataResult$Mu), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>): $Products$P8<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>): $Products$P7<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>): $Products$P6<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>): $Products$P5<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>): $Products$P4<($DataResult$Mu), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Instance$$Type = (("instance"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Instance_ = $DataResult$Instance$$Type;
}}
declare module "com.mojang.realmsclient.dto.RegionPingResult" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$$Type} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $RegionPingResult extends $ValueObject implements $ReflectionBasedSerialization {

constructor(arg0: string, arg1: integer)

public "toString"(): string
public "ping"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionPingResult$$Type = ($RegionPingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionPingResult_ = $RegionPingResult$$Type;
}}
declare module "com.mojang.serialization.Codec" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$PrimitiveCodec, $PrimitiveCodec$$Type} from "com.mojang.serialization.codecs.PrimitiveCodec"
import {$Unit, $Unit$$Type} from "com.mojang.datafixers.util.Unit"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Codec$ResultFunction, $Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$SimpleMapCodec, $SimpleMapCodec$$Type} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$UnboundedMapCodec, $UnboundedMapCodec$$Type} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $Codec<A> extends $Encoder<(A)>, $Decoder<(A)> {

 "dispatch"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "dispatch"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$$Type<(string)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$$Type<(string)>, arg1: A): $Codec<(A)>
 "orElseGet"(arg0: $Consumer$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "stable"(): $Codec<(A)>
 "dispatchStable"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "comapFlatMap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(any)>
 "dispatchMap"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "sizeLimitedListOf"(arg0: integer): $Codec<($List<(A)>)>
 "promotePartial"(arg0: $Consumer$$Type<(any)>): $Decoder<(any)>
 "flatComapMap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "partialDispatch"<E>(arg0: string, arg1: $Function$$Type<(E), ($DataResult$$Type<(A)>)>, arg2: $Function$$Type<(A), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "listOf"(arg0: integer, arg1: integer): $Codec<($List<(A)>)>
 "listOf"(): $Codec<($List<(A)>)>
 "mapResult"(arg0: $Codec$ResultFunction$$Type<(A)>): $Codec<(A)>
 "deprecated"(arg0: integer): $Codec<(A)>
 "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "fieldOf"(arg0: string): $MapCodec<(A)>
 "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
 "simple"(): $Decoder$Simple<(A)>
}

export namespace $Codec {
const FLOAT: $PrimitiveCodec<(float)>
const INT: $PrimitiveCodec<(integer)>
const SHORT: $PrimitiveCodec<(short)>
const PASSTHROUGH: $Codec<($Dynamic<(any)>)>
const BOOL: $PrimitiveCodec<(boolean)>
const BYTE_BUFFER: $PrimitiveCodec<($ByteBuffer)>
const INT_STREAM: $PrimitiveCodec<($IntStream)>
const BYTE: $PrimitiveCodec<(byte)>
const LONG_STREAM: $PrimitiveCodec<($LongStream)>
const STRING: $PrimitiveCodec<(string)>
const DOUBLE: $PrimitiveCodec<(double)>
const EMPTY: $MapCodec<($Unit)>
const LONG: $PrimitiveCodec<(long)>
function of<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(string)>): $MapCodec<(A)>
function of<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
function of<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: string): $Codec<(A)>
function of<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
function list<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
function list<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
function unit<A>(arg0: A): $Codec<(A)>
function unit<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
function string(arg0: integer, arg1: integer): $Codec<(string)>
function recursive<A>(arg0: string, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
function pair<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
function checkRange<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
function xor<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
function doubleRange(arg0: double, arg1: double): $Codec<(double)>
function withAlternative<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
function withAlternative<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
function sizeLimitedString(arg0: integer): $Codec<(string)>
function lazyInitialized<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
function compoundList<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
function unboundedMap<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
function dispatchedMap<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
function stringResolver<E>(arg0: $Function$$Type<(E), (string)>, arg1: $Function$$Type<(string), (E)>): $Codec<(E)>
function optionalField<F>(arg0: string, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
function intRange(arg0: integer, arg1: integer): $Codec<(integer)>
function mapEither<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
function simpleMap<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
function either<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
function mapPair<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
function floatRange(arg0: float, arg1: float): $Codec<(float)>
function empty<A>(): $MapEncoder<(A)>
function error<A>(arg0: string): $Encoder<(A)>
function ofTerminal<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
function ofSimple<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
function ofBoxed<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
const probejs$$marker: never
}
export class $Codec$$Static<A> implements $Codec {
static readonly "FLOAT": $PrimitiveCodec<(float)>
static readonly "INT": $PrimitiveCodec<(integer)>
static readonly "SHORT": $PrimitiveCodec<(short)>
static readonly "PASSTHROUGH": $Codec<($Dynamic<(any)>)>
static readonly "BOOL": $PrimitiveCodec<(boolean)>
static readonly "BYTE_BUFFER": $PrimitiveCodec<($ByteBuffer)>
static readonly "INT_STREAM": $PrimitiveCodec<($IntStream)>
static readonly "BYTE": $PrimitiveCodec<(byte)>
static readonly "LONG_STREAM": $PrimitiveCodec<($LongStream)>
static readonly "STRING": $PrimitiveCodec<(string)>
static readonly "DOUBLE": $PrimitiveCodec<(double)>
static readonly "EMPTY": $MapCodec<($Unit)>
static readonly "LONG": $PrimitiveCodec<(long)>


 "dispatch"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "dispatch"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(string)>): $MapCodec<(A)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: string): $Codec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
 "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$$Type<(string)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$$Type<(string)>, arg1: A): $Codec<(A)>
static "unit"<A>(arg0: A): $Codec<(A)>
static "unit"<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
static "string"(arg0: integer, arg1: integer): $Codec<(string)>
 "orElseGet"(arg0: $Consumer$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
static "recursive"<A>(arg0: string, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
 "stable"(): $Codec<(A)>
static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
 "dispatchStable"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "comapFlatMap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
static "sizeLimitedString"(arg0: integer): $Codec<(string)>
static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
 "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(any)>
static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
static "stringResolver"<E>(arg0: $Function$$Type<(E), (string)>, arg1: $Function$$Type<(string), (E)>): $Codec<(E)>
static "optionalField"<F>(arg0: string, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
 "dispatchMap"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "sizeLimitedListOf"(arg0: integer): $Codec<($List<(A)>)>
 "promotePartial"(arg0: $Consumer$$Type<(any)>): $Decoder<(any)>
 "flatComapMap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "partialDispatch"<E>(arg0: string, arg1: $Function$$Type<(E), ($DataResult$$Type<(A)>)>, arg2: $Function$$Type<(A), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "listOf"(arg0: integer, arg1: integer): $Codec<($List<(A)>)>
 "listOf"(): $Codec<($List<(A)>)>
static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
 "mapResult"(arg0: $Codec$ResultFunction$$Type<(A)>): $Codec<(A)>
static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
 "deprecated"(arg0: integer): $Codec<(A)>
static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
 "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
 "fieldOf"(arg0: string): $MapCodec<(A)>
static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
 "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
static "empty"<A>(): $MapEncoder<(A)>
static "error"<A>(arg0: string): $Encoder<(A)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
 "simple"(): $Decoder$Simple<(A)>
static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Codec$$Type<A> = ($Codec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Codec_<A> = $Codec$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.dto.WorldDownload" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $WorldDownload extends $ValueObject {
 "resourcePackHash": string
 "downloadLink": string
 "resourcePackUrl": string

constructor()

public static "parse"(arg0: string): $WorldDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDownload$$Type = ($WorldDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDownload_ = $WorldDownload$$Type;
}}
declare module "com.mojang.serialization.Compressable" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $Compressable extends $Keyable {

 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
}

export namespace $Compressable {
function forStrings(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
const probejs$$marker: never
}
export class $Compressable$$Static implements $Compressable {


 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Compressable$$Type = ($Compressable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Compressable_ = $Compressable$$Type;
}}
declare module "com.mojang.realmsclient.gui.task.RepeatedDelayStrategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RepeatedDelayStrategy {

 "delayCyclesAfterSuccess"(): long
 "delayCyclesAfterFailure"(): long
}

export namespace $RepeatedDelayStrategy {
const CONSTANT: $RepeatedDelayStrategy
function exponentialBackoff(arg0: integer): $RepeatedDelayStrategy
const probejs$$marker: never
}
export class $RepeatedDelayStrategy$$Static implements $RepeatedDelayStrategy {
static readonly "CONSTANT": $RepeatedDelayStrategy


 "delayCyclesAfterSuccess"(): long
 "delayCyclesAfterFailure"(): long
static "exponentialBackoff"(arg0: integer): $RepeatedDelayStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatedDelayStrategy$$Type = ($RepeatedDelayStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatedDelayStrategy_ = $RepeatedDelayStrategy$$Type;
}}
declare module "com.mojang.blaze3d.preprocessor.GlslPreprocessor" {
import {$List, $List$$Type} from "java.util.List"

export class $GlslPreprocessor {

constructor()

public "process"(arg0: string): $List<(string)>
public "applyImport"(arg0: boolean, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlslPreprocessor$$Type = ($GlslPreprocessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlslPreprocessor_ = $GlslPreprocessor$$Type;
}}
declare module "com.mojang.authlib.minecraft.UserApiService$UserFlag" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $UserApiService$UserFlag extends $Enum<($UserApiService$UserFlag)> {
static readonly "CHAT_ALLOWED": $UserApiService$UserFlag
static readonly "TELEMETRY_ENABLED": $UserApiService$UserFlag
static readonly "OPTIONAL_TELEMETRY_AVAILABLE": $UserApiService$UserFlag
static readonly "REALMS_ALLOWED": $UserApiService$UserFlag
static readonly "PROFANITY_FILTER_ENABLED": $UserApiService$UserFlag
static readonly "SERVERS_ALLOWED": $UserApiService$UserFlag


public static "values"(): ($UserApiService$UserFlag)[]
public static "valueOf"(arg0: string): $UserApiService$UserFlag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$UserFlag$$Type = (("servers_allowed") | ("realms_allowed") | ("chat_allowed") | ("telemetry_enabled") | ("profanity_filter_enabled") | ("optional_telemetry_available"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserApiService$UserFlag_ = $UserApiService$UserFlag$$Type;
}}
declare module "com.mojang.authlib.SignatureState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SignatureState extends $Enum<($SignatureState)> {
static readonly "SIGNED": $SignatureState
static readonly "UNSIGNED": $SignatureState
static readonly "INVALID": $SignatureState


public static "values"(): ($SignatureState)[]
public static "valueOf"(arg0: string): $SignatureState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureState$$Type = (("unsigned") | ("invalid") | ("signed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignatureState_ = $SignatureState$$Type;
}}
declare module "com.mojang.brigadier.CommandDispatcher" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$LiteralArgumentBuilder, $LiteralArgumentBuilder$$Type} from "com.mojang.brigadier.builder.LiteralArgumentBuilder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$ResultConsumer, $ResultConsumer$$Type} from "com.mojang.brigadier.ResultConsumer"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$RootCommandNode, $RootCommandNode$$Type} from "com.mojang.brigadier.tree.RootCommandNode"
import {$AmbiguityConsumer, $AmbiguityConsumer$$Type} from "com.mojang.brigadier.AmbiguityConsumer"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$LiteralCommandNode, $LiteralCommandNode$$Type} from "com.mojang.brigadier.tree.LiteralCommandNode"

export class $CommandDispatcher<S> {
static readonly "ARGUMENT_SEPARATOR": string
static readonly "ARGUMENT_SEPARATOR_CHAR": character

constructor(arg0: $RootCommandNode$$Type<(S)>)
constructor()

public "register"(arg0: $LiteralArgumentBuilder$$Type<(S)>): $LiteralCommandNode<(S)>
public "execute"(arg0: $ParseResults$$Type<(S)>): integer
public "execute"(arg0: $StringReader$$Type, arg1: S): integer
public "execute"(arg0: string, arg1: S): integer
public "parse"(arg0: $StringReader$$Type, arg1: S): $ParseResults<(S)>
public "parse"(arg0: string, arg1: S): $ParseResults<(S)>
public "getRoot"(): $RootCommandNode<(S)>
public "getPath"(arg0: $CommandNode$$Type<(S)>): $Collection<(string)>
public "findNode"(arg0: $Collection$$Type<(string)>): $CommandNode<(S)>
public "getSmartUsage"(arg0: $CommandNode$$Type<(S)>, arg1: S): $Map<($CommandNode<(S)>), (string)>
public "getAllUsage"(arg0: $CommandNode$$Type<(S)>, arg1: S, arg2: boolean): (string)[]
public "findAmbiguities"(arg0: $AmbiguityConsumer$$Type<(S)>): void
public "setConsumer"(arg0: $ResultConsumer$$Type<(S)>): void
public "getCompletionSuggestions"(arg0: $ParseResults$$Type<(S)>): $CompletableFuture<($Suggestions)>
public "getCompletionSuggestions"(arg0: $ParseResults$$Type<(S)>, arg1: integer): $CompletableFuture<($Suggestions)>
get "root"(): $RootCommandNode<(S)>
set "consumer"(value: $ResultConsumer$$Type<(S)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandDispatcher$$Type<S> = ($CommandDispatcher<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandDispatcher_<S> = $CommandDispatcher$$Type<(S)>;
}}
declare module "com.mojang.realmsclient.dto.RealmsServerAddress" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $RealmsServerAddress extends $ValueObject {
 "address": string
 "resourcePackHash": string
 "resourcePackUrl": string

constructor()

public static "parse"(arg0: string): $RealmsServerAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerAddress$$Type = ($RealmsServerAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerAddress_ = $RealmsServerAddress$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexBuffer" {
import {$MeshData, $MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$VertexBuffer$Usage, $VertexBuffer$Usage$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer$Usage"
import {$ShaderInstance, $ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$ByteBufferBuilder$Result, $ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export class $VertexBuffer implements $AutoCloseable {

constructor(arg0: $VertexBuffer$Usage$$Type)

public "close"(): void
public "isInvalid"(): boolean
public "bind"(): void
public "getFormat"(): $VertexFormat
public "uploadIndexBuffer"(arg0: $ByteBufferBuilder$Result$$Type): void
public static "unbind"(): void
public "draw"(): void
public "drawWithShader"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: $ShaderInstance$$Type): void
public "upload"(arg0: $MeshData$$Type): void
get "invalid"(): boolean
get "format"(): $VertexFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuffer$$Type = ($VertexBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBuffer_ = $VertexBuffer$$Type;
}}
declare module "com.mojang.datafixers.kinds.Kind1$Mu" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export interface $Kind1$Mu extends $K1 {

}

export namespace $Kind1$Mu {
const probejs$$marker: never
}
export class $Kind1$Mu$$Static implements $Kind1$Mu {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Kind1$Mu$$Type = ($Kind1$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Kind1$Mu_ = $Kind1$Mu$$Type;
}}
declare module "com.mojang.brigadier.Command" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"

export interface $Command<S> {

 "run"(arg0: $CommandContext$$Type<(S)>): integer

(arg0: $CommandContext<(S)>): integer
}

export namespace $Command {
const SINGLE_SUCCESS: integer
const probejs$$marker: never
}
export class $Command$$Static<S> implements $Command {
static readonly "SINGLE_SUCCESS": integer


 "run"(arg0: $CommandContext$$Type<(S)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Command$$Type<S> = ((arg0: $CommandContext<(S)>) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Command_<S> = $Command$$Type<(S)>;
}}
declare module "com.mojang.authlib.GameProfile" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PropertyMap, $PropertyMap$$Type} from "com.mojang.authlib.properties.PropertyMap"

export class $GameProfile {

constructor(arg0: $UUID$$Type, arg1: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getProperties"(): $PropertyMap
public "getId"(): $UUID
get "name"(): string
get "properties"(): $PropertyMap
get "id"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfile$$Type = ($GameProfile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameProfile_ = $GameProfile$$Type;
}}
declare module "com.mojang.authlib.minecraft.report.AbuseReportLimits" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbuseReportLimits extends $Record {
static readonly "DEFAULTS": $AbuseReportLimits

constructor(maxOpinionCommentsLength: integer, maxReportedMessageCount: integer, maxEvidenceMessageCount: integer, leadingContextMessageCount: integer, trailingContextMessageCount: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "maxReportedMessageCount"(): integer
public "maxOpinionCommentsLength"(): integer
public "leadingContextMessageCount"(): integer
public "trailingContextMessageCount"(): integer
public "maxEvidenceMessageCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportLimits$$Type = ({"maxReportedMessageCount"?: integer, "maxEvidenceMessageCount"?: integer, "leadingContextMessageCount"?: integer, "trailingContextMessageCount"?: integer, "maxOpinionCommentsLength"?: integer}) | ([maxReportedMessageCount?: integer, maxEvidenceMessageCount?: integer, leadingContextMessageCount?: integer, trailingContextMessageCount?: integer, maxOpinionCommentsLength?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportLimits_ = $AbuseReportLimits$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbuseReportRequest$RealmInfo extends $Record {

constructor(realmId: string, slotId: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "realmId"(): string
public "slotId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$RealmInfo$$Type = ({"realmId"?: string, "slotId"?: integer}) | ([realmId?: string, slotId?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest$RealmInfo_ = $AbuseReportRequest$RealmInfo$$Type;
}}
declare module "com.mojang.brigadier.ResultConsumer" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"

export interface $ResultConsumer<S> {

 "onCommandComplete"(arg0: $CommandContext$$Type<(S)>, arg1: boolean, arg2: integer): void

(arg0: $CommandContext<(S)>, arg1: boolean, arg2: integer): void
}

export namespace $ResultConsumer {
const probejs$$marker: never
}
export class $ResultConsumer$$Static<S> implements $ResultConsumer {


 "onCommandComplete"(arg0: $CommandContext$$Type<(S)>, arg1: boolean, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultConsumer$$Type<S> = ((arg0: $CommandContext<(S)>, arg1: boolean, arg2: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResultConsumer_<S> = $ResultConsumer$$Type<(S)>;
}}
declare module "com.mojang.blaze3d.shaders.FogShape" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FogShape extends $Enum<($FogShape)> {
static readonly "CYLINDER": $FogShape
static readonly "SPHERE": $FogShape


public static "values"(): ($FogShape)[]
public static "valueOf"(arg0: string): $FogShape
public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogShape$$Type = (("sphere") | ("cylinder"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FogShape_ = $FogShape$$Type;
}}
declare module "com.mojang.blaze3d.vertex.MeshData$SortState" {
import {$VertexFormat$IndexType, $VertexFormat$IndexType$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$IndexType"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$ByteBufferBuilder$Result, $ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$VertexSorting, $VertexSorting$$Type} from "com.mojang.blaze3d.vertex.VertexSorting"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MeshData$SortState extends $Record {

constructor(arg0: ($Vector3f$$Type)[], arg1: $VertexFormat$IndexType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "centroids"(): ($Vector3f)[]
public "buildSortedIndexBuffer"(arg0: $ByteBufferBuilder$$Type, arg1: $VertexSorting$$Type): $ByteBufferBuilder$Result
public "indexType"(): $VertexFormat$IndexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshData$SortState$$Type = ({"centroids"?: ($Vector3f$$Type)[], "indexType"?: $VertexFormat$IndexType$$Type}) | ([centroids?: ($Vector3f$$Type)[], indexType?: $VertexFormat$IndexType$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshData$SortState_ = $MeshData$SortState$$Type;
}}
declare module "com.mojang.datafixers.types.Type$TypeMatcher" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export interface $Type$TypeMatcher<FT, FR> {

 "match"<S>(arg0: $Type$$Type<(S)>): $Either<($TypedOptic<(S), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>

(arg0: $Type<(S)>): $Either$$Type<($TypedOptic$$Type<(S), (any), (FT), (FR)>), ($Type$FieldNotFoundException$$Type)>
}

export namespace $Type$TypeMatcher {
const probejs$$marker: never
}
export class $Type$TypeMatcher$$Static<FT, FR> implements $Type$TypeMatcher {


 "match"<S>(arg0: $Type$$Type<(S)>): $Either<($TypedOptic<(S), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$TypeMatcher$$Type<FT, FR> = ((arg0: $Type<(S)>) => $Either$$Type<($TypedOptic$$Type<(S), (any), (FT), (FR)>), ($Type$FieldNotFoundException$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$TypeMatcher_<FT, FR> = $Type$TypeMatcher$$Type<(FT), (FR)>;
}}
declare module "com.mojang.blaze3d.vertex.MeshData" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$MeshData$SortState, $MeshData$SortState$$Type} from "com.mojang.blaze3d.vertex.MeshData$SortState"
import {$ByteBufferBuilder$Result, $ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$VertexSorting, $VertexSorting$$Type} from "com.mojang.blaze3d.vertex.VertexSorting"
import {$MeshData$DrawState, $MeshData$DrawState$$Type} from "com.mojang.blaze3d.vertex.MeshData$DrawState"

export class $MeshData implements $AutoCloseable {

constructor(arg0: $ByteBufferBuilder$Result$$Type, arg1: $MeshData$DrawState$$Type)

public "close"(): void
public "vertexBuffer"(): $ByteBuffer
public "indexBuffer"(): $ByteBuffer
public "sortQuads"(arg0: $ByteBufferBuilder$$Type, arg1: $VertexSorting$$Type): $MeshData$SortState
public "drawState"(): $MeshData$DrawState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshData$$Type = ($MeshData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshData_ = $MeshData$$Type;
}}
declare module "com.mojang.blaze3d.audio.SoundBuffer" {
import {$AudioFormat, $AudioFormat$$Type} from "javax.sound.sampled.AudioFormat"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $SoundBuffer {

constructor(arg0: $ByteBuffer$$Type, arg1: $AudioFormat$$Type)

public "discardAlBuffer"(): void
public "releaseAlBuffer"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBuffer$$Type = ($SoundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundBuffer_ = $SoundBuffer$$Type;
}}
declare module "com.mojang.brigadier.ParseResults" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandContextBuilder, $CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CommandSyntaxException, $CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export class $ParseResults<S> {

constructor(arg0: $CommandContextBuilder$$Type<(S)>, arg1: $ImmutableStringReader$$Type, arg2: $Map$$Type<($CommandNode$$Type<(S)>), ($CommandSyntaxException$$Type)>)
constructor(arg0: $CommandContextBuilder$$Type<(S)>)

public "getContext"(): $CommandContextBuilder<(S)>
public "getReader"(): $ImmutableStringReader
public "getExceptions"(): $Map<($CommandNode<(S)>), ($CommandSyntaxException)>
get "context"(): $CommandContextBuilder<(S)>
get "reader"(): $ImmutableStringReader
get "exceptions"(): $Map<($CommandNode<(S)>), ($CommandSyntaxException)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseResults$$Type<S> = ($ParseResults<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseResults_<S> = $ParseResults$$Type<(S)>;
}}
declare module "com.mojang.brigadier.Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Message {

 "getString"(): string

(): string
get "string"(): string
}

export namespace $Message {
const probejs$$marker: never
}
export class $Message$$Static implements $Message {


 "getString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$$Type;
}}
declare module "com.mojang.serialization.Codec$ResultFunction" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"

export interface $Codec$ResultFunction<A> {

 "apply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T, arg2: $DataResult$$Type<($Pair$$Type<(A), (T)>)>): $DataResult<($Pair<(A), (T)>)>
 "coApply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A, arg2: $DataResult$$Type<(T)>): $DataResult<(T)>
}

export namespace $Codec$ResultFunction {
const probejs$$marker: never
}
export class $Codec$ResultFunction$$Static<A> implements $Codec$ResultFunction {


 "apply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T, arg2: $DataResult$$Type<($Pair$$Type<(A), (T)>)>): $DataResult<($Pair<(A), (T)>)>
 "coApply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A, arg2: $DataResult$$Type<(T)>): $DataResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Codec$ResultFunction$$Type<A> = ($Codec$ResultFunction<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Codec$ResultFunction_<A> = $Codec$ResultFunction$$Type<(A)>;
}}
declare module "com.mojang.realmsclient.gui.task.DataFetcher$Subscription" {
import {$DataFetcher$Task, $DataFetcher$Task$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher$Task"
import {$DataFetcher, $DataFetcher$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $DataFetcher$Subscription {

constructor(arg0: $DataFetcher$$Type)

public "reset"(): void
public "tick"(): void
public "subscribe"<T>(arg0: $DataFetcher$Task$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "forceUpdate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Subscription$$Type = ($DataFetcher$Subscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFetcher$Subscription_ = $DataFetcher$Subscription$$Type;
}}
declare module "com.mojang.realmsclient.dto.RealmsServer" {
import {$RealmsServer$State, $RealmsServer$State$$Type} from "com.mojang.realmsclient.dto.RealmsServer$State"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RealmsWorldOptions, $RealmsWorldOptions$$Type} from "com.mojang.realmsclient.dto.RealmsWorldOptions"
import {$RealmsServer$Compatibility, $RealmsServer$Compatibility$$Type} from "com.mojang.realmsclient.dto.RealmsServer$Compatibility"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$PlayerInfo, $PlayerInfo$$Type} from "com.mojang.realmsclient.dto.PlayerInfo"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RealmsServer$WorldType, $RealmsServer$WorldType$$Type} from "com.mojang.realmsclient.dto.RealmsServer$WorldType"
import {$ServerData, $ServerData$$Type} from "net.minecraft.client.multiplayer.ServerData"

export class $RealmsServer extends $ValueObject {
 "owner": string
 "motd": string
 "worldType": $RealmsServer$WorldType
 "ownerUUID": $UUID
 "expiredTrial": boolean
 "parentRealmId": long
 "players": $List<($PlayerInfo)>
 "parentWorldName": string
 "minigameName": string
 "minigameImage": string
 "slots": $Map<(integer), ($RealmsWorldOptions)>
 "expired": boolean
 "activeSlot": integer
 "minigameId": integer
 "name": string
 "activeVersion": string
 "id": long
 "state": $RealmsServer$State
 "daysLeft": integer
 "remoteSubscriptionId": string
 "compatibility": $RealmsServer$Compatibility

constructor()

public "getDescription"(): string
public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "setName"(arg0: string): void
public static "parse"(arg0: $JsonObject$$Type): $RealmsServer
public static "parse"(arg0: string): $RealmsServer
public static "getCompatibility"(arg0: string): $RealmsServer$Compatibility
public "isCompatible"(): boolean
public "getMinigameName"(): string
public "needsDowngrade"(): boolean
public "setDescription"(arg0: string): void
public "needsUpgrade"(): boolean
public "isSnapshotRealm"(): boolean
public "isMinigameActive"(): boolean
public "cloneSlots"(arg0: $Map$$Type<(integer), ($RealmsWorldOptions$$Type)>): $Map<(integer), ($RealmsWorldOptions)>
public "getWorldName"(arg0: integer): string
public "toServerData"(arg0: string): $ServerData
get "description"(): string
get "name"(): string
set "name"(value: string)
get "compatible"(): boolean
get "minigameName"(): string
set "description"(value: string)
get "snapshotRealm"(): boolean
get "minigameActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$$Type = ($RealmsServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer_ = $RealmsServer$$Type;
}}
declare module "com.mojang.blaze3d.shaders.BlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlendMode {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(): void
public "isOpaque"(): boolean
public static "stringToBlendFunc"(arg0: string): integer
public static "stringToBlendFactor"(arg0: string): integer
get "opaque"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$$Type = ($BlendMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendMode_ = $BlendMode$$Type;
}}
declare module "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $ByteBufferBuilder$Result implements $AutoCloseable {


public "close"(): void
public "byteBuffer"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferBuilder$Result$$Type = ($ByteBufferBuilder$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufferBuilder$Result_ = $ByteBufferBuilder$Result$$Type;
}}
declare module "com.mojang.brigadier.StringReader" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"

export class $StringReader implements $ImmutableStringReader {

constructor(arg0: $StringReader$$Type)
constructor(arg0: string)

public "read"(): character
public "readInt"(): integer
public "canRead"(): boolean
public "canRead"(arg0: integer): boolean
public "skip"(): void
public "peek"(): character
public "peek"(arg0: integer): character
public "expect"(arg0: character): void
public "readFloat"(): float
public "readBoolean"(): boolean
public "readLong"(): long
public "readDouble"(): double
public "readString"(): string
public "getString"(): string
public "getRemaining"(): string
public "skipWhitespace"(): void
public static "isAllowedInUnquotedString"(arg0: character): boolean
public static "isQuotedStringStart"(arg0: character): boolean
public "getCursor"(): integer
public "readQuotedString"(): string
public "readUnquotedString"(): string
public static "isAllowedNumber"(arg0: character): boolean
public "readStringUntil"(arg0: character): string
public "setCursor"(arg0: integer): void
public "getRead"(): string
public "getRemainingLength"(): integer
public "getTotalLength"(): integer
get "string"(): string
get "remaining"(): string
get "cursor"(): integer
set "cursor"(value: integer)
get "remainingLength"(): integer
get "totalLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringReader$$Type = ($StringReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringReader_ = $StringReader$$Type;
}}
declare module "com.mojang.blaze3d.platform.WindowEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowEventHandler {

 "setWindowActive"(arg0: boolean): void
 "cursorEntered"(): void
 "resizeDisplay"(): void
set "windowActive"(value: boolean)
}

export namespace $WindowEventHandler {
const probejs$$marker: never
}
export class $WindowEventHandler$$Static implements $WindowEventHandler {


 "setWindowActive"(arg0: boolean): void
 "cursorEntered"(): void
 "resizeDisplay"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowEventHandler$$Type = ($WindowEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowEventHandler_ = $WindowEventHandler$$Type;
}}
declare module "com.mojang.blaze3d.font.GlyphProvider" {
import {$IntSet, $IntSet$$Type} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$GlyphInfo, $GlyphInfo$$Type} from "com.mojang.blaze3d.font.GlyphInfo"

export interface $GlyphProvider extends $AutoCloseable {

 "close"(): void
 "getSupportedGlyphs"(): $IntSet
 "getGlyph"(arg0: integer): $GlyphInfo

(): $IntSet$$Type
get "supportedGlyphs"(): $IntSet
}

export namespace $GlyphProvider {
const BASELINE: float
const probejs$$marker: never
}
export class $GlyphProvider$$Static implements $GlyphProvider {
static readonly "BASELINE": float


 "close"(): void
 "getSupportedGlyphs"(): $IntSet
 "getGlyph"(arg0: integer): $GlyphInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$$Type = (() => $IntSet$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphProvider_ = $GlyphProvider$$Type;
}}
declare module "com.mojang.blaze3d.vertex.BufferBuilder" {
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$MeshData, $MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $BufferBuilder implements $VertexConsumer {

constructor(arg0: $ByteBufferBuilder$$Type, arg1: $VertexFormat$Mode$$Type, arg2: $VertexFormat$$Type)

public "build"(): $MeshData
public "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "setColor"(arg0: integer): $VertexConsumer
public "addVertex"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "addVertex"(arg0: float, arg1: float, arg2: float, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float): void
public "setUv"(arg0: float, arg1: float): $VertexConsumer
public "setOverlay"(arg0: integer): $VertexConsumer
public "buildOrThrow"(): $MeshData
public "setUv1"(arg0: integer, arg1: integer): $VertexConsumer
public "setUv2"(arg0: integer, arg1: integer): $VertexConsumer
public "setNormal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "setLight"(arg0: integer): $VertexConsumer
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: $Vector3f$$Type): $VertexConsumer
public "addVertex"(arg0: $Vector3f$$Type): $VertexConsumer
public "addVertex"(arg0: $Matrix4f$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "setWhiteAlpha"(arg0: integer): $VertexConsumer
public "setNormal"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
public "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
set "color"(value: integer)
set "overlay"(value: integer)
set "light"(value: integer)
set "whiteAlpha"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilder$$Type = ($BufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilder_ = $BufferBuilder$$Type;
}}
declare module "com.mojang.blaze3d.shaders.Uniform" {
import {$FloatBuffer, $FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$Shader, $Shader$$Type} from "com.mojang.blaze3d.shaders.Shader"
import {$AbstractUniform, $AbstractUniform$$Type} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$IntBuffer, $IntBuffer$$Type} from "java.nio.IntBuffer"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $Uniform extends $AbstractUniform implements $AutoCloseable {
static readonly "UT_INT4": integer
static readonly "UT_INT3": integer
static readonly "UT_MAT4": integer
static readonly "UT_FLOAT2": integer
static readonly "UT_MAT3": integer
static readonly "UT_FLOAT3": integer
static readonly "UT_MAT2": integer
static readonly "UT_INT2": integer
static readonly "UT_INT1": integer
static readonly "UT_FLOAT1": integer
static readonly "UT_FLOAT4": integer

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $Shader$$Type)

public "setMat4x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x2"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setMat2x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat3x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): void
public "setMat3x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat3x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat4x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "getName"(): string
public "getLocation"(): integer
public "set"(arg0: float): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: integer): void
public "set"(arg0: $Matrix3f$$Type): void
public "set"(arg0: $Matrix4f$$Type): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "set"(arg0: (float)[]): void
public "set"(arg0: $Vector3f$$Type): void
public "set"(arg0: float, arg1: float): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: $Vector4f$$Type): void
public "set"(arg0: integer, arg1: float): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "getCount"(): integer
public "close"(): void
public "getType"(): integer
public "setMat4x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float): void
public "getIntBuffer"(): $IntBuffer
public "getFloatBuffer"(): $FloatBuffer
public "setLocation"(arg0: integer): void
public static "glBindAttribLocation"(arg0: integer, arg1: integer, arg2: charseq): void
public static "glGetUniformLocation"(arg0: integer, arg1: charseq): integer
public static "glGetAttribLocation"(arg0: integer, arg1: charseq): integer
public static "uploadInteger"(arg0: integer, arg1: integer): void
public static "getTypeFromString"(arg0: string): integer
public "upload"(): void
public "setSafe"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setSafe"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
get "name"(): string
get "location"(): integer
get "count"(): integer
get "type"(): integer
get "intBuffer"(): $IntBuffer
get "floatBuffer"(): $FloatBuffer
set "location"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Uniform$$Type = ($Uniform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Uniform_ = $Uniform$$Type;
}}
declare module "com.mojang.datafixers.DataFixer" {
import {$DSL$TypeReference, $DSL$TypeReference$$Type} from "com.mojang.datafixers.DSL$TypeReference"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Schema, $Schema$$Type} from "com.mojang.datafixers.schemas.Schema"

export interface $DataFixer {

 "update"<T>(arg0: $DSL$TypeReference$$Type, arg1: $Dynamic$$Type<(T)>, arg2: integer, arg3: integer): $Dynamic<(T)>
 "getSchema"(arg0: integer): $Schema
}

export namespace $DataFixer {
const probejs$$marker: never
}
export class $DataFixer$$Static implements $DataFixer {


 "update"<T>(arg0: $DSL$TypeReference$$Type, arg1: $Dynamic$$Type<(T)>, arg2: integer, arg3: integer): $Dynamic<(T)>
 "getSchema"(arg0: integer): $Schema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFixer$$Type = ($DataFixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFixer_ = $DataFixer$$Type;
}}
declare module "com.mojang.brigadier.exceptions.BuiltInExceptionProvider" {
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$Dynamic2CommandExceptionType, $Dynamic2CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"

export interface $BuiltInExceptionProvider {

 "doubleTooHigh"(): $Dynamic2CommandExceptionType
 "doubleTooLow"(): $Dynamic2CommandExceptionType
 "floatTooLow"(): $Dynamic2CommandExceptionType
 "floatTooHigh"(): $Dynamic2CommandExceptionType
 "integerTooLow"(): $Dynamic2CommandExceptionType
 "integerTooHigh"(): $Dynamic2CommandExceptionType
 "longTooHigh"(): $Dynamic2CommandExceptionType
 "literalIncorrect"(): $DynamicCommandExceptionType
 "readerExpectedLong"(): $SimpleCommandExceptionType
 "readerInvalidFloat"(): $DynamicCommandExceptionType
 "readerExpectedBool"(): $SimpleCommandExceptionType
 "readerExpectedInt"(): $SimpleCommandExceptionType
 "readerInvalidInt"(): $DynamicCommandExceptionType
 "readerInvalidBool"(): $DynamicCommandExceptionType
 "readerInvalidLong"(): $DynamicCommandExceptionType
 "longTooLow"(): $Dynamic2CommandExceptionType
 "dispatcherExpectedArgumentSeparator"(): $SimpleCommandExceptionType
 "readerExpectedDouble"(): $SimpleCommandExceptionType
 "readerExpectedStartOfQuote"(): $SimpleCommandExceptionType
 "readerInvalidDouble"(): $DynamicCommandExceptionType
 "readerExpectedFloat"(): $SimpleCommandExceptionType
 "readerExpectedSymbol"(): $DynamicCommandExceptionType
 "dispatcherUnknownCommand"(): $SimpleCommandExceptionType
 "dispatcherParseException"(): $DynamicCommandExceptionType
 "readerInvalidEscape"(): $DynamicCommandExceptionType
 "dispatcherUnknownArgument"(): $SimpleCommandExceptionType
 "readerExpectedEndOfQuote"(): $SimpleCommandExceptionType
}

export namespace $BuiltInExceptionProvider {
const probejs$$marker: never
}
export class $BuiltInExceptionProvider$$Static implements $BuiltInExceptionProvider {


 "doubleTooHigh"(): $Dynamic2CommandExceptionType
 "doubleTooLow"(): $Dynamic2CommandExceptionType
 "floatTooLow"(): $Dynamic2CommandExceptionType
 "floatTooHigh"(): $Dynamic2CommandExceptionType
 "integerTooLow"(): $Dynamic2CommandExceptionType
 "integerTooHigh"(): $Dynamic2CommandExceptionType
 "longTooHigh"(): $Dynamic2CommandExceptionType
 "literalIncorrect"(): $DynamicCommandExceptionType
 "readerExpectedLong"(): $SimpleCommandExceptionType
 "readerInvalidFloat"(): $DynamicCommandExceptionType
 "readerExpectedBool"(): $SimpleCommandExceptionType
 "readerExpectedInt"(): $SimpleCommandExceptionType
 "readerInvalidInt"(): $DynamicCommandExceptionType
 "readerInvalidBool"(): $DynamicCommandExceptionType
 "readerInvalidLong"(): $DynamicCommandExceptionType
 "longTooLow"(): $Dynamic2CommandExceptionType
 "dispatcherExpectedArgumentSeparator"(): $SimpleCommandExceptionType
 "readerExpectedDouble"(): $SimpleCommandExceptionType
 "readerExpectedStartOfQuote"(): $SimpleCommandExceptionType
 "readerInvalidDouble"(): $DynamicCommandExceptionType
 "readerExpectedFloat"(): $SimpleCommandExceptionType
 "readerExpectedSymbol"(): $DynamicCommandExceptionType
 "dispatcherUnknownCommand"(): $SimpleCommandExceptionType
 "dispatcherParseException"(): $DynamicCommandExceptionType
 "readerInvalidEscape"(): $DynamicCommandExceptionType
 "dispatcherUnknownArgument"(): $SimpleCommandExceptionType
 "readerExpectedEndOfQuote"(): $SimpleCommandExceptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltInExceptionProvider$$Type = ($BuiltInExceptionProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltInExceptionProvider_ = $BuiltInExceptionProvider$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbuseReportRequest$ClientInfo extends $Record {

constructor(clientVersion: string, locale: string)

public "clientVersion"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "locale"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$ClientInfo$$Type = ({"locale"?: string, "clientVersion"?: string}) | ([locale?: string, clientVersion?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest$ClientInfo_ = $AbuseReportRequest$ClientInfo$$Type;
}}
declare module "com.mojang.datafixers.kinds.Functor$Mu" {
import {$Kind1$Mu, $Kind1$Mu$$Type} from "com.mojang.datafixers.kinds.Kind1$Mu"

export interface $Functor$Mu extends $Kind1$Mu {

}

export namespace $Functor$Mu {
const probejs$$marker: never
}
export class $Functor$Mu$$Static implements $Functor$Mu {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Functor$Mu$$Type = ($Functor$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Functor$Mu_ = $Functor$Mu$$Type;
}}
declare module "com.mojang.brigadier.builder.RequiredArgumentBuilder" {
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ArgumentCommandNode, $ArgumentCommandNode$$Type} from "com.mojang.brigadier.tree.ArgumentCommandNode"
import {$ArgumentBuilder, $ArgumentBuilder$$Type} from "com.mojang.brigadier.builder.ArgumentBuilder"
import {$SuggestionProvider, $SuggestionProvider$$Type} from "com.mojang.brigadier.suggestion.SuggestionProvider"

export class $RequiredArgumentBuilder<S, T> extends $ArgumentBuilder<(S), ($RequiredArgumentBuilder<(S), (T)>)> {


public "getName"(): string
public "getType"(): $ArgumentType<(T)>
public static "argument"<S, T>(arg0: string, arg1: $ArgumentType$$Type<(T)>): $RequiredArgumentBuilder<(S), (T)>
public "build"(): $ArgumentCommandNode<(S), (T)>
public "suggests"(arg0: $SuggestionProvider$$Type<(S)>): $RequiredArgumentBuilder<(S), (T)>
public "getSuggestionsProvider"(): $SuggestionProvider<(S)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
get "suggestionsProvider"(): $SuggestionProvider<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequiredArgumentBuilder$$Type<S, T> = ($RequiredArgumentBuilder<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequiredArgumentBuilder_<S, T> = $RequiredArgumentBuilder$$Type<(S), (T)>;
}}
declare module "com.mojang.blaze3d.platform.Window" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$WindowEventHandler, $WindowEventHandler$$Type} from "com.mojang.blaze3d.platform.WindowEventHandler"
import {$List, $List$$Type} from "java.util.List"
import {$IconSet, $IconSet$$Type} from "com.mojang.blaze3d.platform.IconSet"
import {$PackResources, $PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IoSupplier, $IoSupplier$$Type} from "net.minecraft.server.packs.resources.IoSupplier"
import {$Monitor, $Monitor$$Type} from "com.mojang.blaze3d.platform.Monitor"
import {$DisplayData, $DisplayData$$Type} from "com.mojang.blaze3d.platform.DisplayData"
import {$ScreenManager, $ScreenManager$$Type} from "com.mojang.blaze3d.platform.ScreenManager"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"
import {$WindowKJS, $WindowKJS$$Type} from "dev.latvian.mods.kubejs.core.WindowKJS"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $Window implements $AutoCloseable, $WindowKJS {
static readonly "BASE_HEIGHT": integer
static readonly "BASE_WIDTH": integer

constructor(arg0: $WindowEventHandler$$Type, arg1: $ScreenManager$$Type, arg2: $DisplayData$$Type, arg3: string, arg4: string)

public "getY"(): integer
public "close"(): void
public "defaultErrorCallback"(arg0: integer, arg1: long): void
public "changeFullscreenVideoMode"(): void
public "getWidth"(): integer
public "getPreferredFullscreenVideoMode"(): $Optional<($VideoMode)>
public static "getPlatform"(): string
public "setWindowed"(arg0: integer, arg1: integer): void
public "setFramerateLimit"(arg0: integer): void
public "isFullscreen"(): boolean
public "setErrorSection"(arg0: string): void
public "getHeight"(): integer
public "getWindow"(): long
public "setIcon"(arg0: $PackResources$$Type, arg1: $IconSet$$Type): void
public "getGuiScaledWidth"(): integer
public "getGuiScaledHeight"(): integer
public "calculateScale"(arg0: integer, arg1: boolean): integer
public "setGuiScale"(arg0: double): void
public "setDefaultErrorCallback"(): void
public "updateRawMouseInput"(arg0: boolean): void
public "updateDisplay"(): void
public "shouldClose"(): boolean
public "getFramerateLimit"(): integer
public "getGuiScale"(): double
public "toggleFullScreen"(): void
public "updateVsync"(arg0: boolean): void
public "getX"(): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public static "checkGlfwError"(arg0: $BiConsumer$$Type<(integer), (string)>): void
public "getRefreshRate"(): integer
public "findBestMonitor"(): $Monitor
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "setTitle"(arg0: string): void
public "setPreferredFullscreenVideoMode"(arg0: $Optional$$Type<($VideoMode$$Type)>): void
public "kjs$loadIcons"(arg0: $List$$Type<($IoSupplier$$Type<($InputStream$$Type)>)>): $List<($IoSupplier<($InputStream)>)>
get "y"(): integer
get "width"(): integer
get "preferredFullscreenVideoMode"(): $Optional<($VideoMode)>
set "framerateLimit"(value: integer)
get "fullscreen"(): boolean
set "errorSection"(value: string)
get "height"(): integer
get "window"(): long
get "guiScaledWidth"(): integer
get "guiScaledHeight"(): integer
set "guiScale"(value: double)
get "framerateLimit"(): integer
get "guiScale"(): double
get "x"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "refreshRate"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
set "title"(value: string)
set "preferredFullscreenVideoMode"(value: $Optional$$Type<($VideoMode$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Window$$Type = ($Window);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Window_ = $Window$$Type;
}}
declare module "com.mojang.realmsclient.dto.RealmsNews" {
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $RealmsNews extends $ValueObject {
 "newsLink": string

constructor()

public static "parse"(arg0: string): $RealmsNews
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNews$$Type = ($RealmsNews);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsNews_ = $RealmsNews$$Type;
}}
declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderTarget {
readonly "useDepth": boolean
 "filterMode": integer
 "viewWidth": integer
 "frameBufferId": integer
 "width": integer
 "viewHeight": integer
 "height": integer

constructor(arg0: boolean)

public "clear"(arg0: boolean): void
public "resize"(arg0: integer, arg1: integer, arg2: boolean): void
public "unbindRead"(): void
public "bindRead"(): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "isStencilEnabled"(): boolean
public "enableStencil"(): void
public "getColorTextureId"(): integer
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "setFilterMode"(arg0: integer): void
public "getDepthTextureId"(): integer
public "copyDepthFrom"(arg0: $RenderTarget$$Type): void
public "destroyBuffers"(): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "unbindWrite"(): void
public "checkStatus"(): void
public "bindWrite"(arg0: boolean): void
get "stencilEnabled"(): boolean
get "colorTextureId"(): integer
set "filterMode"(value: integer)
get "depthTextureId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTarget$$Type = ($RenderTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTarget_ = $RenderTarget$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexConsumer" {
import {$IVertexConsumerExtension, $IVertexConsumerExtension$$Type} from "net.neoforged.neoforge.client.extensions.IVertexConsumerExtension"
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $VertexConsumer extends $IVertexConsumerExtension {

 "setColor"(arg0: integer): $VertexConsumer
 "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
 "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: $Vector3f$$Type): $VertexConsumer
 "addVertex"(arg0: float, arg1: float, arg2: float, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float): void
 "addVertex"(arg0: $Vector3f$$Type): $VertexConsumer
 "addVertex"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "addVertex"(arg0: $Matrix4f$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "setUv"(arg0: float, arg1: float): $VertexConsumer
 "setOverlay"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer): void
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
 "setWhiteAlpha"(arg0: integer): $VertexConsumer
 "setUv1"(arg0: integer, arg1: integer): $VertexConsumer
 "setUv2"(arg0: integer, arg1: integer): $VertexConsumer
 "setNormal"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "setNormal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "setLight"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
 "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
set "color"(value: integer)
set "overlay"(value: integer)
set "whiteAlpha"(value: integer)
set "light"(value: integer)
}

export namespace $VertexConsumer {
const probejs$$marker: never
}
export class $VertexConsumer$$Static implements $VertexConsumer {


 "setColor"(arg0: integer): $VertexConsumer
 "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
 "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: $Vector3f$$Type): $VertexConsumer
 "addVertex"(arg0: float, arg1: float, arg2: float, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float): void
 "addVertex"(arg0: $Vector3f$$Type): $VertexConsumer
 "addVertex"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "addVertex"(arg0: $Matrix4f$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "setUv"(arg0: float, arg1: float): $VertexConsumer
 "setOverlay"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer): void
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
 "setWhiteAlpha"(arg0: integer): $VertexConsumer
 "setUv1"(arg0: integer, arg1: integer): $VertexConsumer
 "setUv2"(arg0: integer, arg1: integer): $VertexConsumer
 "setNormal"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "setNormal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "setLight"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
 "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexConsumer$$Type = ($VertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexConsumer_ = $VertexConsumer$$Type;
}}
declare module "com.mojang.datafixers.kinds.Kind1" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Kind1$Mu, $Kind1$Mu$$Type} from "com.mojang.datafixers.kinds.Kind1$Mu"
import {$Products$P9, $Products$P9$$Type} from "com.mojang.datafixers.Products$P9"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P10, $Products$P10$$Type} from "com.mojang.datafixers.Products$P10"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$Products$P11, $Products$P11$$Type} from "com.mojang.datafixers.Products$P11"
import {$Products$P1, $Products$P1$$Type} from "com.mojang.datafixers.Products$P1"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8, $Products$P8$$Type} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Products$P16, $Products$P16$$Type} from "com.mojang.datafixers.Products$P16"
import {$Products$P14, $Products$P14$$Type} from "com.mojang.datafixers.Products$P14"
import {$Products$P15, $Products$P15$$Type} from "com.mojang.datafixers.Products$P15"
import {$Products$P12, $Products$P12$$Type} from "com.mojang.datafixers.Products$P12"
import {$Products$P13, $Products$P13$$Type} from "com.mojang.datafixers.Products$P13"

export interface $Kind1<F extends $K1, Mu extends $Kind1$Mu> extends $App<(Mu), (F)> {

 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}

export namespace $Kind1 {
function unbox<F extends $K1, Proof extends $Kind1$Mu>(arg0: $App$$Type<(Proof), (F)>): $Kind1<(F), (Proof)>
const probejs$$marker: never
}
export class $Kind1$$Static<F extends $K1, Mu extends $Kind1$Mu> implements $Kind1 {


 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
static "unbox"<F extends $K1, Proof extends $Kind1$Mu>(arg0: $App$$Type<(Proof), (F)>): $Kind1<(F), (Proof)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Kind1$$Type<F, Mu> = ($Kind1<(F), (Mu)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Kind1_<F, Mu> = $Kind1$$Type<(F), (Mu)>;
}}
declare module "com.mojang.blaze3d.vertex.MeshData$DrawState" {
import {$VertexFormat$IndexType, $VertexFormat$IndexType$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$IndexType"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MeshData$DrawState extends $Record {

constructor(arg0: $VertexFormat$$Type, arg1: integer, arg2: integer, arg3: $VertexFormat$Mode$$Type, arg4: $VertexFormat$IndexType$$Type)

public "mode"(): $VertexFormat$Mode
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "format"(): $VertexFormat
public "indexCount"(): integer
public "indexType"(): $VertexFormat$IndexType
public "vertexCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshData$DrawState$$Type = ({"vertexCount"?: integer, "format"?: $VertexFormat$$Type, "indexCount"?: integer, "indexType"?: $VertexFormat$IndexType$$Type, "mode"?: $VertexFormat$Mode$$Type}) | ([vertexCount?: integer, format?: $VertexFormat$$Type, indexCount?: integer, indexType?: $VertexFormat$IndexType$$Type, mode?: $VertexFormat$Mode$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshData$DrawState_ = $MeshData$DrawState$$Type;
}}
declare module "com.mojang.serialization.KeyCompressor" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $KeyCompressor<T> {

constructor(arg0: $DynamicOps$$Type<(T)>, arg1: $Stream$$Type<(T)>)

public "size"(): integer
public "compress"(arg0: T): integer
public "compress"(arg0: string): integer
public "decompress"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyCompressor$$Type<T> = ($KeyCompressor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyCompressor_<T> = $KeyCompressor$$Type<(T)>;
}}
declare module "com.mojang.serialization.codecs.PrimitiveCodec" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Codec$ResultFunction, $Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$SimpleMapCodec, $SimpleMapCodec$$Type} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$UnboundedMapCodec, $UnboundedMapCodec$$Type} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $PrimitiveCodec<A> extends $Codec<(A)> {

 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
 "write"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): T
 "read"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "dispatch"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "dispatch"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$$Type<(string)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$$Type<(string)>, arg1: A): $Codec<(A)>
 "orElseGet"(arg0: $Consumer$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "stable"(): $Codec<(A)>
 "dispatchStable"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "comapFlatMap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(any)>
 "dispatchMap"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "sizeLimitedListOf"(arg0: integer): $Codec<($List<(A)>)>
 "promotePartial"(arg0: $Consumer$$Type<(any)>): $Decoder<(any)>
 "flatComapMap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "partialDispatch"<E>(arg0: string, arg1: $Function$$Type<(E), ($DataResult$$Type<(A)>)>, arg2: $Function$$Type<(A), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "listOf"(arg0: integer, arg1: integer): $Codec<($List<(A)>)>
 "listOf"(): $Codec<($List<(A)>)>
 "mapResult"(arg0: $Codec$ResultFunction$$Type<(A)>): $Codec<(A)>
 "deprecated"(arg0: integer): $Codec<(A)>
 "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "fieldOf"(arg0: string): $MapCodec<(A)>
 "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
 "simple"(): $Decoder$Simple<(A)>
}

export namespace $PrimitiveCodec {
function of<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(string)>): $MapCodec<(A)>
function of<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
function of<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: string): $Codec<(A)>
function of<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
function list<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
function list<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
function unit<A>(arg0: A): $Codec<(A)>
function unit<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
function string(arg0: integer, arg1: integer): $Codec<(string)>
function recursive<A>(arg0: string, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
function pair<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
function checkRange<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
function xor<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
function doubleRange(arg0: double, arg1: double): $Codec<(double)>
function withAlternative<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
function withAlternative<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
function sizeLimitedString(arg0: integer): $Codec<(string)>
function lazyInitialized<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
function compoundList<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
function unboundedMap<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
function dispatchedMap<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
function stringResolver<E>(arg0: $Function$$Type<(E), (string)>, arg1: $Function$$Type<(string), (E)>): $Codec<(E)>
function optionalField<F>(arg0: string, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
function intRange(arg0: integer, arg1: integer): $Codec<(integer)>
function mapEither<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
function simpleMap<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
function either<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
function mapPair<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
function floatRange(arg0: float, arg1: float): $Codec<(float)>
function empty<A>(): $MapEncoder<(A)>
function error<A>(arg0: string): $Encoder<(A)>
function ofTerminal<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
function ofSimple<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
function ofBoxed<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
const probejs$$marker: never
}
export class $PrimitiveCodec$$Static<A> implements $PrimitiveCodec {


 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
 "write"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): T
 "read"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "dispatch"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "dispatch"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(string)>): $MapCodec<(A)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: string): $Codec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
 "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$$Type<(string)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$$Type<(string)>, arg1: A): $Codec<(A)>
static "unit"<A>(arg0: A): $Codec<(A)>
static "unit"<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
static "string"(arg0: integer, arg1: integer): $Codec<(string)>
 "orElseGet"(arg0: $Consumer$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $UnaryOperator$$Type<(string)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
static "recursive"<A>(arg0: string, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
 "stable"(): $Codec<(A)>
static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
 "dispatchStable"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "comapFlatMap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
static "sizeLimitedString"(arg0: integer): $Codec<(string)>
static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
 "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(any)>
static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
static "stringResolver"<E>(arg0: $Function$$Type<(E), (string)>, arg1: $Function$$Type<(string), (E)>): $Codec<(E)>
static "optionalField"<F>(arg0: string, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
 "dispatchMap"<E>(arg0: string, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "sizeLimitedListOf"(arg0: integer): $Codec<($List<(A)>)>
 "promotePartial"(arg0: $Consumer$$Type<(any)>): $Decoder<(any)>
 "flatComapMap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "partialDispatch"<E>(arg0: string, arg1: $Function$$Type<(E), ($DataResult$$Type<(A)>)>, arg2: $Function$$Type<(A), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "listOf"(arg0: integer, arg1: integer): $Codec<($List<(A)>)>
 "listOf"(): $Codec<($List<(A)>)>
static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
 "mapResult"(arg0: $Codec$ResultFunction$$Type<(A)>): $Codec<(A)>
static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
 "deprecated"(arg0: integer): $Codec<(A)>
static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
 "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
 "fieldOf"(arg0: string): $MapCodec<(A)>
static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
 "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
static "empty"<A>(): $MapEncoder<(A)>
static "error"<A>(arg0: string): $Encoder<(A)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
 "simple"(): $Decoder$Simple<(A)>
static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveCodec$$Type<A> = ($PrimitiveCodec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveCodec_<A> = $PrimitiveCodec$$Type<(A)>;
}}
declare module "com.mojang.serialization.DataResult$Mu" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export class $DataResult$Mu implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Mu$$Type = ($DataResult$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Mu_ = $DataResult$Mu$$Type;
}}
declare module "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$TypeRewriteRule, $TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$$Type} from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import {$Object2ObjectMap, $Object2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$Type$TypeMatcher, $Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Typed, $Typed$$Type} from "com.mojang.datafixers.Typed"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $TaggedChoice$TaggedChoiceType<K> extends $Type<($Pair<(K), (any)>)> {

constructor(arg0: string, arg1: $Type$$Type<(K)>, arg2: $Object2ObjectMap$$Type<(K), ($Type$$Type<(any)>)>)

public "getName"(): string
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "toString"(): string
public "hashCode"(): integer
public "types"(): $Map<(K), ($Type<(any)>)>
public "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $RewriteResult<($Pair<(K), (any)>), (any)>
public "one"(arg0: $TypeRewriteRule$$Type): $Optional<($RewriteResult<($Pair<(K), (any)>), (any)>)>
public "point"(arg0: $DynamicOps$$Type<(any)>, arg1: K, arg2: any): $Optional<($Typed<($Pair<(K), (any)>)>)>
public "point"(arg0: $DynamicOps$$Type<(any)>): $Optional<($Pair<(K), (any)>)>
public static "elementResult"<K, FT, FR>(arg0: K, arg1: $TaggedChoice$TaggedChoiceType$$Type<(K)>, arg2: $RewriteResult$$Type<(FT), (FR)>): $RewriteResult<($Pair<(K), (any)>), ($Pair<(K), (any)>)>
public "updateMu"(arg0: $RecursiveTypeFamily$$Type): $Type<(any)>
public "hasType"(arg0: K): boolean
public "getKeyType"(): $Type<(K)>
public "findChoiceType"(arg0: string, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(any)>)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<($Pair<(K), (any)>), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findCheckedType"(arg0: integer): $Optional<($Type<(any)>)>
public "findFieldTypeOpt"(arg0: string): $Optional<($Type<(any)>)>
public "buildTemplate"(): $TypeTemplate
get "name"(): string
get "keyType"(): $Type<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaggedChoice$TaggedChoiceType$$Type<K> = ($TaggedChoice$TaggedChoiceType<(K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaggedChoice$TaggedChoiceType_<K> = $TaggedChoice$TaggedChoiceType$$Type<(K)>;
}}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder$Mu" {
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"

export class $RecordCodecBuilder$Mu<O> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Mu$$Type<O> = ($RecordCodecBuilder$Mu<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder$Mu_<O> = $RecordCodecBuilder$Mu$$Type<(O)>;
}}
declare module "com.mojang.datafixers.TypeRewriteRule" {
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$PointFreeRule, $PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $TypeRewriteRule {

 "rewrite"<A>(arg0: $Type$$Type<(A)>): $Optional<($RewriteResult<(A), (any)>)>

(arg0: $Type<(A)>): $Optional$$Type<($RewriteResult$$Type<(A), (any)>)>
}

export namespace $TypeRewriteRule {
function orElse(arg0: $TypeRewriteRule$$Type, arg1: $TypeRewriteRule$$Type): $TypeRewriteRule
function orElse(arg0: $TypeRewriteRule$$Type, arg1: $Supplier$$Type<($TypeRewriteRule$$Type)>): $TypeRewriteRule
function seq(arg0: $TypeRewriteRule$$Type, arg1: $TypeRewriteRule$$Type): $TypeRewriteRule
function seq(arg0: $TypeRewriteRule$$Type, ...arg1: ($TypeRewriteRule$$Type)[]): $TypeRewriteRule
function seq(arg0: $List$$Type<($TypeRewriteRule$$Type)>): $TypeRewriteRule
function all(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $TypeRewriteRule
function one(arg0: $TypeRewriteRule$$Type): $TypeRewriteRule
function nop(): $TypeRewriteRule
function ifSame<B>(arg0: $Type$$Type<(B)>, arg1: $RewriteResult$$Type<(B), (any)>): $TypeRewriteRule
function everywhere(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $TypeRewriteRule
function checkOnce(arg0: $TypeRewriteRule$$Type, arg1: $Consumer$$Type<($Type<(any)>)>): $TypeRewriteRule
function once(arg0: $TypeRewriteRule$$Type): $TypeRewriteRule
const probejs$$marker: never
}
export class $TypeRewriteRule$$Static implements $TypeRewriteRule {


static "orElse"(arg0: $TypeRewriteRule$$Type, arg1: $TypeRewriteRule$$Type): $TypeRewriteRule
static "orElse"(arg0: $TypeRewriteRule$$Type, arg1: $Supplier$$Type<($TypeRewriteRule$$Type)>): $TypeRewriteRule
static "seq"(arg0: $TypeRewriteRule$$Type, arg1: $TypeRewriteRule$$Type): $TypeRewriteRule
static "seq"(arg0: $TypeRewriteRule$$Type, ...arg1: ($TypeRewriteRule$$Type)[]): $TypeRewriteRule
static "seq"(arg0: $List$$Type<($TypeRewriteRule$$Type)>): $TypeRewriteRule
static "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $TypeRewriteRule
static "one"(arg0: $TypeRewriteRule$$Type): $TypeRewriteRule
 "rewrite"<A>(arg0: $Type$$Type<(A)>): $Optional<($RewriteResult<(A), (any)>)>
static "nop"(): $TypeRewriteRule
static "ifSame"<B>(arg0: $Type$$Type<(B)>, arg1: $RewriteResult$$Type<(B), (any)>): $TypeRewriteRule
static "everywhere"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $TypeRewriteRule
static "checkOnce"(arg0: $TypeRewriteRule$$Type, arg1: $Consumer$$Type<($Type<(any)>)>): $TypeRewriteRule
static "once"(arg0: $TypeRewriteRule$$Type): $TypeRewriteRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeRewriteRule$$Type = ((arg0: $Type<(A)>) => $Optional$$Type<($RewriteResult$$Type<(A), (any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeRewriteRule_ = $TypeRewriteRule$$Type;
}}
declare module "com.mojang.blaze3d.platform.InputConstants$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export class $InputConstants$Type extends $Enum<($InputConstants$Type)> {
static readonly "SCANCODE": $InputConstants$Type
static readonly "MOUSE": $InputConstants$Type
static readonly "KEYSYM": $InputConstants$Type


public "getOrCreate"(arg0: integer): $InputConstants$Key
public static "values"(): ($InputConstants$Type)[]
public static "valueOf"(arg0: string): $InputConstants$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Type$$Type = (("keysym") | ("scancode") | ("mouse"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputConstants$Type_ = $InputConstants$Type$$Type;
}}
declare module "com.mojang.serialization.MapLike" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $MapLike<T> {

 "get"(arg0: T): T
 "get"(arg0: string): T
 "entries"(): $Stream<($Pair<(T), (T)>)>
}

export namespace $MapLike {
function forMap<T>(arg0: $Map$$Type<(T), (T)>, arg1: $DynamicOps$$Type<(T)>): $MapLike<(T)>
const probejs$$marker: never
}
export class $MapLike$$Static<T> implements $MapLike {


 "get"(arg0: T): T
 "get"(arg0: string): T
 "entries"(): $Stream<($Pair<(T), (T)>)>
static "forMap"<T>(arg0: $Map$$Type<(T), (T)>, arg1: $DynamicOps$$Type<(T)>): $MapLike<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLike$$Type<T> = ($MapLike<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLike_<T> = $MapLike$$Type<(T)>;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormatElement$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $VertexFormatElement$Type extends $Enum<($VertexFormatElement$Type)> {
static readonly "UBYTE": $VertexFormatElement$Type
static readonly "FLOAT": $VertexFormatElement$Type
static readonly "BYTE": $VertexFormatElement$Type
static readonly "USHORT": $VertexFormatElement$Type
static readonly "UINT": $VertexFormatElement$Type
static readonly "INT": $VertexFormatElement$Type
static readonly "SHORT": $VertexFormatElement$Type


public "size"(): integer
public "toString"(): string
public static "values"(): ($VertexFormatElement$Type)[]
public static "valueOf"(arg0: string): $VertexFormatElement$Type
public "glType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Type$$Type = (("float") | ("ubyte") | ("byte") | ("ushort") | ("short") | ("uint") | ("int"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatElement$Type_ = $VertexFormatElement$Type$$Type;
}}
declare module "com.mojang.brigadier.suggestion.SuggestionProvider" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $SuggestionProvider<S> {

 "getSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>

(arg0: $CommandContext<(S)>, arg1: $SuggestionsBuilder): $CompletableFuture$$Type<($Suggestions$$Type)>
}

export namespace $SuggestionProvider {
const probejs$$marker: never
}
export class $SuggestionProvider$$Static<S> implements $SuggestionProvider {


 "getSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionProvider$$Type<S> = ((arg0: $CommandContext<(S)>, arg1: $SuggestionsBuilder) => $CompletableFuture$$Type<($Suggestions$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuggestionProvider_<S> = $SuggestionProvider$$Type<(S)>;
}}
declare module "com.mojang.authlib.minecraft.BanDetails" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BanDetails extends $Record {
static readonly "MULTIPLAYER_SCOPE": string

constructor(id: $UUID$$Type, expires: $Instant$$Type, reason: string, reasonMessage: string)

public "expires"(): $Instant
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $UUID
public "reason"(): string
public "reasonMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BanDetails$$Type = ({"id"?: $UUID$$Type, "expires"?: $Instant$$Type, "reason"?: string, "reasonMessage"?: string}) | ([id?: $UUID$$Type, expires?: $Instant$$Type, reason?: string, reasonMessage?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BanDetails_ = $BanDetails$$Type;
}}
declare module "com.mojang.authlib.minecraft.TelemetryPropertyContainer" {
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $TelemetryPropertyContainer {

 "addProperty"(arg0: string, arg1: boolean): void
 "addProperty"(arg0: string, arg1: long): void
 "addProperty"(arg0: string, arg1: integer): void
 "addProperty"(arg0: string, arg1: string): void
 "addNullProperty"(arg0: string): void
}

export namespace $TelemetryPropertyContainer {
function forJsonObject(arg0: $JsonObject$$Type): $TelemetryPropertyContainer
const probejs$$marker: never
}
export class $TelemetryPropertyContainer$$Static implements $TelemetryPropertyContainer {


 "addProperty"(arg0: string, arg1: boolean): void
 "addProperty"(arg0: string, arg1: long): void
 "addProperty"(arg0: string, arg1: integer): void
 "addProperty"(arg0: string, arg1: string): void
static "forJsonObject"(arg0: $JsonObject$$Type): $TelemetryPropertyContainer
 "addNullProperty"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryPropertyContainer$$Type = ($TelemetryPropertyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TelemetryPropertyContainer_ = $TelemetryPropertyContainer$$Type;
}}
declare module "com.mojang.brigadier.context.ContextChain" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ResultConsumer, $ResultConsumer$$Type} from "com.mojang.brigadier.ResultConsumer"
import {$ContextChain$Stage, $ContextChain$Stage$$Type} from "com.mojang.brigadier.context.ContextChain$Stage"

export class $ContextChain<S> {

constructor(arg0: $List$$Type<($CommandContext$$Type<(S)>)>, arg1: $CommandContext$$Type<(S)>)

public "nextStage"(): $ContextChain<(S)>
public "getTopContext"(): $CommandContext<(S)>
public "executeAll"(arg0: S, arg1: $ResultConsumer$$Type<(S)>): integer
public static "tryFlatten"<S>(arg0: $CommandContext$$Type<(S)>): $Optional<($ContextChain<(S)>)>
public "getStage"(): $ContextChain$Stage
public static "runModifier"<S>(arg0: $CommandContext$$Type<(S)>, arg1: S, arg2: $ResultConsumer$$Type<(S)>, arg3: boolean): $Collection<(S)>
public static "runExecutable"<S>(arg0: $CommandContext$$Type<(S)>, arg1: S, arg2: $ResultConsumer$$Type<(S)>, arg3: boolean): integer
get "topContext"(): $CommandContext<(S)>
get "stage"(): $ContextChain$Stage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextChain$$Type<S> = ($ContextChain<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextChain_<S> = $ContextChain$$Type<(S)>;
}}
declare module "com.mojang.datafixers.optics.Optic" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$App2, $App2$$Type} from "com.mojang.datafixers.kinds.App2"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Set, $Set$$Type} from "java.util.Set"
import {$K2, $K2$$Type} from "com.mojang.datafixers.kinds.K2"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"

export interface $Optic<Proof extends $K1, S, T, A, B> {

 "eval"<P extends $K2>(arg0: $App$$Type<(Proof), (P)>): $Function<($App2<(P), (A), (B)>), ($App2<(P), (S), (T)>)>
 "upCast"<Proof2 extends $K1>(arg0: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $TypeToken$$Type<(Proof2)>): $Optional<($Optic<(Proof2), (S), (T), (A), (B)>)>

(arg0: $App<(Proof), (P)>): $Function$$Type<($App2$$Type<(P), (A), (B)>), ($App2$$Type<(P), (S), (T)>)>
}

export namespace $Optic {
const probejs$$marker: never
}
export class $Optic$$Static<Proof extends $K1, S, T, A, B> implements $Optic {


 "eval"<P extends $K2>(arg0: $App$$Type<(Proof), (P)>): $Function<($App2<(P), (A), (B)>), ($App2<(P), (S), (T)>)>
 "upCast"<Proof2 extends $K1>(arg0: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $TypeToken$$Type<(Proof2)>): $Optional<($Optic<(Proof2), (S), (T), (A), (B)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optic$$Type<Proof, S, T, A, B> = ((arg0: $App<(Proof), (P)>) => $Function$$Type<($App2$$Type<(P), (A), (B)>), ($App2$$Type<(P), (S), (T)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Optic_<Proof, S, T, A, B> = $Optic$$Type<(Proof), (S), (T), (A), (B)>;
}}
declare module "com.mojang.datafixers.types.Type$FieldNotFoundException" {
import {$Type$TypeError, $Type$TypeError$$Type} from "com.mojang.datafixers.types.Type$TypeError"

export class $Type$FieldNotFoundException extends $Type$TypeError {

constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$FieldNotFoundException$$Type = ($Type$FieldNotFoundException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$FieldNotFoundException_ = $Type$FieldNotFoundException$$Type;
}}
declare module "com.mojang.blaze3d.vertex.ByteBufferBuilder" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder$Result, $ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"

export class $ByteBufferBuilder implements $AutoCloseable {

constructor(arg0: integer)

public "clear"(): void
public "close"(): void
public "build"(): $ByteBufferBuilder$Result
public "discard"(): void
public "reserve"(arg0: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferBuilder$$Type = ($ByteBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufferBuilder_ = $ByteBufferBuilder$$Type;
}}
declare module "com.mojang.realmsclient.dto.WorldTemplate$WorldTemplateType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WorldTemplate$WorldTemplateType extends $Enum<($WorldTemplate$WorldTemplateType)> {
static readonly "ADVENTUREMAP": $WorldTemplate$WorldTemplateType
static readonly "WORLD_TEMPLATE": $WorldTemplate$WorldTemplateType
static readonly "MINIGAME": $WorldTemplate$WorldTemplateType
static readonly "EXPERIENCE": $WorldTemplate$WorldTemplateType
static readonly "INSPIRATION": $WorldTemplate$WorldTemplateType


public static "values"(): ($WorldTemplate$WorldTemplateType)[]
public static "valueOf"(arg0: string): $WorldTemplate$WorldTemplateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplate$WorldTemplateType$$Type = (("world_template") | ("minigame") | ("adventuremap") | ("experience") | ("inspiration"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTemplate$WorldTemplateType_ = $WorldTemplate$WorldTemplateType$$Type;
}}
declare module "com.mojang.realmsclient.dto.BackupList" {
import {$Backup, $Backup$$Type} from "com.mojang.realmsclient.dto.Backup"
import {$List, $List$$Type} from "java.util.List"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $BackupList extends $ValueObject {
 "backups": $List<($Backup)>

constructor()

public static "parse"(arg0: string): $BackupList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackupList$$Type = ($BackupList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackupList_ = $BackupList$$Type;
}}
declare module "com.mojang.blaze3d.shaders.EffectProgram" {
import {$Program, $Program$$Type} from "com.mojang.blaze3d.shaders.Program"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Effect, $Effect$$Type} from "com.mojang.blaze3d.shaders.Effect"
import {$Program$Type, $Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $EffectProgram extends $Program {


public "close"(): void
public static "compileShader"(arg0: $Program$Type$$Type, arg1: string, arg2: $InputStream$$Type, arg3: string): $EffectProgram
public "attachToEffect"(arg0: $Effect$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectProgram$$Type = ($EffectProgram);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectProgram_ = $EffectProgram$$Type;
}}
declare module "com.mojang.authlib.minecraft.TelemetryEvent" {
import {$TelemetryPropertyContainer, $TelemetryPropertyContainer$$Type} from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $TelemetryEvent extends $TelemetryPropertyContainer {

 "send"(): void
 "addProperty"(arg0: string, arg1: boolean): void
 "addProperty"(arg0: string, arg1: long): void
 "addProperty"(arg0: string, arg1: integer): void
 "addProperty"(arg0: string, arg1: string): void
 "addNullProperty"(arg0: string): void
}

export namespace $TelemetryEvent {
const EMPTY: $TelemetryEvent
function forJsonObject(arg0: $JsonObject$$Type): $TelemetryPropertyContainer
const probejs$$marker: never
}
export class $TelemetryEvent$$Static implements $TelemetryEvent {
static readonly "EMPTY": $TelemetryEvent


 "send"(): void
 "addProperty"(arg0: string, arg1: boolean): void
 "addProperty"(arg0: string, arg1: long): void
 "addProperty"(arg0: string, arg1: integer): void
 "addProperty"(arg0: string, arg1: string): void
static "forJsonObject"(arg0: $JsonObject$$Type): $TelemetryPropertyContainer
 "addNullProperty"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEvent$$Type = ($TelemetryEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TelemetryEvent_ = $TelemetryEvent$$Type;
}}
declare module "com.mojang.serialization.DynamicLike" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$OptionalDynamic, $OptionalDynamic$$Type} from "com.mojang.serialization.OptionalDynamic"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$List, $List$$Type} from "java.util.List"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $DynamicLike<T> {

constructor(arg0: $DynamicOps$$Type<(T)>)

public "asLongStream"(): $LongStream
public "get"(arg0: string): $OptionalDynamic<(T)>
public "decode"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<($Pair<(A), (T)>)>
public "emptyList"(): $Dynamic<(T)>
public "read"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<(A)>
public "asList"<U>(arg0: $Function$$Type<($Dynamic<(T)>), (U)>): $List<(U)>
public "emptyMap"(): $Dynamic<(T)>
public "createMap"(arg0: $Map$$Type<($Dynamic$$Type<(any)>), ($Dynamic$$Type<(any)>)>): $Dynamic<(T)>
public "createLong"(arg0: long): $Dynamic<(T)>
public "createString"(arg0: string): $Dynamic<(T)>
public "getElement"(arg0: string): $DataResult<(T)>
public "getElement"(arg0: string, arg1: T): T
public "asByteBuffer"(): $ByteBuffer
public "asInt"(arg0: integer): integer
public "asString"(): $DataResult<(string)>
public "asString"(arg0: string): string
public "createList"(arg0: $Stream$$Type<($Dynamic$$Type<(any)>)>): $Dynamic<(T)>
public "asMap"<K, V>(arg0: $Function$$Type<($Dynamic<(T)>), (K)>, arg1: $Function$$Type<($Dynamic<(T)>), (V)>): $Map<(K), (V)>
public "asDouble"(arg0: double): double
public "createDouble"(arg0: double): $Dynamic<(T)>
public "createFloat"(arg0: float): $Dynamic<(T)>
public "createLongList"(arg0: $LongStream$$Type): $Dynamic<(any)>
public "createShort"(arg0: short): $Dynamic<(T)>
public "createByteList"(arg0: $ByteBuffer$$Type): $Dynamic<(any)>
public "createIntList"(arg0: $IntStream$$Type): $Dynamic<(any)>
public "createBoolean"(arg0: boolean): $Dynamic<(T)>
public "asIntStream"(): $IntStream
public "asMapOpt"<K, V>(arg0: $Function$$Type<($Dynamic<(T)>), (K)>, arg1: $Function$$Type<($Dynamic<(T)>), (V)>): $DataResult<($Map<(K), (V)>)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asByte"(arg0: byte): byte
public "asLong"(arg0: long): long
public "readMap"<K, V>(arg0: $Decoder$$Type<(K)>, arg1: $Function$$Type<(K), ($Decoder$$Type<(V)>)>): $DataResult<($List<($Pair<(K), (V)>)>)>
public "readMap"<K, V>(arg0: $Decoder$$Type<(K)>, arg1: $Decoder$$Type<(V)>): $DataResult<($List<($Pair<(K), (V)>)>)>
public "readMap"<R>(arg0: $DataResult$$Type<(R)>, arg1: $Function3$$Type<(R), ($Dynamic$$Type<(T)>), ($Dynamic$$Type<(T)>), ($DataResult$$Type<(R)>)>): $DataResult<(R)>
public "asNumber"(arg0: number): number
public "asNumber"(): $DataResult<(number)>
public "asStream"(): $Stream<($Dynamic<(T)>)>
public "readList"<E>(arg0: $Decoder$$Type<(E)>): $DataResult<($List<(E)>)>
public "readList"<E>(arg0: $Function$$Type<($Dynamic<(any)>), ($DataResult$$Type<(E)>)>): $DataResult<($List<(E)>)>
public "asListOpt"<U>(arg0: $Function$$Type<($Dynamic<(T)>), (U)>): $DataResult<($List<(U)>)>
public "asBoolean"(): $DataResult<(boolean)>
public "asBoolean"(arg0: boolean): boolean
public "asFloat"(arg0: float): float
public "asShort"(arg0: short): short
public "getGeneric"(arg0: T): $DataResult<(T)>
public "createNumeric"(arg0: number): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "getElementGeneric"(arg0: T, arg1: T): T
public "asIntStreamOpt"(): $DataResult<($IntStream)>
public "createByte"(arg0: byte): $Dynamic<(T)>
public "getOps"(): $DynamicOps<(T)>
public "createInt"(arg0: integer): $Dynamic<(T)>
get "ops"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLike$$Type<T> = ($DynamicLike<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLike_<T> = $DynamicLike$$Type<(T)>;
}}
declare module "com.mojang.authlib.yggdrasil.response.KeyPairResponse" {
import {$KeyPairResponse$KeyPair, $KeyPairResponse$KeyPair$$Type} from "com.mojang.authlib.yggdrasil.response.KeyPairResponse$KeyPair"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KeyPairResponse extends $Record {

constructor(keyPair: $KeyPairResponse$KeyPair$$Type, publicKeySignature: $ByteBuffer$$Type, expiresAt: string, refreshedAfter: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "publicKeySignature"(): $ByteBuffer
public "refreshedAfter"(): string
public "keyPair"(): $KeyPairResponse$KeyPair
public "expiresAt"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPairResponse$$Type = ({"expiresAt"?: string, "publicKeySignature"?: $ByteBuffer$$Type, "refreshedAfter"?: string, "keyPair"?: $KeyPairResponse$KeyPair$$Type}) | ([expiresAt?: string, publicKeySignature?: $ByteBuffer$$Type, refreshedAfter?: string, keyPair?: $KeyPairResponse$KeyPair$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPairResponse_ = $KeyPairResponse$$Type;
}}
declare module "com.mojang.realmsclient.dto.RealmsServer$State" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RealmsServer$State extends $Enum<($RealmsServer$State)> {
static readonly "CLOSED": $RealmsServer$State
static readonly "UNINITIALIZED": $RealmsServer$State
static readonly "OPEN": $RealmsServer$State


public static "values"(): ($RealmsServer$State)[]
public static "valueOf"(arg0: string): $RealmsServer$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$State$$Type = (("closed") | ("open") | ("uninitialized"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer$State_ = $RealmsServer$State$$Type;
}}
declare module "com.mojang.authlib.minecraft.MinecraftSessionService" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$MinecraftProfileTextures, $MinecraftProfileTextures$$Type} from "com.mojang.authlib.minecraft.MinecraftProfileTextures"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Property, $Property$$Type} from "com.mojang.authlib.properties.Property"
import {$ProfileResult, $ProfileResult$$Type} from "com.mojang.authlib.yggdrasil.ProfileResult"

export interface $MinecraftSessionService {

 "getTextures"(arg0: $GameProfile$$Type): $MinecraftProfileTextures
 "hasJoinedServer"(arg0: string, arg1: string, arg2: $InetAddress$$Type): $ProfileResult
 "unpackTextures"(arg0: $Property$$Type): $MinecraftProfileTextures
 "getPackedTextures"(arg0: $GameProfile$$Type): $Property
 "fetchProfile"(arg0: $UUID$$Type, arg1: boolean): $ProfileResult
 "getSecurePropertyValue"(arg0: $Property$$Type): string
 "joinServer"(arg0: $UUID$$Type, arg1: string, arg2: string): void
}

export namespace $MinecraftSessionService {
const probejs$$marker: never
}
export class $MinecraftSessionService$$Static implements $MinecraftSessionService {


 "getTextures"(arg0: $GameProfile$$Type): $MinecraftProfileTextures
 "hasJoinedServer"(arg0: string, arg1: string, arg2: $InetAddress$$Type): $ProfileResult
 "unpackTextures"(arg0: $Property$$Type): $MinecraftProfileTextures
 "getPackedTextures"(arg0: $GameProfile$$Type): $Property
 "fetchProfile"(arg0: $UUID$$Type, arg1: boolean): $ProfileResult
 "getSecurePropertyValue"(arg0: $Property$$Type): string
 "joinServer"(arg0: $UUID$$Type, arg1: string, arg2: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftSessionService$$Type = ($MinecraftSessionService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftSessionService_ = $MinecraftSessionService$$Type;
}}
declare module "com.mojang.authlib.minecraft.UserApiService" {
import {$AbuseReportRequest, $AbuseReportRequest$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$UserApiService$UserProperties, $UserApiService$UserProperties$$Type} from "com.mojang.authlib.minecraft.UserApiService$UserProperties"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$TelemetrySession, $TelemetrySession$$Type} from "com.mojang.authlib.minecraft.TelemetrySession"
import {$KeyPairResponse, $KeyPairResponse$$Type} from "com.mojang.authlib.yggdrasil.response.KeyPairResponse"
import {$AbuseReportLimits, $AbuseReportLimits$$Type} from "com.mojang.authlib.minecraft.report.AbuseReportLimits"

export interface $UserApiService {

 "refreshBlockList"(): void
 "isBlockedPlayer"(arg0: $UUID$$Type): boolean
 "reportAbuse"(arg0: $AbuseReportRequest$$Type): void
 "canSendReports"(): boolean
 "fetchProperties"(): $UserApiService$UserProperties
 "newTelemetrySession"(arg0: $Executor$$Type): $TelemetrySession
 "getAbuseReportLimits"(): $AbuseReportLimits
 "getKeyPair"(): $KeyPairResponse
get "abuseReportLimits"(): $AbuseReportLimits
get "keyPair"(): $KeyPairResponse
}

export namespace $UserApiService {
const OFFLINE_PROPERTIES: $UserApiService$UserProperties
const OFFLINE: $UserApiService
const probejs$$marker: never
}
export class $UserApiService$$Static implements $UserApiService {
static readonly "OFFLINE_PROPERTIES": $UserApiService$UserProperties
static readonly "OFFLINE": $UserApiService


 "refreshBlockList"(): void
 "isBlockedPlayer"(arg0: $UUID$$Type): boolean
 "reportAbuse"(arg0: $AbuseReportRequest$$Type): void
 "canSendReports"(): boolean
 "fetchProperties"(): $UserApiService$UserProperties
 "newTelemetrySession"(arg0: $Executor$$Type): $TelemetrySession
 "getAbuseReportLimits"(): $AbuseReportLimits
 "getKeyPair"(): $KeyPairResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$$Type = ($UserApiService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserApiService_ = $UserApiService$$Type;
}}
declare module "com.mojang.brigadier.exceptions.SimpleCommandExceptionType" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandExceptionType, $CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$CommandSyntaxException, $CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $SimpleCommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Message$$Type)

public "toString"(): string
public "create"(): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCommandExceptionType$$Type = ($SimpleCommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCommandExceptionType_ = $SimpleCommandExceptionType$$Type;
}}
declare module "com.mojang.datafixers.TypedOptic" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$$Type} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$App2, $App2$$Type} from "com.mojang.datafixers.kinds.App2"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Set, $Set$$Type} from "java.util.Set"
import {$K2, $K2$$Type} from "com.mojang.datafixers.kinds.K2"
import {$Optic, $Optic$$Type} from "com.mojang.datafixers.optics.Optic"
import {$TypedOptic$Element, $TypedOptic$Element$$Type} from "com.mojang.datafixers.TypedOptic$Element"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TypedOptic<S, T, A, B> extends $Record {

constructor(bounds: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, elements: $List$$Type<($TypedOptic$Element$$Type<(any), (any), (any), (any)>)>)
constructor(arg0: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $Type$$Type<(S)>, arg2: $Type$$Type<(T)>, arg3: $Type$$Type<(A)>, arg4: $Type$$Type<(B)>, arg5: $Optic$$Type<(any), (S), (T), (A), (B)>)
constructor(arg0: $TypeToken$$Type<($K1$$Type)>, arg1: $Type$$Type<(S)>, arg2: $Type$$Type<(T)>, arg3: $Type$$Type<(A)>, arg4: $Type$$Type<(B)>, arg5: $Optic$$Type<(any), (S), (T), (A), (B)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"<P extends $K2, Proof2 extends $K1>(arg0: $TypeToken$$Type<(Proof2)>, arg1: $App$$Type<(Proof2), (P)>, arg2: $App2$$Type<(P), (A), (B)>): $App2<(P), (S), (T)>
public static "list"<A, B>(arg0: $Type$$Type<(A)>, arg1: $Type$$Type<(B)>): $TypedOptic<($List<(A)>), ($List<(B)>), (A), (B)>
public "elements"(): $List<($TypedOptic$Element<(any), (any), (any), (any)>)>
public "bounds"(): $Set<($TypeToken<($K1)>)>
public "innermost"(): $Optic<(any), (any), (any), (A), (B)>
public "compose"<A1, B1>(arg0: $TypedOptic$$Type<(A), (B), (A1), (B1)>): $TypedOptic<(S), (T), (A1), (B1)>
public static "adapter"<S, T>(arg0: $Type$$Type<(S)>, arg1: $Type$$Type<(T)>): $TypedOptic<(S), (T), (S), (T)>
public "tType"(): $Type<(T)>
public "aType"(): $Type<(A)>
public static "tagged"<K, A, B>(arg0: $TaggedChoice$TaggedChoiceType$$Type<(K)>, arg1: K, arg2: $Type$$Type<(A)>, arg3: $Type$$Type<(B)>): $TypedOptic<($Pair<(K), (any)>), ($Pair<(K), (any)>), (A), (B)>
public "sType"(): $Type<(S)>
public "castOuterUnchecked"<S2, T2>(arg0: $Type$$Type<(S2)>, arg1: $Type$$Type<(T2)>): $TypedOptic<(S2), (T2), (A), (B)>
public static "compoundListKeys"<K, V, K2>(arg0: $Type$$Type<(K)>, arg1: $Type$$Type<(K2)>, arg2: $Type$$Type<(V)>): $TypedOptic<($List<($Pair<(K), (V)>)>), ($List<($Pair<(K2), (V)>)>), (K), (K2)>
public "outermost"(): $Optic<(any), (S), (T), (any), (any)>
public "bType"(): $Type<(B)>
public static "inj1"<F, G, F2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(F2)>): $TypedOptic<($Either<(F), (G)>), ($Either<(F2), (G)>), (F), (F2)>
public "upCast"<Proof2 extends $K1>(arg0: $TypeToken$$Type<(Proof2)>): $Optional<($Optic<(Proof2), (S), (T), (A), (B)>)>
public static "proj2"<F, G, G2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(G2)>): $TypedOptic<($Pair<(F), (G)>), ($Pair<(F), (G2)>), (G), (G2)>
public static "instanceOf"<Proof2 extends $K1>(arg0: $Collection$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $TypeToken$$Type<(Proof2)>): boolean
public static "proj1"<F, G, F2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(F2)>): $TypedOptic<($Pair<(F), (G)>), ($Pair<(F2), (G)>), (F), (F2)>
public static "inj2"<F, G, G2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(G2)>): $TypedOptic<($Either<(F), (G)>), ($Either<(F), (G2)>), (G), (G2)>
public "castOuter"(arg0: $Type$$Type<(S)>, arg1: $Type$$Type<(T)>): $TypedOptic<(S), (T), (A), (B)>
public static "compoundListElements"<K, V, V2>(arg0: $Type$$Type<(K)>, arg1: $Type$$Type<(V)>, arg2: $Type$$Type<(V2)>): $TypedOptic<($List<($Pair<(K), (V)>)>), ($List<($Pair<(K), (V2)>)>), (V), (V2)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedOptic$$Type<S, T, A, B> = ({"elements"?: $List$$Type<($TypedOptic$Element$$Type<(never), (never), (never), (never)>)>, "bounds"?: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>}) | ([elements?: $List$$Type<($TypedOptic$Element$$Type<(never), (never), (never), (never)>)>, bounds?: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedOptic_<S, T, A, B> = $TypedOptic$$Type<(S), (T), (A), (B)>;
}}
declare module "com.mojang.realmsclient.dto.UploadInfo" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"

export class $UploadInfo extends $ValueObject {


public static "parse"(arg0: string): $UploadInfo
public "getToken"(): string
public static "createRequest"(arg0: string): string
public "getUploadEndpoint"(): $URI
public "isWorldClosed"(): boolean
public static "assembleUri"(arg0: string, arg1: integer): $URI
get "token"(): string
get "uploadEndpoint"(): $URI
get "worldClosed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UploadInfo$$Type = ($UploadInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UploadInfo_ = $UploadInfo$$Type;
}}
declare module "com.mojang.realmsclient.gui.RealmsNewsManager" {
import {$RealmsPersistence, $RealmsPersistence$$Type} from "com.mojang.realmsclient.util.RealmsPersistence"
import {$RealmsNews, $RealmsNews$$Type} from "com.mojang.realmsclient.dto.RealmsNews"

export class $RealmsNewsManager {

constructor(arg0: $RealmsPersistence$$Type)

public "hasUnreadNews"(): boolean
public "updateUnreadNews"(arg0: $RealmsNews$$Type): void
public "newsLink"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNewsManager$$Type = ($RealmsNewsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsNewsManager_ = $RealmsNewsManager$$Type;
}}
declare module "com.mojang.datafixers.RewriteResult" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$View, $View$$Type} from "com.mojang.datafixers.View"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RewriteResult<A, B> extends $Record {

constructor(view: $View$$Type<(A), (B)>, recData: $BitSet$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<A, B>(arg0: $View$$Type<(A), (B)>, arg1: $BitSet$$Type): $RewriteResult<(A), (B)>
public "compose"<C>(arg0: $RewriteResult$$Type<(C), (A)>): $RewriteResult<(C), (B)>
public "view"(): $View<(A), (B)>
public static "nop"<A>(arg0: $Type$$Type<(A)>): $RewriteResult<(A), (A)>
public "recData"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewriteResult$$Type<A, B> = ({"recData"?: $BitSet$$Type, "view"?: $View$$Type<(any), (any)>}) | ([recData?: $BitSet$$Type, view?: $View$$Type<(any), (any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewriteResult_<A, B> = $RewriteResult$$Type<(A), (B)>;
}}
declare module "com.mojang.realmsclient.dto.PendingInvite" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$Date, $Date$$Type} from "java.util.Date"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export class $PendingInvite extends $ValueObject {
 "date": $Date
 "realmName": string
 "realmOwnerUuid": $UUID
 "invitationId": string
 "realmOwnerName": string

constructor()

public static "parse"(arg0: $JsonObject$$Type): $PendingInvite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingInvite$$Type = ($PendingInvite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PendingInvite_ = $PendingInvite$$Type;
}}
declare module "com.mojang.blaze3d.shaders.Effect" {
import {$Program, $Program$$Type} from "com.mojang.blaze3d.shaders.Program"
import {$Shader, $Shader$$Type} from "com.mojang.blaze3d.shaders.Shader"

export interface $Effect extends $Shader {

 "getId"(): integer
 "getFragmentProgram"(): $Program
 "getVertexProgram"(): $Program
 "attachToProgram"(): void
 "markDirty"(): void
get "id"(): integer
get "fragmentProgram"(): $Program
get "vertexProgram"(): $Program
}

export namespace $Effect {
const probejs$$marker: never
}
export class $Effect$$Static implements $Effect {


 "getId"(): integer
 "getFragmentProgram"(): $Program
 "getVertexProgram"(): $Program
 "attachToProgram"(): void
 "markDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Effect$$Type = ($Effect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Effect_ = $Effect$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormatElement$Usage" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ExtensionInfo, $ExtensionInfo$$Type} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum, $IExtensibleEnum$$Type} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $VertexFormatElement$Usage extends $Enum<($VertexFormatElement$Usage)> implements $IExtensibleEnum {
static readonly "POSITION": $VertexFormatElement$Usage
static readonly "UV": $VertexFormatElement$Usage
static readonly "GENERIC": $VertexFormatElement$Usage
static readonly "COLOR": $VertexFormatElement$Usage
static readonly "NORMAL": $VertexFormatElement$Usage


public "toString"(): string
public static "values"(): ($VertexFormatElement$Usage)[]
public static "valueOf"(arg0: string): $VertexFormatElement$Usage
public static "getExtensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Usage$$Type = (("position") | ("normal") | ("color") | ("uv") | ("generic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatElement$Usage_ = $VertexFormatElement$Usage$$Type;
}}
declare module "com.mojang.authlib.Environment" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Environment extends $Record {

constructor(sessionHost: string, servicesHost: string, name: string)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "servicesHost"(): string
public "sessionHost"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Environment$$Type = ({"servicesHost"?: string, "name"?: string, "sessionHost"?: string}) | ([servicesHost?: string, name?: string, sessionHost?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Environment_ = $Environment$$Type;
}}
declare module "com.mojang.blaze3d.platform.IconSet" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$PackResources, $PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IoSupplier, $IoSupplier$$Type} from "net.minecraft.server.packs.resources.IoSupplier"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $IconSet extends $Enum<($IconSet)> {
static readonly "SNAPSHOT": $IconSet
static readonly "RELEASE": $IconSet


public static "values"(): ($IconSet)[]
public static "valueOf"(arg0: string): $IconSet
public "getStandardIcons"(arg0: $PackResources$$Type): $List<($IoSupplier<($InputStream)>)>
public "getMacIcon"(arg0: $PackResources$$Type): $IoSupplier<($InputStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconSet$$Type = (("release") | ("snapshot"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconSet_ = $IconSet$$Type;
}}
declare module "com.mojang.datafixers.DSL$TypeReference" {
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$Schema, $Schema$$Type} from "com.mojang.datafixers.schemas.Schema"

export interface $DSL$TypeReference {

 "in"(arg0: $Schema$$Type): $TypeTemplate
 "typeName"(): string

(): string
}

export namespace $DSL$TypeReference {
const probejs$$marker: never
}
export class $DSL$TypeReference$$Static implements $DSL$TypeReference {


 "in"(arg0: $Schema$$Type): $TypeTemplate
 "typeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DSL$TypeReference$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DSL$TypeReference_ = $DSL$TypeReference$$Type;
}}
declare module "com.mojang.realmsclient.dto.RealmsServerPlayerLists" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$ValueObject, $ValueObject$$Type} from "com.mojang.realmsclient.dto.ValueObject"
import {$ProfileResult, $ProfileResult$$Type} from "com.mojang.authlib.yggdrasil.ProfileResult"

export class $RealmsServerPlayerLists extends $ValueObject {
 "servers": $Map<(long), ($List<($ProfileResult)>)>

constructor()

public static "parse"(arg0: string): $RealmsServerPlayerLists
public "getProfileResultsFor"(arg0: long): $List<($ProfileResult)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerPlayerLists$$Type = ($RealmsServerPlayerLists);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerPlayerLists_ = $RealmsServerPlayerLists$$Type;
}}
declare module "com.mojang.brigadier.tree.ArgumentCommandNode" {
import {$CommandContextBuilder, $CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"
import {$SuggestionProvider, $SuggestionProvider$$Type} from "com.mojang.brigadier.suggestion.SuggestionProvider"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder, $ArgumentBuilder$$Type} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $ArgumentCommandNode<S, T> extends $CommandNode<(S)> {

constructor(arg0: string, arg1: $ArgumentType$$Type<(T)>, arg2: $Command$$Type<(S)>, arg3: $Predicate$$Type<(S)>, arg4: $CommandNode$$Type<(S)>, arg5: $RedirectModifier$$Type<(S)>, arg6: boolean, arg7: $SuggestionProvider$$Type<(S)>)

public "getExamples"(): $Collection<(string)>
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "getType"(): $ArgumentType<(T)>
public "isValidInput"(arg0: string): boolean
public "getUsageText"(): string
public "createBuilder"(): $ArgumentBuilder<(any), (any)>
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getCustomSuggestions"(): $SuggestionProvider<(S)>
get "examples"(): $Collection<(string)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
get "usageText"(): string
get "customSuggestions"(): $SuggestionProvider<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentCommandNode$$Type<S, T> = ($ArgumentCommandNode<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentCommandNode_<S, T> = $ArgumentCommandNode$$Type<(S), (T)>;
}}
declare module "com.mojang.datafixers.FamilyOptic" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"

export interface $FamilyOptic<A, B> {

 "apply"(arg0: integer): $TypedOptic<(any), (any), (A), (B)>

(arg0: integer): $TypedOptic$$Type<(any), (any), (A), (B)>
}

export namespace $FamilyOptic {
const probejs$$marker: never
}
export class $FamilyOptic$$Static<A, B> implements $FamilyOptic {


 "apply"(arg0: integer): $TypedOptic<(any), (any), (A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamilyOptic$$Type<A, B> = ((arg0: integer) => $TypedOptic$$Type<(any), (any), (A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamilyOptic_<A, B> = $FamilyOptic$$Type<(A), (B)>;
}}
declare module "com.mojang.brigadier.SingleRedirectModifier" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"

export interface $SingleRedirectModifier<S> {

 "apply"(arg0: $CommandContext$$Type<(S)>): S

(arg0: $CommandContext<(S)>): S
}

export namespace $SingleRedirectModifier {
const probejs$$marker: never
}
export class $SingleRedirectModifier$$Static<S> implements $SingleRedirectModifier {


 "apply"(arg0: $CommandContext$$Type<(S)>): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleRedirectModifier$$Type<S> = ((arg0: $CommandContext<(S)>) => S);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleRedirectModifier_<S> = $SingleRedirectModifier$$Type<(S)>;
}}
declare module "com.mojang.datafixers.types.families.TypeFamily" {
import {$FamilyOptic, $FamilyOptic$$Type} from "com.mojang.datafixers.FamilyOptic"
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $TypeFamily {

 "apply"(arg0: integer): $Type<(any)>

(arg0: integer): $Type$$Type<(any)>
}

export namespace $TypeFamily {
function familyOptic<A, B>(arg0: $IntFunction$$Type<($TypedOptic$$Type<(any), (any), (A), (B)>)>): $FamilyOptic<(A), (B)>
const probejs$$marker: never
}
export class $TypeFamily$$Static implements $TypeFamily {


 "apply"(arg0: integer): $Type<(any)>
static "familyOptic"<A, B>(arg0: $IntFunction$$Type<($TypedOptic$$Type<(any), (any), (A), (B)>)>): $FamilyOptic<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFamily$$Type = ((arg0: integer) => $Type$$Type<(any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFamily_ = $TypeFamily$$Type;
}}
declare module "com.mojang.serialization.codecs.BaseMapCodec" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"

export interface $BaseMapCodec<K, V> {

 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
 "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
 "elementCodec"(): $Codec<(V)>
 "keyCodec"(): $Codec<(K)>
}

export namespace $BaseMapCodec {
const probejs$$marker: never
}
export class $BaseMapCodec$$Static<K, V> implements $BaseMapCodec {


 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
 "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
 "elementCodec"(): $Codec<(V)>
 "keyCodec"(): $Codec<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMapCodec$$Type<K, V> = ($BaseMapCodec<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMapCodec_<K, V> = $BaseMapCodec$$Type<(K), (V)>;
}}
declare module "com.mojang.authlib.yggdrasil.ServicesKeyInfo" {
import {$Signature, $Signature$$Type} from "java.security.Signature"
import {$Property, $Property$$Type} from "com.mojang.authlib.properties.Property"

export interface $ServicesKeyInfo {

 "signature"(): $Signature
 "signatureBitCount"(): integer
 "keyBitCount"(): integer
 "validateProperty"(arg0: $Property$$Type): boolean
}

export namespace $ServicesKeyInfo {
const probejs$$marker: never
}
export class $ServicesKeyInfo$$Static implements $ServicesKeyInfo {


 "signature"(): $Signature
 "signatureBitCount"(): integer
 "keyBitCount"(): integer
 "validateProperty"(arg0: $Property$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeyInfo$$Type = ($ServicesKeyInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServicesKeyInfo_ = $ServicesKeyInfo$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbuseReportRequest$ThirdPartyServerInfo extends $Record {

constructor(address: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "address"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$ThirdPartyServerInfo$$Type = ({"address"?: string}) | ([address?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest$ThirdPartyServerInfo_ = $AbuseReportRequest$ThirdPartyServerInfo$$Type;
}}
declare module "com.mojang.realmsclient.dto.ReflectionBasedSerialization" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReflectionBasedSerialization {

}

export namespace $ReflectionBasedSerialization {
const probejs$$marker: never
}
export class $ReflectionBasedSerialization$$Static implements $ReflectionBasedSerialization {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionBasedSerialization$$Type = ($ReflectionBasedSerialization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionBasedSerialization_ = $ReflectionBasedSerialization$$Type;
}}
declare module "com.mojang.realmsclient.gui.task.DataFetcher" {
import {$DataFetcher$Task, $DataFetcher$Task$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher$Task"
import {$RepeatedDelayStrategy, $RepeatedDelayStrategy$$Type} from "com.mojang.realmsclient.gui.task.RepeatedDelayStrategy"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$DataFetcher$Subscription, $DataFetcher$Subscription$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher$Subscription"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$TimeSource, $TimeSource$$Type} from "net.minecraft.util.TimeSource"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export class $DataFetcher {

constructor(arg0: $Executor$$Type, arg1: $TimeUnit$$Type, arg2: $TimeSource$$Type)

public "createTask"<T>(arg0: string, arg1: $Callable$$Type<(T)>, arg2: $Duration$$Type, arg3: $RepeatedDelayStrategy$$Type): $DataFetcher$Task<(T)>
public "createSubscription"(): $DataFetcher$Subscription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$$Type = ($DataFetcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFetcher_ = $DataFetcher$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.ServicesKeySet" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ServicesKeyType, $ServicesKeyType$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeyType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ServicesKeyInfo, $ServicesKeyInfo$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeyInfo"

export interface $ServicesKeySet {

 "keys"(arg0: $ServicesKeyType$$Type): $Collection<($ServicesKeyInfo)>

(arg0: $ServicesKeyType): $Collection$$Type<($ServicesKeyInfo$$Type)>
}

export namespace $ServicesKeySet {
const EMPTY: $ServicesKeySet
function lazy(arg0: $Supplier$$Type<($ServicesKeySet$$Type)>): $ServicesKeySet
const probejs$$marker: never
}
export class $ServicesKeySet$$Static implements $ServicesKeySet {
static readonly "EMPTY": $ServicesKeySet


 "keys"(arg0: $ServicesKeyType$$Type): $Collection<($ServicesKeyInfo)>
static "lazy"(arg0: $Supplier$$Type<($ServicesKeySet$$Type)>): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeySet$$Type = ((arg0: $ServicesKeyType) => $Collection$$Type<($ServicesKeyInfo$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServicesKeySet_ = $ServicesKeySet$$Type;
}}
declare module "com.mojang.brigadier.context.CommandContext" {
import {$ParsedArgument, $ParsedArgument$$Type} from "com.mojang.brigadier.context.ParsedArgument"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$ParsedCommandNode, $ParsedCommandNode$$Type} from "com.mojang.brigadier.context.ParsedCommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"

export class $CommandContext<S> {

constructor(arg0: S, arg1: string, arg2: $Map$$Type<(string), ($ParsedArgument$$Type<(S), (any)>)>, arg3: $Command$$Type<(S)>, arg4: $CommandNode$$Type<(S)>, arg5: $List$$Type<($ParsedCommandNode$$Type<(S)>)>, arg6: $StringRange$$Type, arg7: $CommandContext$$Type<(S)>, arg8: $RedirectModifier$$Type<(S)>, arg9: boolean)

public "getInput"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getChild"(): $CommandContext<(S)>
public "getSource"(): S
public "getRange"(): $StringRange
public "getLastChild"(): $CommandContext<(S)>
public "getRootNode"(): $CommandNode<(S)>
public "isForked"(): boolean
public "hasNodes"(): boolean
public "getNodes"(): $List<($ParsedCommandNode<(S)>)>
public "copyFor"(arg0: S): $CommandContext<(S)>
public "getCommand"(): $Command<(S)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "getArgument"<V>(arg0: string, arg1: $Class$$Type<(V)>): V
get "input"(): string
get "child"(): $CommandContext<(S)>
get "source"(): S
get "range"(): $StringRange
get "lastChild"(): $CommandContext<(S)>
get "rootNode"(): $CommandNode<(S)>
get "forked"(): boolean
get "nodes"(): $List<($ParsedCommandNode<(S)>)>
get "command"(): $Command<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandContext$$Type<S> = ($CommandContext<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandContext_<S> = $CommandContext$$Type<(S)>;
}}
declare module "com.mojang.datafixers.kinds.K1" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K1 {

}

export namespace $K1 {
const probejs$$marker: never
}
export class $K1$$Static implements $K1 {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $K1$$Type = ($K1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $K1_ = $K1$$Type;
}}
declare module "com.mojang.datafixers.kinds.K2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K2 {

}

export namespace $K2 {
const probejs$$marker: never
}
export class $K2$$Static implements $K2 {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $K2$$Type = ($K2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $K2_ = $K2$$Type;
}}
declare module "com.mojang.authlib.yggdrasil.ProfileActionType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ProfileActionType extends $Enum<($ProfileActionType)> {
static readonly "USING_BANNED_SKIN": $ProfileActionType
static readonly "FORCED_NAME_CHANGE": $ProfileActionType


public static "values"(): ($ProfileActionType)[]
public static "valueOf"(arg0: string): $ProfileActionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileActionType$$Type = (("forced_name_change") | ("using_banned_skin"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProfileActionType_ = $ProfileActionType$$Type;
}}
declare module "com.mojang.blaze3d.vertex.VertexFormat$Builder" {
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $VertexFormat$Builder {


public "add"(arg0: string, arg1: $VertexFormatElement$$Type): $VertexFormat$Builder
public "build"(): $VertexFormat
public "padding"(arg0: integer): $VertexFormat$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$Builder$$Type = ($VertexFormat$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat$Builder_ = $VertexFormat$Builder$$Type;
}}
declare module "com.mojang.serialization.Lifecycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Lifecycle {


public "add"(arg0: $Lifecycle$$Type): $Lifecycle
public static "stable"(): $Lifecycle
public static "experimental"(): $Lifecycle
public static "deprecated"(arg0: integer): $Lifecycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lifecycle$$Type = ($Lifecycle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lifecycle_ = $Lifecycle$$Type;
}}
