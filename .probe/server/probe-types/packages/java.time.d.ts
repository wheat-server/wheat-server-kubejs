declare module "java.time.zone.ZoneOffsetTransitionRule" {
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$Month, $Month$$Type} from "java.time.Month"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$$Type} from "java.time.zone.ZoneOffsetTransition"
import {$ZoneOffsetTransitionRule$TimeDefinition, $ZoneOffsetTransitionRule$TimeDefinition$$Type} from "java.time.zone.ZoneOffsetTransitionRule$TimeDefinition"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"

export class $ZoneOffsetTransitionRule implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Month$$Type, arg1: integer, arg2: $DayOfWeek$$Type, arg3: $LocalTime$$Type, arg4: boolean, arg5: $ZoneOffsetTransitionRule$TimeDefinition$$Type, arg6: $ZoneOffset$$Type, arg7: $ZoneOffset$$Type, arg8: $ZoneOffset$$Type): $ZoneOffsetTransitionRule
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfMonthIndicator"(): integer
public "getLocalTime"(): $LocalTime
public "isMidnightEndOfDay"(): boolean
public "getTimeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
public "getStandardOffset"(): $ZoneOffset
public "getOffsetBefore"(): $ZoneOffset
public "getOffsetAfter"(): $ZoneOffset
public "createTransition"(arg0: integer): $ZoneOffsetTransition
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfMonthIndicator"(): integer
get "localTime"(): $LocalTime
get "midnightEndOfDay"(): boolean
get "timeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
get "standardOffset"(): $ZoneOffset
get "offsetBefore"(): $ZoneOffset
get "offsetAfter"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransitionRule$$Type = ($ZoneOffsetTransitionRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransitionRule_ = $ZoneOffsetTransitionRule$$Type;
}}
declare module "java.time.temporal.ValueRange" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ValueRange implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: long, arg1: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long, arg3: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long): $ValueRange
public "getMaximum"(): long
public "checkValidIntValue"(arg0: long, arg1: $TemporalField$$Type): integer
public "checkValidValue"(arg0: long, arg1: $TemporalField$$Type): long
public "isIntValue"(): boolean
public "isValidValue"(arg0: long): boolean
public "getMinimum"(): long
public "isValidIntValue"(arg0: long): boolean
public "isFixed"(): boolean
public "getLargestMinimum"(): long
public "getSmallestMaximum"(): long
get "maximum"(): long
get "intValue"(): boolean
get "minimum"(): long
get "fixed"(): boolean
get "largestMinimum"(): long
get "smallestMaximum"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueRange$$Type = ($ValueRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueRange_ = $ValueRange$$Type;
}}
declare module "java.time.DayOfWeek" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $DayOfWeek extends $Enum<($DayOfWeek)> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "WEDNESDAY": $DayOfWeek
static readonly "MONDAY": $DayOfWeek
static readonly "THURSDAY": $DayOfWeek
static readonly "SUNDAY": $DayOfWeek
static readonly "TUESDAY": $DayOfWeek
static readonly "FRIDAY": $DayOfWeek
static readonly "SATURDAY": $DayOfWeek


public "get"(arg0: $TemporalField$$Type): integer
public static "values"(): ($DayOfWeek)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: string): $DayOfWeek
public "getValue"(): integer
public static "of"(arg0: integer): $DayOfWeek
public static "from"(arg0: $TemporalAccessor$$Type): $DayOfWeek
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
public "minus"(arg0: long): $DayOfWeek
public "plus"(arg0: long): $DayOfWeek
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DayOfWeek$$Type = (("monday") | ("tuesday") | ("wednesday") | ("thursday") | ("friday") | ("saturday") | ("sunday"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DayOfWeek_ = $DayOfWeek$$Type;
}}
declare module "java.time.InstantSource" {
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $InstantSource {

 "millis"(): long
 "instant"(): $Instant
 "withZone"(arg0: $ZoneId$$Type): $Clock

(): $Instant$$Type
}

export namespace $InstantSource {
function offset(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
function system(): $InstantSource
function fixed(arg0: $Instant$$Type): $InstantSource
function tick(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
const probejs$$marker: never
}
export class $InstantSource$$Static implements $InstantSource {


static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "millis"(): long
static "system"(): $InstantSource
static "fixed"(arg0: $Instant$$Type): $InstantSource
 "instant"(): $Instant
static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "withZone"(arg0: $ZoneId$$Type): $Clock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantSource$$Type = (() => $Instant$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstantSource_ = $InstantSource$$Type;
}}
declare module "java.time.ZoneId" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ZoneRules, $ZoneRules$$Type} from "java.time.zone.ZoneRules"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $ZoneId implements $Serializable {
static readonly "SHORT_IDS": $Map<(string), (string)>


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: string, arg1: $Map$$Type<(string), (string)>): $ZoneId
public static "of"(arg0: string): $ZoneId
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneId
public "getId"(): string
public "normalized"(): $ZoneId
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
public static "systemDefault"(): $ZoneId
public "getRules"(): $ZoneRules
public static "getAvailableZoneIds"(): $Set<(string)>
public static "ofOffset"(arg0: string, arg1: $ZoneOffset$$Type): $ZoneId
get "id"(): string
get "rules"(): $ZoneRules
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneId$$Type = ($ZoneId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneId_ = $ZoneId$$Type;
}}
declare module "java.time.temporal.TemporalAdjuster" {
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalAdjuster {

 "adjustInto"(arg0: $Temporal$$Type): $Temporal

(arg0: $Temporal): $Temporal$$Type
}

export namespace $TemporalAdjuster {
const probejs$$marker: never
}
export class $TemporalAdjuster$$Static implements $TemporalAdjuster {


