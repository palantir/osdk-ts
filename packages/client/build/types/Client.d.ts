import type { ActionDefinition, ActionMetadata, CompileTimeMetadata, InterfaceDefinition, InterfaceMetadata, ObjectMetadata, ObjectSet, ObjectTypeDefinition, QueryDefinition, QueryMetadata, VersionBound } from "@osdk/api";
import type { Experiment, ExperimentFns, MinimalObjectSet } from "@osdk/api/unstable";
import type { SharedClient } from "@osdk/shared.client2";
import type { ActionSignatureFromDef } from "./actions/applyAction.js";
import type { QuerySignatureFromDef } from "./queries/types.js";
import type { SatisfiesSemver } from "./SatisfiesSemver.js";
type OldSharedClient = import("@osdk/shared.client").SharedClient;
export type CheckVersionBound<Q> = Q extends VersionBound<infer V> ? (SatisfiesSemver<V, MaxOsdkVersion> extends true ? Q : Q & {
	[ErrorMessage]: `Your SDK requires a semver compatible version with ${V}. You have ${MaxOsdkVersion}. Update your package.json`
}) : Q;
export interface Client extends SharedClient, OldSharedClient {
	<Q extends ObjectTypeDefinition>(o: Q): unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q> : CompileTimeMetadata<Q>["objectSet"];
	<Q extends (InterfaceDefinition)>(o: Q): unknown extends CompileTimeMetadata<Q>["objectSet"] ? MinimalObjectSet<Q> : CompileTimeMetadata<Q>["objectSet"];
	<Q extends ActionDefinition<any>>(o: Q): ActionSignatureFromDef<Q>;
	<Q extends QueryDefinition<any>>(o: Q): QuerySignatureFromDef<Q>;
	<Q extends Experiment<"2.0.8"> | Experiment<"2.1.0"> | Experiment<"2.2.0">>(experiment: Q): ExperimentFns<Q>;
	fetchMetadata<Q extends (ObjectTypeDefinition | InterfaceDefinition | ActionDefinition<any> | QueryDefinition<any>)>(o: Q): Promise<Q extends ObjectTypeDefinition ? ObjectMetadata : Q extends InterfaceDefinition ? InterfaceMetadata : Q extends ActionDefinition<any> ? ActionMetadata : Q extends QueryDefinition<any> ? QueryMetadata : never>;
}
declare const MaxOsdkVersion = "2.2.0";
export type MaxOsdkVersion = typeof MaxOsdkVersion;
declare const ErrorMessage: unique symbol;
export {};
