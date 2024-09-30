/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

/**
 * A string identifier used to map struct property fields to their respective base types and constraints.
 * This identifier is intentionally generically typed. Constraints used on ontology types should interpret the
 * identifier as a struct field API name and pipeline builder should interpret the identifier as a dataset
 * struct column field name.
 */
export type StructFieldIdentifier = string;
