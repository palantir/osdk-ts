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

import type {
  ApolloSecretAndKeyName as _api_ApolloSecretAndKeyName,
  ApolloSecretName as _api_ApolloSecretName,
  EdgeMagritteSourceConfig as _api_EdgeMagritteSourceConfig,
  EdgeMagritteTaskConfig as _api_EdgeMagritteTaskConfig,
  EnrollmentRid as _api_EnrollmentRid,
  InputBlockSetShapeId as _api_InputBlockSetShapeId,
  InputShapeResolver as _api_InputShapeResolver,
  MarkingId as _api_MarkingId,
  NamespaceRid as _api_NamespaceRid,
  ResolvedBlockSetInputShape as _api_ResolvedBlockSetInputShape,
} from "../../api/__components.js";

/**
 * Like installManager.ManagedInstallationConfigurationV0 but with Apollo-specific information. This is the
 * expected shape of the configuration overrides for a Foundry product entity in Apollo.
 *
 * String values support inline templates resolved against the target namespace's enrollment.
 * Templates can appear inside any string value in this config (including `inputMapping`,
 * `presetInputMapping`, and `secretInputMapping`).
 * * `{{default_hostname}}` — the single organization's primary hostname; fails if the enrollment has
 * zero or more than one organization.
 * * `{{default_hostname(organizationName:"Display Name")}}` — the primary hostname of the organization
 * with that exact display name (case-sensitive; quotes required). Please note that the organization name
 * must be safe for the environment that managed the configuration.
 * Whitespace inside the braces and around the arguments is optional.
 */
export interface ApolloManagedInstallationConfigurationV0 {
  cbacMarkings: Array<_api_MarkingId>;
  inputMapping: Record<
    _api_InputBlockSetShapeId,
    _api_ResolvedBlockSetInputShape
  >;
  presetInputMapping: Record<
    _api_InputBlockSetShapeId,
    _api_InputShapeResolver
  >;
  secretInputMapping: Record<
    _api_InputBlockSetShapeId,
    SecretResolvedBlockSetInputShape
  >;
}
/**
 * Configuration for a Universal Foundry Product entity. Contains the standard Apollo managed config
 * (applied identically to every sub-installation across all namespaces) plus Universal-specific
 * namespace targeting fields.
 *
 * Products with namespace-dependent manually-filled inputs are NOT compatible with Universal mode -
 * all sub-installations receive the same inputMapping.
 */
export interface ApolloUniversalInstallationConfigurationV0 {
  enrollmentAllowlist: Array<_api_EnrollmentRid>;
  enrollmentDenylist: Array<_api_EnrollmentRid>;
  managedConfig: ApolloManagedInstallationConfigurationV0;
  namespaceDenylist: Array<_api_NamespaceRid>;
}
export interface SecretResolvedBlockSetInputShape_edgePipelineMagritteSource {
  type: "edgePipelineMagritteSource";
  edgePipelineMagritteSource: SecretResolvedEdgePipelineMagritteSourceInputShape;
}

export interface SecretResolvedBlockSetInputShape_markings {
  type: "markings";
  markings: SecretResolvedMarkingsInputShape;
}

export interface SecretResolvedBlockSetInputShape_namedCredential {
  type: "namedCredential";
  namedCredential: SecretResolvedNamedCredentialInputShape;
}
/**
 * An Apollo secret-backed input shape that can be resolved into a blockset.ResolvedBlockSetInputShape.
 */
export type SecretResolvedBlockSetInputShape =
  | SecretResolvedBlockSetInputShape_edgePipelineMagritteSource
  | SecretResolvedBlockSetInputShape_markings
  | SecretResolvedBlockSetInputShape_namedCredential;

/**
 * Like ResolvedEdgePipelineMagritteSourceInputShape except requires a secret name that will be resolved to
 * a credential id.
 */
export interface SecretResolvedEdgePipelineMagritteSourceInputShape {
  config: _api_EdgeMagritteSourceConfig;
  secretName: _api_ApolloSecretName;
  taskConfig?: _api_EdgeMagritteTaskConfig | null | undefined;
}
/**
 * Like MarkingsShape but with a comma-delineated set of markings backed by an Apollo secret.
 */
export type SecretResolvedMarkingsInputShape = _api_ApolloSecretAndKeyName;

/**
 * A secret-backed named credential input shape. References an Apollo multi-key secret by name.
 * The secret work operator creates a backing named credential from the Apollo secret, and during
 * resolution the credential RID is passed through as a ResolvedInputShape.namedCredential.
 */
export interface SecretResolvedNamedCredentialInputShape {
  secretName: _api_ApolloSecretName;
}
/**
 * The reason a namespace was not attempted in a Universal plan.
 */
export type UniversalNamespaceIgnoreReason =
  | "NAMESPACE_EXPLICITLY_DENIED"
  | "ENROLLMENT_EXPLICITLY_DENIED"
  | "ENROLLMENT_NOT_ALLOWED"
  | "NO_OWNING_ENROLLMENT"
  | "NAMESPACE_TRASHED"
  | "INVALID_ONTOLOGY_COUNT"
  | "ALREADY_ON_TARGET_VERSION_AND_CONFIG";
