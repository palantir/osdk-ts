import type { AutomaticTransformProfile } from "./AutomaticTransformProfile.js";
import type { ExtraLargeTransformProfile } from "./ExtraLargeTransformProfile.js";
export interface TransformProfileConfig_automatic {
	type: "automatic";
	automatic: AutomaticTransformProfile;
}
export interface TransformProfileConfig_extraLarge {
	type: "extraLarge";
	extraLarge: ExtraLargeTransformProfile;
}
/**
* A transform profile is an abstraction over the set of Spark profiles to be used for a Funnel job. The exact
* Spark profiles used may be defined elsewhere (e.g. Funnel).
*/
export type TransformProfileConfig = TransformProfileConfig_automatic | TransformProfileConfig_extraLarge;