 "adjustInto"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAdjuster$$Type = ((arg0: $Temporal) => $Temporal$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAdjuster_ = $TemporalAdjuster$$Type;
}}
declare module "java.time.chrono.Era" {
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Era extends $TemporalAccessor, $TemporalAdjuster {

 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "getValue"(): integer
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
 "adjustInto"(arg0: $Temporal$$Type): $Temporal

(): integer
get "value"(): integer
}

export namespace $Era {
const probejs$$marker: never
}
export class $Era$$Static implements $Era {


 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "getValue"(): integer
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Era$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Era_ = $Era$$Type;
}}
declare module "java.time.ZonedDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export class $ZonedDateTime implements $Temporal, $ChronoZonedDateTime<($LocalDate)>, $Serializable {


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $ZonedDateTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $ZonedDateTime
public static "parse"(arg0: charseq): $ZonedDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoZonedDateTime<(any)>
public "with"(arg0: $TemporalAdjuster$$Type): $ChronoZonedDateTime<(any)>
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $ZonedDateTime
public static "now"(arg0: $Clock$$Type): $ZonedDateTime
public static "now"(arg0: $ZoneId$$Type): $ZonedDateTime
public "getNano"(): integer
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(any)>
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "getZone"(): $ZoneId
public "plus"(arg0: $TemporalAmount$$Type): $ChronoZonedDateTime<(any)>
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $ZonedDateTime
public "plusSeconds"(arg0: long): $ZonedDateTime
public "plusDays"(arg0: long): $ZonedDateTime
public "plusHours"(arg0: long): $ZonedDateTime
public "plusMinutes"(arg0: long): $ZonedDateTime
public "minusDays"(arg0: long): $ZonedDateTime
public "minusHours"(arg0: long): $ZonedDateTime
public "minusMinutes"(arg0: long): $ZonedDateTime
public "minusSeconds"(arg0: long): $ZonedDateTime
public "minusNanos"(arg0: long): $ZonedDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $ZonedDateTime
public static "ofInstant"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $ZonedDateTime
public "withDayOfYear"(arg0: integer): $ZonedDateTime
public "plusWeeks"(arg0: long): $ZonedDateTime
public "withMonth"(arg0: integer): $ZonedDateTime
public "plusMonths"(arg0: long): $ZonedDateTime
public "withYear"(arg0: integer): $ZonedDateTime
public "plusYears"(arg0: long): $ZonedDateTime
public "minusMonths"(arg0: long): $ZonedDateTime
public "toLocalTime"(): $LocalTime
public "minusYears"(arg0: long): $ZonedDateTime
public "minusWeeks"(arg0: long): $ZonedDateTime
public "toLocalDateTime"(): $ChronoLocalDateTime<(any)>
public "withHour"(arg0: integer): $ZonedDateTime
public "withMinute"(arg0: integer): $ZonedDateTime
public "withSecond"(arg0: integer): $ZonedDateTime
public "withNano"(arg0: integer): $ZonedDateTime
public "toLocalDate"(): $LocalDate
public static "ofLocal"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type, arg2: $ZoneOffset$$Type): $ZonedDateTime
public "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(any)>
public "toOffsetDateTime"(): $OffsetDateTime
public "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(any)>
public "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(any)>
public static "ofStrict"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public "withFixedOffsetZone"(): $ZonedDateTime
public "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(any)>
public "compareTo"(arg0: $ChronoZonedDateTime$$Type<(any)>): integer
public "compareTo"(arg0: any): integer
public "toInstant"(): $Instant
public "isAfter"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
public "isBefore"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
public "isEqual"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
public "getChronology"(): $Chronology
public "toEpochSecond"(): long
public static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(any)>)>
get "offset"(): $ZoneOffset
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "zone"(): $ZoneId
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZonedDateTime$$Type = ($ZonedDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZonedDateTime_ = $ZonedDateTime$$Type;
}}
declare module "java.time.OffsetDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$OffsetTime, $OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $OffsetDateTime implements $Temporal, $TemporalAdjuster, $Comparable<($OffsetDateTime)>, $Serializable {
static readonly "MIN": $OffsetDateTime
static readonly "MAX": $OffsetDateTime


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $OffsetDateTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): string
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): $OffsetDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetDateTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $OffsetDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $OffsetDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $OffsetDateTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(arg0: $Clock$$Type): $OffsetDateTime
public static "now"(arg0: $ZoneId$$Type): $OffsetDateTime
public static "now"(): $OffsetDateTime
public "getNano"(): integer
public "toInstant"(): $Instant
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetDateTime
public "minus"(arg0: $TemporalAmount$$Type): $OffsetDateTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetDateTime
public "plus"(arg0: $TemporalAmount$$Type): $OffsetDateTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $OffsetDateTime
public "plusSeconds"(arg0: long): $OffsetDateTime
public "plusDays"(arg0: long): $OffsetDateTime
public "plusHours"(arg0: long): $OffsetDateTime
public "plusMinutes"(arg0: long): $OffsetDateTime
public "minusDays"(arg0: long): $OffsetDateTime
public "minusHours"(arg0: long): $OffsetDateTime
public "minusMinutes"(arg0: long): $OffsetDateTime
public "minusSeconds"(arg0: long): $OffsetDateTime
public "minusNanos"(arg0: long): $OffsetDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetDateTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetDateTime
public "isAfter"(arg0: $OffsetDateTime$$Type): boolean
public "isBefore"(arg0: $OffsetDateTime$$Type): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $OffsetDateTime
public "withDayOfYear"(arg0: integer): $OffsetDateTime
public "plusWeeks"(arg0: long): $OffsetDateTime
public "withMonth"(arg0: integer): $OffsetDateTime
public "plusMonths"(arg0: long): $OffsetDateTime
public "withYear"(arg0: integer): $OffsetDateTime
public "plusYears"(arg0: long): $OffsetDateTime
public "minusMonths"(arg0: long): $OffsetDateTime
public "toLocalTime"(): $LocalTime
public "isEqual"(arg0: $OffsetDateTime$$Type): boolean
public "minusYears"(arg0: long): $OffsetDateTime
public "minusWeeks"(arg0: long): $OffsetDateTime
public "toEpochSecond"(): long
public static "timeLineOrder"(): $Comparator<($OffsetDateTime)>
public "toLocalDateTime"(): $LocalDateTime
public "withHour"(arg0: integer): $OffsetDateTime
public "withMinute"(arg0: integer): $OffsetDateTime
public "withSecond"(arg0: integer): $OffsetDateTime
public "withNano"(arg0: integer): $OffsetDateTime
public "toLocalDate"(): $LocalDate
public "toZonedDateTime"(): $ZonedDateTime
public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZoneSameInstant"(arg0: $ZoneId$$Type): $ZonedDateTime
public "atZoneSimilarLocal"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toOffsetTime"(): $OffsetTime
get "offset"(): $ZoneOffset
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetDateTime$$Type = ($OffsetDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetDateTime_ = $OffsetDateTime$$Type;
}}
declare module "java.time.format.TextStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TextStyle extends $Enum<($TextStyle)> {
static readonly "SHORT_STANDALONE": $TextStyle
static readonly "NARROW_STANDALONE": $TextStyle
static readonly "FULL_STANDALONE": $TextStyle
static readonly "FULL": $TextStyle
static readonly "SHORT": $TextStyle
static readonly "NARROW": $TextStyle


