import { ActionTypeApiName } from "./ActionTypeApiName";
import { DisplayName } from "./DisplayName";
import { ReleaseStatus } from "./ReleaseStatus";
import { ParameterId } from "./ParameterId";
import { ActionParameterV2 } from "./ActionParameterV2";
import { ActionTypeRid } from "./ActionTypeRid";
import { LogicRule } from "./LogicRule";

/** Represents an action type in the Ontology. */
export type ActionTypeV2 = { apiName: ActionTypeApiName; description?: string; displayName?: DisplayName; status: ReleaseStatus; parameters: Record<ParameterId, ActionParameterV2>; rid: ActionTypeRid; operations: Array<LogicRule>; };
