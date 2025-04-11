declare module "java.io.FilenameFilter" {
import {$File, $File$$Type} from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FilenameFilter {

 "accept"(arg0: $File$$Type, arg1: string): boolean

(arg0: $File, arg1: string): boolean
}

export namespace $FilenameFilter {
const probejs$$marker: never
}
export class $FilenameFilter$$Static implements $FilenameFilter {


 "accept"(arg0: $File$$Type, arg1: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilenameFilter$$Type = ((arg0: $File, arg1: string) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilenameFilter_ = $FilenameFilter$$Type;
}}
declare module "java.io.ObjectInput" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$DataInput, $DataInput$$Type} from "java.io.DataInput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectInput extends $DataInput, $AutoCloseable {

 "readObject"(): any
 "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
 "read"(arg0: (byte)[]): integer
 "read"(): integer
 "close"(): void
 "skip"(arg0: long): long
 "available"(): integer
 "readLine"(): string
 "readInt"(): integer
 "readUTF"(): string
 "readChar"(): character
 "readFloat"(): float
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readByte"(): byte
 "readUnsignedByte"(): integer
 "readShort"(): short
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readDouble"(): double
}

export namespace $ObjectInput {
const probejs$$marker: never
}
export class $ObjectInput$$Static implements $ObjectInput {


 "readObject"(): any
 "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
 "read"(arg0: (byte)[]): integer
 "read"(): integer
 "close"(): void
 "skip"(arg0: long): long
 "available"(): integer
 "readLine"(): string
 "readInt"(): integer
 "readUTF"(): string
 "readChar"(): character
 "readFloat"(): float
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readByte"(): byte
 "readUnsignedByte"(): integer
 "readShort"(): short
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectInput$$Type = ($ObjectInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectInput_ = $ObjectInput$$Type;
}}
declare module "java.io.File" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$FileFilter, $FileFilter$$Type} from "java.io.FileFilter"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$URL, $URL$$Type} from "java.net.URL"
import {$FilenameFilter, $FilenameFilter$$Type} from "java.io.FilenameFilter"
import {$Path, $Path$$Type} from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $File implements $Serializable, $Comparable<($File)> {
static readonly "pathSeparator": string
static readonly "pathSeparatorChar": character
static readonly "separatorChar": character
static readonly "separator": string

constructor(arg0: string)
constructor(arg0: string, arg1: string)
constructor(arg0: $URI$$Type)
constructor(arg0: $File$$Type, arg1: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "length"(): long
public "toString"(): string
public "hashCode"(): integer
public "isHidden"(): boolean
public "compareTo"(arg0: $File$$Type): integer
public "compareTo"(arg0: any): integer
public "list"(): (string)[]
public "list"(arg0: $FilenameFilter$$Type): (string)[]
public "isAbsolute"(): boolean
public "getParent"(): string
public "delete"(): boolean
public "setReadOnly"(): boolean
public "canRead"(): boolean
public "getPath"(): string
public "toURI"(): $URI
/**
 * 
 * @deprecated
 */
public "toURL"(): $URL
public "getAbsolutePath"(): string
public "exists"(): boolean
public "createNewFile"(): boolean
public "renameTo"(arg0: $File$$Type): boolean
public "isDirectory"(): boolean
public "getCanonicalPath"(): string
public "getAbsoluteFile"(): $File
public "mkdir"(): boolean
public "getCanonicalFile"(): $File
public "getParentFile"(): $File
public "mkdirs"(): boolean
public "setWritable"(arg0: boolean): boolean
public "setWritable"(arg0: boolean, arg1: boolean): boolean
public "setReadable"(arg0: boolean, arg1: boolean): boolean
public "setReadable"(arg0: boolean): boolean
public "setExecutable"(arg0: boolean, arg1: boolean): boolean
public "setExecutable"(arg0: boolean): boolean
public static "listRoots"(): ($File)[]
public static "createTempFile"(arg0: string, arg1: string): $File
public static "createTempFile"(arg0: string, arg1: string, arg2: $File$$Type): $File
public "canWrite"(): boolean
public "isFile"(): boolean
public "lastModified"(): long
public "deleteOnExit"(): void
public "listFiles"(arg0: $FileFilter$$Type): ($File)[]
public "listFiles"(arg0: $FilenameFilter$$Type): ($File)[]
public "listFiles"(): ($File)[]
public "setLastModified"(arg0: long): boolean
public "canExecute"(): boolean
public "getTotalSpace"(): long
public "getFreeSpace"(): long
public "getUsableSpace"(): long
public "toPath"(): $Path
get "name"(): string
get "hidden"(): boolean
get "absolute"(): boolean
get "parent"(): string
get "path"(): string
get "absolutePath"(): string
get "directory"(): boolean
get "canonicalPath"(): string
get "absoluteFile"(): $File
get "canonicalFile"(): $File
get "parentFile"(): $File
set "writable"(value: boolean)
set "readable"(value: boolean)
set "executable"(value: boolean)
get "file"(): boolean
get "totalSpace"(): long
get "freeSpace"(): long
get "usableSpace"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $File$$Type = ($Path$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $File_ = $File$$Type;
}}
declare module "java.io.OutputStream" {
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Flushable, $Flushable$$Type} from "java.io.Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $OutputStream implements $Closeable, $Flushable {

constructor()

public "flush"(): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "close"(): void
public static "nullOutputStream"(): $OutputStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStream$$Type = ($OutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputStream_ = $OutputStream$$Type;
}}
declare module "java.io.FilterOutputStream" {
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterOutputStream extends $OutputStream {

constructor(arg0: $OutputStream$$Type)

public "flush"(): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: integer): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterOutputStream$$Type = ($FilterOutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterOutputStream_ = $FilterOutputStream$$Type;
}}
declare module "java.io.DataOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataOutput {

 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: string): void
 "writeBytes"(arg0: string): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeLong"(arg0: long): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: string): void
}

