import type { DeletedLinkTypesStillInUseError } from "./DeletedLinkTypesStillInUseError.js";
import type { DeletedObjectTypesStillInUseError } from "./DeletedObjectTypesStillInUseError.js";
import type { LinkTypeRidsNotFoundError } from "./LinkTypeRidsNotFoundError.js";
import type { LinkTypesAlreadyExistError } from "./LinkTypesAlreadyExistError.js";
import type { LinkTypesNotFoundError } from "./LinkTypesNotFoundError.js";
import type { ReferencedLinkTypesNotFoundError } from "./ReferencedLinkTypesNotFoundError.js";
import type { ReferencedObjectTypesNotFoundError } from "./ReferencedObjectTypesNotFoundError.js";
export interface LinkTypeError_linkTypesAlreadyExist {
	type: "linkTypesAlreadyExist";
	linkTypesAlreadyExist: LinkTypesAlreadyExistError;
}
export interface LinkTypeError_linkTypesNotFound {
	type: "linkTypesNotFound";
	linkTypesNotFound: LinkTypesNotFoundError;
}
export interface LinkTypeError_linkTypeRidsNotFound {
	type: "linkTypeRidsNotFound";
	linkTypeRidsNotFound: LinkTypeRidsNotFoundError;
}
export interface LinkTypeError_referencedObjectTypesNotFound {
	type: "referencedObjectTypesNotFound";
	referencedObjectTypesNotFound: ReferencedObjectTypesNotFoundError;
}
export interface LinkTypeError_referencedLinkTypesNotFound {
	type: "referencedLinkTypesNotFound";
	referencedLinkTypesNotFound: ReferencedLinkTypesNotFoundError;
}
export interface LinkTypeError_deletedObjectsStillInUse {
	type: "deletedObjectsStillInUse";
	deletedObjectsStillInUse: DeletedObjectTypesStillInUseError;
}
export interface LinkTypeError_deletedLinkTypesStillInUse {
	type: "deletedLinkTypesStillInUse";
	deletedLinkTypesStillInUse: DeletedLinkTypesStillInUseError;
}
export type LinkTypeError = LinkTypeError_linkTypesAlreadyExist | LinkTypeError_linkTypesNotFound | LinkTypeError_linkTypeRidsNotFound | LinkTypeError_referencedObjectTypesNotFound | LinkTypeError_referencedLinkTypesNotFound | LinkTypeError_deletedObjectsStillInUse | LinkTypeError_deletedLinkTypesStillInUse;
