declare module "org.slf4j.spi.LoggingEventBuilder" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Marker, $Marker$$Type} from "org.slf4j.Marker"

export interface $LoggingEventBuilder {

 "log"(): void
 "log"(arg0: string): void
 "log"(arg0: string, arg1: any): void
 "log"(arg0: $Supplier$$Type<(string)>): void
 "log"(arg0: string, ...arg1: (any)[]): void
 "log"(arg0: string, arg1: any, arg2: any): void
 "setCause"(arg0: $Throwable$$Type): $LoggingEventBuilder
 "addArgument"(arg0: any): $LoggingEventBuilder
 "addArgument"(arg0: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addKeyValue"(arg0: string, arg1: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addKeyValue"(arg0: string, arg1: any): $LoggingEventBuilder
 "addMarker"(arg0: $Marker$$Type): $LoggingEventBuilder
 "setMessage"(arg0: $Supplier$$Type<(string)>): $LoggingEventBuilder
 "setMessage"(arg0: string): $LoggingEventBuilder
set "cause"(value: $Throwable$$Type)
set "message"(value: $Supplier$$Type<(string)>)
set "message"(value: string)
}

export namespace $LoggingEventBuilder {
const probejs$$marker: never
}
export class $LoggingEventBuilder$$Static implements $LoggingEventBuilder {


 "log"(): void
 "log"(arg0: string): void
 "log"(arg0: string, arg1: any): void
 "log"(arg0: $Supplier$$Type<(string)>): void
 "log"(arg0: string, ...arg1: (any)[]): void
 "log"(arg0: string, arg1: any, arg2: any): void
 "setCause"(arg0: $Throwable$$Type): $LoggingEventBuilder
 "addArgument"(arg0: any): $LoggingEventBuilder
 "addArgument"(arg0: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addKeyValue"(arg0: string, arg1: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addKeyValue"(arg0: string, arg1: any): $LoggingEventBuilder
 "addMarker"(arg0: $Marker$$Type): $LoggingEventBuilder
 "setMessage"(arg0: $Supplier$$Type<(string)>): $LoggingEventBuilder
 "setMessage"(arg0: string): $LoggingEventBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggingEventBuilder$$Type = ($LoggingEventBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoggingEventBuilder_ = $LoggingEventBuilder$$Type;
}}
declare module "org.slf4j.event.Level" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Level extends $Enum<($Level)> {
static readonly "TRACE": $Level
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "DEBUG": $Level
static readonly "WARN": $Level


public "toString"(): string
public static "values"(): ($Level)[]
public static "valueOf"(arg0: string): $Level
public "toInt"(): integer
public static "intToLevel"(arg0: integer): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Level$$Type = (("error") | ("warn") | ("info") | ("debug") | ("trace"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Level_ = $Level$$Type;
}}
declare module "org.slf4j.Logger" {
import {$LoggingEventBuilder, $LoggingEventBuilder$$Type} from "org.slf4j.spi.LoggingEventBuilder"
import {$Level, $Level$$Type} from "org.slf4j.event.Level"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Marker, $Marker$$Type} from "org.slf4j.Marker"

export interface $Logger {

 "getName"(): string
 "info"(arg0: string, arg1: any, arg2: any): void
 "info"(arg0: string, ...arg1: (any)[]): void
 "info"(arg0: string, arg1: $Throwable$$Type): void
 "info"(arg0: string, arg1: any): void
 "info"(arg0: string): void
 "info"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "info"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "info"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "info"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "info"(arg0: $Marker$$Type, arg1: string): void
 "trace"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "trace"(arg0: string, arg1: any): void
 "trace"(arg0: string, ...arg1: (any)[]): void
 "trace"(arg0: string): void
 "trace"(arg0: string, arg1: $Throwable$$Type): void
 "trace"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "trace"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "trace"(arg0: $Marker$$Type, arg1: string): void
 "trace"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "trace"(arg0: string, arg1: any, arg2: any): void
 "debug"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "debug"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "debug"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "debug"(arg0: string, ...arg1: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "debug"(arg0: string): void
 "debug"(arg0: string, arg1: any): void
 "debug"(arg0: string, arg1: any, arg2: any): void
 "debug"(arg0: string, arg1: $Throwable$$Type): void
 "debug"(arg0: $Marker$$Type, arg1: string): void
 "error"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "error"(arg0: string, arg1: any, arg2: any): void
 "error"(arg0: string, arg1: any): void
 "error"(arg0: string): void
 "error"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "error"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "error"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "error"(arg0: string, ...arg1: (any)[]): void
 "error"(arg0: string, arg1: $Throwable$$Type): void
 "error"(arg0: $Marker$$Type, arg1: string): void
 "warn"(arg0: string, arg1: $Throwable$$Type): void
 "warn"(arg0: string, arg1: any, arg2: any): void
 "warn"(arg0: string, ...arg1: (any)[]): void
 "warn"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "warn"(arg0: $Marker$$Type, arg1: string): void
 "warn"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "warn"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "warn"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "warn"(arg0: string): void
 "warn"(arg0: string, arg1: any): void
 "isEnabledForLevel"(arg0: $Level$$Type): boolean
 "isInfoEnabled"(): boolean
 "isInfoEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isTraceEnabled"(): boolean
 "isTraceEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(arg0: $Marker$$Type): boolean
 "makeLoggingEventBuilder"(arg0: $Level$$Type): $LoggingEventBuilder
 "atInfo"(): $LoggingEventBuilder
 "atLevel"(arg0: $Level$$Type): $LoggingEventBuilder
 "atDebug"(): $LoggingEventBuilder
 "atWarn"(): $LoggingEventBuilder
 "atError"(): $LoggingEventBuilder
 "atTrace"(): $LoggingEventBuilder
get "name"(): string
get "infoEnabled"(): boolean
get "errorEnabled"(): boolean
get "traceEnabled"(): boolean
get "warnEnabled"(): boolean
get "debugEnabled"(): boolean
}

export namespace $Logger {
const ROOT_LOGGER_NAME: string
const probejs$$marker: never
}
export class $Logger$$Static implements $Logger {
static readonly "ROOT_LOGGER_NAME": string


