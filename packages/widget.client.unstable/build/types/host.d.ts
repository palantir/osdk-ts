import type { HostMessage, WidgetConfig } from "@osdk/widget.api.unstable";
export interface HostMessageEventListener<P extends HostMessage.Payload> {
	(event: CustomEvent<P>): void;
}
export interface HostMessageEventListenerObject<P extends HostMessage.Payload> {
	handleEvent(object: CustomEvent<P>): void;
}
export declare class FoundryHostEventTarget<C extends WidgetConfig<C["parameters"]>> extends EventTarget {
	addEventListener<T extends HostMessage<C>["type"]>(type: T, callback: HostMessageEventListener<(HostMessage<C> & {
		type: T
	})["payload"]> | HostMessageEventListenerObject<(HostMessage<C> & {
		type: T
	})["payload"]> | null, options?: AddEventListenerOptions | boolean): void;
	removeEventListener<T extends HostMessage<C>["type"]>(type: T, callback: HostMessageEventListener<(HostMessage<C> & {
		type: T
	})["payload"]> | HostMessageEventListenerObject<(HostMessage<C> & {
		type: T
	})["payload"]> | null, options?: EventListenerOptions | boolean): void;
	dispatchEventMessage<T extends HostMessage<C>["type"]>(type: T, payload: (HostMessage<C> & {
		type: T
	})["payload"]): void;
}
