---
"@osdk/aip-core": patch
"@osdk/api": patch
"@osdk/cbac-components": patch
"@osdk/cli": patch
"@osdk/client": patch
"@osdk/client.unstable": patch
"@osdk/client.unstable.tpsa": patch
"@osdk/create-app": patch
"@osdk/create-widget": patch
"@osdk/faux": patch
"@osdk/foundry-config-json": patch
"@osdk/foundry-sdk-generator": patch
"@osdk/functions": patch
"@osdk/generator": patch
"@osdk/generator-converters": patch
"@osdk/generator-converters.ontologyir": patch
"@osdk/generator-converters.preview": patch
"@osdk/generator-utils": patch
"@osdk/language-models": patch
"@osdk/maker": patch
"@osdk/maker-experimental": patch
"@osdk/maker-import": patch
"@osdk/oauth": patch
"@osdk/osdk-docs-context": patch
"@osdk/react": patch
"@osdk/react-components": patch
"@osdk/react-devtools": patch
"@osdk/react-sdk-docs": patch
"@osdk/seed-compiler": patch
"@osdk/seed-helpers": patch
"@osdk/shared.client.impl": patch
"@osdk/shared.net": patch
"@osdk/shared.net.errors": patch
"@osdk/shared.net.fetch": patch
"@osdk/typescript-sdk-docs": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
"@osdk/vite-plugin-status-reporter": patch
"@osdk/vite-plugin-superrepo": patch
"@osdk/widget.api": patch
"@osdk/widget.client": patch
"@osdk/widget.client-react": patch
"@osdk/widget.vite-plugin": patch
---

Migrate the build tooling from tsup/babel to tsdown (Rolldown) and oxc-transform. Bundled (CJS) output is produced by tsdown; per-file ESM/browser output is produced by oxc-transform. Behavior is equivalent; JSX now uses the automatic runtime.
