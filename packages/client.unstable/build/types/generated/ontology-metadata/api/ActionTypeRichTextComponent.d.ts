import type { ActionTypeRichTextMessage } from "./ActionTypeRichTextMessage.js";
import type { ActionTypeRichTextParameterPropertyReference } from "./ActionTypeRichTextParameterPropertyReference.js";
import type { ActionTypeRichTextParameterReference } from "./ActionTypeRichTextParameterReference.js";
export interface ActionTypeRichTextComponent_message {
	type: "message";
	message: ActionTypeRichTextMessage;
}
export interface ActionTypeRichTextComponent_parameter {
	type: "parameter";
	parameter: ActionTypeRichTextParameterReference;
}
export interface ActionTypeRichTextComponent_parameterProperty {
	type: "parameterProperty";
	parameterProperty: ActionTypeRichTextParameterPropertyReference;
}
/**
* Generic type that can used to define a string that should have Action execution details injected into it when
* it is rendered.
*/
export type ActionTypeRichTextComponent = ActionTypeRichTextComponent_message | ActionTypeRichTextComponent_parameter | ActionTypeRichTextComponent_parameterProperty;
