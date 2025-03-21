import type { ParameterRid } from "./ParameterRid.js";
/**
* Various settings for the table layout
*/
export interface TableDisplayAndFormat {
	columnWidthByParameterRid: Record<ParameterRid, number>;
	enableFileImport: boolean;
	fitHorizontally: boolean;
	frozenColumnCount: number;
	rowHeightInLines: number;
}
