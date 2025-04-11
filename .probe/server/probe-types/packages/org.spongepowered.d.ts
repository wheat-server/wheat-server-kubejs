declare module "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable" {
import {$CallbackInfo, $CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfoReturnable<R> extends $CallbackInfo {

constructor(arg0: string, arg1: boolean, arg2: float)
constructor(arg0: string, arg1: boolean, arg2: integer)
constructor(arg0: string, arg1: boolean, arg2: long)
constructor(arg0: string, arg1: boolean, arg2: short)
constructor(arg0: string, arg1: boolean, arg2: boolean)
constructor(arg0: string, arg1: boolean)
constructor(arg0: string, arg1: boolean, arg2: R)
constructor(arg0: string, arg1: boolean, arg2: byte)
constructor(arg0: string, arg1: boolean, arg2: character)
constructor(arg0: string, arg1: boolean, arg2: double)

public "getReturnValueD"(): double
public "getReturnValueJ"(): long
public "getReturnValueB"(): byte
public "getReturnValueS"(): short
public "getReturnValueZ"(): boolean
public "setReturnValue"(arg0: R): void
public "getReturnValue"(): R
public "getReturnValueC"(): character
public "getReturnValueF"(): float
public "getReturnValueI"(): integer
get "returnValueD"(): double
get "returnValueJ"(): long
get "returnValueB"(): byte
get "returnValueS"(): short
get "returnValueZ"(): boolean
set "returnValue"(value: R)
get "returnValue"(): R
get "returnValueC"(): character
get "returnValueF"(): float
get "returnValueI"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackInfoReturnable$$Type<R> = ($CallbackInfoReturnable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallbackInfoReturnable_<R> = $CallbackInfoReturnable$$Type<(R)>;
}}
declare module "org.spongepowered.asm.mixin.injection.callback.CallbackInfo" {
import {$Cancellable, $Cancellable$$Type} from "org.spongepowered.asm.mixin.injection.callback.Cancellable"
import {$Type, $Type$$Type} from "org.objectweb.asm.Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfo implements $Cancellable {

constructor(arg0: string, arg1: boolean)

public "toString"(): string
public "getId"(): string
public "cancel"(): void
public "isCancelled"(): boolean
public "isCancellable"(): boolean
public static "getCallInfoClassName"(arg0: $Type$$Type): string
get "id"(): string
get "cancelled"(): boolean
get "cancellable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackInfo$$Type = ($CallbackInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallbackInfo_ = $CallbackInfo$$Type;
}}
