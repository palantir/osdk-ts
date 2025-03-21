import { PropertyValueWireToClient, ObjectSet, Osdk, InterfaceDefinition, PropertyDef, ObjectTypeDefinition } from '@osdk/client';

declare namespace actions {
  export {  };
}

declare const $osdkMetadata: {
    extraUserAgent: string;
};
declare const $ontologyRid = "ri.ontology.main.ontology.dep";

type OsdkObjectLinks$SomeInterface = {};
declare namespace SomeInterface {
    type PropertyKeys = 'spt';
    interface Props {
        readonly spt: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<SomeInterface, SomeInterface.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof SomeInterface.Props = keyof SomeInterface.Props> = Osdk.Instance<SomeInterface, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof SomeInterface.Props = keyof SomeInterface.Props> = OsdkInstance<OPTIONS, K>;
}
interface SomeInterface extends InterfaceDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'interface';
    apiName: 'com.example.dep.SomeInterface';
    __DefinitionMetadata?: {
        objectSet: SomeInterface.ObjectSet;
        props: SomeInterface.Props;
        linksType: OsdkObjectLinks$SomeInterface;
        strictProps: SomeInterface.StrictProps;
        apiName: 'com.example.dep.SomeInterface';
        displayName: 'Sum Interface';
        implements: [];
        links: {};
        properties: {
            /**
             *   display name: 'Some Property'
             */
            spt: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'idk2';
        type: 'interface';
    };
}
declare const SomeInterface: SomeInterface;

declare const interfaces_SomeInterface: typeof SomeInterface;
declare namespace interfaces {
  export { interfaces_SomeInterface as SomeInterface };
}

declare namespace Task {
    type PropertyKeys = 'taskId' | 'body';
    type Links = {};
    interface Props {
        readonly body: PropertyValueWireToClient['string'] | undefined;
        readonly taskId: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Task, Task.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Task.Props = keyof Task.Props> = Osdk.Instance<Task, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Task.Props = keyof Task.Props> = OsdkInstance<OPTIONS, K>;
}
interface Task extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'com.example.dep.Task';
    __DefinitionMetadata?: {
        objectSet: Task.ObjectSet;
        props: Task.Props;
        linksType: Task.Links;
        strictProps: Task.StrictProps;
        apiName: 'com.example.dep.Task';
        description: 'Task description';
        displayName: 'Task';
        icon: {
            type: 'blueprint';
            name: 'task';
            color: '#000000';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Tasks';
        primaryKeyApiName: 'taskId';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            body: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            taskId: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ridForTask';
        status: 'ACTIVE';
        titleProperty: 'taskId';
        type: 'object';
    };
}
declare const Task: Task;

declare const objects_Task: typeof Task;
declare namespace objects {
  export { objects_Task as Task };
}

declare namespace queries {
  export {  };
}

export { actions as $Actions, interfaces as $Interfaces, objects as $Objects, queries as $Queries, $ontologyRid, $osdkMetadata, SomeInterface, Task };
