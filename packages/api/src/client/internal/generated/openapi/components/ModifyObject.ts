import { PropertyValue } from "./PropertyValue";
import { PropertyApiName } from "./PropertyApiName";

export interface ModifyObject {
    primaryKey: PropertyValue;
    objectType: PropertyApiName;
}
