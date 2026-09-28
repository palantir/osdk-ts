# Widget preview

Shared parameter controls, event state, and message display for the Foundry widget-set viewer and local widget development.

A preview has two parts:

- `useWidgetPreviewState` owns parameter values and message history. It applies declared widget events, preserves parameter types, and resets state when the source changes. Late asynchronous updates from an earlier source or reset are ignored.
- `ParameterConfig` and `MessageDisplay` render that state. `PreviewProvider` supplies translated labels and date formatting. Consumers import `@osdk/widget.preview/styles.css` alongside Blueprint's core and datetime styles.

The consumer supplies a `PreviewConfig` using widget API parameter types. Local development converts its widget manifest; Foundry converts its GraphQL configuration. Resource inputs can be supplied through `ParameterConfig.renderInput`. Returning `undefined` uses the shared primitive or array control.

Transport, authentication, persistence, and resource services belong to the consumer. The Foundry viewer retains its sandbox, permissions, object-set picker, session storage, and virtualized message list. Local development supplies an iframe bridge and local object-set references. This package does not require a widget-set RID or a platform session.
