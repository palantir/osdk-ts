/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  type JsonSchema,
  type ModelDocuments,
  referenceName,
  validateDocuments,
} from "./jsonSchema.js";
import { pydanticPattern } from "./patterns.js";

// cspell:ignore isinstance

// Alias these field names to avoid Python keyword and Pydantic method collisions.
const reservedFields = new Set([
  "False",
  "None",
  "True",
  "and",
  "as",
  "assert",
  "async",
  "await",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "finally",
  "for",
  "from",
  "global",
  "if",
  "import",
  "in",
  "is",
  "lambda",
  "nonlocal",
  "not",
  "or",
  "pass",
  "raise",
  "return",
  "try",
  "while",
  "with",
  "yield",
  "schema",
  "schema_json",
  "json",
  "dict",
  "copy",
  "validate",
  "construct",
  "parse_obj",
  "parse_raw",
  "parse_file",
  "from_orm",
  "update_forward_refs",
]);

/** Generates Python 3.10+ models using Pydantic 2.12's missing sentinel, not nullable defaults. */
export function generatePydantic(documents: ModelDocuments): string {
  validateDocuments(documents);
  const used = new Set(Object.keys(documents));
  const classes: string[] = [];
  const classNames: string[] = [];
  const aliases: string[] = [];
  let usesInt64 = false;
  function allocate(base: string): string {
    let name = base;
    let suffix = 2;
    while (used.has(name)) name = `${base}${suffix++}`;
    used.add(name);
    return name;
  }
  function pythonLiteral(value: unknown): string {
    if (typeof value === "string" || typeof value === "number")
      return JSON.stringify(value);
    throw new Error("Unsupported Python literal");
  }
  function object(schema: JsonSchema, name: string): string {
    const fields = Object.entries(schema.properties ?? {});
    const fieldNames = new Set(fields.map(([key]) => key));
    const declarations: string[] = [];
    for (const [key, child] of fields) {
      let field = key;
      // Uppercase fields can shadow model names while postponed annotations are resolved.
      if (
        !/^[A-Za-z][A-Za-z0-9_]*$/u.test(field) ||
        field.startsWith("model_") ||
        /^[A-Z]/u.test(field) ||
        reservedFields.has(field)
      ) {
        const base = reservedFields.has(field)
          ? `${field}_`
          : `field_${declarations.length + 1}`;
        field = base;
        let suffix = 2;
        while (fieldNames.has(field)) field = `${base}_${suffix++}`;
        fieldNames.add(field);
      }
      const optional = !schema.required?.includes(key);
      const fieldHint =
        key
          .split(/[^A-Za-z0-9]+/u)
          .map((part) =>
            part.length > 0 ? part[0].toUpperCase() + part.slice(1) : "",
          )
          .join("") || `Field${declarations.length + 1}`;
      const annotation = type(child as JsonSchema, `${name}${fieldHint}`);
      const args: string[] = [];
      if (optional) args.push("default=_MISSING");
      if (field !== key) args.push(`alias=${JSON.stringify(key)}`);
      if (schema.readOnly) args.push("frozen=True");
      const defaultValue =
        args.length > 0 ? ` = _pydantic.Field(${args.join(", ")})` : "";
      declarations.push(
        `    ${field}: ${optional ? `(${annotation}) | _MISSING` : annotation}${defaultValue}`,
      );
    }
    classNames.push(name);
    classes.push(
      `class ${name}(_Model):\n${declarations.join("\n") || "    pass"}\n`,
    );
    return name;
  }
  function type(schema: JsonSchema, hint: string): string {
    let value: string;
    if (schema.$ref) value = referenceName(schema.$ref, documents);
    else if ("const" in schema)
      value = `_typing.Literal[${pythonLiteral(schema.const)}]`;
    else if (schema.enum)
      value = `_typing.Literal[${schema.enum.map(pythonLiteral).join(", ")}]`;
    else if (schema.anyOf ?? schema.oneOf)
      value = `_typing.Union[${(schema.anyOf ?? schema.oneOf ?? []).map((entry, index) => type(entry as JsonSchema, `${hint}Variant${index + 1}`)).join(", ")}]`;
    else
      switch (schema.type) {
        case "string":
          if (schema.format === "int64") {
            usesInt64 = true;
            value = "_Int64";
          } else {
            value = "_pydantic.StrictStr";
          }
          break;
        case "boolean":
          value = "_pydantic.StrictBool";
          break;
        case "integer":
          value = "_pydantic.StrictInt";
          break;
        case "number":
          value = "_pydantic.StrictFloat";
          break;
        case "array":
          value =
            schema.prefixItems !== undefined
              ? `_typing.Tuple[${schema.prefixItems.map((item, index) => type(item as JsonSchema, `${hint}Item${index + 1}`)).join(", ") || "()"}]`
              : `_typing.List[${type(schema.items as JsonSchema, `${hint}Item`)}]`;
          break;
        case "object":
          if (typeof schema.additionalProperties === "object")
            value = `_typing.Dict[${schema.propertyNames ? type(schema.propertyNames as JsonSchema, `${hint}Key`) : "_pydantic.StrictStr"}, ${type(schema.additionalProperties, `${hint}Value`)}]`;
          else value = object(schema, allocate(hint));
          break;
        default:
          throw new Error("Unsupported model representation");
      }
    const constraints: string[] = [];
    const mappings = {
      minLength: "min_length",
      maxLength: "max_length",
      minItems: "min_length",
      maxItems: "max_length",
      minimum: "ge",
      maximum: "le",
      exclusiveMinimum: "gt",
      exclusiveMaximum: "lt",
      pattern: "pattern",
      description: "description",
    } as const;
    for (const [keyword, argument] of Object.entries(mappings)) {
      const constraint: unknown = schema[keyword];
      if (constraint !== undefined)
        constraints.push(
          `${argument}=${pythonLiteral(keyword === "pattern" ? pydanticPattern(String(constraint)) : constraint)}`,
        );
    }
    if (schema.type === "number") constraints.push("allow_inf_nan=False");
    if (schema.anyOf !== undefined || schema.oneOf !== undefined)
      constraints.push('discriminator="type"');
    if (schema.type === "integer")
      value = `_typing.Annotated[${value}, _pydantic.BeforeValidator(_integer)]`;
    if (constraints.length > 0)
      value = `_typing.Annotated[${value}, _pydantic.Field(${constraints.join(", ")})]`;
    return value;
  }
  for (const [name, schema] of Object.entries(documents).sort(
    ([left], [right]) => (left < right ? -1 : left > right ? 1 : 0),
  )) {
    if (
      schema.type === "object" &&
      schema.additionalProperties === false &&
      !schema.$ref
    )
      object(schema, name);
    else
      aliases.push(
        `${name} = _extensions.TypeAliasType(${JSON.stringify(name)}, ${JSON.stringify(type(schema, name))})`,
      );
  }
  return `# @generated by @osdk/internal.modeling. Do not edit.
from __future__ import annotations

import typing as _typing
import typing_extensions as _extensions
import pydantic as _pydantic
from pydantic.experimental.missing_sentinel import MISSING as _MISSING


def _integer(value: object) -> int:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise ValueError("Expected an integer")
    if isinstance(value, float) and (not value.is_integer()):
        raise ValueError("Expected an integer")
    return int(value)


${
  usesInt64
    ? `def _int64(value: object, info: _pydantic.ValidationInfo) -> int:
    if isinstance(value, str):
        if len(value) > 20:
            raise ValueError("Expected an int64 decimal string")
        number = int(value)
        if str(number) != value:
            raise ValueError("Expected a canonical int64 decimal string")
    elif info.mode == "python" and isinstance(value, int) and not isinstance(value, bool):
        number = value
    else:
        raise ValueError("Expected an int64 decimal string")
    if not -(2 ** 63) <= number <= 2 ** 63 - 1:
        raise ValueError("Value is outside signed 64-bit bounds")
    return number


_Int64 = _typing.Annotated[
    _pydantic.StrictInt,
    _pydantic.BeforeValidator(_int64),
    _pydantic.PlainSerializer(str, return_type=str, when_used="json"),
    _pydantic.WithJsonSchema({"type": "string", "format": "int64"}),
]


`
    : ""
}class _Model(_pydantic.BaseModel):
    model_config = _pydantic.ConfigDict(extra="forbid", strict=True, serialize_by_alias=True)


${classes.join("\n\n")}

${aliases.join("\n")}

for _model in [${classNames.join(", ")}]:
    _model.model_rebuild(_types_namespace=globals())
`;
}
