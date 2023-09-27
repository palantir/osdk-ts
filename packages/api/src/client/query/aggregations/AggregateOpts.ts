import type {
  OntologyDefinition,
  ObjectTypesFrom,
  ObjectInfoFrom,
} from "#ontology";
import type {
  AggregationClause,
  WhereClause,
  GroupByClause,
} from "#client/query";

export type AggregateOpts<
  T extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<T>,
  AC extends AggregationClause<T, K>,
> = {
  select: AC;
  where?: WhereClause<ObjectInfoFrom<T, K>>;
  groupBy?: GroupByClause<T, K>;
};