public static "values"(): ($TextStyle)[]
public static "valueOf"(arg0: string): $TextStyle
public "isStandalone"(): boolean
public "asStandalone"(): $TextStyle
public "asNormal"(): $TextStyle
get "standalone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextStyle$$Type = (("full") | ("full_standalone") | ("short") | ("short_standalone") | ("narrow") | ("narrow_standalone"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextStyle_ = $TextStyle$$Type;
}}
declare module "java.time.LocalDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export class $LocalDateTime implements $Temporal, $TemporalAdjuster, $ChronoLocalDateTime<($LocalDate)>, $Serializable {
static readonly "MIN": $LocalDateTime
static readonly "MAX": $LocalDateTime


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDateTime$$Type<(any)>): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDateTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDateTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $LocalDateTime
public static "now"(arg0: $Clock$$Type): $LocalDateTime
public static "now"(arg0: $ZoneId$$Type): $LocalDateTime
public "getNano"(): integer
public static "ofEpochSecond"(arg0: long, arg1: integer, arg2: $ZoneOffset$$Type): $LocalDateTime
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(any)>
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $LocalDateTime
public "plusSeconds"(arg0: long): $LocalDateTime
public "plusDays"(arg0: long): $LocalDateTime
public "plusHours"(arg0: long): $LocalDateTime
public "plusMinutes"(arg0: long): $LocalDateTime
public "minusDays"(arg0: long): $LocalDateTime
public "minusHours"(arg0: long): $LocalDateTime
public "minusMinutes"(arg0: long): $LocalDateTime
public "minusSeconds"(arg0: long): $LocalDateTime
public "minusNanos"(arg0: long): $LocalDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalDateTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDateTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(any)>
public "isAfter"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
public "isBefore"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $LocalDateTime
public "withDayOfYear"(arg0: integer): $LocalDateTime
public "plusWeeks"(arg0: long): $LocalDateTime
public "withMonth"(arg0: integer): $LocalDateTime
public "plusMonths"(arg0: long): $LocalDateTime
public "withYear"(arg0: integer): $LocalDateTime
public "plusYears"(arg0: long): $LocalDateTime
public "minusMonths"(arg0: long): $LocalDateTime
public "toLocalTime"(): $LocalTime
public "isEqual"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
public "minusYears"(arg0: long): $LocalDateTime
public "minusWeeks"(arg0: long): $LocalDateTime
public "withHour"(arg0: integer): $LocalDateTime
public "withMinute"(arg0: integer): $LocalDateTime
public "withSecond"(arg0: integer): $LocalDateTime
public "withNano"(arg0: integer): $LocalDateTime
public "toLocalDate"(): $LocalDate
public "toInstant"(arg0: $ZoneOffset$$Type): $Instant
public "getChronology"(): $Chronology
public "toEpochSecond"(arg0: $ZoneOffset$$Type): long
public static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(any)>)>
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDateTime$$Type = ($LocalDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalDateTime_ = $LocalDateTime$$Type;
}}
declare module "java.time.Period" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"

export class $Period implements $ChronoPeriod, $Serializable {
static readonly "ZERO": $Period


public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: integer): $Period
public static "from"(arg0: $TemporalAmount$$Type): $Period
public static "parse"(arg0: charseq): $Period
public static "between"(arg0: $LocalDate$$Type, arg1: $LocalDate$$Type): $Period
public "normalized"(): $ChronoPeriod
public "isZero"(): boolean
public "getMonths"(): integer
public "isNegative"(): boolean
public "minus"(arg0: $TemporalAmount$$Type): $Period
public "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $Period
public "multipliedBy"(arg0: integer): $ChronoPeriod
public "plusDays"(arg0: long): $Period
public static "ofDays"(arg0: integer): $Period
public "minusDays"(arg0: long): $Period
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "plusMonths"(arg0: long): $Period
public "toTotalMonths"(): long
public "getDays"(): integer
public "plusYears"(arg0: long): $Period
public "minusMonths"(arg0: long): $Period
public "getChronology"(): $Chronology
public "minusYears"(arg0: long): $Period
public "getYears"(): integer
public static "ofYears"(arg0: integer): $Period
public static "ofMonths"(arg0: integer): $Period
public static "ofWeeks"(arg0: integer): $Period
public "withYears"(arg0: integer): $Period
public "withMonths"(arg0: integer): $Period
public "withDays"(arg0: integer): $Period
public static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
get "zero"(): boolean
get "months"(): integer
get "negative"(): boolean
get "units"(): $List<($TemporalUnit)>
get "days"(): integer
get "chronology"(): $Chronology
get "years"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Period$$Type = ($Period);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Period_ = $Period$$Type;
}}
declare module "java.time.chrono.Chronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField, $ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export interface $Chronology extends $Comparable<($Chronology)> {

 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$$Type): integer
 "compareTo"(arg0: any): integer
 "getId"(): string
 "range"(arg0: $ChronoField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "eras"(): $List<($Era)>
 "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
 "isLeapYear"(arg0: long): boolean
 "eraOf"(arg0: integer): $Era
 "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
 "getCalendarType"(): string
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
 "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
 "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
 "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
 "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
 "isIsoBased"(): boolean
get "id"(): string
get "calendarType"(): string
get "isoBased"(): boolean
}

export namespace $Chronology {
function of(arg0: string): $Chronology
function from(arg0: $TemporalAccessor$$Type): $Chronology
function ofLocale(arg0: $Locale$$Type): $Chronology
function getAvailableChronologies(): $Set<($Chronology)>
const probejs$$marker: never
}
export class $Chronology$$Static implements $Chronology {


 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$$Type): integer
 "compareTo"(arg0: any): integer
static "of"(arg0: string): $Chronology
static "from"(arg0: $TemporalAccessor$$Type): $Chronology
 "getId"(): string
 "range"(arg0: $ChronoField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "eras"(): $List<($Era)>
 "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
 "isLeapYear"(arg0: long): boolean
 "eraOf"(arg0: integer): $Era
 "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
 "getCalendarType"(): string
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
 "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
 "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
static "ofLocale"(arg0: $Locale$$Type): $Chronology
static "getAvailableChronologies"(): $Set<($Chronology)>
 "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
 "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
 "isIsoBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chronology$$Type = ($Chronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chronology_ = $Chronology$$Type;
}}
declare module "java.time.temporal.TemporalAmount" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List, $List$$Type} from "java.util.List"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalAmount {

 "get"(arg0: $TemporalUnit$$Type): long
 "getUnits"(): $List<($TemporalUnit)>
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
get "units"(): $List<($TemporalUnit)>
}

export namespace $TemporalAmount {
const probejs$$marker: never
}
export class $TemporalAmount$$Static implements $TemporalAmount {


