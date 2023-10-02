import { RelativeTimeRelation } from "./RelativeTimeRelation";
import { RelativeTimeSeriesTimeUnit } from "./RelativeTimeSeriesTimeUnit";

/**
 * A relative time, such as "3 days before" or "2 hours after" the current moment.
 *
 */
export interface RelativeTime {
    when: RelativeTimeRelation;
    value: number;
    unit: RelativeTimeSeriesTimeUnit;
}
