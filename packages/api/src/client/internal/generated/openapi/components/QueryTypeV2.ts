import { QueryApiName } from "./QueryApiName";
import { DisplayName } from "./DisplayName";
import { ParameterId } from "./ParameterId";
import { QueryParameterV2 } from "./QueryParameterV2";
import { QueryDataType } from "./QueryDataType";
import { FunctionRid } from "./FunctionRid";
import { FunctionVersion } from "./FunctionVersion";

/** Represents a query type in the Ontology. */
export interface QueryTypeV2 {
    apiName: QueryApiName;
    description?: string;
    displayName?: DisplayName;
    parameters: Record<ParameterId, QueryParameterV2>;
    output: QueryDataType;
    rid: FunctionRid;
    version: FunctionVersion;
}
