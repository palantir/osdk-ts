import type { StemmaRepositoryRid } from "../../../net/StemmaRepositoryRid.js";
import type { CommonWidgetSetArgs } from "../CommonWidgetSetArgs.js";
export interface WidgetSetDeployArgs extends CommonWidgetSetArgs {
	directory: string;
	repository?: StemmaRepositoryRid;
}
