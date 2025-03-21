import type { ActionTypeArchetype } from "./ActionTypeArchetype.js";
import type { FunctionArchetype } from "./FunctionArchetype.js";
import type { LinkTypeArchetype } from "./LinkTypeArchetype.js";
import type { ObjectTypeArchetype } from "./ObjectTypeArchetype.js";
import type { WorkflowArchetypeDescription } from "./WorkflowArchetypeDescription.js";
import type { WorkflowArchetypeDisplayName } from "./WorkflowArchetypeDisplayName.js";
import type { WorkflowArchetypeId } from "./WorkflowArchetypeId.js";
import type { WorkflowArchetypeVersion } from "./WorkflowArchetypeVersion.js";
/**
* WorkflowArchetype represent a set of Ontology entities along with some metadata used to represent opiniated and repeatable workflow patterns.
*/
export interface WorkflowArchetype {
	id: WorkflowArchetypeId;
	version: WorkflowArchetypeVersion;
	description: WorkflowArchetypeDescription;
	displayName: WorkflowArchetypeDisplayName;
	objectTypeArchetypes: Array<ObjectTypeArchetype>;
	linkTypeArchetypes: Array<LinkTypeArchetype>;
	actionTypeArchetypes: Array<ActionTypeArchetype>;
	functionArchetypes: Array<FunctionArchetype>;
}
