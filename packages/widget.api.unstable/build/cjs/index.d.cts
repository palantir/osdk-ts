interface AsyncNotStartedLoadingValue {
    type: "not-started";
    value?: never;
    error?: never;
}
interface AsyncLoadingValue {
    type: "loading";
    value?: never;
    error?: never;
}
interface AsyncLoadedValue<V> {
    type: "loaded";
    value: V | undefined;
    error?: never;
}
interface AsyncReloadingValue<V> {
    type: "reloading";
    value: V | undefined;
    error?: never;
}
interface AsyncFailedValue<V, E = Error> {
    type: "failed";
    error: E;
    value: V | undefined;
}
/**
 * Represents a value that is loaded asynchronously.
 * This allows for type safe checking of what the value's loading state is.
 * The expected lifecycle is:
 *    not-started -> loading -> loaded or failed -> reloading -> ....
 */
type AsyncValue<V, E = Error> = AsyncNotStartedLoadingValue | AsyncLoadingValue | AsyncLoadedValue<V> | AsyncReloadingValue<V> | AsyncFailedValue<V, E>;

/**
 * Map of the name of the type to the corresponding JavaScript type.
 */
type PrimitiveParameterTypes = {
    boolean: boolean;
    /** Formatted as an ISO date string, e.g. YYYY-MM-DD */
    date: string;
    number: number;
    string: string;
    /** Formatted as an ISO datetime string */
    timestamp: string;
};
type PrimitiveParameterType = keyof PrimitiveParameterTypes;
interface AbstractParameterValue<T extends PrimitiveParameterType> {
    type: T;
    value: AsyncValue<PrimitiveParameterTypes[T]>;
}
interface GenericArrayParameterValue<T extends PrimitiveParameterType> {
    type: "array";
    subType: T;
    value: AsyncValue<PrimitiveParameterTypes[T][]>;
}
/**
 * Wire format of parameter values that will be sent through postMessage events to custom widgets.
 */
declare namespace ParameterValue {
    type String = AbstractParameterValue<"string">;
    type Number = AbstractParameterValue<"number">;
    type Boolean = AbstractParameterValue<"boolean">;
    type Date = AbstractParameterValue<"date">;
    type Timestamp = AbstractParameterValue<"timestamp">;
    type StringArray = GenericArrayParameterValue<"string">;
    type NumberArray = GenericArrayParameterValue<"number">;
    type BooleanArray = GenericArrayParameterValue<"boolean">;
    type DateArray = GenericArrayParameterValue<"date">;
    type TimestampArray = GenericArrayParameterValue<"timestamp">;
    type Array = StringArray | NumberArray | BooleanArray | DateArray | TimestampArray;
    type Type = ParameterValue["type"];
    type PrimitiveType = PrimitiveParameterType;
}
type ParameterValue = ParameterValue.String | ParameterValue.Number | ParameterValue.Boolean | ParameterValue.Date | ParameterValue.Timestamp | ParameterValue.Array;

interface PrimitiveParameterDefinition<T extends ParameterValue.PrimitiveType> {
    type: T;
    displayName: string;
}
interface ArrayParameterDefinition<S extends ParameterValue.PrimitiveType> {
    type: ParameterValue.Array["type"];
    displayName: string;
    subType: S;
}
type ParameterDefinition = PrimitiveParameterDefinition<ParameterValue.PrimitiveType> | ArrayParameterDefinition<ParameterValue.PrimitiveType>;
interface EventDefinition<P extends ParameterConfig> {
    displayName: string;
    parameterUpdateIds: Array<ParameterId<P>>;
}
type ParameterConfig = Record<string, ParameterDefinition>;
interface WidgetConfig<P extends ParameterConfig> {
    id: string;
    name: string;
    description?: string;
    type: "workshop";
    parameters: ParameterConfig;
    events: {
        [eventId: string]: EventDefinition<NoInfer<P>>;
    };
}
/**
 * Extracts the parameter ID strings as types from the given ParameterConfig.
 */
type ParameterId<C extends ParameterConfig> = Extract<keyof C, string>;
/**
 * Extracts a map of parameter IDs to their async-wrapped value types from the given ParameterConfig.
 */
type AsyncParameterValueMap<C extends WidgetConfig<C["parameters"]>> = {
    [K in ParameterId<C["parameters"]>]: C["parameters"][K] extends ArrayParameterDefinition<infer S> ? Extract<ParameterValue.Array, {
        type: C["parameters"][K]["type"];
        subType: S;
    }>["value"] extends AsyncValue<infer P> ? {
        type: "array";
        subType: S;
        value: AsyncValue<P>;
    } : never : Extract<ParameterValue, {
        type: C["parameters"][K]["type"];
    }>["value"] extends AsyncValue<infer P> ? {
        type: C["parameters"][K]["type"];
        value: AsyncValue<P>;
    } : never;
};
/**
 * Extracts a map of parameter IDs to the raw parameter values from the given ParameterConfig.
 */
