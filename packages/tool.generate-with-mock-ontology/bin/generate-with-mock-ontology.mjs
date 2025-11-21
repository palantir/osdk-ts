#!/usr/bin/env node
// @ts-check

// polyfill localStorage for MSW compatibility with Node.js
// @ts-ignore - minimal polyfill, MSW only needs getItem/setItem
globalThis.localStorage = { getItem: () => null };

const { generateWithMockOntology } = await import(
  "../build/esm/generateWithMockOntology.js"
);
await generateWithMockOntology();
