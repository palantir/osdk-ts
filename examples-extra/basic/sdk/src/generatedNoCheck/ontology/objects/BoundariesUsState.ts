import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface BoundariesUsState
  extends ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState>,
    VersionBound<'0.15.0'> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Boundaries US State';
  links: {};
  primaryKeyApiName: 'usState';
  primaryKeyType: 'string';
  properties: {
    geometry10M: PropertyDef<'geoshape', 'nullable', 'single'>;
    latitude: PropertyDef<'double', 'nullable', 'single'>;
    longitude: PropertyDef<'double', 'nullable', 'single'>;
    usState: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const BoundariesUsState: BoundariesUsState = {
  osdkMetadata: $osdkMetadata,
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  links: {},
  primaryKeyApiName: 'usState',
  primaryKeyType: 'string',
  properties: {
    usState: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    latitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    longitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    geometry10M: {
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
  type: 'object',
};
