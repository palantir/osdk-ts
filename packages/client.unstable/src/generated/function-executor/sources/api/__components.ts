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

/**/
export type Alias = string;
export type AuthHeaderName = string;
export type AuthHeaderValue = string;

/**
 * Untyped version of api-gateway ConnectionConfiguration defined here:
 * https://github.palantir.build/foundry/api-gateway/blob/560293eb3cf034bc5a2ad224b3ae2d2745e0b87c/api-gateway-api-v2/src/main/omniapi/connectivity-api.yml#L169-L173
 */
export type ConnectionConfigurationUntyped = any;
export type ConnectionId = string;
export type NetworkEgressPolicyId = string;
export type PemCertificate = string;
export type PemPrivateKey = string;
export type QueryParamName = string;
export type QueryParamValue = string;

/**
 * The non-placeholder value of a secret, this will always be the real value of the secret.
 */
export type RealSecretValue = string;
export interface ResolvedClientCertificate {
  pemCertificate: PemCertificate;
  pemPrivateKey: PemPrivateKey;
}
export interface ResolvedHttpConnectionConfig {
  authHeaders: Record<AuthHeaderName, AuthHeaderValue>;
  queryParameters: Record<QueryParamName, QueryParamValue>;
  url: string;
}
/**
 * An untyped wrapper for the ResolvedSourceCredentials object defined at
 * https://github.palantir.build/foundry/magritte/blob/94b442dab656cdab8ac63b5d120ea8c542d21f6a/magritte-coordinator-api/src/main/conjure/source-runtime.yml#L68
 */
export type ResolvedSourceCredentialsUntyped = any;
export type SecretApiName = string;
export type SourceApiName = string;
export interface SourceConnectionParameters {
  apiName?: SourceApiName | null | undefined;
  clientCertificate?: ResolvedClientCertificate | null | undefined;
  httpConnections: Record<ConnectionId, ResolvedHttpConnectionConfig>;
  proxyToken?: string | null | undefined;
  resolvedCredentials?: ResolvedSourceCredentialsUntyped | null | undefined;
  secrets: Record<SecretApiName, RealSecretValue>;
  serverCertificates: Record<Alias, PemCertificate>;
}
export interface SourceConnections {
  egressProxyToken?: string | null | undefined;
  sourceConfigurations: Record<
    SourceId,
    ConnectionConfigurationUntyped | null | undefined
  >;
  sourceConnectionParameters: Record<SourceId, SourceConnectionParameters>;
  validNetworkEgressPolicies: Record<SourceId, Array<NetworkEgressPolicyId>>;
}
export type SourceId = string;
