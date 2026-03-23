import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace recursiveStruct {
  interface Person {
    readonly age: QueryParam.PrimitiveType<'integer'>;

    readonly allFriends?: ReadonlyArray<Person>;

    readonly bestFriend?: Person;

    readonly name: QueryParam.PrimitiveType<'string'>;

    readonly pet?: Person_1;
  }

  interface Person_1 {
    readonly breed: QueryParam.PrimitiveType<'string'>;

    readonly dad?: Person_1;

    readonly mom?: Person_1;

    readonly siblings?: ReadonlyArray<Person_1>;
  }

  interface Pet {
    readonly breed: QueryParam.PrimitiveType<'string'>;

    readonly dad?: Pet;

    readonly mom?: Pet;

    readonly siblings?: ReadonlyArray<Pet>;
  }

  interface recursiveStructOutput {
    age: QueryResult.PrimitiveType<'integer'>;

    allFriends?: Array<recursiveStructOutput>;

    bestFriend?: recursiveStructOutput;

    name: QueryResult.PrimitiveType<'string'>;

    pet?: recursiveStructOutput_1;
  }

  interface recursiveStructOutput_1 {
    breed: QueryResult.PrimitiveType<'string'>;

    dad?: recursiveStructOutput_1;

    mom?: recursiveStructOutput_1;

    siblings?: Array<recursiveStructOutput_1>;
  }

  export interface Signature {
    (query: recursiveStruct.Parameters): Promise<recursiveStruct.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly person: Person;

    /**
     * (no ontology metadata)
     */
    readonly pet: Pet;
  }

  export type ReturnType = recursiveStructOutput;
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
