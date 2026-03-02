# OSDK Components Documentation Example

This example application demonstrates the OSDK React Components library, including the ObjectTable component with live data from a Foundry instance.

## Prerequisites

- A Foundry instance with access
- An OAuth public client configured in Foundry
- The `Employee` object type in your ontology (or regenerate with your own ontology)

## Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your Foundry credentials in `.env`:**
   ```env
   VITE_FOUNDRY_URL=https://your-instance.palantirfoundry.com
   VITE_FOUNDRY_CLIENT_ID=your-oauth-client-id
   ```

3. **Create an OAuth Client in Foundry:**
   - Go to Developer Console
   - Create a new Third-party Application
   - Select "Public Client" type
   - Set redirect URL to: `http://localhost:5173/auth/callback`
   - Copy the Client ID to your `.env` file

4. **Install dependencies (from repo root):**
   ```bash
   pnpm install
   ```

5. **Start the dev server:**
   ```bash
   pnpm dev
   ```

6. **Open in browser:**
   Navigate to `http://localhost:5173` and you'll be prompted to authenticate with Foundry.

## Generating Types for Your Ontology

If you want to use your own ontology instead of the example one:

1. Export your ontology definition to `ontology.json`
2. Run the codegen script:
   ```bash
   pnpm codegen
   ```

This will regenerate the TypeScript types in `src/generatedNoCheck/`.

## Features Demonstrated

- **ObjectTable Component**: High-performance data table with:
  - Column definitions
  - Custom column rendering
  - Sorting and filtering
  - Pagination
  - OAuth authentication setup

## Project Structure

```
src/
├── foundryClient.ts          # OSDK client configuration with OAuth
├── generatedNoCheck/         # Generated TypeScript types from ontology
├── App.tsx                   # Main application and documentation pages
└── main.tsx                  # Application entry point
```
