import type { AddAccessSubRequest } from "./AddAccessSubRequest.js";
import type { EditAccessSubRequest } from "./EditAccessSubRequest.js";
import type { RemoveAccessSubRequest } from "./RemoveAccessSubRequest.js";
export interface AccessSubRequestUpdate_editSubRequest {
	type: "editSubRequest";
	editSubRequest: EditAccessSubRequest;
}
export interface AccessSubRequestUpdate_addSubRequest {
	type: "addSubRequest";
	addSubRequest: AddAccessSubRequest;
}
export interface AccessSubRequestUpdate_removeSubRequest {
	type: "removeSubRequest";
	removeSubRequest: RemoveAccessSubRequest;
}
/**
* Updates that can be performed on a request's subrequest.
*/
export type AccessSubRequestUpdate = AccessSubRequestUpdate_editSubRequest | AccessSubRequestUpdate_addSubRequest | AccessSubRequestUpdate_removeSubRequest;