 "get"(arg0: $TemporalUnit$$Type): long
 "getUnits"(): $List<($TemporalUnit)>
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAmount$$Type = ($TemporalAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAmount_ = $TemporalAmount$$Type;
}}
declare module "java.time.LocalDate" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$OffsetTime, $OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Period, $Period$$Type} from "java.time.Period"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export class $LocalDate implements $Temporal, $TemporalAdjuster, $ChronoLocalDate, $Serializable {
static readonly "MIN": $LocalDate
static readonly "MAX": $LocalDate
static readonly "EPOCH": $LocalDate


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ChronoLocalDate$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer): $LocalDate
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDate
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalDate
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDate
public "with"(arg0: $TemporalAdjuster$$Type): $LocalDate
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDate
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $LocalDate
public static "now"(arg0: $Clock$$Type): $LocalDate
public static "now"(arg0: $ZoneId$$Type): $LocalDate
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalDate
public "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
public "until"(arg0: $ChronoLocalDate$$Type): $Period
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusDays"(arg0: long): $LocalDate
public "minusDays"(arg0: long): $LocalDate
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDate
public "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
public "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
public "isLeapYear"(): boolean
public static "ofEpochDay"(arg0: long): $LocalDate
public "lengthOfMonth"(): integer
public "lengthOfYear"(): integer
public "getMonth"(): $Month
public "toEpochDay"(): long
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $LocalDate
public "withDayOfYear"(arg0: integer): $LocalDate
public "plusWeeks"(arg0: long): $LocalDate
public "withMonth"(arg0: integer): $LocalDate
public "plusMonths"(arg0: long): $LocalDate
public "withYear"(arg0: integer): $LocalDate
public static "ofYearDay"(arg0: integer, arg1: integer): $LocalDate
public "plusYears"(arg0: long): $LocalDate
public "minusMonths"(arg0: long): $LocalDate
public "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(any)>
public "atTime"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalDateTime
public "atTime"(arg0: $OffsetTime$$Type): $OffsetDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer): $LocalDateTime
public "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
public "getEra"(): $Era
public "getChronology"(): $Chronology
public "minusYears"(arg0: long): $LocalDate
public "minusWeeks"(arg0: long): $LocalDate
public "datesUntil"(arg0: $LocalDate$$Type, arg1: $Period$$Type): $Stream<($LocalDate)>
public "datesUntil"(arg0: $LocalDate$$Type): $Stream<($LocalDate)>
public "atStartOfDay"(): $LocalDateTime
public "atStartOfDay"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toEpochSecond"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): long
public static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "leapYear"(): boolean
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "era"(): $Era
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDate$$Type = ($LocalDate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalDate_ = $LocalDate$$Type;
}}
declare module "java.time.temporal.TemporalField" {
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalField {

 "toString"(): string
 "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
 "range"(): $ValueRange
 "getDisplayName"(arg0: $Locale$$Type): string
 "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
 "isTimeBased"(): boolean
 "getFrom"(arg0: $TemporalAccessor$$Type): long
 "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
 "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
 "isDateBased"(): boolean
 "getBaseUnit"(): $TemporalUnit
 "getRangeUnit"(): $TemporalUnit
get "timeBased"(): boolean
get "dateBased"(): boolean
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
}

export namespace $TemporalField {
const probejs$$marker: never
}
export class $TemporalField$$Static implements $TemporalField {


 "toString"(): string
 "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
 "range"(): $ValueRange
 "getDisplayName"(arg0: $Locale$$Type): string
 "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
 "isTimeBased"(): boolean
 "getFrom"(arg0: $TemporalAccessor$$Type): long
 "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
 "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
 "isDateBased"(): boolean
 "getBaseUnit"(): $TemporalUnit
 "getRangeUnit"(): $TemporalUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalField$$Type = ($TemporalField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalField_ = $TemporalField$$Type;
}}
declare module "java.time.temporal.TemporalAccessor" {
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $TemporalAccessor {

 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
}

export namespace $TemporalAccessor {
const probejs$$marker: never
}
export class $TemporalAccessor$$Static implements $TemporalAccessor {


 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAccessor$$Type = ($TemporalAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAccessor_ = $TemporalAccessor$$Type;
}}
declare module "java.time.chrono.ChronoLocalDate" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<($ChronoLocalDate)> {

 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$$Type): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): string
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoLocalDate
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "until"(arg0: $ChronoLocalDate$$Type): $ChronoPeriod
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
 "isLeapYear"(): boolean
 "lengthOfMonth"(): integer
 "lengthOfYear"(): integer
 "toEpochDay"(): long
 "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(any)>
 "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
 "getEra"(): $Era
 "getChronology"(): $Chronology
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
get "leapYear"(): boolean
get "era"(): $Era
get "chronology"(): $Chronology
}

export namespace $ChronoLocalDate {
function from(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
function timeLineOrder(): $Comparator<($ChronoLocalDate)>
const probejs$$marker: never
}
export class $ChronoLocalDate$$Static implements $ChronoLocalDate {


 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$$Type): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): string
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoLocalDate
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "until"(arg0: $ChronoLocalDate$$Type): $ChronoPeriod
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
 "isLeapYear"(): boolean
 "lengthOfMonth"(): integer
 "lengthOfYear"(): integer
 "toEpochDay"(): long
 "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(any)>
 "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
 "getEra"(): $Era
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDate$$Type = ($ChronoLocalDate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoLocalDate_ = $ChronoLocalDate$$Type;
}}
declare module "java.time.format.FormatStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FormatStyle extends $Enum<($FormatStyle)> {
static readonly "MEDIUM": $FormatStyle
static readonly "FULL": $FormatStyle
static readonly "LONG": $FormatStyle
static readonly "SHORT": $FormatStyle


public static "values"(): ($FormatStyle)[]
public static "valueOf"(arg0: string): $FormatStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatStyle$$Type = (("full") | ("long") | ("medium") | ("short"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormatStyle_ = $FormatStyle$$Type;
}}
declare module "java.time.LocalTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$OffsetTime, $OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $LocalTime implements $Temporal, $TemporalAdjuster, $Comparable<($LocalTime)>, $Serializable {
static readonly "MIN": $LocalTime
static readonly "NOON": $LocalTime
static readonly "MAX": $LocalTime
static readonly "MIDNIGHT": $LocalTime


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $LocalTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer): $LocalTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalTime
public "with"(arg0: $TemporalAdjuster$$Type): $LocalTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $LocalTime
public static "now"(arg0: $Clock$$Type): $LocalTime
public static "now"(arg0: $ZoneId$$Type): $LocalTime
public "getNano"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "minus"(arg0: $TemporalAmount$$Type): $LocalTime
public "plus"(arg0: $TemporalAmount$$Type): $LocalTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $LocalTime
public "plusSeconds"(arg0: long): $LocalTime
public "plusHours"(arg0: long): $LocalTime
public "plusMinutes"(arg0: long): $LocalTime
public "minusHours"(arg0: long): $LocalTime
public "minusMinutes"(arg0: long): $LocalTime
public "minusSeconds"(arg0: long): $LocalTime
public "minusNanos"(arg0: long): $LocalTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetTime
public "isAfter"(arg0: $LocalTime$$Type): boolean
public "isBefore"(arg0: $LocalTime$$Type): boolean
public "toSecondOfDay"(): integer
public "toEpochSecond"(arg0: $LocalDate$$Type, arg1: $ZoneOffset$$Type): long
public static "ofNanoOfDay"(arg0: long): $LocalTime
public "withHour"(arg0: integer): $LocalTime
public "withMinute"(arg0: integer): $LocalTime
public "withSecond"(arg0: integer): $LocalTime
public "withNano"(arg0: integer): $LocalTime
public "toNanoOfDay"(): long
public static "ofSecondOfDay"(arg0: long): $LocalTime
public "atDate"(arg0: $LocalDate$$Type): $LocalDateTime
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalTime$$Type = ($LocalTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalTime_ = $LocalTime$$Type;
}}
declare module "java.time.chrono.ChronoZonedDateTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<($ChronoZonedDateTime<(any)>)> {

 "get"(arg0: $TemporalField$$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoZonedDateTime$$Type<(any)>): integer
 "compareTo"(arg0: any): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "format"(arg0: $DateTimeFormatter$$Type): string
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $ChronoZonedDateTime<(D)>
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "toInstant"(): $Instant
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "getZone"(): $ZoneId
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "isAfter"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "toLocalTime"(): $LocalTime
 "isEqual"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "getChronology"(): $Chronology
 "toEpochSecond"(): long
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "toLocalDate"(): D
 "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
get "offset"(): $ZoneOffset
get "zone"(): $ZoneId
get "chronology"(): $Chronology
}