export namespace $DataOutput {
const probejs$$marker: never
}
export class $DataOutput$$Static implements $DataOutput {


 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: string): void
 "writeBytes"(arg0: string): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeLong"(arg0: long): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataOutput$$Type = ($DataOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataOutput_ = $DataOutput$$Type;
}}
declare module "java.io.Externalizable" {
import {$ObjectInput, $ObjectInput$$Type} from "java.io.ObjectInput"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ObjectOutput, $ObjectOutput$$Type} from "java.io.ObjectOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Externalizable extends $Serializable {

 "writeExternal"(arg0: $ObjectOutput$$Type): void
 "readExternal"(arg0: $ObjectInput$$Type): void
}

export namespace $Externalizable {
const probejs$$marker: never
}
export class $Externalizable$$Static implements $Externalizable {


 "writeExternal"(arg0: $ObjectOutput$$Type): void
 "readExternal"(arg0: $ObjectInput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Externalizable$$Type = ($Externalizable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Externalizable_ = $Externalizable$$Type;
}}
declare module "java.io.Flushable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Flushable {

 "flush"(): void

(): void
}

export namespace $Flushable {
const probejs$$marker: never
}
export class $Flushable$$Static implements $Flushable {


 "flush"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flushable$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Flushable_ = $Flushable$$Type;
}}
declare module "java.io.BufferedReader" {
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedReader extends $Reader {

constructor(arg0: $Reader$$Type, arg1: integer)
constructor(arg0: $Reader$$Type)

public "ready"(): boolean
public "reset"(): void
public "lines"(): $Stream<(string)>
public "read"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "read"(): integer
public "readLine"(): string
public "close"(): void
public "mark"(arg0: integer): void
public "skip"(arg0: long): long
public "markSupported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedReader$$Type = ($BufferedReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedReader_ = $BufferedReader$$Type;
}}
declare module "java.io.Writer" {
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Flushable, $Flushable$$Type} from "java.io.Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Writer implements $Appendable, $Closeable, $Flushable {


public "append"(arg0: character): $Writer
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Writer
public "append"(arg0: charseq): $Writer
public "flush"(): void
public "write"(arg0: integer): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: string): void
public "write"(arg0: string, arg1: integer, arg2: integer): void
public "write"(arg0: (character)[]): void
public "close"(): void
public static "nullWriter"(): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Writer$$Type = ($Writer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Writer_ = $Writer$$Type;
}}
declare module "java.io.FileFilter" {
import {$File, $File$$Type} from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileFilter {

 "accept"(arg0: $File$$Type): boolean

(arg0: $File): boolean
}

export namespace $FileFilter {
const probejs$$marker: never
}
export class $FileFilter$$Static implements $FileFilter {


