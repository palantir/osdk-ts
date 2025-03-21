import type { Client } from "@osdk/client";
import { type AsyncParameterValueMap, type AsyncValue, FoundryHostEventTarget, type FoundryWidgetClient, type ParameterConfig, type ParameterValueMap, type WidgetConfig } from "@osdk/widget.client.unstable";
import React from "react";
export interface FoundryWidgetClientContext<C extends WidgetConfig<C["parameters"]>> {
	emitEvent: FoundryWidgetClient<C>["emitEvent"];
	/**
	* Creates a new OSDK client for the given Ontology, automatically inferring the correct URL to make API requests to.
	*/
	createOntologyClient: (ontologyRid: string) => Client;
	hostEventTarget: FoundryHostEventTarget<C>;
	/**
	* Object where the individual parameters have their async state represented
	*/
	asyncParameterValues: AsyncParameterValueMap<C>;
	/**
	* Convenience object that aggregates the value of all parameters, accounting for their loading states
	*/
	parameters: {
		values: Partial<ParameterValueMap<C>>
		state: AsyncValue<ParameterValueMap<C>>["type"]
	};
}
export declare const FoundryWidgetContext: React.Context<FoundryWidgetClientContext<WidgetConfig<ParameterConfig>>>;
/**
* @returns The current FoundryWidgetClientContext, in the context of your specific parameter configuration
*/
export declare function useFoundryWidgetContext<C extends WidgetConfig<C["parameters"]>>(): FoundryWidgetClientContext<C>;
export declare namespace useFoundryWidgetContext {
	function withTypes<C extends WidgetConfig<C["parameters"]>>(): () => FoundryWidgetClientContext<C>;
}
