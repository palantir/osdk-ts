import type { DisplayMetadataConfigurationDefaultLayout } from "./DisplayMetadataConfigurationDefaultLayout.js";
import type { DisplayMetadataConfigurationDisplayAndFormat } from "./DisplayMetadataConfigurationDisplayAndFormat.js";
/**
* Config info for rendering and configuring the layouts of the (inline) action widgets
*/
export interface ActionTypeDisplayMetadataConfiguration {
	defaultLayout: DisplayMetadataConfigurationDefaultLayout;
	displayAndFormat: DisplayMetadataConfigurationDisplayAndFormat;
	enableLayoutUserSwitch: boolean;
}
