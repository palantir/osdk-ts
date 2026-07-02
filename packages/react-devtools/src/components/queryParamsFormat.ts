/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";

const SEPARATOR = " · ";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function formatValue(value: unknown): string {
  const json = JSON.stringify(value);
  return json === undefined ? "" : json;
}

function isOperatorObject(value: unknown): value is Record<string, unknown> {
  if (!isRecord(value)) {
    return false;
  }
  const keys = Object.keys(value);
  return keys.length > 0 && keys.every((key) => key.startsWith("$"));
}

function formatSingleOperator(
  field: string,
  op: string,
  value: unknown
): string {
  switch (op) {
    case "$eq": {
      return `${field} = ${formatValue(value)}`;
    }
    case "$ne": {
      return `${field} != ${formatValue(value)}`;
    }
    case "$gt": {
      return `${field} > ${formatValue(value)}`;
    }
    case "$gte": {
      return `${field} >= ${formatValue(value)}`;
    }
    case "$lt": {
      return `${field} < ${formatValue(value)}`;
    }
    case "$lte": {
      return `${field} <= ${formatValue(value)}`;
    }
    case "$isNull": {
      return value === true ? `${field} is null` : `${field} is not null`;
    }
    case "$contains": {
      return `${field} contains ${formatValue(value)}`;
    }
    case "$startsWith": {
      return `${field} startsWith ${formatValue(value)}`;
    }
    case "$in": {
      return `${field} in ${formatValue(value)}`;
    }
    default: {
      return `${field} ${op} ${formatValue(value)}`;
    }
  }
}

function formatOperator(
  field: string,
  operator: Record<string, unknown>
): string {
  const parts: string[] = [];
  for (const op of Object.keys(operator)) {
    parts.push(formatSingleOperator(field, op, operator[op]));
  }
  return parts.join(", ");
}

function joinSubClauses(clauses: unknown[], joiner: string): string {
  const rendered = clauses
    .map((clause) => formatWhereClause(clause))
    .filter(Boolean);
  return rendered.join(joiner);
}

function formatWhereClause(where: unknown): string {
  if (!isRecord(where)) {
    return "";
  }
  if (Array.isArray(where.$and)) {
    return joinSubClauses(where.$and, " and ");
  }
  if (Array.isArray(where.$or)) {
    return joinSubClauses(where.$or, " or ");
  }
  if (where.$not !== undefined) {
    const inner = formatWhereClause(where.$not);
    return inner ? `not (${inner})` : "";
  }
  const parts: string[] = [];
  for (const key of Object.keys(where)) {
    const value = where[key];
    if (isOperatorObject(value)) {
      parts.push(formatOperator(key, value));
    } else {
      parts.push(`${key} = ${formatValue(value)}`);
    }
  }
  return parts.join(", ");
}

function formatOrderBy(orderBy: unknown): string {
  if (!isRecord(orderBy)) {
    return "";
  }
  const parts: string[] = [];
  for (const field of Object.keys(orderBy)) {
    const direction = orderBy[field];
    if (typeof direction === "string") {
      parts.push(`${field} ${direction}`);
    } else {
      parts.push(field);
    }
  }
  return parts.join(", ");
}

function formatAggregate(aggregate: unknown): string {
  if (typeof aggregate === "string") {
    return aggregate;
  }
  if (!isRecord(aggregate)) {
    return "";
  }
  return Object.keys(aggregate).join(", ");
}

function formatObjectSetOperations(operations: unknown[]): string {
  const labels = operations.map((operation) => {
    if (isRecord(operation) && typeof operation.type === "string") {
      return operation.type;
    }
    return "operation";
  });
  return labels.join(", ");
}

export function formatQueryParams(params: QueryParams): string {
  switch (params.type) {
    case "object": {
      return params.primaryKey ? `pk ${params.primaryKey}` : "";
    }
    case "list": {
      const parts: string[] = [];
      const whereClause = formatWhereClause(params.where);
      if (whereClause) {
        parts.push(`where ${whereClause}`);
      }
      const orderByClause = formatOrderBy(params.orderBy);
      if (orderByClause) {
        parts.push(`orderBy ${orderByClause}`);
      }
      if (params.pageSize !== undefined) {
        parts.push(`pageSize ${params.pageSize}`);
      }
      return parts.join(SEPARATOR);
    }
    case "aggregation": {
      const parts: string[] = [];
      const whereClause = formatWhereClause(params.where);
      if (whereClause) {
        parts.push(`where ${whereClause}`);
      }
      const aggregateClause = formatAggregate(params.aggregate);
      if (aggregateClause) {
        parts.push(`aggregate ${aggregateClause}`);
      }
      return parts.join(SEPARATOR);
    }
    case "objectSet": {
      return formatObjectSetOperations(params.operations);
    }
    case "action": {
      return "";
    }
    case "links": {
      return "";
    }
    default: {
      return "";
    }
  }
}

function getTypeName(params: QueryParams): string {
  switch (params.type) {
    case "object":
    case "list":
    case "aggregation": {
      return params.objectType;
    }
    case "action": {
      return params.actionName;
    }
    case "links": {
      return `${params.sourceObject} → ${params.linkName}`;
    }
    case "objectSet": {
      return params.baseObjectSet;
    }
    default: {
      return "";
    }
  }
}

export function formatHookSignature(binding: ComponentHookBinding): string {
  const typeName = getTypeName(binding.queryParams);
  return [typeName, formatQueryParams(binding.queryParams)]
    .filter(Boolean)
    .join(SEPARATOR);
}
