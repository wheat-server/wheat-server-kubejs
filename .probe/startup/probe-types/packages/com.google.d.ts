declare module "com.google.gson.ExclusionStrategy" {
import {$Class, $Class$$Type} from "java.lang.Class"
import {$FieldAttributes, $FieldAttributes$$Type} from "com.google.gson.FieldAttributes"

export interface $ExclusionStrategy {

 "shouldSkipField"(arg0: $FieldAttributes$$Type): boolean
 "shouldSkipClass"(arg0: $Class$$Type<(any)>): boolean
}

export namespace $ExclusionStrategy {
const probejs$$marker: never
}
export class $ExclusionStrategy$$Static implements $ExclusionStrategy {


 "shouldSkipField"(arg0: $FieldAttributes$$Type): boolean
 "shouldSkipClass"(arg0: $Class$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExclusionStrategy$$Type = ($ExclusionStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExclusionStrategy_ = $ExclusionStrategy$$Type;
}}
declare module "com.google.gson.stream.JsonReader" {
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$JsonToken, $JsonToken$$Type} from "com.google.gson.stream.JsonToken"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"

export class $JsonReader implements $Closeable {

constructor(arg0: $Reader$$Type)

public "toString"(): string
public "hasNext"(): boolean
public "close"(): void
public "getPath"(): string
public "peek"(): $JsonToken
public "nextDouble"(): double
public "nextInt"(): integer
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nextLong"(): long
public "nextBoolean"(): boolean
public "nextNull"(): void
public "nextName"(): string
public "nextString"(): string
public "endArray"(): void
public "endObject"(): void
public "skipValue"(): void
public "beginArray"(): void
public "getPreviousPath"(): string
public "beginObject"(): void
get "path"(): string
set "lenient"(value: boolean)
get "lenient"(): boolean
get "previousPath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReader$$Type = ($JsonReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonReader_ = $JsonReader$$Type;
}}
declare module "com.google.gson.stream.JsonWriter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Flushable, $Flushable$$Type} from "java.io.Flushable"

export class $JsonWriter implements $Closeable, $Flushable {

constructor(arg0: $Writer$$Type)

public "name"(arg0: string): $JsonWriter
public "value"(arg0: float): $JsonWriter
public "value"(arg0: double): $JsonWriter
public "value"(arg0: long): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: string): $JsonWriter
public "value"(arg0: number): $JsonWriter
public "flush"(): void
public "close"(): void
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nullValue"(): $JsonWriter
public "setIndent"(arg0: string): void
public "endArray"(): $JsonWriter
public "jsonValue"(arg0: string): $JsonWriter
public "endObject"(): $JsonWriter
public "isHtmlSafe"(): boolean
public "beginArray"(): $JsonWriter
public "getSerializeNulls"(): boolean
public "setSerializeNulls"(arg0: boolean): void
public "beginObject"(): $JsonWriter
public "setHtmlSafe"(arg0: boolean): void
set "lenient"(value: boolean)
get "lenient"(): boolean
set "indent"(value: string)
get "htmlSafe"(): boolean
get "serializeNulls"(): boolean
set "serializeNulls"(value: boolean)
set "htmlSafe"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonWriter$$Type = ($JsonWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonWriter_ = $JsonWriter$$Type;
}}
declare module "com.google.common.collect.ImmutableMap$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableMap$Builder<K, V> {

constructor()

