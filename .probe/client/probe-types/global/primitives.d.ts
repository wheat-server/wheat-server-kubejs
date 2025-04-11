export {} // Mark the file as a module, do not remove unless there are other import/exports!
declare global {
export type long = (number) & (Number);
export type integer = (number) & (Number);
export type short = (number) & (Number);
export type byte = (number) & (Number);
export type double = (number) & (Number);
export type float = (number) & (Number);
interface character extends String {}
interface charseq extends String {}
}