declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType$Builder" {
import {$JSLambdaType, $JSLambdaType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType"
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSLambdaType$Builder {
 "arrowFunction": boolean
readonly "params": $List<($ParamDecl)>

constructor()

public "returnType"(type: $BaseType$$Type): $JSLambdaType$Builder
public "method"(): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$$Type): $JSLambdaType$Builder
public "build"(): $JSLambdaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$Builder$$Type = ($JSLambdaType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSLambdaType$Builder_ = $JSLambdaType$Builder$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType" {
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$MethodDecl, $MethodDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.MethodDecl"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSLambdaType extends $BaseType {
readonly "params": $List<($ParamDecl)>
readonly "returnType": $BaseType

constructor(params: $List$$Type<($ParamDecl$$Type)>, returnType: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
public "asMethod"(methodName: string): $MethodDecl
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$$Type = ($JSLambdaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSLambdaType_ = $JSLambdaType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.snippet.Snippet" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$List, $List$$Type} from "java.util.List"
import {$Variable, $Variable$$Type} from "moe.wolfgirl.probejs.lang.snippet.parts.Variable"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export class $Snippet {
readonly "name": string

constructor(name: string)

public "newline"(): $Snippet
public "compile"(): $JsonObject
public "prefix"(prefix: string): $Snippet
public "literal"(content: string): $Snippet
public "description"(description: string): $Snippet
public "getPrefixes"(): $List<(string)>
public "registry"<T>(registry: $ResourceKey$$Type<($Registry<(T)>)>): $Snippet
public "tabStop"(enumeration: integer): $Snippet
public "tabStop"(): $Snippet
public "tabStop"(enumeration: integer, defaultValue: string): $Snippet
public "variable"(variable: $Variable$$Type): $Snippet
public "choices"(choices: $Collection$$Type<(string)>): $Snippet
public "choices"(enumeration: integer, choices: $Collection$$Type<(string)>): $Snippet
get "prefixes"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Snippet$$Type = ($Snippet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Snippet_ = $Snippet$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.base.ClassProvider" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $ClassProvider {

 "getClasses"(): $Collection<($Class<(any)>)>

(): $Collection$$Type<($Class$$Type<(any)>)>
get "classes"(): $Collection<($Class<(any)>)>
}

export namespace $ClassProvider {
const probejs$$marker: never
}
export class $ClassProvider$$Static implements $ClassProvider {


 "getClasses"(): $Collection<($Class<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassProvider$$Type = (() => $Collection$$Type<($Class$$Type<(any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassProvider_ = $ClassProvider$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$JSMemberType, $JSMemberType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSArrayType extends $JSMemberType {
readonly "members": $Collection<($JSParam)>

constructor(members: $Collection$$Type<($JSParam$$Type)>)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSArrayType$$Type = ($JSArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSArrayType_ = $JSArrayType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSVariableType extends $BaseType {
readonly "symbol": string
 "extendsType": $BaseType

constructor(symbol: string, extendsType: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSVariableType$$Type = ($TSVariableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSVariableType_ = $TSVariableType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType$Intersection" {
import {$JSJoinedType, $JSJoinedType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSJoinedType$Intersection extends $JSJoinedType {
readonly "types": $List<($BaseType)>
readonly "delimiter": string

constructor(types: $List$$Type<($BaseType$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$Intersection$$Type = ($JSJoinedType$Intersection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSJoinedType$Intersection_ = $JSJoinedType$Intersection$$Type;
}}
declare module "moe.wolfgirl.probejs.events.ScriptEventJS" {
import {$ScriptDump, $ScriptDump$$Type} from "moe.wolfgirl.probejs.lang.typescript.ScriptDump"
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$TypeConverter, $TypeConverter$$Type} from "moe.wolfgirl.probejs.lang.transpiler.TypeConverter"
import {$ScriptType, $ScriptType$$Type} from "dev.latvian.mods.kubejs.script.ScriptType"

export class $ScriptEventJS implements $KubeEvent {

constructor(dump: $ScriptDump$$Type)

public "getScriptType"(): $ScriptType
public "getTypeConverter"(): $TypeConverter
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "scriptType"(): $ScriptType
get "typeConverter"(): $TypeConverter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptEventJS$$Type = ($ScriptEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptEventJS_ = $ScriptEventJS$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.VillagerType" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$VillagerTypeBuilder, $VillagerTypeBuilder$$Type} from "dev.latvian.mods.kubejs.misc.VillagerTypeBuilder"
import {$VillagerType as $VillagerType$0, $VillagerType$$Type as $VillagerType$0$$Type} from "net.minecraft.world.entity.npc.VillagerType"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $VillagerType extends $RegistryKubeEvent<($VillagerType$0)> {


public "create"(name: string): $VillagerTypeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerType$$Type = ($VillagerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerType_ = $VillagerType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode" {
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"

export class $CommentableCode extends $Code {
readonly "comments": $List<(string)>

constructor()

public "newline"(...comments: (string)[]): void
public "format"(declaration: $Declaration$$Type): $List<(string)>
public "addComment"(...comments: (string)[]): void
public "addCommentAtStart"(...comments: (string)[]): void
public "formatComments"(): $List<(string)>
public "formatRaw"(declaration: $Declaration$$Type): $List<(string)>
public "linebreak"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentableCode$$Type = ($CommentableCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentableCode_ = $CommentableCode$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.Attribute" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$Attribute as $Attribute$0, $Attribute$$Type as $Attribute$0$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeBuilder, $AttributeBuilder$$Type} from "dev.latvian.mods.kubejs.entity.AttributeBuilder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $Attribute extends $RegistryKubeEvent<($Attribute$0)> {


public "create"(name: string): $AttributeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attribute$$Type = ($Attribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attribute_ = $Attribute$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl" {
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $ParamDecl {
 "name": string
 "varArg": boolean
 "optional": boolean
 "type": $BaseType

constructor(name: string, type: $BaseType$$Type, varArg: boolean, optional: boolean)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "format"(index: integer, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
public static "formatParams"(params: $List$$Type<($ParamDecl$$Type)>, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamDecl$$Type = ($ParamDecl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParamDecl_ = $ParamDecl$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo" {
import {$TypeVariableHolder, $TypeVariableHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$JavaMembers$MethodInfo, $JavaMembers$MethodInfo$$Type} from "dev.latvian.mods.rhino.JavaMembers$MethodInfo"
import {$Map, $Map$$Type} from "java.util.Map"
import {$VariableType, $VariableType$$Type} from "moe.wolfgirl.probejs.lang.java.type.impl.VariableType"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$List, $List$$Type} from "java.util.List"
import {$TypeDescriptor, $TypeDescriptor$$Type} from "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor"
import {$ParamInfo, $ParamInfo$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.ParamInfo"
import {$MethodInfo$MethodAttributes, $MethodInfo$MethodAttributes$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo$MethodAttributes"

export class $MethodInfo extends $TypeVariableHolder {
readonly "variableTypes": $List<($VariableType)>
readonly "name": string
readonly "attributes": $MethodInfo$MethodAttributes
readonly "params": $List<($ParamInfo)>
 "returnType": $TypeDescriptor

constructor(methodInfo: $JavaMembers$MethodInfo$$Type, remapper: $Map$$Type<($TypeVariable$$Type<(any)>), ($Type$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$$Type = ($MethodInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodInfo_ = $MethodInfo$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.snippet.SnippetDump" {
import {$Snippet, $Snippet$$Type} from "moe.wolfgirl.probejs.lang.snippet.Snippet"
import {$List, $List$$Type} from "java.util.List"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $SnippetDump {
 "snippets": $List<($Snippet)>

constructor()

public "writeTo"(path: $Path$$Type): void
public "fromDocs"(): void
public "snippet"(name: string): $Snippet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetDump$$Type = ($SnippetDump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetDump_ = $SnippetDump$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSTypeOfType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSTypeOfType extends $BaseType {
readonly "inner": $BaseType

constructor(inner: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSTypeOfType$$Type = ($JSTypeOfType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSTypeOfType_ = $JSTypeOfType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.Types" {
import {$JSPrimitiveType, $JSPrimitiveType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSPrimitiveType"
import {$TSOptionalType, $TSOptionalType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSOptionalType"
import {$JSArrayType$Builder, $JSArrayType$Builder$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType$Builder"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$JSObjectType$Builder, $JSObjectType$Builder$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType$Builder"
import {$ImportInfo$Type, $ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$JSTypeOfType, $JSTypeOfType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSTypeOfType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$TSParamType, $TSParamType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSParamType"
import {$JSJoinedType$Intersection, $JSJoinedType$Intersection$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType$Intersection"
import {$TSVariableType, $TSVariableType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType"
import {$JSArrayType, $JSArrayType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$JSLambdaType$Builder, $JSLambdaType$Builder$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType$Builder"
import {$TSClassType, $TSClassType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSClassType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export interface $Types {

}

export namespace $Types {
const NUMBER: $JSPrimitiveType
const NULL: $JSPrimitiveType
const EMPTY_ARRAY: $JSArrayType
const NEVER: $JSPrimitiveType
const STRING: $JSPrimitiveType
const THIS: $JSPrimitiveType
const UNKNOWN: $JSPrimitiveType
const ANY: $JSPrimitiveType
const VOID: $JSPrimitiveType
const OBJECT: $JSPrimitiveType
const BOOLEAN: $JSPrimitiveType
function type(classPath: $ClassPath$$Type): $TSClassType
function type(clazz: $Class$$Type<(any)>): $TSClassType
function filter(type: $BaseType$$Type, typePredicate: $Predicate$$Type<($BaseType)>): $BaseType
function generic(symbol: string): $TSVariableType
function generic(symbol: string, extendOn: $BaseType$$Type): $TSVariableType
function lambda(): $JSLambdaType$Builder
function optional(type: $BaseType$$Type): $TSOptionalType
function literal(content: any): $JSPrimitiveType
function or(...types: ($BaseType$$Type)[]): $BaseType
function object(): $JSObjectType$Builder
function and(...types: ($BaseType$$Type)[]): $JSJoinedType$Intersection
function custom(formatter: $BiFunction$$Type<($Declaration), ($BaseType$FormatType), (string)>, ...imports: ($ImportInfo$$Type)[]): $BaseType
function arrayOf(): $JSArrayType$Builder
function primitive(type: string): $JSPrimitiveType
function parameterized(base: $BaseType$$Type, ...params: ($BaseType$$Type)[]): $TSParamType
function ignoreContext(type: $BaseType$$Type, formatType: $BaseType$FormatType$$Type): $BaseType
function ignoreImport(type: $BaseType$$Type, importType: $ImportInfo$Type$$Type): $BaseType
function typeMaybeGeneric(clazz: $Class$$Type<(any)>): $BaseType
function typeOf(clazz: $Class$$Type<(any)>): $JSTypeOfType
function typeOf(classType: $BaseType$$Type): $JSTypeOfType
function typeOf(classPath: $ClassPath$$Type): $JSTypeOfType
const probejs$$marker: never
}
export class $Types$$Static implements $Types {
static readonly "NUMBER": $JSPrimitiveType
static readonly "NULL": $JSPrimitiveType
static readonly "EMPTY_ARRAY": $JSArrayType
static readonly "NEVER": $JSPrimitiveType
static readonly "STRING": $JSPrimitiveType
static readonly "THIS": $JSPrimitiveType
static readonly "UNKNOWN": $JSPrimitiveType
static readonly "ANY": $JSPrimitiveType
static readonly "VOID": $JSPrimitiveType
static readonly "OBJECT": $JSPrimitiveType
static readonly "BOOLEAN": $JSPrimitiveType


static "type"(classPath: $ClassPath$$Type): $TSClassType
static "type"(clazz: $Class$$Type<(any)>): $TSClassType
static "filter"(type: $BaseType$$Type, typePredicate: $Predicate$$Type<($BaseType)>): $BaseType
static "generic"(symbol: string): $TSVariableType
static "generic"(symbol: string, extendOn: $BaseType$$Type): $TSVariableType
static "lambda"(): $JSLambdaType$Builder
static "optional"(type: $BaseType$$Type): $TSOptionalType
static "literal"(content: any): $JSPrimitiveType
static "or"(...types: ($BaseType$$Type)[]): $BaseType
static "object"(): $JSObjectType$Builder
static "and"(...types: ($BaseType$$Type)[]): $JSJoinedType$Intersection
static "custom"(formatter: $BiFunction$$Type<($Declaration), ($BaseType$FormatType), (string)>, ...imports: ($ImportInfo$$Type)[]): $BaseType
static "arrayOf"(): $JSArrayType$Builder
static "primitive"(type: string): $JSPrimitiveType
static "parameterized"(base: $BaseType$$Type, ...params: ($BaseType$$Type)[]): $TSParamType
static "ignoreContext"(type: $BaseType$$Type, formatType: $BaseType$FormatType$$Type): $BaseType
static "ignoreImport"(type: $BaseType$$Type, importType: $ImportInfo$Type$$Type): $BaseType
static "typeMaybeGeneric"(clazz: $Class$$Type<(any)>): $BaseType
static "typeOf"(clazz: $Class$$Type<(any)>): $JSTypeOfType
static "typeOf"(classType: $BaseType$$Type): $JSTypeOfType
static "typeOf"(classPath: $ClassPath$$Type): $JSTypeOfType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Types$$Type = ($Types);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Types_ = $Types$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType$Builder" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$JSArrayType, $JSArrayType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType"
import {$JSMemberType$Builder, $JSMemberType$Builder$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType$Builder"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"

export class $JSArrayType$Builder extends $JSMemberType$Builder<($JSArrayType$Builder), ($JSArrayType)> {
readonly "members": $Collection<($JSParam)>

constructor()

public "build"(): $JSArrayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSArrayType$Builder$$Type = ($JSArrayType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSArrayType$Builder_ = $JSArrayType$Builder$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.CreativeModeTab" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$CreativeModeTab as $CreativeModeTab$0, $CreativeModeTab$$Type as $CreativeModeTab$0$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$CreativeTabBuilder, $CreativeTabBuilder$$Type} from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabBuilder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $CreativeModeTab extends $RegistryKubeEvent<($CreativeModeTab$0)> {


public "create"(name: string): $CreativeTabBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$$Type = ($CreativeModeTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeModeTab_ = $CreativeModeTab$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor" {
import {$AnnotationHolder, $AnnotationHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$ClassProvider, $ClassProvider$$Type} from "moe.wolfgirl.probejs.lang.java.base.ClassProvider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $TypeDescriptor extends $AnnotationHolder implements $ClassProvider {

constructor(annotations: ($Annotation$$Type)[])

public "stream"(): $Stream<($TypeDescriptor)>
public "getClasses"(): $Collection<($Class<(any)>)>
public "getClassPaths"(): $Collection<($ClassPath)>
get "classes"(): $Collection<($Class<(any)>)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$$Type = ($TypeDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescriptor_ = $TypeDescriptor$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo$MethodAttributes" {
import {$Method, $Method$$Type} from "java.lang.reflect.Method"

export class $MethodInfo$MethodAttributes {
readonly "isStatic": boolean
readonly "isDefault": boolean
readonly "isAbstract": boolean

constructor(method: $Method$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$MethodAttributes$$Type = ($MethodInfo$MethodAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodInfo$MethodAttributes_ = $MethodInfo$MethodAttributes$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.ArmorMaterial" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$ArmorMaterial as $ArmorMaterial$0, $ArmorMaterial$$Type as $ArmorMaterial$0$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ArmorMaterialBuilder, $ArmorMaterialBuilder$$Type} from "dev.latvian.mods.kubejs.item.ArmorMaterialBuilder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $ArmorMaterial extends $RegistryKubeEvent<($ArmorMaterial$0)> {


public "create"(name: string): $ArmorMaterialBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorMaterial$$Type = ($ArmorMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorMaterial_ = $ArmorMaterial$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder" {
import {$AnnotationHolder, $AnnotationHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableType, $VariableType$$Type} from "moe.wolfgirl.probejs.lang.java.type.impl.VariableType"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$List, $List$$Type} from "java.util.List"

export class $TypeVariableHolder extends $AnnotationHolder {
readonly "variableTypes": $List<($VariableType)>

constructor(variables: ($TypeVariable$$Type<(any)>)[], annotations: ($Annotation$$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeVariableHolder$$Type = ($TypeVariableHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeVariableHolder_ = $TypeVariableHolder$$Type;
}}
declare module "moe.wolfgirl.probejs.events.TypeAssignmentEventJS" {
import {$ScriptDump, $ScriptDump$$Type} from "moe.wolfgirl.probejs.lang.typescript.ScriptDump"
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $TypeAssignmentEventJS implements $KubeEvent {

constructor(scriptDump: $ScriptDump$$Type)

public "assignType"(clazz: $Class$$Type<(any)>, baseType: $BaseType$$Type): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAssignmentEventJS$$Type = ($TypeAssignmentEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAssignmentEventJS_ = $TypeAssignmentEventJS$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.member.MethodDecl" {
import {$CommentableCode, $CommentableCode$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode"
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$TSVariableType, $TSVariableType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$MethodDeclaration, $MethodDeclaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ts.MethodDeclaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $MethodDecl extends $CommentableCode {
 "isStatic": boolean
 "variableTypes": $List<($TSVariableType)>
readonly "comments": $List<(string)>
 "name": string
 "params": $List<($ParamDecl)>
 "isAbstract": boolean
 "isInterface": boolean
 "returnType": $BaseType
 "content": string

constructor(name: string, variableTypes: $List$$Type<($TSVariableType$$Type)>, params: $List$$Type<($ParamDecl$$Type)>, returnType: $BaseType$$Type)

public "getUsedImports"(): $Collection<($ImportInfo)>
public "asDeclaration"(): $MethodDeclaration
public "formatRaw"(declaration: $Declaration$$Type): $List<(string)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodDecl$$Type = ($MethodDecl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodDecl_ = $MethodDecl$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$JSMemberType, $JSMemberType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSObjectType extends $JSMemberType {
readonly "members": $Collection<($JSParam)>

constructor(members: $Collection$$Type<($JSParam$$Type)>)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$$Type = ($JSObjectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSObjectType_ = $JSObjectType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.type.impl.VariableType" {
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$List, $List$$Type} from "java.util.List"
import {$AnnotatedTypeVariable, $AnnotatedTypeVariable$$Type} from "java.lang.reflect.AnnotatedTypeVariable"
import {$TypeDescriptor, $TypeDescriptor$$Type} from "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $VariableType extends $TypeDescriptor {
 "symbol": string
 "descriptors": $List<($TypeDescriptor)>

constructor(typeVariable: $AnnotatedTypeVariable$$Type)
constructor(typeVariable: $TypeVariable$$Type<(any)>, checkBounds: boolean)
constructor(typeVariable: $AnnotatedTypeVariable$$Type, checkBounds: boolean)
constructor(typeVariable: $TypeVariable$$Type<(any)>)

public "stream"(): $Stream<($TypeDescriptor)>
public "getSymbol"(): string
public "getDescriptors"(): $List<($TypeDescriptor)>
get "symbol"(): string
get "descriptors"(): $List<($TypeDescriptor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableType$$Type = ($VariableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableType_ = $VariableType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType$Builder" {
import {$JSObjectType, $JSObjectType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$JSMemberType$Builder, $JSMemberType$Builder$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType$Builder"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSObjectType$Builder extends $JSMemberType$Builder<($JSObjectType$Builder), ($JSObjectType)> {
readonly "members": $Collection<($JSParam)>

constructor()

public "build"(): $BaseType
public "buildIndexed"(): $JSObjectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$Builder$$Type = ($JSObjectType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSObjectType$Builder_ = $JSObjectType$Builder$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.CustomStat" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$CustomStatBuilder, $CustomStatBuilder$$Type} from "dev.latvian.mods.kubejs.misc.CustomStatBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $CustomStat extends $RegistryKubeEvent<($ResourceLocation)> {


public "create"(name: string): $CustomStatBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStat$$Type = ($CustomStat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomStat_ = $CustomStat$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType$Builder" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSMemberType$Builder<T extends $JSMemberType$Builder<(T), (O)>, O extends $BaseType> {
readonly "members": $Collection<($JSParam)>

constructor()

public "member"(name: string, optional: boolean, type: $BaseType$$Type): T
public "member"(name: string, type: $BaseType$$Type): T
public "build"(): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSMemberType$Builder$$Type<T, O> = ($JSMemberType$Builder<(T), (O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSMemberType$Builder_<T, O> = $JSMemberType$Builder$$Type<(T), (O)>;
}}
declare module "moe.wolfgirl.probejs.generated.registry.neoforge.FluidType" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$FluidTypeBuilder, $FluidTypeBuilder$$Type} from "dev.latvian.mods.kubejs.fluid.FluidTypeBuilder"
import {$FluidType as $FluidType$0, $FluidType$$Type as $FluidType$0$$Type} from "net.neoforged.neoforge.fluids.FluidType"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $FluidType extends $RegistryKubeEvent<($FluidType$0)> {


public "create"(name: string): $FluidTypeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$$Type = ($FluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType_ = $FluidType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.ClassPath" {
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ClassPath extends $Record {

constructor(className: string)
constructor(parts: $List$$Type<(string)>)
constructor(clazz: $Class$$Type<(any)>)

public "getName"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getPackage"(): $List<(string)>
public "parts"(): $List<(string)>
public "getClassPath"(): string
public "getConcatenated"(sep: string): string
public "getTypeScriptPath"(): string
public "getClassPathJava"(): string
public "getGenerics"(): $List<(string)>
public "makePath"(base: $Path$$Type): $Path
public "getDirPath"(base: $Path$$Type): $Path
public "getConcatenatedPackage"(sep: string): string
get "name"(): string
get "package"(): $List<(string)>
get "classPath"(): string
get "typeScriptPath"(): string
get "classPathJava"(): string
get "generics"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassPath$$Type = ({"parts"?: $List$$Type<(string)>}) | ([parts?: $List$$Type<(string)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassPath_ = $ClassPath$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.Block" {
import {$CarpetBlockBuilder, $CarpetBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.CarpetBlockBuilder"
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$SlabBlockBuilder, $SlabBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.SlabBlockBuilder"
import {$BasicBlockJS$Builder, $BasicBlockJS$Builder$$Type} from "dev.latvian.mods.kubejs.block.custom.BasicBlockJS$Builder"
import {$DoorBlockBuilder, $DoorBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.DoorBlockBuilder"
import {$StairBlockBuilder, $StairBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.StairBlockBuilder"
import {$Block as $Block$0, $Block$$Type as $Block$0$$Type} from "net.minecraft.world.level.block.Block"
import {$PressurePlateBlockBuilder, $PressurePlateBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.PressurePlateBlockBuilder"
import {$CropBlockBuilder, $CropBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.CropBlockBuilder"
import {$ButtonBlockBuilder, $ButtonBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.ButtonBlockBuilder"
import {$TrapdoorBlockBuilder, $TrapdoorBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.TrapdoorBlockBuilder"
import {$FenceBlockBuilder, $FenceBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.FenceBlockBuilder"
import {$WallBlockBuilder, $WallBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.WallBlockBuilder"
import {$HorizontalDirectionalBlockBuilder, $HorizontalDirectionalBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.HorizontalDirectionalBlockBuilder"
import {$FenceGateBlockBuilder, $FenceGateBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.FenceGateBlockBuilder"
import {$FallingBlockBuilder, $FallingBlockBuilder$$Type} from "dev.latvian.mods.kubejs.block.custom.FallingBlockBuilder"
import {$DetectorBlock$Builder, $DetectorBlock$Builder$$Type} from "dev.latvian.mods.kubejs.block.DetectorBlock$Builder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $Block extends $RegistryKubeEvent<($Block$0)> {


public "create"(name: string): $BasicBlockJS$Builder
public "create"(name: string, type: "detector"): $DetectorBlock$Builder
public "create"(name: string, type: "slab"): $SlabBlockBuilder
public "create"(name: string, type: "stairs"): $StairBlockBuilder
public "create"(name: string, type: "fence"): $FenceBlockBuilder
public "create"(name: string, type: "wall"): $WallBlockBuilder
public "create"(name: string, type: "fence_gate"): $FenceGateBlockBuilder
public "create"(name: string, type: "pressure_plate"): $PressurePlateBlockBuilder
public "create"(name: string, type: "button"): $ButtonBlockBuilder
public "create"(name: string, type: "falling"): $FallingBlockBuilder
public "create"(name: string, type: "crop"): $CropBlockBuilder
public "create"(name: string, type: "cardinal"): $HorizontalDirectionalBlockBuilder
public "create"(name: string, type: "carpet"): $CarpetBlockBuilder
public "create"(name: string, type: "door"): $DoorBlockBuilder
public "create"(name: string, type: "trapdoor"): $TrapdoorBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Block$$Type = ($Block);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Block_ = $Block$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder" {
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $AnnotationHolder {

constructor(annotations: ($Annotation$$Type)[])

public "getAnnotation"<T extends $Annotation>(type: $Class$$Type<(T)>): T
public "getAnnotations"<T extends $Annotation>(type: $Class$$Type<(T)>): $List<(T)>
public "getAnnotations"(): ($Annotation)[]
public "hasAnnotation"(annotation: $Class$$Type<($Annotation$$Type)>): boolean
get "annotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationHolder$$Type = ($AnnotationHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationHolder_ = $AnnotationHolder$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.Clazz" {
import {$ConstructorInfo, $ConstructorInfo$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.ConstructorInfo"
import {$TypeVariableHolder, $TypeVariableHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder"
import {$FieldInfo, $FieldInfo$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo"
import {$Clazz$ClassAttribute, $Clazz$ClassAttribute$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassAttribute"
import {$VariableType, $VariableType$$Type} from "moe.wolfgirl.probejs.lang.java.type.impl.VariableType"
import {$List, $List$$Type} from "java.util.List"
import {$TypeDescriptor, $TypeDescriptor$$Type} from "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$MethodInfo, $MethodInfo$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo"

export class $Clazz extends $TypeVariableHolder {
readonly "constructors": $List<($ConstructorInfo)>
readonly "interfaces": $List<($TypeDescriptor)>
readonly "variableTypes": $List<($VariableType)>
 "recursionDepth": integer
readonly "superClass": $TypeDescriptor
readonly "methods": $List<($MethodInfo)>
readonly "classPath": $ClassPath
readonly "attribute": $Clazz$ClassAttribute
readonly "fields": $List<($FieldInfo)>

constructor(clazz: $Class$$Type<(any)>)

public "equals"(o: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$$Type = ($Clazz);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz_ = $Clazz$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.Potion" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$Potion as $Potion$0, $Potion$$Type as $Potion$0$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$PotionBuilder, $PotionBuilder$$Type} from "dev.latvian.mods.kubejs.misc.PotionBuilder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $Potion extends $RegistryKubeEvent<($Potion$0)> {


public "create"(name: string): $PotionBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Potion$$Type = ($Potion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Potion_ = $Potion$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.snippet.parts.Variable" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$SnippetPart, $SnippetPart$$Type} from "moe.wolfgirl.probejs.lang.snippet.parts.SnippetPart"

export class $Variable extends $Enum<($Variable)> implements $SnippetPart {
static readonly "CURRENT_MINUTE": $Variable
static readonly "CLIPBOARD": $Variable
static readonly "TM_FILEPATH": $Variable
static readonly "RELATIVE_FILEPATH": $Variable
static readonly "CURRENT_DAY_NAME_SHORT": $Variable
static readonly "TM_DIRECTORY": $Variable
static readonly "CURRENT_DAY_NAME": $Variable
static readonly "CURRENT_YEAR": $Variable
static readonly "BLOCK_COMMENT_END": $Variable
static readonly "UUID": $Variable
static readonly "RANDOM_HEX": $Variable
static readonly "WORKSPACE_FOLDER": $Variable
static readonly "CURRENT_MONTH": $Variable
static readonly "TM_CURRENT_LINE": $Variable
static readonly "CURRENT_HOUR": $Variable
static readonly "CURRENT_TIMEZONE_OFFSET": $Variable
static readonly "CURRENT_SECOND": $Variable
static readonly "CURSOR_NUMBER": $Variable
static readonly "BLOCK_COMMENT_START": $Variable
static readonly "RANDOM": $Variable
static readonly "WORKSPACE_NAME": $Variable
static readonly "TM_LINE_INDEX": $Variable
static readonly "CURRENT_YEAR_SHORT": $Variable
static readonly "CURSOR_INDEX": $Variable
static readonly "TM_FILENAME": $Variable
static readonly "LINE_COMMENT": $Variable
static readonly "CURRENT_SECONDS_UNIX": $Variable
static readonly "TM_CURRENT_WORD": $Variable
static readonly "CURRENT_MONTH_NAME_SHORT": $Variable
static readonly "TM_LINE_NUMBER": $Variable
static readonly "TM_FILENAME_BASE": $Variable
static readonly "TM_SELECTED_TEXT": $Variable
static readonly "CURRENT_MONTH_NAME": $Variable
static readonly "CURRENT_DATE": $Variable


public static "values"(): ($Variable)[]
public static "valueOf"(name: string): $Variable
public "format"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variable$$Type = (("line_comment") | ("block_comment_end") | ("block_comment_start") | ("uuid") | ("random_hex") | ("random") | ("current_timezone_offset") | ("current_seconds_unix") | ("current_second") | ("current_minute") | ("current_hour") | ("current_day_name_short") | ("current_day_name") | ("current_date") | ("current_month_name_short") | ("current_month_name") | ("current_month") | ("current_year_short") | ("current_year") | ("cursor_number") | ("cursor_index") | ("workspace_folder") | ("workspace_name") | ("clipboard") | ("relative_filepath") | ("tm_filepath") | ("tm_directory") | ("tm_filename_base") | ("tm_filename") | ("tm_line_number") | ("tm_line_index") | ("tm_current_word") | ("tm_current_line") | ("tm_selected_text"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Variable_ = $Variable$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.transpiler.TypeConverter" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TypeDescriptor, $TypeDescriptor$$Type} from "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$ScriptManager, $ScriptManager$$Type} from "dev.latvian.mods.kubejs.script.ScriptManager"

export class $TypeConverter {
readonly "scriptManager": $ScriptManager
readonly "predefinedTypes": $Map<($ClassPath), ($BaseType)>

constructor(manager: $ScriptManager$$Type)

public "convertType"(typeInfo: $TypeInfo$$Type, baseType: boolean): $BaseType
public "convertType"(typeInfo: $TypeInfo$$Type): $BaseType
public "convertType"(descriptor: $TypeDescriptor$$Type): $BaseType
public "addType"(clazz: $Class$$Type<(any)>, type: $BaseType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeConverter$$Type = ($TypeConverter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeConverter_ = $TypeConverter$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.TypeScriptFile" {
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$BufferedWriter, $BufferedWriter$$Type} from "java.io.BufferedWriter"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $TypeScriptFile {
readonly "classPath": $ClassPath
readonly "codeList": $List<($Code)>
readonly "declaration": $Declaration

constructor(self: $ClassPath$$Type)

public "format"(): string
public "write"(writeTo: $Path$$Type): void
public "write"(writer: $BufferedWriter$$Type): void
public "addCode"(code: $Code$$Type): void
public "refreshImports"(): void
public "writeAsModule"(writer: $BufferedWriter$$Type): void
public "excludeSymbol"(name: string): void
public "findCode"<T extends $Code>(type: $Class$$Type<(T)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeScriptFile$$Type = ($TypeScriptFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeScriptFile_ = $TypeScriptFile$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.SoundEvent" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$SoundEventBuilder, $SoundEventBuilder$$Type} from "dev.latvian.mods.kubejs.misc.SoundEventBuilder"
import {$SoundEvent as $SoundEvent$0, $SoundEvent$$Type as $SoundEvent$0$$Type} from "net.minecraft.sounds.SoundEvent"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $SoundEvent extends $RegistryKubeEvent<($SoundEvent$0)> {


public "create"(name: string): $SoundEventBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEvent$$Type = ($SoundEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEvent_ = $SoundEvent$$Type;
}}
declare module "moe.wolfgirl.probejs.events.TypingModificationEventJS" {
import {$ScriptDump, $ScriptDump$$Type} from "moe.wolfgirl.probejs.lang.typescript.ScriptDump"
import {$ScriptEventJS, $ScriptEventJS$$Type} from "moe.wolfgirl.probejs.events.ScriptEventJS"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$TypeScriptFile, $TypeScriptFile$$Type} from "moe.wolfgirl.probejs.lang.typescript.TypeScriptFile"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $TypingModificationEventJS extends $ScriptEventJS {

constructor(dump: $ScriptDump$$Type, files: $Map$$Type<($ClassPath$$Type), ($TypeScriptFile$$Type)>)

public "modify"(clazz: $Class$$Type<(any)>, file: $Consumer$$Type<($TypeScriptFile)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypingModificationEventJS$$Type = ($TypingModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypingModificationEventJS_ = $TypingModificationEventJS$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.Fluid" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$ThickFluidBuilder, $ThickFluidBuilder$$Type} from "dev.latvian.mods.kubejs.fluid.ThickFluidBuilder"
import {$ThinFluidBuilder, $ThinFluidBuilder$$Type} from "dev.latvian.mods.kubejs.fluid.ThinFluidBuilder"
import {$Fluid as $Fluid$0, $Fluid$$Type as $Fluid$0$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidBuilder, $FluidBuilder$$Type} from "dev.latvian.mods.kubejs.fluid.FluidBuilder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $Fluid extends $RegistryKubeEvent<($Fluid$0)> {


public "create"(name: string): $FluidBuilder
public "create"(name: string, type: "thin"): $ThinFluidBuilder
public "create"(name: string, type: "thick"): $ThickFluidBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fluid$$Type = ($Fluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fluid_ = $Fluid$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam" {
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSParam extends $Record {

constructor(name: string, optional: boolean, type: $BaseType$$Type)

public "name"(): string
public "type"(): $BaseType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "format"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type, nameGetter: $Function$$Type<(string), (string)>): string
public "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSParam$$Type = ({"name"?: string, "type"?: $BaseType$$Type, "optional"?: boolean}) | ([name?: string, type?: $BaseType$$Type, optional?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSParam_ = $JSParam$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.ConstructorInfo" {
import {$TypeVariableHolder, $TypeVariableHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder"
import {$VariableType, $VariableType$$Type} from "moe.wolfgirl.probejs.lang.java.type.impl.VariableType"
import {$List, $List$$Type} from "java.util.List"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$ParamInfo, $ParamInfo$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.ParamInfo"

export class $ConstructorInfo extends $TypeVariableHolder {
readonly "variableTypes": $List<($VariableType)>
readonly "params": $List<($ParamInfo)>

constructor(arg0: $Constructor$$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorInfo$$Type = ($ConstructorInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstructorInfo_ = $ConstructorInfo$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.VillagerProfession" {
import {$VillagerProfessionBuilder, $VillagerProfessionBuilder$$Type} from "dev.latvian.mods.kubejs.misc.VillagerProfessionBuilder"
import {$VillagerProfession as $VillagerProfession$0, $VillagerProfession$$Type as $VillagerProfession$0$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $VillagerProfession extends $RegistryKubeEvent<($VillagerProfession$0)> {


public "create"(name: string): $VillagerProfessionBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerProfession$$Type = ($VillagerProfession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerProfession_ = $VillagerProfession$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ImportInfo$Type extends $Enum<($ImportInfo$Type)> {
static readonly "ORIGINAL": $ImportInfo$Type
static readonly "TYPE": $ImportInfo$Type
static readonly "STATIC": $ImportInfo$Type


public static "values"(): ($ImportInfo$Type)[]
public static "valueOf"(name: string): $ImportInfo$Type
public "applyTemplate"(name: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImportInfo$Type$$Type = (("original") | ("type") | ("static"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImportInfo$Type_ = $ImportInfo$Type$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType" {
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$TSArrayType, $TSArrayType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSArrayType"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $BaseType extends $Code {

constructor()

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "format"(declaration: $Declaration$$Type): $List<(string)>
public "line"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): string
public "asArray"(): $TSArrayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$$Type = ($BaseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseType_ = $BaseType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSJoinedType extends $BaseType {
readonly "types": $List<($BaseType)>
readonly "delimiter": string


public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$$Type = ($JSJoinedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSJoinedType_ = $JSJoinedType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.snippet.parts.SnippetPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SnippetPart {

 "format"(): string

(): string
}

export namespace $SnippetPart {
const probejs$$marker: never
}
export class $SnippetPart$$Static implements $SnippetPart {


 "format"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetPart$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetPart_ = $SnippetPart$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ImportInfo$Type, $ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ImportInfo extends $Record {
static readonly "INPUT_TEMPLATE": string
static readonly "STATIC_TEMPLATE": string
static readonly "ORIGINAL": $UnaryOperator<(string)>

constructor(classPath: $ClassPath$$Type, type: $ImportInfo$Type$$Type)

public static "type"(path: $ClassPath$$Type): $ImportInfo
public "type"(): $ImportInfo$Type
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "original"(path: $ClassPath$$Type): $ImportInfo
public "asType"(type: $ImportInfo$Type$$Type): $ImportInfo
public "classPath"(): $ClassPath
public static "importStatic"(path: $ClassPath$$Type): $ImportInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImportInfo$$Type = ({"type"?: $ImportInfo$Type$$Type, "classPath"?: $ClassPath$$Type}) | ([type?: $ImportInfo$Type$$Type, classPath?: $ClassPath$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImportInfo_ = $ImportInfo$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSClassType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSClassType extends $BaseType {
 "classPath": $ClassPath

constructor(classPath: $ClassPath$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSClassType$$Type = ($TSClassType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSClassType_ = $TSClassType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassAttribute" {
import {$Clazz$ClassType, $Clazz$ClassType$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassType"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Clazz$ClassAttribute {
readonly "raw": $Class<(any)>
readonly "type": $Clazz$ClassType
readonly "isAbstract": boolean
readonly "isInterface": boolean

constructor(clazz: $Class$$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassAttribute$$Type = ($Clazz$ClassAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz$ClassAttribute_ = $Clazz$ClassAttribute$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.Code" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$ImportInfo$Type, $ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Code {

constructor()

public "format"(declaration: $Declaration$$Type): $List<(string)>
public "line"(declaration: $Declaration$$Type): string
public "getClasses"(): $Collection<($Class<(any)>)>
public "getUsedImportsAs"(type: $ImportInfo$Type$$Type): $Collection<($ImportInfo)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "classes"(): $Collection<($Class<(any)>)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Code$$Type = ($Code);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Code_ = $Code$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped$Global" {
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Wrapped, $Wrapped$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"

export class $Wrapped$Global extends $Wrapped {
readonly "codes": $List<($Code)>
readonly "comments": $List<(string)>

constructor()

public "formatRaw"(declaration: $Declaration$$Type): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$Global$$Type = ($Wrapped$Global);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapped$Global_ = $Wrapped$Global$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSPrimitiveType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSPrimitiveType extends $BaseType {
readonly "content": string

constructor(content: string)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSPrimitiveType$$Type = ($JSPrimitiveType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSPrimitiveType_ = $JSPrimitiveType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSArrayType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSArrayType extends $BaseType {
 "component": $BaseType

constructor(component: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSArrayType$$Type = ($TSArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSArrayType_ = $TSArrayType$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.Item" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$ShearsItemBuilder, $ShearsItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.custom.ShearsItemBuilder"
import {$DiggerItemBuilder$Axe, $DiggerItemBuilder$Axe$$Type} from "dev.latvian.mods.kubejs.item.custom.DiggerItemBuilder$Axe"
import {$DiggerItemBuilder$Shovel, $DiggerItemBuilder$Shovel$$Type} from "dev.latvian.mods.kubejs.item.custom.DiggerItemBuilder$Shovel"
import {$ArmorItemBuilder$Boots, $ArmorItemBuilder$Boots$$Type} from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Boots"
import {$SmithingTemplateItemBuilder, $SmithingTemplateItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.custom.SmithingTemplateItemBuilder"
import {$ArmorItemBuilder$Helmet, $ArmorItemBuilder$Helmet$$Type} from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Helmet"
import {$ArmorItemBuilder$AnimalArmor, $ArmorItemBuilder$AnimalArmor$$Type} from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$AnimalArmor"
import {$ArmorItemBuilder$Chestplate, $ArmorItemBuilder$Chestplate$$Type} from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Chestplate"
import {$SwordItemBuilder, $SwordItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.custom.SwordItemBuilder"
import {$DiggerItemBuilder$Hoe, $DiggerItemBuilder$Hoe$$Type} from "dev.latvian.mods.kubejs.item.custom.DiggerItemBuilder$Hoe"
import {$DiggerItemBuilder$Pickaxe, $DiggerItemBuilder$Pickaxe$$Type} from "dev.latvian.mods.kubejs.item.custom.DiggerItemBuilder$Pickaxe"
import {$Item as $Item$0, $Item$$Type as $Item$0$$Type} from "net.minecraft.world.item.Item"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ArmorItemBuilder$Leggings, $ArmorItemBuilder$Leggings$$Type} from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Leggings"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $Item extends $RegistryKubeEvent<($Item$0)> {


public "create"(name: string): $ItemBuilder
public "create"(name: string, type: "sword"): $SwordItemBuilder
public "create"(name: string, type: "pickaxe"): $DiggerItemBuilder$Pickaxe
public "create"(name: string, type: "axe"): $DiggerItemBuilder$Axe
public "create"(name: string, type: "shovel"): $DiggerItemBuilder$Shovel
public "create"(name: string, type: "hoe"): $DiggerItemBuilder$Hoe
public "create"(name: string, type: "shears"): $ShearsItemBuilder
public "create"(name: string, type: "helmet"): $ArmorItemBuilder$Helmet
public "create"(name: string, type: "chestplate"): $ArmorItemBuilder$Chestplate
public "create"(name: string, type: "leggings"): $ArmorItemBuilder$Leggings
public "create"(name: string, type: "boots"): $ArmorItemBuilder$Boots
public "create"(name: string, type: "animal_armor"): $ArmorItemBuilder$AnimalArmor
public "create"(name: string, type: "smithing_template"): $SmithingTemplateItemBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$$Type = ($Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Item_ = $Item$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo$FieldAttributes" {
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export class $FieldInfo$FieldAttributes {
readonly "isStatic": boolean
readonly "isFinal": boolean

constructor(field: $Field$$Type)

public "getStaticValue"(): any
get "staticValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$FieldAttributes$$Type = ($FieldInfo$FieldAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldInfo$FieldAttributes_ = $FieldInfo$FieldAttributes$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.MobEffect" {
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$MobEffectBuilder, $MobEffectBuilder$$Type} from "dev.latvian.mods.kubejs.misc.MobEffectBuilder"
import {$MobEffect as $MobEffect$0, $MobEffect$$Type as $MobEffect$0$$Type} from "net.minecraft.world.effect.MobEffect"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $MobEffect extends $RegistryKubeEvent<($MobEffect$0)> {


public "create"(name: string): $MobEffectBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffect$$Type = ($MobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffect_ = $MobEffect$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ts.MethodDeclaration" {
import {$CommentableCode, $CommentableCode$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode"
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$TSVariableType, $TSVariableType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $MethodDeclaration extends $CommentableCode {
readonly "variableTypes": $List<($TSVariableType)>
readonly "comments": $List<(string)>
 "name": string
readonly "params": $List<($ParamDecl)>
 "returnType": $BaseType

constructor(name: string, variableTypes: $List$$Type<($TSVariableType$$Type)>, params: $List$$Type<($ParamDecl$$Type)>, returnType: $BaseType$$Type)

public "getUsedImports"(): $Collection<($ImportInfo)>
public "formatRaw"(declaration: $Declaration$$Type): $List<(string)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodDeclaration$$Type = ($MethodDeclaration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodDeclaration_ = $MethodDeclaration$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.Declaration" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Reference, $Reference$$Type} from "moe.wolfgirl.probejs.lang.typescript.Reference"

export class $Declaration {
readonly "references": $Map<($ClassPath), ($Reference)>

constructor()

public "addClass"(path: $ImportInfo$$Type): void
public "getSymbol"(path: $ClassPath$$Type): string
public "exclude"(name: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Declaration$$Type = ($Declaration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Declaration_ = $Declaration$$Type;
}}
declare module "moe.wolfgirl.probejs.plugin.Probe" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

/**
 * Debugging utility for easier check on players, blocks, items, etc.
 */
export class $Probe {
static readonly "INSTANCE": $Probe

constructor()

public "getCurrentPlayer"(): $Player
public "getLastRightClickedEntity"(): $Entity
public "getLastRightClickedBlock"(): $BlockContainerJS
get "currentPlayer"(): $Player
get "lastRightClickedEntity"(): $Entity
get "lastRightClickedBlock"(): $BlockContainerJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Probe$$Type = ($Probe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Probe_ = $Probe$$Type;
}}
declare module "moe.wolfgirl.probejs.events.SnippetGenerationEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Snippet, $Snippet$$Type} from "moe.wolfgirl.probejs.lang.snippet.Snippet"
import {$SnippetDump, $SnippetDump$$Type} from "moe.wolfgirl.probejs.lang.snippet.SnippetDump"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $SnippetGenerationEventJS implements $KubeEvent {

constructor(dump: $SnippetDump$$Type)

public "create"(name: string, handler: $Consumer$$Type<($Snippet)>): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetGenerationEventJS$$Type = ($SnippetGenerationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetGenerationEventJS_ = $SnippetGenerationEventJS$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BaseType$FormatType extends $Enum<($BaseType$FormatType)> {
static readonly "RETURN": $BaseType$FormatType
static readonly "INPUT": $BaseType$FormatType
static readonly "VARIABLE": $BaseType$FormatType


public static "values"(): ($BaseType$FormatType)[]
public static "valueOf"(name: string): $BaseType$FormatType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$FormatType$$Type = (("input") | ("return") | ("variable"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseType$FormatType_ = $BaseType$FormatType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSParamType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSParamType extends $BaseType {
 "params": $List<($BaseType)>
 "baseType": $BaseType

constructor(baseType: $BaseType$$Type, params: $List$$Type<($BaseType$$Type)>)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSParamType$$Type = ($TSParamType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSParamType_ = $TSParamType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.ParamInfo" {
import {$AnnotationHolder, $AnnotationHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder"
import {$TypeDescriptor, $TypeDescriptor$$Type} from "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor"
import {$Parameter, $Parameter$$Type} from "java.lang.reflect.Parameter"

export class $ParamInfo extends $AnnotationHolder {
 "name": string
 "type": $TypeDescriptor
readonly "varArgs": boolean

constructor(parameter: $Parameter$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamInfo$$Type = ($ParamInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParamInfo_ = $ParamInfo$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.Reference" {
import {$ImportInfo$Type, $ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Reference extends $Record {

constructor(classPath: $ClassPath$$Type, symbol: string, types: $EnumSet$$Type<($ImportInfo$Type$$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "types"(): $EnumSet<($ImportInfo$Type)>
public "classPath"(): $ClassPath
public "symbol"(): string
public "getImport"(): string
get "import"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$$Type = ({"classPath"?: $ClassPath$$Type, "symbol"?: string, "types"?: $EnumSet$$Type<($ImportInfo$Type$$Type)>}) | ([classPath?: $ClassPath$$Type, symbol?: string, types?: $EnumSet$$Type<($ImportInfo$Type$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reference_ = $Reference$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Clazz$ClassType extends $Enum<($Clazz$ClassType)> {
static readonly "ENUM": $Clazz$ClassType
static readonly "INTERFACE": $Clazz$ClassType
static readonly "RECORD": $Clazz$ClassType
static readonly "CLASS": $Clazz$ClassType


public static "values"(): ($Clazz$ClassType)[]
public static "valueOf"(name: string): $Clazz$ClassType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassType$$Type = (("interface") | ("enum") | ("record") | ("class"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz$ClassType_ = $Clazz$ClassType$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.ParticleType" {
import {$ParticleTypeBuilder, $ParticleTypeBuilder$$Type} from "dev.latvian.mods.kubejs.misc.ParticleTypeBuilder"
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$ParticleType as $ParticleType$0, $ParticleType$$Type as $ParticleType$0$$Type} from "net.minecraft.core.particles.ParticleType"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $ParticleType extends $RegistryKubeEvent<($ParticleType$0)> {


public "create"(name: string): $ParticleTypeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleType$$Type = ($ParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleType_ = $ParticleType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSOptionalType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType, $BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSOptionalType extends $BaseType {
 "component": $BaseType

constructor(component: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(string)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSOptionalType$$Type = ($TSOptionalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSOptionalType_ = $TSOptionalType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.transpiler.Transpiler" {
import {$TypeConverter, $TypeConverter$$Type} from "moe.wolfgirl.probejs.lang.transpiler.TypeConverter"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Clazz, $Clazz$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$ScriptManager, $ScriptManager$$Type} from "dev.latvian.mods.kubejs.script.ScriptManager"
import {$TypeScriptFile, $TypeScriptFile$$Type} from "moe.wolfgirl.probejs.lang.typescript.TypeScriptFile"

export class $Transpiler {
readonly "typeConverter": $TypeConverter
readonly "rejectedClasses": $Set<($ClassPath)>

constructor(manager: $ScriptManager$$Type)

public "init"(): void
public "dump"(clazzes: $Collection$$Type<($Clazz$$Type)>): $Map<($ClassPath), ($TypeScriptFile)>
public "reject"(clazz: $Class$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transpiler$$Type = ($Transpiler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transpiler_ = $Transpiler$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped" {
import {$CommentableCode, $CommentableCode$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode"
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration, $Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"

export class $Wrapped extends $CommentableCode {
readonly "codes": $List<($Code)>
readonly "comments": $List<(string)>

constructor()

public "isEmpty"(): boolean
public "merge"(other: $Wrapped$$Type): void
public "addCode"(inner: $Code$$Type): void
public "getUsedImports"(): $Collection<($ImportInfo)>
public "formatRaw"(declaration: $Declaration$$Type): $List<(string)>
get "empty"(): boolean
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$$Type = ($Wrapped);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapped_ = $Wrapped$$Type;
}}
declare module "moe.wolfgirl.probejs.generated.registry.minecraft.PointOfInterestType" {
import {$PoiType, $PoiType$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiType"
import {$RegistryKubeEvent, $RegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.registry.RegistryKubeEvent"
import {$PoiTypeBuilder, $PoiTypeBuilder$$Type} from "dev.latvian.mods.kubejs.misc.PoiTypeBuilder"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class $PointOfInterestType extends $RegistryKubeEvent<($PoiType)> {


public "create"(name: string): $PoiTypeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestType$$Type = ($PointOfInterestType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestType_ = $PointOfInterestType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo" {
import {$AnnotationHolder, $AnnotationHolder$$Type} from "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder"
import {$TypeDescriptor, $TypeDescriptor$$Type} from "moe.wolfgirl.probejs.lang.java.type.TypeDescriptor"
import {$FieldInfo$FieldAttributes, $FieldInfo$FieldAttributes$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo$FieldAttributes"
import {$JavaMembers$FieldInfo, $JavaMembers$FieldInfo$$Type} from "dev.latvian.mods.rhino.JavaMembers$FieldInfo"

export class $FieldInfo extends $AnnotationHolder {
readonly "name": string
readonly "attributes": $FieldInfo$FieldAttributes
readonly "type": $TypeDescriptor

constructor(field: $JavaMembers$FieldInfo$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$$Type = ($FieldInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldInfo_ = $FieldInfo$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ImportInfo, $ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSMemberType extends $BaseType {
readonly "members": $Collection<($JSParam)>


public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSMemberType$$Type = ($JSMemberType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSMemberType_ = $JSMemberType$$Type;
}}
declare module "moe.wolfgirl.probejs.lang.typescript.ScriptDump" {
import {$Transpiler, $Transpiler$$Type} from "moe.wolfgirl.probejs.lang.transpiler.Transpiler"
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Wrapped$Global, $Wrapped$Global$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped$Global"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Clazz, $Clazz$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ScriptType, $ScriptType$$Type} from "dev.latvian.mods.kubejs.script.ScriptType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ScriptManager, $ScriptManager$$Type} from "dev.latvian.mods.kubejs.script.ScriptManager"

export class $ScriptDump {
readonly "scriptPath": $Path
static readonly "STARTUP_DUMP": $Supplier<($ScriptDump)>
readonly "transpiler": $Transpiler
 "total": integer
readonly "manager": $ScriptManager
readonly "basePath": $Path
readonly "scriptType": $ScriptType
readonly "globals": $Map<(string), ($Pair<($Collection<(string)>), ($Wrapped$Global)>)>
static readonly "SERVER_DUMP": $Supplier<($ScriptDump)>
readonly "recordedClasses": $Set<($Clazz)>
 "dumped": integer
static readonly "CLIENT_DUMP": $Supplier<($ScriptDump)>

constructor(manager: $ScriptManager$$Type, basePath: $Path$$Type, scriptPath: $Path$$Type, scriptPredicate: $Predicate$$Type<($Clazz)>)

public "dump"(): void
public "getSource"(): $Path
public "removeClasses"(): void
public "addGlobal"(identifier: string, ...content: ($Code$$Type)[]): void
public "addGlobal"(identifier: string, excludedNames: $Collection$$Type<(string)>, ...content: ($Code$$Type)[]): void
public "getTest"(): $Path
public "assignType"(classPath: $Class$$Type<(any)>, name: string, type: $BaseType$$Type): void
public "assignType"(classPath: $ClassPath$$Type, name: string, type: $BaseType$$Type): void
public "assignType"(classPath: $ClassPath$$Type, type: $BaseType$$Type): void
public "assignType"(classPath: $Class$$Type<(any)>, type: $BaseType$$Type): void
public "getGlobalFolder"(): $Path
public "getPackageFolder"(): $Path
public "getTypeFolder"(): $Path
public "dumpClasses"(): void
public "dumpJSConfig"(): void
public "acceptClasses"(classes: $Collection$$Type<($Clazz$$Type)>): void
public "retrieveClasses"(): $Set<($Class<(any)>)>
public "ensurePath"(path: string): $Path
public "ensurePath"(path: string, script: boolean): $Path
public "dumpGlobal"(): void
get "source"(): $Path
get "test"(): $Path
get "globalFolder"(): $Path
get "packageFolder"(): $Path
get "typeFolder"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptDump$$Type = ($ScriptDump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptDump_ = $ScriptDump$$Type;
}}