public "put"(key: K, value: V): $ImmutableMap$Builder<(K), (V)>
public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(map: $Map$$Type<(K), (V)>): $ImmutableMap$Builder<(K), (V)>
public "build"(): $ImmutableMap<(K), (V)>
public "orderEntriesByValue"(valueComparator: $Comparator$$Type<(V)>): $ImmutableMap$Builder<(K), (V)>
public "buildOrThrow"(): $ImmutableMap<(K), (V)>
public "buildKeepingLast"(): $ImmutableMap<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$Builder$$Type<K, V> = ($ImmutableMap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMap$Builder_<K, V> = $ImmutableMap$Builder$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.ImmutableSet" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ImmutableSet$Builder, $ImmutableSet$Builder$$Type} from "com.google.common.collect.ImmutableSet$Builder"

export class $ImmutableSet<E> extends $ImmutableCollection<(E)> implements $Set<(E)> {


public "equals"(object: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(elements: $Iterator$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: $Iterable$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: $Collection$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: (E)[]): $ImmutableSet<(E)>
public "iterator"(): $Iterator<(any)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableSet<(E)>
public static "of"<E>(element: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E): $ImmutableSet<(E)>
public static "of"<E>(): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, ...others: (E)[]): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableSet<(E)>
public static "builder"<E>(): $ImmutableSet$Builder<(E)>
public static "builderWithExpectedSize"<E>(expectedSize: integer): $ImmutableSet$Builder<(E)>
public static "toImmutableSet"<E>(): $Collector<(E), (any), ($ImmutableSet<(E)>)>
public "remove"(arg0: any): boolean
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$$Type<E> = ($ImmutableSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSet_<E> = $ImmutableSet$$Type<(E)>;
}}
declare module "com.google.common.reflect.Parameter" {
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Invokable, $Invokable$$Type} from "com.google.common.reflect.Invokable"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"

export class $Parameter implements $AnnotatedElement {


public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isAnnotationPresent"(annotationType: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotation"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getType"(): $TypeToken<(any)>
public "getAnnotatedType"(): $AnnotatedType
public "getDeclaringInvokable"(): $Invokable<(any), (any)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $TypeToken<(any)>
get "annotatedType"(): $AnnotatedType
get "declaringInvokable"(): $Invokable<(any), (any)>
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
declare module "com.google.common.collect.Multiset" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Multiset$Entry, $Multiset$Entry$$Type} from "com.google.common.collect.Multiset$Entry"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ObjIntConsumer, $ObjIntConsumer$$Type} from "java.util.function.ObjIntConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Multiset<E> extends $Collection<(E)> {

 "remove"(element: any, occurrences: integer): integer
 "remove"(element: any): boolean
 "size"(): integer
 "equals"(object: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "add"(element: E): boolean
 "add"(element: E, occurrences: integer): integer
 "iterator"(): $Iterator<(E)>
 "count"(element: any): integer
 "contains"(element: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "entrySet"(): $Set<($Multiset$Entry<(E)>)>
 "forEach"(action: $Consumer$$Type<(E)>): void
 "forEachEntry"(action: $ObjIntConsumer$$Type<(E)>): void
 "removeAll"(c: $Collection$$Type<(any)>): boolean
 "retainAll"(c: $Collection$$Type<(any)>): boolean
 "containsAll"(elements: $Collection$$Type<(any)>): boolean
 "elementSet"(): $Set<(E)>
 "setCount"(element: E, count: integer): integer
 "setCount"(element: E, oldCount: integer, newCount: integer): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Multiset {
const probejs$$marker: never
}
export class $Multiset$$Static<E> implements $Multiset {


 "remove"(element: any, occurrences: integer): integer
 "remove"(element: any): boolean
 "size"(): integer
 "equals"(object: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "add"(element: E): boolean
 "add"(element: E, occurrences: integer): integer
 "iterator"(): $Iterator<(E)>
 "count"(element: any): integer
 "contains"(element: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "entrySet"(): $Set<($Multiset$Entry<(E)>)>
 "forEach"(action: $Consumer$$Type<(E)>): void
 "forEachEntry"(action: $ObjIntConsumer$$Type<(E)>): void
 "removeAll"(c: $Collection$$Type<(any)>): boolean
 "retainAll"(c: $Collection$$Type<(any)>): boolean
 "containsAll"(elements: $Collection$$Type<(any)>): boolean
 "elementSet"(): $Set<(E)>
 "setCount"(element: E, count: integer): integer
 "setCount"(element: E, oldCount: integer, newCount: integer): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$$Type<E> = ($Multiset<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiset_<E> = $Multiset$$Type<(E)>;
}}
declare module "com.google.common.collect.ForwardingSet" {
import {$ForwardingCollection, $ForwardingCollection$$Type} from "com.google.common.collect.ForwardingCollection"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ForwardingSet<E> extends $ForwardingCollection<(E)> implements $Set<(E)> {


public "equals"(object: any): boolean
public "hashCode"(): integer
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingSet$$Type<E> = ($ForwardingSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingSet_<E> = $ForwardingSet$$Type<(E)>;
}}
declare module "com.google.common.collect.ImmutableList$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$$Type} from "com.google.common.collect.ImmutableCollection$Builder"

export class $ImmutableList$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "add"(element: any): $ImmutableCollection$Builder<(any)>
public "add"(elements: (any)[]): $ImmutableCollection$Builder<(any)>
public "addAll"(elements: $Iterator$$Type<(E)>): $ImmutableList$Builder<(E)>
public "addAll"(elements: $Iterable$$Type<(any)>): $ImmutableCollection$Builder<(any)>
public "build"(): $ImmutableCollection<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableList$Builder$$Type<E> = ($ImmutableList$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableList$Builder_<E> = $ImmutableList$Builder$$Type<(E)>;
}}
declare module "com.google.gson.reflect.TypeToken" {
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $TypeToken<T> {


public static "get"(arg0: $Type$$Type): $TypeToken<(any)>
public static "get"<T>(arg0: $Class$$Type<(T)>): $TypeToken<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $TypeToken$$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Type$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Class$$Type<(any)>): boolean
public "getType"(): $Type
public "getRawType"(): $Class<(T)>
public static "getArray"(arg0: $Type$$Type): $TypeToken<(any)>
public static "getParameterized"(arg0: $Type$$Type, ...arg1: ($Type$$Type)[]): $TypeToken<(any)>
get "type"(): $Type
get "rawType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$$Type<T> = ($TypeToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken_<T> = $TypeToken$$Type<(T)>;
}}
declare module "com.google.gson.JsonPrimitive" {
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"

export class $JsonPrimitive extends $JsonElement {

constructor(arg0: character)
constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): string
public "getAsFloat"(): float
public "isBoolean"(): boolean
public "isString"(): boolean
public "getAsShort"(): short
public "getAsByte"(): byte
public "deepCopy"(): $JsonPrimitive
public "isNumber"(): boolean
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsNumber"(): number
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): string
get "asFloat"(): float
get "boolean"(): boolean
get "string"(): boolean
get "asShort"(): short
get "asByte"(): byte
get "number"(): boolean
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asCharacter"(): character
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPrimitive$$Type = (number) | (string) | (boolean) | (null);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPrimitive_ = $JsonPrimitive$$Type;
}}
declare module "com.google.common.collect.ImmutableSetMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$SetMultimap, $SetMultimap$$Type} from "com.google.common.collect.SetMultimap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$ImmutableSetMultimap$Builder, $ImmutableSetMultimap$Builder$$Type} from "com.google.common.collect.ImmutableSetMultimap$Builder"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$ImmutableMultimap, $ImmutableMultimap$$Type} from "com.google.common.collect.ImmutableMultimap"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $ImmutableSetMultimap<K, V> extends $ImmutableMultimap<(K), (V)> implements $SetMultimap<(K), (V)> {


public "get"(key: any): $Collection<(any)>
public static "copyOf"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $ImmutableSetMultimap<(K), (V)>
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableSetMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableSetMultimap$Builder<(K), (V)>
public "entries"(): $Collection<(any)>
/**
 * 
 * @deprecated
 */
public "removeAll"(key: any): $ImmutableSet<(V)>
public static "flatteningToImmutableSetMultimap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valuesFunction: $Function$$Type<(T), ($Stream$$Type<(V)>)>): $Collector<(T), (any), ($ImmutableSetMultimap<(K), (V)>)>
public static "toImmutableSetMultimap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>): $Collector<(T), (any), ($ImmutableSetMultimap<(K), (V)>)>
public "inverse"(): $ImmutableMultimap<(any), (any)>
/**
 * 
 * @deprecated
 */
public "replaceValues"(key: any, values: $Iterable$$Type<(any)>): $Set<(any)>
public "equals"(obj: any): boolean
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "keys"(): $Multiset<(any)>
public "keySet"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$$Type<K, V> = ($ImmutableSetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSetMultimap_<K, V> = $ImmutableSetMultimap$$Type<(K), (V)>;
}}
declare module "com.google.common.reflect.TypeCapture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TypeCapture<T> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeCapture$$Type<T> = ($TypeCapture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeCapture_<T> = $TypeCapture$$Type<(T)>;
}}
declare module "com.google.common.hash.HashCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HashCode {


public static "fromString"(string: string): $HashCode
public "equals"(object: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bits"(): integer
public "asInt"(): integer
public "asBytes"(): (byte)[]
public static "fromLong"(hash: long): $HashCode
public static "fromInt"(hash: integer): $HashCode
public "padToLong"(): long
public "writeBytesTo"(dest: (byte)[], offset: integer, maxLength: integer): integer
public "asLong"(): long
public static "fromBytes"(bytes: (byte)[]): $HashCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashCode$$Type = ($HashCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashCode_ = $HashCode$$Type;
}}
declare module "com.google.common.cache.LoadingCache" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats, $CacheStats$$Type} from "com.google.common.cache.CacheStats"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ConcurrentMap, $ConcurrentMap$$Type} from "java.util.concurrent.ConcurrentMap"
import {$Cache, $Cache$$Type} from "com.google.common.cache.Cache"
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type} from "com.google.common.base.Function"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export interface $LoadingCache<K, V> extends $Cache<(K), (V)>, $Function$0<(K), (V)> {

 "refresh"(key: K): void
 "get"(key: K): V
/**
 * 
 * @deprecated
 */
 "apply"(key: K): V
 "getAll"(keys: $Iterable$$Type<(K)>): $ImmutableMap<(K), (V)>
 "getUnchecked"(key: K): V
 "asMap"(): $ConcurrentMap<(K), (V)>
 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "stats"(): $CacheStats
 "equals"(object: any): boolean
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}

