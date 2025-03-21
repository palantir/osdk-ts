import type { KeyOrdering } from "./KeyOrdering.js";
import type { ValueOrdering } from "./ValueOrdering.js";
export interface Ordering_keyOrdering {
	type: "keyOrdering";
	keyOrdering: KeyOrdering;
}
export interface Ordering_valueOrdering {
	type: "valueOrdering";
	valueOrdering: ValueOrdering;
}
/**
* How sorting buckets should be ordered.
*/
export type Ordering = Ordering_keyOrdering | Ordering_valueOrdering;
