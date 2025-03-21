import { type Client } from "@osdk/client";
import { type WidgetConfig, type WidgetMessage } from "@osdk/widget.api.unstable";
import { FoundryHostEventTarget } from "./host.js";
export interface FoundryWidgetClient<C extends WidgetConfig<C["parameters"]>> {
	/**
	* Notifies the host that this client is ready to receive the first parameter values
	*/
	ready: () => void;
	/**
	* Emits an event with the given ID and payload
	*/
	emitEvent: <M extends WidgetMessage.EmitEvent<C>>(eventId: M["payload"]["eventId"], payload: Omit<M["payload"], "eventId">) => void;
	/**
	* Creates a new OSDK client for the given Ontology, automatically inferring the correct URL to make API requests to.
	*/
	createOntologyClient: (ontologyRid: string) => Client;
	/**
	* Sends a message to the parent frame.
	* It is recommended to use the convenience methods for individual messages (e.g. ready or emitEvent) instead
	*/
	sendMessage: <M extends WidgetMessage<C>>(message: M) => void;
	/**
	* Subscribes to events from the host, invoking the listener when a message is received
	*/
	subscribe: () => void;
	/**
	* Unsubscribes a previously subscribed listener from host events, if one exists
	*/
	unsubscribe: () => void;
	/**
	* Event targets on which you can subscribe to specific host messages
	*/
	hostEventTarget: FoundryHostEventTarget<C>;
}
export declare function createFoundryWidgetClient<C extends WidgetConfig<C["parameters"]>>(): FoundryWidgetClient<C>;
