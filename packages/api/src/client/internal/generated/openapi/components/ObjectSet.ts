import { ObjectSetBaseType } from "./ObjectSetBaseType";
import { ObjectSetStaticType } from "./ObjectSetStaticType";
import { ObjectSetReferenceType } from "./ObjectSetReferenceType";
import { ObjectSetFilterType } from "./ObjectSetFilterType";
import { ObjectSetUnionType } from "./ObjectSetUnionType";
import { ObjectSetIntersectionType } from "./ObjectSetIntersectionType";
import { ObjectSetSubtractType } from "./ObjectSetSubtractType";
import { ObjectSetSearchAroundType } from "./ObjectSetSearchAroundType";

export interface ObjectSet_Base extends ObjectSetBaseType {
    type: "base";
}

export interface ObjectSet_Static extends ObjectSetStaticType {
    type: "static";
}

export interface ObjectSet_Reference extends ObjectSetReferenceType {
    type: "reference";
}

export interface ObjectSet_Filter extends ObjectSetFilterType {
    type: "filter";
}

export interface ObjectSet_Union extends ObjectSetUnionType {
    type: "union";
}

export interface ObjectSet_Intersect extends ObjectSetIntersectionType {
    type: "intersect";
}

export interface ObjectSet_Subtract extends ObjectSetSubtractType {
    type: "subtract";
}

export interface ObjectSet_SearchAround extends ObjectSetSearchAroundType {
    type: "searchAround";
}

export type ObjectSet = ObjectSet_Base | ObjectSet_Static | ObjectSet_Reference | ObjectSet_Filter | ObjectSet_Union | ObjectSet_Intersect | ObjectSet_Subtract | ObjectSet_SearchAround;
