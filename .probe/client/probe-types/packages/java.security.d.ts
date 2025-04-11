declare module "java.security.Key" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export interface $Key extends $Serializable {

 "getEncoded"(): (byte)[]
 "getFormat"(): string
 "getAlgorithm"(): string
get "encoded"(): (byte)[]
get "format"(): string
get "algorithm"(): string
}

export namespace $Key {
const serialVersionUID: long
const probejs$$marker: never
}
export class $Key$$Static implements $Key {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long


 "getEncoded"(): (byte)[]
 "getFormat"(): string
 "getAlgorithm"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$$Type = ($Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Key_ = $Key$$Type;
}}
declare module "java.security.Principal" {
import {$Subject, $Subject$$Type} from "javax.security.auth.Subject"

export interface $Principal {

 "getName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
get "name"(): string
}

export namespace $Principal {
const probejs$$marker: never
}
export class $Principal$$Static implements $Principal {


 "getName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Principal$$Type = ($Principal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Principal_ = $Principal$$Type;
}}
declare module "java.security.PrivateKey" {
import {$Destroyable, $Destroyable$$Type} from "javax.security.auth.Destroyable"
import {$Key, $Key$$Type} from "java.security.Key"

export interface $PrivateKey extends $Key, $Destroyable {

 "getEncoded"(): (byte)[]
 "getFormat"(): string
 "getAlgorithm"(): string
 "isDestroyed"(): boolean
 "destroy"(): void
get "encoded"(): (byte)[]
get "format"(): string
get "algorithm"(): string
get "destroyed"(): boolean
}

export namespace $PrivateKey {
const serialVersionUID: long
const probejs$$marker: never
}
export class $PrivateKey$$Static implements $PrivateKey {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long


 "getEncoded"(): (byte)[]
 "getFormat"(): string
 "getAlgorithm"(): string
 "isDestroyed"(): boolean
 "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivateKey$$Type = ($PrivateKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivateKey_ = $PrivateKey$$Type;
}}
declare module "java.security.cert.Certificate" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"

export class $Certificate implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): string
public "getEncoded"(): (byte)[]
public "verify"(arg0: $PublicKey$$Type): void
public "verify"(arg0: $PublicKey$$Type, arg1: string): void
public "verify"(arg0: $PublicKey$$Type, arg1: $Provider$$Type): void
public "getPublicKey"(): $PublicKey
get "type"(): string
get "encoded"(): (byte)[]
get "publicKey"(): $PublicKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Certificate$$Type = ($Certificate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Certificate_ = $Certificate$$Type;
}}
declare module "java.security.AlgorithmParameters" {
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $AlgorithmParameters {


public "toString"(): string
public static "getInstance"(arg0: string, arg1: $Provider$$Type): $AlgorithmParameters
public static "getInstance"(arg0: string, arg1: string): $AlgorithmParameters
public static "getInstance"(arg0: string): $AlgorithmParameters
public "init"(arg0: (byte)[]): void
public "init"(arg0: (byte)[], arg1: string): void
public "init"(arg0: $AlgorithmParameterSpec$$Type): void
public "getEncoded"(): (byte)[]
public "getEncoded"(arg0: string): (byte)[]
public "getProvider"(): $Provider
public "getAlgorithm"(): string
public "getParameterSpec"<T extends $AlgorithmParameterSpec>(arg0: $Class$$Type<(T)>): T
get "encoded"(): (byte)[]
get "provider"(): $Provider
get "algorithm"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlgorithmParameters$$Type = ($AlgorithmParameters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlgorithmParameters_ = $AlgorithmParameters$$Type;
}}
declare module "java.security.Guard" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Guard {

 "checkGuard"(arg0: any): void

(arg0: any): void
}

export namespace $Guard {
const probejs$$marker: never
}
export class $Guard$$Static implements $Guard {


 "checkGuard"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Guard$$Type = ((arg0: any) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Guard_ = $Guard$$Type;
}}
declare module "java.security.Provider" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Provider$Service, $Provider$Service$$Type} from "java.security.Provider$Service"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Properties, $Properties$$Type} from "java.util.Properties"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Provider extends $Properties {


public "getName"(): string
public "remove"(arg0: any): any
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "getProperty"(arg0: string): string
public "toString"(): string
public "values"(): $Collection<(any)>
public "load"(arg0: $InputStream$$Type): void
public "clear"(): void
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(any), (any), (any)>): void
public "elements"(): $Enumeration<(any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type<(any), (any), (any)>): any
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$$Type<(any), (any)>): void
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
public "forEach"(arg0: $BiConsumer$$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$$Type<(any), (any)>): any
public "keys"(): $Enumeration<(any)>
public "keySet"(): $Set<(any)>
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
/**
 * 
 * @deprecated
 */
