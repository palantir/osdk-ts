---
"@osdk/react-components": patch
---

Fix `ObjectTable` fetching the next page of rows when the user scrolls horizontally. The scroll container scrolls on both axes and `scroll` events carry no axis information, so a horizontal scroll reached the "near the bottom" check — which is always satisfied when the rows already fit vertically or the user is parked at the bottom. Pagination is now gated on the vertical offset actually having moved.
