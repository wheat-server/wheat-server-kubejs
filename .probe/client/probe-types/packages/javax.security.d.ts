declare module "javax.security.auth.Subject" {
import {$PrivilegedAction, $PrivilegedAction$$Type} from "java.security.PrivilegedAction"
import {$Principal, $Principal$$Type} from "java.security.Principal"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$PrivilegedExceptionAction, $PrivilegedExceptionAction$$Type} from "java.security.PrivilegedExceptionAction"
import {$AccessControlContext, $AccessControlContext$$Type} from "java.security.AccessControlContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Subject implements $Serializable {

constructor()
constructor(arg0: boolean, arg1: $Set$$Type<($Principal$$Type)>, arg2: $Set$$Type<(any)>, arg3: $Set$$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setReadOnly"(): void
public "getPrincipals"(): $Set<($Principal)>
public "getPrincipals"<T extends $Principal>(arg0: $Class$$Type<(T)>): $Set<(T)>
public static "current"(): $Subject
public "isReadOnly"(): boolean
/**
 * 
 * @deprecated
 */
public static "getSubject"(arg0: $AccessControlContext$$Type): $Subject
/**
 * 
 * @deprecated
 */
public static "doAs"<T>(arg0: $Subject$$Type, arg1: $PrivilegedAction$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public static "doAs"<T>(arg0: $Subject$$Type, arg1: $PrivilegedExceptionAction$$Type<(T)>): T
public static "callAs"<T>(arg0: $Subject$$Type, arg1: $Callable$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public static "doAsPrivileged"<T>(arg0: $Subject$$Type, arg1: $PrivilegedAction$$Type<(T)>, arg2: $AccessControlContext$$Type): T
/**
 * 
 * @deprecated
 */
public static "doAsPrivileged"<T>(arg0: $Subject$$Type, arg1: $PrivilegedExceptionAction$$Type<(T)>, arg2: $AccessControlContext$$Type): T
public "getPublicCredentials"(): $Set<(any)>
public "getPublicCredentials"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
public "getPrivateCredentials"(): $Set<(any)>
public "getPrivateCredentials"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
get "principals"(): $Set<($Principal)>
get "readOnly"(): boolean
get "publicCredentials"(): $Set<(any)>
get "privateCredentials"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subject$$Type = ($Subject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Subject_ = $Subject$$Type;
}}
declare module "javax.security.auth.Destroyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Destroyable {

 "isDestroyed"(): boolean
 "destroy"(): void
get "destroyed"(): boolean
}

export namespace $Destroyable {
const probejs$$marker: never
}
export class $Destroyable$$Static implements $Destroyable {


 "isDestroyed"(): boolean
 "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Destroyable$$Type = ($Destroyable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Destroyable_ = $Destroyable$$Type;
}}
