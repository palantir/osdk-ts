import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace recursiveStruct {
  namespace CustomTypes {
    export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
    export interface $5f239c87_040a_4dd6_b50a_bcec78f6c6fc {
      readonly breed: QueryParam.PrimitiveType<'string'>;

      readonly dad?: CustomTypes.$5f239c87_040a_4dd6_b50a_bcec78f6c6fc;

      readonly mom?: CustomTypes.$5f239c87_040a_4dd6_b50a_bcec78f6c6fc;

      readonly siblings?: ReadonlyArray<CustomTypes.$5f239c87_040a_4dd6_b50a_bcec78f6c6fc>;
    }

    export interface $1225e6a4_41d2_4081_9b3c_9b7dd0db5390 {
      readonly age: QueryParam.PrimitiveType<'integer'>;

      readonly allFriends?: ReadonlyArray<CustomTypes.$1225e6a4_41d2_4081_9b3c_9b7dd0db5390>;

      readonly bestFriend?: CustomTypes.$1225e6a4_41d2_4081_9b3c_9b7dd0db5390;

      readonly name: QueryParam.PrimitiveType<'string'>;

      readonly pet?: CustomTypes.$5f239c87_040a_4dd6_b50a_bcec78f6c6fc;
    }
  }

  export interface Signature {
    (query: recursiveStruct.Parameters): Promise<recursiveStruct.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly person: CustomTypes.Expand<CustomTypes.$1225e6a4_41d2_4081_9b3c_9b7dd0db5390>;

    /**
     * (no ontology metadata)
     */
    readonly pet: CustomTypes.Expand<CustomTypes.$5f239c87_040a_4dd6_b50a_bcec78f6c6fc>;
  }

  export type ReturnType = CustomTypes.Expand<CustomTypes.$1225e6a4_41d2_4081_9b3c_9b7dd0db5390>;
}

export interface recursiveStruct
  extends QueryDefinition<recursiveStruct.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'recursiveStruct';
    displayName: 'recursiveStruct';
    rid: 'ri.function-registry.main.function.3a82a7fe-abf0-4596-9e06-167583f7987b';
    type: 'query';
    version: '2.0.1';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      person: {
        nullable: false;
        type: 'typeReference';
        typeId: '1225e6a4-41d2-4081-9b3c-9b7dd0db5390';
      };
      /**
       * (no ontology metadata)
       */
      pet: {
        nullable: false;
        type: 'typeReference';
        typeId: '5f239c87-040a-4dd6-b50a-bcec78f6c6fc';
      };
    };
    output: {
      nullable: false;
      type: 'typeReference';
      typeId: '1225e6a4-41d2-4081-9b3c-9b7dd0db5390';
    };
    signature: recursiveStruct.Signature;
  };
  apiName: 'recursiveStruct';
  type: 'query';
  version: '2.0.1';
  osdkMetadata: typeof $osdkMetadata;
}

export const recursiveStruct: recursiveStruct = {
  apiName: 'recursiveStruct',
  type: 'query',
  version: '2.0.1',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