public "getVersion"(): double
public "getService"(arg0: string, arg1: string): $Provider$Service
public "configure"(arg0: string): $Provider
public "isConfigured"(): boolean
public "getVersionStr"(): string
public "getInfo"(): string
public "getServices"(): $Set<($Provider$Service)>
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
get "name"(): string
get "version"(): double
get "configured"(): boolean
get "versionStr"(): string
get "info"(): string
get "services"(): $Set<($Provider$Service)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Provider$$Type = ($Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Provider_ = $Provider$$Type;
}}
declare module "java.security.SecureRandom" {
import {$RandomGenerator, $RandomGenerator$$Type} from "java.util.random.RandomGenerator"
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$Random, $Random$$Type} from "java.util.Random"
import {$SecureRandomParameters, $SecureRandomParameters$$Type} from "java.security.SecureRandomParameters"

export class $SecureRandom extends $Random {

constructor(arg0: (byte)[])
constructor()

public "toString"(): string
public static "getInstance"(arg0: string, arg1: $SecureRandomParameters$$Type, arg2: string): $SecureRandom
public static "getInstance"(arg0: string, arg1: $SecureRandomParameters$$Type): $SecureRandom
public static "getInstance"(arg0: string, arg1: $SecureRandomParameters$$Type, arg2: $Provider$$Type): $SecureRandom
public static "getInstance"(arg0: string): $SecureRandom
public static "getInstance"(arg0: string, arg1: string): $SecureRandom
public static "getInstance"(arg0: string, arg1: $Provider$$Type): $SecureRandom
public "getParameters"(): $SecureRandomParameters
public "nextBytes"(arg0: (byte)[]): void
public "nextBytes"(arg0: (byte)[], arg1: $SecureRandomParameters$$Type): void
public "getProvider"(): $Provider
public "setSeed"(arg0: long): void
public "setSeed"(arg0: (byte)[]): void
public static "getSeed"(arg0: integer): (byte)[]
public "getAlgorithm"(): string
public "generateSeed"(arg0: integer): (byte)[]
public static "getInstanceStrong"(): $SecureRandom
public "reseed"(arg0: $SecureRandomParameters$$Type): void
public "reseed"(): void
public static "getDefault"(): $RandomGenerator
public static "of"(arg0: string): $RandomGenerator
get "parameters"(): $SecureRandomParameters
get "provider"(): $Provider
set "seed"(value: long)
set "seed"(value: (byte)[])
get "algorithm"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureRandom$$Type = ($SecureRandom);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecureRandom_ = $SecureRandom$$Type;
}}
declare module "java.security.Provider$Service" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Provider, $Provider$$Type} from "java.security.Provider"

