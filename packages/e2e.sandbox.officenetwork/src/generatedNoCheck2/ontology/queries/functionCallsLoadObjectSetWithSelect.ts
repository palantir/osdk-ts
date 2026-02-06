import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace functionCallsLoadObjectSetWithSelect {
  export interface Signature {
    (): Promise<functionCallsLoadObjectSetWithSelect.ReturnType>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'integer'>;
}

export interface functionCallsLoadObjectSetWithSelect
  extends QueryDefinition<functionCallsLoadObjectSetWithSelect.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'functionCallsLoadObjectSetWithSelect';
    displayName: 'functionCallsLoadObjectSetWithSelect';
    rid: 'ri.function-registry.main.function.47a14477-a4da-45b0-a0f2-b02e6c28f6ed';
    type: 'query';
    version: '0.2.0';
    isFixedVersion: false;
    parameters: {};
    output: {
      nullable: false;
      type: 'integer';
    };
    signature: functionCallsLoadObjectSetWithSelect.Signature;
  };
  apiName: 'functionCallsLoadObjectSetWithSelect';
  type: 'query';
  version: '0.2.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const functionCallsLoadObjectSetWithSelect: functionCallsLoadObjectSetWithSelect = {
  apiName: 'functionCallsLoadObjectSetWithSelect',
  type: 'query',
  version: '0.2.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
