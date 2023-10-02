import { DoubleType } from "./DoubleType";
import { StringType } from "./StringType";

export interface TimeSeriesItemType_Double extends DoubleType {
    type: "double";
}

export interface TimeSeriesItemType_String extends StringType {
    type: "string";
}

export type TimeSeriesItemType = TimeSeriesItemType_Double | TimeSeriesItemType_String;
