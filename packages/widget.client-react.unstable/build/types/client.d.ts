import type { AsyncParameterValueMap, WidgetConfig } from "@osdk/widget.client.unstable";
import React from "react";
interface FoundryWidgetProps<C extends WidgetConfig<C["parameters"]>> {
	children: React.ReactNode;
	/**
	* Parameter configuration for the widget
	*/
	config: C;
	/**
	* Customize what the initial value of each parameter should be
	*
	* @default Sets all parameters to the "not-started" loading state
	*/
	initialValues?: AsyncParameterValueMap<C>;
}
/**
* Handles subscribing to messages from the host Foundry UI and updating the widget's parameter values accordingly via React context
*/
export declare const FoundryWidget: <C extends WidgetConfig<C["parameters"]>>({ children, config, initialValues }: FoundryWidgetProps<C>) => React.ReactElement<FoundryWidgetProps<C>>;
export {};
