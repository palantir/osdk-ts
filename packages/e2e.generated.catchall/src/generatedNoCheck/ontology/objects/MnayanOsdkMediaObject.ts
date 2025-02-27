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

export namespace MnayanOsdkMediaObject {
  export type PropertyKeys = 'id' | 'path' | 'mediaReference';

  export type Links = {};

  export interface Props {
    readonly id: $PropType['string'];
    readonly mediaReference: $PropType['mediaReference'] | undefined;
    readonly path: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MnayanOsdkMediaObject, MnayanOsdkMediaObject.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MnayanOsdkMediaObject.Props = keyof MnayanOsdkMediaObject.Props,
  > = $Osdk.Instance<MnayanOsdkMediaObject, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MnayanOsdkMediaObject.Props = keyof MnayanOsdkMediaObject.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MnayanOsdkMediaObject extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'MnayanOsdkMediaObject';
  __DefinitionMetadata?: {
    objectSet: MnayanOsdkMediaObject.ObjectSet;
    props: MnayanOsdkMediaObject.Props;
    linksType: MnayanOsdkMediaObject.Links;
    strictProps: MnayanOsdkMediaObject.StrictProps;
    apiName: 'MnayanOsdkMediaObject';
    description: 'Media OT for OSDK e2e testing';
    displayName: 'MnayanOSDKMediaObject';
    icon: {
      type: 'blueprint';
      name: 'object';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Mnayan OSDKMedia Objects';
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
      mediaReference: $PropertyDef<'mediaReference', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      path: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'path';
    type: 'object';
  };
}

export const MnayanOsdkMediaObject: MnayanOsdkMediaObject = {
  type: 'object',
  apiName: 'MnayanOsdkMediaObject',
  osdkMetadata: $osdkMetadata,
};
