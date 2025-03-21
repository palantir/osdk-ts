import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import type { inspect, InspectOptionsStylized } from "node:util";
import type { HolderBase } from "./InternalSymbols.js";
declare const nodejsUtilInspectCustom: unique symbol;
export declare const OsdkCustomInspectPrototype: {
	[nodejsUtilInspectCustom]: typeof customInspect
};
/**
* A custom `util.inspect`/`console.log` for nodejs. Not emitted in the browser version
* @param this
* @param _depth
* @param options
* @param inspect
* @returns
*/
declare function customInspect(this: HolderBase<ObjectOrInterfaceDefinition> & Osdk<any>, _depth: number, options: InspectOptionsStylized, localInspect: typeof inspect): string;
export {};
