---
"@osdk/widget.vite-plugin": patch
---

Fail the build when an event ID is not camelCase or is longer than 100 characters, a parameter or event display name is longer than 100 characters, a widget has more than 50 parameters or events, or an event's `parameterUpdateIds` repeats an ID or names a parameter the widget doesn't have.
