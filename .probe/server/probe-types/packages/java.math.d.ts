declare module "java.math.RoundingMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RoundingMode extends $Enum<($RoundingMode)> {
static readonly "DOWN": $RoundingMode
static readonly "FLOOR": $RoundingMode
static readonly "UNNECESSARY": $RoundingMode
static readonly "CEILING": $RoundingMode
static readonly "HALF_EVEN": $RoundingMode
static readonly "UP": $RoundingMode
static readonly "HALF_UP": $RoundingMode
static readonly "HALF_DOWN": $RoundingMode


public static "values"(): ($RoundingMode)[]
public static "valueOf"(arg0: string): $RoundingMode
public static "valueOf"(arg0: integer): $RoundingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoundingMode$$Type = (("up") | ("down") | ("ceiling") | ("floor") | ("half_up") | ("half_down") | ("half_even") | ("unnecessary"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoundingMode_ = $RoundingMode$$Type;
}}
declare module "java.math.BigDecimal" {
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$MathContext, $MathContext$$Type} from "java.math.MathContext"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $BigDecimal extends number implements $Comparable<($BigDecimal)> {
static readonly "ZERO": $BigDecimal
/**
 * 
 * @deprecated
 */
static readonly "ROUND_DOWN": integer
/**
 * 
 * @deprecated
 */
static readonly "ROUND_UNNECESSARY": integer
/**
 * 
 * @deprecated
 */
static readonly "ROUND_CEILING": integer
/**
 * 
 * @deprecated
 */
static readonly "ROUND_HALF_DOWN": integer
/**
 * 
 * @deprecated
 */
static readonly "ROUND_HALF_UP": integer
static readonly "ONE": $BigDecimal
/**
 * 
 * @deprecated
 */
static readonly "ROUND_UP": integer
/**
 * 
 * @deprecated
 */
static readonly "ROUND_FLOOR": integer
/**
 * 
 * @deprecated
 */
static readonly "ROUND_HALF_EVEN": integer
static readonly "TEN": $BigDecimal
static readonly "TWO": $BigDecimal

constructor(arg0: $BigInteger$$Type, arg1: integer)
constructor(arg0: $BigInteger$$Type, arg1: $MathContext$$Type)
constructor(arg0: $BigInteger$$Type)
constructor(arg0: long, arg1: $MathContext$$Type)
constructor(arg0: double, arg1: $MathContext$$Type)
constructor(arg0: long)
constructor(arg0: integer, arg1: $MathContext$$Type)
constructor(arg0: integer)
constructor(arg0: $BigInteger$$Type, arg1: integer, arg2: $MathContext$$Type)
constructor(arg0: (character)[])
constructor(arg0: (character)[], arg1: integer, arg2: integer, arg3: $MathContext$$Type)
constructor(arg0: (character)[], arg1: integer, arg2: integer)
constructor(arg0: double)
constructor(arg0: string, arg1: $MathContext$$Type)
constructor(arg0: string)
constructor(arg0: (character)[], arg1: $MathContext$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "abs"(): $BigDecimal
public "abs"(arg0: $MathContext$$Type): $BigDecimal
public "sqrt"(arg0: $MathContext$$Type): $BigDecimal
public "pow"(arg0: integer): $BigDecimal
public "pow"(arg0: integer, arg1: $MathContext$$Type): $BigDecimal
public "min"(arg0: $BigDecimal$$Type): $BigDecimal
public "max"(arg0: $BigDecimal$$Type): $BigDecimal
public "round"(arg0: $MathContext$$Type): $BigDecimal
public "signum"(): integer
public "compareTo"(arg0: $BigDecimal$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: double): $BigDecimal
public static "valueOf"(arg0: long): $BigDecimal
public static "valueOf"(arg0: long, arg1: integer): $BigDecimal
public "scale"(): integer
public "add"(arg0: $BigDecimal$$Type): $BigDecimal
public "add"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): $BigDecimal
public "multiply"(arg0: $BigDecimal$$Type): $BigDecimal
public "multiply"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): $BigDecimal
public "ulp"(): $BigDecimal
public "remainder"(arg0: $BigDecimal$$Type): $BigDecimal
public "remainder"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): $BigDecimal
public "subtract"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): $BigDecimal
public "subtract"(arg0: $BigDecimal$$Type): $BigDecimal
public "negate"(arg0: $MathContext$$Type): $BigDecimal
public "negate"(): $BigDecimal
public "toBigInteger"(): $BigInteger
/**
 * 
 * @deprecated
 */
public "divide"(arg0: $BigDecimal$$Type, arg1: integer, arg2: integer): $BigDecimal
public "divide"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): $BigDecimal
public "divide"(arg0: $BigDecimal$$Type, arg1: integer, arg2: $RoundingMode$$Type): $BigDecimal
/**
 * 
 * @deprecated
 */