 "getName"(): string
 "info"(arg0: string, arg1: any, arg2: any): void
 "info"(arg0: string, ...arg1: (any)[]): void
 "info"(arg0: string, arg1: $Throwable$$Type): void
 "info"(arg0: string, arg1: any): void
 "info"(arg0: string): void
 "info"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "info"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "info"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "info"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "info"(arg0: $Marker$$Type, arg1: string): void
 "trace"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "trace"(arg0: string, arg1: any): void
 "trace"(arg0: string, ...arg1: (any)[]): void
 "trace"(arg0: string): void
 "trace"(arg0: string, arg1: $Throwable$$Type): void
 "trace"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "trace"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "trace"(arg0: $Marker$$Type, arg1: string): void
 "trace"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "trace"(arg0: string, arg1: any, arg2: any): void
 "debug"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "debug"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "debug"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "debug"(arg0: string, ...arg1: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "debug"(arg0: string): void
 "debug"(arg0: string, arg1: any): void
 "debug"(arg0: string, arg1: any, arg2: any): void
 "debug"(arg0: string, arg1: $Throwable$$Type): void
 "debug"(arg0: $Marker$$Type, arg1: string): void
 "error"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "error"(arg0: string, arg1: any, arg2: any): void
 "error"(arg0: string, arg1: any): void
 "error"(arg0: string): void
 "error"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "error"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "error"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "error"(arg0: string, ...arg1: (any)[]): void
 "error"(arg0: string, arg1: $Throwable$$Type): void
 "error"(arg0: $Marker$$Type, arg1: string): void
 "warn"(arg0: string, arg1: $Throwable$$Type): void
 "warn"(arg0: string, arg1: any, arg2: any): void
 "warn"(arg0: string, ...arg1: (any)[]): void
 "warn"(arg0: $Marker$$Type, arg1: string, arg2: any): void
 "warn"(arg0: $Marker$$Type, arg1: string): void
 "warn"(arg0: $Marker$$Type, arg1: string, arg2: $Throwable$$Type): void
 "warn"(arg0: $Marker$$Type, arg1: string, ...arg2: (any)[]): void
 "warn"(arg0: $Marker$$Type, arg1: string, arg2: any, arg3: any): void
 "warn"(arg0: string): void
 "warn"(arg0: string, arg1: any): void
 "isEnabledForLevel"(arg0: $Level$$Type): boolean
 "isInfoEnabled"(): boolean
 "isInfoEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isTraceEnabled"(): boolean
 "isTraceEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(arg0: $Marker$$Type): boolean
 "makeLoggingEventBuilder"(arg0: $Level$$Type): $LoggingEventBuilder
 "atInfo"(): $LoggingEventBuilder
 "atLevel"(arg0: $Level$$Type): $LoggingEventBuilder
 "atDebug"(): $LoggingEventBuilder
 "atWarn"(): $LoggingEventBuilder
 "atError"(): $LoggingEventBuilder
 "atTrace"(): $LoggingEventBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Logger$$Type = ($Logger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Logger_ = $Logger$$Type;
}}
declare module "org.slf4j.Marker" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export interface $Marker extends $Serializable {

 "getName"(): string
 "remove"(arg0: $Marker$$Type): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "add"(arg0: $Marker$$Type): void
 "iterator"(): $Iterator<($Marker)>
 "contains"(arg0: string): boolean
 "contains"(arg0: $Marker$$Type): boolean
 "hasReferences"(): boolean
/**
 * 
 * @deprecated
 */
 "hasChildren"(): boolean
get "name"(): string
}

export namespace $Marker {
const ANY_MARKER: string
const ANY_NON_NULL_MARKER: string
const probejs$$marker: never
}
export class $Marker$$Static implements $Marker {
static readonly "ANY_MARKER": string
static readonly "ANY_NON_NULL_MARKER": string


 "getName"(): string
 "remove"(arg0: $Marker$$Type): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "add"(arg0: $Marker$$Type): void
 "iterator"(): $Iterator<($Marker)>
 "contains"(arg0: string): boolean
 "contains"(arg0: $Marker$$Type): boolean
 "hasReferences"(): boolean
/**
 * 
 * @deprecated
 */
 "hasChildren"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Marker$$Type = ($Marker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Marker_ = $Marker$$Type;
}}