type ParameterValueMap<C extends WidgetConfig<C["parameters"]>> = {
    [K in ParameterId<C["parameters"]>]: C["parameters"][K] extends ArrayParameterDefinition<infer S> ? Extract<ParameterValue.Array, {
        type: C["parameters"][K]["type"];
        subType: S;
    }>["value"] extends AsyncValue<infer P> ? P : never : Extract<ParameterValue, {
        type: C["parameters"][K]["type"];
    }>["value"] extends AsyncValue<infer P> ? P : never;
};
type EventId<C extends WidgetConfig<C["parameters"]>> = keyof C["events"];
/**
 * Extracts a list of strongly-typed parameter IDs from the given WidgetConfig for a given event ID.
 * If a parameter ID is referenced by an event but does not exist, its type will be never
 */
type EventParameterIdList<C extends WidgetConfig<C["parameters"]>, K extends EventId<C>> = C["events"][K]["parameterUpdateIds"] extends Array<ParameterId<C["parameters"]>> ? C["events"][K]["parameterUpdateIds"] : never;
/**
 * Extracts a map of event IDs to their raw parameter value types from the given WidgetConfig.
 */
type EventParameterValueMap<C extends WidgetConfig<C["parameters"]>, K extends EventId<C>> = {
    [P in EventParameterIdList<C, K>[number]]: ParameterValueMap<C>[P];
};
declare function defineConfig<const C extends WidgetConfig<any>>(c: C): C;

interface WidgetSetManifestV1 {
    manifestVersion: "1.0.0";
    widgetSet: WidgetSetManifestContentV1;
}
interface WidgetSetManifestContentV1 {
    /**
     * RID of the widget set that this config corresponds to
     */
    rid: string;
    /**
     * The version of the widget to publish as
     */
    version: string;
    /**
     * Set of widgets that are available to be rendered.
     * The key can be arbitrary, and is usually the name of your entrypoint, e.g. "main"
     */
    widgets: Record<string, WidgetManifestConfigV1>;
}
interface WidgetManifestConfigV1 {
    /**
     * The ID of this widget. Must be unique within the widget set
     */
    id: string;
    /**
     * The user friendly name of this widget
     */
    name: string;
    /**
     * A user friendly description of this widget
     */
    description?: string;
    /**
     * The target Foundry UI that this widget is intended to be used in
     */
    type: "workshopWidgetV1";
    /**
     * List of entrypoint JS files to be loaded, in order. These will be placed on the page in script tags
     */
    entrypointJs: Array<{
        /** Relative path of the JS file to load */
        path: string;
        /** The type to use in the script tag when loading this JS file */
        type: "module" | "text/javascript";
    }>;
    /**
     * Any CSS files to be loaded, in order.
     * @optional
     */
    entrypointCss?: Array<{
        /** Relative path of the CSS file to load */
        path: string;
    }>;
    /**
     * The map of parameter IDs to their definition
     */
    parameters: Record<string, ParameterDefinition>;
    /**
     * The map of events to their definition. Any parameter IDs referenced must be defined in the `parameters` field
     */
    events: Record<string, EventDefinition<ParameterConfig>>;
}
declare const MANIFEST_FILE_LOCATION = ".palantir/widgets.config.json";

interface HostBaseMessage<T extends string, P = unknown> {
    type: T;
    payload: P;
}
declare namespace HostMessage {
    const Version = "1.0.0";
    type Version = typeof Version;
    namespace Payload {
        interface UpdateParameters<C extends WidgetConfig<C["parameters"]>> {
            parameters: AsyncParameterValueMap<C>;
        }
        /**
         * Temporary fetch proxy response
         * Will be removed in favor of server side proxy
         */
        interface _unstable_FetchResponseSuccess {
            id: string;
            status: number;
            statusText: string;
            headers: Record<string, string>;
            body: string;
        }
        /**
         * Temporary fetch proxy response
         * Will be removed in favor of server side proxy
         */
        interface _unstable_FetchResponseFailed {
            id: string;
            error: string;
        }
    }
    type Payload = Payload.UpdateParameters<any> | Payload._unstable_FetchResponseSuccess | Payload._unstable_FetchResponseFailed;
    interface UpdateParameters<C extends WidgetConfig<C["parameters"]>> extends HostBaseMessage<"host.update-parameters", Payload.UpdateParameters<C>> {
    }
    /**
     * Temporary fetch proxy response
     * Will be removed in favor of server side proxy
     */
    interface _unstable_FetchResponseSuccess extends HostBaseMessage<"host._unstable.fetch-response-success", Payload._unstable_FetchResponseSuccess> {
    }
    /**
     * Temporary fetch proxy response
     * Will be removed in favor of server side proxy
     */
    interface _unstable_FetchResponseFailed extends HostBaseMessage<"host._unstable.fetch-response-failed", Payload._unstable_FetchResponseFailed> {
    }
}
type HostMessage<C extends WidgetConfig<C["parameters"]>> = HostMessage.UpdateParameters<C> | HostMessage._unstable_FetchResponseSuccess | HostMessage._unstable_FetchResponseFailed;
declare function isHostParametersUpdatedMessage<C extends WidgetConfig<C["parameters"]>>(event: HostMessage<C>): event is HostMessage.UpdateParameters<C>;
declare function _unstable_isHostFetchResponseSuccessMessage<C extends WidgetConfig<C["parameters"]>>(event: HostMessage<C>): event is HostMessage._unstable_FetchResponseSuccess;
declare function _unstable_isHostFetchResponseFailedMessage<C extends WidgetConfig<C["parameters"]>>(event: HostMessage<C>): event is HostMessage._unstable_FetchResponseFailed;
type HostMessageVisitor<C extends WidgetConfig<C["parameters"]>> = {
    [T in HostMessage<C>["type"]]: (payload: Extract<HostMessage<C>, {
        type: T;
    }> extends {
        payload: infer P;
    } ? P : never) => void;
} & {
    _unknown: (type: string) => void;
};
/**
 * Strongly typed visitor to handle every type of host message
 */
