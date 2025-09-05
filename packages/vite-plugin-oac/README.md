# OAC Vite Plugin

A Vite plugin that enables **Ontology as Code (OAC)** development by automatically generating ontology assets from TypeScript/JavaScript ontology definitions. This plugin handles the complete pipeline from ontology source code to ready-to-use OSDK (Ontology SDK) TypeScript files.

## Features

- **Automatic Asset Generation**: Converts `.ontology/ontology.mjs` files into IR, full metadata, and OSDK TypeScript files
- **Development Mode**: File watching with hot reload - changes to ontology files trigger automatic regeneration
- **Build Mode**: Seamless integration with Vite's build process for production builds
- **Intelligent Synchronization**: Only updates changed files to minimize build times
- **Foundry Middleware**: Local development server with mock Foundry API support
- **Comprehensive Error Handling**: Detailed logging and debug information preservation on failures

## Installation

```bash
pnpm add @osdk/vite-plugin-oac
```

## Usage

Add the plugin to your `vite.config.ts`:

```typescript
import oacVitePlugin from "@osdk/vite-plugin-oac";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    oacVitePlugin(),
    // ... other plugins
  ],
});
```

## Generated Assets Pipeline

The plugin orchestrates a three-stage generation process:

```
.ontology/ontology.mjs  →  .ontology.ir.json  →  .ontology.json  →  .osdk/src/*
     (Source)               (IR Format)        (Full Metadata)      (OSDK Files)
```

### Stage 1: JavaScript/TypeScript → IR

- Uses `@osdk/maker` to convert ontology source code to Intermediate Representation (IR)
- Input: `.ontology/ontology.mjs`
- Output: `.ontology.ir.json`

### Stage 2: IR → Full Metadata

- Converts IR format to complete ontology metadata
- Input: `.ontology.ir.json`
- Output: `.ontology.json`

### Stage 3: Full Metadata → OSDK

- Generates TypeScript SDK files using `@osdk/cli`
- Input: `.ontology.json`
- Output: `.osdk/src/*` directory structure

## Development vs Build Mode

### Development Mode

- **File Watching**: Monitors `.ontology/` directory for changes
- **Hot Reload**: Automatically regenerates assets when files change
- **Foundry Middleware**: Provides mock Foundry API for local development
- **Event Emitters**: Notifies other systems when regeneration completes

### Build Mode

- **One-time Generation**: Runs during Vite's `buildStart` hook
- **Build Integration**: Ensures assets are ready before the main build process
- **Error Propagation**: Build fails if ontology generation fails

## File Structure

```
.@osdk/vite-plugin-oac/
├── index.ts                      # Main plugin entry point
├── generateOntologyAssets.ts     # Core generation logic (shared by dev/build)
├── watchOntologyAsCode.ts        # Development mode file watching
├── syncDirectories.ts            # Intelligent file synchronization
├── FoundryMiddlewareController.ts # Mock Foundry API middleware
├── package.json                  # Plugin dependencies and metadata
└── tsconfig.json                 # TypeScript configuration
```

### Key Files

- **`index.ts`**: Main Vite plugin that coordinates between development and build modes
- **`generateOntologyAssets.ts`**: Contains the core three-stage generation pipeline
- **`watchOntologyAsCode.ts`**: Handles file watching and change detection in development
- **`syncDirectories.ts`**: Efficiently synchronizes generated files using SHA-256 hashing
- **`FoundryMiddlewareController.ts`**: Provides local Foundry API simulation for development

## Error Handling

The plugin includes comprehensive error handling:

- **Detailed Logging**: All operations are logged with timestamps
- **Debug Preservation**: Failed generations leave temporary files for inspection
- **Graceful Cleanup**: Successful operations clean up temporary files
- **Build Failure**: Build process stops if ontology generation fails

## Configuration

The plugin currently uses sensible defaults:

- **Ontology Directory**: `.ontology/`
- **IR Output**: `.ontology.ir.json`
- **Metadata Output**: `.ontology.json`
- **OSDK Output**: `.osdk/src/`

## Best Practices

1. **Ontology Structure**: Keep your ontology definitions in `.ontology/ontology.mjs`
2. **Version Control**: Include generated `.ontology.json` in version control for reproducible builds
3. **OSDK Files**: Consider `.osdk/src/` as generated code - don't edit manually
4. **Error Debugging**: Check temporary directories mentioned in error logs for debugging failed generations

## Troubleshooting

### Generation Failures

- Check the Vite dev server logs for detailed error messages
- Look for temporary directories mentioned in error logs
- Ensure all required dependencies are installed

### File Synchronization Issues

- The plugin uses SHA-256 hashing to detect changes
- Only modified files are updated to minimize build times
- Empty directories are automatically cleaned up

### Development Server Issues

- The Foundry middleware provides mock API responses
- Check browser developer tools for API-related errors
- Ensure ontology definitions are valid before testing

## License

Part of the larger OAC (Ontology as Code) development ecosystem.
