import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$FooInterface = {};

export namespace FooInterface {
  export type PropertyKeys =
    | 'name'
    | 'description'
    | 'inheritedDescription'
    | 'deprecatedName'
    | 'deprecatedDescription'
    | 'experimentalProperty';

  export interface Props {
    /**
     *   @deprecated
     *   - Use description instead.
     *   - deadline: 2025-06-30
     *   - replaced by: description
     *
     *   property status: deprecated
     *
     *   display name: 'Deprecated Description',
     *
     *   description: A deprecated description property
     */
    readonly deprecatedDescription: $PropType['string'] | undefined;
    /**
     *   @deprecated
     *   - This property is deprecated and will be removed.
     *   - deadline: 2024-12-31
     *   - replaced by: name
     *
     *   property status: deprecated
     *
     *   display name: 'Deprecated Name',
     *
     *   description: A deprecated name property
     */
    readonly deprecatedName: $PropType['string'] | undefined;
    /**
     *   display name: 'Description',
     *
     *   description: Description of Description
     */
    readonly description: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Experimental Property',
     *
     *   description: An experimental property for testing
     */
    readonly experimentalProperty: $PropType['string'] | undefined;
    /**
     *   display name: 'Inherited Description',
     *
     *   description: Description property we inherited from some parent interface
     */
    readonly inheritedDescription: $PropType['string'] | undefined;
    /**
     *   display name: 'Name',
     *
     *   description: Name of Foo
     */
    readonly name: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<FooInterface, FooInterface.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = $Osdk.Instance<FooInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface FooInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'FooInterface';
  __DefinitionMetadata?: {
    objectSet: FooInterface.ObjectSet;
    props: FooInterface.Props;
    linksType: OsdkObjectLinks$FooInterface;
    strictProps: FooInterface.StrictProps;
    apiName: 'FooInterface';
    description: 'Its a Foo.';
    displayName: 'Foo interface';
    implementedBy: undefined;
    implements: undefined;
    links: {};
    properties: {
      /**
       *   @deprecated
       *   - Use description instead.
       *   - deadline: 2025-06-30
       *   - replaced by: description
       *
       *   property status: deprecated
       *
       *   display name: 'Deprecated Description',
       *
       *   description: A deprecated description property
       */
      deprecatedDescription: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   @deprecated
       *   - This property is deprecated and will be removed.
       *   - deadline: 2024-12-31
       *   - replaced by: name
       *
       *   property status: deprecated
       *
       *   display name: 'Deprecated Name',
       *
       *   description: A deprecated name property
       */
      deprecatedName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Description',
       *
       *   description: Description of Description
       */
      description: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Experimental Property',
       *
       *   description: An experimental property for testing
       */
      experimentalProperty: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Inherited Description',
       *
       *   description: Description property we inherited from some parent interface
       */
      inheritedDescription: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *
       *   description: Name of Foo
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
    type: 'interface';
  };
}

export const FooInterface = {
  type: 'interface',
  apiName: 'FooInterface',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
  },
} satisfies FooInterface & { internalDoNotUseMetadata: { rid: string } } as FooInterface;
