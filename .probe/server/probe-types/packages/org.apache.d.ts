declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type} from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"
import {$Proxy, $Proxy$$Type} from "org.apache.maven.repository.Proxy"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type} from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"
import {$Authentication, $Authentication$$Type} from "org.apache.maven.artifact.repository.Authentication"

export interface $ArtifactRepository {

 "getKey"(): string
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): string
 "getProtocol"(): string
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "isProjectAware"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
 "findVersions"(arg0: $Artifact$$Type): $List<(string)>
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): string
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): string
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setId"(arg0: string): void
 "getUrl"(): string
 "getLayout"(): $ArtifactRepositoryLayout
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "setBlocked"(arg0: boolean): void
 "pathOf"(arg0: $Artifact$$Type): string
 "isBlocked"(): boolean
 "getProxy"(): $Proxy
 "setProxy"(arg0: $Proxy$$Type): void
 "getBasedir"(): string
 "setUrl"(arg0: string): void
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
get "key"(): string
get "id"(): string
get "protocol"(): string
get "uniqueVersion"(): boolean
get "blacklisted"(): boolean
set "blacklisted"(value: boolean)
get "projectAware"(): boolean
set "authentication"(value: $Authentication$$Type)
get "authentication"(): $Authentication
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "id"(value: string)
get "url"(): string
get "layout"(): $ArtifactRepositoryLayout
get "releases"(): $ArtifactRepositoryPolicy
get "snapshots"(): $ArtifactRepositoryPolicy
set "blocked"(value: boolean)
get "blocked"(): boolean
get "proxy"(): $Proxy
set "proxy"(value: $Proxy$$Type)
get "basedir"(): string
set "url"(value: string)
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
}

export namespace $ArtifactRepository {
const probejs$$marker: never
}
export class $ArtifactRepository$$Static implements $ArtifactRepository {


 "getKey"(): string
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): string
 "getProtocol"(): string
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "isProjectAware"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
 "findVersions"(arg0: $Artifact$$Type): $List<(string)>
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): string
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): string
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setId"(arg0: string): void
 "getUrl"(): string
 "getLayout"(): $ArtifactRepositoryLayout
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "setBlocked"(arg0: boolean): void
 "pathOf"(arg0: $Artifact$$Type): string
 "isBlocked"(): boolean
 "getProxy"(): $Proxy
 "setProxy"(arg0: $Proxy$$Type): void
 "getBasedir"(): string
 "setUrl"(arg0: string): void
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$$Type = ($ArtifactRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepository_ = $ArtifactRepository$$Type;
}}
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export interface $ArtifactVersion extends $Comparable<($ArtifactVersion)> {

 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "parseVersion"(arg0: string): void
 "getQualifier"(): string
 "getBuildNumber"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
get "majorVersion"(): integer
get "minorVersion"(): integer
get "incrementalVersion"(): integer
get "qualifier"(): string
get "buildNumber"(): integer
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
export class $ArtifactVersion$$Static implements $ArtifactVersion {


 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "parseVersion"(arg0: string): void
 "getQualifier"(): string
 "getBuildNumber"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$$Type = ($ArtifactVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactVersion_ = $ArtifactVersion$$Type;
}}
declare module "org.apache.maven.artifact.resolver.filter.ArtifactFilter" {
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export interface $ArtifactFilter {

 "include"(arg0: $Artifact$$Type): boolean

(arg0: $Artifact): boolean
}

export namespace $ArtifactFilter {
const probejs$$marker: never
}
export class $ArtifactFilter$$Static implements $ArtifactFilter {


 "include"(arg0: $Artifact$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$$Type = ((arg0: $Artifact) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactFilter_ = $ArtifactFilter$$Type;
}}
declare module "org.apache.commons.lang3.mutable.MutableFloat" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableFloat extends number implements $Comparable<($MutableFloat)>, $Mutable<(number)> {

constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: float)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isInfinite"(): boolean
public "compareTo"(arg0: $MutableFloat$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): float
public "add"(arg0: float): void
public "add"(arg0: number): void
public "increment"(): void
public "isNaN"(): boolean
public "setValue"(arg0: float): void
public "setValue"(arg0: number): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): float
public "getAndAdd"(arg0: float): float
public "incrementAndGet"(): float
public "getAndIncrement"(): float
public "getAndDecrement"(): float
public "decrementAndGet"(): float
public "addAndGet"(arg0: float): float
public "addAndGet"(arg0: number): float
public "subtract"(arg0: float): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toFloat"(): float
get "infinite"(): boolean
get "value"(): float
get "naN"(): boolean
set "value"(value: float)
set "value"(value: number)
set "value"(value: any)
get "andIncrement"(): float
get "andDecrement"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableFloat$$Type = ($MutableFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableFloat_ = $MutableFloat$$Type;
}}
declare module "org.apache.maven.artifact.handler.ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler {

 "getLanguage"(): string
 "getExtension"(): string
 "getPackaging"(): string
 "isAddedToClasspath"(): boolean
 "getDirectory"(): string
 "getClassifier"(): string
 "isIncludesDependencies"(): boolean
get "language"(): string
get "extension"(): string
get "packaging"(): string
get "addedToClasspath"(): boolean
get "directory"(): string
get "classifier"(): string
get "includesDependencies"(): boolean
}

