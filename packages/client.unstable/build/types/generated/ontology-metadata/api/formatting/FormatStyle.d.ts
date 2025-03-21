import type { Alignment } from "./Alignment.js";
import type { ColorStyle } from "./ColorStyle.js";
export interface FormatStyle {
	color: ColorStyle;
	alignment: Alignment | undefined;
}
