import type { GothamIntrinsicEndDate } from "./GothamIntrinsicEndDate.js";
import type { GothamIntrinsicLatLong } from "./GothamIntrinsicLatLong.js";
import type { GothamIntrinsicMgrs } from "./GothamIntrinsicMgrs.js";
import type { GothamIntrinsicStartDate } from "./GothamIntrinsicStartDate.js";
export interface GothamIntrinsic_startDate {
	type: "startDate";
	startDate: GothamIntrinsicStartDate;
}
export interface GothamIntrinsic_endDate {
	type: "endDate";
	endDate: GothamIntrinsicEndDate;
}
export interface GothamIntrinsic_latLong {
	type: "latLong";
	latLong: GothamIntrinsicLatLong;
}
export interface GothamIntrinsic_mgrs {
	type: "mgrs";
	mgrs: GothamIntrinsicMgrs;
}
export type GothamIntrinsic = GothamIntrinsic_startDate | GothamIntrinsic_endDate | GothamIntrinsic_latLong | GothamIntrinsic_mgrs;
