import { ActionTypeApiName } from "./ActionTypeApiName";
import { DisplayName } from "./DisplayName";
import { ReleaseStatus } from "./ReleaseStatus";
import { ParameterId } from "./ParameterId";
import { Parameter } from "./Parameter";
import { ActionTypeRid } from "./ActionTypeRid";
import { LogicRule } from "./LogicRule";

/** Represents an action type in the Ontology. */
export interface ActionType {
    apiName: ActionTypeApiName;
    description?: string;
    displayName?: DisplayName;
    status: ReleaseStatus;
    parameters: Record<ParameterId, Parameter>;
    rid: ActionTypeRid;
    operations: Array<LogicRule>;
}