export namespace $LoadingCache {
function identity<T>(): $Function<(K), (K)>
const probejs$$marker: never
}
export class $LoadingCache$$Static<K, V> implements $LoadingCache {


 "refresh"(key: K): void
 "get"(key: K): V
/**
 * 
 * @deprecated
 */
 "apply"(key: K): V
 "getAll"(keys: $Iterable$$Type<(K)>): $ImmutableMap<(K), (V)>
 "getUnchecked"(key: K): V
 "asMap"(): $ConcurrentMap<(K), (V)>
 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "stats"(): $CacheStats
 "equals"(object: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingCache$$Type<K, V> = ($LoadingCache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadingCache_<K, V> = $LoadingCache$$Type<(K), (V)>;
}}
declare module "com.google.gson.TypeAdapter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $TypeAdapter<T> {

constructor()

public "write"(arg0: $JsonWriter$$Type, arg1: T): void
public "read"(arg0: $JsonReader$$Type): T
public "nullSafe"(): $TypeAdapter<(T)>
public "toJsonTree"(arg0: T): $JsonElement
public "toJson"(arg0: T): string
public "toJson"(arg0: $Writer$$Type, arg1: T): void
public "fromJson"(arg0: string): T
public "fromJson"(arg0: $Reader$$Type): T
public "fromJsonTree"(arg0: $JsonElement$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapter$$Type<T> = ($TypeAdapter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAdapter_<T> = $TypeAdapter$$Type<(T)>;
}}
declare module "com.google.common.collect.Interner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Interner<E> {

 "intern"(sample: E): E

(sample: E): E
}

export namespace $Interner {
const probejs$$marker: never
}
export class $Interner$$Static<E> implements $Interner {


 "intern"(sample: E): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Interner$$Type<E> = ((sample: E) => E);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Interner_<E> = $Interner$$Type<(E)>;
}}
declare module "com.google.common.base.Function" {
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type} from "java.util.function.Function"

export interface $Function<F, T> extends $Function$0<(F), (T)> {

 "equals"(object: any): boolean
 "apply"(input: F): T
 "compose"<V>(arg0: $Function$0$$Type<(V), (F)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$$Type<(F), (V)>): $Function$0<(F), (V)>
}

export namespace $Function {
function identity<T>(): $Function$0<(F), (F)>
const probejs$$marker: never
}
export class $Function$$Static<F, T> implements $Function {


 "equals"(object: any): boolean
 "apply"(input: F): T
static "identity"<T>(): $Function$0<(F), (F)>
 "compose"<V>(arg0: $Function$0$$Type<(V), (F)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$$Type<(F), (V)>): $Function$0<(F), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<F, T> = ($Function<(F), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_<F, T> = $Function$$Type<(F), (T)>;
}}
declare module "com.google.common.collect.Multimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $Multimap<K, V> {

 "remove"(key: any, value: any): boolean
 "size"(): integer
 "get"(key: K): $Collection<(V)>
 "put"(key: K, value: V): boolean
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "removeAll"(key: any): $Collection<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
 "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}

export namespace $Multimap {
const probejs$$marker: never
}
export class $Multimap$$Static<K, V> implements $Multimap {


