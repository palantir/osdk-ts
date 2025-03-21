import type { Intent } from "./Intent.js";
import type { NoColorStyle } from "./NoColorStyle.js";
import type { RgbColor } from "./RgbColor.js";
export interface ColorStyle_intent {
	type: "intent";
	intent: Intent;
}
export interface ColorStyle_primaryRgb {
	type: "primaryRgb";
	primaryRgb: RgbColor;
}
export interface ColorStyle_none {
	type: "none";
	none: NoColorStyle;
}
export type ColorStyle = ColorStyle_intent | ColorStyle_primaryRgb | ColorStyle_none;
