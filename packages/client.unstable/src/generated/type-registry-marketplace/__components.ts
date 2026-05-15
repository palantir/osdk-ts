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

/**
 * The data needed to package a specific version of a given value type.
 */
export interface OntologyIrPackagedValueType {
  baseType: any;
  constraints: Array<any>;
  exampleValues: Array<any>;
  version: any;
}
/**
 * The data needed to package the metadata of a given value type at a specific version.
 */
export interface OntologyIrPackagedValueTypeMetadata {
  apiName: any;
  displayMetadata: any;
  packageNamespace: string;
  status: any;
}
/**
 * The data needed to package a given value type at all versions available on the packaging stack.
 */
export interface OntologyIrValueTypeBlockData {
  valueTypes: Array<OntologyIrValueTypeBlockDataEntry>;
}
/**
 * The data needed to package a given value type at all versions available on the packaging stack.
 */
export interface OntologyIrValueTypeBlockDataEntry {
  metadata: OntologyIrPackagedValueTypeMetadata;
  versions: Array<OntologyIrPackagedValueType>;
}
/**
 * The data needed to package a specific version of a given value type.
 */
export interface PackagedValueType {
  baseType?: any | null | undefined;
  constraints: Array<any>;
  exampleValues: Array<any>;
  version: any;
}
/**
 * The data needed to package the metadata of a given value type at a specific version.
 */
export interface PackagedValueTypeMetadata {
  apiName: any;
  baseType: any;
  displayMetadata: any;
  status: any;
}
/**
 * The data needed to package a given value type at all versions available on the packaging stack.
 */
export interface ValueTypeBlockData {
  metadata: PackagedValueTypeMetadata;
  versions: Array<PackagedValueType>;
}
