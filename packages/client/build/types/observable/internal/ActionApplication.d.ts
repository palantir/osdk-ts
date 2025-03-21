import type { ActionDefinition } from "@osdk/api";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import type { Store } from "./Store.js";
export declare class ActionApplication {
	#private;
	private store;
	constructor(store: Store);
	applyAction: <Q extends ActionDefinition<any>>(action: Q, args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0], opts?: Store.ApplyActionOptions) => Promise<unknown>;
}
