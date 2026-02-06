import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export namespace MwaltherPersonOt {
  export type PropertyKeys = 'age' | 'id' | 'name';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Age'
     */
    readonly age: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'ID'
     */
    readonly id: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Name'
     */
    readonly name: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MwaltherPersonOt, MwaltherPersonOt.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MwaltherPersonOt.Props = keyof MwaltherPersonOt.Props,
  > = $Osdk.Instance<MwaltherPersonOt, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MwaltherPersonOt.Props = keyof MwaltherPersonOt.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MwaltherPersonOt extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'MwaltherPersonOt';
  __DefinitionMetadata?: {
    objectSet: MwaltherPersonOt.ObjectSet;
    props: MwaltherPersonOt.Props;
    linksType: MwaltherPersonOt.Links;
    strictProps: MwaltherPersonOt.StrictProps;
    apiName: 'MwaltherPersonOt';
    description: 'asd';
    displayName: '[mwalther] Person';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [
      'com.palantirfoundry.swirl.esong.MwaltherTest',
      'com.palantirfoundry.swirl.esong.MwaltherTestIdp',
      'MwaltherPersonV2',
      'MwaltherTestUpgrade',
    ];
    interfaceMap: {
      'com.palantirfoundry.swirl.esong.MwaltherTest': {
        mwaltherVtInputTest: 'name';
        'com.palantirfoundry.swirl.esong.mwaltherName': 'name';
      };
      'com.palantirfoundry.swirl.esong.MwaltherTestIdp': {
        newProperty1: 'name';
        idpAge: 'age';
        mwaltherNam: 'id';
        'com.palantirfoundry.swirl.esong.mwaltherName': 'name';
      };
      MwaltherPersonV2: {
        mwaltherNam: 'id';
      };
      MwaltherTestUpgrade: {
        'com.palantirfoundry.swirl.esong.mwaltherName': 'name';
      };
    };
    inverseInterfaceMap: {
      'com.palantirfoundry.swirl.esong.MwaltherTest': {
        name: 'com.palantirfoundry.swirl.esong.mwaltherName';
      };
      'com.palantirfoundry.swirl.esong.MwaltherTestIdp': {
        name: 'com.palantirfoundry.swirl.esong.mwaltherName';
        age: 'idpAge';
        id: 'mwaltherNam';
      };
      MwaltherPersonV2: {
        id: 'mwaltherNam';
      };
      MwaltherTestUpgrade: {
        name: 'com.palantirfoundry.swirl.esong.mwaltherName';
      };
    };
    links: {};
    pluralDisplayName: '[mwalther] OT implement IDPS';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Age'
       */
      age: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'ID'
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Name'
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.4ee4fa8d-e080-4317-be09-5e900223f4d5';
    status: 'EXPERIMENTAL';
    titleProperty: 'id';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const MwaltherPersonOt = {
  type: 'object',
  apiName: 'MwaltherPersonOt',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.4ee4fa8d-e080-4317-be09-5e900223f4d5',
  },
} satisfies MwaltherPersonOt & { internalDoNotUseMetadata: { rid: string } } as MwaltherPersonOt;
