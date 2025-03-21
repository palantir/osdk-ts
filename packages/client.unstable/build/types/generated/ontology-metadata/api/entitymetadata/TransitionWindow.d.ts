import type { DayTime } from "./DayTime.js";
/**
* An interval between two times. A start and end time that are exactly the same mean all day.
*/
export interface TransitionWindow {
	start: DayTime;
	end: DayTime;
}
