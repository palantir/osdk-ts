import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { StateTerritory } from './StateTerritory.js';
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

export namespace Country_1 {
  export type PropertyKeys = 'airportCountryName' | 'airportCountryIsoCode';

  export interface Links {
    readonly stateTerritory: StateTerritory.ObjectSet;
  }

  export interface Props {
    readonly airportCountryIsoCode: $PropType['string'] | undefined;
    readonly airportCountryName: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Country_1, Country_1.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Country_1.Props = keyof Country_1.Props,
  > = $Osdk.Instance<Country_1, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Country_1.Props = keyof Country_1.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Country_1 extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Country_1';
  __DefinitionMetadata?: {
    objectSet: Country_1.ObjectSet;
    props: Country_1.Props;
    linksType: Country_1.Links;
    strictProps: Country_1.StrictProps;
    apiName: 'Country_1';
    description: '';
    displayName: 'Country';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      stateTerritory: $ObjectMetadata.Link<StateTerritory, true>;
    };
    pluralDisplayName: 'Countries';
    primaryKeyApiName: 'airportCountryName';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      airportCountryIsoCode: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      airportCountryName: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.0a276176-8d93-489e-93b4-77673de56b9e';
    status: 'EXPERIMENTAL';
    titleProperty: 'airportCountryName';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Country_1: Country_1 = {
  type: 'object',
  apiName: 'Country_1',
  osdkMetadata: $osdkMetadata,
};