 "remove"(key: any, value: any): boolean
 "size"(): integer
 "get"(key: K): $Collection<(V)>
 "put"(key: K, value: V): boolean
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "removeAll"(key: any): $Collection<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
 "containsEntry"(key: any, value: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multimap$$Type<K, V> = ($Multimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multimap_<K, V> = $Multimap$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.ImmutableMap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"
import {$ImmutableSetMultimap, $ImmutableSetMultimap$$Type} from "com.google.common.collect.ImmutableSetMultimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ImmutableMap$Builder, $ImmutableMap$Builder$$Type} from "com.google.common.collect.ImmutableMap$Builder"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ImmutableMap<K, V> implements $Map<(K), (V)>, $Serializable {


/**
 * 
 * @deprecated
 */
public "remove"(key: any, value: any): boolean
/**
 * 
 * @deprecated
 */
public "remove"(o: any): V
public "get"(key: any): V
/**
 * 
 * @deprecated
 */
public "put"(k: K, v: V): V
public "equals"(object: any): boolean
public "toString"(): string
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMap<(K), (V)>
public static "copyOf"<K, V>(map: $Map$$Type<(K), (V)>): $ImmutableMap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "replace"(key: K, oldValue: V, newValue: V): boolean
/**
 * 
 * @deprecated
 */
public "replace"(key: K, value: V): V
/**
 * 
 * @deprecated
 */
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V, k10: K, v10: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V): $ImmutableMap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "merge"(key: K, value: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<(any)>
/**
 * 
 * @deprecated
 */
public "putAll"(map: $Map$$Type<(K), (V)>): void
/**
 * 
 * @deprecated
 */
public "putIfAbsent"(key: K, value: V): V
/**
 * 
 * @deprecated
 */
public "compute"(key: K, remappingFunction: $BiFunction$$Type<(K), (V), (V)>): V
public "containsKey"(key: any): boolean
/**
 * 
 * @deprecated
 */
public "computeIfAbsent"(key: K, mappingFunction: $Function$$Type<(K), (V)>): V
public "keySet"(): $ImmutableSet<(K)>
public "containsValue"(value: any): boolean
public "getOrDefault"(key: any, defaultValue: V): V
/**
 * 
 * @deprecated
 */
public "computeIfPresent"(key: K, remappingFunction: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...entries: ($Map$Entry$$Type<(K), (V)>)[]): $ImmutableMap<(K), (V)>
public static "builderWithExpectedSize"<K, V>(expectedSize: integer): $ImmutableMap$Builder<(K), (V)>
public "asMultimap"(): $ImmutableSetMultimap<(K), (V)>
public static "toImmutableMap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>, mergeFunction: $BinaryOperator$$Type<(V)>): $Collector<(T), (any), ($ImmutableMap<(K), (V)>)>
public static "toImmutableMap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>): $Collector<(T), (any), ($ImmutableMap<(K), (V)>)>
public "size"(): integer
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$$Type<K, V> = ($ImmutableMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMap_<K, V> = $ImmutableMap$$Type<(K), (V)>;
}}
declare module "com.google.gson.JsonNull" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $JsonNull extends $JsonElement {
static readonly "INSTANCE": $JsonNull

/**
 * 
 * @deprecated
 */
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "deepCopy"(): $JsonNull
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNull$$Type = ($JsonNull);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNull_ = $JsonNull$$Type;
}}
declare module "com.google.common.collect.BaseImmutableMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$AbstractMultimap, $AbstractMultimap$$Type} from "com.google.common.collect.AbstractMultimap"

export class $BaseImmutableMultimap<K, V> extends $AbstractMultimap<(K), (V)> {


public "remove"(key: any, value: any): boolean
public "put"(key: K, value: V): boolean
public "equals"(obj: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
public "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseImmutableMultimap$$Type<K, V> = ($BaseImmutableMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseImmutableMultimap_<K, V> = $BaseImmutableMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.FieldNamingPolicy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$FieldNamingStrategy, $FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"

export class $FieldNamingPolicy extends $Enum<($FieldNamingPolicy)> implements $FieldNamingStrategy {
static readonly "IDENTITY": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE_WITH_SPACES": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DOTS": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "UPPER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DASHES": $FieldNamingPolicy


public static "values"(): ($FieldNamingPolicy)[]
public static "valueOf"(arg0: string): $FieldNamingPolicy
public "translateName"(arg0: $Field$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingPolicy$$Type = (("identity") | ("upper_camel_case") | ("upper_camel_case_with_spaces") | ("upper_case_with_underscores") | ("lower_case_with_underscores") | ("lower_case_with_dashes") | ("lower_case_with_dots"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldNamingPolicy_ = $FieldNamingPolicy$$Type;
}}
declare module "com.google.common.reflect.TypeToken$TypeSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ForwardingSet, $ForwardingSet$$Type} from "com.google.common.collect.ForwardingSet"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"

export class $TypeToken$TypeSet extends $ForwardingSet<($TypeToken<(T)>)> implements $Serializable {


public "interfaces"(): $TypeToken$TypeSet<>
public "classes"(): $TypeToken$TypeSet<>
public "rawTypes"(): $Set<($Class<(T)>)>
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$TypeSet$$Type = ($TypeToken$TypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken$TypeSet_ = $TypeToken$TypeSet$$Type;
}}
declare module "com.google.common.cache.CacheStats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CacheStats {

constructor(hitCount: long, missCount: long, loadSuccessCount: long, loadExceptionCount: long, totalLoadTime: long, evictionCount: long)

public "equals"(object: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "minus"(other: $CacheStats$$Type): $CacheStats
public "plus"(other: $CacheStats$$Type): $CacheStats
public "missRate"(): double
public "hitCount"(): long
public "missCount"(): long
public "hitRate"(): double
public "loadCount"(): long
public "loadExceptionCount"(): long
public "totalLoadTime"(): long
public "averageLoadPenalty"(): double
public "evictionCount"(): long
public "loadSuccessCount"(): long
public "requestCount"(): long
public "loadExceptionRate"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CacheStats$$Type = ($CacheStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CacheStats_ = $CacheStats$$Type;
}}
declare module "com.google.common.collect.Multiset$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Multiset$Entry<E> {

 "equals"(o: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "getCount"(): integer
 "getElement"(): E
get "count"(): integer
get "element"(): E
}

export namespace $Multiset$Entry {
const probejs$$marker: never
}
export class $Multiset$Entry$$Static<E> implements $Multiset$Entry {


 "equals"(o: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "getCount"(): integer
 "getElement"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$Entry$$Type<E> = ($Multiset$Entry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiset$Entry_<E> = $Multiset$Entry$$Type<(E)>;
}}
declare module "com.google.common.collect.ImmutableMultimap$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableMultimap, $ImmutableMultimap$$Type} from "com.google.common.collect.ImmutableMultimap"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableMultimap$Builder<K, V> {

constructor()

public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableMultimap$Builder<(K), (V)>
public "put"(key: K, value: V): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(key: K, ...values: (V)[]): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(key: K, values: $Iterable$$Type<(V)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMultimap$Builder<(K), (V)>
public "build"(): $ImmutableMultimap<(K), (V)>
public "orderValuesBy"(valueComparator: $Comparator$$Type<(V)>): $ImmutableMultimap$Builder<(K), (V)>
public "orderKeysBy"(keyComparator: $Comparator$$Type<(K)>): $ImmutableMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$Builder$$Type<K, V> = ($ImmutableMultimap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultimap$Builder_<K, V> = $ImmutableMultimap$Builder$$Type<(K), (V)>;
}}
declare module "com.google.gson.Gson" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$GsonBuilder, $GsonBuilder$$Type} from "com.google.gson.GsonBuilder"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$Excluder, $Excluder$$Type} from "com.google.gson.internal.Excluder"
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory, $TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"
import {$FieldNamingStrategy, $FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"

export class $Gson {

constructor()

public "newBuilder"(): $GsonBuilder
public "toString"(): string
public "getAdapter"<T>(arg0: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "getAdapter"<T>(arg0: $Class$$Type<(T)>): $TypeAdapter<(T)>
/**
 * 
 * @deprecated
 */
public "excluder"(): $Excluder
public "toJsonTree"(arg0: any, arg1: $Type$$Type): $JsonElement
public "toJsonTree"(arg0: any): $JsonElement
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $Appendable$$Type): void
public "toJson"(arg0: $JsonElement$$Type, arg1: $Appendable$$Type): void
public "toJson"(arg0: $JsonElement$$Type, arg1: $JsonWriter$$Type): void
public "toJson"(arg0: any, arg1: $Appendable$$Type): void
public "toJson"(arg0: any): string
public "toJson"(arg0: any, arg1: $Type$$Type): string
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $JsonWriter$$Type): void
public "toJson"(arg0: $JsonElement$$Type): string
public "htmlSafe"(): boolean
public "fromJson"<T>(arg0: string, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: string, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: string, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "serializeNulls"(): boolean
public "getDelegateAdapter"<T>(arg0: $TypeAdapterFactory$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "newJsonReader"(arg0: $Reader$$Type): $JsonReader
public "newJsonWriter"(arg0: $Writer$$Type): $JsonWriter
public "fieldNamingStrategy"(): $FieldNamingStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gson$$Type = ($Gson);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gson_ = $Gson$$Type;
}}
declare module "com.google.gson.ToNumberStrategy" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"

export interface $ToNumberStrategy {

 "readNumber"(arg0: $JsonReader$$Type): number

(arg0: $JsonReader): number
}

export namespace $ToNumberStrategy {
const probejs$$marker: never
}
export class $ToNumberStrategy$$Static implements $ToNumberStrategy {


 "readNumber"(arg0: $JsonReader$$Type): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToNumberStrategy$$Type = ((arg0: $JsonReader) => number);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToNumberStrategy_ = $ToNumberStrategy$$Type;
}}
declare module "com.google.gson.JsonDeserializationContext" {
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export interface $JsonDeserializationContext {

 "deserialize"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T

(arg0: $JsonElement, arg1: $Type): T
}

export namespace $JsonDeserializationContext {
const probejs$$marker: never
}
export class $JsonDeserializationContext$$Static implements $JsonDeserializationContext {


 "deserialize"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializationContext$$Type = ((arg0: $JsonElement, arg1: $Type) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonDeserializationContext_ = $JsonDeserializationContext$$Type;
}}
declare module "com.google.common.collect.ImmutableSet$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$$Type} from "com.google.common.collect.ImmutableCollection$Builder"

export class $ImmutableSet$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "add"(element: E): $ImmutableSet$Builder<(E)>
public "add"(...elements: (E)[]): $ImmutableSet$Builder<(E)>
public "addAll"(elements: $Iterator$$Type<(any)>): $ImmutableCollection$Builder<(any)>
public "addAll"(elements: $Iterable$$Type<(any)>): $ImmutableCollection$Builder<(any)>
public "build"(): $ImmutableCollection<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$Builder$$Type<E> = ($ImmutableSet$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSet$Builder_<E> = $ImmutableSet$Builder$$Type<(E)>;
}}
declare module "com.google.gson.FieldNamingStrategy" {
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export interface $FieldNamingStrategy {

 "translateName"(arg0: $Field$$Type): string

(arg0: $Field): string
}

export namespace $FieldNamingStrategy {
const probejs$$marker: never
}
export class $FieldNamingStrategy$$Static implements $FieldNamingStrategy {


 "translateName"(arg0: $Field$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingStrategy$$Type = ((arg0: $Field) => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldNamingStrategy_ = $FieldNamingStrategy$$Type;
}}
declare module "com.google.common.collect.SetMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"

export interface $SetMultimap<K, V> extends $Multimap<(K), (V)> {

 "get"(key: K): $Set<(V)>
 "equals"(obj: any): boolean
 "entries"(): $Collection<(any)>
 "removeAll"(key: any): $Set<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Set<(V)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "put"(key: K, value: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}

export namespace $SetMultimap {
const probejs$$marker: never
}
export class $SetMultimap$$Static<K, V> implements $SetMultimap {


 "get"(key: K): $Set<(V)>
 "equals"(obj: any): boolean
 "entries"(): $Collection<(any)>
 "removeAll"(key: any): $Set<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Set<(V)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "put"(key: K, value: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "containsEntry"(key: any, value: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetMultimap$$Type<K, V> = ($SetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetMultimap_<K, V> = $SetMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.JsonElement" {
import {$JsonPrimitive, $JsonPrimitive$$Type} from "com.google.gson.JsonPrimitive"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$JsonNull, $JsonNull$$Type} from "com.google.gson.JsonNull"

export class $JsonElement {

/**
 * 
 * @deprecated
 */
constructor()

public "toString"(): string
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): string
public "getAsFloat"(): float
public "getAsShort"(): short
public "isJsonNull"(): boolean
public "getAsByte"(): byte
public "deepCopy"(): $JsonElement
public "getAsJsonObject"(): $JsonObject
public "getAsJsonArray"(): $JsonArray
public "getAsJsonPrimitive"(): $JsonPrimitive
public "isJsonArray"(): boolean
public "isJsonObject"(): boolean
public "isJsonPrimitive"(): boolean
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsJsonNull"(): $JsonNull
public "getAsNumber"(): number
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): string
get "asFloat"(): float
get "asShort"(): short
get "jsonNull"(): boolean
get "asByte"(): byte
get "asJsonObject"(): $JsonObject
get "asJsonArray"(): $JsonArray
get "asJsonPrimitive"(): $JsonPrimitive
get "jsonArray"(): boolean
get "jsonObject"(): boolean
get "jsonPrimitive"(): boolean
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asCharacter"(): character
get "asJsonNull"(): $JsonNull
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$$Type = ($JsonObject$$Type) | ($JsonArray$$Type) | ($JsonPrimitive$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonElement_ = $JsonElement$$Type;
}}
declare module "com.google.common.collect.ImmutableSetMultimap$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableMultimap, $ImmutableMultimap$$Type} from "com.google.common.collect.ImmutableMultimap"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$$Type} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableSetMultimap$Builder<K, V> extends $ImmutableMultimap$Builder<(K), (V)> {

constructor()

public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableSetMultimap$Builder<(K), (V)>
public "put"(key: any, value: any): $ImmutableMultimap$Builder<(any), (any)>
public "putAll"(entries: $Iterable$$Type<(any)>): $ImmutableMultimap$Builder<(any), (any)>
public "putAll"(key: any, values: $Iterable$$Type<(any)>): $ImmutableMultimap$Builder<(any), (any)>
public "putAll"(key: any, values: (any)[]): $ImmutableMultimap$Builder<(any), (any)>
public "putAll"(multimap: $Multimap$$Type<(any), (any)>): $ImmutableMultimap$Builder<(any), (any)>
public "build"(): $ImmutableMultimap<(any), (any)>
public "orderValuesBy"(valueComparator: $Comparator$$Type<(any)>): $ImmutableMultimap$Builder<(any), (any)>
public "orderKeysBy"(keyComparator: $Comparator$$Type<(any)>): $ImmutableMultimap$Builder<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$Builder$$Type<K, V> = ($ImmutableSetMultimap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSetMultimap$Builder_<K, V> = $ImmutableSetMultimap$Builder$$Type<(K), (V)>;
}}
declare module "com.google.common.reflect.TypeParameter" {
import {$TypeCapture, $TypeCapture$$Type} from "com.google.common.reflect.TypeCapture"

export class $TypeParameter<T> extends $TypeCapture<(T)> {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeParameter$$Type<T> = ($TypeParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeParameter_<T> = $TypeParameter$$Type<(T)>;
}}
declare module "com.google.common.collect.UnmodifiableIterator" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $UnmodifiableIterator<E> implements $Iterator<(E)> {


/**
 * 
 * @deprecated
 */
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
public "hasNext"(): boolean
public "next"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableIterator$$Type<E> = ($UnmodifiableIterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableIterator_<E> = $UnmodifiableIterator$$Type<(E)>;
}}
declare module "com.google.gson.GsonBuilder" {
import {$ExclusionStrategy, $ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$LongSerializationPolicy, $LongSerializationPolicy$$Type} from "com.google.gson.LongSerializationPolicy"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$ToNumberStrategy, $ToNumberStrategy$$Type} from "com.google.gson.ToNumberStrategy"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapterFactory, $TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$ReflectionAccessFilter, $ReflectionAccessFilter$$Type} from "com.google.gson.ReflectionAccessFilter"
import {$FieldNamingStrategy, $FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"
import {$FieldNamingPolicy, $FieldNamingPolicy$$Type} from "com.google.gson.FieldNamingPolicy"

export class $GsonBuilder {

constructor()

public "create"(): $Gson
public "setLenient"(): $GsonBuilder
public "setVersion"(arg0: double): $GsonBuilder
public "registerTypeHierarchyAdapter"(arg0: $Class$$Type<(any)>, arg1: any): $GsonBuilder
public "enableComplexMapKeySerialization"(): $GsonBuilder
public "addSerializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "disableInnerClassSerialization"(): $GsonBuilder
public "excludeFieldsWithoutExposeAnnotation"(): $GsonBuilder
public "addDeserializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "serializeSpecialFloatingPointValues"(): $GsonBuilder
public "registerTypeAdapter"(arg0: $Type$$Type, arg1: any): $GsonBuilder
public "generateNonExecutableJson"(): $GsonBuilder
public "excludeFieldsWithModifiers"(...arg0: (integer)[]): $GsonBuilder
public "serializeNulls"(): $GsonBuilder
public "setPrettyPrinting"(): $GsonBuilder
public "setDateFormat"(arg0: integer): $GsonBuilder
public "setDateFormat"(arg0: string): $GsonBuilder
public "setDateFormat"(arg0: integer, arg1: integer): $GsonBuilder
public "disableJdkUnsafe"(): $GsonBuilder
public "registerTypeAdapterFactory"(arg0: $TypeAdapterFactory$$Type): $GsonBuilder
public "setFieldNamingStrategy"(arg0: $FieldNamingStrategy$$Type): $GsonBuilder
public "setFieldNamingPolicy"(arg0: $FieldNamingPolicy$$Type): $GsonBuilder
public "setExclusionStrategies"(...arg0: ($ExclusionStrategy$$Type)[]): $GsonBuilder
public "setObjectToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "setLongSerializationPolicy"(arg0: $LongSerializationPolicy$$Type): $GsonBuilder
public "setNumberToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "addReflectionAccessFilter"(arg0: $ReflectionAccessFilter$$Type): $GsonBuilder
public "disableHtmlEscaping"(): $GsonBuilder
set "version"(value: double)
set "dateFormat"(value: integer)
set "dateFormat"(value: string)
set "fieldNamingStrategy"(value: $FieldNamingStrategy$$Type)
set "fieldNamingPolicy"(value: $FieldNamingPolicy$$Type)
set "exclusionStrategies"(value: ($ExclusionStrategy$$Type)[])
set "objectToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "longSerializationPolicy"(value: $LongSerializationPolicy$$Type)
set "numberToNumberStrategy"(value: $ToNumberStrategy$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GsonBuilder$$Type = ($GsonBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GsonBuilder_ = $GsonBuilder$$Type;
}}
declare module "com.google.gson.ReflectionAccessFilter" {
import {$ReflectionAccessFilter$FilterResult, $ReflectionAccessFilter$FilterResult$$Type} from "com.google.gson.ReflectionAccessFilter$FilterResult"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $ReflectionAccessFilter {

 "check"(arg0: $Class$$Type<(any)>): $ReflectionAccessFilter$FilterResult

(arg0: $Class<(any)>): $ReflectionAccessFilter$FilterResult$$Type
}

export namespace $ReflectionAccessFilter {
const BLOCK_INACCESSIBLE_JAVA: $ReflectionAccessFilter
const BLOCK_ALL_ANDROID: $ReflectionAccessFilter
const BLOCK_ALL_PLATFORM: $ReflectionAccessFilter
const BLOCK_ALL_JAVA: $ReflectionAccessFilter
const probejs$$marker: never
}
export class $ReflectionAccessFilter$$Static implements $ReflectionAccessFilter {
static readonly "BLOCK_INACCESSIBLE_JAVA": $ReflectionAccessFilter
static readonly "BLOCK_ALL_ANDROID": $ReflectionAccessFilter
static readonly "BLOCK_ALL_PLATFORM": $ReflectionAccessFilter
static readonly "BLOCK_ALL_JAVA": $ReflectionAccessFilter


 "check"(arg0: $Class$$Type<(any)>): $ReflectionAccessFilter$FilterResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$$Type = ((arg0: $Class<(any)>) => $ReflectionAccessFilter$FilterResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionAccessFilter_ = $ReflectionAccessFilter$$Type;
}}
declare module "com.google.gson.JsonArray" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $JsonArray extends $JsonElement implements $Iterable<($JsonElement)> {

constructor()
constructor(arg0: integer)

public "remove"(arg0: integer): $JsonElement
public "remove"(arg0: $JsonElement$$Type): boolean
public "size"(): integer
public "get"(arg0: integer): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: number): void
public "add"(arg0: boolean): void
public "add"(arg0: string): void
public "add"(arg0: $JsonElement$$Type): void
public "add"(arg0: character): void
public "iterator"(): $Iterator<($JsonElement)>
public "contains"(arg0: $JsonElement$$Type): boolean
public "addAll"(arg0: $JsonArray$$Type): void
public "set"(arg0: integer, arg1: $JsonElement$$Type): $JsonElement
public "asList"(): $List<($JsonElement)>
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): string
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "deepCopy"(): $JsonElement
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsNumber"(): number
public "spliterator"(): $Spliterator<($JsonElement)>
public "forEach"(arg0: $Consumer$$Type<($JsonElement)>): void
[Symbol.iterator](): IterableIterator<$JsonElement>;
get "empty"(): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): string
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asCharacter"(): character
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonArray$$Type = ((any)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonArray_ = $JsonArray$$Type;
}}
declare module "com.google.common.collect.ImmutableMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$BaseImmutableMultimap, $BaseImmutableMultimap$$Type} from "com.google.common.collect.BaseImmutableMultimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$$Type} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"

export class $ImmutableMultimap<K, V> extends $BaseImmutableMultimap<(K), (V)> implements $Serializable {


/**
 * 
 * @deprecated
 */
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: any): $Collection<(any)>
/**
 * 
 * @deprecated
 */
public "put"(key: K, value: V): boolean
public "equals"(object: any): boolean
public "toString"(): string
public "values"(): $ImmutableCollection<(V)>
public "hashCode"(): integer
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMultimap<(K), (V)>
public static "copyOf"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $ImmutableMultimap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
public static "of"<K, V>(): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMultimap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
/**
 * 
 * @deprecated
 */
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(any)>
public "keySet"(): $Set<(any)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<(any)>
/**
 * 
 * @deprecated
 */
public "removeAll"(key: any): $Collection<(any)>
public "asMap"(): $ImmutableMap<(K), ($Collection<(V)>)>
public "inverse"(): $ImmutableMultimap<(V), (K)>
/**
 * 
 * @deprecated
 */
public "replaceValues"(key: any, values: $Iterable$$Type<(any)>): $Collection<(any)>
public "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$$Type<K, V> = ($ImmutableMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultimap_<K, V> = $ImmutableMultimap$$Type<(K), (V)>;
}}
declare module "com.google.common.cache.Cache" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats, $CacheStats$$Type} from "com.google.common.cache.CacheStats"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$ConcurrentMap, $ConcurrentMap$$Type} from "java.util.concurrent.ConcurrentMap"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export interface $Cache<K, V> {

 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "asMap"(): $ConcurrentMap<(K), (V)>
 "stats"(): $CacheStats
}

export namespace $Cache {
const probejs$$marker: never
}
export class $Cache$$Static<K, V> implements $Cache {


 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "asMap"(): $ConcurrentMap<(K), (V)>
 "stats"(): $CacheStats
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cache$$Type<K, V> = ($Cache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cache_<K, V> = $Cache$$Type<(K), (V)>;
}}
declare module "com.google.gson.internal.Excluder" {
import {$ExclusionStrategy, $ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory, $TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export class $Excluder implements $TypeAdapterFactory, $Cloneable {
static readonly "DEFAULT": $Excluder

constructor()

public "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "disableInnerClassSerialization"(): $Excluder
public "excludeFieldsWithoutExposeAnnotation"(): $Excluder
public "excludeField"(arg0: $Field$$Type, arg1: boolean): boolean
public "excludeClass"(arg0: $Class$$Type<(any)>, arg1: boolean): boolean
public "withModifiers"(...arg0: (integer)[]): $Excluder
public "withVersion"(arg0: double): $Excluder
public "withExclusionStrategy"(arg0: $ExclusionStrategy$$Type, arg1: boolean, arg2: boolean): $Excluder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excluder$$Type = ($Excluder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Excluder_ = $Excluder$$Type;
}}
declare module "com.google.common.collect.ForwardingMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ForwardingObject, $ForwardingObject$$Type} from "com.google.common.collect.ForwardingObject"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ForwardingMultimap<K, V> extends $ForwardingObject implements $Multimap<(K), (V)> {


public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: K): $Collection<(V)>
public "put"(key: K, value: V): boolean
public "equals"(object: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "removeAll"(key: any): $Collection<(V)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
public "containsEntry"(key: any, value: any): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingMultimap$$Type<K, V> = ($ForwardingMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingMultimap_<K, V> = $ForwardingMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.stream.JsonToken" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $JsonToken extends $Enum<($JsonToken)> {
static readonly "NUMBER": $JsonToken
static readonly "NULL": $JsonToken
static readonly "END_DOCUMENT": $JsonToken
static readonly "BEGIN_OBJECT": $JsonToken
static readonly "END_ARRAY": $JsonToken
static readonly "STRING": $JsonToken
static readonly "END_OBJECT": $JsonToken
static readonly "BEGIN_ARRAY": $JsonToken
static readonly "BOOLEAN": $JsonToken
static readonly "NAME": $JsonToken


public static "values"(): ($JsonToken)[]
public static "valueOf"(arg0: string): $JsonToken
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonToken$$Type = (("begin_array") | ("end_array") | ("begin_object") | ("end_object") | ("name") | ("string") | ("number") | ("boolean") | ("null") | ("end_document"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonToken_ = $JsonToken$$Type;
}}
declare module "com.google.common.collect.ImmutableCollection" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$UnmodifiableIterator, $UnmodifiableIterator$$Type} from "com.google.common.collect.UnmodifiableIterator"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$AbstractCollection, $AbstractCollection$$Type} from "java.util.AbstractCollection"

export class $ImmutableCollection<E> extends $AbstractCollection<(E)> implements $Serializable {


/**
 * 
 * @deprecated
 */
public "remove"(object: any): boolean
/**
 * 
 * @deprecated
 */
public "clear"(): void
/**
 * 
 * @deprecated
 */
public "add"(e: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(other: (T)[]): (T)[]
public "iterator"(): $UnmodifiableIterator<(E)>
public "contains"(object: any): boolean
public "spliterator"(): $Spliterator<(E)>
/**
 * 
 * @deprecated
 */
public "addAll"(newElements: $Collection$$Type<(E)>): boolean
public "asList"(): $ImmutableList<(E)>
/**
 * 
 * @deprecated
 */
public "removeIf"(filter: $Predicate$$Type<(E)>): boolean
/**
 * 
 * @deprecated
 */
public "removeAll"(oldElements: $Collection$$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "retainAll"(elementsToKeep: $Collection$$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$$Type<E> = ($ImmutableCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableCollection_<E> = $ImmutableCollection$$Type<(E)>;
}}
declare module "com.google.gson.LongSerializationPolicy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $LongSerializationPolicy extends $Enum<($LongSerializationPolicy)> {
static readonly "STRING": $LongSerializationPolicy
static readonly "DEFAULT": $LongSerializationPolicy


public static "values"(): ($LongSerializationPolicy)[]
public static "valueOf"(arg0: string): $LongSerializationPolicy
public "serialize"(arg0: long): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSerializationPolicy$$Type = (("default") | ("string"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSerializationPolicy_ = $LongSerializationPolicy$$Type;
}}
declare module "com.google.common.collect.ForwardingObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ForwardingObject {


public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingObject$$Type = ($ForwardingObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingObject_ = $ForwardingObject$$Type;
}}
declare module "com.google.common.collect.ImmutableCollection$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"

export class $ImmutableCollection$Builder<E> {


public "add"(element: E): $ImmutableCollection$Builder<(E)>
public "add"(...elements: (E)[]): $ImmutableCollection$Builder<(E)>
public "addAll"(elements: $Iterator$$Type<(E)>): $ImmutableCollection$Builder<(E)>
public "addAll"(elements: $Iterable$$Type<(E)>): $ImmutableCollection$Builder<(E)>
public "build"(): $ImmutableCollection<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$Builder$$Type<E> = ($ImmutableCollection$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableCollection$Builder_<E> = $ImmutableCollection$Builder$$Type<(E)>;
}}
declare module "com.google.common.reflect.Invokable" {
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"
import {$Member, $Member$$Type} from "java.lang.reflect.Member"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Parameter, $Parameter$$Type} from "com.google.common.reflect.Parameter"

export class $Invokable<T, R> implements $AnnotatedElement, $Member {


public "invoke"(receiver: T, ...args: (any)[]): R
public "getName"(): string
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public static "from"<T>(arg0: $Constructor$$Type<(T)>): $Invokable<(T), (T)>
public static "from"(method: $Method$$Type): $Invokable<(any), (any)>
public "getTypeParameters"(): ($TypeVariable<(any)>)[]
public "getReturnType"(): $TypeToken<(R)>
public "isSynthetic"(): boolean
public "isFinal"(): boolean
public "isStatic"(): boolean
public "isAnnotationPresent"(annotationClass: $Class$$Type<($Annotation$$Type)>): boolean
public "getDeclaringClass"(): $Class<(T)>
public "getAnnotation"<A extends $Annotation>(annotationClass: $Class$$Type<(A)>): A
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isPublic"(): boolean
public "setAccessible"(flag: boolean): void
public "isProtected"(): boolean
public "trySetAccessible"(): boolean
public "isAccessible"(): boolean
public "isVarArgs"(): boolean
public "getExceptionTypes"(): $ImmutableList<($TypeToken<($Throwable)>)>
public "getAnnotatedReturnType"(): $AnnotatedType
public "getParameters"(): $ImmutableList<($Parameter)>
public "isAbstract"(): boolean
public "isPrivate"(): boolean
public "isNative"(): boolean
public "isSynchronized"(): boolean
public "getOwnerType"(): $TypeToken<(T)>
public "isOverridable"(): boolean
public "isPackagePrivate"(): boolean
public "returning"<R1 extends R>(returnType: $TypeToken$$Type<(R1)>): $Invokable<(T), (R1)>
public "returning"<R1 extends R>(returnType: $Class$$Type<(R1)>): $Invokable<(T), (R1)>
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "accessFlags"(): $Set<($AccessFlag)>
get "name"(): string
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<(any)>)[]
get "returnType"(): $TypeToken<(R)>
get "synthetic"(): boolean
get "final"(): boolean
get "static"(): boolean
get "declaringClass"(): $Class<(T)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "public"(): boolean
set "accessible"(value: boolean)
get "protected"(): boolean
get "accessible"(): boolean
get "varArgs"(): boolean
get "exceptionTypes"(): $ImmutableList<($TypeToken<($Throwable)>)>
get "annotatedReturnType"(): $AnnotatedType
get "parameters"(): $ImmutableList<($Parameter)>
get "abstract"(): boolean
get "private"(): boolean
get "native"(): boolean
get "synchronized"(): boolean
get "ownerType"(): $TypeToken<(T)>
get "overridable"(): boolean
get "packagePrivate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Invokable$$Type<T, R> = ($Invokable<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Invokable_<T, R> = $Invokable$$Type<(T), (R)>;
}}
declare module "com.google.gson.TypeAdapterFactory" {
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export interface $TypeAdapterFactory {

 "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>

(arg0: $Gson, arg1: $TypeToken<(T)>): $TypeAdapter$$Type<(T)>
}

export namespace $TypeAdapterFactory {
const probejs$$marker: never
}
export class $TypeAdapterFactory$$Static implements $TypeAdapterFactory {