export class $Provider$Service {

constructor(arg0: $Provider$$Type, arg1: string, arg2: string, arg3: string, arg4: $List$$Type<(string)>, arg5: $Map$$Type<(string), (string)>)

public "toString"(): string
public "newInstance"(arg0: any): any
public "getType"(): string
public "getClassName"(): string
public "getAttribute"(arg0: string): string
public "getProvider"(): $Provider
public "getAlgorithm"(): string
public "supportsParameter"(arg0: any): boolean
get "type"(): string
get "className"(): string
get "provider"(): $Provider
get "algorithm"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Provider$Service$$Type = ($Provider$Service);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Provider$Service_ = $Provider$Service$$Type;
}}
declare module "java.security.Signature" {
import {$Certificate, $Certificate$$Type} from "java.security.cert.Certificate"
import {$PrivateKey, $PrivateKey$$Type} from "java.security.PrivateKey"
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$AlgorithmParameters, $AlgorithmParameters$$Type} from "java.security.AlgorithmParameters"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"
import {$SecureRandom, $SecureRandom$$Type} from "java.security.SecureRandom"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$SignatureSpi, $SignatureSpi$$Type} from "java.security.SignatureSpi"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $Signature extends $SignatureSpi {


public "toString"(): string
public "clone"(): any
public "update"(arg0: (byte)[]): void
public "update"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "update"(arg0: byte): void
public "update"(arg0: $ByteBuffer$$Type): void
public static "getInstance"(arg0: string): $Signature
public static "getInstance"(arg0: string, arg1: string): $Signature
public static "getInstance"(arg0: string, arg1: $Provider$$Type): $Signature
public "getParameters"(): $AlgorithmParameters
public "sign"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "sign"(): (byte)[]
public "verify"(arg0: (byte)[], arg1: integer, arg2: integer): boolean
public "verify"(arg0: (byte)[]): boolean
public "getProvider"(): $Provider
public "getAlgorithm"(): string
/**
 * 
 * @deprecated
 */
public "getParameter"(arg0: string): any
public "initVerify"(arg0: $Certificate$$Type): void
public "initVerify"(arg0: $PublicKey$$Type): void
public "initSign"(arg0: $PrivateKey$$Type): void
public "initSign"(arg0: $PrivateKey$$Type, arg1: $SecureRandom$$Type): void
/**
 * 
 * @deprecated
 */
public "setParameter"(arg0: string, arg1: any): void
public "setParameter"(arg0: $AlgorithmParameterSpec$$Type): void
get "parameters"(): $AlgorithmParameters
get "provider"(): $Provider
get "algorithm"(): string
set "parameter"(value: $AlgorithmParameterSpec$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Signature$$Type = ($Signature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Signature_ = $Signature$$Type;
}}
declare module "java.security.ProtectionDomain" {
import {$Principal, $Principal$$Type} from "java.security.Principal"
import {$Permission, $Permission$$Type} from "java.security.Permission"
import {$PermissionCollection, $PermissionCollection$$Type} from "java.security.PermissionCollection"
import {$CodeSource, $CodeSource$$Type} from "java.security.CodeSource"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"

export class $ProtectionDomain {

constructor(arg0: $CodeSource$$Type, arg1: $PermissionCollection$$Type)
constructor(arg0: $CodeSource$$Type, arg1: $PermissionCollection$$Type, arg2: $ClassLoader$$Type, arg3: ($Principal$$Type)[])

public "toString"(): string
public "getClassLoader"(): $ClassLoader
public "getCodeSource"(): $CodeSource
public "implies"(arg0: $Permission$$Type): boolean
public "getPermissions"(): $PermissionCollection
public "getPrincipals"(): ($Principal)[]
public "staticPermissionsOnly"(): boolean
get "classLoader"(): $ClassLoader
get "codeSource"(): $CodeSource
get "permissions"(): $PermissionCollection
get "principals"(): ($Principal)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectionDomain$$Type = ($ProtectionDomain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtectionDomain_ = $ProtectionDomain$$Type;
}}
declare module "java.security.KeyPair" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$PrivateKey, $PrivateKey$$Type} from "java.security.PrivateKey"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"

export class $KeyPair implements $Serializable {

constructor(arg0: $PublicKey$$Type, arg1: $PrivateKey$$Type)

public "getPrivate"(): $PrivateKey
public "getPublic"(): $PublicKey
get "private"(): $PrivateKey
get "public"(): $PublicKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPair$$Type = ($KeyPair);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPair_ = $KeyPair$$Type;
}}
declare module "java.security.SignatureSpi" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SignatureSpi {

constructor()

public "clone"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureSpi$$Type = ($SignatureSpi);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignatureSpi_ = $SignatureSpi$$Type;
}}
declare module "java.security.CodeSource" {
import {$Certificate, $Certificate$$Type} from "java.security.cert.Certificate"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$URL, $URL$$Type} from "java.net.URL"
import {$CodeSigner, $CodeSigner$$Type} from "java.security.CodeSigner"

export class $CodeSource implements $Serializable {

constructor(arg0: $URL$$Type, arg1: ($Certificate$$Type)[])
constructor(arg0: $URL$$Type, arg1: ($CodeSigner$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLocation"(): $URL
public "getCertificates"(): ($Certificate)[]
public "implies"(arg0: $CodeSource$$Type): boolean
public "getCodeSigners"(): ($CodeSigner)[]
get "location"(): $URL
get "certificates"(): ($Certificate)[]
get "codeSigners"(): ($CodeSigner)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeSource$$Type = ($CodeSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodeSource_ = $CodeSource$$Type;
}}
declare module "java.security.PermissionCollection" {
import {$Permission, $Permission$$Type} from "java.security.Permission"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"

export class $PermissionCollection implements $Serializable {

constructor()

public "toString"(): string
public "add"(arg0: $Permission$$Type): void
public "elements"(): $Enumeration<($Permission)>
public "setReadOnly"(): void
public "implies"(arg0: $Permission$$Type): boolean
public "isReadOnly"(): boolean
public "elementsAsStream"(): $Stream<($Permission)>
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionCollection$$Type = ($PermissionCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionCollection_ = $PermissionCollection$$Type;
}}
declare module "java.security.spec.AlgorithmParameterSpec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AlgorithmParameterSpec {

}

export namespace $AlgorithmParameterSpec {
const probejs$$marker: never
}
export class $AlgorithmParameterSpec$$Static implements $AlgorithmParameterSpec {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlgorithmParameterSpec$$Type = ($AlgorithmParameterSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlgorithmParameterSpec_ = $AlgorithmParameterSpec$$Type;
}}
declare module "java.security.cert.CertPath" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Certificate, $Certificate$$Type} from "java.security.cert.Certificate"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$List, $List$$Type} from "java.util.List"

