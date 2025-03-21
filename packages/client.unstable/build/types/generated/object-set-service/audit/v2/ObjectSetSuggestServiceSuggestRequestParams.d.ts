import type { Backend } from "../../api/Backend.js";
import type { SuggestRequest } from "../../api/SuggestRequest.js";
export interface ObjectSetSuggestServiceSuggestRequestParams {
	request: SuggestRequest;
	backend: Backend | undefined;
}
