import type { MarkingId } from "./MarkingId.js";
export interface SecurityGroupMandatoryPolicy {
	markings: Array<MarkingId>;
	assumedMarkings: Array<MarkingId>;
}
