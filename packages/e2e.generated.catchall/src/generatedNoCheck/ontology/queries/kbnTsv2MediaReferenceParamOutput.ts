import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace kbnTsv2MediaReferenceParamOutput {
  export interface Signature {
    (query: kbnTsv2MediaReferenceParamOutput.Parameters): Promise<kbnTsv2MediaReferenceParamOutput.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly mediaReference: QueryParam.PrimitiveType<'mediaReference'>;
  }

  export type ReturnType = QueryResult.MediaType;
}

export interface kbnTsv2MediaReferenceParamOutput
  extends QueryDefinition<kbnTsv2MediaReferenceParamOutput.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'kbnTsv2MediaReferenceParamOutput';
    displayName: 'kbnTsv2MediaReferenceParamOutput';
    rid: 'ri.function-registry.main.function.59264e13-95ca-4e6f-abb7-bcd706b21d46';
    type: 'query';
    version: '1.0.0';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      mediaReference: {
        nullable: false;
        type: 'mediaReference';
      };
    };
    output: {
      nullable: false;
      type: 'mediaReference';
    };
    signature: kbnTsv2MediaReferenceParamOutput.Signature;
  };
  apiName: 'kbnTsv2MediaReferenceParamOutput';
  type: 'query';
  version: '1.0.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const kbnTsv2MediaReferenceParamOutput: kbnTsv2MediaReferenceParamOutput = {
  apiName: 'kbnTsv2MediaReferenceParamOutput',
  type: 'query',
  version: '1.0.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
