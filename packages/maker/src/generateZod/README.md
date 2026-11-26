# Declarative IR Zod schema generation

Regenerates `src/generated/` from the published API Gateway declarative IR:

```sh
pnpm --filter @osdk/maker fetch-declarative-ir
pnpm --filter @osdk/maker generate-zod
```

## Updating the IR version

`fetch-declarative-ir` downloads the latest API Gateway Rosetta bundle via
`scripts/getDeclarativeIr.sh` (requires `MAVEN_DIST_RELEASE`, `curl`, `python3`,
and `tar`) and writes the resolved version to `tmp/api-gateway-ir/version.txt`.
Pass `--api-gateway-version` to `scripts/getDeclarativeIr.sh` to fetch a
specific release. `generate-zod` records that version as `API_GATEWAY_VERSION`
in `src/generated/index.ts`.

The declarative IR (`omniapi-declarative-ir.json`) is separate from `combined-ir.json` and does not require a federated-IR merge. `@osdk/docs-spec-platform` is a dev dependency for IR TypeScript types only, the embedded IR is not used as an input.
