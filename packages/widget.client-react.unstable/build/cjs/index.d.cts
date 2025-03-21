import { WidgetConfig, AsyncParameterValueMap, FoundryWidgetClient, FoundryHostEventTarget, ParameterValueMap, AsyncValue } from '@osdk/widget.client.unstable';
import React from 'react';
import { Client } from '@osdk/client';

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
declare const FoundryWidget: <C extends WidgetConfig<C["parameters"]>>({ children, config, initialValues, }: FoundryWidgetProps<C>) => React.ReactElement<FoundryWidgetProps<C>>;

interface FoundryWidgetClientContext<C extends WidgetConfig<C["parameters"]>> {
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
        values: Partial<ParameterValueMap<C>>;
        state: AsyncValue<ParameterValueMap<C>>["type"];
    };
}
/**
 * @returns The current FoundryWidgetClientContext, in the context of your specific parameter configuration
 */
declare function useFoundryWidgetContext<C extends WidgetConfig<C["parameters"]>>(): FoundryWidgetClientContext<C>;
declare namespace useFoundryWidgetContext {
    function withTypes<C extends WidgetConfig<C["parameters"]>>(): () => FoundryWidgetClientContext<C>;
}

export { FoundryWidget, type FoundryWidgetClientContext, useFoundryWidgetContext };