export class $CertPath implements $Serializable {


public "getEncodings"(): $Iterator<(string)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getCertificates"(): $List<($Certificate)>
public "getType"(): string
public "getEncoded"(arg0: string): (byte)[]
public "getEncoded"(): (byte)[]
get "encodings"(): $Iterator<(string)>
get "certificates"(): $List<($Certificate)>
get "type"(): string
get "encoded"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CertPath$$Type = ($CertPath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CertPath_ = $CertPath$$Type;
}}
declare module "java.security.PrivilegedAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PrivilegedAction<T> {

 "run"(): T

(): T
}

export namespace $PrivilegedAction {
const probejs$$marker: never
}
export class $PrivilegedAction$$Static<T> implements $PrivilegedAction {


 "run"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivilegedAction$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivilegedAction_<T> = $PrivilegedAction$$Type<(T)>;
}}
declare module "java.security.Timestamp" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$CertPath, $CertPath$$Type} from "java.security.cert.CertPath"
import {$Date, $Date$$Type} from "java.util.Date"

export class $Timestamp implements $Serializable {

constructor(arg0: $Date$$Type, arg1: $CertPath$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSignerCertPath"(): $CertPath
public "getTimestamp"(): $Date
get "signerCertPath"(): $CertPath
get "timestamp"(): $Date
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Timestamp$$Type = ($Timestamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Timestamp_ = $Timestamp$$Type;
}}
declare module "java.security.PublicKey" {
import {$Key, $Key$$Type} from "java.security.Key"

export interface $PublicKey extends $Key {

 "getEncoded"(): (byte)[]
 "getFormat"(): string
 "getAlgorithm"(): string
get "encoded"(): (byte)[]
get "format"(): string
get "algorithm"(): string
}

export namespace $PublicKey {
const serialVersionUID: long
const probejs$$marker: never
}
export class $PublicKey$$Static implements $PublicKey {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long


 "getEncoded"(): (byte)[]
 "getFormat"(): string
 "getAlgorithm"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicKey$$Type = ($PublicKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PublicKey_ = $PublicKey$$Type;
}}
declare module "java.security.Permission" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$PermissionCollection, $PermissionCollection$$Type} from "java.security.PermissionCollection"
import {$Guard, $Guard$$Type} from "java.security.Guard"

export class $Permission implements $Guard, $Serializable {

constructor(arg0: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "implies"(arg0: $Permission$$Type): boolean
public "getActions"(): string
public "newPermissionCollection"(): $PermissionCollection
public "checkGuard"(arg0: any): void
get "name"(): string
get "actions"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Permission$$Type = ($Permission);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Permission_ = $Permission$$Type;
}}
declare module "java.security.SecureRandomParameters" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SecureRandomParameters {

}

export namespace $SecureRandomParameters {
const probejs$$marker: never
}
export class $SecureRandomParameters$$Static implements $SecureRandomParameters {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureRandomParameters$$Type = ($SecureRandomParameters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecureRandomParameters_ = $SecureRandomParameters$$Type;
}}
declare module "java.security.CodeSigner" {
import {$Timestamp, $Timestamp$$Type} from "java.security.Timestamp"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$CertPath, $CertPath$$Type} from "java.security.cert.CertPath"

export class $CodeSigner implements $Serializable {

constructor(arg0: $CertPath$$Type, arg1: $Timestamp$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSignerCertPath"(): $CertPath
public "getTimestamp"(): $Timestamp
get "signerCertPath"(): $CertPath
get "timestamp"(): $Timestamp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeSigner$$Type = ($CodeSigner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodeSigner_ = $CodeSigner$$Type;
}}
declare module "java.security.PrivilegedExceptionAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PrivilegedExceptionAction<T> {

 "run"(): T

(): T
}

export namespace $PrivilegedExceptionAction {
const probejs$$marker: never
}
export class $PrivilegedExceptionAction$$Static<T> implements $PrivilegedExceptionAction {


 "run"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivilegedExceptionAction$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivilegedExceptionAction_<T> = $PrivilegedExceptionAction$$Type<(T)>;
}}
declare module "java.security.AccessControlContext" {
import {$Permission, $Permission$$Type} from "java.security.Permission"
import {$ProtectionDomain, $ProtectionDomain$$Type} from "java.security.ProtectionDomain"
import {$DomainCombiner, $DomainCombiner$$Type} from "java.security.DomainCombiner"

/**
 * 
 * @deprecated
 */
export class $AccessControlContext {

constructor(arg0: $AccessControlContext$$Type, arg1: $DomainCombiner$$Type)
constructor(arg0: ($ProtectionDomain$$Type)[])

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "checkPermission"(arg0: $Permission$$Type): void
public "getDomainCombiner"(): $DomainCombiner
get "domainCombiner"(): $DomainCombiner
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessControlContext$$Type = ($AccessControlContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessControlContext_ = $AccessControlContext$$Type;
}}
