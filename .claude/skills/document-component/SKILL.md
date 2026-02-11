---
name: document-component
description: Documents React components, hooks, or client utilities in osdk-ts following project conventions. Use when asked to create or update documentation for components.
allowed-tools: Read, Grep, Glob, Write, Edit
argument-hint: [component-name or file-path]
---

# Document Component Skill

Generate comprehensive documentation for osdk-ts components following the project's Docusaurus conventions.

## Your Task

Document the component/hook/utility specified in: **$ARGUMENTS**

## Documentation Location

- React hooks: `/Volumes/git/osdk-ts/docs/react/[topic].md`
- Client APIs: `/Volumes/git/osdk-ts/docs/client/[topic].md`
- General guides: `/Volumes/git/osdk-ts/docs/guides/[topic].md`

**Important:** Code examples should demonstrate components using the **doc app** at `/Volumes/git/osdk-ts/examples-extra/docs_example`. This is a living example application that showcases OSDK components in real-world usage.

## Process

### 1. Read the Source Code
- Locate the component/hook file
- Read the implementation to understand:
  - Parameters and their types
  - Return values and structure
  - Key behaviors and state management
  - Dependencies and context requirements

### 2. Check for Existing Documentation
- Look in `/Volumes/git/osdk-ts/docs/` for existing docs on this component
- Check if the component is mentioned in other docs
- Review related documentation for style consistency

### 3. Generate Documentation

Follow this structure (see [reference.md](reference.md) for detailed patterns):

```markdown
---
sidebar_position: [number]
---

# [Component/Hook Name]

Brief description (1-2 sentences) of what it does and when to use it.

:::info Stability
[Stable/Experimental/Beta] - Note the package export location
:::

## Basic Usage

```tsx
// Simple, clear example showing the most common use case
import { useExampleHook } from "@osdk/react/experimental";

function MyComponent() {
  const { data, isLoading } = useExampleHook(params);

  return <div>{data}</div>;
}
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param1` | `Type` | Yes | What it does |
| `param2` | `Type` | No | What it does (default: value) |

## Return Value

The hook returns an object with:

- `data` - The result data
- `isLoading` - Loading state indicator
- `error` - Error object if request failed
- `refetch` - Function to manually refetch

## Examples

### [Common Use Case 1]

```tsx
// Example with explanation
```

### [Common Use Case 2]

```tsx
// Example with explanation
```

## Advanced Usage

### [Advanced Pattern 1]

Explanation...

```tsx
// Code example
```

## Best Practices

:::tip
✓ DO: Follow this pattern...
:::

:::warning
✗ DON'T: Avoid this anti-pattern...
:::

## Troubleshooting

### Common Issue 1

**Problem:** Description of the issue

**Solution:** How to fix it

```tsx
// Fixed code example
```

## Related

- [Related Doc](./related-doc.md)
- [Another Related Doc](./another-doc.md)
```

### 4. Include Real Examples
- **Prefer examples from the doc app** at `/Volumes/git/osdk-ts/examples-extra/docs_example`
- This app demonstrates OSDK components in a real application context
- Search for usage in `/Volumes/git/osdk-ts/examples/` or test files as alternatives
- Use actual code from the codebase when possible
- Show both simple and advanced patterns

### 5. Follow Project Conventions

**From CLAUDE.md:**
- This is a TypeScript/ESM project
- Never use `any` without justification
- For React hooks: NEVER conditionally call hooks
- For React components: Keep components rendering during loading/error states
- This project uses pnpm (not npm)

**Documentation Style:**
- Use Docusaurus frontmatter with `sidebar_position`
- Use `:::info`, `:::warning`, `:::tip` callouts
- Include code examples inline
- Document return values as bullet lists
- Progressive disclosure: simple → advanced
- Include troubleshooting section
- Cross-reference related docs

### 6. Validate
- Ensure all code examples are TypeScript
- Check that import paths are correct
- Verify the component/hook actually exports what you document
- Make sure examples follow React best practices from CLAUDE.md

## Output

### Documentation File
Create or update the documentation file in the appropriate location. If updating existing docs, use the Edit tool to preserve the structure.

### Component Registry
After creating/updating documentation, **update or create the component registry** at:
`/Volumes/git/osdk-ts/docs/component-registry.json`

