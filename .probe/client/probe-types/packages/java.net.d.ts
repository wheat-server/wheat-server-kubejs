declare module "java.net.Proxy$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy$Type extends $Enum<($Proxy$Type)> {
static readonly "SOCKS": $Proxy$Type
static readonly "HTTP": $Proxy$Type
static readonly "DIRECT": $Proxy$Type


public static "values"(): ($Proxy$Type)[]
public static "valueOf"(arg0: string): $Proxy$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type$$Type = (("direct") | ("http") | ("socks"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy$Type_ = $Proxy$Type$$Type;
}}
declare module "java.net.FileNameMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileNameMap {

 "getContentTypeFor"(arg0: string): string

(arg0: string): string
}

export namespace $FileNameMap {
const probejs$$marker: never
}
export class $FileNameMap$$Static implements $FileNameMap {


 "getContentTypeFor"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNameMap$$Type = ((arg0: string) => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileNameMap_ = $FileNameMap$$Type;
}}
declare module "java.net.SocketImplFactory" {
import {$SocketImpl, $SocketImpl$$Type} from "java.net.SocketImpl"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketImplFactory {

 "createSocketImpl"(): $SocketImpl

(): $SocketImpl$$Type
}

export namespace $SocketImplFactory {
const probejs$$marker: never
}
export class $SocketImplFactory$$Static implements $SocketImplFactory {


 "createSocketImpl"(): $SocketImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketImplFactory$$Type = (() => $SocketImpl$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketImplFactory_ = $SocketImplFactory$$Type;
}}
declare module "java.net.NetworkInterface" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$List, $List$$Type} from "java.util.List"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"
import {$InterfaceAddress, $InterfaceAddress$$Type} from "java.net.InterfaceAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkInterface {


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isVirtual"(): boolean
public "getParent"(): $NetworkInterface
public static "getByName"(arg0: string): $NetworkInterface
public "getIndex"(): integer
public static "networkInterfaces"(): $Stream<($NetworkInterface)>
public "inetAddresses"(): $Stream<($InetAddress)>
public "getInetAddresses"(): $Enumeration<($InetAddress)>
public static "getNetworkInterfaces"(): $Enumeration<($NetworkInterface)>
public "getInterfaceAddresses"(): $List<($InterfaceAddress)>
public "getSubInterfaces"(): $Enumeration<($NetworkInterface)>
public "subInterfaces"(): $Stream<($NetworkInterface)>
public "getDisplayName"(): string
public static "getByIndex"(arg0: integer): $NetworkInterface
public static "getByInetAddress"(arg0: $InetAddress$$Type): $NetworkInterface
public "isUp"(): boolean
public "isLoopback"(): boolean
public "isPointToPoint"(): boolean
public "supportsMulticast"(): boolean
public "getHardwareAddress"(): (byte)[]
public "getMTU"(): integer
get "name"(): string
get "virtual"(): boolean
get "parent"(): $NetworkInterface
get "index"(): integer
get "interfaceAddresses"(): $List<($InterfaceAddress)>
get "displayName"(): string
get "up"(): boolean
get "loopback"(): boolean
get "pointToPoint"(): boolean
get "hardwareAddress"(): (byte)[]
get "mTU"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInterface$$Type = ($NetworkInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkInterface_ = $NetworkInterface$$Type;
}}
declare module "java.net.InetAddress" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetAddress implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getHostAddress"(): string
public "getAddress"(): (byte)[]
public static "getByName"(arg0: string): $InetAddress
public "getHostName"(): string
public "isLinkLocalAddress"(): boolean
public "isMulticastAddress"(): boolean
public "isAnyLocalAddress"(): boolean
public "isLoopbackAddress"(): boolean
public "isSiteLocalAddress"(): boolean
public "isMCGlobal"(): boolean
public "isMCNodeLocal"(): boolean
public "isMCLinkLocal"(): boolean
public "isMCSiteLocal"(): boolean
public "isMCOrgLocal"(): boolean
public "isReachable"(arg0: $NetworkInterface$$Type, arg1: integer, arg2: integer): boolean
public "isReachable"(arg0: integer): boolean
public static "getAllByName"(arg0: string): ($InetAddress)[]
public static "getByAddress"(arg0: (byte)[]): $InetAddress
public static "getByAddress"(arg0: string, arg1: (byte)[]): $InetAddress
public "getCanonicalHostName"(): string
public static "getLoopbackAddress"(): $InetAddress
public static "getLocalHost"(): $InetAddress
get "hostAddress"(): string
get "address"(): (byte)[]
get "hostName"(): string
get "linkLocalAddress"(): boolean
get "multicastAddress"(): boolean
get "anyLocalAddress"(): boolean
get "loopbackAddress"(): boolean
get "siteLocalAddress"(): boolean
get "mCGlobal"(): boolean
get "mCNodeLocal"(): boolean
get "mCLinkLocal"(): boolean
get "mCSiteLocal"(): boolean
get "mCOrgLocal"(): boolean
get "canonicalHostName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetAddress$$Type = ($InetAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InetAddress_ = $InetAddress$$Type;
}}
declare module "java.net.DatagramSocket" {
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$DatagramSocketImplFactory, $DatagramSocketImplFactory$$Type} from "java.net.DatagramSocketImplFactory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$DatagramChannel, $DatagramChannel$$Type} from "java.nio.channels.DatagramChannel"
import {$DatagramPacket, $DatagramPacket$$Type} from "java.net.DatagramPacket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocket implements $Closeable {

