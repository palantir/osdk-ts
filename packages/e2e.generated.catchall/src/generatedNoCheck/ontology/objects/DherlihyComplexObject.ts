import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace DherlihyComplexObject {
  export type PropertyKeys = 'id' | 'secret' | 'seriesId';

  export type Links = {};

  export interface Props {
    readonly id: $PropType['string'] | undefined;
    readonly secret: $PropType['string'] | undefined;
    readonly seriesId: $PropType['numericTimeseries'] | undefined;
  }
  export interface StrictProps {
    readonly id: $PropType['string'];
    readonly secret: $PropType['string'] | undefined;
    readonly seriesId: $PropType['numericTimeseries'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<DherlihyComplexObject, DherlihyComplexObject.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props,
  > = $Osdk<DherlihyComplexObject, K | OPTIONS>;
}

export interface DherlihyComplexObject extends $ObjectTypeDefinition<'DherlihyComplexObject'> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'DherlihyComplexObject';
  __DefinitionMetadata?: {
    objectSet: DherlihyComplexObject.ObjectSet;
    props: DherlihyComplexObject.Props;
    linksType: DherlihyComplexObject.Links;
    strictProps: DherlihyComplexObject.StrictProps;
    apiName: 'DherlihyComplexObject';
    description: 'Dherlihy Complex Object';
    displayName: 'Dherlihy Complex Object';
    icon: {
      type: 'blueprint';
      name: 'dherlihy';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Dherlihy Complex Objects';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      secret: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      seriesId: $PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'id';
    type: 'object';
  };
}

export const DherlihyComplexObject: DherlihyComplexObject = {
  type: 'object',
  apiName: 'DherlihyComplexObject',
  osdkMetadata: $osdkMetadata,
};
