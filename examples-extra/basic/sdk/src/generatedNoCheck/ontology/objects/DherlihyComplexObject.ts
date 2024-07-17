import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface DherlihyComplexObject
  extends ObjectTypeDefinition<'DherlihyComplexObject', DherlihyComplexObject>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Dherlihy Complex Object';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    secret: PropertyDef<'string', 'nullable', 'single'>;
    seriesId: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
  };
}

export const DherlihyComplexObject: DherlihyComplexObject = {
  osdkMetadata: $osdkMetadata,
  apiName: 'DherlihyComplexObject',
  description: 'Dherlihy Complex Object',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    secret: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    seriesId: {
      multiplicity: false,
      type: 'numericTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
