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
  ApolloSecretName as _api_ApolloSecretName,
  EdgeMagritteSourceConfig as _api_EdgeMagritteSourceConfig,
  EdgeMagritteTaskConfig as _api_EdgeMagritteTaskConfig,
  InputBlockSetShapeId as _api_InputBlockSetShapeId,
  MarkingId as _api_MarkingId,
  ResolvedBlockSetInputShape as _api_ResolvedBlockSetInputShape,
} from "../../api/__components.js";

/**
 * Like installManager.ManagedInstallationConfigurationV0 but with Apollo-specific information. This is the
 * expected shape of the configuration overrides for a Foundry product entity in Apollo.
 */
export interface ApolloManagedInstallationConfigurationV0 {
  cbacMarkings: Array<_api_MarkingId>;
  inputMapping: Record<
    _api_InputBlockSetShapeId,
    _api_ResolvedBlockSetInputShape
  >;
  secretInputMapping: Record<
    _api_InputBlockSetShapeId,
    SecretResolvedBlockSetInputShape
  >;
}
export interface SecretResolvedBlockSetInputShape_edgePipelineMagritteSource {
  type: "edgePipelineMagritteSource";
  edgePipelineMagritteSource:
    SecretResolvedEdgePipelineMagritteSourceInputShape;
}
/**
 * An input shape that can be resolved into a blockset.ResolvedBlockSetInputShape by configuring
 * an id.ApolloSecretName where a credential rid would normally be expected.
 *
 * Only supports edge pipeline magritte sources -- do not update this union. This shape will be deprecated
 * once edge migrates to using normal magritte sources.
 */
export type SecretResolvedBlockSetInputShape =
  SecretResolvedBlockSetInputShape_edgePipelineMagritteSource;

/**
 * Like ResolvedEdgePipelineMagritteSourceInputShape except requires a secret name that will be resolved to
 * a credential id.
 */
export interface SecretResolvedEdgePipelineMagritteSourceInputShape {
  config: _api_EdgeMagritteSourceConfig;
  secretName: _api_ApolloSecretName;
  taskConfig?: _api_EdgeMagritteTaskConfig | null | undefined;
}
