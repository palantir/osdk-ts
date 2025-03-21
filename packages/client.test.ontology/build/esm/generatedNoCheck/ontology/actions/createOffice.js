import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * Create an office's
 * @param {ActionParam.PrimitiveType<"string">} [address] The office's physical address (not necessarily shipping address)
 * @param {ActionParam.PrimitiveType<"integer">} [capacity] The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
 * @param {ActionParam.PrimitiveType<"string">} officeId
 * @param {ActionParam.PrimitiveType<"string">} [officeNames] A list of all office names
 */

export const createOffice = {
  apiName: 'createOffice',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=createOffice.js.map