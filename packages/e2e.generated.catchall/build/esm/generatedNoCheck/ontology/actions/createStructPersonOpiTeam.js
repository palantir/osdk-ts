import { $osdkMetadata } from '../../OntologyMetadata.js';

/**
 * Create a struct person on the OPI team
 * @param {ActionParam.StructType<{"city":"string","state":"string","zipcode":"integer"}>} [address]
 * @param {ActionParam.PrimitiveType<"integer">} age
 * @param {ActionParam.PrimitiveType<"string">} id
 */

export const createStructPersonOpiTeam = {
  apiName: 'createStructPersonOpiTeam',
  type: 'action',
  osdkMetadata: $osdkMetadata
};
//# sourceMappingURL=createStructPersonOpiTeam.js.map