This registry allows LLMs to discover and understand all documented components. See [registry-example.json](registry-example.json) for the structure.

For each documented component, add or update its registry entry with:

```json
{
  "name": "useOsdkObjects",
  "type": "hook",
  "package": "@osdk/react",
  "importPath": "@osdk/react/experimental",
  "stability": "experimental",
  "description": "Brief description",
  "docPath": "docs/react/querying-data.md#useosdkobjects",
  "sourcePath": "packages/react/src/new/useOsdkObjects.ts",
  "category": "queries",
  "tags": ["query", "collection", "caching"],
  "usageExample": "const { data } = useOsdkObjects(Todo);",
  "parameters": [
    {
      "name": "objectType",
      "type": "OsdkObjectType<T>",
      "required": true,
      "description": "The object type to query"
    }
  ],
  "returnValue": {
    "type": "UseOsdkListResult<T>",
    "description": "Object with data, isLoading, error, fetchMore"
  },
  "relatedComponents": ["useOsdkObject", "useObjectSet"],
  "requires": ["OsdkProvider2"]
}
```

**Registry Fields:**
- `name` - Component/hook name
- `type` - One of: hook, component, provider, utility, function
- `package` - NPM package (e.g., "@osdk/react")
- `importPath` - Full import path
- `stability` - stable, experimental, beta, deprecated
- `description` - Brief description
- `docPath` - Relative path to documentation
- `sourcePath` - Relative path to source file
- `category` - Group (queries, actions, setup, platform-apis)
- `tags` - Searchable keywords
- `usageExample` - One-line code example
- `parameters` - Array of parameter objects
- `returnValue` - Type and description
- `relatedComponents` - Array of related component names
- `requires` - Array of dependencies (e.g., ["OsdkProvider2"])

### Doc App Integration (Optional but Recommended)

Following shadcn/ui's approach, consider adding an **interactive live example** to the doc app at `/Volumes/git/osdk-ts/examples-extra/docs_example/src/App.tsx`.

**When to add to doc app:**
- Component has visual output (not just a hook)
- Component benefits from live demonstration
- Component is stable enough for showcase

**Pattern to follow (inspired by shadcn):**

1. **Add navigation item** to the doc app's navigation structure
2. **Create page component** with these sections in order:
   - **Title & description** - What the component does
   - **Live demo first** - Working example users can interact with
   - **Installation section** - Import statement with copy button
   - **Props/API table** - Structured documentation
   - **Multiple examples** - Variations (sizes, states, etc.)
3. **Use real data** - Connect to actual OSDK objects (like Employee)
4. **Add code blocks** - Show source with copy buttons

**Example structure:**
```tsx
function ObjectTablePage() {
  return (
    <div className="space-y-8">
      {/* Title & Description */}
      <div>
        <h1>Object Table</h1>
        <p>A high-scale table component...</p>
      </div>

      {/* Installation */}
      <div>
        <h2>Installation</h2>
        <CodeBlock code={`import { ObjectTable } from "@osdk/react-components/experimental";`} />
      </div>

      {/* Live Demo */}
      <div>
        <h2>Live Preview</h2>
        <div className="border rounded-lg" style={{ height: "500px" }}>
          <ObjectTable objectType={Employee} />
        </div>
      </div>

      {/* Props Table */}
      <div>
        <h2>Props / API</h2>
        <PropsTable props={objectTableProps} />
      </div>

      {/* Examples */}
      <div>
        <h2>Usage Examples</h2>
        <h3>Basic Usage</h3>
        <CodeBlock code={`<ObjectTable objectType={Employee} />`} />
      </div>
    </div>
  );
}
```

**Key principles from shadcn:**
- Show, don't just tell - live demo comes early
- Interactive before technical - let users see it working
- Progressive disclosure - basic → advanced examples
- Copy-paste ready - all code has copy buttons

**After adding to doc app:**
- Update the navigation array to include the new page
- Test that the live component works with real data
- Ensure the doc app still builds and runs

### Summary
After documenting, provide a summary showing:
1. What was documented
2. Where the file was created/updated
3. Registry entry added/updated
4. Whether interactive example was added to doc app
5. Key features highlighted
6. Any gaps or questions that remain

## Examples

See [examples.md](examples.md) for sample documentation outputs and [registry-example.json](registry-example.json) for registry structure.
