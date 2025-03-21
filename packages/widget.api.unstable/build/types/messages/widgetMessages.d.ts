import type { EventId, EventParameterValueMap, WidgetConfig } from "../config.js";
import type { HostMessage } from "./hostMessages.js";
interface WidgetBaseMessage<
	T extends string,
	P = unknown
> {
	type: T;
	payload: P;
}
type EmitEventIdMap<C extends WidgetConfig<C["parameters"]>> = { [K in EventId<C>] : {
	eventId: K
	parameterUpdates: EventParameterValueMap<C, K>
} };
export declare namespace WidgetMessage {
	namespace Payload {
		interface Ready {
			apiVersion: HostMessage.Version;
		}
		type EmitEvent<C extends WidgetConfig<C["parameters"]>> = EmitEventIdMap<C>[EventId<C>];
		interface _unstable_FetchRequest {
			id: string;
			url: string;
			method: string;
			headers: Record<string, string> | [string, string][];
			body?: string;
		}
	}
	type Payload<C extends WidgetConfig<C["parameters"]>> = Payload.Ready | Payload.EmitEvent<C> | Payload._unstable_FetchRequest;
	interface Ready extends WidgetBaseMessage<"widget.ready", Payload.Ready> {}
	interface EmitEvent<C extends WidgetConfig<C["parameters"]>> extends WidgetBaseMessage<"widget.emit-event", Payload.EmitEvent<C>> {}
	interface _unstable_FetchRequest extends WidgetBaseMessage<"widget._unstable.fetch-request", Payload._unstable_FetchRequest> {}
}
export type WidgetMessage<C extends WidgetConfig<C["parameters"]>> = WidgetMessage.Ready | WidgetMessage.EmitEvent<C> | WidgetMessage._unstable_FetchRequest;
export declare function isWidgetReadyMessage<C extends WidgetConfig<C["parameters"]>>(event: WidgetMessage<C>): event is WidgetMessage.Ready;
export declare function isWidgetEmitEventMessage<C extends WidgetConfig<C["parameters"]>>(event: WidgetMessage<C>): event is WidgetMessage.EmitEvent<C>;
export declare function _unstable_isWidgetFetchMessage<C extends WidgetConfig<C["parameters"]>>(event: WidgetMessage<C>): event is WidgetMessage._unstable_FetchRequest;
type WidgetMessageVisitor<C extends WidgetConfig<C["parameters"]>> = { [T in WidgetMessage<C>["type"]] : (payload: Extract<WidgetMessage<C>, {
	type: T
}> extends {
	payload: infer P
} ? P : never) => void } & {
	_unknown: (type: string) => void
};
export declare function visitWidgetMessage<C extends WidgetConfig<C["parameters"]>>(message: WidgetMessage<C>, visitor: WidgetMessageVisitor<C>): void;
export {};
