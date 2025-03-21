import type { CommonWidgetSetArgs } from "../../CommonWidgetSetArgs.js";
export interface VersionDeleteArgs extends CommonWidgetSetArgs {
	version: string;
	yes?: boolean;
}
