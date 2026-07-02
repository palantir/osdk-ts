---
"@osdk/react-components": minor
---

Add `--osdk-button-primary-shadow` and `--osdk-button-border-radius` CSS variables to the button. Both default to the existing shared tokens (`--osdk-button-shadow` and `--osdk-surface-border-radius`), so there is no visual change out of the box, but a theme can now flatten the filled primary button (a drop shadow with no inset border/stroke) and give buttons their own corner radius independently of inputs and cards.
