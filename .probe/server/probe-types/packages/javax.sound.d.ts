declare module "javax.sound.sampled.AudioFormat$Encoding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AudioFormat$Encoding {
static readonly "PCM_UNSIGNED": $AudioFormat$Encoding
static readonly "ULAW": $AudioFormat$Encoding
static readonly "PCM_FLOAT": $AudioFormat$Encoding
static readonly "PCM_SIGNED": $AudioFormat$Encoding
static readonly "ALAW": $AudioFormat$Encoding

constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioFormat$Encoding$$Type = ($AudioFormat$Encoding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AudioFormat$Encoding_ = $AudioFormat$Encoding$$Type;
}}
declare module "javax.sound.sampled.AudioFormat" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AudioFormat$Encoding, $AudioFormat$Encoding$$Type} from "javax.sound.sampled.AudioFormat$Encoding"

export class $AudioFormat {

constructor(arg0: float, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean)
constructor(arg0: $AudioFormat$Encoding$$Type, arg1: float, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: boolean, arg7: $Map$$Type<(string), (any)>)
constructor(arg0: $AudioFormat$Encoding$$Type, arg1: float, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: boolean)

public "getProperty"(arg0: string): any
public "toString"(): string
public "matches"(arg0: $AudioFormat$$Type): boolean
public "properties"(): $Map<(string), (any)>
public "isBigEndian"(): boolean
public "getEncoding"(): $AudioFormat$Encoding
public "getSampleRate"(): float
public "getChannels"(): integer
public "getSampleSizeInBits"(): integer
public "getFrameRate"(): float
public "getFrameSize"(): integer
get "bigEndian"(): boolean
get "encoding"(): $AudioFormat$Encoding
get "sampleRate"(): float
get "channels"(): integer
get "sampleSizeInBits"(): integer
get "frameRate"(): float
get "frameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioFormat$$Type = ($AudioFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AudioFormat_ = $AudioFormat$$Type;
}}
