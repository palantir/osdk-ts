import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * An action which takes different types of parameters
 * @param {ActionParam.PrimitiveType<"attachment">} attachmentArray
 * @param {ActionParam.PrimitiveType<"datetime">} [dateArray]
 * @param {ActionParam.ObjectType<Person>} [object] A person Object
 * @param {ActionParam.ObjectSetType<Todo>} objectSet
 * @param {ActionParam.PrimitiveType<"string">} string
 * @param {ActionParam.PrimitiveType<"timestamp">} time-stamp
 */

export const actionTakesAllParameterTypes = {
  apiName: 'actionTakesAllParameterTypes',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=actionTakesAllParameterTypes.js.map