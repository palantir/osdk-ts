import type { DayOfWeek } from "./DayOfWeek.js";
export interface DayTime {
	day: DayOfWeek;
	time: string;
	zoneId: string;
}
