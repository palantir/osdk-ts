import type { EXPERIMENTAL_BulkLinkResult } from "../objectSet/BulkLinkResult.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { Experiment } from "./Experiment.js";
type getBulkLinksFn = <T extends ObjectOrInterfaceDefinition>(objs: Osdk.Instance<T>[], links: string[]) => AsyncGenerator<EXPERIMENTAL_BulkLinkResult, void, undefined>;
export declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks: Experiment<"2.0.8", "__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks", {
	getBulkLinks: getBulkLinksFn
}>;
export {};