export namespace $ChronoZonedDateTime {
function from(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<(any)>
function timeLineOrder(): $Comparator<($ChronoZonedDateTime<(any)>)>
const probejs$$marker: never
}
export class $ChronoZonedDateTime$$Static<D extends $ChronoLocalDate> implements $ChronoZonedDateTime {


 "get"(arg0: $TemporalField$$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoZonedDateTime$$Type<(any)>): integer
 "compareTo"(arg0: any): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "format"(arg0: $DateTimeFormatter$$Type): string
static "from"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<(any)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $ChronoZonedDateTime<(D)>
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "toInstant"(): $Instant
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "getZone"(): $ZoneId
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "isAfter"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "toLocalTime"(): $LocalTime
 "isEqual"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "getChronology"(): $Chronology
 "toEpochSecond"(): long
static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(any)>)>
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "toLocalDate"(): D
 "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoZonedDateTime$$Type<D> = ($ChronoZonedDateTime<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoZonedDateTime_<D> = $ChronoZonedDateTime$$Type<(D)>;
}}
declare module "java.time.chrono.ChronoLocalDateTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<($ChronoLocalDateTime<(any)>)> {

 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: any): integer
 "compareTo"(arg0: $ChronoLocalDateTime$$Type<(any)>): integer
 "format"(arg0: $DateTimeFormatter$$Type): string
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "toInstant"(arg0: $ZoneOffset$$Type): $Instant
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "isAfter"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "toLocalTime"(): $LocalTime
 "isEqual"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "getChronology"(): $Chronology
 "toEpochSecond"(arg0: $ZoneOffset$$Type): long
 "toLocalDate"(): D
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
get "chronology"(): $Chronology
}

export namespace $ChronoLocalDateTime {
function from(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(any)>
function timeLineOrder(): $Comparator<($ChronoLocalDateTime<(any)>)>
const probejs$$marker: never
}
export class $ChronoLocalDateTime$$Static<D extends $ChronoLocalDate> implements $ChronoLocalDateTime {


 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: any): integer
 "compareTo"(arg0: $ChronoLocalDateTime$$Type<(any)>): integer
 "format"(arg0: $DateTimeFormatter$$Type): string
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(any)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "toInstant"(arg0: $ZoneOffset$$Type): $Instant
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "isAfter"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "toLocalTime"(): $LocalTime
 "isEqual"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "getChronology"(): $Chronology
 "toEpochSecond"(arg0: $ZoneOffset$$Type): long
static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(any)>)>
 "toLocalDate"(): D
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDateTime$$Type<D> = ($ChronoLocalDateTime<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoLocalDateTime_<D> = $ChronoLocalDateTime$$Type<(D)>;
}}
declare module "java.time.temporal.ChronoUnit" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $ChronoUnit extends $Enum<($ChronoUnit)> implements $TemporalUnit {
static readonly "FOREVER": $ChronoUnit
static readonly "MICROS": $ChronoUnit
static readonly "SECONDS": $ChronoUnit
static readonly "DECADES": $ChronoUnit
static readonly "MILLENNIA": $ChronoUnit
static readonly "DAYS": $ChronoUnit
static readonly "MILLIS": $ChronoUnit
static readonly "HALF_DAYS": $ChronoUnit
static readonly "MONTHS": $ChronoUnit
static readonly "YEARS": $ChronoUnit
static readonly "HOURS": $ChronoUnit
static readonly "WEEKS": $ChronoUnit
static readonly "NANOS": $ChronoUnit
static readonly "CENTURIES": $ChronoUnit
static readonly "MINUTES": $ChronoUnit
static readonly "ERAS": $ChronoUnit


public "toString"(): string
public static "values"(): ($ChronoUnit)[]
public static "valueOf"(arg0: string): $ChronoUnit
public "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
public "isDurationEstimated"(): boolean
public "getDuration"(): $Duration
public "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
public "isSupportedBy"(arg0: $Temporal$$Type): boolean
public "isTimeBased"(): boolean
public "isDateBased"(): boolean
get "durationEstimated"(): boolean
get "duration"(): $Duration
get "timeBased"(): boolean
get "dateBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoUnit$$Type = (("nanos") | ("micros") | ("millis") | ("seconds") | ("minutes") | ("hours") | ("half_days") | ("days") | ("weeks") | ("months") | ("years") | ("decades") | ("centuries") | ("millennia") | ("eras") | ("forever"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoUnit_ = $ChronoUnit$$Type;
}}
declare module "java.time.Month" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $Month extends $Enum<($Month)> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "JANUARY": $Month
static readonly "JUNE": $Month
static readonly "MAY": $Month
static readonly "OCTOBER": $Month
static readonly "DECEMBER": $Month
static readonly "MARCH": $Month
static readonly "FEBRUARY": $Month
static readonly "AUGUST": $Month
static readonly "JULY": $Month
static readonly "SEPTEMBER": $Month
static readonly "NOVEMBER": $Month
static readonly "APRIL": $Month


public "get"(arg0: $TemporalField$$Type): integer
public "length"(arg0: boolean): integer
public static "values"(): ($Month)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: string): $Month
public "getValue"(): integer
public static "of"(arg0: integer): $Month
public static "from"(arg0: $TemporalAccessor$$Type): $Month
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "minLength"(): integer
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): string
public "minus"(arg0: long): $Month
public "plus"(arg0: long): $Month
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "firstDayOfYear"(arg0: boolean): integer
public "maxLength"(): integer
public "firstMonthOfQuarter"(): $Month
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Month$$Type = (("january") | ("february") | ("march") | ("april") | ("may") | ("june") | ("july") | ("august") | ("september") | ("october") | ("november") | ("december"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Month_ = $Month$$Type;
}}
declare module "java.time.temporal.TemporalQuery" {
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"

export interface $TemporalQuery<R> {

 "queryFrom"(arg0: $TemporalAccessor$$Type): R

(arg0: $TemporalAccessor): R
}

export namespace $TemporalQuery {
const probejs$$marker: never
}
export class $TemporalQuery$$Static<R> implements $TemporalQuery {


