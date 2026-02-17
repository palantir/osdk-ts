#!/bin/bash
# Test Storybook build locally

echo "Building dependencies..."
cd ../..
pnpm --filter "./packages/**" run transpile 2>/dev/null || true
pnpm --filter "./packages/**" run transpileBrowser 2>/dev/null || true
pnpm --filter "./packages/**" run transpileEsm 2>/dev/null || true
pnpm --filter "./packages/**" run transpileCjs 2>/dev/null || true

echo "Building Storybook..."
cd packages/react-components-storybook
pnpm build-storybook

echo "Starting preview server..."
npx serve storybook-static -p 6006