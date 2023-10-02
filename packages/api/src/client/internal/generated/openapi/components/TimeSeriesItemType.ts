import { DoubleType } from "./DoubleType";
import { StringType } from "./StringType";

export interface TimeSeriesItemType_Double extends DoubleType {
    type: "double";
}

function isDouble(obj: TimeSeriesItemType): obj is TimeSeriesItemType_Double {
    return (obj.type === "double");
}

export interface TimeSeriesItemType_String extends StringType {
    type: "string";
}

function isString(obj: TimeSeriesItemType): obj is TimeSeriesItemType_String {
    return (obj.type === "string");
}

export interface TimeSeriesItemTypeVisitor<T> {
    double: (obj: DoubleType) => T;
    string: (obj: StringType) => T;
    unknown: (obj: TimeSeriesItemType) => T;
}

function visit<T>(obj: TimeSeriesItemType, visitor: TimeSeriesItemTypeVisitor<T>): T {
    if (isDouble(obj)) {
        return visitor.double(obj);
    }

    if (isString(obj)) {
        return visitor.string(obj);
    }

    return visitor.unknown(obj);
}

export type TimeSeriesItemType = TimeSeriesItemType_Double | TimeSeriesItemType_String;

export const TimeSeriesItemType = {
    isDouble: isDouble,
    isString: isString,
    visit: visit,
};