 "queryFrom"(arg0: $TemporalAccessor$$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalQuery$$Type<R> = ((arg0: $TemporalAccessor) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalQuery_<R> = $TemporalQuery$$Type<(R)>;
}}
declare module "java.time.Clock" {
import {$InstantSource, $InstantSource$$Type} from "java.time.InstantSource"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Clock implements $InstantSource {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "offset"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "millis"(): long
public static "system"(arg0: $ZoneId$$Type): $Clock
public static "fixed"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $Clock
public "instant"(): $Instant
public static "systemUTC"(): $Clock
public static "systemDefaultZone"(): $Clock
public static "tickMillis"(arg0: $ZoneId$$Type): $Clock
public static "tickSeconds"(arg0: $ZoneId$$Type): $Clock
public static "tickMinutes"(arg0: $ZoneId$$Type): $Clock
public static "tick"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "getZone"(): $ZoneId
public "withZone"(arg0: $ZoneId$$Type): $Clock
public static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
public static "system"(): $InstantSource
public static "fixed"(arg0: $Instant$$Type): $InstantSource
public static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
get "zone"(): $ZoneId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clock$$Type = ($Clock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clock_ = $Clock$$Type;
}}
declare module "java.time.zone.ZoneOffsetTransition" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $ZoneOffsetTransition implements $Comparable<($ZoneOffsetTransition)>, $Serializable {


public "getInstant"(): $Instant
public "isOverlap"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ZoneOffsetTransition$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneOffset$$Type): $ZoneOffsetTransition
public "getDuration"(): $Duration
public "isGap"(): boolean
public "getDateTimeAfter"(): $LocalDateTime
public "toEpochSecond"(): long
public "getOffsetBefore"(): $ZoneOffset
public "getOffsetAfter"(): $ZoneOffset
public "getDateTimeBefore"(): $LocalDateTime
public "isValidOffset"(arg0: $ZoneOffset$$Type): boolean
get "instant"(): $Instant
get "overlap"(): boolean
get "duration"(): $Duration
get "gap"(): boolean
get "dateTimeAfter"(): $LocalDateTime
get "offsetBefore"(): $ZoneOffset
get "offsetAfter"(): $ZoneOffset
get "dateTimeBefore"(): $LocalDateTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransition$$Type = ($ZoneOffsetTransition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransition_ = $ZoneOffsetTransition$$Type;
}}
declare module "java.time.temporal.Temporal" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Temporal extends $TemporalAccessor {

 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
}

export namespace $Temporal {
const probejs$$marker: never
}
export class $Temporal$$Static implements $Temporal {


 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Temporal$$Type = ($Temporal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Temporal_ = $Temporal$$Type;
}}
declare module "java.time.zone.ZoneRules" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$List, $List$$Type} from "java.util.List"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$$Type} from "java.time.zone.ZoneOffsetTransition"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$ZoneOffsetTransitionRule, $ZoneOffsetTransitionRule$$Type} from "java.time.zone.ZoneOffsetTransitionRule"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $ZoneRules implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $ZoneOffset$$Type, arg1: $ZoneOffset$$Type, arg2: $List$$Type<($ZoneOffsetTransition$$Type)>, arg3: $List$$Type<($ZoneOffsetTransition$$Type)>, arg4: $List$$Type<($ZoneOffsetTransitionRule$$Type)>): $ZoneRules
public static "of"(arg0: $ZoneOffset$$Type): $ZoneRules
public "getOffset"(arg0: $LocalDateTime$$Type): $ZoneOffset
public "getOffset"(arg0: $Instant$$Type): $ZoneOffset
public "getTransition"(arg0: $LocalDateTime$$Type): $ZoneOffsetTransition
public "isFixedOffset"(): boolean
public "getStandardOffset"(arg0: $Instant$$Type): $ZoneOffset
public "getValidOffsets"(arg0: $LocalDateTime$$Type): $List<($ZoneOffset)>
public "getDaylightSavings"(arg0: $Instant$$Type): $Duration
public "isDaylightSavings"(arg0: $Instant$$Type): boolean
public "isValidOffset"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): boolean
public "nextTransition"(arg0: $Instant$$Type): $ZoneOffsetTransition
public "previousTransition"(arg0: $Instant$$Type): $ZoneOffsetTransition
public "getTransitions"(): $List<($ZoneOffsetTransition)>
public "getTransitionRules"(): $List<($ZoneOffsetTransitionRule)>
get "fixedOffset"(): boolean
get "transitions"(): $List<($ZoneOffsetTransition)>
get "transitionRules"(): $List<($ZoneOffsetTransitionRule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneRules$$Type = ($ZoneRules);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneRules_ = $ZoneRules$$Type;
}}
declare module "java.time.format.ResolverStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ResolverStyle extends $Enum<($ResolverStyle)> {
static readonly "STRICT": $ResolverStyle
static readonly "LENIENT": $ResolverStyle
static readonly "SMART": $ResolverStyle


public static "values"(): ($ResolverStyle)[]
public static "valueOf"(arg0: string): $ResolverStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolverStyle$$Type = (("strict") | ("smart") | ("lenient"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResolverStyle_ = $ResolverStyle$$Type;
}}
declare module "java.time.Duration" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $Duration implements $TemporalAmount, $Comparable<($Duration)>, $Serializable {
static readonly "ZERO": $Duration


public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "abs"(): $Duration
public "compareTo"(arg0: $Duration$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public static "from"(arg0: $TemporalAmount$$Type): $Duration
public "toNanos"(): long
public "toMillis"(): long
public static "parse"(arg0: charseq): $Duration
public static "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): $Duration
public "isZero"(): boolean
public "getNano"(): integer
public "toDays"(): long
public "toSeconds"(): long
public "isNegative"(): boolean
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "minus"(arg0: $Duration$$Type): $Duration
public "isPositive"(): boolean
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "plus"(arg0: $Duration$$Type): $Duration
public "getUnits"(): $List<($TemporalUnit)>
public static "ofSeconds"(arg0: long, arg1: long): $Duration
public static "ofSeconds"(arg0: long): $Duration
public "negated"(): $Duration
public static "ofNanos"(arg0: long): $Duration
public "getSeconds"(): long
public "plusNanos"(arg0: long): $Duration
public "plusSeconds"(arg0: long): $Duration
public "plusMillis"(arg0: long): $Duration
public "multipliedBy"(arg0: long): $Duration
public "plusDays"(arg0: long): $Duration
public "plusHours"(arg0: long): $Duration
public "plusMinutes"(arg0: long): $Duration
public "toHours"(): long
public "toMinutes"(): long
public static "ofDays"(arg0: long): $Duration
public static "ofHours"(arg0: long): $Duration
public static "ofMinutes"(arg0: long): $Duration
public static "ofMillis"(arg0: long): $Duration
public "withSeconds"(arg0: long): $Duration
public "withNanos"(arg0: integer): $Duration
public "minusDays"(arg0: long): $Duration
public "minusHours"(arg0: long): $Duration
public "minusMinutes"(arg0: long): $Duration
public "minusSeconds"(arg0: long): $Duration
public "minusMillis"(arg0: long): $Duration
public "minusNanos"(arg0: long): $Duration
public "dividedBy"(arg0: long): $Duration
public "dividedBy"(arg0: $Duration$$Type): long
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "toDaysPart"(): long
public "toHoursPart"(): integer
public "toMinutesPart"(): integer
public "toSecondsPart"(): integer
public "toMillisPart"(): integer
public "toNanosPart"(): integer
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Duration
get "zero"(): boolean
get "nano"(): integer
get "negative"(): boolean
get "positive"(): boolean
get "units"(): $List<($TemporalUnit)>
get "seconds"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Duration$$Type = ($Duration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Duration_ = $Duration$$Type;
}}
declare module "java.time.format.DecimalStyle" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $DecimalStyle {
static readonly "STANDARD": $DecimalStyle


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Locale$$Type): $DecimalStyle
public static "getAvailableLocales"(): $Set<($Locale)>
public "getZeroDigit"(): character
public "getDecimalSeparator"(): character
public "getPositiveSign"(): character
public "getNegativeSign"(): character
public static "ofDefaultLocale"(): $DecimalStyle
public "withZeroDigit"(arg0: character): $DecimalStyle
public "withPositiveSign"(arg0: character): $DecimalStyle
public "withNegativeSign"(arg0: character): $DecimalStyle
public "withDecimalSeparator"(arg0: character): $DecimalStyle
get "zeroDigit"(): character
get "decimalSeparator"(): character
get "positiveSign"(): character
get "negativeSign"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalStyle$$Type = ($DecimalStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalStyle_ = $DecimalStyle$$Type;
}}
declare module "java.time.chrono.ChronoPeriod" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"

