# @osdk/internal.modeling

Internal portable-model primitives and tooling for generating JSON Schema, standalone TypeScript declarations, and Pydantic v2 models from Zod schemas. Published for use by OSDK packages – direct external use is unsupported and compatibility is not guaranteed.

The root entry point contains runtime primitives, including `dictionary(valueSchema)` and `int64Schema`. Build-time generators and filesystem helpers live under `/generation` and `/files`.

```ts
import { dictionary, int64Schema } from "@osdk/internal.modeling";
import { generateModels } from "@osdk/internal.modeling/generation";
import { z } from "zod/v4";

const employeeSchema = z.strictObject({
  id: int64Schema,
  name: z.string().min(1),
  department: z.string().optional(),
  labels: dictionary(z.string()),
});

const { documents, typescript, pydantic } = generateModels({
  Employee: employeeSchema,
});
```

`generateModels` generates both language bindings. `documents` maps model names to Draft 2020-12 JSON Schemas. To generate only the documents or a single language, use the individual stages:

```ts
import {
  generateModelDocuments,
  generateTypeScript,
} from "@osdk/internal.modeling/generation";

const documents = generateModelDocuments({ Employee: employeeSchema });
const typescript = generateTypeScript(documents);
// Alternatively: generatePydantic(documents).
```

## Modeling contract

Generation rejects unsupported schemas, checks, and JSON Schema keywords rather than silently omitting validation.

- **Non-strict objects and native `z.record()`.** Use `z.strictObject()` to reject unknown fields rather than silently discard them. Use `dictionary(valueSchema)` for dictionaries. Native records can drop or reject valid JSON keys.
- **Nulls and optional values outside object fields.** Use omitted object fields for absence. Distinguishing null from omission is difficult across languages and wire formats. JSON has no `undefined` root values or array elements.
- **Untagged unions or other discriminator fields.** Unions must have distinct, required string `type` tags to match the public API.
- **Non-string enums or other enum casing.** Ordinary enums use `UPPER_SNAKE_CASE` starting with a letter to match the public API. Discriminator tags are exempt from the casing rule.
- **`$`-prefixed fields, enum values, or discriminator tags.** Reserving `$` keeps TypeScript-specific types out of portable authoring and avoids naming conflicts in other language generators, including Java builders, DTOs, and visitors.
- **Non-string literals.** Only string literals are allowed, matching the public API.
- **Unsized or unsigned integers and JavaScript safe-integer bounds.** Use signed `z.int32()` or `int64Schema` to match the public API and cross-language signed representations.
- **Non-canonical int64 values.** `int64Schema` uses decimal strings within signed 64-bit bounds to avoid JavaScript precision loss. Numbers, leading zeros, `-0`, and exponent notation are rejected to keep one canonical wire representation.
- **Optional or rest tuple elements.** Fixed-length tuples with every element required provide a consistent representation across languages.
- **Unnamed recursion or multiple names for one schema.** Unique registered names keep references stable across JSON Schema documents and generated bindings.
- **String-length checks other than `min(1)`.** Zod counts UTF-16 code units. JSON Schema and Python count Unicode code points. Nonempty-string checks agree across both representations.
- **Regexes outside the shared syntax subset.** JavaScript and Pydantic's regex engines differ. Require Unicode mode (`u`) without other flags; assertions, backreferences, Unicode/shorthand character classes, and set operations are unsupported.
- **Defaults, coercions, transforms, custom refinements, and unrecognized checks.** Generation must preserve wire values and validation logic. Built-in primitives supply explicit semantic validation and serialization, application-specific semantic checks (for example, validating int64 values) belong outside the schemas.
- **Dates, maps, sets, bigints, and opaque unknown values.** Use explicit JSON value models instead of language-specific runtime objects or unspecified validation.

TypeScript preserves explicit shallow readonly boundaries. JSON Schema `readOnly` is an annotation, not a cross-language deep-immutability guarantee.

`findModelingConstraintIssues(schema)` returns issues with a machine-readable `code`, a schema `path`, and a human-readable `message` explaining the restriction.

## Registering schemas and generating files

`generateModelDocuments` and `generateModels` take explicit names. Alternatively, `collectModels` accepts explicitly loaded module namespaces and derives `Employee` from `employeeSchema`. If you would like to write the generated code, `@osdk/internal.modeling/files` exports `synchronizeModelFiles(files, "write" | "check")`. The function does not overwrite files not explicitly tagged as auto-generated.

Generated types can also be used to define Zod models:

```ts
import type { Employee } from "./types.js";

export const employeeSchema: z.ZodType<Employee> = z.strictObject({
  // Schema definition remains authoritative.
});
```

This is possible since the type generation logic does not need to type check first, it just executes the TypeScript code as is.

## Python

Generated code targets Python 3.10+ and Pydantic 2.12+. It uses Pydantic's experimental `MISSING` sentinel: missing fields are omitted during serialization. Python keywords and inherited model-method names use aliases that preserve JSON names. Numeric coercion is rejected; integral JSON numbers such as `1.0` remain valid int32 values.

## Compatibility tests

The suite compares Zod validation with generated models and checks JSON round trips and JSON Schema export. It currently covers Python/Pydantic.

From the repository root:

```sh
uv venv --python 3.13 packages/internal.modeling/venv
uv pip install --python packages/internal.modeling/venv/bin/python -r packages/internal.modeling/requirements.txt
MODELING_PYTHON="$PWD/packages/internal.modeling/venv/bin/python" pnpm --filter @osdk/internal.modeling test-compatibility
```
