import type { ActionTypeDisplayMetadataConfiguration } from "./ActionTypeDisplayMetadataConfiguration.js";
import type { ActionTypeRichTextComponent } from "./ActionTypeRichTextComponent.js";
import type { ButtonDisplayMetadata } from "./ButtonDisplayMetadata.js";
import type { Icon } from "./Icon.js";
import type { TypeClass } from "./TypeClass.js";
/**
* DisplayMetadata shape used in requests
*/
export interface ActionTypeDisplayMetadataModification {
	displayName: string;
	description: string;
	icon: Icon | undefined;
	typeClasses: Array<TypeClass>;
	successMessage: Array<ActionTypeRichTextComponent>;
	submitButtonDisplayMetadata: ButtonDisplayMetadata | undefined;
	undoButtonConfiguration: boolean | undefined;
	configuration: ActionTypeDisplayMetadataConfiguration | undefined;
}
