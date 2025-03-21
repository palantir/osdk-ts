import type { LinkTypeId } from "./LinkTypeId.js";
import type { SeriesValueMetadata } from "./SeriesValueMetadata.js";
/**
* Note this is experimental, should not be used without consulting the product team and format can
* change/break without notice.
*/
export interface ExperimentalTimeDependentPropertyTypeV1 {
	seriesValueMetadata: SeriesValueMetadata;
	sensorLinkTypeId: LinkTypeId | undefined;
}
