# Components

Components attributes OSDK hooks to the React components that mounted them.

![Components tab](/img/react-devtools/components.png)

## Find a component

Search matches component names and detected Ontology usage. The summary reports mounted component, object type, and action type counts. Select an object type or action filter to narrow the list.

Only components with detected `@osdk/react` hooks appear. Components that use raw network calls or another state library are outside this view.

## Component details

Each component card groups its observed usage.

- Related objects lists detected object types and primary keys.
- Related actions lists calls made through `@osdk/react`.
- Related properties lists fields read by descendants.
- React props lists values captured from the mounted component.

The health badge reads Healthy when the monitor has not detected wasted renders or unused fetched properties. An unhealthy card summarizes the detected waste so you can inspect the component without leaving this tab.

## When to use it

Use Components to find which part of the React tree owns a query, compare sibling components that read the same object type, or trace an overfetching recommendation from Overview back to its component.
