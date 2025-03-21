import type { BlockTemplateId } from "./BlockTemplateId.js";
import type { BlockTemplateVersion } from "./BlockTemplateVersion.js";
import type { BlockType } from "./BlockType.js";
/**
* Identifier for the block or resource template the association
* between the resource and ontology entity
*/
export interface BlockIdentifier {
	blockId: BlockTemplateId;
	blockVersion: BlockTemplateVersion;
	blockType: BlockType;
}
