import type { ValidAggregationKeys } from "../aggregate/AggregatableKeys.js";
import type { WhereClause } from "../aggregate/WhereClause.js";
import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type { CollectWithPropAggregations } from "./WithPropertiesAggregationOptions.js";
export declare namespace DerivedProperty {
	type SelectorResult<T extends SimplePropertyDef> = {
		type: T
	};
	type Clause<Q extends ObjectOrInterfaceDefinition> = {
		[key: string]: Selector<Q, SimplePropertyDef>
	};
	type Selector<
		Q extends ObjectOrInterfaceDefinition,
		T extends SimplePropertyDef
	> = (baseObjectSet: DerivedProperty.Builder<Q, false>) => SelectorResult<T>;
	interface Builder<
		Q extends ObjectOrInterfaceDefinition,
		CONSTRAINED extends boolean
	> extends Filterable<Q, CONSTRAINED>, Pivotable<Q, CONSTRAINED> {}
	interface AggregateBuilder<
		Q extends ObjectOrInterfaceDefinition,
		CONSTRAINED extends boolean
	> extends Builder<Q, CONSTRAINED>, Aggregatable<Q> {}
	interface SelectPropertyBuilder<
		Q extends ObjectOrInterfaceDefinition,
		CONSTRAINED extends boolean
	> extends AggregateBuilder<Q, CONSTRAINED>, Selectable<Q> {}
}
type BuilderTypeFromConstraint<
	Q extends ObjectOrInterfaceDefinition,
	CONSTRAINED extends boolean
> = CONSTRAINED extends true ? DerivedProperty.AggregateBuilder<Q, true> : DerivedProperty.SelectPropertyBuilder<Q, false>;
type Filterable<
	Q extends ObjectOrInterfaceDefinition,
	CONSTRAINED extends boolean
> = {
	readonly where: (clause: WhereClause<Q>) => BuilderTypeFromConstraint<Q, CONSTRAINED>
};
type Pivotable<
	Q extends ObjectOrInterfaceDefinition,
	CONSTRAINED extends boolean
> = {
	readonly pivotTo: <L extends LinkNames<Q>>(type: L) => CONSTRAINED extends true ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true> : NonNullable<CompileTimeMetadata<Q>["links"][L]["multiplicity"]> extends true ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true> : DerivedProperty.SelectPropertyBuilder<LinkedType<Q, L>, false>
};
type Aggregatable<Q extends ObjectOrInterfaceDefinition> = {
	readonly aggregate: <V extends ValidAggregationKeys<Q, "withPropertiesAggregate">>(aggregationSpecifier: V, opts?: V extends `${any}:${infer P}` ? P extends CollectWithPropAggregations ? {
		limit: number
	} : P extends "approximatePercentile" ? {
		percentile: number
	} : never : never) => DerivedProperty.SelectorResult<V extends `${infer N}:${infer P}` ? P extends CollectWithPropAggregations ? Array<CompileTimeMetadata<Q>["properties"][N]["type"]> | undefined : P extends "approximateDistinct" | "exactDistinct" | "$count" ? "integer" : "double" | undefined : V extends "$count" ? "integer" : never>
};
type Selectable<Q extends ObjectOrInterfaceDefinition> = {
	readonly selectProperty: <R extends PropertyKeys<Q>>(propertyName: R) => DerivedProperty.SelectorResult<SimplePropertyDef.Make<CompileTimeMetadata<Q>["properties"][R]["type"], CompileTimeMetadata<Q>["properties"][R]["nullable"], CompileTimeMetadata<Q>["properties"][R]["multiplicity"]>>
};
export {};