 "accept"(arg0: $File$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileFilter$$Type = ((arg0: $File) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileFilter_ = $FileFilter$$Type;
}}
declare module "java.io.DataOutputStream" {
import {$FilterOutputStream, $FilterOutputStream$$Type} from "java.io.FilterOutputStream"
import {$DataOutput, $DataOutput$$Type} from "java.io.DataOutput"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataOutputStream extends $FilterOutputStream implements $DataOutput {

constructor(arg0: $OutputStream$$Type)

public "size"(): integer
public "flush"(): void
public "write"(arg0: integer): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "writeInt"(arg0: integer): void
public "writeUTF"(arg0: string): void
public "writeBytes"(arg0: string): void
public "writeChar"(arg0: integer): void
public "writeFloat"(arg0: float): void
public "writeBoolean"(arg0: boolean): void
public "writeByte"(arg0: integer): void
public "writeShort"(arg0: integer): void
public "writeLong"(arg0: long): void
public "writeDouble"(arg0: double): void
public "writeChars"(arg0: string): void
public "write"(arg0: (byte)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataOutputStream$$Type = ($DataOutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataOutputStream_ = $DataOutputStream$$Type;
}}
declare module "java.io.Serializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Serializable {

}

export namespace $Serializable {
const probejs$$marker: never
}
export class $Serializable$$Static implements $Serializable {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializable$$Type = ($Serializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializable_ = $Serializable$$Type;
}}
declare module "java.io.Reader" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$Readable, $Readable$$Type} from "java.lang.Readable"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reader implements $Readable, $Closeable {


public "ready"(): boolean
public static "nullReader"(): $Reader
public "reset"(): void
public "read"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "read"(arg0: $CharBuffer$$Type): integer
public "read"(): integer
public "read"(arg0: (character)[]): integer
public "close"(): void
public "mark"(arg0: integer): void
public "transferTo"(arg0: $Writer$$Type): long
public "skip"(arg0: long): long
public "markSupported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reader$$Type = ($Reader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reader_ = $Reader$$Type;
}}
declare module "java.io.ObjectOutput" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$DataOutput, $DataOutput$$Type} from "java.io.DataOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectOutput extends $DataOutput, $AutoCloseable {

 "flush"(): void
 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeObject"(arg0: any): void
 "close"(): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: string): void
 "writeBytes"(arg0: string): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeLong"(arg0: long): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: string): void
}

export namespace $ObjectOutput {
const probejs$$marker: never
}
export class $ObjectOutput$$Static implements $ObjectOutput {


 "flush"(): void
 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeObject"(arg0: any): void
 "close"(): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: string): void
 "writeBytes"(arg0: string): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeLong"(arg0: long): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectOutput$$Type = ($ObjectOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectOutput_ = $ObjectOutput$$Type;
}}
declare module "java.io.Closeable" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"

export interface $Closeable extends $AutoCloseable {

 "close"(): void

(): void
}

export namespace $Closeable {
const probejs$$marker: never
}
export class $Closeable$$Static implements $Closeable {


 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Closeable$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Closeable_ = $Closeable$$Type;
}}
declare module "java.io.PrintWriter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$File, $File$$Type} from "java.io.File"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintWriter extends $Writer {

constructor(arg0: string, arg1: string)
constructor(arg0: string)
constructor(arg0: string, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: string)
constructor(arg0: $File$$Type)
constructor(arg0: $Writer$$Type)
constructor(arg0: $Writer$$Type, arg1: boolean)
constructor(arg0: $OutputStream$$Type)
constructor(arg0: $OutputStream$$Type, arg1: boolean)
constructor(arg0: $OutputStream$$Type, arg1: boolean, arg2: $Charset$$Type)

