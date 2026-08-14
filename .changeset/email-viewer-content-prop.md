---
"@osdk/react-components": minor
---

`BaseEmailViewer` takes its parsed email as `content`, matching the convention shared by the other viewers.

Nothing is removed. `email` is still accepted, is `@deprecated`, and `content` wins when both are set.

```
BaseEmailViewer  email -> content
```
