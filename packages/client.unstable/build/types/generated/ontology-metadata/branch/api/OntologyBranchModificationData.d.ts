import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RuleSetRid } from "../../api/RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../../api/TypeGroupRid.js";
import type { UserId } from "../../api/UserId.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { OntologyBranchEntityModificationData } from "./OntologyBranchEntityModificationData.js";
import type { OntologyBranchSchemaMigrationModificationMetadata } from "./OntologyBranchSchemaMigrationModificationMetadata.js";
/**
* A type to represent the modified ontology entities and the contributors of an OntologyBranch.
*/
export interface OntologyBranchModificationData {
	affectedObjectTypes: Record<ObjectTypeRid, OntologyBranchEntityModificationData>;
	affectedObjectTypeDatasources: Record<ObjectTypeRid, Record<DatasourceRid, OntologyBranchEntityModificationData>>;
	affectedObjectTypeEntityMetadatas: Record<ObjectTypeRid, OntologyBranchEntityModificationData>;
	affectedLinkTypes: Record<LinkTypeRid, OntologyBranchEntityModificationData>;
	affectedManyToManyLinkTypeDatasources: Record<LinkTypeRid, Record<DatasourceRid, OntologyBranchEntityModificationData>>;
	affectedLinkTypeEntityMetadatas: Record<LinkTypeRid, OntologyBranchEntityModificationData>;
	affectedRuleSets: Record<RuleSetRid, OntologyBranchEntityModificationData>;
	affectedActionTypes: Record<ActionTypeRid, OntologyBranchEntityModificationData>;
	affectedWorkflows: Record<WorkflowRid, OntologyBranchEntityModificationData>;
	affectedSharedPropertyTypes: Record<SharedPropertyTypeRid, OntologyBranchEntityModificationData>;
	affectedInterfaceTypes: Record<InterfaceTypeRid, OntologyBranchEntityModificationData>;
	affectedTypeGroups: Record<TypeGroupRid, OntologyBranchEntityModificationData>;
	affectedObjectTypeSchemaMigrations: Record<ObjectTypeRid, OntologyBranchSchemaMigrationModificationMetadata>;
	contributors: Array<UserId>;
}