 "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapterFactory$$Type = ((arg0: $Gson, arg1: $TypeToken<(T)>) => $TypeAdapter$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAdapterFactory_ = $TypeAdapterFactory$$Type;
}}
declare module "com.google.common.reflect.TypeToken" {
import {$TypeCapture, $TypeCapture$$Type} from "com.google.common.reflect.TypeCapture"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TypeParameter, $TypeParameter$$Type} from "com.google.common.reflect.TypeParameter"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Invokable, $Invokable$$Type} from "com.google.common.reflect.Invokable"
import {$TypeToken$TypeSet, $TypeToken$TypeSet$$Type} from "com.google.common.reflect.TypeToken$TypeSet"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"

export class $TypeToken<T> extends $TypeCapture<(T)> implements $Serializable {


public "equals"(o: any): boolean
public "toString"(): string
public "method"(method: $Method$$Type): $Invokable<(T), (any)>
public "hashCode"(): integer
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "wrap"(): $TypeToken<(T)>
public static "of"<T>(type: $Class$$Type<(T)>): $TypeToken<(T)>
public static "of"(type: $Type$$Type): $TypeToken<(any)>
public "getComponentType"(): $TypeToken<(any)>
public "constructor"(arg0: $Constructor$$Type<(any)>): $Invokable<(T), (T)>
public "getType"(): $Type
public "unwrap"(): $TypeToken<(T)>
public "getRawType"(): $Class<(T)>
public "where"<X>(typeParam: $TypeParameter$$Type<(X)>, typeArg: $TypeToken$$Type<(X)>): $TypeToken<(T)>
public "where"<X>(typeParam: $TypeParameter$$Type<(X)>, typeArg: $Class$$Type<(X)>): $TypeToken<(T)>
public "resolveType"(type: $Type$$Type): $TypeToken<(any)>
public "isSubtypeOf"(supertype: $Type$$Type): boolean
public "isSubtypeOf"(type: $TypeToken$$Type<(any)>): boolean
public "getTypes"(): $TypeToken$TypeSet<>
public "getSupertype"(superclass: $Class$$Type<(T)>): $TypeToken<(T)>
public "getSubtype"(subclass: $Class$$Type<(any)>): $TypeToken<(T)>
public "isSupertypeOf"(type: $Type$$Type): boolean
public "isSupertypeOf"(type: $TypeToken$$Type<(any)>): boolean
get "array"(): boolean
get "primitive"(): boolean
get "componentType"(): $TypeToken<(any)>
get "type"(): $Type
get "rawType"(): $Class<(T)>
get "types"(): $TypeToken$TypeSet<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$$Type<T> = ($TypeToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken_<T> = $TypeToken$$Type<(T)>;
}}
declare module "com.google.common.collect.BiMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $BiMap<K, V> extends $Map<(K), (V)> {

