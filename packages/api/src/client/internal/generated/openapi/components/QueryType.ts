import { QueryApiName } from "./QueryApiName";
import { DisplayName } from "./DisplayName";
import { ParameterId } from "./ParameterId";
import { Parameter } from "./Parameter";
import { OntologyDataType } from "./OntologyDataType";
import { FunctionRid } from "./FunctionRid";
import { FunctionVersion } from "./FunctionVersion";

/** Represents a query type in the Ontology. */
export type QueryType = { apiName: QueryApiName; description?: string; displayName?: DisplayName; parameters: Record<ParameterId, Parameter>; output?: OntologyDataType; rid: FunctionRid; version: FunctionVersion; };
