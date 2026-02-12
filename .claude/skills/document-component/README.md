# document-component Skill

Automatically generates comprehensive documentation for React components, hooks, and utilities in the osdk-ts project.

## Usage

Invoke the skill with the component name or file path:

```bash
/document-component useLinks
/document-component useOsdkAggregation
/document-component packages/react/src/new/useObjectSet.tsx
/document-component createMinimalClient
```

## What It Does

The skill will:

1. **Read the source code** to understand parameters, return values, and behavior
2. **Check for existing documentation** to maintain consistency
3. **Generate or update documentation** following Docusaurus conventions:
   - Frontmatter with sidebar position
   - Clear basic usage examples
   - Parameters and return value tables
   - Multiple usage examples (simple → advanced)
   - Best practices with do's and don'ts
   - Troubleshooting section
   - Related documentation links

4. **Optionally add interactive examples** to the doc app (for visual components):
   - Following shadcn/ui's "show, don't tell" approach
   - Live demos that users can interact with
   - Code examples with copy buttons
   - Progressive disclosure from simple to advanced
   - Located at [examples-extra/docs_example](../../examples-extra/docs_example)

5. **Update the component registry** at `docs/component-registry.json`:
   - Machine-readable JSON registry for LLM discovery
   - Includes metadata, import paths, usage examples
   - Enables LLMs to understand all available components
   - Tracks relationships and dependencies

6. **Follow project conventions** from [CLAUDE.md](../../CLAUDE.md):
   - TypeScript/ESM syntax
   - Never use `any`
   - React hooks best practices (no conditional calls)
   - Keep components rendering during loading states

## Output Location

Documentation is created in:
- React hooks: `/docs/react/[topic].md`
- Client APIs: `/docs/client/[topic].md`
- General guides: `/docs/guides/[topic].md`

Code examples in the documentation demonstrate components using the **doc app** located at [examples-extra/docs_example](../../examples-extra/docs_example). This is a living example application that showcases OSDK React components and patterns in a real-world context.

## Documentation Style

The skill follows these patterns:

### Structure
1. Title and brief description
2. Stability status (Stable/Experimental/Beta)
3. Basic usage with simple example
4. Parameters table
5. Return value documentation
6. Multiple examples covering common cases
7. Advanced usage patterns
8. Best practices with callouts
9. Troubleshooting common issues
10. Related documentation links

### Code Examples
- TypeScript with TSX syntax
- Full imports shown
- Realistic use cases (not toy examples)
- Both simple and advanced patterns
- Comments explaining non-obvious code

### Callouts
- `:::info` - Stability, version notes
- `:::warning` - Anti-patterns, gotchas
- `:::tip` - Best practices, recommendations
- `:::note` - Additional context

## Component Registry

The skill automatically maintains a **machine-readable component registry** at `docs/component-registry.json`.

### Why a Registry?

LLMs can use this registry to:
- **Discover** all available components, hooks, and utilities
- **Understand** parameters, return types, and usage patterns
- **Navigate** relationships between components
- **Search** by tags, categories, or functionality
- **Reference** correct import paths and stability levels

### Registry Format

See [registry-schema.json](registry-schema.json) for the complete JSON schema.

Example entry:

```json
{
  "name": "useOsdkObjects",
  "type": "hook",
  "package": "@osdk/react",
  "importPath": "@osdk/react/experimental",
  "stability": "experimental",
  "description": "Retrieve and observe collections of objects with automatic cache management",
  "docPath": "docs/react/querying-data.md#useosdkobjects",
  "sourcePath": "packages/react/src/new/useOsdkObjects.ts",
  "category": "queries",
  "tags": ["query", "collection", "caching"],
  "usageExample": "const { data } = useOsdkObjects(Todo);",
  "parameters": [...],
  "returnValue": {...},
  "relatedComponents": ["useOsdkObject"],
  "requires": ["OsdkProvider2"]
}
```

See [registry-example.json](registry-example.json) for a complete example with multiple components.

## Supporting Files

- **[SKILL.md](SKILL.md)** - Main skill instructions (what Claude sees)
- **[reference.md](reference.md)** - Detailed patterns and formatting guide
- **[examples.md](examples.md)** - Sample documentation for different component types
- **[registry-schema.json](registry-schema.json)** - JSON schema for the component registry
- **[registry-example.json](registry-example.json)** - Example registry with documented components

## Examples

See [examples.md](examples.md) for complete documentation samples:
- React hook documentation (useOsdkObject)
- Provider component documentation (OsdkProvider2)
- Utility function documentation (createClient)

## When to Use

Use this skill when you need to:
- Document a new component or hook
- Update existing documentation for consistency
- Create docs for undocumented features
- Generate API reference documentation

## Next Steps

After generating documentation:
1. Review the generated content for accuracy
2. Add any project-specific context or examples
3. Test code examples to ensure they work
4. Add links to/from related documentation
5. Update sidebar position if needed
