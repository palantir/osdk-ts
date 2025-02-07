import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { InterfaceDefinition as $InterfaceDefinition, ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client';
export type OsdkObjectLinks$FooInterface = {};
export declare namespace FooInterface {
    type PropertyKeys = 'fooSpt';
    interface Props {
        readonly fooSpt: $PropType['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends $ObjectSet<FooInterface, FooInterface.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = $Osdk.Instance<FooInterface, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = OsdkInstance<OPTIONS, K>;
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
        description: 'Interface for Foo';
        displayName: 'Foo Interface';
        implementedBy: ['Employee', 'Person'];
        implements: [];
        links: {};
        properties: {
            /**
             *   display name: 'Foo',
             *   description: A foo
             */
            fooSpt: $PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.interface.main.interface.1';
        type: 'interface';
    };
}
export declare const FooInterface: FooInterface;
