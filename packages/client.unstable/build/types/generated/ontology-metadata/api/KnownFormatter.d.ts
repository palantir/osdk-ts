import type { FormatterUserId } from "./FormatterUserId.js";
import type { RidFormatter } from "./RidFormatter.js";
export interface KnownFormatter_userId {
	type: "userId";
	userId: FormatterUserId;
}
export interface KnownFormatter_ridFormatter {
	type: "ridFormatter";
	ridFormatter: RidFormatter;
}
/**
* Contains a known format that informs the Front-End consumer to use a specific formatter.
*/
export type KnownFormatter = KnownFormatter_userId | KnownFormatter_ridFormatter;