constructor()
constructor(arg0: integer)
constructor(arg0: $SocketAddress$$Type)
constructor(arg0: integer, arg1: $InetAddress$$Type)

public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $DatagramSocket
public "getLocalAddress"(): $InetAddress
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isClosed"(): boolean
public "connect"(arg0: $SocketAddress$$Type): void
public "connect"(arg0: $InetAddress$$Type, arg1: integer): void
public "close"(): void
public "getPort"(): integer
public "getChannel"(): $DatagramChannel
public "bind"(arg0: $SocketAddress$$Type): void
public "getBroadcast"(): boolean
public "disconnect"(): void
public "getReceiveBufferSize"(): integer
public "setReceiveBufferSize"(arg0: integer): void
public "setSoTimeout"(arg0: integer): void
public "setTrafficClass"(arg0: integer): void
public "setReuseAddress"(arg0: boolean): void
public "getSoTimeout"(): integer
public "getTrafficClass"(): integer
public "getSendBufferSize"(): integer
public "setSendBufferSize"(arg0: integer): void
public "send"(arg0: $DatagramPacket$$Type): void
public "receive"(arg0: $DatagramPacket$$Type): void
public "isBound"(): boolean
public "getInetAddress"(): $InetAddress
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
public "leaveGroup"(arg0: $SocketAddress$$Type, arg1: $NetworkInterface$$Type): void
public "joinGroup"(arg0: $SocketAddress$$Type, arg1: $NetworkInterface$$Type): void
public "setBroadcast"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public static "setDatagramSocketImplFactory"(arg0: $DatagramSocketImplFactory$$Type): void
get "connected"(): boolean
get "localAddress"(): $InetAddress
get "closed"(): boolean
get "port"(): integer
get "channel"(): $DatagramChannel
get "broadcast"(): boolean
get "receiveBufferSize"(): integer
set "receiveBufferSize"(value: integer)
set "soTimeout"(value: integer)
set "trafficClass"(value: integer)
set "reuseAddress"(value: boolean)
get "soTimeout"(): integer
get "trafficClass"(): integer
get "sendBufferSize"(): integer
set "sendBufferSize"(value: integer)
get "bound"(): boolean
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
set "broadcast"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramSocket$$Type = ($DatagramSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramSocket_ = $DatagramSocket$$Type;
}}
declare module "java.net.URLConnection" {
import {$ContentHandlerFactory, $ContentHandlerFactory$$Type} from "java.net.ContentHandlerFactory"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Permission, $Permission$$Type} from "java.security.Permission"
import {$FileNameMap, $FileNameMap$$Type} from "java.net.FileNameMap"
import {$List, $List$$Type} from "java.util.List"
import {$URL, $URL$$Type} from "java.net.URL"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLConnection {


public "getContentLengthLong"(): long
public "getHeaderFields"(): $Map<(string), ($List<(string)>)>
public "getHeaderField"(arg0: integer): string
public "getHeaderField"(arg0: string): string
public static "guessContentTypeFromStream"(arg0: $InputStream$$Type): string
public static "guessContentTypeFromName"(arg0: string): string
public "addRequestProperty"(arg0: string, arg1: string): void
public "getRequestProperty"(arg0: string): string
public "getRequestProperties"(): $Map<(string), ($List<(string)>)>
public "getHeaderFieldKey"(arg0: integer): string
public "getContentType"(): string
public "getDefaultUseCaches"(): boolean
public static "getDefaultUseCaches"(arg0: string): boolean
public "getHeaderFieldLong"(arg0: string, arg1: long): long
public "getHeaderFieldDate"(arg0: string, arg1: long): long
public static "getFileNameMap"(): $FileNameMap
public static "setFileNameMap"(arg0: $FileNameMap$$Type): void
public "setConnectTimeout"(arg0: integer): void
public "getConnectTimeout"(): integer
public "setReadTimeout"(arg0: integer): void
public "getReadTimeout"(): integer
public "getContentEncoding"(): string
public "getExpiration"(): long
public "getHeaderFieldInt"(arg0: string, arg1: integer): integer
public "setDoInput"(arg0: boolean): void
public "getDoInput"(): boolean
public "setDoOutput"(arg0: boolean): void
public "getDoOutput"(): boolean
public "setAllowUserInteraction"(arg0: boolean): void
public "getAllowUserInteraction"(): boolean
public static "setDefaultAllowUserInteraction"(arg0: boolean): void
public static "getDefaultAllowUserInteraction"(): boolean
public "getUseCaches"(): boolean
public "setIfModifiedSince"(arg0: long): void
public "getIfModifiedSince"(): long
public "setDefaultUseCaches"(arg0: boolean): void
public static "setDefaultUseCaches"(arg0: string, arg1: boolean): void
/**
 * 
 * @deprecated
 */
public static "setDefaultRequestProperty"(arg0: string, arg1: string): void
/**
 * 
 * @deprecated
 */
public static "getDefaultRequestProperty"(arg0: string): string
public static "setContentHandlerFactory"(arg0: $ContentHandlerFactory$$Type): void
public "getOutputStream"(): $OutputStream
public "toString"(): string
public "connect"(): void
public "getInputStream"(): $InputStream
public "getContent"(): any
public "getContent"(arg0: ($Class$$Type<(any)>)[]): any
public "getPermission"(): $Permission
public "getDate"(): long
public "setUseCaches"(arg0: boolean): void
public "getLastModified"(): long
public "getContentLength"(): integer
public "getURL"(): $URL
public "setRequestProperty"(arg0: string, arg1: string): void
get "contentLengthLong"(): long
get "headerFields"(): $Map<(string), ($List<(string)>)>
get "requestProperties"(): $Map<(string), ($List<(string)>)>
get "contentType"(): string
get "defaultUseCaches"(): boolean
set "connectTimeout"(value: integer)
get "connectTimeout"(): integer
set "readTimeout"(value: integer)
get "readTimeout"(): integer
get "contentEncoding"(): string
get "expiration"(): long
set "doInput"(value: boolean)
get "doInput"(): boolean
set "doOutput"(value: boolean)
get "doOutput"(): boolean
set "allowUserInteraction"(value: boolean)
get "allowUserInteraction"(): boolean
get "useCaches"(): boolean
set "ifModifiedSince"(value: long)
get "ifModifiedSince"(): long
set "defaultUseCaches"(value: boolean)
get "outputStream"(): $OutputStream
get "inputStream"(): $InputStream
get "content"(): any
get "permission"(): $Permission
get "date"(): long
set "useCaches"(value: boolean)
get "lastModified"(): long
get "contentLength"(): integer
get "uRL"(): $URL
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLConnection$$Type = ($URLConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLConnection_ = $URLConnection$$Type;
}}
declare module "java.net.URI" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$URL, $URL$$Type} from "java.net.URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URI implements $Comparable<($URI)>, $Serializable {

constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string)
constructor(arg0: string, arg1: string, arg2: string, arg3: string)
constructor(arg0: string, arg1: string, arg2: string)
constructor(arg0: string)
constructor(arg0: string, arg1: string, arg2: string, arg3: integer, arg4: string, arg5: string, arg6: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $URI$$Type): integer
public "isAbsolute"(): boolean
public "resolve"(arg0: string): $URI
public "resolve"(arg0: $URI$$Type): $URI
public static "create"(arg0: string): $URI
public "getScheme"(): string
public "isOpaque"(): boolean
public "getRawAuthority"(): string
public "getRawFragment"(): string
public "getRawQuery"(): string
public "getRawPath"(): string
public "getHost"(): string
public "getPort"(): integer
public "getAuthority"(): string
public "getQuery"(): string
public "getPath"(): string
public "getUserInfo"(): string
public "toURL"(): $URL
public "normalize"(): $URI
public "relativize"(arg0: $URI$$Type): $URI
public "getRawSchemeSpecificPart"(): string
public "parseServerAuthority"(): $URI
public "getSchemeSpecificPart"(): string
public "getRawUserInfo"(): string
public "getFragment"(): string
public "toASCIIString"(): string
get "absolute"(): boolean
get "scheme"(): string
get "opaque"(): boolean
get "rawAuthority"(): string
get "rawFragment"(): string
get "rawQuery"(): string
get "rawPath"(): string
get "host"(): string
get "port"(): integer
get "authority"(): string
get "query"(): string
get "path"(): string
get "userInfo"(): string
get "rawSchemeSpecificPart"(): string
get "schemeSpecificPart"(): string
get "rawUserInfo"(): string
get "fragment"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URI$$Type = ($URI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URI_ = $URI$$Type;
}}
declare module "java.net.URL" {
import {$URLStreamHandler, $URLStreamHandler$$Type} from "java.net.URLStreamHandler"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$URI, $URI$$Type} from "java.net.URI"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$URLConnection, $URLConnection$$Type} from "java.net.URLConnection"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$URLStreamHandlerFactory, $URLStreamHandlerFactory$$Type} from "java.net.URLStreamHandlerFactory"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URL implements $Serializable {

/**
 * 
 * @deprecated
 */
constructor(arg0: $URL$$Type, arg1: string, arg2: $URLStreamHandler$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $URL$$Type, arg1: string)
/**
 * 
 * @deprecated
 */
constructor(arg0: string)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: string, arg2: integer, arg3: string)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: string, arg2: string)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: $URLStreamHandler$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $URI$$Type, arg1: $URLStreamHandler$$Type): $URL
public "openStream"(): $InputStream
public "getHost"(): string
public "getPort"(): integer
public "getDefaultPort"(): integer
public "sameFile"(arg0: $URL$$Type): boolean
public "toExternalForm"(): string
public "openConnection"(): $URLConnection
public "openConnection"(arg0: $Proxy$$Type): $URLConnection
public "getContent"(): any
public "getContent"(arg0: ($Class$$Type<(any)>)[]): any
public "getProtocol"(): string
public "getAuthority"(): string
public "getFile"(): string
public "getRef"(): string
public "getQuery"(): string
public "getPath"(): string
public "getUserInfo"(): string
public "toURI"(): $URI
public static "setURLStreamHandlerFactory"(arg0: $URLStreamHandlerFactory$$Type): void
get "host"(): string
get "port"(): integer
get "defaultPort"(): integer
get "content"(): any
get "protocol"(): string
get "authority"(): string
get "file"(): string
get "ref"(): string
get "query"(): string
get "path"(): string
get "userInfo"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URL$$Type = ($URL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URL_ = $URL$$Type;
}}
declare module "java.net.InterfaceAddress" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterfaceAddress {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAddress"(): $InetAddress
public "getBroadcast"(): $InetAddress
public "getNetworkPrefixLength"(): short
get "address"(): $InetAddress
get "broadcast"(): $InetAddress
get "networkPrefixLength"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceAddress$$Type = ($InterfaceAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceAddress_ = $InterfaceAddress$$Type;
}}
declare module "java.net.ServerSocket" {
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$ServerSocketChannel, $ServerSocketChannel$$Type} from "java.nio.channels.ServerSocketChannel"
import {$Socket, $Socket$$Type} from "java.net.Socket"
import {$SocketImplFactory, $SocketImplFactory$$Type} from "java.net.SocketImplFactory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocket implements $Closeable {