export interface $ChronoPeriod extends $TemporalAmount {

 "get"(arg0: $TemporalUnit$$Type): long
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "normalized"(): $ChronoPeriod
 "isZero"(): boolean
 "isNegative"(): boolean
 "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "getChronology"(): $Chronology
get "zero"(): boolean
get "negative"(): boolean
get "units"(): $List<($TemporalUnit)>
get "chronology"(): $Chronology
}

export namespace $ChronoPeriod {
function between(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
const probejs$$marker: never
}
export class $ChronoPeriod$$Static implements $ChronoPeriod {


 "get"(arg0: $TemporalUnit$$Type): long
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
 "normalized"(): $ChronoPeriod
 "isZero"(): boolean
 "isNegative"(): boolean
 "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "getChronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoPeriod$$Type = ($ChronoPeriod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoPeriod_ = $ChronoPeriod$$Type;
}}
declare module "java.time.OffsetTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $OffsetTime implements $Temporal, $TemporalAdjuster, $Comparable<($OffsetTime)>, $Serializable {
static readonly "MIN": $OffsetTime
static readonly "MAX": $OffsetTime


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $OffsetTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): string
public static "of"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): $OffsetTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ZoneOffset$$Type): $OffsetTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq): $OffsetTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetTime
public "with"(arg0: $TemporalAdjuster$$Type): $OffsetTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $OffsetTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $OffsetTime
public static "now"(arg0: $ZoneId$$Type): $OffsetTime
public static "now"(arg0: $Clock$$Type): $OffsetTime
public "getNano"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $OffsetTime
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "plus"(arg0: $TemporalAmount$$Type): $OffsetTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $OffsetTime
public "plusSeconds"(arg0: long): $OffsetTime
public "plusHours"(arg0: long): $OffsetTime
public "plusMinutes"(arg0: long): $OffsetTime
public "minusHours"(arg0: long): $OffsetTime
public "minusMinutes"(arg0: long): $OffsetTime
public "minusSeconds"(arg0: long): $OffsetTime
public "minusNanos"(arg0: long): $OffsetTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetTime
public "isAfter"(arg0: $OffsetTime$$Type): boolean
public "isBefore"(arg0: $OffsetTime$$Type): boolean
public "toLocalTime"(): $LocalTime
public "isEqual"(arg0: $OffsetTime$$Type): boolean
public "toEpochSecond"(arg0: $LocalDate$$Type): long
public "withHour"(arg0: integer): $OffsetTime
public "withMinute"(arg0: integer): $OffsetTime
public "withSecond"(arg0: integer): $OffsetTime
public "withNano"(arg0: integer): $OffsetTime
public "atDate"(arg0: $LocalDate$$Type): $OffsetDateTime
public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetTime
get "offset"(): $ZoneOffset
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetTime$$Type = ($OffsetTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetTime_ = $OffsetTime$$Type;
}}
declare module "java.time.Instant" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"

export class $Instant implements $Temporal, $TemporalAdjuster, $Comparable<($Instant)>, $Serializable {
static readonly "MIN": $Instant
static readonly "MAX": $Instant
static readonly "EPOCH": $Instant


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Instant$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "from"(arg0: $TemporalAccessor$$Type): $Instant
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $Instant
public "with"(arg0: $TemporalField$$Type, arg1: long): $Instant
public "with"(arg0: $TemporalAdjuster$$Type): $Instant
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $Instant
public static "now"(arg0: $Clock$$Type): $Instant
public "getEpochSecond"(): long
public "getNano"(): integer
public static "ofEpochSecond"(arg0: long): $Instant
public static "ofEpochSecond"(arg0: long, arg1: long): $Instant
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "toEpochMilli"(): long
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Instant
public "plus"(arg0: $TemporalAmount$$Type): $Instant
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $Instant
public "plusSeconds"(arg0: long): $Instant
public "plusMillis"(arg0: long): $Instant
public "minusSeconds"(arg0: long): $Instant
public "minusMillis"(arg0: long): $Instant
public "minusNanos"(arg0: long): $Instant
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Instant
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofEpochMilli"(arg0: long): $Instant
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZone"(arg0: $ZoneId$$Type): $ZonedDateTime
public "isAfter"(arg0: $Instant$$Type): boolean
public "isBefore"(arg0: $Instant$$Type): boolean
get "epochSecond"(): long
get "nano"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instant$$Type = ($Instant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instant_ = $Instant$$Type;
}}
declare module "java.time.temporal.TemporalUnit" {
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalUnit {

 "toString"(): string
 "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
 "isDurationEstimated"(): boolean
 "getDuration"(): $Duration
 "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
 "isSupportedBy"(arg0: $Temporal$$Type): boolean
 "isTimeBased"(): boolean
 "isDateBased"(): boolean
get "durationEstimated"(): boolean
get "duration"(): $Duration
get "timeBased"(): boolean
get "dateBased"(): boolean
}

export namespace $TemporalUnit {
const probejs$$marker: never
}
export class $TemporalUnit$$Static implements $TemporalUnit {


 "toString"(): string
 "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
 "isDurationEstimated"(): boolean
 "getDuration"(): $Duration
 "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
 "isSupportedBy"(arg0: $Temporal$$Type): boolean
 "isTimeBased"(): boolean
 "isDateBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalUnit$$Type = ($TemporalUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalUnit_ = $TemporalUnit$$Type;
}}
declare module "java.time.ZoneOffset" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneRules, $ZoneRules$$Type} from "java.time.zone.ZoneRules"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ZoneOffset extends $ZoneId implements $TemporalAccessor, $TemporalAdjuster, $Comparable<($ZoneOffset)>, $Serializable {
static readonly "MIN": $ZoneOffset
static readonly "UTC": $ZoneOffset
static readonly "MAX": $ZoneOffset
static readonly "SHORT_IDS": $Map<(string), (string)>


public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ZoneOffset$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "of"(arg0: string): $ZoneOffset
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneOffset
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "getId"(): string
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "normalized"(): $ZoneId
public static "ofHours"(arg0: integer): $ZoneOffset
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "getRules"(): $ZoneRules
public "getTotalSeconds"(): integer
public static "ofHoursMinutesSeconds"(arg0: integer, arg1: integer, arg2: integer): $ZoneOffset
public static "ofTotalSeconds"(arg0: integer): $ZoneOffset
public static "ofHoursMinutes"(arg0: integer, arg1: integer): $ZoneOffset
get "id"(): string
get "rules"(): $ZoneRules
get "totalSeconds"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffset$$Type = ($ZoneOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffset_ = $ZoneOffset$$Type;
}}
declare module "java.time.format.DateTimeFormatter" {
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$DecimalStyle, $DecimalStyle$$Type} from "java.time.format.DecimalStyle"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format, $Format$$Type} from "java.text.Format"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Period, $Period$$Type} from "java.time.Period"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$FormatStyle, $FormatStyle$$Type} from "java.time.format.FormatStyle"

