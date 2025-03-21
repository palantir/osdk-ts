import type { ManyToManyJoinDefinition } from "./ManyToManyJoinDefinition.js";
import type { SingleKeyJoinDefinition } from "./SingleKeyJoinDefinition.js";
export interface JoinDefinition_singleKey {
	type: "singleKey";
	singleKey: SingleKeyJoinDefinition;
}
export interface JoinDefinition_joinTable {
	type: "joinTable";
	joinTable: ManyToManyJoinDefinition;
}
/**
* There are two types of JoinDefinitions - singleKey and joinTable. The singleKey definition should be used when defining a relationship that is ONE_TO_ONE or ONE_TO_MANY. MANY_TO_MANY relationships should be defined with a joinTable definition.
*/
export type JoinDefinition = JoinDefinition_singleKey | JoinDefinition_joinTable;
