declare module "com.electronwill.nightconfig.core.io.ConfigParser" {
import {$FileNotFoundAction, $FileNotFoundAction$$Type} from "com.electronwill.nightconfig.core.file.FileNotFoundAction"
import {$ParsingMode, $ParsingMode$$Type} from "com.electronwill.nightconfig.core.io.ParsingMode"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$File, $File$$Type} from "java.io.File"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$URL, $URL$$Type} from "java.net.URL"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $ConfigParser<C extends $Config> {

 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $URL$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $URL$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: string, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: string): C
 "parse"(arg0: $Reader$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $Reader$$Type): C
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $Charset$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Charset$$Type): C
 "parse"(arg0: $InputStream$$Type): C
 "getFormat"(): $ConfigFormat<(C)>
get "format"(): $ConfigFormat<(C)>
}

export namespace $ConfigParser {
const probejs$$marker: never
}
export class $ConfigParser$$Static<C extends $Config> implements $ConfigParser {


 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $URL$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $URL$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: string, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: string): C
 "parse"(arg0: $Reader$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $Reader$$Type): C
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $Charset$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Charset$$Type): C
 "parse"(arg0: $InputStream$$Type): C
 "getFormat"(): $ConfigFormat<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigParser$$Type<C> = ($ConfigParser<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigParser_<C> = $ConfigParser$$Type<(C)>;
}}
declare module "com.electronwill.nightconfig.core.CommentedConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$CommentedConfig$Entry, $CommentedConfig$Entry$$Type} from "com.electronwill.nightconfig.core.CommentedConfig$Entry"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $CommentedConfig extends $UnmodifiableCommentedConfig, $Config {

 "entrySet"(): $Set<($CommentedConfig$Entry)>
 "checked"(): $Config
 "setComment"(arg0: string, arg1: string): string
 "setComment"(arg0: $List$$Type<(string)>, arg1: string): string
 "unmodifiable"(): $UnmodifiableConfig
 "createSubConfig"(): $CommentedConfig
 "putAllComments"(arg0: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "putAllComments"(arg0: $UnmodifiableCommentedConfig$$Type): void
 "removeComment"(arg0: string): string
 "removeComment"(arg0: $List$$Type<(string)>): string
 "clearComments"(): void
 "commentMap"(): $Map<(string), (string)>
 "getComment"(arg0: string): string
 "getComment"(arg0: $List$$Type<(string)>): string
 "getOptionalComment"(arg0: string): $Optional<(string)>
 "getOptionalComment"(arg0: $List$$Type<(string)>): $Optional<(string)>
 "getComments"(arg0: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
 "containsComment"(arg0: $List$$Type<(string)>): boolean
 "containsComment"(arg0: string): boolean
 "remove"<T>(arg0: $List$$Type<(string)>): T
 "remove"<T>(arg0: string): T
 "update"(arg0: string, arg1: any): void
 "update"(arg0: $List$$Type<(string)>, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(string)>, arg1: any): boolean
 "add"(arg0: string, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: string, arg1: any): T
 "set"<T>(arg0: $List$$Type<(string)>, arg1: any): T
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "valueMap"(): $Map<(string), (any)>
 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
get "comments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
get "empty"(): boolean
}

export namespace $CommentedConfig {
function wrap(arg0: $Map$$Type<(string), (any)>, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function of(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function of(arg0: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg1: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg2: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function fake(arg0: $Config$$Type): $CommentedConfig
function ofConcurrent(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function inMemoryConcurrent(): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function inMemory(): $CommentedConfig
function fake(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
function inMemoryUniversal(): $Config
function isInsertionOrderPreserved(): boolean
function setInsertionOrderPreserved(arg0: boolean): void
function getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(string), (T)>)>
function getDefaultMapCreator<T>(arg0: boolean): $Supplier<($Map<(string), (T)>)>
function inMemoryUniversalConcurrent(): $Config
const probejs$$marker: never
}
export class $CommentedConfig$$Static implements $CommentedConfig {


static "wrap"(arg0: $Map$$Type<(string), (any)>, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "of"(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
static "of"(arg0: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg1: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
 "entrySet"(): $Set<($CommentedConfig$Entry)>
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg2: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
 "checked"(): $Config
 "setComment"(arg0: string, arg1: string): string
 "setComment"(arg0: $List$$Type<(string)>, arg1: string): string
static "fake"(arg0: $Config$$Type): $CommentedConfig
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
static "ofConcurrent"(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "inMemoryConcurrent"(): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
 "createSubConfig"(): $CommentedConfig
 "putAllComments"(arg0: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "putAllComments"(arg0: $UnmodifiableCommentedConfig$$Type): void
 "removeComment"(arg0: string): string
 "removeComment"(arg0: $List$$Type<(string)>): string
 "clearComments"(): void
static "inMemory"(): $CommentedConfig
 "commentMap"(): $Map<(string), (string)>
 "getComment"(arg0: string): string
 "getComment"(arg0: $List$$Type<(string)>): string
static "fake"(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
 "getOptionalComment"(arg0: string): $Optional<(string)>
 "getOptionalComment"(arg0: $List$$Type<(string)>): $Optional<(string)>
 "getComments"(arg0: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
 "containsComment"(arg0: $List$$Type<(string)>): boolean
 "containsComment"(arg0: string): boolean
 "remove"<T>(arg0: $List$$Type<(string)>): T
 "remove"<T>(arg0: string): T
 "update"(arg0: string, arg1: any): void
 "update"(arg0: $List$$Type<(string)>, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(string)>, arg1: any): boolean
 "add"(arg0: string, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: string, arg1: any): T
 "set"<T>(arg0: $List$$Type<(string)>, arg1: any): T
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
static "inMemoryUniversal"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "setInsertionOrderPreserved"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(string), (T)>)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean): $Supplier<($Map<(string), (T)>)>
/**
 * 
 * @deprecated
 */
static "inMemoryUniversalConcurrent"(): $Config
 "valueMap"(): $Map<(string), (any)>
 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$$Type = ($CommentedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentedConfig_ = $CommentedConfig$$Type;
}}
declare module "com.electronwill.nightconfig.core.Config" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$Config$Entry, $Config$Entry$$Type} from "com.electronwill.nightconfig.core.Config$Entry"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $Config extends $UnmodifiableConfig {

 "remove"<T>(arg0: $List$$Type<(string)>): T
 "remove"<T>(arg0: string): T
 "update"(arg0: string, arg1: any): void
 "update"(arg0: $List$$Type<(string)>, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(string)>, arg1: any): boolean
 "add"(arg0: string, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "entrySet"(): $Set<($Config$Entry)>
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: string, arg1: any): T
 "set"<T>(arg0: $List$$Type<(string)>, arg1: any): T
 "checked"(): $Config
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "unmodifiable"(): $UnmodifiableConfig
 "createSubConfig"(): $Config
 "valueMap"(): $Map<(string), (any)>
 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
get "empty"(): boolean
}

export namespace $Config {
function wrap(arg0: $Map$$Type<(string), (any)>, arg1: $ConfigFormat$$Type<(any)>): $Config
function of(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
function of(arg0: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg1: $ConfigFormat$$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type): $Config
function ofConcurrent(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
function inMemoryUniversal(): $Config
function inMemoryConcurrent(): $Config
function concurrentCopy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
function concurrentCopy(arg0: $UnmodifiableConfig$$Type): $Config
function isInsertionOrderPreserved(): boolean
function setInsertionOrderPreserved(arg0: boolean): void
function getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(string), (T)>)>
function getDefaultMapCreator<T>(arg0: boolean): $Supplier<($Map<(string), (T)>)>
function inMemory(): $Config
function inMemoryUniversalConcurrent(): $Config
const probejs$$marker: never
}
export class $Config$$Static implements $Config {


 "remove"<T>(arg0: $List$$Type<(string)>): T
 "remove"<T>(arg0: string): T
 "update"(arg0: string, arg1: any): void
 "update"(arg0: $List$$Type<(string)>, arg1: any): void
 "clear"(): void
static "wrap"(arg0: $Map$$Type<(string), (any)>, arg1: $ConfigFormat$$Type<(any)>): $Config
 "add"(arg0: $List$$Type<(string)>, arg1: any): boolean
 "add"(arg0: string, arg1: any): boolean
static "of"(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
static "of"(arg0: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg1: $ConfigFormat$$Type<(any)>): $Config
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "entrySet"(): $Set<($Config$Entry)>
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: string, arg1: any): T
 "set"<T>(arg0: $List$$Type<(string)>, arg1: any): T
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(string), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type): $Config
 "checked"(): $Config
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
static "ofConcurrent"(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
static "inMemoryUniversal"(): $Config
/**
 * 
 * @deprecated
 */
static "inMemoryConcurrent"(): $Config
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type): $Config
 "createSubConfig"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "setInsertionOrderPreserved"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(string), (T)>)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean): $Supplier<($Map<(string), (T)>)>
static "inMemory"(): $Config
/**
 * 
 * @deprecated
 */
static "inMemoryUniversalConcurrent"(): $Config
 "valueMap"(): $Map<(string), (any)>
 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode" {
import {$Map, $Map$$Type} from "java.util.Map"

export class $UnmodifiableCommentedConfig$CommentNode {

constructor(arg0: string, arg1: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>)

public "getComment"(): string
public "getChildren"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
get "comment"(): string
get "children"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$CommentNode$$Type = ($UnmodifiableCommentedConfig$CommentNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig$CommentNode_ = $UnmodifiableCommentedConfig$CommentNode$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$UnmodifiableConfig$Entry, $UnmodifiableConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $UnmodifiableCommentedConfig$Entry extends $UnmodifiableConfig$Entry {

 "getComment"(): string
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
get "comment"(): string
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): string
get "null"(): boolean
get "optionalLong"(): $OptionalLong
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export namespace $UnmodifiableCommentedConfig$Entry {
const probejs$$marker: never
}
export class $UnmodifiableCommentedConfig$Entry$$Static implements $UnmodifiableCommentedConfig$Entry {


 "getComment"(): string
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$Entry$$Type = ($UnmodifiableCommentedConfig$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig$Entry_ = $UnmodifiableCommentedConfig$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.EnumGetMethod" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $EnumGetMethod extends $Enum<($EnumGetMethod)> {
static readonly "NAME_IGNORECASE": $EnumGetMethod
static readonly "ORDINAL_OR_NAME": $EnumGetMethod
static readonly "ORDINAL_OR_NAME_IGNORECASE": $EnumGetMethod
static readonly "NAME": $EnumGetMethod


public "get"<T extends $Enum<(T)>>(arg0: any, arg1: $Class$$Type<(T)>): T
public static "values"(): ($EnumGetMethod)[]
public static "valueOf"(arg0: string): $EnumGetMethod
public "validate"<T extends $Enum<(T)>>(arg0: any, arg1: $Class$$Type<(T)>): boolean
public "isCaseSensitive"(): boolean
public "isOrdinalOk"(): boolean
get "caseSensitive"(): boolean
get "ordinalOk"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumGetMethod$$Type = (("name") | ("name_ignorecase") | ("ordinal_or_name") | ("ordinal_or_name_ignorecase"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumGetMethod_ = $EnumGetMethod$$Type;
}}
declare module "com.electronwill.nightconfig.core.ConfigFormat" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Map, $Map$$Type} from "java.util.Map"
import {$File, $File$$Type} from "java.io.File"
import {$ConfigWriter, $ConfigWriter$$Type} from "com.electronwill.nightconfig.core.io.ConfigWriter"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$WriterSupplier, $WriterSupplier$$Type} from "com.electronwill.nightconfig.core.utils.WriterSupplier"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$ConfigParser, $ConfigParser$$Type} from "com.electronwill.nightconfig.core.io.ConfigParser"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $ConfigFormat<C extends $Config> {

 "createParser"(): $ConfigParser<(C)>
 "supportsComments"(): boolean
 "supportsType"(arg0: $Class$$Type<(any)>): boolean
 "initEmptyFile"(arg0: $WriterSupplier$$Type): void
 "initEmptyFile"(arg0: $File$$Type): void
 "initEmptyFile"(arg0: $Path$$Type): void
 "initEmptyFile"(arg0: $Writer$$Type): void
 "createConfig"(arg0: $Supplier$$Type<($Map$$Type<(string), (any)>)>): C
 "createConfig"(): C
 "createWriter"(): $ConfigWriter
 "createConcurrentConfig"(): C
 "isInMemory"(): boolean
get "inMemory"(): boolean
}

export namespace $ConfigFormat {
const probejs$$marker: never
}
export class $ConfigFormat$$Static<C extends $Config> implements $ConfigFormat {


 "createParser"(): $ConfigParser<(C)>
 "supportsComments"(): boolean
 "supportsType"(arg0: $Class$$Type<(any)>): boolean
 "initEmptyFile"(arg0: $WriterSupplier$$Type): void
 "initEmptyFile"(arg0: $File$$Type): void
 "initEmptyFile"(arg0: $Path$$Type): void
 "initEmptyFile"(arg0: $Writer$$Type): void
 "createConfig"(arg0: $Supplier$$Type<($Map$$Type<(string), (any)>)>): C
 "createConfig"(): C
 "createWriter"(): $ConfigWriter
 "createConcurrentConfig"(): C
 "isInMemory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFormat$$Type<C> = ($ConfigFormat<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFormat_<C> = $ConfigFormat$$Type<(C)>;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UnmodifiableCommentedConfig$Entry, $UnmodifiableCommentedConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $UnmodifiableCommentedConfig extends $UnmodifiableConfig {

 "entrySet"(): $Set<($UnmodifiableCommentedConfig$Entry)>
 "getComment"(arg0: string): string
 "getComment"(arg0: $List$$Type<(string)>): string
 "getOptionalComment"(arg0: string): $Optional<(string)>
 "getOptionalComment"(arg0: $List$$Type<(string)>): $Optional<(string)>
 "getComments"(arg0: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
 "containsComment"(arg0: $List$$Type<(string)>): boolean
 "containsComment"(arg0: string): boolean
 "commentMap"(): $Map<(string), (string)>
 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
 "valueMap"(): $Map<(string), (any)>
get "comments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
get "empty"(): boolean
}

export namespace $UnmodifiableCommentedConfig {
function fake(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
const probejs$$marker: never
}
export class $UnmodifiableCommentedConfig$$Static implements $UnmodifiableCommentedConfig {


 "entrySet"(): $Set<($UnmodifiableCommentedConfig$Entry)>
 "getComment"(arg0: string): string
 "getComment"(arg0: $List$$Type<(string)>): string
static "fake"(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
 "getOptionalComment"(arg0: string): $Optional<(string)>
 "getOptionalComment"(arg0: $List$$Type<(string)>): $Optional<(string)>
 "getComments"(arg0: $Map$$Type<(string), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(string), ($UnmodifiableCommentedConfig$CommentNode)>
 "containsComment"(arg0: $List$$Type<(string)>): boolean
 "containsComment"(arg0: string): boolean
 "commentMap"(): $Map<(string), (string)>
 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
 "valueMap"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$$Type = ($UnmodifiableCommentedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig_ = $UnmodifiableCommentedConfig$$Type;
}}
declare module "com.electronwill.nightconfig.core.utils.WriterSupplier" {
import {$Writer, $Writer$$Type} from "java.io.Writer"

export interface $WriterSupplier {

 "get"(): $Writer

(): $Writer$$Type
}

export namespace $WriterSupplier {
const probejs$$marker: never
}
export class $WriterSupplier$$Static implements $WriterSupplier {


 "get"(): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriterSupplier$$Type = (() => $Writer$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriterSupplier_ = $WriterSupplier$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"

export interface $UnmodifiableConfig$Entry {

 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): string
get "null"(): boolean
get "optionalLong"(): $OptionalLong
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export namespace $UnmodifiableConfig$Entry {
const probejs$$marker: never
}
export class $UnmodifiableConfig$Entry$$Static implements $UnmodifiableConfig$Entry {


 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$Entry$$Type = ($UnmodifiableConfig$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableConfig$Entry_ = $UnmodifiableConfig$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"
import {$UnmodifiableConfig$Entry, $UnmodifiableConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $UnmodifiableConfig {

 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "entrySet"(): $Set<($UnmodifiableConfig$Entry)>
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
 "valueMap"(): $Map<(string), (any)>
get "empty"(): boolean
}

export namespace $UnmodifiableConfig {
const probejs$$marker: never
}
export class $UnmodifiableConfig$$Static implements $UnmodifiableConfig {


 "size"(): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$$Type<(string)>): T
 "getByte"(arg0: $List$$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$$Type<(string)>): integer
 "getLong"(arg0: $List$$Type<(string)>): long
 "getLong"(arg0: string): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$$Type<(string)>): T
 "contains"(arg0: string): boolean
 "contains"(arg0: $List$$Type<(string)>): boolean
 "entrySet"(): $Set<($UnmodifiableConfig$Entry)>
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$$Type<(string)>): boolean
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(string)>, arg1: integer): integer
 "getByteOrElse"(arg0: $List$$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getOptional"<T>(arg0: $List$$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getOptionalInt"(arg0: $List$$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getShortOrElse"(arg0: $List$$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(string)>, arg1: long): long
 "configFormat"(): $ConfigFormat<(any)>
 "getCharOrElse"(arg0: $List$$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(string)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(string)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$$Type<(T)>): T
 "valueMap"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$$Type = ($UnmodifiableConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableConfig_ = $UnmodifiableConfig$$Type;
}}
declare module "com.electronwill.nightconfig.core.CommentedConfig$Entry" {
import {$Config$Entry, $Config$Entry$$Type} from "com.electronwill.nightconfig.core.Config$Entry"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$UnmodifiableCommentedConfig$Entry, $UnmodifiableCommentedConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"

export interface $CommentedConfig$Entry extends $Config$Entry, $UnmodifiableCommentedConfig$Entry {

 "setComment"(arg0: string): string
 "removeComment"(): string
 "setValue"<T>(arg0: any): T
 "getComment"(): string
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
set "comment"(value: string)
set "value"(value: any)
get "comment"(): string
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): string
get "null"(): boolean
get "optionalLong"(): $OptionalLong
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export namespace $CommentedConfig$Entry {
const probejs$$marker: never
}
export class $CommentedConfig$Entry$$Static implements $CommentedConfig$Entry {


 "setComment"(arg0: string): string
 "removeComment"(): string
 "setValue"<T>(arg0: any): T
 "getComment"(): string
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$Entry$$Type = ($CommentedConfig$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentedConfig$Entry_ = $CommentedConfig$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.Config$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$UnmodifiableConfig$Entry, $UnmodifiableConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $Config$Entry extends $UnmodifiableConfig$Entry {

 "setValue"<T>(arg0: any): T
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
set "value"(value: any)
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): string
get "null"(): boolean
get "optionalLong"(): $OptionalLong
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export namespace $Config$Entry {
const probejs$$marker: never
}
export class $Config$Entry$$Static implements $Config$Entry {


 "setValue"<T>(arg0: any): T
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): string
 "isNull"(): boolean
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getByteOrElse"(arg0: byte): byte
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalInt"(): $OptionalInt
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOrElse"<T>(arg0: T): T
 "getRawValue"<T>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Entry$$Type = ($Config$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config$Entry_ = $Config$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.io.ConfigWriter" {
import {$WritingMode, $WritingMode$$Type} from "com.electronwill.nightconfig.core.io.WritingMode"
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$File, $File$$Type} from "java.io.File"
import {$URL, $URL$$Type} from "java.net.URL"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $ConfigWriter {

 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $URL$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Writer$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type, arg2: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type): void
 "writeToString"(arg0: $UnmodifiableConfig$$Type): string

(arg0: $UnmodifiableConfig, arg1: $Writer): void
}

export namespace $ConfigWriter {
const probejs$$marker: never
}
export class $ConfigWriter$$Static implements $ConfigWriter {


 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $URL$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Writer$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type, arg2: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type): void
 "writeToString"(arg0: $UnmodifiableConfig$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWriter$$Type = ((arg0: $UnmodifiableConfig, arg1: $Writer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWriter_ = $ConfigWriter$$Type;
}}