export class $DateTimeFormatter {
static readonly "ISO_OFFSET_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE_TIME": $DateTimeFormatter
static readonly "RFC_1123_DATE_TIME": $DateTimeFormatter
static readonly "ISO_INSTANT": $DateTimeFormatter
static readonly "ISO_ZONED_DATE_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE": $DateTimeFormatter
static readonly "ISO_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE": $DateTimeFormatter
static readonly "ISO_ORDINAL_DATE": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE": $DateTimeFormatter
static readonly "BASIC_ISO_DATE": $DateTimeFormatter
static readonly "ISO_WEEK_DATE": $DateTimeFormatter


public "toString"(): string
public "format"(arg0: $TemporalAccessor$$Type): string
public "parse"(arg0: charseq, arg1: $ParsePosition$$Type): $TemporalAccessor
public "parse"<T>(arg0: charseq, arg1: $TemporalQuery$$Type<(T)>): T
public "parse"(arg0: charseq): $TemporalAccessor
public "getLocale"(): $Locale
public "getZone"(): $ZoneId
public "withZone"(arg0: $ZoneId$$Type): $DateTimeFormatter
public "getChronology"(): $Chronology
public "formatTo"(arg0: $TemporalAccessor$$Type, arg1: $Appendable$$Type): void
public static "ofPattern"(arg0: string): $DateTimeFormatter
public static "ofPattern"(arg0: string, arg1: $Locale$$Type): $DateTimeFormatter
public static "ofLocalizedDate"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedTime"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$$Type, arg1: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedPattern"(arg0: string): $DateTimeFormatter
public static "parsedExcessDays"(): $TemporalQuery<($Period)>
public static "parsedLeapSecond"(): $TemporalQuery<(boolean)>
public "withLocale"(arg0: $Locale$$Type): $DateTimeFormatter
public "localizedBy"(arg0: $Locale$$Type): $DateTimeFormatter
public "getDecimalStyle"(): $DecimalStyle
public "withDecimalStyle"(arg0: $DecimalStyle$$Type): $DateTimeFormatter
public "withChronology"(arg0: $Chronology$$Type): $DateTimeFormatter
public "getResolverStyle"(): $ResolverStyle
public "withResolverStyle"(arg0: $ResolverStyle$$Type): $DateTimeFormatter
public "getResolverFields"(): $Set<($TemporalField)>
public "withResolverFields"(...arg0: ($TemporalField$$Type)[]): $DateTimeFormatter
public "withResolverFields"(arg0: $Set$$Type<($TemporalField$$Type)>): $DateTimeFormatter
public "parseBest"(arg0: charseq, ...arg1: ($TemporalQuery$$Type<(any)>)[]): $TemporalAccessor
public "parseUnresolved"(arg0: charseq, arg1: $ParsePosition$$Type): $TemporalAccessor
public "toFormat"(arg0: $TemporalQuery$$Type<(any)>): $Format
public "toFormat"(): $Format
get "locale"(): $Locale
get "zone"(): $ZoneId
get "chronology"(): $Chronology
get "decimalStyle"(): $DecimalStyle
get "resolverStyle"(): $ResolverStyle
get "resolverFields"(): $Set<($TemporalField)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateTimeFormatter$$Type = ($DateTimeFormatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateTimeFormatter_ = $DateTimeFormatter$$Type;
}}
declare module "java.time.temporal.ChronoField" {
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ChronoField extends $Enum<($ChronoField)> implements $TemporalField {
static readonly "CLOCK_HOUR_OF_AMPM": $ChronoField
static readonly "DAY_OF_YEAR": $ChronoField
static readonly "MICRO_OF_DAY": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_MONTH": $ChronoField
static readonly "DAY_OF_MONTH": $ChronoField
static readonly "SECOND_OF_MINUTE": $ChronoField
static readonly "PROLEPTIC_MONTH": $ChronoField
static readonly "MILLI_OF_SECOND": $ChronoField
static readonly "NANO_OF_DAY": $ChronoField
static readonly "CLOCK_HOUR_OF_DAY": $ChronoField
static readonly "MINUTE_OF_DAY": $ChronoField
static readonly "ALIGNED_WEEK_OF_MONTH": $ChronoField
static readonly "YEAR": $ChronoField
static readonly "HOUR_OF_DAY": $ChronoField
static readonly "MILLI_OF_DAY": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_YEAR": $ChronoField
static readonly "YEAR_OF_ERA": $ChronoField
static readonly "AMPM_OF_DAY": $ChronoField
static readonly "NANO_OF_SECOND": $ChronoField
static readonly "SECOND_OF_DAY": $ChronoField
static readonly "MICRO_OF_SECOND": $ChronoField
static readonly "MONTH_OF_YEAR": $ChronoField
static readonly "EPOCH_DAY": $ChronoField
static readonly "ERA": $ChronoField
static readonly "OFFSET_SECONDS": $ChronoField
static readonly "HOUR_OF_AMPM": $ChronoField
static readonly "MINUTE_OF_HOUR": $ChronoField
static readonly "INSTANT_SECONDS": $ChronoField
static readonly "ALIGNED_WEEK_OF_YEAR": $ChronoField
static readonly "DAY_OF_WEEK": $ChronoField


public "toString"(): string
public static "values"(): ($ChronoField)[]
public static "valueOf"(arg0: string): $ChronoField
public "range"(): $ValueRange
public "getDisplayName"(arg0: $Locale$$Type): string
public "checkValidIntValue"(arg0: long): integer
public "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
public "isTimeBased"(): boolean
public "getFrom"(arg0: $TemporalAccessor$$Type): long
public "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
public "checkValidValue"(arg0: long): long
public "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
public "isDateBased"(): boolean
public "getBaseUnit"(): $TemporalUnit
public "getRangeUnit"(): $TemporalUnit
public "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
get "timeBased"(): boolean
get "dateBased"(): boolean
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoField$$Type = (("nano_of_second") | ("nano_of_day") | ("micro_of_second") | ("micro_of_day") | ("milli_of_second") | ("milli_of_day") | ("second_of_minute") | ("second_of_day") | ("minute_of_hour") | ("minute_of_day") | ("hour_of_ampm") | ("clock_hour_of_ampm") | ("hour_of_day") | ("clock_hour_of_day") | ("ampm_of_day") | ("day_of_week") | ("aligned_day_of_week_in_month") | ("aligned_day_of_week_in_year") | ("day_of_month") | ("day_of_year") | ("epoch_day") | ("aligned_week_of_month") | ("aligned_week_of_year") | ("month_of_year") | ("proleptic_month") | ("year_of_era") | ("year") | ("era") | ("instant_seconds") | ("offset_seconds"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoField_ = $ChronoField$$Type;
}}
