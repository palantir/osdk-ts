import type * as OntologiesV2 from "@osdk/foundry.ontologies";
export interface FauxAttachmentInfo extends Omit<OntologiesV2.AttachmentV2, "sizeBytes"> {
	buffer: ArrayBuffer;
}
export declare class FauxAttachmentStore {
	#private;
	registerAttachment(attachment: FauxAttachmentInfo): OntologiesV2.AttachmentV2;
	getAttachmentMetadataByRid(attachmentRid: string): OntologiesV2.AttachmentV2;
	getAttachmentBuffer(attachmentRid: string): ArrayBuffer;
}
