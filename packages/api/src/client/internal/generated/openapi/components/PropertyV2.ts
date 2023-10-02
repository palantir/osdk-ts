import { DisplayName } from "./DisplayName";
import { ObjectPropertyType } from "./ObjectPropertyType";

/** Details about some property of an object. */
export type PropertyV2 = { description?: string; displayName?: DisplayName; dataType: ObjectPropertyType; };
