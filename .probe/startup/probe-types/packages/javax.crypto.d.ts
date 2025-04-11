declare module "javax.crypto.Cipher" {
import {$ExemptionMechanism, $ExemptionMechanism$$Type} from "javax.crypto.ExemptionMechanism"
import {$Certificate, $Certificate$$Type} from "java.security.cert.Certificate"
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$AlgorithmParameters, $AlgorithmParameters$$Type} from "java.security.AlgorithmParameters"
import {$SecureRandom, $SecureRandom$$Type} from "java.security.SecureRandom"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Key, $Key$$Type} from "java.security.Key"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $Cipher {
static readonly "WRAP_MODE": integer
static readonly "UNWRAP_MODE": integer
static readonly "ENCRYPT_MODE": integer
static readonly "PUBLIC_KEY": integer
static readonly "PRIVATE_KEY": integer
static readonly "SECRET_KEY": integer
static readonly "DECRYPT_MODE": integer


public "getBlockSize"(): integer
public "toString"(): string
public "update"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[]): integer
public "update"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[], arg4: integer): integer
public "update"(arg0: $ByteBuffer$$Type, arg1: $ByteBuffer$$Type): integer
public "update"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public "update"(arg0: (byte)[]): (byte)[]
public "wrap"(arg0: $Key$$Type): (byte)[]
public static "getInstance"(arg0: string): $Cipher
public static "getInstance"(arg0: string, arg1: string): $Cipher
public static "getInstance"(arg0: string, arg1: $Provider$$Type): $Cipher
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameters$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameterSpec$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $SecureRandom$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameterSpec$$Type, arg3: $SecureRandom$$Type): void
public "init"(arg0: integer, arg1: $Certificate$$Type): void
public "init"(arg0: integer, arg1: $Certificate$$Type, arg2: $SecureRandom$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameters$$Type, arg3: $SecureRandom$$Type): void
public "getParameters"(): $AlgorithmParameters
public "unwrap"(arg0: (byte)[], arg1: string, arg2: integer): $Key
public "getProvider"(): $Provider
public "getAlgorithm"(): string
public static "getMaxAllowedKeyLength"(arg0: string): integer
public "getExemptionMechanism"(): $ExemptionMechanism
public "updateAAD"(arg0: (byte)[]): void
public "updateAAD"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "updateAAD"(arg0: $ByteBuffer$$Type): void
public "getOutputSize"(arg0: integer): integer
public "getIV"(): (byte)[]
public "doFinal"(): (byte)[]
public "doFinal"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[], arg4: integer): integer
public "doFinal"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[]): integer
public "doFinal"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public "doFinal"(arg0: (byte)[]): (byte)[]
public "doFinal"(arg0: $ByteBuffer$$Type, arg1: $ByteBuffer$$Type): integer
public "doFinal"(arg0: (byte)[], arg1: integer): integer
public static "getMaxAllowedParameterSpec"(arg0: string): $AlgorithmParameterSpec
get "blockSize"(): integer
get "parameters"(): $AlgorithmParameters
get "provider"(): $Provider
get "algorithm"(): string
get "exemptionMechanism"(): $ExemptionMechanism
get "iV"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cipher$$Type = ($Cipher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cipher_ = $Cipher$$Type;
}}
declare module "javax.crypto.ExemptionMechanism" {
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$AlgorithmParameters, $AlgorithmParameters$$Type} from "java.security.AlgorithmParameters"
import {$Key, $Key$$Type} from "java.security.Key"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $ExemptionMechanism {


public "getName"(): string
public static "getInstance"(arg0: string, arg1: string): $ExemptionMechanism
public static "getInstance"(arg0: string, arg1: $Provider$$Type): $ExemptionMechanism
public static "getInstance"(arg0: string): $ExemptionMechanism
public "init"(arg0: $Key$$Type, arg1: $AlgorithmParameterSpec$$Type): void
public "init"(arg0: $Key$$Type): void
public "init"(arg0: $Key$$Type, arg1: $AlgorithmParameters$$Type): void
public "getProvider"(): $Provider
public "genExemptionBlob"(arg0: (byte)[]): integer
public "genExemptionBlob"(): (byte)[]
public "genExemptionBlob"(arg0: (byte)[], arg1: integer): integer
public "isCryptoAllowed"(arg0: $Key$$Type): boolean
public "getOutputSize"(arg0: integer): integer
get "name"(): string
get "provider"(): $Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExemptionMechanism$$Type = ($ExemptionMechanism);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExemptionMechanism_ = $ExemptionMechanism$$Type;
}}
