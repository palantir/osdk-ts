import { ActionParameterType } from "./ActionParameterType";

/** Details about a parameter of an action or query. */
export type ActionParameterV2 = { description?: string; dataType: ActionParameterType; required: boolean; };
