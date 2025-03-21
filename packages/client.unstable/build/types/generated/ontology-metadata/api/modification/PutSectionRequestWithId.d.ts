import type { PutSectionRequest } from "../PutSectionRequest.js";
import type { SectionId } from "../SectionId.js";
/**
* Internal version of PutSectionRequest.
*/
export interface PutSectionRequestWithId {
	id: SectionId;
	putSectionRequest: PutSectionRequest;
}
