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

function isBase(obj: ObjectSet): obj is ObjectSet_Base {
    return (obj.type === "base");
}

function base(obj: ObjectSetBaseType): ObjectSet_Base {
    return {
        ...obj,
        type: "base",
    };
}

export interface ObjectSet_Static extends ObjectSetStaticType {
    type: "static";
}

function isStatic(obj: ObjectSet): obj is ObjectSet_Static {
    return (obj.type === "static");
}

function static_(obj: ObjectSetStaticType): ObjectSet_Static {
    return {
        ...obj,
        type: "static",
    };
}

export interface ObjectSet_Reference extends ObjectSetReferenceType {
    type: "reference";
}

function isReference(obj: ObjectSet): obj is ObjectSet_Reference {
    return (obj.type === "reference");
}

function reference(obj: ObjectSetReferenceType): ObjectSet_Reference {
    return {
        ...obj,
        type: "reference",
    };
}

export interface ObjectSet_Filter extends ObjectSetFilterType {
    type: "filter";
}

function isFilter(obj: ObjectSet): obj is ObjectSet_Filter {
    return (obj.type === "filter");
}

function filter(obj: ObjectSetFilterType): ObjectSet_Filter {
    return {
        ...obj,
        type: "filter",
    };
}

export interface ObjectSet_Union extends ObjectSetUnionType {
    type: "union";
}

function isUnion(obj: ObjectSet): obj is ObjectSet_Union {
    return (obj.type === "union");
}

function union(obj: ObjectSetUnionType): ObjectSet_Union {
    return {
        ...obj,
        type: "union",
    };
}

export interface ObjectSet_Intersect extends ObjectSetIntersectionType {
    type: "intersect";
}

function isIntersect(obj: ObjectSet): obj is ObjectSet_Intersect {
    return (obj.type === "intersect");
}

function intersect(obj: ObjectSetIntersectionType): ObjectSet_Intersect {
    return {
        ...obj,
        type: "intersect",
    };
}

export interface ObjectSet_Subtract extends ObjectSetSubtractType {
    type: "subtract";
}

function isSubtract(obj: ObjectSet): obj is ObjectSet_Subtract {
    return (obj.type === "subtract");
}

function subtract(obj: ObjectSetSubtractType): ObjectSet_Subtract {
    return {
        ...obj,
        type: "subtract",
    };
}

export interface ObjectSet_SearchAround extends ObjectSetSearchAroundType {
    type: "searchAround";
}

function isSearchAround(obj: ObjectSet): obj is ObjectSet_SearchAround {
    return (obj.type === "searchAround");
}

function searchAround(obj: ObjectSetSearchAroundType): ObjectSet_SearchAround {
    return {
        ...obj,
        type: "searchAround",
    };
}

export interface ObjectSetVisitor<T> {
    base: (obj: ObjectSetBaseType) => T;
    static: (obj: ObjectSetStaticType) => T;
    reference: (obj: ObjectSetReferenceType) => T;
    filter: (obj: ObjectSetFilterType) => T;
    union: (obj: ObjectSetUnionType) => T;
    intersect: (obj: ObjectSetIntersectionType) => T;
    subtract: (obj: ObjectSetSubtractType) => T;
    searchAround: (obj: ObjectSetSearchAroundType) => T;
    unknown: (obj: ObjectSet) => T;
}

function visit<T>(obj: ObjectSet, visitor: ObjectSetVisitor<T>): T {
    if (isBase(obj)) {
        return visitor.base(obj);
    }

    if (isStatic(obj)) {
        return visitor.static(obj);
    }

    if (isReference(obj)) {
        return visitor.reference(obj);
    }

    if (isFilter(obj)) {
        return visitor.filter(obj);
    }

    if (isUnion(obj)) {
        return visitor.union(obj);
    }

    if (isIntersect(obj)) {
        return visitor.intersect(obj);
    }

    if (isSubtract(obj)) {
        return visitor.subtract(obj);
    }

    if (isSearchAround(obj)) {
        return visitor.searchAround(obj);
    }

    return visitor.unknown(obj);
}

export type ObjectSet = ObjectSet_Base | ObjectSet_Static | ObjectSet_Reference | ObjectSet_Filter | ObjectSet_Union | ObjectSet_Intersect | ObjectSet_Subtract | ObjectSet_SearchAround;

export const ObjectSet = {
    isBase: isBase,
    base: base,
    isStatic: isStatic,
    static_: static_,
    isReference: isReference,
    reference: reference,
    isFilter: isFilter,
    filter: filter,
    isUnion: isUnion,
    union: union,
    isIntersect: isIntersect,
    intersect: intersect,
    isSubtract: isSubtract,
    subtract: subtract,
    isSearchAround: isSearchAround,
    searchAround: searchAround,
    visit: visit,
};
