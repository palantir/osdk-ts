import type { AsyncParameterValueMap, WidgetConfig } from "@osdk/widget.client.unstable";
/**
* Utility function to initialize a map of parameter values to either a loading or not-started loading state
*/
export declare function initializeParameters<C extends WidgetConfig<C["parameters"]>>(config: C, initialLoadingState: "loading" | "not-started"): AsyncParameterValueMap<C>;
