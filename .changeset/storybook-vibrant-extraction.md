---
"@osdk/react-components-storybook": patch
---

Add Import dropdown (image or website) to the brand theme panel with an extracted-token preview. The website flow scrapes the site's real CSS — custom properties, element styles, and value heuristics — to recover actual design tokens across colors, typography, surface, and emphasis, mapped to token roles with perceptual scoring (rejecting near-white primaries, invisible borders, pale semantic variants, etc.). Fetching goes through a same-origin Storybook dev-server endpoint (server-side, no CORS) with public CORS proxies as a fallback, and falls back to the screenshot + node-vibrant pipeline when CSS extraction yields nothing usable. The image flow still synthesizes a coherent, WCAG-contrast-checked theme from the source's brand hue.