constructor(arg0: integer, arg1: integer, arg2: $InetAddress$$Type)
constructor(arg0: integer, arg1: integer)
constructor()
constructor(arg0: integer)

public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $ServerSocket
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isClosed"(): boolean
public "toString"(): string
public "accept"(): $Socket
public "close"(): void
public "getChannel"(): $ServerSocketChannel
public "bind"(arg0: $SocketAddress$$Type, arg1: integer): void
public "bind"(arg0: $SocketAddress$$Type): void
public "getReceiveBufferSize"(): integer
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
public "setReceiveBufferSize"(arg0: integer): void
public "setSoTimeout"(arg0: integer): void
public "setReuseAddress"(arg0: boolean): void
public "getSoTimeout"(): integer
public "isBound"(): boolean
/**
 * 
 * @deprecated
 */
public static "setSocketFactory"(arg0: $SocketImplFactory$$Type): void
public "getInetAddress"(): $InetAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
get "closed"(): boolean
get "channel"(): $ServerSocketChannel
get "receiveBufferSize"(): integer
set "receiveBufferSize"(value: integer)
set "soTimeout"(value: integer)
set "reuseAddress"(value: boolean)
get "soTimeout"(): integer
get "bound"(): boolean
get "inetAddress"(): $InetAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSocket$$Type = ($ServerSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerSocket_ = $ServerSocket$$Type;
}}
declare module "java.net.URLStreamHandlerFactory" {
import {$URLStreamHandler, $URLStreamHandler$$Type} from "java.net.URLStreamHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $URLStreamHandlerFactory {

