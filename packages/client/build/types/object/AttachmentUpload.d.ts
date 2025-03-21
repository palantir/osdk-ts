import type { AttachmentUpload } from "@osdk/api";
export declare function isAttachmentUpload(o: any): o is AttachmentUpload;
export declare function isAttachmentFile(o: any): o is Blob & {
	readonly name: string
};
export declare function createAttachmentUpload(data: Blob, name: string): AttachmentUpload;
