import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
export type OsdkObjectLinks$FooInterface = {};
export declare namespace FooInterface {
    type PropertyKeys = 'fooSpt';
    interface Props {
        readonly fooSpt: $PropType['string'] | undefined;
    }
    interface StrictProps {
        readonly fooSpt: $PropType['string'] | undefined;
    }
    interface ObjectSet extends $ObjectSet<FooInterface.Definition, FooInterface.ObjectSet> {
    }
    interface Definition extends $InterfaceDefinition<'FooInterface', FooInterface.Definition> {
        osdkMetadata: typeof $osdkMetadata;
        objectSet: FooInterface.ObjectSet;
        props: FooInterface.Props;
        linksType: OsdkObjectLinks$FooInterface;
        strictProps: FooInterface.StrictProps;
        displayName: 'Foo Interface';
        implements: [];
        links: {};
        properties: {
            /**
             *   display name: 'Foo',
             *   description: A foo
             */
            fooSpt: $PropertyDef<'string', 'nullable', 'single'>;
        };
    }
    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = $Osdk<FooInterface.Definition, K | OPTIONS>;
}
/** @deprecated use FooInterface.Definition **/
export type FooInterface = FooInterface.Definition;
export declare const FooInterface: FooInterface.Definition;
