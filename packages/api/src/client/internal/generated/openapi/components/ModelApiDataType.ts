import { FieldName } from "./FieldName";
import { ModelApiType } from "./ModelApiType";

/**
 * An object definition representing an input or an output type for the deployment API.
 *
 */
export type ModelApiDataType = { name?: FieldName; required?: boolean; propertyType?: ModelApiType; };
