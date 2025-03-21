import type { NonNumericSeriesValueMetadata } from "./NonNumericSeriesValueMetadata.js";
import type { NumericOrNonNumericSeriesValueMetadata } from "./NumericOrNonNumericSeriesValueMetadata.js";
import type { NumericOrNonNumericSeriesValueMetadataV2 } from "./NumericOrNonNumericSeriesValueMetadataV2.js";
import type { NumericSeriesValueMetadata } from "./NumericSeriesValueMetadata.js";
export interface SeriesValueMetadata_numeric {
	type: "numeric";
	numeric: NumericSeriesValueMetadata;
}
export interface SeriesValueMetadata_enum {
	type: "enum";
	enum: NonNumericSeriesValueMetadata;
}
export interface SeriesValueMetadata_numericOrNonNumeric {
	type: "numericOrNonNumeric";
	numericOrNonNumeric: NumericOrNonNumericSeriesValueMetadata;
}
export interface SeriesValueMetadata_numericOrNonNumericV2 {
	type: "numericOrNonNumericV2";
	numericOrNonNumericV2: NumericOrNonNumericSeriesValueMetadataV2;
}
export type SeriesValueMetadata = SeriesValueMetadata_numeric | SeriesValueMetadata_enum | SeriesValueMetadata_numericOrNonNumeric | SeriesValueMetadata_numericOrNonNumericV2;
