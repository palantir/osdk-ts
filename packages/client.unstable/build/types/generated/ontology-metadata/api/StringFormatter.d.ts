import type { ValueTypeLabel } from "./ValueTypeLabel.js";
/**
* Formatter applied to STRING properties. Currently only used for labeling, e.g. on chart axes —
* does not change the displayed string.
*/
export interface StringFormatter {
	valueTypeLabel: ValueTypeLabel;
}
