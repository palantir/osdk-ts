/**/
import type { BaseType } from "./BaseType.js";

/**
 * It is not possible to define constraints on a union type. Instead define each member as its own value
 * type with constraints, and reference those value types in the union.
 */
export interface UnionType {
memberTypes: Array<BaseType>;
}