 "createURLStreamHandler"(arg0: string): $URLStreamHandler

(arg0: string): $URLStreamHandler$$Type
}

export namespace $URLStreamHandlerFactory {
const probejs$$marker: never
}
export class $URLStreamHandlerFactory$$Static implements $URLStreamHandlerFactory {


 "createURLStreamHandler"(arg0: string): $URLStreamHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandlerFactory$$Type = ((arg0: string) => $URLStreamHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLStreamHandlerFactory_ = $URLStreamHandlerFactory$$Type;
}}
declare module "java.net.SocketAddress" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketAddress implements $Serializable {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketAddress$$Type = ($SocketAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketAddress_ = $SocketAddress$$Type;
}}
declare module "java.net.ContentHandlerFactory" {
import {$ContentHandler, $ContentHandler$$Type} from "java.net.ContentHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ContentHandlerFactory {

 "createContentHandler"(arg0: string): $ContentHandler

(arg0: string): $ContentHandler$$Type
}

export namespace $ContentHandlerFactory {
const probejs$$marker: never
}
export class $ContentHandlerFactory$$Static implements $ContentHandlerFactory {


 "createContentHandler"(arg0: string): $ContentHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandlerFactory$$Type = ((arg0: string) => $ContentHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentHandlerFactory_ = $ContentHandlerFactory$$Type;
}}
declare module "java.net.ProtocolFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProtocolFamily {

 "name"(): string

(): string
}

export namespace $ProtocolFamily {
const probejs$$marker: never
}
export class $ProtocolFamily$$Static implements $ProtocolFamily {


 "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtocolFamily$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtocolFamily_ = $ProtocolFamily$$Type;
}}
declare module "java.net.SocketOption" {
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOption<T> {

 "name"(): string
 "type"(): $Class<(T)>
}

export namespace $SocketOption {
const probejs$$marker: never
}
export class $SocketOption$$Static<T> implements $SocketOption {


