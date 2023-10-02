import { LinkTypeApiName } from "./LinkTypeApiName";
import { DisplayName } from "./DisplayName";
import { ReleaseStatus } from "./ReleaseStatus";
import { ObjectTypeApiName } from "./ObjectTypeApiName";
import { LinkTypeSideCardinality } from "./LinkTypeSideCardinality";
import { PropertyApiName } from "./PropertyApiName";

export type LinkTypeSideV2 = { apiName: LinkTypeApiName; displayName: DisplayName; status: ReleaseStatus; objectTypeApiName: ObjectTypeApiName; cardinality: LinkTypeSideCardinality; foreignKeyPropertyApiName?: PropertyApiName; };
