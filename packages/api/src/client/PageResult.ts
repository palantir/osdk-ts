import type { OsdkObject } from "#ontology";

export interface PageResult<T extends OsdkObject<any>> {
  data: T[];
  nextPageToken: string | undefined;
}
