import type { NullabilityAdherence, SelectArg } from "../object/FetchPageArgs.js";
import type { PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { ExtractOptions, Osdk } from "../OsdkObjectFrom.js";
import type { Experiment } from "./Experiment.js";
type fetchOneByRidFn = <
	Q extends ObjectTypeDefinition,
	const L extends PropertyKeys<Q>,
	const R extends boolean,
	const S extends false | "throw" = NullabilityAdherence.Default
>(objectType: Q, rid: string, options?: SelectArg<Q, L, R, S>) => Promise<Osdk.Instance<Q, ExtractOptions<R, S>, L>>;
export declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid: Experiment<"2.1.0", "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid", {
	fetchOneByRid: fetchOneByRidFn
}>;
export {};
