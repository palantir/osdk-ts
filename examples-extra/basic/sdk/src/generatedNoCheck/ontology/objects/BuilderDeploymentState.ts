import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';

export interface BuilderDeploymentState
  extends ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState>,
    VersionBound<'0.15.0'> {
  description: 'Builder Deployment State';
  links: {};
  primaryKeyApiName: 'skuId';
  primaryKeyType: 'string';
  properties: {
    currentTimestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
    date: PropertyDef<'datetime', 'nullable', 'single'>;
    skuId: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const BuilderDeploymentState: BuilderDeploymentState = {
  apiName: 'BuilderDeploymentState',
  description: 'Builder Deployment State',
  links: {},
  primaryKeyApiName: 'skuId',
  primaryKeyType: 'string',
  properties: {
    skuId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    date: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    currentTimestamp: {
      multiplicity: false,
      type: 'timestamp',
      nullable: true,
    },
  },
  type: 'object',
};
