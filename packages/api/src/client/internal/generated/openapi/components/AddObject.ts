import { PropertyValue } from "./PropertyValue";
import { PropertyApiName } from "./PropertyApiName";

export interface AddObject {
    primaryKey: PropertyValue;
    objectType: PropertyApiName;
}
