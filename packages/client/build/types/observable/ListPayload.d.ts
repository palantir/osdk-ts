import type { InterfaceHolder } from "../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObserveObjectsArgs } from "./ObservableClient.js";
export interface ListPayload extends Omit<ObserveObjectsArgs<any>, "resolvedList"> {
	resolvedList: Array<ObjectHolder | InterfaceHolder>;
}