 "put"(key: K, value: V): V
 "values"(): $Collection<(any)>
 "putAll"(map: $Map$$Type<(K), (V)>): void
 "forcePut"(key: K, value: V): V
 "inverse"(): $BiMap<(V), (K)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
[index: string | number]: V
get "empty"(): boolean
}

export namespace $BiMap {
function copyOf<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
const probejs$$marker: never
}
export class $BiMap$$Static<K, V> implements $BiMap {


 "put"(key: K, value: V): V
 "values"(): $Collection<(any)>
 "putAll"(map: $Map$$Type<(K), (V)>): void
 "forcePut"(key: K, value: V): V
 "inverse"(): $BiMap<(V), (K)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiMap$$Type<K, V> = ($BiMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiMap_<K, V> = $BiMap$$Type<(K), (V)>;
}}
declare module "com.google.gson.JsonObject" {
import {$JsonPrimitive, $JsonPrimitive$$Type} from "com.google.gson.JsonPrimitive"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Set, $Set$$Type} from "java.util.Set"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $JsonObject extends $JsonElement {

constructor()

public "remove"(arg0: string): $JsonElement
public "size"(): integer
public "get"(arg0: string): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: string, arg1: $JsonElement$$Type): void
public "entrySet"(): $Set<($Map$Entry<(string), ($JsonElement)>)>
public "keySet"(): $Set<(string)>
public "has"(arg0: string): boolean
public "addProperty"(arg0: string, arg1: number): void
public "addProperty"(arg0: string, arg1: boolean): void
public "addProperty"(arg0: string, arg1: character): void
public "addProperty"(arg0: string, arg1: string): void
public "asMap"(): $Map<(string), ($JsonElement)>
public "deepCopy"(): $JsonElement
public "getAsJsonObject"(arg0: string): $JsonObject
public "getAsJsonArray"(arg0: string): $JsonArray
public "getAsJsonPrimitive"(arg0: string): $JsonPrimitive
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObject$$Type = (object);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObject_ = $JsonObject$$Type;
}}
