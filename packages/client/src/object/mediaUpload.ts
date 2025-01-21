import type { MediaUpload } from "@osdk/api";
import { MediaReference } from "@osdk/internal.foundry.core";

export function isMediaUpload(o: any): o is MediaUpload {
  return typeof o === `object`
    && "data" in o
    && "fileName" in o
    && "objectTypeApiName" in o
    && "propertyApiName" in o
    && o.data instanceof Blob;
}

export function isMediaReference(o: any): o is MediaReference {
  return typeof o === `object`
    && typeof o.mimeType === "string"
    && "reference" in o
    && o.reference.type === "mediaSetViewItem";
}

export function createMediaUpload(args: {
  data: Blob;
  fileName: string;
  objectTypeApiName: string;
  propertyApiName: string;
}): MediaUpload {
  return args;
}
