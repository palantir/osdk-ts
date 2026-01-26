import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace fooEa {
  export interface Signature {
    (): Promise<fooEa.ReturnType>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'integer'>;
}

export interface fooEa extends QueryDefinition<fooEa.Signature>, VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'fooEa';
    displayName: 'doStuff';
    rid: 'ri.function-registry.main.function.04836386-b392-4b70-a302-38415dbf9f60';
    type: 'query';
    version: '0.0.3';
    isFixedVersion: false;
    parameters: {};
    output: {
      nullable: false;
      type: 'integer';
    };
    signature: fooEa.Signature;
  };
  apiName: 'fooEa';
  type: 'query';
  version: '0.0.3';
  osdkMetadata: typeof $osdkMetadata;
}

export const fooEa: fooEa = {
  apiName: 'fooEa',
  type: 'query',
  version: '0.0.3',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
