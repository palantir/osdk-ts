---
"@osdk/react-components": minor
---

ActionForm no longer converts values to match parameter types on submit, so pass correctly typed defaults and controlled values. A field that can't display its stored value shows a message such as "Expected a number, received: string" with a Clear button; these values don't block submit. Integer and long fields still truncate the user's edits on blur.
