import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export interface equipment extends ObjectTypeDefinition<'equipment', equipment>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  links: {};
  primaryKeyApiName: 'equipmentId';
  primaryKeyType: 'string';
  properties: {
    equipmentId: PropertyDef<'string', 'non-nullable', 'single'>;
    type: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const equipment: equipment = {
  osdkMetadata: $osdkMetadata,
  apiName: 'equipment',
  links: {},
  primaryKeyApiName: 'equipmentId',
  primaryKeyType: 'string',
  properties: {
    equipmentId: {
      multiplicity: false,
      description: 'The id of an equipment',
      type: 'string',
      nullable: false,
    },
    type: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'object',
};
