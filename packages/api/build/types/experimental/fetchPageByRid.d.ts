import type { FetchPageArgs, NullabilityAdherence } from "../object/FetchPageArgs.js";
import type { FetchPageResult } from "../object/FetchPageResult.js";
import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { Experiment } from "./Experiment.js";
type fetchPageByRidFn = <
	Q extends ObjectOrInterfaceDefinition,
	const L extends PropertyKeys<Q>,
	const R extends boolean,
	const S extends NullabilityAdherence,
	const T extends boolean
>(objectType: Q, rids: string[], options?: FetchPageArgs<Q, L, R, any, S>) => Promise<FetchPageResult<Q, L, R, S, T>>;
export declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid: Experiment<"2.2.0", "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid", {
	fetchPageByRid: fetchPageByRidFn
}>;
export {};
