---
"@osdk/react-components-storybook": patch
"@osdk/react-components": patch
---

Hide the DatePicker popover when its anchor scrolls out of view. Fixes an issue where the date picker in `ObjectTable` cells continued to render outside the table bounds after the cell scrolled out of the visible area.
