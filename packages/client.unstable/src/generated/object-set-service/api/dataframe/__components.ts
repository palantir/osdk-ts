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
  ObjectSet as _api_ObjectSet,
  ObjectSetContext as _api_ObjectSetContext,
  ObjectTypeId as _api_ObjectTypeId,
  RelationId as _api_RelationId,
} from "../__components.js";

/**
 * SELECT statement compliant with the ANSI SQL standard.
 *
 * It supports the following grammar:
 *
 * [ WITH with_query [, ...] ]
 * SELECT [ ALL | DISTINCT ] select_expression [, ...]
 * [ FROM from_item [, ...] ]
 * [ WHERE condition ]
 * [ GROUP BY [ ALL | DISTINCT ] grouping_element [, ...] ]
 * [ HAVING condition]
 * [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
 * [ ORDER BY expression [ ASC | DESC ] [, ...] ]
 * [ LIMIT { count | ALL } ]
 *
 * where from_item is one of
 * - table_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
 * - from_item join_type from_item
 * [ ON join_condition | USING ( join_column [, ...] ) ]
 * - table_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
 * MATCH_RECOGNIZE pattern_recognition_specification
 * [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
 *
 * and join_type is one of
 * - [ INNER ] JOIN
 * - LEFT [ OUTER ] JOIN
 * - RIGHT [ OUTER ] JOIN
 * - FULL [ OUTER ] JOIN
 * - CROSS JOIN
 *
 * and grouping_element is one of
 * - ()
 * - expression
 * - GROUPING SETS ( ( column [, ...] ) [, ...] )
 * - CUBE ( column [, ...] )
 * - ROLLUP ( column [, ...] )
 */
export type AnsiSqlSelectStatement = string;
export interface DataframeQuery_sql {
  type: "sql";
  sql: SqlDataframeQuery;
}
/**
 * Union of different types of Dataframe queries.
 */
export type DataframeQuery = DataframeQuery_sql;

/**
 * Request for loading a dataframe up to the specified limit. The endpoint does not currently support paging
 * and will stream all the results in the format specified.
 */
export interface GetTopRowsRequest {
  limit: number;
  objectSetContext: _api_ObjectSetContext;
  query: DataframeQuery;
  serializationFormat: SerializationFormat;
}
/**
 * Defines a Join Table link type TableProvider. This is only valid for many to many link types.
 */
export interface LinkTypeTableProvider {
  linkTypeId: _api_RelationId;
}
/**
 * Defines an object set TableProvider restricted to a single object type.
 *
 * Schema of the TableProvider table corresponds to the object type schema with the columns mapped to their
 * API name, along with any WithPropertiesObjectSet runtime derived properties in the request mapped to the
 * specified DerivedPropertiesEntry identifier.
 */
export interface ObjectSetTableProvider {
  objectSet: _api_ObjectSet;
  objectTypeId: _api_ObjectTypeId;
}
/**
 * Serialization format of the response.
 */
export type SerializationFormat = "ARROW";

/**
 * A SQL query that defines the dataframe.
 *
 * Datasources referenced in the query must be part of the tableProviders map.
 *
 * For the schema of a specific datasource please refer to the definition of a corresponding TableProvider subtype.
 */
export interface SqlDataframeQuery {
  sql: SqlSelectStatement;
  tableProviders: Record<TableAlias, TableProvider>;
}
export interface SqlSelectStatement_ansi {
  type: "ansi";
  ansi: AnsiSqlSelectStatement;
}
/**
 * SQL statements union for different dialects.
 */
export type SqlSelectStatement = SqlSelectStatement_ansi;

/**
 * Alias of a specific TableProvider in the SQL statement.
 */
export type TableAlias = string;
export interface TableProvider_objectSet {
  type: "objectSet";
  objectSet: ObjectSetTableProvider;
}

export interface TableProvider_linkType {
  type: "linkType";
  linkType: LinkTypeTableProvider;
}
/**
 * Query in the language of a datasource.
 *
 * Each TableProvider subtype must specify an output schema that could be referenced in the DataframeQuery.
 */
export type TableProvider = TableProvider_objectSet | TableProvider_linkType;
