# Documentation Reference Guide

This file provides detailed patterns and examples for documenting osdk-ts components.

## Frontmatter Format

All Docusaurus pages require YAML frontmatter:

```yaml
---
sidebar_position: 2
---
```

- `sidebar_position` - Number that controls ordering in the sidebar (lower = earlier)
- Use sequential numbering within each section

## Callout Boxes

Use Docusaurus callouts to highlight important information:

### Info Box
```markdown
:::info Stability
This is a beta feature in `@osdk/react/experimental`
:::
```

### Warning Box
```markdown
:::warning Version Compatibility
All `@osdk/*` packages must use compatible versions.
:::
```

### Tip Box
```markdown
:::tip Best Practice
✓ DO: Keep components rendering during loading states
:::
```

### Note Box
```markdown
:::note
Throughout this documentation, `@my/osdk` refers to your generated SDK package.
:::
```

## Code Block Format

Use TypeScript with TSX syntax highlighting:

````markdown
```tsx
import { useOsdkObjects } from "@osdk/react/experimental";
import { Todo } from "@my/osdk";

function TodoList() {
  const { data, isLoading } = useOsdkObjects(Todo);

  return <div>{data?.map(t => t.title)}</div>;
}
```
````

## Component Documentation Structure

### 1. Title and Description

```markdown
# useOsdkObjects

Retrieve and observe collections of objects with automatic cache management.
```

- Start with clear, concise description (1-2 sentences)
- Focus on what it does and when to use it

### 2. Stability Status

```markdown
*Experimental - import from `@osdk/react/experimental`*

:::info Beta Release
This feature is in beta. The API may change between releases.
:::
```

### 3. Basic Usage

Show the simplest working example first:

````markdown
### Basic Usage

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo);

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.map(todo => <div key={todo.$primaryKey}>{todo.title}</div>)}
    </div>
  );
}
```
````

### 4. Parameters Table

Document all parameters in a table:

```markdown
## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | `OsdkObjectType<T>` | Yes | The object type to query (from your generated SDK) |
| `options` | `UseOsdkObjectsOptions<T>` | No | Query options (filters, pagination, sorting) |

### Options

| Option | Type | Description |
|--------|------|-------------|
| `where` | `WhereClause<T>` | Filter criteria for the query |
| `orderBy` | `OrderBy<T>` | Sorting configuration |
| `$pageSize` | `number` | Number of objects per page (default: 100) |
| `enabled` | `boolean` | Whether to execute the query (default: true) |
| `rids` | `string[]` | Fetch specific objects by RID |
```

### 5. Return Value

Document the return type structure:

```markdown
## Return Value

The hook returns an object with:

- `data` - Array of objects matching the query (undefined while initially loading)
- `isLoading` - True while fetching data from server
- `isOptimistic` - True if data includes optimistic updates
- `fetchMore` - Function to load next page (undefined when no more pages)
- `error` - Error object if fetch failed
```

### 6. Examples Section

Provide multiple examples covering common use cases:

```markdown
## Examples

### Filtering Data

```tsx
const { data } = useOsdkObjects(Todo, {
  where: { isComplete: false },
});
```

### Pagination

```tsx
function PaginatedList() {
  const { data, fetchMore } = useOsdkObjects(Todo, {
    $pageSize: 20,
  });

  return (
    <div>
      {data?.map(todo => <TodoItem key={todo.$primaryKey} todo={todo} />)}
      {fetchMore && <button onClick={fetchMore}>Load More</button>}
    </div>
  );
}
```

### Conditional Queries

```tsx
const { data } = useOsdkObjects(Employee, {
  where: { department: selectedDepartment },
  enabled: selectedDepartment !== null,
});
```
```

### 7. Advanced Usage

Document more complex patterns:

```markdown
## Advanced Usage

### Combining Multiple Filters

```tsx
const { data } = useOsdkObjects(Employee, {
  where: {
    $and: [
      { department: "Engineering" },
      { yearsOfExperience: { $gte: 5 } },
      { status: "active" }
    ]
  },
  orderBy: { lastName: "asc" }
});
```

### Real-time Updates

The hook automatically subscribes to object changes and updates when:
- An action modifies matching objects
- Objects are created that match the filter
- Objects are deleted from the result set

No additional code is needed - just render the data.
```

### 8. Best Practices

Use callouts to show do's and don'ts:

```markdown
## Best Practices

:::tip
✓ DO: Keep components rendering during loading states
```tsx
// Show loading indicator while keeping existing data visible
<div>
  {isLoading && <LoadingSpinner />}
  {data?.map(item => <Item key={item.$primaryKey} item={item} />)}
</div>
```
:::

:::warning
✗ DON'T: Use conditional returns that hide existing data
```tsx
// This causes UI flashing when revalidating
if (isLoading) return <LoadingMessage />;
```
:::

:::warning
✗ DON'T: Conditionally call hooks
```tsx
// WRONG - violates Rules of Hooks
if (shouldFetch) {
  const { data } = useOsdkObjects(Todo);
}

// CORRECT - use enabled option
const { data } = useOsdkObjects(Todo, {
  enabled: shouldFetch
});
```
:::
```

### 9. Troubleshooting

Address common issues:

```markdown
## Troubleshooting

### Hook returns undefined data

**Problem:** `data` is always undefined even after loading completes

**Solution:** Ensure `OsdkProvider2` wraps your component tree:

```tsx
// Wrong - provider missing
ReactDOM.render(<App />);

// Correct - provider at root
ReactDOM.render(
  <OsdkProvider2 client={client}>
    <App />
  </OsdkProvider2>
);
```

### "Hooks cannot be conditionally called" error

**Problem:** You're calling the hook inside a condition or loop

**Solution:** Use the `enabled` option instead:

```tsx
// Wrong
if (userId) {
  const { data } = useOsdkObject(User, userId);
}

// Correct
const { data } = useOsdkObject(User, userId, {
  enabled: userId !== null
});
```
```

### 10. Related Documentation

Link to related pages:

```markdown
## Related

- [Actions](/react/actions) - Modify objects with useOsdkAction
- [Advanced Queries](/react/advanced-queries) - useObjectSet and aggregations
- [Cache Management](/react/cache-management) - Understanding cache behavior
```

## Table Formatting

Use markdown tables for parameters, options, and comparisons:

```markdown
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param1` | `string` | Yes | Description here |
| `param2` | `number` | No | Optional param (default: 10) |
```

## Import Examples

Always show the full import path:

```markdown
```tsx
import { useOsdkObjects } from "@osdk/react/experimental";
import { Todo } from "@my/osdk";
```
```

## Type References

Reference TypeScript types inline with backticks:

```markdown
The `data` property returns `Array<OsdkInstance<T>> | undefined`
```

## Cross-References

Link to other documentation pages:

```markdown
See [Querying Data](/react/querying-data) for more details.
```

Use relative paths for internal links:
- Same directory: `[Actions](./actions.md)`
- Different directory: `[Guides](/guides/vite.md)`

## Progressive Disclosure

Structure content from simple to complex:

1. **Basic Usage** - Simplest working example
2. **Common Patterns** - Typical use cases (filtering, pagination)
3. **Advanced Usage** - Complex scenarios (combining features)
4. **Edge Cases** - Unusual but valid patterns
5. **Troubleshooting** - Common problems and solutions

## Code Comments

Use comments to explain non-obvious code:

```tsx
// Fetch employees in chunks of 50
const { data, fetchMore } = useOsdkObjects(Employee, {
  $pageSize: 50,
});

// Enable query only when department is selected
const enabled = selectedDepartment !== null;
```

## Stability Labels

Mark experimental features consistently:

```markdown
*Experimental - import from `@osdk/react/experimental`*
```

Mark stable features:

```markdown
*Stable - import from `@osdk/react`*
```

## Version Notes

Call out version-specific behavior:

```markdown
:::info Version 2.8+
This feature requires `@osdk/client` version 2.8.0 or higher.
:::
```

## Anti-Patterns

Explicitly document what NOT to do:

````markdown
:::warning Anti-Pattern
DON'T use early returns that hide data during loading:

```tsx
// BAD - causes UI flashing
if (isLoading) return <Spinner />;
return <DataDisplay data={data} />;

// GOOD - show both
return (
  <div>
    {isLoading && <Spinner />}
    <DataDisplay data={data} />
  </div>
);
```
:::
````

## Real-World Examples

Prefer realistic examples over toy examples:

```tsx
// Less useful - too abstract
const { data } = useOsdkObjects(MyType);

// More useful - shows real use case
function EmployeeDirectory() {
  const { data: employees, isLoading } = useOsdkObjects(Employee, {
    where: { department: "Engineering", status: "active" },
    orderBy: { lastName: "asc" }
  });

  return (
    <div className="directory">
      {employees?.map(emp => (
        <EmployeeCard
          key={emp.$primaryKey}
          employee={emp}
        />
      ))}
    </div>
  );
}
```