public "println"(arg0: (character)[]): void
public "println"(arg0: double): void
public "println"(arg0: float): void
public "println"(arg0: string): void
public "println"(arg0: any): void
public "println"(): void
public "println"(arg0: character): void
public "println"(arg0: integer): void
public "println"(arg0: long): void
public "println"(arg0: boolean): void
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Writer
public "append"(arg0: character): $Writer
public "append"(arg0: charseq): $Appendable
public "flush"(): void
public "format"(arg0: $Locale$$Type, arg1: string, ...arg2: (any)[]): $PrintWriter
public "format"(arg0: string, ...arg1: (any)[]): $PrintWriter
public "printf"(arg0: string, ...arg1: (any)[]): $PrintWriter
public "printf"(arg0: $Locale$$Type, arg1: string, ...arg2: (any)[]): $PrintWriter
public "write"(arg0: integer): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: (character)[]): void
public "write"(arg0: string, arg1: integer, arg2: integer): void
public "write"(arg0: string): void
public "print"(arg0: float): void
public "print"(arg0: long): void
public "print"(arg0: integer): void
public "print"(arg0: character): void
public "print"(arg0: boolean): void
public "print"(arg0: any): void
public "print"(arg0: string): void
public "print"(arg0: (character)[]): void
public "print"(arg0: double): void
public "close"(): void
public "checkError"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintWriter$$Type = ($PrintWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintWriter_ = $PrintWriter$$Type;
}}
declare module "java.io.InputStream" {
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InputStream implements $Closeable {

constructor()

public "reset"(): void
public "read"(arg0: (byte)[]): integer
public "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "read"(): integer
public "close"(): void
public "readAllBytes"(): (byte)[]
public "mark"(arg0: integer): void
public "readNBytes"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "readNBytes"(arg0: integer): (byte)[]
public "transferTo"(arg0: $OutputStream$$Type): long
public "skip"(arg0: long): long
public "available"(): integer
public "markSupported"(): boolean
public static "nullInputStream"(): $InputStream
public "skipNBytes"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputStream$$Type = ($InputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputStream_ = $InputStream$$Type;
}}
declare module "java.io.BufferedWriter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedWriter extends $Writer {

constructor(arg0: $Writer$$Type)
constructor(arg0: $Writer$$Type, arg1: integer)

public "flush"(): void
public "write"(arg0: integer): void
public "write"(arg0: string, arg1: integer, arg2: integer): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "newLine"(): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedWriter$$Type = ($BufferedWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedWriter_ = $BufferedWriter$$Type;
}}
declare module "java.io.DataInput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataInput {

 "readLine"(): string
 "readInt"(): integer
 "readUTF"(): string
 "readChar"(): character
 "readFloat"(): float
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readByte"(): byte
 "readUnsignedByte"(): integer
 "readShort"(): short
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readDouble"(): double
}

export namespace $DataInput {
const probejs$$marker: never
}
export class $DataInput$$Static implements $DataInput {


 "readLine"(): string
 "readInt"(): integer
 "readUTF"(): string
 "readChar"(): character
 "readFloat"(): float
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readByte"(): byte
 "readUnsignedByte"(): integer
 "readShort"(): short
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataInput$$Type = ($DataInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataInput_ = $DataInput$$Type;
}}
declare module "java.io.PrintStream" {
import {$FilterOutputStream, $FilterOutputStream$$Type} from "java.io.FilterOutputStream"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$File, $File$$Type} from "java.io.File"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintStream extends $FilterOutputStream implements $Appendable, $Closeable {

constructor(arg0: $OutputStream$$Type, arg1: boolean, arg2: string)
constructor(arg0: $OutputStream$$Type, arg1: boolean, arg2: $Charset$$Type)
constructor(arg0: string)
constructor(arg0: string, arg1: string)
constructor(arg0: string, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: string)
constructor(arg0: $File$$Type)
constructor(arg0: $File$$Type, arg1: $Charset$$Type)
constructor(arg0: $OutputStream$$Type)
constructor(arg0: $OutputStream$$Type, arg1: boolean)

public "println"(arg0: string): void
public "println"(arg0: any): void
public "println"(arg0: float): void
public "println"(arg0: (character)[]): void
public "println"(arg0: double): void
public "println"(): void
public "println"(arg0: boolean): void
public "println"(arg0: character): void
public "println"(arg0: integer): void
public "println"(arg0: long): void
public "append"(arg0: charseq): $Appendable
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
public "append"(arg0: character): $Appendable
public "flush"(): void
public "format"(arg0: $Locale$$Type, arg1: string, ...arg2: (any)[]): $PrintStream
public "format"(arg0: string, ...arg1: (any)[]): $PrintStream
public "charset"(): $Charset
public "printf"(arg0: $Locale$$Type, arg1: string, ...arg2: (any)[]): $PrintStream
public "printf"(arg0: string, ...arg1: (any)[]): $PrintStream
public "write"(arg0: (byte)[]): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "print"(arg0: string): void
public "print"(arg0: (character)[]): void
public "print"(arg0: any): void
public "print"(arg0: boolean): void
public "print"(arg0: character): void
public "print"(arg0: integer): void
public "print"(arg0: double): void
public "print"(arg0: float): void
public "print"(arg0: long): void
public "close"(): void
public "writeBytes"(arg0: (byte)[]): void
public "checkError"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintStream$$Type = ($PrintStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintStream_ = $PrintStream$$Type;
}}
