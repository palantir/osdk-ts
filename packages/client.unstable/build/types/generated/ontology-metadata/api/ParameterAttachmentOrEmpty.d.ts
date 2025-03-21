import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterAttachment } from "./ParameterAttachment.js";
export interface ParameterAttachmentOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterAttachmentOrEmpty_attachment {
	type: "attachment";
	attachment: ParameterAttachment;
}
export type ParameterAttachmentOrEmpty = ParameterAttachmentOrEmpty_empty | ParameterAttachmentOrEmpty_attachment;
