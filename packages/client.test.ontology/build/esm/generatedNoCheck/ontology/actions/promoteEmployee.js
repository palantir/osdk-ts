import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * Update an employee's title and compensation
 * @param {ActionParam.PrimitiveType<"integer">} employeeId
 * @param {ActionParam.PrimitiveType<"double">} newCompensation
 * @param {ActionParam.PrimitiveType<"string">} newTitle
 */

export const promoteEmployee = {
  apiName: 'promoteEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=promoteEmployee.js.map