/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
 * A string indicating the API Name to use for the given Ontology. This API name will be used to access the
 * Ontology in programming languages. It is not guaranteed to be unique across Ontologies. It must adhere
 * to the following rules:
 * - Must only contain the following ASCII characters: a-z and 0-9.
 * - Must not start with a number.
 * - Must have a maximum length of 100.
 * - Must be kebab-case.
 * - Must not be one of the reserved keywords: "ontology", "object", "property", "link", "relation", "rid", "primarykey", "typeid", "ontologyobject".
 */
export type OntologyApiName = string;
