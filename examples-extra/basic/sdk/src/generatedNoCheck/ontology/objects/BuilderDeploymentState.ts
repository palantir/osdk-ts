import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface BuilderDeploymentState extends ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState> {
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
