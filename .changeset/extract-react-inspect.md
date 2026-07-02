---
"@osdk/react-inspect": minor
"@osdk/react-devtools": patch
---

Extract the point-and-click component inspector from @osdk/react-devtools into a new reusable @osdk/react-inspect package. The inspector runs in a generic mode that highlights any React component (like the official React DevTools) or an ontology mode that only selects OSDK-connected components, selected via the mode option on createClickToInspect. Low-level fiber utilities are exposed at @osdk/react-inspect/fiber, and the OSDK ontology detection is dependency-free (structural context detection plus a well-known global symbol).
