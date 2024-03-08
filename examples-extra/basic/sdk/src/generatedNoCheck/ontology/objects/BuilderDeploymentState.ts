import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface BuilderDeploymentState extends ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState> {
  description: 'Builder Deployment State';
  primaryKeyApiName: 'skuId';
  primaryKeyType: 'string';
  links: {};
  properties: {
    skuId: PropertyDef<'string', 'non-nullable', 'single'>;
    date: PropertyDef<'datetime', 'nullable', 'single'>;
    currentTimestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
  };
}

export const BuilderDeploymentState: BuilderDeploymentState = {
  type: 'object',
  apiName: 'BuilderDeploymentState',
  description: 'Builder Deployment State',
  primaryKeyApiName: 'skuId',
  primaryKeyType: 'string',
  links: {},
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
};
