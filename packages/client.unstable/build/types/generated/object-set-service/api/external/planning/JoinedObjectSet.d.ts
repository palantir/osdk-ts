import type { JoinCondition } from "./JoinCondition.js";
import type { SelectExpression } from "./SelectExpression.js";
/**
* Object Set containing objects resulted of a join between other Object Sets.
*/
export interface JoinedObjectSet {
	select: SelectExpression;
	conditions: Array<JoinCondition>;
}
