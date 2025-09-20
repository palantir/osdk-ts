# TypeScript Docs Example Generator

Transforms Handlebars templates from `@osdk/typescript-sdk-docs` into runnable TypeScript examples. Automatically generates variations for conditional blocks to test different code paths and validates template syntax at build time.

## Architecture

### Input Flow
```
YAML Templates → Handlebars Processing → TypeScript Examples → Build Validation
    ↓                      ↓                    ↓                   ↓
documentation.yml    baseContext.ts      example files      pnpm typecheck
```

### Key Components

- **`generateExamples.ts`** - Main orchestrator that processes all templates
- **`TemplateAnalyzer`** - Parses Handlebars AST to extract blocks and variables
- **`processTemplateV2`** - Applies context variables using Handlebars engine
- **`generateBlockVariations`** - Creates variations for `{{#block}}` conditionals
- **`HierarchyBuilder`** - Generates export files for downstream consumption

## How It Works

1. **Input**: Reads templates from `TYPESCRIPT_OSDK_SNIPPETS` (versions 2.0.0+)
2. **Context**: Each template receives variables from `baseContext.ts`
3. **Variations**: Block helpers (`{{#hasProperty}}`) generate multiple file variations
4. **Output**: Individual TypeScript files + hierarchy export files
5. **Validation**: Build process ensures generated code compiles

### Template Variations Example
```handlebars
{{#hasProperty}}
const property = "{{propertyName}}";
{{/hasProperty}}
```

Generates:

- `snippet_#hasProperty.ts` - Code with the property block
- `snippet_^hasProperty.ts` - Code without the property block

## Build & Run

```bash
# Build the generator
pnpm build

# Run tests
pnpm test

# Generate examples (from parent directory)
pnpm generateExamples

# With custom options
./bin/generate-examples.mjs --versions 2.1.0,2.4.0 --output-dir dist/examples
```

### CLI Options

```bash
generate-examples [options]

--versions <versions>      Comma-separated versions to generate (default: 2.1.0,2.4.0)
--output-dir <path>       Output directory (default: src/examples)
--hierarchy-output <path> Path for hierarchy file (default: src/typescriptOsdkExamples.ts)
--help, -h               Show help
```

## Template Management

### Adding New Templates (Existing Variables)

When all required Handlebars variables already exist in `baseContext.ts`:

1. **Add template** to `packages/typescript-sdk-docs/src/documentation.yml`:

   ```yaml
   myNewTemplate:
     - template: |-
         import { {{objectType}} } from "{{{packageName}}}";
         const result = await client.ontology.objects.{{objectType}}.get("{{primaryKey}}");
   ```

2. **Verify variables** exist in `baseContext.ts` (e.g., `objectType`, `packageName`, `primaryKey`)

3. **Run generation**:

   ```bash
   pnpm generateExamples
   ```

4. **Validate output**: Check generated files compile with `pnpm typecheck`

### Adding New Handlebars Variables

When templates require new context variables:

1. **Add variable** to `baseContext.ts`:

   ```typescript
   const baseContext: BaseTemplateContext = {
     // ... existing variables
     myNewVariable: "defaultValue",
     isFeatureEnabled: false, // for block helpers
   };
   ```

2. **Add template-specific overrides** in `TEMPLATE_REGISTRY` if needed:

   ```typescript
   const TEMPLATE_REGISTRY: TemplateRegistry = {
     mySpecificTemplate: {
       myNewVariable: "specificValue"
     }
   };
   ```

3. **Add tests** for new variable processing:

   ```typescript
   it("should process templates with myNewVariable", () => {
     const result = processTemplateV2(template, { myNewVariable: "test" });
     expect(result.success).toBe(true);
   });
   ```

4. **Update templates** in `documentation.yml`:

   ```yaml
   templateUsingNewVar:
     - template: |-
         {{#isFeatureEnabled}}
         const feature = "{{myNewVariable}}";
         {{/isFeatureEnabled}}
   ```