export namespace $ArtifactHandler {
const ROLE: string
const probejs$$marker: never
}
export class $ArtifactHandler$$Static implements $ArtifactHandler {
static readonly "ROLE": string


 "getLanguage"(): string
 "getExtension"(): string
 "getPackaging"(): string
 "isAddedToClasspath"(): boolean
 "getDirectory"(): string
 "getClassifier"(): string
 "isIncludesDependencies"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$$Type = ($ArtifactHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactHandler_ = $ArtifactHandler$$Type;
}}
declare module "org.apache.commons.lang3.mutable.Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable<T> {

 "getValue"(): T
 "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}

export namespace $Mutable {
const probejs$$marker: never
}
export class $Mutable$$Static<T> implements $Mutable {


 "getValue"(): T
 "setValue"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$$Type<T> = ($Mutable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mutable_<T> = $Mutable$$Type<(T)>;
}}
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getUpperBound"(): $ArtifactVersion
public "isUpperBoundInclusive"(): boolean
public "isLowerBoundInclusive"(): boolean
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getLowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
get "upperBoundInclusive"(): boolean
get "lowerBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$$Type = ($Restriction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Restriction_ = $Restriction$$Type;
}}
declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactMetadata as $ArtifactMetadata$0, $ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type} from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata extends $ArtifactMetadata$0 {

 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): string
 "getRemoteFilename"(): string
 "extendedToString"(): string
 "storedInArtifactVersionDirectory"(): boolean
 "getArtifactId"(): string
 "getGroupId"(): string
 "storedInGroupDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "getBaseVersion"(): string
get "key"(): any
get "remoteFilename"(): string
get "artifactId"(): string
get "groupId"(): string
get "baseVersion"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
export class $ArtifactMetadata$$Static implements $ArtifactMetadata {


 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): string
 "getRemoteFilename"(): string
 "extendedToString"(): string
 "storedInArtifactVersionDirectory"(): boolean
 "getArtifactId"(): string
 "getGroupId"(): string
 "storedInGroupDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "getBaseVersion"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$$Type = ($ArtifactMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactMetadata_ = $ArtifactMetadata$$Type;
}}
declare module "org.apache.commons.lang3.function.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T, U, V> {

 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>

(arg0: T, arg1: U, arg2: V): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export class $TriConsumer$$Static<T, U, V> implements $TriConsumer {


 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T, U, V> = $TriConsumer$$Type<(T), (U), (V)>;
}}
declare module "org.apache.maven.artifact.Artifact" {
import {$ArtifactFilter, $ArtifactFilter$$Type} from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ArtifactHandler, $ArtifactHandler$$Type} from "org.apache.maven.artifact.handler.ArtifactHandler"
import {$List, $List$$Type} from "java.util.List"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"

export interface $Artifact extends $Comparable<($Artifact)> {

 "getRepository"(): $ArtifactRepository
 "getId"(): string
 "getType"(): string
 "getScope"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "setVersion"(arg0: string): void
 "getArtifactId"(): string
 "getClassifier"(): string
 "getDependencyTrail"(): $List<(string)>
 "getVersionRange"(): $VersionRange
 "isSelectedVersionKnown"(): boolean
 "getSelectedVersion"(): $ArtifactVersion
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): string
 "setScope"(arg0: string): void
 "isSnapshot"(): boolean
 "isOptional"(): boolean
 "getArtifactHandler"(): $ArtifactHandler
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setDependencyTrail"(arg0: $List$$Type<(string)>): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "selectVersion"(arg0: string): void
 "setArtifactId"(arg0: string): void
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$$Type): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setOptional"(arg0: boolean): void
 "getDownloadUrl"(): string
 "setBaseVersion"(arg0: string): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setDownloadUrl"(arg0: string): void
 "setResolvedVersion"(arg0: string): void
 "setResolved"(arg0: boolean): void
 "hasClassifier"(): boolean
 "getBaseVersion"(): string
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyFilter"(): $ArtifactFilter
 "getDependencyConflictId"(): string
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "isRelease"(): boolean
 "setGroupId"(arg0: string): void
 "compareTo"(arg0: $Artifact$$Type): integer
