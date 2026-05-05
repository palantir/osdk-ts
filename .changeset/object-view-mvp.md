---
"@osdk/react-components": minor
---

Add experimental `<ObjectView>` and `<BaseObjectView>` components for rendering a single ontology object as a header + Properties section. The OSDK wrapper fetches the object and its type metadata via `useOsdkObject` and `useOsdkMetadata` and derives the layout from the title property and per-property metadata. The Base layer is fully OSDK-agnostic and accepts a primitive `ObjectViewObject` shape, so consumers with pre-fetched data can render directly. Render overrides (`renderHeader`, `renderProperty`) and lifecycle listeners (`onObjectLoaded`, `onObjectLoadError`) are supported. MVP scope: only the `{ objectType, primaryKey }` input mode is implemented; `objectSet` and `object` modes throw at runtime.