public "divide"(arg0: $BigDecimal$$Type, arg1: integer): $BigDecimal
public "divide"(arg0: $BigDecimal$$Type, arg1: $RoundingMode$$Type): $BigDecimal
public "divide"(arg0: $BigDecimal$$Type): $BigDecimal
public "divideAndRemainder"(arg0: $BigDecimal$$Type): ($BigDecimal)[]
public "divideAndRemainder"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): ($BigDecimal)[]
public "longValueExact"(): long
public "intValueExact"(): integer
public "shortValueExact"(): short
public "byteValueExact"(): byte
public "scaleByPowerOfTen"(arg0: integer): $BigDecimal
public "plus"(): $BigDecimal
public "plus"(arg0: $MathContext$$Type): $BigDecimal
public "divideToIntegralValue"(arg0: $BigDecimal$$Type, arg1: $MathContext$$Type): $BigDecimal
public "divideToIntegralValue"(arg0: $BigDecimal$$Type): $BigDecimal
public "movePointRight"(arg0: integer): $BigDecimal
public "toBigIntegerExact"(): $BigInteger
public "precision"(): integer
public "unscaledValue"(): $BigInteger
public "setScale"(arg0: integer): $BigDecimal
/**
 * 
 * @deprecated
 */
public "setScale"(arg0: integer, arg1: integer): $BigDecimal
public "setScale"(arg0: integer, arg1: $RoundingMode$$Type): $BigDecimal
public "movePointLeft"(arg0: integer): $BigDecimal
public "toEngineeringString"(): string
public "toPlainString"(): string
public "stripTrailingZeros"(): $BigDecimal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigDecimal$$Type = ($BigDecimal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigDecimal_ = $BigDecimal$$Type;
}}
declare module "java.math.MathContext" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $MathContext implements $Serializable {
static readonly "DECIMAL128": $MathContext
static readonly "DECIMAL64": $MathContext
static readonly "DECIMAL32": $MathContext
static readonly "UNLIMITED": $MathContext

constructor(arg0: string)
constructor(arg0: integer, arg1: $RoundingMode$$Type)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRoundingMode"(): $RoundingMode
public "getPrecision"(): integer
get "roundingMode"(): $RoundingMode
get "precision"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MathContext$$Type = ($MathContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MathContext_ = $MathContext$$Type;
}}
declare module "java.math.BigInteger" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Random, $Random$$Type} from "java.util.Random"

export class $BigInteger extends number implements $Comparable<($BigInteger)> {
static readonly "ZERO": $BigInteger
static readonly "ONE": $BigInteger
static readonly "TEN": $BigInteger
static readonly "TWO": $BigInteger

constructor(arg0: integer, arg1: $Random$$Type)
constructor(arg0: string)
constructor(arg0: integer, arg1: integer, arg2: $Random$$Type)
constructor(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer)
constructor(arg0: (byte)[])
constructor(arg0: (byte)[], arg1: integer, arg2: integer)
constructor(arg0: string, arg1: integer)
constructor(arg0: integer, arg1: (byte)[])

public "bitCount"(): integer
public "equals"(arg0: any): boolean
public "toString"(arg0: integer): string
public "toString"(): string
public "hashCode"(): integer
public "abs"(): $BigInteger
public "sqrt"(): $BigInteger
public "pow"(arg0: integer): $BigInteger
public "min"(arg0: $BigInteger$$Type): $BigInteger
public "max"(arg0: $BigInteger$$Type): $BigInteger
public "signum"(): integer
public "compareTo"(arg0: $BigInteger$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: long): $BigInteger
public "add"(arg0: $BigInteger$$Type): $BigInteger
public "mod"(arg0: $BigInteger$$Type): $BigInteger
public "setBit"(arg0: integer): $BigInteger
public "shiftLeft"(arg0: integer): $BigInteger
public "multiply"(arg0: $BigInteger$$Type): $BigInteger
public "or"(arg0: $BigInteger$$Type): $BigInteger
public "toByteArray"(): (byte)[]
public "remainder"(arg0: $BigInteger$$Type): $BigInteger
public "bitLength"(): integer
public "testBit"(arg0: integer): boolean
public "subtract"(arg0: $BigInteger$$Type): $BigInteger
public "shiftRight"(arg0: integer): $BigInteger
public "getLowestSetBit"(): integer
public "modPow"(arg0: $BigInteger$$Type, arg1: $BigInteger$$Type): $BigInteger
public "negate"(): $BigInteger
public "modInverse"(arg0: $BigInteger$$Type): $BigInteger
public "divide"(arg0: $BigInteger$$Type): $BigInteger
public "divideAndRemainder"(arg0: $BigInteger$$Type): ($BigInteger)[]
public static "probablePrime"(arg0: integer, arg1: $Random$$Type): $BigInteger
public "nextProbablePrime"(): $BigInteger
public "parallelMultiply"(arg0: $BigInteger$$Type): $BigInteger
public "sqrtAndRemainder"(): ($BigInteger)[]
public "gcd"(arg0: $BigInteger$$Type): $BigInteger
public "and"(arg0: $BigInteger$$Type): $BigInteger
public "xor"(arg0: $BigInteger$$Type): $BigInteger
public "not"(): $BigInteger
public "andNot"(arg0: $BigInteger$$Type): $BigInteger
public "clearBit"(arg0: integer): $BigInteger
public "flipBit"(arg0: integer): $BigInteger
public "isProbablePrime"(arg0: integer): boolean
public "longValueExact"(): long
public "intValueExact"(): integer
public "shortValueExact"(): short
public "byteValueExact"(): byte
set "bit"(value: integer)
get "lowestSetBit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInteger$$Type = ($BigInteger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInteger_ = $BigInteger$$Type;
}}
