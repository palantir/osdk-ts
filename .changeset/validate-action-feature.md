---
"@osdk/client": patch
"@osdk/react": patch
---

Add validateAction support to useOsdkAction hook

The `useOsdkAction` hook in `@osdk/react` now provides a `validateAction` function that allows you to check if an action is valid without executing it. This is useful for providing real-time validation feedback to users before they commit to performing an action.

### New features:

- **validateAction**: A new async function that validates action parameters without executing the action
- **isValidating**: A boolean state that indicates when validation is in progress
- **validationResult**: Contains the validation response from the server, including whether the action is valid and any validation errors

### Example usage:

```tsx
const {
  applyAction,
  validateAction,
  isValidating,
  validationResult,
} = useOsdkAction(myAction);

// Validate without executing
await validateAction({ param1: "value" });

// Check validation result
if (validationResult?.result === "VALID") {
  console.log("Action is valid!");
} else {
  console.log("Validation failed:", validationResult);
}
```

### Implementation details:

- Multiple validation calls can be made - new calls automatically cancel previous pending validations
- Validation and action execution are mutually exclusive - you cannot validate while an action is being applied and vice versa
- The underlying `ObservableClient` in `@osdk/client` has been extended with a `validateAction` method to support this functionality
