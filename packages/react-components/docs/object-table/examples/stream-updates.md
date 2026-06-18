### Streaming updates

Set `streamUpdates` to subscribe via websocket so the table updates automatically as matching objects are added, updated, or removed in Foundry. Cannot be combined with `pivotTo` or `withProperties` — those queries still fetch normally but won't receive real-time updates.

```tsx
<ObjectTable objectType={Employee} streamUpdates />;
```