 "name"(): string
 "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketOption$$Type<T> = ($SocketOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketOption_<T> = $SocketOption$$Type<(T)>;
}}
declare module "java.net.ContentHandler" {
import {$URLConnection, $URLConnection$$Type} from "java.net.URLConnection"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ContentHandler {

constructor()

public "getContent"(arg0: $URLConnection$$Type): any
public "getContent"(arg0: $URLConnection$$Type, arg1: ($Class$$Type<(any)>)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandler$$Type = ($ContentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentHandler_ = $ContentHandler$$Type;
}}
declare module "java.net.SocketImpl" {
import {$SocketOptions, $SocketOptions$$Type} from "java.net.SocketOptions"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketImpl implements $SocketOptions {

constructor()

public "toString"(): string
public "setOption"(arg0: integer, arg1: any): void
public "getOption"(arg0: integer): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketImpl$$Type = ($SocketImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketImpl_ = $SocketImpl$$Type;
}}
declare module "java.net.Socket" {
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$SocketChannel, $SocketChannel$$Type} from "java.nio.channels.SocketChannel"
import {$SocketImplFactory, $SocketImplFactory$$Type} from "java.net.SocketImplFactory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Socket implements $Closeable {

constructor()
constructor(arg0: $Proxy$$Type)
constructor(arg0: $InetAddress$$Type, arg1: integer)
constructor(arg0: string, arg1: integer)
constructor(arg0: string, arg1: integer, arg2: $InetAddress$$Type, arg3: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: $InetAddress$$Type, arg1: integer, arg2: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: integer, arg2: boolean)
constructor(arg0: $InetAddress$$Type, arg1: integer, arg2: $InetAddress$$Type, arg3: integer)

public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $Socket
public "getLocalAddress"(): $InetAddress
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "shutdownInput"(): void
public "shutdownOutput"(): void
public "getOutputStream"(): $OutputStream
public "isClosed"(): boolean
public "toString"(): string
public "connect"(arg0: $SocketAddress$$Type): void
public "connect"(arg0: $SocketAddress$$Type, arg1: integer): void
public "close"(): void
public "getPort"(): integer
public "getInputStream"(): $InputStream
public "getChannel"(): $SocketChannel
public "bind"(arg0: $SocketAddress$$Type): void
public "getReceiveBufferSize"(): integer
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
public "setReceiveBufferSize"(arg0: integer): void
public "setKeepAlive"(arg0: boolean): void
public "setSoTimeout"(arg0: integer): void
public "setTcpNoDelay"(arg0: boolean): void
public "setTrafficClass"(arg0: integer): void
public "setReuseAddress"(arg0: boolean): void
public "setOOBInline"(arg0: boolean): void
public "setSoLinger"(arg0: boolean, arg1: integer): void
public "getSoTimeout"(): integer
public "getSoLinger"(): integer
public "getTrafficClass"(): integer
public "getSendBufferSize"(): integer
public "setSendBufferSize"(arg0: integer): void
public "isBound"(): boolean
public "isOutputShutdown"(): boolean
public "isInputShutdown"(): boolean
public "getInetAddress"(): $InetAddress
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getTcpNoDelay"(): boolean
public "getKeepAlive"(): boolean
public "getReuseAddress"(): boolean
public "sendUrgentData"(arg0: integer): void
public "getOOBInline"(): boolean
/**
 * 
 * @deprecated
 */
public static "setSocketImplFactory"(arg0: $SocketImplFactory$$Type): void
get "connected"(): boolean
get "localAddress"(): $InetAddress
get "outputStream"(): $OutputStream
get "closed"(): boolean
get "port"(): integer
get "inputStream"(): $InputStream
get "channel"(): $SocketChannel
get "receiveBufferSize"(): integer
set "receiveBufferSize"(value: integer)
set "keepAlive"(value: boolean)
set "soTimeout"(value: integer)
set "tcpNoDelay"(value: boolean)
set "trafficClass"(value: integer)
set "reuseAddress"(value: boolean)
set "oOBInline"(value: boolean)
get "soTimeout"(): integer
get "soLinger"(): integer
get "trafficClass"(): integer
get "sendBufferSize"(): integer
set "sendBufferSize"(value: integer)
get "bound"(): boolean
get "outputShutdown"(): boolean
get "inputShutdown"(): boolean
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "tcpNoDelay"(): boolean
get "keepAlive"(): boolean
get "reuseAddress"(): boolean
get "oOBInline"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Socket$$Type = ($Socket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Socket_ = $Socket$$Type;
}}
declare module "java.net.Proxy" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Proxy$Type, $Proxy$Type$$Type} from "java.net.Proxy$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy {
static readonly "NO_PROXY": $Proxy

constructor(arg0: $Proxy$Type$$Type, arg1: $SocketAddress$$Type)

public "type"(): $Proxy$Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "address"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$$Type = ($Proxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy_ = $Proxy$$Type;
}}
declare module "java.net.URLStreamHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLStreamHandler {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandler$$Type = ($URLStreamHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLStreamHandler_ = $URLStreamHandler$$Type;
}}
declare module "java.net.InetSocketAddress" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetSocketAddress extends $SocketAddress {

constructor(arg0: $InetAddress$$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: string, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAddress"(): $InetAddress
public "getPort"(): integer
public "isUnresolved"(): boolean
public "getHostName"(): string
public "getHostString"(): string
public static "createUnresolved"(arg0: string, arg1: integer): $InetSocketAddress
get "address"(): $InetAddress
get "port"(): integer
get "unresolved"(): boolean
get "hostName"(): string
get "hostString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetSocketAddress$$Type = ($InetSocketAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InetSocketAddress_ = $InetSocketAddress$$Type;
}}
