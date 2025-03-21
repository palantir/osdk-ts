import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * Update an employee's title and compensation
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"double">} newCompensation
 * @param {ActionParam.PrimitiveType<"string">} newTitle
 */

export const promoteEmployeeObject = {
  apiName: 'promoteEmployeeObject',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=promoteEmployeeObject.js.map