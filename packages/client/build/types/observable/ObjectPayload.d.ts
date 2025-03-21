import type { ObjectHolder } from "../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObserveObjectArgs } from "./ObservableClient.js";
export interface ObjectPayload extends Omit<ObserveObjectArgs<any>, "object"> {
	object: ObjectHolder | undefined;
}
