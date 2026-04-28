---
"@osdk/cli": patch
---

Build API URLs in site and widgetset commands via the URL constructor. The `foundryUrl` argument coerce now ensures a trailing slash (previously stripped it), so base URLs with path prefixes resolve correctly.
