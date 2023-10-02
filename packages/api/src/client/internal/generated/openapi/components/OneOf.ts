import { ParameterOption } from "./ParameterOption";

/**
 * The parameter has a manually predefined set of options.
 *
 */
export type OneOf = { options: Array<ParameterOption>; otherValuesAllowed: boolean; };
