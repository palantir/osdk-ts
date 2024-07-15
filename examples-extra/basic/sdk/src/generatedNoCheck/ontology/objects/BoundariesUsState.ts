import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface BoundariesUsState
  extends ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Boundaries US State';
  links: {};
  primaryKeyApiName: 'usState';
  primaryKeyType: 'string';
  properties: {
    /**
     *   display name: 'Geometry10M',
     *   description: geoshape
     */
    geometry10M: PropertyDef<'geoshape', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    latitude: PropertyDef<'double', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    longitude: PropertyDef<'double', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
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
      displayName: 'Geometry10M',
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
  type: 'object',
};
