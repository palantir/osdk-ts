import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * Create an office and employee
 * @param {ActionParam.PrimitiveType<"string">} [address] The office's physical address (not necessarily shipping address)
 * @param {ActionParam.PrimitiveType<"integer">} [capacity] The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
 * @param {ActionParam.PrimitiveType<"integer">} employeeId New employee Id
 * @param {ActionParam.PrimitiveType<"string">} officeId
 * @param {ActionParam.PrimitiveType<"string">} [officeNames] A list of all office names
 */

export const createOfficeAndEmployee = {
  apiName: 'createOfficeAndEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=createOfficeAndEmployee.js.map