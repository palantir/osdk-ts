import type { OsdkObject } from "@osdk/api";

export interface Office extends OsdkObject {
  readonly __apiName: "Office";
  readonly __primaryKey: string;
  readonly officeId: string;
  readonly officeName: string;
  readonly location?: string;
  readonly capacity?: number;
}