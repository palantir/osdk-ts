import type { CreatedClientState } from "./CreatedClientState.js";
import type { NotRequestedClientState } from "./NotRequestedClientState.js";
export interface ClientState_notRequested {
	type: "notRequested";
	notRequested: NotRequestedClientState;
}
export interface ClientState_created {
	type: "created";
	created: CreatedClientState;
}
export type ClientState = ClientState_notRequested | ClientState_created;
