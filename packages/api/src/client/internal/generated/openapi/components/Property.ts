import { DisplayName } from "./DisplayName";
import { ValueType } from "./ValueType";

/** Details about some property of an object. */
export interface Property {
    description?: string;
    displayName?: DisplayName;
    baseType: ValueType;
}