get "repository"(): $ArtifactRepository
get "id"(): string
get "type"(): string
get "scope"(): string
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): string
set "version"(value: string)
get "artifactId"(): string
get "classifier"(): string
get "dependencyTrail"(): $List<(string)>
get "versionRange"(): $VersionRange
get "selectedVersionKnown"(): boolean
get "selectedVersion"(): $ArtifactVersion
set "file"(value: $File$$Type)
get "groupId"(): string
set "scope"(value: string)
get "snapshot"(): boolean
get "optional"(): boolean
get "artifactHandler"(): $ArtifactHandler
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "versionRange"(value: $VersionRange$$Type)
set "dependencyTrail"(value: $List$$Type<(string)>)
set "repository"(value: $ArtifactRepository$$Type)
set "artifactId"(value: string)
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "optional"(value: boolean)
get "downloadUrl"(): string
set "baseVersion"(value: string)
set "downloadUrl"(value: string)
set "resolvedVersion"(value: string)
set "resolved"(value: boolean)
get "baseVersion"(): string
get "availableVersions"(): $List<($ArtifactVersion)>
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyFilter"(): $ArtifactFilter
get "dependencyConflictId"(): string
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "release"(): boolean
set "groupId"(value: string)
}

export namespace $Artifact {
const VERSION_FILE_PATTERN: $Pattern
const SCOPE_RUNTIME: string
const SCOPE_TEST: string
const SCOPE_RUNTIME_PLUS_SYSTEM: string
const SCOPE_IMPORT: string
const SCOPE_PROVIDED: string
const RELEASE_VERSION: string
const SCOPE_SYSTEM: string
const SNAPSHOT_VERSION: string
const SCOPE_COMPILE: string
const SCOPE_COMPILE_PLUS_RUNTIME: string
const LATEST_VERSION: string
const probejs$$marker: never
}
export class $Artifact$$Static implements $Artifact {
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_RUNTIME": string
static readonly "SCOPE_TEST": string
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": string
static readonly "SCOPE_IMPORT": string
static readonly "SCOPE_PROVIDED": string
static readonly "RELEASE_VERSION": string
static readonly "SCOPE_SYSTEM": string
static readonly "SNAPSHOT_VERSION": string
static readonly "SCOPE_COMPILE": string
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": string
static readonly "LATEST_VERSION": string


 "getRepository"(): $ArtifactRepository
 "getId"(): string
 "getType"(): string
 "getScope"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "setVersion"(arg0: string): void
 "getArtifactId"(): string
 "getClassifier"(): string
 "getDependencyTrail"(): $List<(string)>
 "getVersionRange"(): $VersionRange
 "isSelectedVersionKnown"(): boolean
 "getSelectedVersion"(): $ArtifactVersion
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): string
 "setScope"(arg0: string): void
 "isSnapshot"(): boolean
 "isOptional"(): boolean
 "getArtifactHandler"(): $ArtifactHandler
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setDependencyTrail"(arg0: $List$$Type<(string)>): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "selectVersion"(arg0: string): void
 "setArtifactId"(arg0: string): void
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$$Type): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setOptional"(arg0: boolean): void
 "getDownloadUrl"(): string
 "setBaseVersion"(arg0: string): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setDownloadUrl"(arg0: string): void
 "setResolvedVersion"(arg0: string): void
 "setResolved"(arg0: boolean): void
 "hasClassifier"(): boolean
 "getBaseVersion"(): string
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyFilter"(): $ArtifactFilter
 "getDependencyConflictId"(): string
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "isRelease"(): boolean
 "setGroupId"(arg0: string): void
 "compareTo"(arg0: $Artifact$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$$Type = ($Artifact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Artifact_ = $Artifact$$Type;
}}
declare module "org.apache.commons.lang3.mutable.MutableObject" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $MutableObject<T> implements $Mutable<(T)>, $Serializable {

constructor()
constructor(arg0: T)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): T
public "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableObject$$Type<T> = ($MutableObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableObject_<T> = $MutableObject$$Type<(T)>;
}}
declare module "org.apache.maven.artifact.versioning.VersionRange" {
import {$Restriction, $Restriction$$Type} from "org.apache.maven.artifact.versioning.Restriction"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export class $VersionRange {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "getRecommendedVersion"(): $ArtifactVersion
public static "createFromVersionSpec"(arg0: string): $VersionRange
public "getRestrictions"(): $List<($Restriction)>
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public static "createFromVersion"(arg0: string): $VersionRange
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "hasRestrictions"(): boolean
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$$Type = ($VersionRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VersionRange_ = $VersionRange$$Type;
}}
