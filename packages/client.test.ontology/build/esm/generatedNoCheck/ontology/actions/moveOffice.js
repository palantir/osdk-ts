import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * Update an office's physical location
 * @param {ActionParam.PrimitiveType<"string">} [newAddress] The office's new physical address (not necessarily shipping address)
 * @param {ActionParam.PrimitiveType<"integer">} [newCapacity] The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)
 * @param {ActionParam.PrimitiveType<"string">} officeId
 * @param {ActionParam.PrimitiveType<"integer">} [officeNames] A list of all office names
 */

export const moveOffice = {
  apiName: 'moveOffice',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=moveOffice.js.map