import type { GeotimeSeriesId } from "./GeotimeSeriesId.js";
import type { GeotimeSeriesIntegrationRid } from "./GeotimeSeriesIntegrationRid.js";
/**
* The property value for a Geotime series reference
*/
export interface GeotimeSeriesReference {
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
	geotimeSeriesId: GeotimeSeriesId;
}