declare function visitHostMessage<C extends WidgetConfig<C["parameters"]>>(message: HostMessage<C>, visitor: HostMessageVisitor<C>): void;

interface WidgetBaseMessage<T extends string, P = unknown> {
    type: T;
    payload: P;
}
type EmitEventIdMap<C extends WidgetConfig<C["parameters"]>> = {
    [K in EventId<C>]: {
        eventId: K;
        parameterUpdates: EventParameterValueMap<C, K>;
    };
};
declare namespace WidgetMessage {
    namespace Payload {
        interface Ready {
            apiVersion: HostMessage.Version;
        }
        type EmitEvent<C extends WidgetConfig<C["parameters"]>> = EmitEventIdMap<C>[EventId<C>];
        /**
         * Temporary fetch proxy
         * Will be removed in favor of server side proxy
         */
        interface _unstable_FetchRequest {
            id: string;
            url: string;
            method: string;
            headers: Record<string, string> | [string, string][];
            body?: string;
        }
    }
    type Payload<C extends WidgetConfig<C["parameters"]>> = Payload.Ready | Payload.EmitEvent<C> | Payload._unstable_FetchRequest;
    /**
     * Emit when the widget is ready to start receiving messages from the host Foundry UI
     */
    interface Ready extends WidgetBaseMessage<"widget.ready", Payload.Ready> {
    }
    /**
     * Event payload that the widget sends to the host Foundry UI
     */
    interface EmitEvent<C extends WidgetConfig<C["parameters"]>> extends WidgetBaseMessage<"widget.emit-event", Payload.EmitEvent<C>> {
    }
    /**
     * Temporary fetch proxy
     * Will be removed in favor of server side proxy
     */
    interface _unstable_FetchRequest extends WidgetBaseMessage<"widget._unstable.fetch-request", Payload._unstable_FetchRequest> {
    }
}
type WidgetMessage<C extends WidgetConfig<C["parameters"]>> = WidgetMessage.Ready | WidgetMessage.EmitEvent<C> | WidgetMessage._unstable_FetchRequest;
declare function isWidgetReadyMessage<C extends WidgetConfig<C["parameters"]>>(event: WidgetMessage<C>): event is WidgetMessage.Ready;
declare function isWidgetEmitEventMessage<C extends WidgetConfig<C["parameters"]>>(event: WidgetMessage<C>): event is WidgetMessage.EmitEvent<C>;
declare function _unstable_isWidgetFetchMessage<C extends WidgetConfig<C["parameters"]>>(event: WidgetMessage<C>): event is WidgetMessage._unstable_FetchRequest;
type WidgetMessageVisitor<C extends WidgetConfig<C["parameters"]>> = {
    [T in WidgetMessage<C>["type"]]: (payload: Extract<WidgetMessage<C>, {
        type: T;
    }> extends {
        payload: infer P;
    } ? P : never) => void;
} & {
    _unknown: (type: string) => void;
};
declare function visitWidgetMessage<C extends WidgetConfig<C["parameters"]>>(message: WidgetMessage<C>, visitor: WidgetMessageVisitor<C>): void;

declare const META_TAG_HOST_ORIGIN = "x-palantir-widgets-host-origin";

export { type AsyncFailedValue, type AsyncLoadedValue, type AsyncLoadingValue, type AsyncNotStartedLoadingValue, type AsyncParameterValueMap, type AsyncReloadingValue, type AsyncValue, type EventId, type EventParameterValueMap, HostMessage, MANIFEST_FILE_LOCATION, META_TAG_HOST_ORIGIN, type ParameterConfig, type ParameterDefinition, ParameterValue, type ParameterValueMap, type WidgetConfig, type WidgetManifestConfigV1 as WidgetManifestConfig, WidgetMessage, type WidgetSetManifestV1 as WidgetSetManifest, _unstable_isHostFetchResponseFailedMessage, _unstable_isHostFetchResponseSuccessMessage, _unstable_isWidgetFetchMessage, defineConfig, isHostParametersUpdatedMessage, isWidgetEmitEventMessage, isWidgetReadyMessage, visitHostMessage, visitWidgetMessage };