5. **Run generation and validate**:

   ```bash
   pnpm generateExamples
   pnpm typecheck
   ```

### Block Variable Naming

Block helpers follow these conventions:

- `{{#variableName}}` - Standard block (true condition)
- `{{^variableName}}` - Inverted block (false condition)
- Generated files: `template_#variableName.ts`, `template_^variableName.ts`

## Testing Strategy

### Test Categories

1. **Unit Tests** - Individual component behavior
   - Template parsing and analysis
   - Context variable processing
   - Block variation generation
   - Error handling paths

2. **Integration Tests** - Full pipeline validation
   - End-to-end generation process
   - Multiple version handling
   - File system operations

3. **Compilation Tests** - Generated code quality
   - No unresolved Handlebars placeholders
   - Proper example count validation
   - Business logic verification (not TypeScript compilation)

### Running Tests

```bash
# All tests
pnpm test

# Watch mode
pnpm test:watch

# Specific test pattern
pnpm test silent-failure
```

## Error Handling

The generator uses explicit error handling with `Result<T, E>` patterns:

### Common Errors

**Template Syntax Errors**

```
Parse error on line 5: Expecting 'EOF', got 'OPEN_ENDBLOCK'
```
→ Fix Handlebars syntax in `documentation.yml`

**Missing Variable Errors**

```
Variable 'newProperty' not found in context
```
→ Add variable to `baseContext.ts` or template-specific registry

**Generation Failures**

```
Failed to process block variation templateName#blockName
```
→ Check block syntax and context variable values

### Error Recovery

- Template parsing errors fail fast with clear messages
- Generation continues for valid templates when others fail
- Final build validation catches any remaining issues

## File Structure

```
src/
├── generateExamples.ts           # Main entry point
├── index.ts                      # Public exports
├── analyzer/
│   └── template-analyzer.ts      # Handlebars AST parsing
├── utils/
│   ├── baseContext.ts           # Template variable definitions
│   ├── processTemplate.v2.ts    # Handlebars processing
│   ├── generateBlockVariations.ts # Block helper variations
│   ├── hierarchyBuilder.ts      # Export file generation
│   └── codeTransformer.ts       # ESM import fixing
├── types/
│   ├── index.ts                 # Core type definitions
│   └── context.ts              # Template context types
└── __tests__/
    ├── silent-failure.test.ts   # Template processing tests
    ├── error-handling.test.ts   # Error scenario tests
    └── generated/
        └── compilation.test.ts  # Output validation tests
```

## Troubleshooting

### Build Issues

**"Template generation failed"**

- Check `documentation.yml` syntax with a YAML validator
- Verify all Handlebars variables exist in `baseContext.ts`
- Run `pnpm test` to identify specific failures

**"Generated code has compilation errors"**

- Run `pnpm typecheck` in the output package
- Check for unresolved `{{variables}}` in generated files
- Verify ESM import paths are correct (`.js` extensions)

**"Missing examples for version X"**

- Confirm version exists in `TYPESCRIPT_OSDK_SNIPPETS.versions`
- Check that templates for that version have valid syntax
- Review generation logs for skipped templates

### Development Tips

- Use `console.log` statements in templates are preserved in output
- Test individual templates with `processTemplateV2` in unit tests
- Check `HierarchyBuilder.getStats()` for generation metrics
- Template analysis failures are treated as build failures (not warnings)

## Dependencies

- **`@osdk/typescript-sdk-docs`** - Source of Handlebars templates
- **`handlebars`** - Template processing engine
- **`vitest`** - Testing framework

## Contributing

When modifying the generator:

1. **Preserve existing functionality** - all current templates must continue working
2. **Add tests** for new features or bug fixes
3. **Update `baseContext.ts`** when adding new template variables
4. **Validate generated output** compiles successfully
5. **Document breaking changes** that affect template authors