import type { CliCommonArgs } from "@osdk/cli.common";
import type { WidgetSetRid } from "../../net/WidgetSetRid.js";
export interface CommonWidgetSetArgs extends CliCommonArgs {
	widgetSet: WidgetSetRid;
	foundryUrl: string;
	token?: string;
	tokenFile?: string;
}
